"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Navbar,
  Footer,
  fadeUp,
  stagger,
  fadeIn,
  scaleIn,
} from "../components";

/* ── overview card data ── */
const SERVICES = [
  {
    num: "01",
    name: "Purchase Your Machine",
    short:
      "Buy a Miles Galaxy Pro outright and invest in full ownership of commercial-grade gelato equipment.",
    image: "/images/services/pic3.jpg",
  },
  {
    num: "02",
    name: "Lease & Learn",
    short:
      "Lease a machine on flexible terms with comprehensive hands-on gelato recipe training included.",
    image: "/images/services/pic2.jpg",
  },
  {
    num: "03",
    name: "Gelato Catering",
    short:
      "We bring our gelato cart, premium flavours, and professional staff directly to your event.",
    image: "/images/services/pic4.png",
  },
];

const STEPS = [
  {
    title: "Choose Your Service",
    desc: "Select from purchase, lease, or full catering based on your business needs and goals.",
  },
  {
    title: "Get in Touch",
    desc: "Our team will work with you to customize the perfect gelato solution for your requirements.",
  },
  {
    title: "Start Serving",
    desc: "Begin delighting your customers with fresh, authentic artisanal gelato.",
  },
];

const FLAVOURS = [
  "Fiordilatte",
  "Vanilla",
  "Hazelnut",
  "Pistachio",
  "Almond",
  "Espresso Coffee",
  "Salted Caramel Butter",
  "Amore Mio",
  "Cremino",
  "Nutella",
  "Ferrero Rocher",
  "Kinder Chocolate",
  "Don Raffaello",
  "Bounty",
  "After Eight",
  "Dark Chocolate",
  "Grandma\u2019s Cookie",
  "Stracciatella",
  "Tiramisu",
  "Mascarpone and Figs",
  "Coconut",
  "Ricotta Cheesecake",
  "Mango Cheesecake",
  "Mum\u2019s Lemon Pie",
  "Lemon",
  "Raspberry",
  "Black Mulberry",
  "Peach",
  "Strawberry",
  "Mango",
  "Pomegranate",
  "Yogurt",
];

/* inline checkmark SVG */
const Check = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--accent)"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/* ══════════════════════════════════════════
   1. SERVICES HERO — About Us style with background image
   ══════════════════════════════════════════ */
function ServicesHero() {
  return (
    <section className="about-hero services-hero">
      <Image
        src="/images/services/pic9.jpg"
        alt="Miles Ice Tech gelato service"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <motion.div
        className="about-hero-inner"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.p className="about-hero-eyebrow" variants={fadeUp}>
          Miles Ice Tech
        </motion.p>
        <motion.h1 className="about-hero-title" variants={fadeUp}>
          Our Services
        </motion.h1>
        <motion.p className="about-hero-subtitle" variants={fadeUp}>
          Whether you want to own a machine, lease one with full training, or
          have us cater your next event — we have the perfect gelato solution
          for your business.
        </motion.p>
        <motion.a
          href="#services-overview"
          className="btn-primary btn-hero-primary"
          style={{ marginTop: 32 }}
          variants={fadeUp}
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("services-overview")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Explore Services
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
}

/* ══════════════════════════════════════════
   2. SERVICES OVERVIEW
   ══════════════════════════════════════════ */
function ServicesOverview() {
  return (
    <motion.section
      id="services-overview"
      className="services-overview-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger}
    >
      <div className="services-overview-inner">
        <motion.div className="section-header" variants={fadeUp}>
          <h2>WHAT WE OFFER</h2>
          <span className="header-accent" />
        </motion.div>

        <div className="services-card-grid">
          {SERVICES.map((s) => (
            <motion.div key={s.num} className="services-card" variants={fadeUp}>
              <span className="services-card-num">{s.num}</span>
              <h3>{s.name}</h3>
              <p>{s.short}</p>
              <div className="services-card-thumb">
                <Image
                  src={s.image}
                  alt={s.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

/* ══════════════════════════════════════════
   3. SERVICE DETAIL — PURCHASE
   ══════════════════════════════════════════ */
function ServicePurchase() {
  return (
    <motion.section
      id="service-purchase"
      className="services-detail-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger}
    >
      <div className="services-detail-inner">
        <motion.div className="services-detail-text" variants={fadeUp}>
          <span className="services-detail-eyebrow">SERVICE 01</span>
          <h2>Purchase Your Machine</h2>
          <p className="services-detail-tagline">
            Own the equipment, own your success
          </p>
          <p className="services-detail-desc">
            Buy a Miles Galaxy Pro churning display freezer outright. Full
            ownership of commercial-grade gelato equipment. Ideal for
            established businesses — gelaterias, restaurants, hotels, cafes,
            bakeries — who want a long-term investment. Machines produce, store,
            display, and serve fresh gelato, sorbet, yogurt, and granita
            on-site.
          </p>
          <ul className="services-detail-list">
            <li>
              <Check /> Full ownership with no recurring fees
            </li>
            <li>
              <Check /> Choose from tabletop, standing, or mobile cart models
            </li>
            <li>
              <Check /> 10+ year lifespan with global warranty
            </li>
            <li>
              <Check /> Produce fresh gelato daily on your premises
            </li>
            <li>
              <Check /> Complete training and recipe support included
            </li>
          </ul>
          <a href="/products" className="btn-primary">
            Browse Machines
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </motion.div>
      </div>
      <motion.div className="services-detail-image-full" variants={fadeIn}>
        <Image
          src="/images/services/pic1.jpg"
          alt="Gelato shop counter with staff serving customers"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: "cover" }}
        />
      </motion.div>
    </motion.section>
  );
}

/* ══════════════════════════════════════════
   4. SERVICE DETAIL — LEASE & LEARN
   ══════════════════════════════════════════ */
function ServiceLease() {
  return (
    <motion.section
      id="service-lease"
      className="services-detail-section services-detail-reversed services-detail-warm"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger}
    >
      <div className="services-detail-inner services-detail-inner-right">
        <motion.div className="services-detail-text" variants={fadeUp}>
          <span className="services-detail-eyebrow">SERVICE 02</span>
          <h2>Lease &amp; Learn</h2>
          <p className="services-detail-tagline">
            Start serving gelato without the upfront investment
          </p>
          <p className="services-detail-desc">
            Lease a Miles Galaxy Pro machine on flexible terms and receive
            comprehensive hands-on recipe training from our gelato experts.
            Perfect for businesses wanting to test the market, seasonal
            operations, or those who prefer operational expenditure over capital
            expenditure. We teach you our proprietary recipes so you can craft
            authentic Italian-style gelato independently.
          </p>
          <ul className="services-detail-list">
            <li>
              <Check /> Flexible lease terms to suit your business
            </li>
            <li>
              <Check /> Hands-on training with proprietary gelato recipes
            </li>
            <li>
              <Check /> Full technical support and maintenance included
            </li>
            <li>
              <Check /> Upgrade or return at the end of your lease
            </li>
            <li>
              <Check /> No large upfront capital required
            </li>
          </ul>
          <a href="/contact?service=lease-and-learn" className="btn-primary">
            Get a Quote
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </motion.div>
      </div>
      <motion.div className="services-detail-image-full" variants={fadeIn}>
        <Image
          src="/images/services/pic6.jpg"
          alt="Professional gelato setup with Miles machine"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: "cover" }}
        />
      </motion.div>
    </motion.section>
  );
}

/* ══════════════════════════════════════════
   5. SERVICE DETAIL — CATERING (hero-style intro)
   ══════════════════════════════════════════ */
function ServiceCatering() {
  return (
    <motion.section
      id="service-catering"
      className="services-detail-section services-detail-cool"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger}
    >
      <div className="services-detail-inner">
        <motion.div className="services-detail-text" variants={fadeUp}>
          <span className="services-detail-eyebrow">SERVICE 03</span>
          <h2>Gelato Catering</h2>
          <p className="services-detail-tagline">
            Bring the rich, authentic flavours of Italy to your next event
          </p>
          <p className="services-detail-desc">
            Our team comes to your event with a fully-equipped Miles gelato
            cart, premium artisanal gelato, and professional staff to serve your
            guests. We handle everything — setup, service, and cleanup. Perfect
            for corporate events, weddings, private parties, product launches,
            hotel brunches, and special occasions.
          </p>
          <ul className="services-detail-list">
            <li>
              <Check /> Gelato cart serves up to 300–350 scoops per event
            </li>
            <li>
              <Check /> Choose up to 6 artisanal flavours per cart
            </li>
            <li>
              <Check /> Professional staff handles setup, serving, and cleanup
            </li>
            <li>
              <Check /> Cones, cups, and a variety of toppings included
            </li>
            <li>
              <Check /> Fully customizable to your event theme
            </li>
          </ul>
          <a href="/contact?service=gelato-catering" className="btn-primary">
            Book Now
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </motion.div>
      </div>
      <motion.div className="services-detail-image-full" variants={fadeIn}>
        <Image
          src="/images/services/pic4.png"
          alt="Children excitedly looking at colourful gelato flavours"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: "cover" }}
        />
      </motion.div>
    </motion.section>
  );
}

/* ══════════════════════════════════════════
   6. CATERING — MENU & FLAVOURS
   ══════════════════════════════════════════ */
function CateringMenu() {
  return (
    <motion.section
      className="services-menu-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger}
    >
      <div className="services-menu-inner">
        <motion.div className="section-header" variants={fadeUp}>
          <h2>MENU &amp; FLAVOURS</h2>
          <span className="header-accent" />
        </motion.div>
        <motion.p className="services-menu-subtitle" variants={fadeUp}>
          Our gelato cart can accommodate up to 6 distinct flavours, each served
          in its own 5-litre container. Here are some of the flavours you can
          choose from:
        </motion.p>
        <motion.div className="services-flavour-grid" variants={fadeUp}>
          {FLAVOURS.map((f) => (
            <span key={f} className="services-flavour-tag">
              {f}
            </span>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ══════════════════════════════════════════
   7. CATERING — PRICING & DETAILS
   ══════════════════════════════════════════ */
function CateringDetails() {
  return (
    <motion.section
      className="services-pricing-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger}
    >
      <div className="services-pricing-inner">
        <motion.div className="services-pricing-text" variants={fadeUp}>
          <div
            className="section-header"
            style={{ textAlign: "left", padding: 0, margin: "0 0 24px" }}
          >
            <h2>PRICING &amp; DETAILS</h2>
            <span className="header-accent" />
          </div>
          <ul className="services-detail-list">
            <li>
              <Check /> We require a 7-day advance notice for bookings
            </li>
            <li>
              <Check /> We will cater for your event for up to 5 hours
            </li>
            <li>
              <Check /> Cart serves up to 300–350 scoops with kid and adult
              sizes
            </li>
            <li>
              <Check /> Staff, equipment, consumables, and setup all provided
            </li>
            <li>
              <Check /> Delivery to and from your location included
            </li>
          </ul>

          <h3 className="services-pricing-subhead">
            Payment &amp; Cancellation
          </h3>
          <p className="services-detail-desc">
            Full payment is required in advance to secure your booking.
            <br />
            We accept cash, credit card, and wire transfer.
          </p>
          <ul className="services-cancel-list">
            <li>
              <span className="services-cancel-badge services-cancel-red">
                3 days or less
              </span>
              No refund
            </li>
            <li>
              <span className="services-cancel-badge services-cancel-amber">
                7 days or less
              </span>
              60% refund
            </li>
            <li>
              <span className="services-cancel-badge services-cancel-green">
                More than 7 days
              </span>
              Full refund
            </li>
          </ul>
        </motion.div>

        <motion.div className="services-pricing-card" variants={scaleIn}>
          <span className="services-pricing-label">Gelato Cart</span>
          <div className="services-pricing-amount">
            <span className="services-pricing-currency">AED</span>
            <span className="services-pricing-number">3,950</span>
          </div>
          <span className="services-pricing-per">per cart / event</span>
          <div className="services-pricing-includes">
            <p>
              <Check /> Up to 300–350 scoops
            </p>
            <p>
              <Check /> Up to 6 flavours
            </p>
            <p>
              <Check /> Staff &amp; equipment
            </p>
            <p>
              <Check /> Setup &amp; cleanup
            </p>
            <p>
              <Check /> Delivery included
            </p>
          </div>
          <a
            href="/contact?service=gelato-catering"
            className="btn-primary"
            style={{ width: "100%", justifyContent: "center" }}
          >
            Book Now
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ══════════════════════════════════════════
   8. HOW IT WORKS
   ══════════════════════════════════════════ */
function HowItWorks() {
  return (
    <motion.section
      id="how-it-works"
      className="services-how-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger}
    >
      <div className="services-how-inner">
        <motion.div className="section-header" variants={fadeUp}>
          <h2 style={{ color: "var(--white)" }}>HOW IT WORKS</h2>
          <span className="header-accent" />
        </motion.div>

        <div className="services-steps">
          {STEPS.map((step, i) => (
            <motion.div key={i} className="services-step" variants={fadeUp}>
              <span className="services-step-num">{i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              {i < STEPS.length - 1 && (
                <span className="services-step-connector" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

/* ══════════════════════════════════════════
   10. CTA BANNER
   ══════════════════════════════════════════ */
function CtaBanner() {
  return (
    <motion.section
      className="services-cta-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger}
    >
      <div className="services-cta-inner">
        <motion.h2 variants={fadeUp}>
          Ready to Bring Gelato to Your Business?
        </motion.h2>
        <motion.p variants={fadeUp}>
          Get in touch today and let us help you find the perfect solution.
        </motion.p>
        <motion.div className="services-cta-buttons" variants={fadeUp}>
          <a href="/contact" className="btn-primary">
            Get a Quote
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a href="/products" className="btn-outline">
            Browse Machines
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ══════════════════════════════════════════
   PAGE EXPORT
   ══════════════════════════════════════════ */
export default function Services() {
  return (
    <main>
      <Navbar />
      <ServicesHero />
      <ServicesOverview />
      <ServicePurchase />
      <ServiceLease />
      <ServiceCatering />
      <CateringMenu />
      <CateringDetails />
      <HowItWorks />
      <CtaBanner />
      <Footer />
    </main>
  );
}
