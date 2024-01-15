import "@/styles/globals.css";

import localFont from "next/font/local";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "@/trpc/react";

import Footer from "./_components/layout/Footer";

const praktika = localFont({
  src: "./fonts/Praktika-Light.otf",
  display: "swap",
});

export const metadata = {
  title: "TekTok",
  description: "A tech blog/forum to discuss all things tech!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`flex h-screen flex-col bg-main-bg bg-cover bg-fixed bg-center bg-no-repeat md:h-screen ${praktika.className} text-main-border`}
      >
        <TRPCReactProvider cookies={cookies().toString()}>
          <div className="h-full">{children}</div>
        </TRPCReactProvider>
        <Footer />
      </body>
    </html>
  );
}
