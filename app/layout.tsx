import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";


const inter = Vazirmatn({ subsets: ["arabic", "latin"] });

export const metadata: Metadata = {
  title: "Phone Shop",
  description: "Phone Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
