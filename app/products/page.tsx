"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar, Footer, fadeUp, stagger, scaleIn } from "../components";

/* ── tiny arrow SVG reused in "More" links ── */
const ArrowSvg = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

/* ══════════════════════════════════════════
   1. PRODUCTS HERO (image-based)
   ══════════════════════════════════════════ */
function ProductsHero() {
  return (
    <section className="products-hero">
      <div className="products-hero-bg">
        <Image
          src="/images/products/pic1.jpg"
          alt="Colorful artisanal gelato displayed in Galaxy Pro pots"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center center" }}
        />
      </div>
      <div className="products-hero-overlay" />
      <motion.div
        className="products-hero-inner"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.p className="products-hero-eyebrow" variants={fadeUp}>
          Miles Ice Tech
        </motion.p>
        <motion.h1 className="products-hero-title" variants={fadeUp}>
          Our Products
        </motion.h1>
        <motion.p className="products-hero-subtitle" variants={fadeUp}>
          High-end professional ice-cream machines designed to dynamically
          create, store, and display all types of fresh artisanal ice-cream
          right in front of customers.
        </motion.p>
      </motion.div>
    </section>
  );
}

/* ══════════════════════════════════════════
   3. GALAXY PRO INTRO
   ══════════════════════════════════════════ */
function GalaxyProIntro() {
  return (
    <motion.section
      id="products-lineup"
      className="products-intro"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger}
    >
      <div className="products-intro-inner">
        <motion.div className="products-intro-content" variants={stagger}>
          <motion.p className="products-intro-text" variants={fadeUp}>
            GALAXY PRO series are high-end professional ice-cream machines
            produced by Miles Ice Tech inc., which is a leading commercial
            ice-cream equipment manufacturer, renowned for advanced technology
            and reliable quality. At its core, the GALAXY PRO series is to
            integrate the same functions of an ice-cream batch freezer, blast
            freezer and display showcase, all into one machine, designed to
            placed at a front counter bar to dynamically create, store and
            display all types of fresh artisanal ice-creams right in front of
            customers.
          </motion.p>
          <motion.p className="products-intro-text" variants={fadeUp}>
            GALAXY PRO series has unparalleled product strength in its field:
            each pot has an independent powerful refrigeration system, which
            accept both solid (e.g Fresh Pieces of fruit) and fresh liquid
            ingredients. An intelligent operating system can professionally set
            up a variety of delicate parameters to accurately match different
            recipes to achieve ideal taste and texture, with inbuilt
            &apos;spotlights&apos; to highlight each unique freshly made
            ice-cream with stunning visual appearance.
          </motion.p>
          <motion.p className="products-intro-text" variants={fadeUp}>
            Gelato Tech Co., highly focuses on the development of the front-bar
            type refrigeration equipment. It has multiple patented advanced
            design and technologies for dynamic display, intelligent control
            system, advanced performance, heat imperceptible ventilation and
            multiple safety features. With generations of upgrades, the MILES
            GALAXY PRO series has gained an excellent global reputation for its
            performance, practicality and premium quality, fast after-sales
            service. Thousands of professional customers from more than 50
            countries use this machine to make and sell fresh ice cream, it has
            become the most widely used front bar-type displayable ice-cream
            machine series all around the world for gelato bars, pastry shops,
            cafes, restaurants, hotels and bars.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ══════════════════════════════════════════
   4. TABLE TOP MODELS
   ══════════════════════════════════════════ */
function TableTopModels() {
  const models = [
    {
      name: "PRO V1",
      image: "/images/products/GALAXY-PRO-V1.png",
      alt: "Galaxy Pro V1 single pot tabletop machine",
      href: "/products/galaxy-pro-v1",
    },
    {
      name: "PRO V1 — CAFÉ SPECIALITY",
      image: "/images/products/PRO-V1-CAF%C3%89-SPECIALITY.png",
      alt: "Galaxy Pro V1 Café Speciality single pot tabletop machine",
      href: "/products/pro-v1-cafe-speciality",
    },
  ];

  return (
    <motion.section
      id="table-top-models"
      className="products-category products-category-warm"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger}
    >
      <div className="products-category-inner">
        <motion.div className="section-header" variants={fadeUp}>
          <h2>TABLE TOP MODELS</h2>
          <span className="header-accent" />
        </motion.div>
        <motion.p className="products-category-subtitle" variants={fadeUp}>
          PRO V1 Single pot &nbsp;/&nbsp; V1 CAFÉ SPECIALITY Single pot
        </motion.p>
        <motion.div className="products-grid products-grid-2" variants={stagger}>
          {models.map((model) => (
            <motion.div key={model.name} className="prod-card" variants={fadeUp}>
              <div className="prod-card-image">
                <Image
                  src={model.image}
                  alt={model.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <h3 className="prod-card-name">{model.name}</h3>
              <a href={model.href} className="btn-more">
                More <ArrowSvg />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ══════════════════════════════════════════
   5. STANDING MODELS
   ══════════════════════════════════════════ */
function StandingModels() {
  const models = [
    {
      name: "GALAXY PRO V2",
      image: "/images/products/GALAXY-PRO-V2.png",
      alt: "Galaxy Pro V2 dual pot standing machine",
      href: "/products/galaxy-pro-v2",
    },
    {
      name: "GALAXY PRO V4A",
      image: "/images/products/GALAXY-PRO-V4A.png",
      alt: "Galaxy Pro V4A four pot standing machine",
      href: "/products/galaxy-pro-v4-a",
    },
    {
      name: "GALAXY PRO V4B",
      image: "/images/products/GALAXY-PRO-V4B.png",
      alt: "Galaxy Pro V4B four pot standing machine",
      href: "/products/galaxy-pro-v4-b",
    },
    {
      name: "GALAXY PRO V6",
      image: "/images/products/GALAXY-PRO-V6.png",
      alt: "Galaxy Pro V6 six pot standing machine",
      href: "/products/galaxy-pro-v6",
    },
    {
      name: "GALAXY PRO V8",
      image: "/images/products/GALAXY-PRO-V8.png",
      alt: "Galaxy Pro V8 eight pot standing machine",
      href: "/products/galaxy-pro-v8",
    },
  ];

  return (
    <motion.section
      id="standing-models"
      className="products-category"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger}
    >
      <div className="products-category-inner">
        <motion.div className="section-header" variants={fadeUp}>
          <h2>STANDING MODELS</h2>
          <span className="header-accent" />
        </motion.div>
        <motion.p className="products-category-subtitle" variants={fadeUp}>
          PRO V2 Dual pots &nbsp;/&nbsp; PRO V4-A Four pots &nbsp;/&nbsp; PRO
          V4-B Four pots &nbsp;/&nbsp; PRO V6 Six pots &nbsp;/&nbsp; PRO V8
          Eight pots
        </motion.p>
        <motion.div className="products-grid products-grid-3" variants={stagger}>
          {models.map((model) => (
            <motion.div key={model.name} className="prod-card" variants={fadeUp}>
              <div className="prod-card-image">
                <Image
                  src={model.image}
                  alt={model.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <h3 className="prod-card-name">{model.name}</h3>
              <a href={model.href} className="btn-more">
                More <ArrowSvg />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ══════════════════════════════════════════
   6. MOBILE CART MODELS
   ══════════════════════════════════════════ */
function MobileCartModels() {
  const models = [
    {
      name: "GALAXY EV",
      image: "/images/products/GALAXY-EV.png",
      alt: "Galaxy EV mobile cart model",
      href: "/products/galaxy-ev",
    },
    {
      name: "GALAXY PRO V2C",
      image: "/images/products/GALAXY-PRO-V2C.png",
      alt: "Galaxy Pro V2C dual pot mobile cart",
      href: "/products/galaxy-pro-v2c",
    },
    {
      name: "GALAXY PRO V4C",
      image: "/images/products/GALAXY-PRO-V4C.png",
      alt: "Galaxy Pro V4C four pot mobile cart",
      href: "/products/galaxy-pro-v4c",
    },
  ];

  return (
    <motion.section
      id="mobile-cart-models"
      className="products-category products-category-cool"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger}
    >
      <div className="products-category-inner">
        <motion.div className="section-header" variants={fadeUp}>
          <h2>MOBILE CART MODELS</h2>
          <span className="header-accent" />
        </motion.div>
        <motion.p className="products-category-subtitle" variants={fadeUp}>
          EV &nbsp;/&nbsp; PRO V2 Dual pots cart &nbsp;/&nbsp; PRO V4 Four pots
          cart
        </motion.p>
        <motion.div className="products-grid products-grid-3" variants={stagger}>
          {models.map((model) => (
            <motion.div key={model.name} className="prod-card" variants={fadeUp}>
              <div className="prod-card-image prod-card-image-tall">
                <Image
                  src={model.image}
                  alt={model.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <h3 className="prod-card-name">{model.name}</h3>
              <a href={model.href} className="btn-more">
                More <ArrowSvg />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ══════════════════════════════════════════
   7. GELATO PANINI
   ══════════════════════════════════════════ */
function GelatoPanini() {
  return (
    <motion.section
      className="products-panini"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger}
    >
      <div className="products-panini-inner">
        <motion.div className="products-panini-text" variants={fadeUp}>
          <h2 className="products-panini-title">Gelato Panini</h2>
          <p className="products-panini-subtitle">UFO 2000</p>
          <p className="products-panini-desc">
            The ultimate ice-cream sandwich maker — compact, powerful, and
            designed for high-volume service.
          </p>
          <a href="/products/gelato-panini" className="btn-more btn-more-light">
            More <ArrowSvg />
          </a>
        </motion.div>
        <motion.div className="products-panini-image" variants={scaleIn}>
          <Image
            src="/images/products/GELATO%20PANINI%20UFO%202000.png"
            alt="Gelato Panini UFO 2000 ice-cream sandwich maker"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "contain" }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ══════════════════════════════════════════
   PAGE ASSEMBLY
   ══════════════════════════════════════════ */
export default function Products() {
  return (
    <main>
      <Navbar />
      <ProductsHero />
      <GalaxyProIntro />
      <TableTopModels />
      <StandingModels />
      <MobileCartModels />
      <GelatoPanini />
      <Footer />
    </main>
  );
}
