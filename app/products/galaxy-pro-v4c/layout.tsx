import type { Metadata } from "next";
import { BreadcrumbSchema, ProductSchema } from "../../lib/structured-data";
import { PRODUCTS_SEO } from "../../lib/seo-data";

const product = PRODUCTS_SEO.find((p) => p.slug === "galaxy-pro-v4c")!;

export const metadata: Metadata = {
  title: "Galaxy Pro V4C — Four Pot Gelato Cart with Digital Display",
  description:
    "Galaxy Pro V4C four pot gelato cart with canopy and digital display. Four-flavor outdoor service for premium events and catering. Get a quote.",
  openGraph: {
    title: "Galaxy Pro V4C — Premium Gelato Cart | Miles Ice Tech",
    description: "Flagship four pot gelato cart with canopy and digital display. Four-flavor outdoor service for premium events.",
    images: [{ url: product.image, width: 800, height: 800, alt: product.altText }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galaxy Pro V4C — Four Pot Gelato Cart",
    description: "Four pot gelato cart with digital display for premium outdoor service. By Miles Ice Tech.",
    images: [product.image],
  },
  alternates: { canonical: `https://milestac.com/products/galaxy-pro-v4c` },
};

export default function GalaxyProV4CLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Products", url: "/products" }, { name: "Galaxy Pro V4C", url: "/products/galaxy-pro-v4c" }]} />
      <ProductSchema product={product} />
      {children}
    </>
  );
}
