import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hashim Hameem | Full-Stack Developer & Mobile App Specialist",
  description: "Portfolio of Hashim Hameem - Full-Stack Developer & Mobile App Specialist. Crafting innovative mobile and web solutions with Flutter, React, and Node.js.",
  metadataBase: new URL('https://hashimhameem.site'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Hashim Hameem | Full-Stack Developer & Mobile App Specialist",
    description: "Portfolio of Hashim Hameem - Full-Stack Developer & Mobile App Specialist. Crafting innovative mobile and web solutions with Flutter, React, and Node.js.",
    url: 'https://hashimhameem.site',
    siteName: 'Hashim Hameem Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Hashim Hameem | Full-Stack Developer & Mobile App Specialist",
    description: "Portfolio of Hashim Hameem - Full-Stack Developer & Mobile App Specialist",
    creator: '@HashimScnz',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <LanguageSwitcher />
          <ScrollToTop />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
