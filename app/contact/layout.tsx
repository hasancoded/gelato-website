import type { Metadata } from "next";
import { BreadcrumbSchema } from "../lib/structured-data";

export const metadata: Metadata = {
  title: "Contact Miles Ice Tech | Gelato Machine Inquiries & Quotes",
  description:
    "Contact Miles Ice Tech for gelato machine quotes, leasing, and catering. Offices in Hangzhou China, Plano Texas USA, and Milan Italy. Response within 24 hours.",
  openGraph: {
    title: "Contact Miles Ice Tech | Gelato Machine Inquiries & Quotes",
    description:
      "Get a quote for commercial gelato machines. Contact our offices in China, USA & Italy. We respond within 24 hours.",
    images: [{ url: "/favicon.png", width: 512, height: 512, alt: "Miles Ice Tech logo — contact us for gelato machine quotes" }],
  },
  twitter: {
    card: "summary",
    title: "Contact Miles Ice Tech | Gelato Machine Quotes",
    description: "Get a quote for commercial gelato machines. Offices in China, USA & Italy.",
    images: ["/favicon.png"],
  },
  alternates: { canonical: "https://milestac.com/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />
      {children}
    </>
  );
}
