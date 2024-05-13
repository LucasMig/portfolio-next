import type { Metadata } from "next";
import "@/app/globals.scss";
import { interTight } from "@/app/ui/fonts";
import NavBar from "@/app/ui/navbar";

export const metadata: Metadata = {
  title: "Lucas Migliori - Full Stack Developer",
  description:
    "This is my personal website, where I share my projects and experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={interTight.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
