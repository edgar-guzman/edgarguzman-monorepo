import { appRouter, createTRPCContext } from '@edgarguzman/trpc';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import type { NextRequest } from 'next/server';

export async function createContext(request: NextRequest) {
    return await createTRPCContext(request);
}

export async function handler(request: NextRequest) {
    return await fetchRequestHandler({
        endpoint: '/api/trpc',
        req: request,
        router: appRouter,
        async createContext() {
            return await createContext(request)
        },
        onError:
            process.env.NODE_ENV === 'development'
                ? ({ path, error }) => {
                    console.log('Error in tRPC handler');

                    console.error(
                      `❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`
                    );
                  }
                : undefined
    });
}

export { handler as GET, handler as POST };
