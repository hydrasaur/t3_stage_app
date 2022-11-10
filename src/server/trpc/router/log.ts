import {z} from "zod"

import { router, publicProcedure, protectedProcedure } from "../trpc";

export const logRouter = router({
    create: protectedProcedure.input(z.object({
        date: z.string(), info: z.string()
    })).mutation(({input, ctx}) => {
        return ctx.prisma.logPost.create({
            data: {
                date: input.date,
                info: input.info,
            }
        })
    }),

});