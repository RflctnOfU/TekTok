import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { comments, posts, users } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export const commentRouter = createTRPCRouter({
  createComment: protectedProcedure
    .input(z.object({ id: z.string(), content: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.db
        .insert(comments)
        .values({
          id: crypto.randomUUID(),
          content: input.content,
          postId: input.id,
          userId: ctx.session.user.id,
        });
    }),
});
