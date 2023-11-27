// "use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { addComment } from "@/app/lib/actions";
// import { api } from "@/trpc/react";

export default function AddComment({ id }: { id: string }) {
  // const router = useRouter();
  // const [content, setContent] = useState("");
  // const addComment = api.comment.createComment.useMutation({});
  // function handleSubmit(e: React.FormEvent) {
  //   e.preventDefault();
  //   addComment.mutate({ id, content });
  //   setContent("");
  //   router.refresh();
  // }
  return (
    <form action={addComment}>
      <input hidden name="id" defaultValue={id} />
      <textarea
        className="rounded-lg p-2 text-sm text-gray-700 focus:outline-main-secondary/70 focus:ring-2 focus:ring-main-border"
        name="content"
        placeholder="Comment here..."
        cols={50}
        rows={3}
        // value={content}
        // onChange={(e) => setContent(e.target.value)}
      />
      <div className="flex w-full justify-end">
        <button
          className={`flex gap-2 rounded-lg border border-main-border/30 p-2 transition-all duration-200 hover:bg-main-border hover:text-main-secondary`}
          type="submit"
        >
          Add Comment <MessageCircle />
        </button>
      </div>
    </form>
  );
}
