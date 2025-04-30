import { updateStoreSchema } from '@edgarguzman/lib/schema/store';
import { prisma } from '@edgarguzman/prisma';
import type { ParamsProps } from '@edgarguzman/types/params';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

interface Props {
    params: ParamsProps;
}

export async function PATCH(request: NextRequest, { params }: Props) {
    try {
        let body = await updateStoreSchema.parseAsync(await request.json());

        if (!body?.userId)
            return new NextResponse('User Id is required', {
                status: 400,
            });

        if (!body?.title)
            return new NextResponse('Title is required', {
                status: 400,
            });

        if (!body?.slug)
            return new NextResponse('Slug is required', {
                status: 400,
            });

        let updation = await prisma.store.updateMany({
            where: {
                id: params?.storeId,
                userId: body?.userId,
            },
            data: {
                title: body?.title,
            },
        });

        return NextResponse.json(
            {
                message: updation,
            },
            {
                status: 200,
            },
        );
    } catch (error) {
        let err = error as Error;

        console.log('[STORE_PATCH]', err.message);

        return new NextResponse('Internal Error', {
            status: 500,
        });
    }
}

export async function DELETE(request: NextRequest, { params }: Props) {
    try {
        let body = await updateStoreSchema.parseAsync(await request.json());

        if (!body?.userId)
            return new NextResponse('User Id is required', {
                status: 400,
            });

        if (!params.storeId)
            return new NextResponse('Store Id is required', {
                status: 400,
            });

        let deletion = await prisma.store.deleteMany({
            where: {
                id: params.storeId,
                userId: body.userId,
            },
        });

        return NextResponse.json(
            {
                message: deletion,
            },
            {
                status: 200,
            },
        );
    } catch (error) {
        let err = error as Error;

        console.log('[STORE_DELETE]', err.message);

        return new NextResponse('Internal Error', {
            status: 500,
        });
    }
}
