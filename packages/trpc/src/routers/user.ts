import { inferRouterOutputs } from '@trpc/server';
import { z } from 'zod';

import { createUserParams, updateUserSchema, userIdSchema } from '../../../lib/src/schema/user';
import { publicProcedure } from '../procedure';
import { router } from '../rpc';

export const userRouter = router({
    all: publicProcedure.query(async ({ ctx }) => {
        return await ctx.prisma.user.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });
    }),

    find: publicProcedure
        .input(userIdSchema)
        .query(async ({ ctx, input }) => {
            return await ctx.prisma.user.findFirst({
                where: {
                    id: input.id,
                },
            });
        }),

    findWithoutId: publicProcedure.query(async ({ ctx, input }) => {
            return await ctx.prisma.user.findFirst();
        }),

    create: publicProcedure
        .input(createUserParams)
        .mutation(async ({ ctx, input }) => {
            return await ctx.prisma.user.create({
                data: {
                    name: input.name,
                    email: input.email,
                    password: input.password,
                    terms: input.terms,
                    createdAt: new Date(),
                    updatedAt: null,
                },
            });
        }),

    update: publicProcedure
        .input(
            updateUserSchema
        )
        .mutation(async ({ ctx, input }) => {
            return await ctx.prisma.user.update({
                where: {
                    id: input.id,
                },
                data: {
                    name: input.name,
                    email: input.email,
                    password: input.password,
                    createdAt: undefined,
                    updatedAt: new Date(),
                },
            });
        }),

    delete: publicProcedure
        .input(
            userIdSchema.extend({
                deleted: z.boolean().default(false),
            }),
        )
        .mutation(async ({ ctx, input }) => {
            return await ctx.prisma.user.update({
                where: {
                    id: input.id,
                },
                data: {
                    deleted: input.deleted,
                    createdAt: undefined,
                    updatedAt: new Date(),
                },
            });
        }),
});

type UserRouterOutput = inferRouterOutputs<typeof userRouter>;

export type UsersResponse = UserRouterOutput['all'];
export type FindUserResponse = UserRouterOutput['find'];
export type CreateUserResponse = UserRouterOutput['create'];
export type UpdateUserResponse = UserRouterOutput['update'];
export type DeleteUserResponse = UserRouterOutput['delete'];
