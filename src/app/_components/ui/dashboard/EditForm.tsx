import { Save } from "lucide-react";

import { notFound } from "next/navigation";
import Link from "next/link";
import { editPost } from "@/app/lib/actions";
import type { InferSelectModel } from "drizzle-orm";
import type { posts } from "@/server/db/schema";

export default async function EditForm({
  post,
}: {
  post: InferSelectModel<typeof posts>;
}) {
  console.log(post);
  if (!post) {
    notFound();
  }

  return (
    <form
      action={editPost}
      className="w-1/2 rounded-lg border-2 border-[#ffc139]/40 bg-gradient-to-br from-transparent via-[#574f2d] to-[#57482d]"
    >
      <div>
        <input name="id" defaultValue={post.id} hidden />
      </div>
      <div className="w-full rounded-md p-4 md:p-6">
        <input
          name="title"
          placeholder="Title"
          className="w-full rounded-md border border-gray-500/60 px-4 py-2 text-black outline-none outline-2 placeholder:text-sm placeholder:text-gray-500 focus:inset-0 focus:outline-[#ffc139] focus:ring-2 focus:ring-[#57372d]/70"
          defaultValue={post.title!}
        />
      </div>
      <div className="w-full rounded-md px-4 md:px-6">
        <textarea
          name="content"
          placeholder="Post Content..."
          className="w-full rounded-md border border-gray-500/60 px-4 py-2 text-black outline-none outline-2 placeholder:text-sm placeholder:text-gray-500 focus:inset-0 focus:outline-[#ffc139] focus:ring-2 focus:ring-[#57372d]/70"
          defaultValue={post.content!}
        />
      </div>
      <div className="flex w-full justify-end gap-4 p-4 md:p-6">
        <Link href="/dashboard/posts">
          <button
            className="flex items-center rounded-md bg-gradient-to-br from-red-700 via-rose-600 to-pink-400 px-2 py-1"
            type="button"
          >
            Cancel
          </button>
        </Link>
        <button
          type="submit"
          className="flex items-center justify-between gap-1 rounded-md border border-[#ffc139] p-2 px-2 py-1 transition-all duration-200 hover:bg-[#ffc139] hover:text-[#57372d]"
        >
          Save <Save />
        </button>
      </div>
    </form>
  );
}
