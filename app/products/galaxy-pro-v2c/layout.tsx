import type { Metadata } from "next";
import { BreadcrumbSchema, ProductSchema } from "../../lib/structured-data";
import { PRODUCTS_SEO } from "../../lib/seo-data";

const product = PRODUCTS_SEO.find((p) => p.slug === "galaxy-pro-v2c")!;

export const metadata: Metadata = {
  title: "Galaxy Pro V2C — Dual Pot Gelato Cart with Canopy",
  description:
    "Galaxy Pro V2C dual pot gelato cart with branded canopy. Two-flavor outdoor service, SECOP compressors, R290 refrigerant. Ideal for events. Get a quote.",
  openGraph: {
    title: "Galaxy Pro V2C — Gelato Cart with Canopy | Miles Ice Tech",
    description: "Dual pot gelato cart with branded canopy. Two-flavor outdoor service for festivals, markets, and events.",
    images: [{ url: product.image, width: 800, height: 800, alt: product.altText }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galaxy Pro V2C — Gelato Cart with Canopy",
    description: "Dual pot gelato cart with canopy for outdoor service. By Miles Ice Tech.",
    images: [product.image],
  },
  alternates: { canonical: `https://milestac.com/products/galaxy-pro-v2c` },
};

export default function GalaxyProV2CLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Products", url: "/products" }, { name: "Galaxy Pro V2C", url: "/products/galaxy-pro-v2c" }]} />
      <ProductSchema product={product} />
      {children}
    </>
  );
}
