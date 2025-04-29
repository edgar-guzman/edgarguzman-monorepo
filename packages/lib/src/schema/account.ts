import { z } from 'zod';

import { timestamps } from '../timestamps';

export const accountSchema = z.object({
    id: z.string().cuid(),
    userId: z.string().cuid(),

    type: z.string(),
    provider: z.string(),
    providerAccountId: z.string(),
    refresh_token: z.string().nullish(),
    access_token: z.string().nullish(),
    expires_at: z.coerce.number().int().nullish(),
    token_type: z.string().nullish(),
    scope: z.string().nullish(),
    id_token: z.string().nullish(),
    session_state: z.string().nullish(),
    refresh_token_expires_in: z.coerce.number().int().nullish(),

    createdAt: z.string().date(),
    updatedAt: z.string().date().nullish(),
});

export const baseSchema = accountSchema.omit(timestamps);

export const createAccountSchema = baseSchema;

export const createAccountParams = createAccountSchema
    // .extend()
    .omit({
        id: true,
        userId: true,
    });

export const updateAccountSchema = baseSchema;

export const updateAccountParams = updateAccountSchema
    // .extend()
    .omit({
        id: true,
        userId: true,
    });

export const accountIdSchema = baseSchema.pick({
    id: true,
});
