import { prisma } from '@edgarguzman/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        let list = await prisma.product.findMany();

        return NextResponse.json(
            {
                message: list
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        let err = error as Error;

        console.error('[PRODUCTS_GET]', err.cause);

        return new NextResponse('Internal Error', {
            status: 500,
        });
    }
}
