// "use client";

// import { api } from "@/trpc/react";
// import { db } from "@/server/db";
// import { eq } from "drizzle-orm";
// import { fetchAllPosts, fetchUser } from "../lib/data";
// import { Suspense } from "react";
// import PostSkeleton from "../_components/ui/dashboard/PostSkeleton";
// import Post from "../_components/ui/dashboard/Post";
// import { User } from "../lib/definitions";
// import { users } from "@/server/db/schema";
import Posts from "../_components/ui/dashboard/Posts";

// import Image from "next/image";
// import Link from "next/link";

export default function Page() {
  // const posts = await fetchAllPosts();
  // const { data: posts } = api.post.getPosts.useQuery();
  // console.log(posts);

  return (
    <div className="no-scrollbar flex h-full w-full flex-col items-center overflow-y-scroll rounded-xl border-2 border-main-border/50 backdrop-blur-[6px]">
      <div className="sticky top-0 flex h-16 w-full items-center justify-center bg-gradient-to-br from-transparent via-main-secondary to-main-tertiary">
        <h1 className="">Welcome back Kris</h1>
      </div>
      <div className={`h-full w-full p-4`}>
        {/* <div className="grid grid-cols-8 gap-4"> */}
        <Posts />
        {/* </div> */}
      </div>
    </div>
  );
}
