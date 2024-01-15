import Posts from "../_components/ui/dashboard/Posts";
import { fetchLoggedInUser } from "../lib/data";

export default async function Page() {
  const user = await fetchLoggedInUser();
  return (
    <div className="no-scrollbar flex w-full grow flex-col items-center overflow-y-scroll rounded-xl border-2 border-main-border/50 backdrop-blur-[6px] md:h-full">
      <div className="sticky top-0 z-10 flex h-16 w-full items-center justify-center border-b-2 border-main-border/60 bg-gradient-to-br from-slate-600 via-main-secondary to-main-tertiary">
        <h1 className="text-2xl md:text-3xl">Welcome back {user?.name}</h1>
      </div>
      <div className={`no-scrollbar h-full w-full p-4`}>
        <Posts />
      </div>
    </div>
  );
}
