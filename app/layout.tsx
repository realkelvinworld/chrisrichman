import { Caveat, Geist, Geist_Mono, Imbue } from "next/font/google";
import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/ux/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const imbue = Imbue({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-imbue",
});

const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });

const juniCode = localFont({
  src: [
    {
      path: "../public/Fonts/JuniCode/Junicode-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/Fonts/JuniCode/Junicode.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-juniCode",
});

export const metadata: Metadata = {
  title: "Chris Richman | Photographer & Creative Director",
  description:
    "An experienced visual storyteller based in Accra, Ghana.He discovered his passion for photography and videography in church, where his creativity was first nurtured. Guided by inspiration from his elder brother, he developed his craft through self-teaching and hands-on practice. Today, he combines technical expertise with creativity to produce compelling visuals that connect with audiences and elevate stories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${imbue.variable}  ${geistMono.variable}  ${juniCode.variable} 
           antialiased bg-[#F7F5F1]`}
      >
        <div>{children}</div>
        <Navigation />
      </body>
    </html>
  );
}
