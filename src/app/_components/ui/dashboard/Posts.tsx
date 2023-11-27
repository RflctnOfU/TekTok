import { fetchPostsWithUser } from "@/app/lib/data";
import { Suspense } from "react";

import PostSkeleton from "./PostSkeleton";
import PostFragment from "./PostFragment";

export default async function Posts() {
  // const posts = await fetchAllPosts();
  const data = await fetchPostsWithUser();
  console.log(data);

  return (
    <div className="grid grid-cols-8 gap-4">
      {data.map(async (post) => (
        <Suspense fallback={<PostSkeleton />}>
          <PostFragment key={post.post.id} post={post.post} user={post.user} />
        </Suspense>
      ))}
    </div>
  );
}
