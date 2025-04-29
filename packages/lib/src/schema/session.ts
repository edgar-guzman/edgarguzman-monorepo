import { z } from 'zod';

import { timestamps } from '../timestamps';

export const sessionSchema = z.object({
    id: z.string().cuid(),
    userId: z.string().cuid(),

    sessionToken: z.string(),
    expires: z.string().date(),

    createdAt: z.string().date(),
    updatedAt: z.string().date().nullish()
});

const baseSchema = sessionSchema.omit(timestamps);

export const createSessionSchema = baseSchema;

export const createSessionParams = createSessionSchema
  // .extend()
  .omit({
    id: true,
    userId: true,
  });

export const updateSessionSchema = baseSchema;

export const updateSessionParams = updateSessionSchema
  // .extend()
  .omit({
    id: true,
    userId: true,
  });

export const sessionIdSchema = baseSchema.pick({
  id: true,
});
