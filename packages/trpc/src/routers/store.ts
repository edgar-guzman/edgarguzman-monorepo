import { inferRouterOutputs } from '@trpc/server';
import { z } from 'zod';

import { createStoreParams, storeIdSchema, updateStoreSchema } from '../../../lib/src/schema/store';
import { publicProcedure } from '../procedure';
import { router } from '../rpc';

export const storeRouter = router({
    all: publicProcedure.query(async ({ ctx }) => {
        return await ctx.prisma.store.findMany()
    }),

    find: publicProcedure
        .input(storeIdSchema)
        .query(async ({ ctx, input }) => {
            return await ctx.prisma.store.findFirst({
                where: {
                    id: input.id,
                },
            });
        }),

    create: publicProcedure
        .input(createStoreParams)
        .mutation(async ({ ctx, input }) => {
            return await ctx.prisma.store.create({
                data: {
                    title: input.title,
                    slug: input.slug,
                    description: input.description,
                    image: input.image,
                    deleted: input.deleted,
                    archived: input.archived,
                    // published: input.published,
                    createdAt: new Date(),
                    updatedAt: null,
                    users: {
                        connect: {
                            id: ctx.session?.user?.id
                        }
                    },
                },
            });
        }),

    update: publicProcedure
        .input(
            updateStoreSchema
        )
        .mutation(async ({ ctx, input }) => {
            return await ctx.prisma.store.update({
                where: {
                    id: input.id,
                },
                data: {
                    title: input.title,
                    slug: input.slug,
                    description: input.description,
                    createdAt: undefined,
                    updatedAt: new Date(),
                },
            });
        }),

    updateMany: publicProcedure
        .input(
            updateStoreSchema.pick({
                id: true,
                userId: true,
                title: true
            })
        )
        .mutation(async ({ ctx, input }) => {
            return await ctx.prisma.store.updateMany({
                where: {
                    id: input.id,
                    userId: input.userId
                },
                data: {
                    title: input.title,
                    createdAt: undefined,
                    updatedAt: new Date(),
                },
            });
        }),

    delete: publicProcedure
        .input(
            storeIdSchema.extend({
                deleted: z.boolean().default(false),
            }),
        )
        .mutation(async ({ ctx, input }) => {
            return await ctx.prisma.store.update({
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

    deleteMany: publicProcedure
        .input(
            storeIdSchema.extend({
                userId: z.string().cuid(),
                deleted: z.boolean().default(false)
            })
        )
        .mutation(async ({ ctx, input }) => {
            return await ctx.prisma.store.deleteMany({
                where: {
                    id: input.id,
                    userId: input.userId,
                    deleted: input.deleted
                }
            });
        })
});

type StoreRouterOutput = inferRouterOutputs<typeof storeRouter>;

export type StoresResponse = StoreRouterOutput['all'];
export type FindStoreResponse = StoreRouterOutput['find'];
export type CreateStoreResponse = StoreRouterOutput['create'];
export type UpdateStoreResponse = StoreRouterOutput['update'];
export type DeleteStoreResponse = StoreRouterOutput['delete'];
