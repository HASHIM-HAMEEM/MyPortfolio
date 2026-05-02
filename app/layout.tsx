import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ScrollToTop from "@/components/ScrollToTop";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hashim Hameem",
  description: "Portfolio of Hashim Hameem.",
  metadataBase: new URL('https://hashimhameem.site'),
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Hashim Hameem",
    description: "Portfolio of Hashim Hameem.",
    url: 'https://hashimhameem.site',
    siteName: 'Hashim Hameem Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Hashim Hameem",
    description: "Portfolio of Hashim Hameem.",
    creator: '@HashimScnz',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <LanguageProvider>
            <LanguageSwitcher />
            <ThemeToggle />
            <ScrollToTop />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
