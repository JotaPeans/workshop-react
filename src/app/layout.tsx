import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " w-full h-screen flex flex-col"}>
        <header className="relative w-full h-32 min-h-32 bg-orange-500 flex justify-center items-center">
          <h1 className="text-white text-3xl font-semibold">Minha Loja Virtual</h1>

          <Link href="/cart" className="absolute right-20">
            <ShoppingCart className="text-white"/>
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
