import Nav from "@/app/_components/ui/dashboard/Nav";
import { getServerAuthSession } from "@/server/auth";
import Link from "next/link";
import Image from "next/image";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerAuthSession();

  if (!session) {
    return (
      <div className="p-4">
        <div className="flex h-[87.5vh] w-full items-center justify-center rounded-xl border-2 border-main-border/50 backdrop-blur">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="p-4 text-center font-mono text-2xl text-main-border md:text-3xl">
              Unauthorized - Sign In to view
            </h1>
            <Link href={"/api/auth/signin"}>
              <button className="rounded-lg border-2 border-main-border/80 bg-gray-300/40 px-2 py-1 text-main-border/80 hover:bg-gray-500/70 hover:text-main-border">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="flex h-full flex-col gap-4 p-4 md:flex-row md:overflow-hidden">
      <aside className="h-auto w-full flex-none rounded-xl border-2 border-main-border/50 p-4 backdrop-blur md:h-full md:w-64 md:flex-col ">
        <div className="relative w-full rounded-xl  bg-cover bg-center">
          <Image
            src={"/images/logo-transparent-png.png"}
            alt="logo"
            width={220}
            height={126}
            className="rounded-xl"
            priority
          />
        </div>

        <Nav />
      </aside>
      {children}
    </main>
  );
}
