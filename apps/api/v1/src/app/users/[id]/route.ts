import type { ParamsProps } from '@edgarguzman/types/params';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { trpc } from '@/trpc/server';

export async function GET(
  request: NextRequest,
  params: ParamsProps
) {
  try {
        let list = await trpc.user.find.query({
          id: params.id ?? ''
        });
      
        return NextResponse.json(
          {
              message: 'Getting a Single User',
              list
          },
          {
              status: 200,
          }
      );
  } catch (error) {
      let err = error as Error;

      console.error('[USER_GET]', err.message);
      
      return new NextResponse('Internal Error', {
          status: 500
      });
  }
}
