import Link from "next/link";

import { getServerAuthSession } from "@/server/auth";
// import { api } from "@/trpc/server";
import Header from "./_components/layout/Header";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <main className="flex h-full flex-col items-center  text-white">
      {/* <CreatePost /> */}
      <Header />
      <div className="flex h-full w-full gap-4 p-4">
        <div className="border-main-border/60 flex h-full w-1/3 flex-col items-center justify-center space-y-12 rounded-lg border-2 backdrop-blur-xl">
          <div className="flex items-center justify-center">
            <p className="w-1/2 text-3xl">
              Welcome to TekTok, a place to discuss all things Tech!!
            </p>
          </div>
          {!session ? (
            <div className="flex items-center ">
              <Link href={"/api/auth/signin"}>
                <button type="button" className="rounded-sm p-2 backdrop-blur">
                  <span className="border-main-border/60 bg-main-tertiary text-main-border hover:border-main-secondary hover:bg-main-border/60 hover:text-main-secondary rounded-lg border px-2 py-1 transition-all duration-200">
                    Sign In
                  </span>
                </button>
              </Link>{" "}
              to get Started
            </div>
          ) : null}
        </div>
        <div className="flex h-full w-2/3 items-center justify-center rounded-lg"></div>
      </div>
    </main>
  );
}
