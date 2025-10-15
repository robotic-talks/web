import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { randomInt } from "crypto";
import { auth } from "@/lib/firebase";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Robotics Talks",
  description: "Exploring Robotics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen min-h-screen overflow-x-hidden overflow-y-scroll font-sans`}
      >
        <Navbar title="Let's Talk Robotics" />
        {children}

        <div className="z-50">
          <Toaster position="bottom-center" reverseOrder={false} />
        </div>

        <Footer />
      </body>
    </html>
  );
}
