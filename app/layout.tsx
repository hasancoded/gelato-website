import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChatbotWidget } from "./components/ChatbotWidget";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { GlobalStructuredData } from "./lib/structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://milestac.com"),
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "any" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
  title: {
    default: "Commercial Gelato Machines | Miles Ice Tech — Churning Display Freezers",
    template: "%s | Miles Ice Tech",
  },
  description:
    "Miles Ice Tech manufactures the world's best commercial gelato machines. Galaxy Pro churning display freezers for gelaterias, restaurants & catering. 80+ countries, 6000+ clients. Get a quote today.",
  keywords: [
    "gelato machine",
    "commercial gelato machine",
    "ice cream machine",
    "churning freezer",
    "displayable freezer",
    "gelato display freezer",
    "gelato machine for sale",
    "commercial ice cream maker",
    "gelato equipment",
    "gelato machine manufacturer",
    "Miles Ice Tech",
    "Galaxy Pro",
    "gelateria equipment",
    "gelato cart",
    "gelato panini",
    "portable gelato machine",
    "gelato catering machine",
    "professional gelato machine",
    "buy gelato machine",
    "gelato machine price",
  ],
  openGraph: {
    title: "Commercial Gelato Machines | Miles Ice Tech — Churning Display Freezers",
    description:
      "Miles Ice Tech manufactures the world's best commercial gelato machines. Galaxy Pro churning display freezers for gelaterias, restaurants & catering. Get a quote today.",
    type: "website",
    url: "https://milestac.com",
    siteName: "Miles Ice Tech",
    locale: "en_US",
    images: [
      {
        url: "/images/home/hero-gelato-artisan.png",
        width: 1200,
        height: 630,
        alt: "Miles Ice Tech Galaxy Pro commercial gelato machines — churning display freezers for gelaterias and restaurants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Gelato Machines | Miles Ice Tech",
    description:
      "World's best commercial gelato machines. Galaxy Pro churning display freezers for gelaterias, restaurants & catering. 80+ countries.",
    images: ["/images/home/hero-gelato-artisan.png"],
  },
  alternates: {
    canonical: "https://milestac.com",
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
    <html lang="en">
      <head>
        <GlobalStructuredData />
      </head>
      <body className={inter.variable}>
        {children}
        <WhatsAppButton />
        <ChatbotWidget />
      </body>
    </html>
  );
}
