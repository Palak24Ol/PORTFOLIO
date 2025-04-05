import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import NavBar from "@/components/main/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

 

export const metadata: Metadata = {
  title: "MY PORTFOLIO",
  description: "THIS IS MY PORTFOLIO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas/>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
