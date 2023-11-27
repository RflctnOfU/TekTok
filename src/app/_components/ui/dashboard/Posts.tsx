import { fetchAllPosts, fetchPostsWithUser, fetchUser } from "@/app/lib/data";
import { Suspense } from "react";
import Post from "./Post";
import PostSkeleton from "./PostSkeleton";

export default async function Posts() {
  // const posts = await fetchAllPosts();
  const data = await fetchPostsWithUser();
  console.log(data);

  return (
    <div className="grid grid-cols-8 gap-4">
      {data.map(async (post) => (
        // console.log(post);

        <Suspense fallback={<PostSkeleton />}>
          <Post key={post.id} post={post} />
        </Suspense>
      ))}
    </div>
  );
}
