import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const headingFont = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Simpang Empat Suki | Chinese Food & Fresh Seafood",
  description:
    "Landing page resmi Simpang Empat Suki di Balikpapan Baru untuk melihat menu unggulan, jam operasional, dan pesan langsung via WhatsApp atau Linktree.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${bodyFont.variable} ${headingFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
