import { inferRouterOutputs } from '@trpc/server';
import { z } from 'zod';

import { createProductSchema, productIdSchema, updateProductSchema } from '../../../lib/src/schema/product';
import { publicProcedure } from '../procedure';
import { router } from '../rpc';

export const productRouter = router({
    all: publicProcedure.query(async ({ ctx }) => {
        return await ctx.prisma.product.findMany();
    }),

    find: publicProcedure
        .input(productIdSchema)
        .query(async ({ ctx, input }) => {
            return await ctx.prisma.product.findFirst({
                where: {
                    id: input.id,
                },
            });
        }),

    create: publicProcedure
        .input(createProductSchema)
        .mutation(async ({ ctx, input }) => {
            return await ctx.prisma.product.create({
                data: {
                    title: input.title,
                    slug: input.slug,
                    description: input.description,
                    quantity: input.quantity,
                    price: input.price,
                    image: input.image,
                    deleted: input.deleted,
                    archived: input.archived,
                    published: 'Active',
                    createdAt: new Date(),
                    updatedAt: null,
                    stores: {
                        connect: {
                            id: input.storeId
                        }
                    }
                },
            });
        }),

    update: publicProcedure
        .input(
            updateProductSchema
        )
        .mutation(async ({ ctx, input }) => {
            return await ctx.prisma.product.update({
                where: {
                    id: input.id,
                },
                data: {
                    title: input.title,
                    slug: input.slug,
                    description: input.description,
                    quantity: input.quantity,
                    price: input.price,
                    image: input.image,
                    createdAt: undefined,
                    updatedAt: new Date(),
                },
            });
        }),

    delete: publicProcedure
        .input(
            productIdSchema.extend({
                deleted: z.boolean().default(false),
            }),
        )
        .mutation(async ({ ctx, input }) => {
            return await ctx.prisma.product.update({
                where: {
                    id: input.id,
                },
                data: {
                    deleted: input.deleted,
                    createdAt: undefined,
                    updatedAt: new Date(),
                },
            });
        })
});

type ProductRouterOutput = inferRouterOutputs<typeof productRouter>;

export type ProductsResponse = ProductRouterOutput['all'];
export type FindProductResponse = ProductRouterOutput['find'];
export type CreateProductResponse = ProductRouterOutput['create'];
export type UpdateProductResponse = ProductRouterOutput['update'];
export type DeleteProductResponse = ProductRouterOutput['delete'];
