import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { comments, posts, users } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import { fromJSON } from "postcss";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getPosts: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.query.posts.findMany();
  }),

  createPost: protectedProcedure
    .input(z.object({ title: z.string().min(1), content: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(posts).values({
        id: crypto.randomUUID(),
        title: input.title,
        content: input.content,
        userId: ctx.session.user.id,
      });
    }),

  getUserPosts: protectedProcedure.query(({ ctx }) => {
    return ctx.db.query.posts.findMany({
      where: eq(posts.userId, ctx.session.user.id),
    });
  }),

  deletePost: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.delete(posts).where(eq(posts.id, input.id));
    }),

  deletePostComments: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.delete(comments).where(eq(comments.postId, input.id));
    }),

  getSinglePost: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const post = await ctx.db.query.posts.findFirst({
        where: eq(posts.id, input.id),
      });
      const user = await ctx.db.query.users.findFirst({
        where: eq(users.id, post!.userId),
      });

      return { post, user };
    }),
  editPost: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        title: z.string().nullable(),
        content: z.string().nullable(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .update(posts)
        .set({ content: input.content, title: input.title })
        .where(eq(posts.id, input.id));
    }),
  // create: protectedProcedure
  //   .input(z.object({ name: z.string().min(1) }))
  //   .mutation(async ({ ctx, input }) => {
  //     // simulate a slow db call
  //     await new Promise((resolve) => setTimeout(resolve, 1000));

  //     await ctx.db.insert(posts).values({
  //       name: input.name,
  //       createdById: ctx.session.user.id,
  //     });
  //   }),

  // getLatest: publicProcedure.query(({ ctx }) => {
  //   return ctx.db.query.posts.findFirst({
  //     orderBy: (posts, { desc }) => [desc(posts.createdAt)],
  //   });
  // }),

  // getSecretMessage: protectedProcedure.query(() => {
  //   return "you can now see this secret message!";
  // }),
});
