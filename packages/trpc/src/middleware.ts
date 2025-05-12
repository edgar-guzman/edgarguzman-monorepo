import { Role } from '@edgarguzman/prisma';
import * as trpc from '@trpc/server';

import { middleware, rpc } from './rpc';

export const timingMiddleware = middleware(async ({ next, path }) => {
    let start = Date.now();

    if (rpc._config.isDev) {
        // artificial delay in dev
        let waitMs = Math.floor(Math.random() * 400) + 100;
        await new Promise((resolve) => setTimeout(resolve, waitMs));
    }

    let result = await next();

    let end = Date.now();
    console.log(`[TRPC] ${path} took ${end - start}ms to execute`);

    return result;
});

export const userMiddleware = middleware(({ ctx, next }) => {
    if (!ctx.session || !ctx.session.user)
        throw new trpc.TRPCError({
            code: 'UNAUTHORIZED',
        });

    return next({
        ctx: {
            ...ctx,
            session: {
                ...ctx.session,
                user: ctx.session.user,
            },
        },
    });
});

export const adminMiddleware = userMiddleware.unstable_pipe(async ({ ctx, next }) => {
    let { role } =
        (await ctx.prisma.user.findFirst({
            where: {
                id: ctx.session.user.id,
            },
            select: {
                role: true,
            },
        })) || {};

    if (role !== Role.Admin)
        throw new trpc.TRPCError({
            code: 'UNAUTHORIZED',
        });

    return next({
        ctx,
    });
});
