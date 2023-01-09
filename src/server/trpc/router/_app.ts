import { router } from "../trpc";
import { authRouter } from "./auth";
import { championsRoute } from "./champions";
import { logRouter } from "./log";

export const appRouter = router({
  auth: authRouter,
  log: logRouter,
  champions: championsRoute,
});

// export type definition of API
export type AppRouter = typeof appRouter;
