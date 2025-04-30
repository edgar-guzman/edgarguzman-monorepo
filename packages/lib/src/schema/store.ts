import { z } from 'zod';

import { timestamp } from '../timestamp';
import { Publication } from './enum';

export const storeSchema = z.object({
    id: z.string().cuid(),
    userId: z.string().cuid(),

    title: z.string().min(3),
    slug: z.string().min(3),
    description: z.string().nullish(),
    image: z.string().nullish(),

    deleted: z.boolean().default(false),
    archived: z.boolean().default(false),

    published: z.string().default(Publication.Active),

    createdAt: z.string().date(),
    updatedAt: z.string().date().nullish(),
});

const baseSchema = storeSchema.omit(timestamp);

export const createStoreSchema = baseSchema;

export const createStoreParams = createStoreSchema
    .extend({})
    .omit({
        id: true,
        userId: true,
    });

export const updateStoreSchema = baseSchema;

export const updateStoreParams = updateStoreSchema
    .extend({})
    .omit({
        id: true,
        userId: true,
    });

export const storeIdSchema = baseSchema.pick({
    id: true,
});
