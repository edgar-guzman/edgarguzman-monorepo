import { userSubscribedSchema } from '@edgarguzman/lib/schema/user';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { trpc } from '@/trpc/server';

export async function PUT(request: NextRequest) {
    try {
        let body = await userSubscribedSchema.parseAsync(await request.json());

        if (!body.id)
            return new NextResponse('Id is required', {
                status: 400
            });

        if (!body.subscribed)
            return new NextResponse('Subscribed is required', {
                status: 400
            });

        let updation = await trpc.user.updateSubscribed.mutate({
            id: body.id,
            subscribed: body.subscribed
        });

        return NextResponse.json(
            {
                message: 'Unsubscribed User Successfully',
                updation
            },
            {
                status: 200
            }
        );
    } catch (error) {
        let err = error as Error;

        console.error('[UNSUBSCRIBED_PUT]', err?.message);

        return new NextResponse('Internal Error', {
            status: 500
        });
    }
}
