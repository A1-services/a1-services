import NavBar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Candy Shop",
  description: "Candy place my guy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main className="m-3 sm:mx-auto sm:w-[620px] md:w-[720px] lg:w-[1000px] xl:w-[1200px]">
          {children}
        </main>
      </body>
    </html>
  );
}
