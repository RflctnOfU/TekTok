import { api } from "@/trpc/server";
import { db } from "@/server/db";

import { User, Comment, type Post } from "@/app/lib/definitions";
import { eq } from "drizzle-orm";
import { comments, posts, users } from "@/server/db/schema";

export async function fetchAllPosts() {
  // const posts: Post[] = await api.post.getPosts() as Post[];
  try {
    console.log("Fetching posts...");
    return await db.query.posts.findMany();
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch Posts");
  }
}

export async function fetchUser(id: string) {
  try {
    return await db.query.users.findFirst({ where: eq(users.id, id) });
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch User");
  }
}

export async function fetchPostsWithUser() {
  try {
    return await db
      .select()
      .from(posts)
      .innerJoin(users, eq(posts.userId, users.id));
    // return await db.query.posts.findMany({
    //   with: {
    //     author: {
    //       columns: {
    //         name: true,
    //         image: true,
    //       },
    //     },
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch Posts with User");
  }
}

export async function fetchLoggedInUser() {
  return api.user.getLoggedInUser.query();
}

export async function fetchUserPosts() {
  return api.post.getUserPosts.query();
}

export async function fetchSinglePost(id: string) {
  // return api.post.getSinglePost.query({ id });
  try {
    return await db
      .select()
      .from(posts)
      .innerJoin(users, eq(posts.userId, users.id))
      .where(eq(posts.id, id));
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch Post with User");
  }
}

export async function fetchPostSingle(id: string) {
  try {
    return await db.query.posts.findFirst({ where: eq(posts.id, id) });
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch Post");
  }
}

export async function fetchComments(id: string) {
  try {
    return await db
      .select()
      .from(comments)
      .innerJoin(users, eq(comments.userId, users.id))
      .where(eq(comments.postId, id));
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch Comments");
  }
}

export async function fetchUserComments() {
  try {
    return api.comment.getCommentsWithPosts.query();
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch Comments");
  }
}

export async function fetchSingleComment(id: string) {
  try {
    return await db.query.comments.findFirst({ where: eq(comments.id, id) });
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch Comment");
  }
}
