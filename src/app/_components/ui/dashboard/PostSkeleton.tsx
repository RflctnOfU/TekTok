const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-[#ffc139]/40 before:to-transparent";

export default function PostSkeleton() {
  return (
    <div
      className={`${shimmer} relative isolate col-span-4 overflow-hidden rounded-lg shadow-xl`}
    >
      <div className="flex h-[42px] items-center justify-between rounded-t-lg border-b-2 border-b-gray-300 bg-gray-500/75 p-2">
        <div className="h-6 w-24 rounded-lg bg-gray-700/60 "></div>
        <div className="h-6 w-20 rounded-lg bg-gray-700/60"></div>
      </div>
      <p className="h-[80px] rounded-b-lg bg-gray-200/50 p-4"></p>
    </div>
  );
}
