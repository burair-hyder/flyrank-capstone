import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import MobileNavigation from "@/components/layout/MobileNavigation";
import Sidebar from "@/components/layout/Sidebar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TaskFlow",
    template: "%s | TaskFlow",
  },
  description:
    "A responsive task-management dashboard built with Next.js and Tailwind CSS.",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-50 text-slate-950 antialiased`}
      >
        <div className="min-h-screen lg:flex">
          <Sidebar />

          <div className="min-w-0 flex-1">
            <MobileNavigation />

            <main className="mx-auto w-full max-w-7xl p-4 sm:p-6 lg:p-8">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}