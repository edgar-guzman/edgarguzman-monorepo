import { accountRouter } from '../routers/account';
import { healthRouter } from '../routers/health';
import { productRouter } from '../routers/product';
import { sessionRouter } from '../routers/session';
import { storeRouter } from '../routers/store';
import { userRouter } from '../routers/user';
import { router } from '../rpc';

export const appRouter = router({
    account: accountRouter,
    health: healthRouter,
    product: productRouter,
    session: sessionRouter,
    store: storeRouter,
    user: userRouter,
});

export type AppRouter = typeof appRouter;
