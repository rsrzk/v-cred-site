import type { ReactNode } from 'react';
import { AppWrapper } from "./wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'V-Cred',
  description: 'Data Analytics Solutions',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className= "dark:bg-black">
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}