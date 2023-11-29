import { fetchComments, fetchSinglePost } from "@/app/lib/data";

import Image from "next/image";

import AddComment from "@/app/_components/ui/comments/AddComment";
import { Suspense } from "react";
import Comment from "@/app/_components/ui/comments/Comment";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  const post = await fetchSinglePost(id);
  console.log(post);
  const comments = await fetchComments(id);

  return (
    <div className=" flex h-full w-full flex-col items-center justify-center  rounded-xl border-2 border-main-border/50 backdrop-blur-[20px] max-md:p-4">
      <div className=" flex h-full w-full flex-col items-center rounded-lg border-2 border-main-border/60 bg-gradient-to-br from-transparent via-main-tertiary to-[#57482d] md:h-4/5 md:w-4/5">
        <div className="flex h-auto w-full flex-col-reverse items-center justify-between rounded-tl-lg rounded-tr-md border-b-2 border-b-main-border/60 bg-gradient-to-br from-transparent via-[#ba8e2e] to-[#9a7d14] px-4 md:flex-row">
          <div className=" flex gap-2">
            <Image
              src={post[0]!.user.image}
              width={24}
              height={24}
              alt={post[0]!.user.name}
              className="rounded-full"
            />{" "}
            {post[0]!.user!.name}
          </div>
          <h1 className="line-clamp-1 w-full text-center font-mono text-base md:w-1/2 md:text-xl">
            {post[0]!.post!.title}
          </h1>
          <div className="">
            {post[0]!.post!.updatedAt
              ? post[0]!.post?.updatedAt.toLocaleDateString()
              : post[0]!.post?.createdAt.toLocaleDateString()}
          </div>
        </div>
        <div className="mt-4 w-[90%] rounded-lg bg-neutral-400/80 p-4">
          <p className="">{post[0]!.post?.content}</p>
        </div>
        <div className=" flex w-[90%] items-center justify-end py-4">
          <AddComment id={id} />
        </div>
        <hr className="w-[90%] text-white" />
        <div className="no-scrollbar flex w-full flex-col items-end gap-4 overflow-scroll p-4">
          {comments?.map(async (comment) => {
            return (
              <Suspense key={comment.comment.id} fallback={"Loading..."}>
                <Comment comment={comment.comment} user={comment.user} />
              </Suspense>
            );
          })}
        </div>
      </div>
    </div>
  );
}
