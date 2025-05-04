import { z } from 'zod';

import { timestamps } from '../timestamps';
import { Role } from '././enum';

export const userSchema = z.object({
    id: z.string().cuid(),

    name: z.string().min(3).max(255),
    email: z.string().email(),
    image: z.string().nullish(),
    phone: z.string(),
    password: z.string().min(6).max(255),

    deleted: z.boolean().default(false),
    terms: z.boolean().default(false),
    published: z.boolean().default(false),
    subscribed: z.boolean().default(true),

    role: z.string().default(Role.User),

    createdAt: z.string().date(),
    updatedAt: z.string().date().nullish(),
});

const baseSchema = userSchema.omit(timestamps);

export const createUserSchema = baseSchema;

export const createUserParams = createUserSchema
    .extend({})
    .omit({
        id: true,
    });

export const updateUserSchema = baseSchema;

export const updateUserParams = updateUserSchema
    .extend({})
    .omit({
        id: true,
    });

export const userIdSchema = baseSchema.pick({
    id: true,
});

export const userEmailAndPasswordSchema = baseSchema.pick({
    email: true,
    password: true,
});

export const userSubscribedSchema = baseSchema.pick({
    id: true,
    subscribed: true,
});
