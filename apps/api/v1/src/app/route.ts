import { NextResponse } from 'next/server';

export async function GET() {
    try {
        return NextResponse.json(
            {
                message: 'Welcome to Edgar Guzman API'
            },
            {
                status: 200
            },
        );
    } catch (error) {
        let err = error as Error;

        console.error('[ROUTE_GET]', err.message);

        return new NextResponse('Internal Error', {
            status: 500
        });
    }
}
