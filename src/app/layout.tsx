import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import SpaceBackground from "@/Components/Background";
import FloatingBackToTop from "@/Components/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammadajayi.vercel.app"),
  title: {
    default: "Muhammad Ajayi — Frontend Developer",
    template: "%s | Muhammad Ajayi",
  },
  description:
    "Frontend and full-stack developer building fast, responsive, production-ready web applications with Next.js, React, TypeScript, and Tailwind CSS.",
  keywords: [
    "Muhammad Ajayi",
    "Ajayi Muhammad Adeyemi",
    "Frontend Developer",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Lagos",
  ],
  authors: [{ name: "Muhammad Ajayi" }],
  creator: "Muhammad Ajayi",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Muhammad Ajayi — Frontend Developer",
    description:
      "Explore my latest web applications, projects, and technical stack built with Next.js, React, and TypeScript.",
    siteName: "Muhammad Ajayi",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@Muhd_dev",
    title: "Muhammad Ajayi — Frontend & Full-Stack Developer",
    description:
      "Explore my latest web applications, projects, and technical stack built with Next.js, React, and TypeScript.",
    images: ["/dp.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} h-full antialiased overflow-x-hidden bg-cover bg-center bg-no-repeat scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <Analytics />
        <SpaceBackground />
        <FloatingBackToTop />
        {children}
        <div className="p-5 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-400 bg-linear-to-b from-white/10 via-white/12 to-transparent text-slate-5">
          <span>© 2026 Ajayi Muhammad Adeyemi. All rights reserved.</span>
          <span>Lagos, Nigeria • Built with Next.js & Tailwind</span>
        </div>
      </body>
    </html>
  );
}
