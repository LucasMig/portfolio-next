import '@/app/globals.scss';
import { MainContextProvider } from '@/app/main-context-provider';
import { interTight } from '@/app/ui/fonts';
import Footer from '@/app/ui/footer';
import Header from '@/app/ui/header';
import { NextUIProvider } from '@nextui-org/react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lucas Migliori - Full Stack Developer',
  description:
    'This is my personal website, where I share my projects and experiences.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html id="html" lang="en">
      <body className={interTight.className}>
        <NextUIProvider>
          <MainContextProvider>
            <Header />
            {children}
            <Footer />
          </MainContextProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
