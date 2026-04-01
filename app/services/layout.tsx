import type { Metadata } from "next";
import { BreadcrumbSchema } from "../lib/structured-data";

export const metadata: Metadata = {
  title: "Gelato Machine Leasing, Sales & Catering Services",
  description:
    "Buy or lease a commercial gelato machine with training included. Book our gelato catering service for events. Flexible terms from Miles Ice Tech.",
  openGraph: {
    title: "Gelato Machine Leasing, Sales & Catering Services — Miles Ice Tech",
    description:
      "Purchase or lease commercial gelato machines with hands-on gelato training. Full-service gelato catering for corporate events, weddings & more.",
    images: [{ url: "/images/services/pic1.jpg", width: 1200, height: 630, alt: "Miles Ice Tech gelato machine services — purchase, lease, and catering" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gelato Machine Leasing, Sales & Catering",
    description: "Purchase or lease commercial gelato machines with training. Full-service gelato catering for events.",
    images: ["/images/services/pic1.jpg"],
  },
  alternates: { canonical: "https://milestac.com/services" },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ]}
      />
      {children}
    </>
  );
}
