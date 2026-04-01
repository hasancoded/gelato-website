// ═══════════════════════════════════════════════════════════════
// SEO DATA — Centralized SEO content for Miles Ice Tech
// ═══════════════════════════════════════════════════════════════

export const SITE_URL = "https://milestac.com";
export const SITE_NAME = "Miles Ice Tech";
export const SITE_LOGO = `${SITE_URL}/favicon.png`;

// ── Product SEO Data ────────────────────────────────────────────

export interface ProductSEO {
  slug: string;
  name: string;
  sku: string;
  category: string;
  h1: string;
  description: string;
  features: string[];
  whoIsThisFor: string;
  altText: string;
  image: string;
  keywords: string[];
}

export const PRODUCTS_SEO: ProductSEO[] = [
  {
    slug: "galaxy-pro-v1",
    name: "Galaxy Pro V1",
    sku: "MIT-GPV1",
    category: "Tabletop Gelato Machine",
    h1: "Galaxy Pro V1 — Single Pot Tabletop Gelato Machine",
    description:
      "The Galaxy Pro V1 is a compact, single-pot tabletop gelato machine built for cafes, gelaterias, and small restaurants that want to produce, display, and serve fresh gelato from one countertop unit. With its 3-liter batch capacity and 950W German SECOP compressor, the V1 churns up to 125 cups per hour while keeping your product at the perfect serving temperature. The anti-condensation countertop design and anti-fog lids let customers watch the gelato being made — turning production into a live showpiece. R290 eco-friendly refrigerant keeps your operation sustainable. Whether you are starting a gelato business or adding gelato to an existing menu, the Galaxy Pro V1 delivers professional results without the footprint of a floor-standing machine. CE, ETL, NSF, and RoHS certified for worldwide commercial use.",
    features: [
      "3.0L max batch capacity — churn up to 125 cups (80g) per hour from a single pot",
      "Anti-fog lids and LED spotlights for live gelato-making display",
      "German SECOP compressor with R290 eco-friendly natural refrigerant",
      "Self-adaptive scraper blades for consistent texture and zero manual adjustment",
      "Certified CE, ETL, NSF, RoHS — ready for commercial use in 80+ countries",
    ],
    whoIsThisFor:
      "Ideal for cafes, bakeries, small gelaterias, hotel breakfast bars, and food trucks looking for a compact, professional gelato machine that fits on a countertop without sacrificing production quality.",
    altText:
      "Galaxy Pro V1 single pot tabletop gelato machine by Miles Ice Tech — compact commercial churning display freezer for cafes and gelaterias",
    image: "/images/products/GALAXY-PRO-V1.png",
    keywords: ["tabletop gelato machine", "single pot gelato machine", "compact gelato machine", "countertop ice cream maker"],
  },
  {
    slug: "pro-v1-cafe-speciality",
    name: "Pro V1 Café Speciality (LA GALASSIA)",
    sku: "MIT-PV1CS",
    category: "Tabletop Gelato Machine",
    h1: "Pro V1 Café Speciality — Premium Tabletop Gelato Machine for Cafes",
    description:
      "The Pro V1 Café Speciality, branded LA GALASSIA, is a refined single-pot tabletop gelato machine designed specifically for the cafe environment. It shares the proven Galaxy Pro V1 platform — 3-liter batch capacity, German SECOP compressor, R290 refrigerant — and adds cafe-first features like a decorative LED ambience light, built-in spatula holder, and a premium finish that complements coffee-bar aesthetics. Produce up to 125 cups of gelato per hour right at your counter while customers watch. The anti-condensation surface protects your countertop, and the anti-fog lid keeps the view crystal clear. If you run a specialty coffee shop, brunch spot, or boutique cafe and want to add artisanal gelato to your menu without additional kitchen space, the LA GALASSIA is your machine.",
    features: [
      "Decorative LED ambience light — enhances cafe atmosphere while showcasing gelato production",
      "Built-in spatula holder for seamless scooping and serving at the counter",
      "3.0L batch capacity and 125-cup/hour throughput on a compact countertop footprint",
      "Anti-condensation countertop surface and anti-fog lids for a clean display",
      "CE, ETL, NSF certified — commercial-grade build designed for cafe environments",
    ],
    whoIsThisFor:
      "Perfect for specialty coffee shops, brunch cafes, dessert bars, and boutique eateries that want to serve house-made gelato with a premium aesthetic, without dedicating floor space to a full machine.",
    altText:
      "Pro V1 Café Speciality LA GALASSIA tabletop gelato machine by Miles Ice Tech — premium cafe gelato display freezer with LED ambience lighting",
    image: "/images/products/PRO-V1-CAFÉ-SPECIALITY.png",
    keywords: ["cafe gelato machine", "LA GALASSIA gelato machine", "specialty cafe ice cream maker", "premium tabletop gelato machine"],
  },
  {
    slug: "galaxy-pro-v2",
    name: "Galaxy Pro V2",
    sku: "MIT-GPV2",
    category: "Floor Standing Gelato Machine",
    h1: "Galaxy Pro V2 — Dual Pot Floor-Standing Gelato Machine",
    description:
      "The Galaxy Pro V2 is a dual-pot, floor-standing commercial gelato machine that lets you churn two flavors simultaneously, producing up to 250 cups per hour. With lockable casters and a 720mm × 610mm footprint, you can position it at your counter, in a front-of-house display area, or roll it between stations. Each pot holds up to 3 liters per batch, powered by a 1900W system with dual SECOP compressors and R290 eco-refrigerant. Anti-fog lids, LED spotlights, and a transparent display design turn gelato production into a customer experience. The V2 is the entry-level floor-standing model in the Galaxy Pro lineup — ideal for mid-volume gelaterias, restaurants, and dessert bars that need more throughput than a tabletop unit but don't require four or more pots.",
    features: [
      "Dual independent pots — churn two flavors at once, 250 cups/hour total output",
      "Floor-standing with lockable casters for flexible front-of-house positioning",
      "1900W dual SECOP compressor system with R290 natural refrigerant",
      "Anti-fog lids and LED spotlights for transparent gelato-making display",
      "CE, ETL, NSF, RoHS certified — ready for commercial deployment worldwide",
    ],
    whoIsThisFor:
      "Built for mid-volume gelaterias, dessert restaurants, hotel buffets, and cafes that need dual-flavor production and a floor-standing display unit with mobility.",
    altText:
      "Galaxy Pro V2 dual pot floor-standing gelato machine by Miles Ice Tech — commercial churning display freezer with two pots and casters",
    image: "/images/products/GALAXY-PRO-V2.png",
    keywords: ["dual pot gelato machine", "floor standing gelato machine", "commercial gelato machine", "two flavor ice cream maker"],
  },
  {
    slug: "galaxy-pro-v4-a",
    name: "Galaxy Pro V4-A",
    sku: "MIT-GPV4A",
    category: "Floor Standing Gelato Machine",
    h1: "Galaxy Pro V4-A — Four Pot Floor-Standing Gelato Machine with Casters",
    description:
      "The Galaxy Pro V4-A is a four-pot, floor-standing commercial gelato machine with integrated casters, designed for high-volume gelaterias and restaurants that need to produce, display, and serve four flavors simultaneously. Each pot operates independently with its own temperature control, letting you churn different gelato, sorbet, or frozen yogurt recipes at the same time. The lockable caster base lets you roll the unit into position at your counter or display area, then lock it in place for stable operation. With four pots running in parallel, you can offer a rotating menu of flavors and keep up with peak-hour demand. Anti-fog viewing lids and LED spotlights create a premium live-production display that draws customers in.",
    features: [
      "Four independent pots with individual temperature control for simultaneous multi-flavor production",
      "Integrated lockable casters — easily reposition between service areas, then lock for stability",
      "R290 eco-refrigerant with German SECOP compressors for efficient, sustainable operation",
      "Anti-fog lids and LED spotlights for premium transparent gelato display",
      "CE, ETL, NSF, RoHS certified for worldwide commercial use",
    ],
    whoIsThisFor:
      "Ideal for high-traffic gelaterias, hotel dessert stations, food halls, and restaurants that need four flavors on display with the flexibility to reposition the unit.",
    altText:
      "Galaxy Pro V4-A four pot floor-standing gelato machine with casters by Miles Ice Tech — commercial multi-flavor churning display freezer",
    image: "/images/products/GALAXY-PRO-V4A.png",
    keywords: ["four pot gelato machine", "multi-flavor gelato machine", "commercial gelato display", "high volume ice cream maker"],
  },
  {
    slug: "galaxy-pro-v4-b",
    name: "Galaxy Pro V4-B",
    sku: "MIT-GPV4B",
    category: "Floor Standing Gelato Machine",
    h1: "Galaxy Pro V4-B — Four Pot Floor-Standing Gelato Machine",
    description:
      "The Galaxy Pro V4-B is a four-pot, floor-standing commercial gelato machine built for permanent installation in gelaterias, restaurants, and hotel buffets. Unlike the V4-A, this model is designed for fixed-position placement — no casters — giving you a stable, streamlined footprint at your counter or display area. Each of the four pots operates independently with its own temperature control, so you can churn gelato, sorbet, and frozen yogurt simultaneously with no cross-contamination. The transparent anti-fog lids and LED spotlight system turn your gelato production into a customer-facing spectacle. If you know exactly where your gelato station lives and want maximum stability without the caster mechanism, the V4-B is the right choice.",
    features: [
      "Four independent pots — churn up to four flavors simultaneously with individual temperature control",
      "Fixed-position floor-standing design for maximum stability in permanent installations",
      "German SECOP compressors with R290 eco-refrigerant for reliable, sustainable performance",
      "Anti-fog lids and LED spotlights create a captivating live gelato-making display",
      "CE, ETL, NSF, RoHS certified — built to meet commercial standards in 80+ countries",
    ],
    whoIsThisFor:
      "Perfect for established gelaterias, hotel buffet stations, and restaurants with a dedicated gelato counter that need a stable four-pot machine for permanent placement.",
    altText:
      "Galaxy Pro V4-B four pot floor-standing gelato machine by Miles Ice Tech — fixed-position commercial multi-flavor churning display freezer",
    image: "/images/products/GALAXY-PRO-V4B.png",
    keywords: ["four pot gelato machine", "fixed gelato display freezer", "commercial gelato machine", "multi-flavor churning freezer"],
  },
  {
    slug: "galaxy-pro-v6",
    name: "Galaxy Pro V6",
    sku: "MIT-GPV6",
    category: "Floor Standing Gelato Machine",
    h1: "Galaxy Pro V6 — Six Pot Commercial Gelato Display Freezer",
    description:
      "The Galaxy Pro V6 is a six-pot, floor-standing commercial gelato machine for high-volume operations that need to display and serve six flavors simultaneously. With six independent pots, each with its own temperature control and churning mechanism, you can run a full gelato menu — from classic fiordilatte to seasonal sorbets — all from a single machine. The V6 is built for gelaterias, resorts, and food service operations where variety and volume drive sales. German SECOP compressors and R290 refrigerant keep the operation efficient and eco-friendly at scale. Anti-fog lids with LED spotlights create a striking display that showcases every flavor. If your business has outgrown a four-pot setup and you need more variety without adding a second machine, the Galaxy Pro V6 delivers.",
    features: [
      "Six independent pots — display and serve six flavors simultaneously with individual controls",
      "High-volume production capacity for busy gelaterias, resorts, and food service operations",
      "German SECOP compressors with R290 natural refrigerant for efficient operation at scale",
      "Anti-fog lids and LED spotlights create a six-flavor visual display that drives sales",
      "CE, ETL, NSF, RoHS certified for international commercial use",
    ],
    whoIsThisFor:
      "Designed for large gelaterias, resort restaurants, hotel dessert buffets, and food halls that need six-flavor variety and high-volume production from a single unit.",
    altText:
      "Galaxy Pro V6 six pot floor-standing gelato machine by Miles Ice Tech — high-volume commercial churning display freezer with six independent pots",
    image: "/images/products/GALAXY-PRO-V6.png",
    keywords: ["six pot gelato machine", "high volume gelato display", "commercial gelato freezer", "large gelato machine"],
  },
  {
    slug: "galaxy-pro-v8",
    name: "Galaxy Pro V8",
    sku: "MIT-GPV8",
    category: "Floor Standing Gelato Machine",
    h1: "Galaxy Pro V8 — Eight Pot Commercial Gelato Machine",
    description:
      "The Galaxy Pro V8 is the flagship of the Galaxy Pro series — an eight-pot, floor-standing commercial gelato machine that maximizes flavor variety and production volume in a single unit. Eight independently controlled pots let you run a full gelato menu, including seasonal specials and limited editions, without any cross-contamination between flavors. This is the machine for high-traffic gelaterias, luxury hotels, cruise ships, and resort operations where a large, visually stunning gelato display is a revenue driver. Each pot features anti-fog lids and LED spotlights, creating an eight-flavor illuminated showcase. German SECOP compressors with R290 refrigerant deliver the cooling power to keep all eight pots performing consistently, even during peak service hours.",
    features: [
      "Eight independent pots — the largest flavor variety in a single Galaxy Pro machine",
      "Flagship production volume for the highest-traffic gelato operations",
      "German SECOP compressors with R290 eco-refrigerant — reliable at peak load across all 8 pots",
      "Eight-flavor LED-lit display with anti-fog lids creates a premium visual centerpiece",
      "CE, ETL, NSF, RoHS certified — commercial-grade for international deployment",
    ],
    whoIsThisFor:
      "Built for flagship gelaterias, luxury hotels, cruise ships, resort operations, and high-traffic food halls that demand maximum flavor variety and production volume.",
    altText:
      "Galaxy Pro V8 eight pot floor-standing gelato machine by Miles Ice Tech — flagship commercial churning display freezer with eight independent pots",
    image: "/images/products/GALAXY-PRO-V8.png",
    keywords: ["eight pot gelato machine", "flagship gelato machine", "large commercial gelato display", "8 flavor ice cream machine"],
  },
  {
    slug: "galaxy-ev",
    name: "Galaxy EV",
    sku: "MIT-GEV",
    category: "Portable Gelato Cart",
    h1: "Galaxy EV — Battery-Powered Portable Gelato Machine",
    description:
      "The Galaxy EV is a battery-powered portable gelato machine built for outdoor events, catering, and mobile gelato service. With an 8-hour rechargeable lithium battery, you can churn, store, and serve fresh gelato anywhere — no power outlet required. The compact 520mm × 760mm footprint rolls on integrated wheels, making it easy to transport and set up at weddings, corporate events, food festivals, and pop-up markets. Each batch holds up to 2 liters, producing approximately 200 cups per hour. The Galaxy EV uses a 1300W system with R290 eco-refrigerant for clean, efficient operation even in warm outdoor conditions. If you run a gelato catering business or want to add mobile gelato service to your operation, the Galaxy EV is the only battery-powered churning display freezer on the market.",
    features: [
      "8-hour rechargeable lithium battery — serve gelato anywhere without a power outlet",
      "2.0L batch capacity producing up to 200 cups/hour for event-scale service",
      "Compact, wheeled design (520mm × 760mm) for easy transport and outdoor setup",
      "R290 eco-refrigerant with 1300W system — efficient even in warm outdoor conditions",
      "CE, RoHS, MOCA, NSF certified for commercial food service",
    ],
    whoIsThisFor:
      "Essential for gelato catering companies, event planners, mobile food vendors, pop-up market operators, and any business that needs to serve fresh gelato without fixed power infrastructure.",
    altText:
      "Galaxy EV battery-powered portable gelato machine by Miles Ice Tech — mobile churning display freezer with 8-hour lithium battery for events and catering",
    image: "/images/products/GALAXY-EV.png",
    keywords: ["portable gelato machine", "battery powered gelato cart", "mobile gelato machine", "gelato catering machine"],
  },
  {
    slug: "galaxy-pro-v2c",
    name: "Galaxy Pro V2C",
    sku: "MIT-GPV2C",
    category: "Gelato Cart",
    h1: "Galaxy Pro V2C — Dual Pot Gelato Cart with Canopy",
    description:
      "The Galaxy Pro V2C is a dual-pot gelato cart featuring a branded canopy, designed for outdoor service, events, and mobile gelato operations. It combines the proven Galaxy Pro V2 dual-pot churning system with a purpose-built cart frame and sun canopy, letting you churn two flavors and serve customers in parks, plazas, festivals, and at outdoor venues. Each pot holds up to 3 liters per batch, powered by SECOP compressors with R290 refrigerant. The canopy provides shade for the operator and product while doubling as a branded signage surface. Anti-fog lids and LED spotlights keep your gelato visible and appealing even in bright outdoor light. If you need a professional mobile gelato setup that can operate at outdoor venues with power access, the V2C is your cart.",
    features: [
      "Dual independent pots on a purpose-built cart frame for outdoor mobile gelato service",
      "Branded canopy — provides shade and acts as a signage surface for your brand",
      "3.0L batch capacity per pot with SECOP compressors and R290 eco-refrigerant",
      "Anti-fog lids and LED spotlights for outdoor-visible gelato display",
      "Optional cart accessory kit for customized mobile operation",
    ],
    whoIsThisFor:
      "Ideal for outdoor gelato vendors, event caterers, parks and recreation concessions, and businesses that need a branded mobile gelato cart for markets, festivals, and outdoor dining areas.",
    altText:
      "Galaxy Pro V2C dual pot gelato cart with canopy by Miles Ice Tech — mobile commercial gelato machine for outdoor events and catering",
    image: "/images/products/GALAXY-PRO-V2C.png",
    keywords: ["gelato cart", "mobile gelato cart", "gelato cart with canopy", "outdoor gelato machine"],
  },
  {
    slug: "galaxy-pro-v4c",
    name: "Galaxy Pro V4C",
    sku: "MIT-GPV4C",
    category: "Gelato Cart",
    h1: "Galaxy Pro V4C — Four Pot Gelato Cart with Digital Display",
    description:
      "The Galaxy Pro V4C is the flagship mobile gelato cart — four independent pots mounted on a professional cart frame with canopy and integrated digital display. Serve four flavors simultaneously at outdoor events, festivals, hotel pool areas, and premium catering engagements. The digital display screen lets you showcase your flavor menu, pricing, and brand messaging, elevating your mobile operation to a professional level. Each pot features independent temperature control, SECOP compressors, and R290 eco-refrigerant. The canopy protects your product and operator from sun and light rain. If you cater large events or operate a premium outdoor gelato service, the V4C delivers the variety, volume, and visual impact to match.",
    features: [
      "Four independent pots on a professional cart frame — serve four flavors at outdoor venues",
      "Integrated digital display screen for flavor menus, pricing, and brand messaging",
      "Branded canopy with weather protection for operator and product",
      "SECOP compressors with R290 eco-refrigerant for efficient outdoor operation",
      "Premium mobile setup for high-end catering and event service",
    ],
    whoIsThisFor:
      "Built for premium gelato catering services, luxury event operators, hotel poolside service, festival vendors, and any business that needs a four-flavor mobile gelato operation with digital signage.",
    altText:
      "Galaxy Pro V4C four pot gelato cart with canopy and digital display by Miles Ice Tech — premium mobile commercial gelato machine for events",
    image: "/images/products/GALAXY-PRO-V4C.png",
    keywords: ["four pot gelato cart", "premium gelato cart", "gelato cart digital display", "large mobile gelato machine"],
  },
  {
    slug: "gelato-panini",
    name: "Gelato Panini UFO 2000",
    sku: "MIT-GPU2000",
    category: "Gelato Panini Maker",
    h1: "Gelato Panini UFO 2000 — Commercial Ice Cream Sandwich Press",
    description:
      "The Gelato Panini UFO 2000 is a compact, 900W commercial ice cream sandwich press that creates warm, toasted gelato panini in seconds. Place a scoop of gelato between two slices of brioche, press, and serve a hot-on-the-outside, cold-on-the-inside dessert that customers love. The non-stick stainless steel heating plate reaches 180°C and features a 200mm diameter pressing surface — perfect for brioche buns, waffles, and cookies. At just 8.8 kg with a detachable power cord, it fits on any counter and moves between stations effortlessly. The gelato panini is one of the fastest-growing menu items in the gelato industry — it adds a unique upsell option to any gelateria, cafe, or dessert bar. Pair it with any Galaxy Pro machine for a complete gelato program.",
    features: [
      "900W heating system reaching 180°C — press a gelato panini in seconds",
      "200mm non-stick stainless steel heating plate for brioche, waffles, and cookies",
      "Ultra-compact at 8.8 kg with detachable power cord for counter or mobile use",
      "Creates the trending hot-outside, cold-inside gelato sandwich experience",
      "Pairs with any Galaxy Pro machine to add a premium upsell to your gelato menu",
    ],
    whoIsThisFor:
      "A must-have add-on for gelaterias, cafes, dessert bars, food trucks, and any operation serving gelato that wants to offer the trending gelato panini as a premium menu item.",
    altText:
      "Gelato Panini UFO 2000 commercial ice cream sandwich press by Miles Ice Tech — compact 900W gelato panini maker with non-stick heating plate",
    image: "/images/products/GELATO%20PANINI%20UFO%202000.png",
    keywords: ["gelato panini maker", "ice cream sandwich press", "gelato panini machine", "commercial gelato panini"],
  },
];

// ── FAQ Data ────────────────────────────────────────────────────

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    question: "What is a displayable churning freezer and how does it work?",
    answer:
      "A displayable churning freezer is an all-in-one gelato machine that produces, stores, displays, and serves fresh gelato from a single unit. Unlike traditional batch freezers that require a separate display case, these machines churn the gelato in transparent pots with anti-fog lids and LED spotlights so customers can watch the process. Miles Ice Tech Galaxy Pro machines continuously churn to maintain optimal texture while keeping the gelato at serving temperature. This live-production display format drives customer engagement and higher sales.",
  },
  {
    question: "How much does a commercial gelato machine cost?",
    answer:
      "Commercial gelato machine prices vary based on capacity and features. Tabletop models like the Galaxy Pro V1 are the most affordable entry point for small cafes and startups. Floor-standing models (V2 through V8) increase in price with pot count — a dual-pot V2 costs less than an eight-pot V8. Mobile cart models (V2C, V4C, Galaxy EV) include the cart frame and canopy. Miles Ice Tech offers both purchase and lease options with hands-on gelato training included. Contact us for a customized quote based on your business needs.",
  },
  {
    question: "What is the difference between gelato and ice cream machines?",
    answer:
      "Gelato machines churn at a slower speed than ice cream machines, incorporating less air (lower overrun) to produce a denser, creamier product. Gelato is also served at a slightly warmer temperature than ice cream, which enhances flavor intensity. Miles Ice Tech Galaxy Pro machines are specifically engineered as gelato churning display freezers — they maintain the precise temperature range and churning speed needed for authentic Italian-style gelato, though they can also produce ice cream, sorbet, frozen yogurt, and granita.",
  },
  {
    question: "Which Galaxy Pro model is best for a startup gelateria?",
    answer:
      "For a startup gelateria, we recommend starting with the Galaxy Pro V2 (dual pot floor-standing) or the Galaxy Pro V1 (single pot tabletop) depending on your space and budget. The V1 is ideal if you are adding gelato to an existing cafe menu and need a countertop solution. The V2 gives you two flavors from day one with room to grow. Both models are popular first machines among our 6,000+ professional clients worldwide. Our lease program with included gelato training makes it easy to get started without a large upfront investment.",
  },
  {
    question: "Can I use a Galaxy Pro machine for ice cream, sorbet, and frozen yogurt?",
    answer:
      "Yes. While the Galaxy Pro series is optimized for gelato, the machines produce excellent ice cream, sorbet, frozen yogurt, and granita/slush as well. Each pot has independent temperature control, so you can run gelato in one pot and sorbet in another at different temperatures simultaneously. This versatility makes Galaxy Pro machines ideal for businesses that want to offer a diverse frozen dessert menu from a single machine.",
  },
  {
    question: "What certifications do Miles Ice Tech machines have?",
    answer:
      "Miles Ice Tech machines carry CE, RoHS, MOCA, ETL, NSF, KC, and PSE certifications depending on the model and destination market. ETL and NSF certifications are critical for the US and Canadian markets. CE covers the European Union. KC is for South Korea and PSE for Japan. All models use R290 eco-friendly natural refrigerant, meeting current environmental regulations. These certifications mean our machines are approved for commercial food service use in 80+ countries worldwide.",
  },
  {
    question: "How many flavors of gelato can I serve with one machine?",
    answer:
      "It depends on the model. The Galaxy Pro V1 has one pot (one flavor), the V2 has two pots, the V4 has four, the V6 has six, and the V8 has eight independently controlled pots. Each pot can churn a different flavor simultaneously. For mobile service, the Galaxy EV has one pot, the V2C has two, and the V4C has four. If you need more variety than a single machine offers, you can pair multiple units — many of our clients start with a V4 and add a V2 as they grow.",
  },
  {
    question: "What is the production capacity of Galaxy Pro gelato machines?",
    answer:
      "Production capacity varies by model. The Galaxy Pro V1 produces approximately 125 cups (80g each) per hour from a single pot. The V2 doubles that to 250 cups per hour. The Galaxy EV portable model produces about 200 cups per hour. Larger models (V4, V6, V8) scale proportionally. Batch sizes range from 1.5–3.0 liters per pot depending on the model. Initial batching time is 12–18 minutes, after which the machine maintains a continuous churn for ongoing service.",
  },
  {
    question: "Does Miles Ice Tech offer gelato machine leasing?",
    answer:
      "Yes. Miles Ice Tech offers flexible lease programs through our Lease & Learn service. Leasing lets you get a Galaxy Pro machine with lower upfront costs and manageable monthly payments. Every lease includes hands-on gelato recipe training so you can start producing professional-quality gelato immediately. Lease terms are flexible and tailored to your business. This is a popular option for new gelaterias, cafes adding gelato to their menu, and catering companies building their equipment fleet. Contact us for lease terms and availability.",
  },
  {
    question: "What kind of training and support does Miles Ice Tech provide?",
    answer:
      "Miles Ice Tech provides comprehensive support including hands-on gelato recipe training with lease and purchase programs, technical installation guidance, a 10+ year global warranty on all machines, and ongoing customer support through our offices in Hangzhou (China), Plano (Texas, USA), and Milan (Italy). Our team of gelato professionals can train you on 24+ premium flavors and help you develop a menu tailored to your market. We support 6,000+ professional clients across 80+ countries.",
  },
  {
    question: "What is the Galaxy EV and how long does its battery last?",
    answer:
      "The Galaxy EV is a battery-powered portable gelato machine — the only one of its kind on the market. Its rechargeable lithium battery provides 8 hours of continuous operation, letting you churn, store, and serve fresh gelato at outdoor events, festivals, weddings, and pop-up markets with no power outlet needed. It produces up to 200 cups per hour with a 2-liter batch capacity. The compact, wheeled design makes it easy to transport and set up. It is the go-to machine for gelato catering businesses and mobile vendors.",
  },
  {
    question: "What is a gelato panini and how does the UFO 2000 work?",
    answer:
      "A gelato panini is a pressed, toasted gelato sandwich — gelato scooped between brioche slices and heated in a press, creating a warm, crispy exterior with cold gelato inside. The Gelato Panini UFO 2000 by Miles Ice Tech is a 900W commercial press with a 200mm non-stick stainless steel plate that reaches 180°C. Just place your gelato sandwich on the plate, press, and serve in seconds. At 8.8 kg with a detachable power cord, it fits on any counter. It is one of the hottest upsell items in the gelato industry right now.",
  },
  {
    question: "Does Miles Ice Tech ship internationally?",
    answer:
      "Yes. Miles Ice Tech ships to 80+ countries worldwide from our three factory and office locations: Hangzhou, China (manufacturing HQ and Asia-Pacific), Plano, Texas, USA (North and South America), and Milan, Italy (Europe, Middle East, and Africa). We handle international shipping logistics including customs documentation and certification compliance for each destination market. Contact our nearest office for shipping timelines and costs to your location.",
  },
  {
    question: "What refrigerant do Galaxy Pro machines use? Is it eco-friendly?",
    answer:
      "All Galaxy Pro machines use R290 (propane) refrigerant, which is a natural, eco-friendly refrigerant with near-zero global warming potential (GWP of 3) compared to traditional HFC refrigerants. R290 is the industry standard for sustainable commercial refrigeration and complies with current EU F-gas regulations and EPA SNAP approvals. Choosing R290 means your gelato operation meets the highest environmental standards while maintaining excellent cooling performance.",
  },
  {
    question: "How do I clean and maintain a Galaxy Pro gelato machine?",
    answer:
      "Galaxy Pro machines feature self-adaptive scraper blades that reduce residue buildup during operation. For daily cleaning, the pots are designed for easy disassembly — remove the lid, scraper, and pot for washing with warm water and food-safe detergent. The stainless steel construction resists staining and corrosion. Periodic maintenance includes checking the compressor ventilation, cleaning the condenser, and inspecting scraper blade wear. Miles Ice Tech provides a complete maintenance guide with every machine and our support team is available for technical assistance.",
  },
  {
    question: "Can I use a Galaxy Pro machine for gelato catering at events?",
    answer:
      "Absolutely. Gelato catering is one of the fastest-growing segments in the events industry, and Galaxy Pro machines are built for it. The Galaxy EV is purpose-built for events with its 8-hour battery. The V2C and V4C cart models are designed for outdoor events with power access. Even floor-standing models like the V2 with casters can be transported to event venues. Miles Ice Tech also offers a full gelato catering service — we bring the machines, staff, and 24+ premium flavors to your event. Contact us to book catering or learn about catering-focused machine packages.",
  },
  {
    question: "What power supply do Galaxy Pro machines require?",
    answer:
      "Most Galaxy Pro models operate on single-phase 220V 50/60Hz power — standard commercial power in most countries. The V1 requires a 10A circuit (950W peak). The V2 requires 16A (1900W peak). The Galaxy EV requires 12A (1300W peak) for charging but operates on battery during service. We can advise on power requirements for larger multi-pot models (V4, V6, V8) based on your electrical setup. All machines come with power specifications documentation and our technical team can assist with installation planning.",
  },
  {
    question: "How is Miles Ice Tech different from other gelato machine manufacturers?",
    answer:
      "Miles Ice Tech is the world's largest manufacturer of displayable churning freezers — machines that produce, store, display, and serve gelato from a single unit. With 3 factories, 1000+ units manufactured per month, and 6,000+ professional clients in 80+ countries, we offer the widest range of churning display freezers in the industry: tabletop, floor-standing, mobile cart, and battery-powered models. Our machines use German SECOP compressors, R290 eco-refrigerant, and carry ETL, NSF, CE, and other certifications. We also offer lease programs with gelato training and full catering services — a complete gelato business ecosystem, not just machines.",
  },
  {
    question: "What warranty comes with Miles Ice Tech gelato machines?",
    answer:
      "Miles Ice Tech provides a 10+ year global warranty on all Galaxy Pro machines — one of the longest in the commercial gelato equipment industry. The warranty covers compressor, refrigeration system, and major component defects. With offices in Hangzhou, Plano (Texas), and Milan, we provide regional warranty support and technical service. Replacement parts are stocked at all three locations for fast turnaround. The warranty terms are the same whether you purchase or lease your machine.",
  },
  {
    question: "How long does it take to make a batch of gelato in a Galaxy Pro machine?",
    answer:
      "The initial batch of gelato takes 12–18 minutes to churn from liquid mix to serving consistency, depending on the recipe and ambient conditions. After the first batch, the machine enters continuous churning mode — it maintains the gelato at optimal serving temperature and texture, so you can scoop and serve continuously while the machine replenishes. Batch sizes range from 1.5L minimum to 3.0L maximum per pot (2.0L max for the Galaxy EV). This means you can have fresh gelato ready to serve within 15 minutes of turning on the machine.",
  },
];

