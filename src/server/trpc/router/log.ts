import { string, z } from "zod";

import { router, publicProcedure, protectedProcedure } from "../trpc";

export const logRouter = router({
  create: protectedProcedure
    .input(
      z.object({
        date: z.string().min(0),
        info: z.string().min(0),
      })
    )
    .mutation(({ input, ctx }) => {
      return ctx.prisma.logPost.create({
        data: {
          date: input.date,
          info: input.info,
        },
      });
    }),
  delete: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(({ input, ctx }) => {
      return ctx.prisma.logPost.delete({
        where: {
          id: input.id,
        },
      });
    }),

  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.logPost.findMany({});
  }),
});
