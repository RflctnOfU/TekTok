import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { comments, posts } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export const commentRouter = createTRPCRouter({
  createComment: protectedProcedure
    .input(z.object({ id: z.string(), content: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.insert(comments).values({
        id: crypto.randomUUID(),
        content: input.content,
        postId: input.id,
        userId: ctx.session.user.id,
      });
    }),

  editComment: protectedProcedure
    .input(z.object({ id: z.string(), content: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .update(comments)
        .set({ content: input.content })
        .where(eq(comments.id, input.id));
    }),

  getCommentsWithPosts: protectedProcedure.query(({ ctx }) => {
    return ctx.db
      .select()
      .from(comments)
      .innerJoin(posts, eq(posts.id, comments.postId))
      .where(eq(comments.userId, ctx.session.user.id));
  }),

  deleteComment: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.db.delete(comments).where(eq(comments.id, input.id));
    }),
});
