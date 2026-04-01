"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Navbar,
  Footer,
  fadeUp,
  stagger,
  scaleIn,
} from "../components";

/* ══════════════════════════════════════════
   1. ABOUT HERO
   ══════════════════════════════════════════ */
function AboutHero() {
  return (
    <section className="about-hero about-hero-full">
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
          About Us
        </motion.h1>
        <motion.p className="about-hero-subtitle" variants={fadeUp}>
          Dedicated to developing the world&apos;s finest all-in-one displayable
          churning freezers, trusted by 6,000+ professionals across 80+
          countries.
        </motion.p>
        <motion.a
          href="#why-miles"
          className="btn-primary btn-hero-primary"
          style={{ marginTop: 32 }}
          variants={fadeUp}
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("why-miles")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Discover Our Story
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
   2. WHY MILES
   ══════════════════════════════════════════ */
function WhyMiles() {
  return (
    <motion.section
      id="why-miles"
      className="why-miles-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger}
    >
      <div className="why-miles-inner">
        <motion.div className="section-header" variants={fadeUp}>
          <h2>WHY MILES</h2>
          <span className="header-accent" />
        </motion.div>

        {/* Featured — The Best */}
        <motion.div className="why-miles-featured" variants={fadeUp}>
          <h3>The Best</h3>
          <p>
            We are dedicated to developing the world&apos;s finest all-in-one
            displayable churning freezers. Our focus is providing the best
            innovation, design, performance, functionality, craftsmanship,
            reliability, and exceptional service.
          </p>
        </motion.div>

        {/* Grid — remaining 4 value props */}
        <motion.div className="why-miles-grid" variants={stagger}>
          <motion.div className="why-miles-card" variants={fadeUp}>
            <h3>The Largest</h3>
            <p className="why-miles-stat">
              3 factories, manufacturing 1000+ units per month
            </p>
            <p>
              Our factories in China and the USA enable us to achieve the
              highest production volume of displayable churning freezers in the
              industry.
            </p>
          </motion.div>

          <motion.div className="why-miles-card" variants={fadeUp}>
            <h3>Most Comprehensive</h3>
            <p className="why-miles-stat">3 Series, 10+ Modular Models</p>
            <p>
              Meticulously designed for gelaterias, ice cream parlors, cafes,
              bakeries, restaurants, catering services, hotels, and resorts.
            </p>
          </motion.div>

          <motion.div className="why-miles-card" variants={fadeUp}>
            <h3>World&apos;s Most Widely Used</h3>
            <p className="why-miles-stat">
              6000+ professional clients from over 80+ countries
            </p>
          </motion.div>

          <motion.div className="why-miles-card" variants={fadeUp}>
            <h3>Most Reliable</h3>
            <p className="why-miles-stat">
              10+ year life span, global warranty guaranteed
            </p>
            <p>
              We collaborate with leading industrial suppliers and leverage
              feedback from over 80,000 machines to ensure continuous
              improvement and reliability.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ══════════════════════════════════════════
   3. OUR BRANDS
   ══════════════════════════════════════════ */
function OurBrands() {
  return (
    <motion.section
      className="about-brands-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger}
    >
      <div className="about-brands-inner">
        <motion.div className="section-header" variants={fadeUp}>
          <h2>OUR BRANDS</h2>
          <span className="header-accent" />
        </motion.div>
        <motion.div className="about-brands-image-wrap" variants={scaleIn}>
          <Image
            src="/images/about-us/pic1.png"
            alt="Miles brands — Miles, Texas FrozenTech, Miles.srl"
            width={700}
            height={120}
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ══════════════════════════════════════════
   4. OUR FACTORIES
   ══════════════════════════════════════════ */
function OurFactories() {
  return (
    <motion.section
      className="about-factories-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger}
    >
      <div className="about-factories-inner">
        <motion.div className="section-header" variants={fadeUp}>
          <h2>OUR FACTORIES</h2>
          <span className="header-accent" />
        </motion.div>
        <motion.div className="about-factories-image-wrap" variants={scaleIn}>
          <Image
            src="/images/home/pic1.png"
            alt="Miles global offices — Milano Italy, Dallas USA, Hangzhou China"
            width={1200}
            height={280}
            style={{ objectFit: "cover", width: "100%", height: "auto" }}
          />
        </motion.div>
        <motion.div className="about-factories-labels" variants={stagger}>
          {["Hangzhou, China", "Dallas, USA", "Milan, Italy"].map((city) => (
            <motion.div
              key={city}
              className="about-factory-label"
              variants={fadeUp}
            >
              <span className="office-dot" />
              <span>{city}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ══════════════════════════════════════════
   5. CORE PRODUCTS
   ══════════════════════════════════════════ */
function CoreProducts() {
  const products = [
    {
      count: "2+",
      label: "Tabletop Models",
      desc: "Compact all-in-one machines for front-bar gelato service",
    },
    {
      count: "5+",
      label: "Standing Models",
      desc: "Professional-grade floor units for high-volume production",
    },
    {
      count: "3+",
      label: "Mobile Cart Models",
      desc: "Versatile mobile solutions for events and catering",
    },
  ];

  return (
    <motion.section
      className="about-products-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger}
    >
      <div className="about-products-inner">
        <motion.div className="section-header" variants={fadeUp}>
          <h2>CORE PRODUCTS</h2>
          <span className="header-accent" />
        </motion.div>
        <motion.div className="about-products-grid" variants={stagger}>
          {products.map((product) => (
            <motion.div
              key={product.label}
              className="about-product-card"
              variants={fadeUp}
            >
              <span className="about-product-count">{product.count}</span>
              <h3 className="about-product-label">{product.label}</h3>
              <p className="about-product-desc">{product.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ══════════════════════════════════════════
   6. GALLERY
   ══════════════════════════════════════════ */
function AboutGallery() {
  const photos = [
    {
      src: "/images/about-us/pic4.jpg",
      alt: "Miles team at the Hangzhou factory",
    },
    {
      src: "/images/about-us/pic6.jpg",
      alt: "Miles employees at the manufacturing facility",
    },
    {
      src: "/images/about-us/pic7.jpg",
      alt: "Miles manufacturing floor with machines",
    },
    {
      src: "/images/about-us/pic8.jpg",
      alt: "Miles showroom with warm wood-paneled interior",
    },
  ];

  return (
    <motion.section
      className="about-gallery-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger}
    >
      <div className="about-gallery-inner">
        <motion.div className="section-header" variants={fadeUp}>
          <h2 style={{ color: "var(--white)" }}>OUR WORLD</h2>
          <span className="header-accent" />
        </motion.div>
        <motion.div className="about-gallery-grid" variants={stagger}>
          {photos.map((photo) => (
            <motion.div
              key={photo.src}
              className="about-gallery-item"
              variants={scaleIn}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ══════════════════════════════════════════
   PAGE ASSEMBLY
   ══════════════════════════════════════════ */
export default function AboutUs() {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <WhyMiles />
      <OurBrands />
      <OurFactories />
      <CoreProducts />
      <AboutGallery />
      <Footer />
    </main>
  );
}
