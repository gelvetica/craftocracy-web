import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import "./globals.css";
import React from "react";

import {SWRProvider} from "@/components/SWRProvider"

export const metadata: Metadata = {
  title: "Craftocracy",
  description: "minecraft's most democratic server",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
        className={`macchiato bg-mantle text-text`}
    >
    <SWRProvider>
    <Navbar/>
    <br/>
    <div className="container rounded-2xl p-4 bg-base text-text mx-auto w-full 2xl:w-9/12 xl:w-3/4">
        {children}
    </div>
    </SWRProvider>
    </body>
    </html>
  );
}
