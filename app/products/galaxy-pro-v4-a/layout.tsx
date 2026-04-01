import type { Metadata } from "next";
import { BreadcrumbSchema, ProductSchema } from "../../lib/structured-data";
import { PRODUCTS_SEO } from "../../lib/seo-data";

const product = PRODUCTS_SEO.find((p) => p.slug === "galaxy-pro-v4-a")!;

export const metadata: Metadata = {
  title: "Galaxy Pro V4-A — Four Pot Gelato Machine with Casters",
  description:
    "Galaxy Pro V4-A four pot floor-standing gelato machine with casters. Four-flavor display, independent temperature control, R290 refrigerant. Get a quote.",
  openGraph: {
    title: "Galaxy Pro V4-A — Four Pot Gelato Machine | Miles Ice Tech",
    description: "Four pot floor-standing gelato machine with casters. Four-flavor simultaneous production with independent temperature control.",
    images: [{ url: product.image, width: 800, height: 800, alt: product.altText }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galaxy Pro V4-A — Four Pot Gelato Machine",
    description: "Four pot gelato machine with casters. Four-flavor display production. By Miles Ice Tech.",
    images: [product.image],
  },
  alternates: { canonical: `https://milestac.com/products/galaxy-pro-v4-a` },
};

export default function GalaxyProV4ALayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Products", url: "/products" }, { name: "Galaxy Pro V4-A", url: "/products/galaxy-pro-v4-a" }]} />
      <ProductSchema product={product} />
      {children}
    </>
  );
}
