"use client";

import MainLayout from "@/components/MainLayout";
import { LightTheme } from "@/constant/theme";
import { ThemeProvider } from "@emotion/react";

export default function Home() {
  return (
    <ThemeProvider theme={LightTheme}>
      <main>
        <MainLayout />
      </main>
    </ThemeProvider>
  );
}
