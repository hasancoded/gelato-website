import type { Metadata } from "next";
import { BreadcrumbSchema, ProductSchema } from "../../lib/structured-data";
import { PRODUCTS_SEO } from "../../lib/seo-data";

const product = PRODUCTS_SEO.find((p) => p.slug === "galaxy-pro-v1")!;

export const metadata: Metadata = {
  title: "Galaxy Pro V1 — Tabletop Gelato Machine for Sale",
  description:
    "Galaxy Pro V1 single pot tabletop gelato machine. 125 cups/hr, R290 eco-refrigerant, SECOP compressor. CE, ETL, NSF certified. Get a quote from Miles Ice Tech.",
  openGraph: {
    title: "Galaxy Pro V1 — Tabletop Gelato Machine | Miles Ice Tech",
    description: "Single pot tabletop gelato machine. 125 cups/hr, live display churning, R290 eco-refrigerant. Perfect for cafes & small gelaterias.",
    images: [{ url: product.image, width: 800, height: 800, alt: product.altText }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galaxy Pro V1 — Tabletop Gelato Machine",
    description: "Single pot tabletop gelato machine. 125 cups/hr, live display churning. Perfect for cafes & gelaterias.",
    images: [product.image],
  },
  alternates: { canonical: `https://milestac.com/products/galaxy-pro-v1` },
};

export default function GalaxyProV1Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Products", url: "/products" }, { name: "Galaxy Pro V1", url: "/products/galaxy-pro-v1" }]} />
      <ProductSchema product={product} />
      {children}
    </>
  );
}
