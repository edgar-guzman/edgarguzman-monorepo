import { NextResponse } from 'next/server';

import { trpc } from '@/trpc/server';

export async function GET() {
    try {
        let list = await trpc.user.all.query();

        return NextResponse.json(
            {
                message: 'Getting All Users',
                list
            },
            {
                status: 200
            },
        );
    } catch (error) {
        let err = error as Error;

        console.error('[USERS_GET]', err.message);

        return new NextResponse('Internal Error', {
            status: 500
        });
    }
}
