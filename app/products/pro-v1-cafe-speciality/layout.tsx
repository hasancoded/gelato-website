import type { Metadata } from "next";
import { BreadcrumbSchema, ProductSchema } from "../../lib/structured-data";
import { PRODUCTS_SEO } from "../../lib/seo-data";

const product = PRODUCTS_SEO.find((p) => p.slug === "pro-v1-cafe-speciality")!;

export const metadata: Metadata = {
  title: "Pro V1 Café Speciality (LA GALASSIA) — Cafe Gelato Machine",
  description:
    "Pro V1 Café Speciality LA GALASSIA — premium tabletop gelato machine for cafes. LED ambience, built-in spatula, 125 cups/hr. Get a quote from Miles Ice Tech.",
  openGraph: {
    title: "Pro V1 Café Speciality LA GALASSIA — Cafe Gelato Machine | Miles Ice Tech",
    description: "Premium single pot tabletop gelato machine designed for cafes. LED ambience lighting, built-in spatula, 125 cups/hr throughput.",
    images: [{ url: product.image, width: 800, height: 800, alt: product.altText }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pro V1 Café Speciality — Cafe Gelato Machine",
    description: "Premium tabletop gelato machine for cafes. LED ambience, 125 cups/hr. By Miles Ice Tech.",
    images: [product.image],
  },
  alternates: { canonical: `https://milestac.com/products/pro-v1-cafe-speciality` },
};

export default function ProV1CafeSpecialityLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Products", url: "/products" }, { name: "Pro V1 Café Speciality", url: "/products/pro-v1-cafe-speciality" }]} />
      <ProductSchema product={product} />
      {children}
    </>
  );
}
