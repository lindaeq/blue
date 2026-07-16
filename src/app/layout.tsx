import type { Metadata } from "next";
import { Hind_Madurai, Inter } from "next/font/google";
import "./globals.css";

const hindMadurai = Hind_Madurai({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hind-madurai",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Linda Qi",
  description: "cs @ uwaterloo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${hindMadurai.variable} ${inter.variable}`}>
      <body className="font-sans text-white">{children}</body>
    </html>
  );
}
