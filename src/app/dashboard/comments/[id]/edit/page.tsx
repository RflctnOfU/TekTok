import EditComment from "@/app/_components/ui/comments/EditComment";
import { fetchSingleComment } from "@/app/lib/data";
import { Suspense } from "react";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const comment = await fetchSingleComment(id);
  console.log(comment);

  return (
    <div className=" flex h-full w-full flex-col items-center justify-center  rounded-xl border-2 border-[#ffc139]/50 backdrop-blur-[3px]">
      <Suspense fallback={"Loading..."}>
        <EditComment comment={comment!} />
      </Suspense>
    </div>
  );
}
