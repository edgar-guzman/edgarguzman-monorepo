import { createUserParams } from '@edgarguzman/lib/schema/user';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { trpc } from '@/trpc/server';

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

        if (!body.terms)
            return new NextResponse('Terms is required', {
                status: 400
            });

        if (!body.role)
            return new NextResponse('Role is required', {
                status: 400
            });

        let creation = await trpc.user.create.mutate({
            name: body.name,
            email: body.email,
            image: body.image,
            phone: body.phone,
            password: body.password,
            terms: body.terms
        });

        return NextResponse.json(
            {
                message: 'Created User Successfully',
                creation
            },
            {
                status: 200
            },
        );
    } catch (error) {
        let err = error as Error;

        console.error('[SIGN_UP_POST]', err.message);

        return new NextResponse('Internal Error', {
            status: 500
        });
    }
}
