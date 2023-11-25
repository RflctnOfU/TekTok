"use client";

import { api } from "@/trpc/react";
// import { fetchAllPosts } from "../lib/data";
import { Suspense } from "react";
import PostSkeleton from "../_components/ui/dashboard/PostSkeleton";

// import Image from "next/image";
// import Link from "next/link";

export default function Page() {
  // const posts =  await fetchAllPosts();
  const { data: posts } = api.post.getPosts.useQuery();
  console.log(posts);

  return (
    <div className="no-scrollbar border-main-border/50 flex h-full w-full flex-col items-center overflow-y-scroll rounded-xl border-2 backdrop-blur-[6px]">
      <div className="via-main-secondary to-main-tertiary sticky top-0 flex h-16 w-full items-center justify-center bg-gradient-to-br from-transparent">
        <h1 className="">Welcome back Kris</h1>
      </div>
      <Suspense fallback={<PostSkeleton />}>
        {posts ? (
          <div
            className={`h-full w-full p-4 ${
              posts.length > 1 ? "flex items-center justify-center" : ""
            }`}
          >
            {posts.length === 0 ? (
              <div className="text-3xl">No posts</div>
            ) : (
              <div>{posts.length} posts!</div>
            )}
          </div>
        ) : null}
      </Suspense>
    </div>
  );
}
