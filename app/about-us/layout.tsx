import type { Metadata } from "next";
import { BreadcrumbSchema } from "../lib/structured-data";

export const metadata: Metadata = {
  title: "About Miles Ice Tech | World's Largest Gelato Machine Manufacturer",
  description:
    "Miles Ice Tech: 3 factories, 6000+ clients, 80+ countries. The world's largest manufacturer of displayable churning freezers. Offices in China, USA & Italy.",
  openGraph: {
    title: "About Miles Ice Tech | World's Largest Gelato Machine Manufacturer",
    description:
      "3 factories, 6000+ clients, 80+ countries. Meet the world's largest manufacturer of commercial gelato machines and churning display freezers.",
    images: [{ url: "/images/about-us/pic1.png", width: 1200, height: 630, alt: "Miles Ice Tech factory and team — world's largest gelato machine manufacturer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Miles Ice Tech | Gelato Machine Manufacturer",
    description: "3 factories, 6000+ clients, 80+ countries. The world's largest manufacturer of commercial gelato machines.",
    images: ["/images/about-us/pic1.png"],
  },
  alternates: { canonical: "https://milestac.com/about-us" },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about-us" },
        ]}
      />
      {children}
    </>
  );
}
