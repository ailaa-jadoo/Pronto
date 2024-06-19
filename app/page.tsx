"use client";
import {NextUIProvider} from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";

import { Hero } from "@/components/Hero";
import WorkEx from "@/components/WorkEx";
import { Skills } from "@/components/Skills";
import { Navbar } from "@/components/Navbar";
import Work from "@/components/Work";
import {Test} from "@/components/Test";

export default function Home() {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <main className="dark text-foreground max-w-[1400px] mx-auto">
          <Navbar />
          <Hero />
          <WorkEx />
          <Skills />
          <Work />
          <Test />
        </main>
      </NextThemesProvider>
    </NextUIProvider>
  );
}