import { NextResponse } from 'next/server';

import { trpc } from '@/trpc/server';

export async function GET() {
  try {
        let creation = await trpc.store.create.mutate({
            title: 'CRON TEMP',
            slug: 'cron-temp'
        });

        let deletion = await trpc.store.delete.mutate({
            id: creation.id
        });

        return NextResponse.json(
            {
                message: 'CRON Keep Alive Route',
                deletion
            },
            {
                status: 200
            },
        );
    } catch (error) {
        let err = error as Error;

        console.error('[CRON_GET]', err.message);

        return new NextResponse('Internal Error', {
            status: 500
        });
    }
}
