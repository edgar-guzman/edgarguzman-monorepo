import { updateStoreSchema } from '@edgarguzman/lib/schema/store';
import type { ParamsProps } from '@edgarguzman/types/params';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { trpc } from '@/trpc/server';

export async function PATCH(request: NextRequest, params: ParamsProps) {
    try {
        let body = await updateStoreSchema.parseAsync(await request.json());

        if (!body?.userId)
            return new NextResponse('User Session Id is required', {
                status: 400
            });

        if (!body?.title)
            return new NextResponse('Title is required', {
                status: 400
            });

        if (!body?.slug)
            return new NextResponse('Slug is required', {
                status: 400
            });

        if (!params?.storeId)
            return new NextResponse('Store Id is required', {
                status: 400
            });

        let updation = await trpc.store.updateMany.mutate({
            id: params.storeId,
            userId: body.userId,
            title: body.title
        });

        return NextResponse.json(
            {
                message: 'Patching a Store',
                updation
            },
            {
                status: 200
            }
        );
    } catch (error) {
        let err = error as Error;

        console.log('[STORE_PATCH]', err.message);

        return new NextResponse('Internal Error', {
            status: 500
        });
    }
}

export async function DELETE(request: NextRequest, params: ParamsProps) {
    try {
        let body = await updateStoreSchema.parseAsync(await request.json());

        if (!body?.userId)
            return new NextResponse('User Id is required', {
                status: 400
            });

        if (!body?.deleted)
            return new NextResponse('Deleted User is required', {
                status: 400
            });

        if (!params.storeId)
            return new NextResponse('Store Id is required', {
                status: 400
            });

        let deletion = await trpc.store.deleteMany.mutate({
            id: params.storeId,
            userId: body.userId,
            deleted: body.deleted
        });

        return NextResponse.json(
            {
                message: 'Deleting User',
                deletion
            },
            {
                status: 200
            }
        );
    } catch (error) {
        let err = error as Error;

        console.log('[STORE_DELETE]', err.message);

        return new NextResponse('Internal Error', {
            status: 500
        });
    }
}
