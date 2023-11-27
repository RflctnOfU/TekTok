import type { InferSelectModel } from "drizzle-orm";
import type { posts, users } from "@/server/db/schema";

import Link from "next/link";
import Image from "next/image";
export default function PostFragment({
  post,
  user, // author,
}: {
  post: InferSelectModel<typeof posts>;
  user: InferSelectModel<typeof users>;
}) {
  // console.log(author);

  return (
    <div className="col-span-4 rounded-lg border-2 border-main-border/60 bg-gradient-to-br from-transparent via-main-secondary to-main-tertiary">
      <Link href={`/dashboard/posts/${post.id}`}>
        <div className="flex items-center justify-between rounded-t-md border-b-2 border-b-main-border/60 bg-gradient-to-br from-transparent via-main-border to-main-border/80 p-2 text-btn-bg backdrop-blur">
          <h2 className="line-clamp-1 w-1/2 font-mono">{post.title}</h2>
          <div className="flex items-center gap-1">
            <div className="h-auto w-auto rounded-full">
              <Image
                src={user.image}
                width={24}
                height={24}
                alt={user.name}
                className="rounded-full"
              />
            </div>
            <div>{user.name}</div>
          </div>
        </div>
        <p className="line-clamp-1 text-ellipsis rounded-b-lg  p-4">
          {post.content}
        </p>
      </Link>
    </div>
  );
}
