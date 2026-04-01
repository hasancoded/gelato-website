"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar, Footer, fadeUp, stagger, fadeIn, scaleIn } from "./components";

/* ══════════════════════════════════════════
   2. HERO
   ══════════════════════════════════════════ */
function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.p className="hero-eyebrow" variants={fadeUp}>
            The World&apos;s Leading Manufacturer
          </motion.p>
          <motion.h1 className="hero-title" variants={fadeUp}>
            The Best All-in-One Churning Display Freezers
          </motion.h1>
          <motion.p className="hero-subtitle" variants={fadeUp}>
            The ideal machine to produce, store, serve, and display fresh
            ice-cream, gelato, sorbet, yogurt, and granita/slush for caterings,
            events, and restaurants.
          </motion.p>
          <motion.div className="hero-buttons" variants={fadeUp}>
            <a href="#products" className="btn-primary btn-hero-primary">
              Explore Products
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="/contact" className="btn-hero-outline">
              Contact Us
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="hero-image-accent" />
          <Image
            src="/images/home/hero-gelato-artisan.png"
            alt="Gelato artisan serving fresh artisanal gelato with a premium churning display freezer"
            fill
            priority
            sizes="55vw"
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   3. STATS & ABOUT
   ══════════════════════════════════════════ */
function StatsAbout() {
  return (
    <motion.section
      className="stats-about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger}
    >
      <div className="stats-about-inner">
        <motion.div className="stats-about-numbers" variants={stagger}>
          <motion.div className="stats-about-stat" variants={fadeUp}>
            <span className="stats-about-num">80+</span>
            <span className="stats-about-label">Countries</span>
          </motion.div>
          <div className="stats-about-divider" />
          <motion.div className="stats-about-stat" variants={fadeUp}>
            <span className="stats-about-num">6,000+</span>
            <span className="stats-about-label">Global Professional Clients</span>
          </motion.div>
        </motion.div>
        <motion.p className="stats-about-desc" variants={fadeUp}>
          The largest manufacturer well known for producing the best all in one
          churning display freezers. We sell worldwide to more than 80 different
          countries with global service guaranteed.
        </motion.p>
      </div>
    </motion.section>
  );
}

/* ══════════════════════════════════════════
   4. GLOBAL OFFICES
   ══════════════════════════════════════════ */
function GlobalOffices() {
  return (
    <motion.section
      className="offices-section"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger}
    >
      <div className="offices-inner">
        <motion.div className="offices-image-wrap" variants={scaleIn}>
          <Image
            src="/images/home/pic1.png"
            alt="Miles global offices — Milano Italy, Dallas USA, Hangzhou China"
            width={1200}
            height={280}
            style={{ objectFit: "cover", width: "100%", height: "auto" }}
          />
        </motion.div>
        <motion.div className="offices-labels" variants={stagger}>
          {[
            "Milano, Italy",
            "Dallas, USA",
            "Hangzhou, China",
          ].map((city) => (
            <motion.div key={city} className="office-label" variants={fadeUp}>
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
   5. TABLE TOP MODELS
   ══════════════════════════════════════════ */
function TableTopModels() {
  return (
    <motion.section
      className="product-section product-warm"
      id="products"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger}
    >
      <div className="product-inner">
        <motion.div className="product-text" variants={fadeUp}>
          <h2 className="product-title">Table Top Models</h2>
          <h3 className="product-subtitle">Galaxy Pro V1-Cafe Speciality</h3>
          <p className="product-desc">
            The Galaxy Pro V1 marks the world&apos;s first professional-grade
            commercial all-in-one ice cream machine designed specifically for
            front bar applications. It ingeniously integrates the functions of a
            professional ice cream maker, GELATO POZZETTI, and an ice cream
            display into one device, enabling on-site production, freezing
            preservation, overnight storage, and automatic cleaning, bringing a
            new level of production and sales experience to cafes, tea and
            bakery shops, and fine dining spaces.
          </p>
          <a href="/products#table-top-models" className="btn-more">
            More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </a>
        </motion.div>
      </div>
      <motion.div className="product-image-full" variants={fadeIn}>
        <Image
          src="/images/home/pic2.jpg"
          alt="Barista serving gelato with Galaxy Pro V1 Café Speciality"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
      </motion.div>
    </motion.section>
  );
}

/* ══════════════════════════════════════════
   6. STANDING MODELS
   ══════════════════════════════════════════ */
function StandingModels() {
  return (
    <motion.section
      className="product-section product-cool product-section-reverse"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger}
    >
      <div className="product-inner product-inner-right">
        <motion.div className="product-text" variants={fadeUp}>
          <h2 className="product-title">Standing Models</h2>
          <h3 className="product-subtitle">Galaxy Pro V2 / 4 / 6 / 8</h3>
          <p className="product-desc">
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
          </p>
          <a href="/products#standing-models" className="btn-more">
            More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </a>
        </motion.div>
      </div>
      <motion.div className="product-image-full" variants={fadeIn}>
        <Image
          src="/images/home/pic4.png"
          alt="Staff serving gelato at Galaxy Pro standing model counter"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: "cover", objectPosition: "center center" }}
        />
      </motion.div>
    </motion.section>
  );
}

/* ══════════════════════════════════════════
   7. MOBILE CART MODELS
   ══════════════════════════════════════════ */
function MobileCartModels() {
  return (
    <motion.section
      className="product-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger}
    >
      <div className="product-inner">
        <motion.div className="product-text" variants={fadeUp}>
          <h2 className="product-title">Mobile Cart Models</h2>
          <h3 className="product-subtitle">
            Galaxy EV &nbsp;/&nbsp; Galaxy Pro V2C - V4C
          </h3>
          <p className="product-desc">
            The ideal machine to produce, store, serve, and display fresh
            ice-cream, gelato, sorbet, yogurt, and granita/slush for caterings,
            events, and restaurants.
          </p>
          <a href="/products#mobile-cart-models" className="btn-more">
            More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </a>
        </motion.div>
      </div>
      <motion.div className="product-image-full" variants={fadeIn}>
        <Image
          src="/images/home/pic6.png"
          alt="Artisan with Galaxy Pro mobile cart"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: "contain", objectPosition: "center center" }}
        />
      </motion.div>
    </motion.section>
  );
}

/* ══════════════════════════════════════════
   8. GELATO PANINI
   ══════════════════════════════════════════ */
function GelatoPanini() {
  return (
    <motion.section
      className="panini-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger}
    >
      <div className="panini-inner">
        <motion.div className="panini-text" variants={fadeUp}>
          <h2 className="panini-title">Gelato Panini!</h2>
          <p className="panini-subtitle">Ice-cream sandwich maker.</p>
          <a href="/products/gelato-panini" className="btn-more btn-more-light">
            More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </a>
        </motion.div>
        <motion.div className="panini-image" variants={scaleIn}>
          <Image
            src="/images/home/pic8.png"
            alt="Gelato Panini ice-cream sandwich maker"
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
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsAbout />
      <GlobalOffices />
      <TableTopModels />
      <StandingModels />
      <MobileCartModels />
      <GelatoPanini />
      <Footer />
    </main>
  );
}
