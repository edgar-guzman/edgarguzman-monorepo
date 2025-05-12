import { initTRPC } from '@trpc/server';
import { SuperJSON } from 'superjson';
import { z } from 'zod';

import { Context } from './create-context';

export const rpc = initTRPC.context<Context>().create({
    transformer: SuperJSON,
    errorFormatter({ shape, error }) {
        return {
            ...shape,
            data: {
                ...shape.data,
                zodError:
                    error.cause instanceof z.ZodError
                        ? error.cause.flatten()
                        : null,
            },
        };
    },
});

export const router = rpc.router;

export const procedure = rpc.procedure;

export const middleware = rpc.middleware;

export const mergeRouters = rpc.mergeRouters;
