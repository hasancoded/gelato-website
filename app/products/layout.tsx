import type { Metadata } from "next";
import { BreadcrumbSchema, AllProductsSchema } from "../lib/structured-data";

export const metadata: Metadata = {
  title: "Gelato Machines for Sale | Galaxy Pro Series",
  description:
    "Browse the Galaxy Pro series — tabletop, floor-standing & mobile gelato machines from Miles Ice Tech. 11 models for every business size. Request pricing now.",
  openGraph: {
    title: "Gelato Machines for Sale | Galaxy Pro Series — Miles Ice Tech",
    description:
      "Explore 11 commercial gelato machines: tabletop, floor-standing, mobile carts & the Gelato Panini press. Galaxy Pro series by Miles Ice Tech.",
    images: [{ url: "/images/products/GALAXY-PRO-V1.png", width: 1200, height: 630, alt: "Galaxy Pro series commercial gelato machines by Miles Ice Tech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gelato Machines for Sale | Galaxy Pro Series",
    description: "11 commercial gelato machines: tabletop, floor-standing, mobile carts. Browse the Galaxy Pro series by Miles Ice Tech.",
    images: ["/images/products/GALAXY-PRO-V1.png"],
  },
  alternates: { canonical: "https://milestac.com/products" },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Products", url: "/products" },
        ]}
      />
      <AllProductsSchema />
      {children}
    </>
  );
}
