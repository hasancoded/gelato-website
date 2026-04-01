import type { Metadata } from "next";
import { BreadcrumbSchema, ProductSchema } from "../../lib/structured-data";
import { PRODUCTS_SEO } from "../../lib/seo-data";

const product = PRODUCTS_SEO.find((p) => p.slug === "gelato-panini")!;

export const metadata: Metadata = {
  title: "Gelato Panini UFO 2000 — Ice Cream Sandwich Press",
  description:
    "Gelato Panini UFO 2000 commercial ice cream sandwich press. 900W, 180°C, non-stick plate. Create gelato panini in seconds. Compact 8.8kg. Get a quote.",
  openGraph: {
    title: "Gelato Panini UFO 2000 — Ice Cream Sandwich Press | Miles Ice Tech",
    description: "Commercial gelato panini press. 900W, 180°C, non-stick plate. Create warm toasted gelato sandwiches in seconds.",
    images: [{ url: product.image, width: 800, height: 800, alt: product.altText }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gelato Panini UFO 2000 — Sandwich Press",
    description: "Commercial gelato panini press. 900W, non-stick. Create gelato sandwiches in seconds. By Miles Ice Tech.",
    images: [product.image],
  },
  alternates: { canonical: `https://milestac.com/products/gelato-panini` },
};

export default function GelatoPaniniLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Products", url: "/products" }, { name: "Gelato Panini UFO 2000", url: "/products/gelato-panini" }]} />
      <ProductSchema product={product} />
      {children}
    </>
  );
}
