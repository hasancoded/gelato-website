import type { Metadata } from "next";
import { BreadcrumbSchema, ProductSchema } from "../../lib/structured-data";
import { PRODUCTS_SEO } from "../../lib/seo-data";

const product = PRODUCTS_SEO.find((p) => p.slug === "galaxy-pro-v2")!;

export const metadata: Metadata = {
  title: "Galaxy Pro V2 — Dual Pot Floor-Standing Gelato Machine",
  description:
    "Galaxy Pro V2 dual pot floor-standing gelato machine. 250 cups/hr, two flavors, lockable casters, R290 refrigerant. Get a quote from Miles Ice Tech.",
  openGraph: {
    title: "Galaxy Pro V2 — Dual Pot Commercial Gelato Machine | Miles Ice Tech",
    description: "Dual pot floor-standing gelato machine. 250 cups/hr, two-flavor simultaneous production with lockable casters.",
    images: [{ url: product.image, width: 800, height: 800, alt: product.altText }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galaxy Pro V2 — Dual Pot Gelato Machine",
    description: "Dual pot floor-standing gelato machine. 250 cups/hr, two flavors. By Miles Ice Tech.",
    images: [product.image],
  },
  alternates: { canonical: `https://milestac.com/products/galaxy-pro-v2` },
};

export default function GalaxyProV2Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Products", url: "/products" }, { name: "Galaxy Pro V2", url: "/products/galaxy-pro-v2" }]} />
      <ProductSchema product={product} />
      {children}
    </>
  );
}
