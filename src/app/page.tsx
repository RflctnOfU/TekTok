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
        <div className="flex h-full w-full flex-col items-center justify-center space-y-12 rounded-lg border-2 border-main-border/60 backdrop-blur-xl md:w-1/3">
          <div className="flex items-center justify-center">
            <p className="w-full p-4 text-3xl md:w-1/2 md:text-2xl">
              Welcome to TekTok, a place to discuss all things Tech!!
            </p>
          </div>
          {!session ? (
            <div className="flex items-center ">
              <Link href={"/api/auth/signin"}>
                <button type="button" className="rounded-sm p-2 backdrop-blur">
                  <span className="rounded-lg border border-main-border/60 bg-main-tertiary px-2 py-1 text-main-border transition-all duration-200 hover:border-main-secondary hover:bg-main-border/60 hover:text-main-secondary">
                    Sign In
                  </span>
                </button>
              </Link>{" "}
              to get Started
            </div>
          ) : (
            <Link href={"/api/auth/signout"}>
              <button type="button" className="rounded-sm p-2 backdrop-blur">
                <span className="rounded-lg border border-main-border/60 bg-main-tertiary px-2 py-1 text-main-border transition-all duration-200 hover:border-main-secondary hover:bg-main-border/60 hover:text-main-secondary">
                  Sign Out
                </span>
              </button>
            </Link>
          )}
        </div>
        <div className="flex hidden h-full items-center justify-center rounded-lg md:block md:w-2/3"></div>
      </div>
    </main>
  );
}
