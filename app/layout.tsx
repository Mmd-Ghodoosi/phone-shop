"use client";
import "./globals.css";

import { Helmet, HelmetProvider } from "react-helmet-async";


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
        <body>{children}</body>
      </html>
    </HelmetProvider>
  );
}
