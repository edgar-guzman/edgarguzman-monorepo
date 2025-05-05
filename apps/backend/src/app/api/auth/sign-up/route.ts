import { createUserParams } from '@edgarguzman/lib/schema/user';
import { prisma } from '@edgarguzman/prisma';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        let body = await createUserParams.parseAsync(await request.json());

        if (!body.name)
            return new NextResponse('Name is required', {
                status: 400
            });

        if (!body.email)
            return new NextResponse('Email Address is required', {
                status: 400
            });

        if (!body.image)
            return new NextResponse('Image is required', {
                status: 400
            });

        if (!body.phone)
            return new NextResponse('Phone Number is required', {
                status: 400
            });

        if (!body.password)
            return new NextResponse('Password is required', {
                status: 400
            });

        if (!body.deleted)
            return new NextResponse('Deleted is required', {
                status: 400
            });

        if (!body.terms)
            return new NextResponse('Terms is required', {
                status: 400
            });

<<<<<<< HEAD
        // if (!body.subscribed)
        //     return new NextResponse('Subscribed is required', {
        //         status: 400
        //     });

=======
>>>>>>> d7915586ef6783feb872b32577e2822ad26ec8a8
        if (!body.published)
            return new NextResponse('Published is required', {
                status: 400
            });

        if (!body.role)
            return new NextResponse('Role is required', {
                status: 400
            });

            let creation = await prisma.user.create({
                data: {
                    name: body.name,
                    email: body.email,
                    image: body.image,
                    phone: body.phone,
                    password: body.password,
                    deleted: body.deleted,
                    terms: body.terms,
                    published: body.published,
<<<<<<< HEAD
                    // subscribed: body.subscribed,
=======
>>>>>>> d7915586ef6783feb872b32577e2822ad26ec8a8
                    role: 'User',
                    createdAt: new Date(),
                    updatedAt: null
                }
            });

        return NextResponse.json(
            {
                creation,
                message: 'Created User Successfully'
            },
            {
                status: 200
            }
        );
    } catch (error) {
        let err = error as Error;

        console.error('[SIGN_UP_POST]', err?.message);

        return new NextResponse('Internal Error', {
            status: 500
        });
<<<<<<< HEAD
    }
=======
    };
>>>>>>> d7915586ef6783feb872b32577e2822ad26ec8a8
}
