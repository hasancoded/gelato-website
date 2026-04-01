import type { Metadata } from "next";
import { BreadcrumbSchema, ProductSchema } from "../../lib/structured-data";
import { PRODUCTS_SEO } from "../../lib/seo-data";

const product = PRODUCTS_SEO.find((p) => p.slug === "galaxy-pro-v6")!;

export const metadata: Metadata = {
  title: "Galaxy Pro V6 — Six Pot Commercial Gelato Display Freezer",
  description:
    "Galaxy Pro V6 six pot commercial gelato display freezer. Six-flavor simultaneous production, SECOP compressors, R290 eco-refrigerant. Get a quote.",
  openGraph: {
    title: "Galaxy Pro V6 — Six Pot Gelato Display Freezer | Miles Ice Tech",
    description: "Six pot commercial gelato machine. Display and serve six flavors simultaneously with independent controls and LED spotlights.",
    images: [{ url: product.image, width: 800, height: 800, alt: product.altText }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galaxy Pro V6 — Six Pot Gelato Machine",
    description: "Six pot gelato display freezer. Six-flavor simultaneous production. By Miles Ice Tech.",
    images: [product.image],
  },
  alternates: { canonical: `https://milestac.com/products/galaxy-pro-v6` },
};

export default function GalaxyProV6Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Products", url: "/products" }, { name: "Galaxy Pro V6", url: "/products/galaxy-pro-v6" }]} />
      <ProductSchema product={product} />
      {children}
    </>
  );
}
