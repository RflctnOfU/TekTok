import Post from "@/app/_components/ui/posts/Post";
import { fetchUserPosts } from "@/app/lib/data";

export default async function Page() {
  const posts = await fetchUserPosts();

  console.log(posts);

  if (posts.length < 1) {
    return (
      <div className="flex h-full w-full grow flex-col items-center justify-center gap-4 rounded-xl border-2 border-[#ffc139]/50 backdrop-blur">
        <p className="text-2xl">No posts made yet!</p>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full grow flex-col items-center justify-center gap-4 rounded-xl border-2 border-[#ffc139]/50 p-4 backdrop-blur">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}
