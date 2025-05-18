import { NextResponse } from 'next/server';

import { trpc } from '@/trpc/server';

export async function GET() {
    try {
        let list = await trpc.health.check.query();

        return NextResponse.json(
            {
                message: 'Checking Up',
                list
            },
            {
                status: 200
            },
        );
    } catch (error) {
        let err = error as Error;

        console.error('[HEALTH_GET]', err.message);

        return new NextResponse('Internal Error', {
            status: 500
        });
    }
}
