import type { posts } from "@/server/db/schema";
import type { InferSelectModel } from "drizzle-orm";
import { Pencil, Trash } from "lucide-react";
import { deletePost } from "@/app/lib/actions";
import Link from "next/link";

export default async function Post({
  post,
}: {
  post: InferSelectModel<typeof posts>;
}) {
  return (
    <div className=" flex flex-col items-center rounded-lg border-2 border-[#ffc139]/60 bg-gradient-to-br from-transparent via-[#574f2d] to-[#57482d] md:h-auto md:w-4/5">
      <div className="flex h-12 w-full items-center justify-between rounded-tl-lg rounded-tr-md border-b-2 border-b-[#ffc139]/60 bg-gradient-to-br from-transparent via-[#ba8e2e] to-[#9a7d14] px-4">
        <h1 className="line-clamp-1 w-1/2 font-mono text-xl">{post?.title}</h1>
        <div>
          {post.updatedAt
            ? post?.updatedAt.toLocaleDateString()
            : post?.createdAt.toLocaleDateString()}
        </div>
      </div>
      <div className="line-clamp-2 flex  w-full items-center justify-between p-4">
        <p className="">{post?.content}</p>
        <div className="flex gap-2">
          <Link href={`/dashboard/posts/${post.id}/edit`}>
            <button className="rounded-md border border-[#ffc139]/30 p-1 transition-all duration-200 hover:bg-[#ffc139] hover:text-[#57372d]">
              <Pencil size={20} />
            </button>
          </Link>
          <form action={deletePost}>
            <input hidden defaultValue={post.id} name="id" />
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
}
