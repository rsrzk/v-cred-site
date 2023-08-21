"use client";

import type { ReactNode } from "react";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { Providers } from "./providers";

export const AppWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Providers>
      <AuthProvider>
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </AuthProvider>
    </Providers>
  );
}