import { router } from "../trpc";
import { authRouter } from "./auth";
import { logRouter } from "./log";

export const appRouter = router({
  auth: authRouter,
  log: logRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
