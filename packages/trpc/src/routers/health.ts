import { inferRouterOutputs } from '@trpc/server';

import { publicProcedure } from '../procedure';
import { router } from '../rpc';

export const healthRouter = router({
    check: publicProcedure.query(() => {
        return 'Okay';
    }),
});

type HealthRouterOutput = inferRouterOutputs<typeof healthRouter>;

export type CheckHealthResponse = HealthRouterOutput['check'];
