import { api } from "@/trpc/server";

// import { User, Comment, Post } from "@/app/lib/definitions";

export async function fetchAllPosts() {
  try {
    console.log("Fetching posts...");
    return api.post.getPosts();
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch Posts");
  }
}
