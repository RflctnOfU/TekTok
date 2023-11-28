// import { api } from "@/trpc/server";
import Link from "next/link";
import { Pencil, Trash } from "lucide-react";
import { deleteComment } from "@/app/lib/actions";
// import { getServerAuthSession } from "@/server/auth";
// import { getServerAuthSession } from "@/server/auth";
import { fetchUserComments } from "@/app/lib/data";
export default async function Page() {
  const comments = await fetchUserComments();
  // console.log(comments);

  if (comments.length < 1) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-xl border-2 border-[#ffc139]/50 backdrop-blur">
        <p className="text-2xl">No comments made yet!</p>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-xl border-2 border-[#ffc139]/50 backdrop-blur">
      {comments.map(async (comment) => {
        return (
          <div
            key={comment.comment.id}
            className="flex w-1/2 flex-col justify-between rounded-md border-2 border-[#ffc139]/60 bg-[#ffc139]/20"
          >
            <p className="px-2 py-1">{comment.comment.content}</p>
            <div className="flex items-end justify-between bg-[#ffc139]/40 px-2 py-[2px] text-xs">
              <div className="text-xs">
                <span className="italic">in reply to post titled:</span>{" "}
                <span className="font-mono text-sm font-semibold">
                  <Link
                    href={`/dashboard/posts/${comment.post.id}`}
                    className="transition-all duration-200 hover:text-gray-600/80"
                  >
                    {comment.post.title}
                  </Link>
                </span>{" "}
              </div>
              <div className="flex gap-2">
                <Link href={`/dashboard/comments/${comment.comment.id}/edit`}>
                  <button className="rounded-md border border-[#ffc139]/30 p-1 transition-all duration-200 hover:bg-[#ffc139] hover:text-[#57372d]">
                    <Pencil size={20} />
                  </button>
                </Link>
                <form action={deleteComment}>
                  <input hidden defaultValue={comment.comment.id} name="id" />
                  <button
                    type="submit"
                    className="rounded-md border border-[#ffc139]/30 p-1 transition-all duration-200 hover:bg-[#ffc139] hover:text-[#57372d]"
                  >
                    <Trash size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
