import type { Metadata } from "next";
import { BreadcrumbSchema, ProductSchema } from "../../lib/structured-data";
import { PRODUCTS_SEO } from "../../lib/seo-data";

const product = PRODUCTS_SEO.find((p) => p.slug === "galaxy-ev")!;

export const metadata: Metadata = {
  title: "Galaxy EV — Battery-Powered Portable Gelato Machine",
  description:
    "Galaxy EV battery-powered portable gelato machine. 8-hour lithium battery, 200 cups/hr, no power outlet needed. Perfect for events & catering. Get a quote.",
  openGraph: {
    title: "Galaxy EV — Portable Battery-Powered Gelato Machine | Miles Ice Tech",
    description: "The only battery-powered gelato machine on the market. 8-hour lithium battery, 200 cups/hr. Built for events, catering & mobile service.",
    images: [{ url: product.image, width: 800, height: 800, alt: product.altText }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galaxy EV — Battery-Powered Gelato Machine",
    description: "8-hour battery, 200 cups/hr. The only battery-powered gelato machine. By Miles Ice Tech.",
    images: [product.image],
  },
  alternates: { canonical: `https://milestac.com/products/galaxy-ev` },
};

export default function GalaxyEVLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Products", url: "/products" }, { name: "Galaxy EV", url: "/products/galaxy-ev" }]} />
      <ProductSchema product={product} />
      {children}
    </>
  );
}
