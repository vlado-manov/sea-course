import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://aiseo.bg"
  ),
  title: {
    default: "AI SEO Академия | GEO, AI Overviews, Merchant Center",
    template: "%s | AI SEO Академия",
  },
  description:
    "Научи AI SEO, GEO оптимизация, Google AI Overviews, Merchant Center, Структурирани данни и AI видимост. Пълен курс на български.",
  keywords: [
    "AI SEO",
    "GEO",
    "Generative Engine Optimization",
    "Google AI Overviews",
    "Merchant Center",
    "Structured Data",
    "Schema.org",
    "AI видимост",
    "AI търсене",
    "SEO курс",
    "SEO на български",
  ],
  openGraph: {
    type: "website",
    locale: "bg_BG",
    alternateLocale: "en_US",
    siteName: "AI SEO Академия",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "AI SEO Академия",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@aiseoacademy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
