import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Portfolio from "@/components/Portfolio";
import Hero from "@/components/Hero";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Portfolio />
      <Brands />
    </>
  );
}
