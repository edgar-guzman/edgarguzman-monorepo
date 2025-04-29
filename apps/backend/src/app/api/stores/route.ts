import { createStoreSchema } from '@edgarguzman/lib/schema/store';
import { prisma } from '@edgarguzman/prisma';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function RouteLayout(request: NextRequest) {
    try {
        let body = await createStoreSchema.parseAsync(await request.json());

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

        let creation = await prisma.store.create({
            data: {
                title: body?.title,
                slug: body?.slug,
                userId: body?.userId,
            },
        });

        return NextResponse.json(
            {
                message: creation,
            },
            {
                status: 200,
            },
        );
    } catch (error) {
        let err = error as Error;

        console.log(`[STORES_POST] ${err}`);

        return new NextResponse('Internal Error', {
            status: 500,
        });
    }
}
