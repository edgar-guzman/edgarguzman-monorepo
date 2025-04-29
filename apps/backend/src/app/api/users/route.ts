import { prisma } from '@edgarguzman/prisma';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        let list = await prisma.user.findMany();

        return NextResponse.json(
            {
                message: list
            },
            {
                status: 200,
            }
        )
    } catch (error) {
        let err = error as Error;

        console.error('[USERS_GET]', err.message);

        return new NextResponse('Internal Error', {
            status: 500,
        });
    }
}

// Action to create
export async function POST(request: NextRequest) {
    try {
        let { name, email } = await request.json();
    
        let creation = await prisma.user.create({
                data: {
                    name,
                    email,
                },
        });
    
        return NextResponse.json(
            {
                message: creation,
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        let err = error as Error;

        console.error('[USERS_POST]', err.message);

        return new NextResponse('Internal Error', {
            status: 500,
        });
    }
}

// Action to delete
export async function DELETE(request: NextRequest) {
    try {
        let url = new URL(request.url).searchParams;
    
        let deletion = await prisma.user.delete({
            where: {
                id: url.get('id') ?? '',
            },
        });
    
        if (!deletion) {
            return NextResponse.json(
                {
                    message: 'Error',
                }
            );
        }
    
        return NextResponse.json(
            {
                message: deletion,
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        let err = error as Error;

        console.error('[USERS_DELETE]', err.message);

        return new NextResponse('Internal Error', {
            status: 500,
        });
    }
}

// Action to update or edit
export async function PUT(request: NextRequest) {
    try {
        let { id, name, email } = await request.json();
    
        let updation = await prisma.user.update({
                where: {
                    id: id,
                },
    
                data: {
                    name,
                    email,
                },
        });
    
        return NextResponse.json(
            {
                message: updation,
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        let err = error as Error;

        console.error('[USERS_PUT]', err.message);

        return new NextResponse('Internal Error', {
            status: 500,
        });
    }
}
