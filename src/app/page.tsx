"use client";
import HeroSection from "../components/HeroSection"
import { motion, useScroll } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
      <main className="flex h-[200vh] flex-col items-center justify-between">
        <HeroSection/>
      </main>
  );
}
