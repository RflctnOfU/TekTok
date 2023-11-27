"use client";

import { linkData } from "@/app/lib/siteConfig";

import Link from "next/link";

import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex w-auto grow justify-around gap-4 pt-4 md:flex-col">
      <div className="hidden h-auto w-full grow md:block"></div>
      {linkData.map((link) => {
        // console.log(pathname === link.href ? link.href : link.link);

        const Icon = link.icon;
        return (
          <div
            key={link.link}
            className={`rounded-lg  p-2  transition-all duration-200 hover:bg-main-border/80 hover:text-btn-bg ${
              pathname === link.href
                ? "bg-main-border/80 text-btn-bg"
                : "bg-btn-bg/80 text-main-border/80"
            }`}
          >
            <Link href={link.href} className="flex gap-1">
              <Icon />
              <button>{link.link}</button>
            </Link>
          </div>
        );
      })}
    </nav>
  );
}
