import type { Metadata } from "next";
import { BreadcrumbSchema, ProductSchema } from "../../lib/structured-data";
import { PRODUCTS_SEO } from "../../lib/seo-data";

const product = PRODUCTS_SEO.find((p) => p.slug === "galaxy-pro-v4-b")!;

export const metadata: Metadata = {
  title: "Galaxy Pro V4-B — Four Pot Floor-Standing Gelato Machine",
  description:
    "Galaxy Pro V4-B four pot floor-standing gelato machine. Fixed-position design, four-flavor display, independent controls, R290 refrigerant. Get a quote.",
  openGraph: {
    title: "Galaxy Pro V4-B — Four Pot Gelato Machine | Miles Ice Tech",
    description: "Four pot floor-standing gelato machine for permanent installation. Four-flavor display with independent temperature control.",
    images: [{ url: product.image, width: 800, height: 800, alt: product.altText }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galaxy Pro V4-B — Four Pot Gelato Machine",
    description: "Four pot gelato machine, fixed-position design. Four-flavor display. By Miles Ice Tech.",
    images: [product.image],
  },
  alternates: { canonical: `https://milestac.com/products/galaxy-pro-v4-b` },
};

export default function GalaxyProV4BLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Products", url: "/products" }, { name: "Galaxy Pro V4-B", url: "/products/galaxy-pro-v4-b" }]} />
      <ProductSchema product={product} />
      {children}
    </>
  );
}
