// ═══════════════════════════════════════════════════════════════
// JSON-LD STRUCTURED DATA COMPONENTS
// Renders <script type="application/ld+json"> for SEO
// ═══════════════════════════════════════════════════════════════

import { SITE_URL, SITE_NAME, SITE_LOGO, FAQ_DATA, PRODUCTS_SEO, type ProductSEO, type FAQItem } from "./seo-data";

// ── Helper ──────────────────────────────────────────────────────

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// ── Organization Schema ─────────────────────────────────────────

export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: SITE_LOGO,
    description:
      "Miles Ice Tech is the world's largest manufacturer of displayable churning freezers. Galaxy Pro series commercial gelato machines for gelaterias, restaurants, hotels, and catering.",
    foundingDate: "2015",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 100,
    },
    slogan: "The World's Most Professional Displayable Churning Freezers",
    brand: {
      "@type": "Brand",
      name: "Galaxy Pro",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+971508877504",
        contactType: "sales",
        availableLanguage: ["English", "Chinese", "Italian"],
      },
      {
        "@type": "ContactPoint",
        email: "info@milestac.com",
        contactType: "customer service",
        availableLanguage: ["English", "Chinese"],
      },
      {
        "@type": "ContactPoint",
        email: "richard@txfrozentech.com",
        contactType: "sales",
        areaServed: "North America",
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        email: "luca@milestac.com",
        contactType: "sales",
        areaServed: "Europe",
        availableLanguage: ["English", "Italian"],
      },
    ],
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "585 Jinhua Town, Xiaoshan District",
        addressLocality: "Hangzhou",
        addressCountry: "CN",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "2801 Technology Drive Suite 127",
        addressLocality: "Plano",
        addressRegion: "TX",
        postalCode: "75074",
        addressCountry: "US",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Via Bracciano, 10",
        addressLocality: "San Giuliano Milanese",
        addressRegion: "MI",
        postalCode: "20098",
        addressCountry: "IT",
      },
    ],
    sameAs: [
      // Add social media URLs here when available
    ],
  };

  return <JsonLd data={data} />;
}

// ── WebSite Schema with SearchAction ────────────────────────────

export function WebSiteSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Miles Ice Tech — manufacturer of commercial gelato machines and displayable churning freezers. Galaxy Pro series for gelaterias, restaurants, and catering worldwide.",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: SITE_LOGO,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/products?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return <JsonLd data={data} />;
}

// ── LocalBusiness Schemas ───────────────────────────────────────

function localBusinessData(
  name: string,
  streetAddress: string,
  locality: string,
  region: string,
  postalCode: string,
  country: string,
  email: string,
  geo: { lat: number; lng: number },
  areaServed: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#${locality.toLowerCase().replace(/\s/g, "-")}`,
    name,
    image: SITE_LOGO,
    url: SITE_URL,
    email,
    description: `${SITE_NAME} ${locality} office — commercial gelato machine sales, leasing, and support for ${areaServed}.`,
    address: {
      "@type": "PostalAddress",
      streetAddress,
      addressLocality: locality,
      addressRegion: region,
      postalCode,
      addressCountry: country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.lat,
      longitude: geo.lng,
    },
    areaServed,
    priceRange: "$$$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    parentOrganization: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function LocalBusinessSchemas() {
  const businesses = [
    localBusinessData(
      "Hangzhou Gelato Tech Co., Ltd.",
      "585 Jinhua Town, Xiaoshan District",
      "Hangzhou",
      "Zhejiang",
      "311200",
      "CN",
      "info@milestac.com",
      { lat: 30.1833, lng: 120.2641 },
      "Asia-Pacific",
    ),
    localBusinessData(
      "Texas Frozen Tech",
      "2801 Technology Drive Suite 127",
      "Plano",
      "TX",
      "75074",
      "US",
      "richard@txfrozentech.com",
      { lat: 33.0198, lng: -96.6989 },
      "North America, South America",
    ),
    localBusinessData(
      "MILES S.R.L.",
      "Via Bracciano, 10",
      "San Giuliano Milanese",
      "MI",
      "20098",
      "IT",
      "luca@milestac.com",
      { lat: 45.3983, lng: 9.2833 },
      "Europe, Middle East, Africa",
    ),
  ];

  return (
    <>
      {businesses.map((biz, i) => (
        <JsonLd key={i} data={biz} />
      ))}
    </>
  );
}

// ── Product Schema ──────────────────────────────────────────────

export function ProductSchema({ product }: { product: ProductSEO }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `${SITE_URL}${product.image}`,
    url: `${SITE_URL}/products/${product.slug}`,
    sku: product.sku,
    brand: {
      "@type": "Brand",
      name: "Miles Ice Tech",
    },
    manufacturer: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    category: product.category,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      priceValidUntil: "2027-12-31",
      seller: {
        "@type": "Organization",
        name: SITE_NAME,
      },
      url: `${SITE_URL}/products/${product.slug}`,
    },
    additionalProperty: product.features.map((f) => ({
      "@type": "PropertyValue",
      name: "Feature",
      value: f,
    })),
  };

  return <JsonLd data={data} />;
}

export function AllProductsSchema() {
  return (
    <>
      {PRODUCTS_SEO.map((p) => (
        <ProductSchema key={p.slug} product={p} />
      ))}
    </>
  );
}

// ── Breadcrumb Schema ───────────────────────────────────────────

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };

  return <JsonLd data={data} />;
}

// ── FAQ Schema ──────────────────────────────────────────────────

export function FAQSchema({ faqs }: { faqs?: FAQItem[] }) {
  const faqItems = faqs || FAQ_DATA;
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return <JsonLd data={data} />;
}

// ── Aggregate: Global Schemas (for layout.tsx) ──────────────────

export function GlobalStructuredData() {
  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
      <LocalBusinessSchemas />
    </>
  );
}
