import Image from "next/image";
export default function Header() {
  return (
    <header className="z-10 flex w-full items-center justify-between border-b-2 border-b-main-border/60 p-4 backdrop-blur">
      <div className="text-2xl">
        <Image
          src={"/images/logo-transparent-png.png"}
          width={110}
          height={63}
          alt="logo"
        />
      </div>
      <h1 className="text-3xl text-main-border">TekTok</h1>
      <div />
    </header>
  );
}
