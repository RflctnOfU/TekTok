import { Save } from "lucide-react";

import { notFound } from "next/navigation";

import Link from "next/link";
import { editComment } from "@/app/lib/actions";
import type { InferSelectModel } from "drizzle-orm";
import type { comments } from "@/server/db/schema";

export default async function EditForm({
  comment,
}: {
  comment: InferSelectModel<typeof comments>;
}) {
  console.log(comment);
  if (!comment) {
    notFound();
  }

  return (
    <form
      action={editComment}
      className="w-1/2 rounded-md border-2 border-[#ffc139]/40 bg-gray-50/70 pt-4"
    >
      <div>
        <input name="id" defaultValue={comment.id} hidden />
      </div>

      <div className="w-full rounded-md px-4 md:px-6">
        <textarea
          name="content"
          placeholder="Post Content..."
          className="w-full rounded-md border border-gray-500/60 px-4 py-2 text-black outline-none outline-2 placeholder:text-sm placeholder:text-gray-500 focus:inset-0 focus:outline-[#ffc139] focus:ring-2 focus:ring-[#57372d]/70"
          defaultValue={comment.content!}
        />
      </div>
      <div className="flex w-full justify-end gap-4 p-4 md:p-6">
        <Link href="/dashboard/comments">
          <button
            className="flex items-center rounded-md bg-gradient-to-br from-red-700 via-rose-600 to-pink-400 px-2 py-1"
            type="button"
          >
            Cancel
          </button>
        </Link>
        <button
          type="submit"
          className="flex items-center justify-between gap-1 rounded-md bg-gradient-to-br from-indigo-700 via-blue-600 to-sky-500 px-2 py-1"
        >
          Save <Save />
        </button>
      </div>
    </form>
  );
}
