"use client";
import {NextUIProvider} from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";

import { Hero } from "@/components/Hero";
import WorkEx from "@/components/WorkEx";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <main className="dark text-foreground">
          <Hero />
          <WorkEx />
          <Skills />
        </main>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
