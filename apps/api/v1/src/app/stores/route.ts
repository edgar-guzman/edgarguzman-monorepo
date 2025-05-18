import { createStoreParams } from '@edgarguzman/lib/schema/store';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { trpc } from '@/trpc/server';

export async function POST(request: NextRequest) {
    try {
        let body = await createStoreParams.parseAsync(await request.json());

        if (!body?.title)
            return new NextResponse('Title is required', {
                status: 400
            });

        if (!body?.slug)
            return new NextResponse('Slug is required', {
                status: 400
            });

        let creation = await trpc.store.create.mutate({
            title: body.title,
            slug: body.slug
        });

        return NextResponse.json(
            {
                message: 'Created Store Successfully',
                creation
            },
            {
                status: 200
            },
        );
    } catch (error) {
        let err = error as Error;

        console.log(`[STORES_POST] ${err}`);

        return new NextResponse('Internal Error', {
            status: 500
        });
    }
}
