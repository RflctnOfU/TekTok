import { MessageCircle } from "lucide-react";
import { addComment } from "@/app/lib/actions";

export default async function AddComment({ id }: { id: string }) {
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
