import type { Metadata } from "next";
import { Geist, Geist_Mono, Elms_Sans } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const elmsSans = Elms_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-elms-sans", // optional: exposes it as a CSS var
});


export const metadata: Metadata = {
  title: "Peace Aboluwade",
  description:
    " A performance driven professional with hands on experience in customer relations, adeptat building rapport, resolving inquires, and driving customers satisfaction.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${elmsSans.variable} h-full antialiased scroll-smooth`}>
      <body className={`min-h-full flex flex-col ${elmsSans.className}`}>{children}</body>
    </html>
  );
}
