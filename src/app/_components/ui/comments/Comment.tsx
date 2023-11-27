import type { comments, users } from "@/server/db/schema";
import type { InferSelectModel } from "drizzle-orm";

export default function Comment({
  comment,
  user,
}: {
  comment: InferSelectModel<typeof comments>;
  user: InferSelectModel<typeof users>;
}) {
  return (
    <div className="flex w-1/2 flex-col justify-between rounded-md border-2 border-main-border/60 bg-main-border/20">
      <p className="px-2 py-1">{comment.content}</p>
      <div className="flex items-end justify-end bg-main-border/40 px-2 py-[2px] text-xs">
        --{user.name}
      </div>
    </div>
  );
}
