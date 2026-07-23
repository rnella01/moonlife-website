import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// GT Standard substitute per DESIGN.md — Inter carries the same
// tight-tracking, grade-over-weight hierarchy.
const gtStandard = Inter({
  variable: "--font-gt-standard",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moonlife — Garments for every phase",
  description:
    "Moonlife is a garments store bringing everyday wear, ethnic classics, and kidswear from our shop floor in India to your doorstep.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${gtStandard.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
