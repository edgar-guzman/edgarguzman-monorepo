import { adminMiddleware, timingMiddleware, userMiddleware } from './middleware';
import { procedure } from './rpc';

export const publicProcedure = procedure.use(timingMiddleware);

export const userProcedure = publicProcedure.use(userMiddleware);

export const adminProcedure = userProcedure.use(adminMiddleware);
