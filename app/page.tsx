"use client";
import {NextUIProvider} from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";

import { Hero } from "@/components/Hero";
import WorkEx from "@/components/WorkEx";
import { Skills } from "@/components/Skills";
import { Navbar } from "@/components/Navbar";
import Work from "@/components/Work";
import {Projects} from "@/components/Projects";
import {Contact} from "@/components/Contact";

export default function Home() {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <main className="dark text-foreground max-w-[1400px] mx-auto mb-10">
          <Navbar />
          <Hero />
          <WorkEx />
          <Skills />
          <Work />
          <Projects />
          <Contact />
        </main>
      </NextThemesProvider>
    </NextUIProvider>
  );
}