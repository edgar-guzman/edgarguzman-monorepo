import { z } from 'zod';

import { timestamp } from '../timestamp';
import { Publication } from './enum';

export const productSchema = z.object({
    id: z.string().cuid(),
    storeId: z.string().cuid(),

    title: z.string().min(3).max(255),
    slug: z.string().cuid(),
    description: z.string().nullish(),
    quantity: z.coerce.number().min(1).max(100).default(1),
    price: z.coerce.number(),
    image: z.string().nullish(),

    deleted: z.boolean().default(false),
    archived: z.boolean().default(false),

    published: z.string().default(Publication.Active),

    createdAt: z.string().date(),
    updatedAt: z.string().date().nullish(),
});

const baseSchema = productSchema.omit(timestamp);

export const createProductSchema = baseSchema;

export const createUserParams = createProductSchema
    .extend({})
    .omit({
        id: true,
        storeId: true,
    });

export const updateProductSchema = baseSchema;

export const updateProductParams = updateProductSchema
    .extend({})
    .omit({
        id: true,
        storeId: true,
    });

export const userIdSchema = baseSchema.extend({}).pick({
    id: true,
});
