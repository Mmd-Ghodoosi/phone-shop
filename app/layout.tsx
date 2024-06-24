"use client";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

import { Helmet, HelmetProvider } from "react-helmet-async";

const inter = Vazirmatn({ subsets: ["arabic", "latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Phone Shop</title>
      </Helmet>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </HelmetProvider>
  );
}
