import { cn } from "@/lib/utils";

import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Providers from "@/components/provider";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Next.js Template",
  description: "A simple Next.js template with Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn(
            "flex min-h-screen flex-col",
            geistSans.variable,
            geistMono.variable,
            inter.variable,
            playfair.variable,
          )}
        >
          <Providers>
            <Header />
            <main className="grow">{children}</main>
            <Footer />
          </Providers>{" "}
        </body>
      </html>
    </ClerkProvider>
  );
}
