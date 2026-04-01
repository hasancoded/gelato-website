import type { Metadata } from "next";
import { BreadcrumbSchema, ProductSchema } from "../../lib/structured-data";
import { PRODUCTS_SEO } from "../../lib/seo-data";

const product = PRODUCTS_SEO.find((p) => p.slug === "galaxy-pro-v8")!;

export const metadata: Metadata = {
  title: "Galaxy Pro V8 — Eight Pot Commercial Gelato Machine",
  description:
    "Galaxy Pro V8 flagship eight pot commercial gelato machine. Maximum flavor variety, high-volume production, LED display, R290 refrigerant. Get a quote.",
  openGraph: {
    title: "Galaxy Pro V8 — Eight Pot Gelato Machine | Miles Ice Tech",
    description: "Flagship eight pot commercial gelato machine. Maximum flavor variety and production volume with LED-lit display.",
    images: [{ url: product.image, width: 800, height: 800, alt: product.altText }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galaxy Pro V8 — Eight Pot Gelato Machine",
    description: "Flagship eight pot gelato machine. Maximum flavor variety. By Miles Ice Tech.",
    images: [product.image],
  },
  alternates: { canonical: `https://milestac.com/products/galaxy-pro-v8` },
};

export default function GalaxyProV8Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Products", url: "/products" }, { name: "Galaxy Pro V8", url: "/products/galaxy-pro-v8" }]} />
      <ProductSchema product={product} />
      {children}
    </>
  );
}
