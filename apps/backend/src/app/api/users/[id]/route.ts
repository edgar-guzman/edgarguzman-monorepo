import { prisma } from '@edgarguzman/prisma';
import type { ParamsProps } from '@edgarguzman/types/params';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  props: { params: ParamsProps }
) {
try {
      let list = await prisma.user.findUnique({
        where: {
          id: props.params.id ?? '',
        },
      });
    
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

    console.error('[USER_GET]', err.message);
    
    return new NextResponse('Internal Error', {
        status: 500,
    });
}
}
