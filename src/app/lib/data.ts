import { api } from "@/trpc/server";
import { db } from "@/server/db";

import { User, Comment, type Post } from "@/app/lib/definitions";
import { eq } from "drizzle-orm";
import { users } from "@/server/db/schema";

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
    return await db.query.posts.findMany({
      with: {
        author: {
          columns: {
            name: true,
            image: true,
          },
        },
      },
    });
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch Posts with User");
  }
}
