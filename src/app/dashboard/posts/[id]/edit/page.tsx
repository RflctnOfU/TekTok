import EditForm from "@/app/_components/ui/dashboard/EditForm";
import { fetchPostSingle } from "@/app/lib/data";
import { Suspense } from "react";
// import { api } from "@/trpc/server";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  // const post = await api.post.getSinglePost({
  //   id,
  // });
  const post = await fetchPostSingle(id);
  console.log(post);

  return (
    <div className=" flex h-full w-full flex-col items-center justify-center  rounded-xl border-2 border-main-border/50 backdrop-blur-[3px]">
      <Suspense fallback={"Loading..."}>
        <EditForm post={post!} />
      </Suspense>
    </div>
  );
}
