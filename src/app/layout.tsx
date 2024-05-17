import "@/app/globals.scss";
import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";
import { interTight } from "@/app/ui/fonts";
import { MainContextProvider } from "@/app/main-context-provider";
import type { Metadata } from "next";

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
        <MainContextProvider>
          <Header />
          {children}
          <Footer />
        </MainContextProvider>
      </body>
    </html>
  );
}
