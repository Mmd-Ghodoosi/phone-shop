"use client";
import "./globals.css";

import { Helmet, HelmetProvider } from "react-helmet-async";
import { ToastContainer } from 'react-toastify';


import "react-toastify/dist/ReactToastify.css";

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
        <body>{children}
      <ToastContainer rtl={true} position="top-center" />
        </body>
      </html>
    </HelmetProvider>

  );
}
