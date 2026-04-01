"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Navbar,
  Footer,
  fadeUp,
  stagger,
  scaleIn,
} from "../../components";

/* ─── Title Banner ─── */
function GpV1Title() {
  return (
    <section className="gpv1-banner">
      <motion.div
        className="gpv1-banner-inner"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.h1 className="gpv1-banner-title" variants={fadeUp}>
          GALAXY PRO V1
        </motion.h1>
      </motion.div>
    </section>
  );
}

/* ─── Features + Product Image ─── */
function GpV1Features() {
  const standardItems = [
    { text: "Intelligent touch screen control system with sophisticated parameters for ice cream, gelato, sorbet, frozen yogurt, or granita", patent: false },
    { text: "Anti-condensate 304 counter top", patent: true },
    { text: "Anti-fog high transparent protective lids", patent: true },
    { text: "Enhanced display with built-in LED spotlights in each pot", patent: true },
    { text: "Self-adaptive anti-frozen scraper", patent: true },
    { text: "Heat imperceptible ventilation system", patent: true },
    { text: "Enclosed self-adaptive ventilation management system", patent: true },
    { text: "Easy cleaning and drainage", patent: true },
    { text: "German SECOP Compressor", patent: false },
    { text: "R290 environmentally friendly refrigeration system", patent: false },
    { text: "Safety switch on the lid that automatically starts/stops the blades", patent: false },
    { text: "Speed adjustable high power blade", patent: false },
    { text: "Low power, energy saving storage and night modes", patent: false },
  ];

  const optionalItems = [
    { text: "Built-in universal spatular holder", patent: true },
    { text: "Customizable exterior graphic", patent: false },
    { text: "Anti-fog & condensation system for counter top and lids", patent: true },
  ];

  return (
    <section className="gpv1-features">
      <div className="gpv1-features-inner">
        {/* Left: all text content */}
        <motion.div
          className="gpv1-features-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          {/* Core Functions */}
          <motion.div className="gpv1-block" variants={fadeUp}>
            <h2 className="gpv1-heading">CORE FUNCTIONS</h2>
            <ul className="gpv1-list">
              <li>Displayable making of fresh ice-cream</li>
              <li>Dynamic frozen storage with a continuous churning program</li>
              <li>Directly serve the freshly made ice cream</li>
            </ul>
          </motion.div>

          {/* Standard Configurations */}
          <motion.div className="gpv1-block" variants={fadeUp}>
            <h2 className="gpv1-heading">STANDARD CONFIGURATIONS</h2>
            <ul className="gpv1-list">
              {standardItems.map((item, i) => (
                <li key={i}>
                  {item.patent && <span className="gpv1-patent">PATENT</span>}
                  {item.text}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Optional Configurations */}
          <motion.div className="gpv1-block" variants={fadeUp}>
            <h2 className="gpv1-heading">OPTIONAL CONFIGURATIONS</h2>
            <ul className="gpv1-list">
              {optionalItems.map((item, i) => (
                <li key={i}>
                  {item.patent && <span className="gpv1-patent">PATENT</span>}
                  {item.text}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Certifications inline */}
          <motion.div className="gpv1-certs" variants={fadeUp}>
            {["CE", "RoHS", "MOCA", "ETL", "NSF", "KC", "PSE"].map((c) => (
              <span key={c} className="gpv1-cert">{c}</span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: GREEN badge + product image (sticky) */}
        <motion.div
          className="gpv1-features-media"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={scaleIn}
        >
          <span className="gpv1-green-badge">GREEN R290 Natural Refrigerant</span>
          <div className="gpv1-product-image">
            <Image
              src="/images/GALAXY-PRO-V1/pic1.png"
              alt="Galaxy Pro V1 gelato machine"
              width={560}
              height={470}
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Technical Specifications ─── */
function GpV1Specs() {
  const specs = [
    { label: "Dimensions", value: "550mm \u00d7 530mm \u00d7 420mm" },
    { label: "Weight", value: "63 KG" },
    { label: "Power supply", value: "10A Single phase 220V 50/60HZ" },
    { label: "Peak power", value: "950W" },
    { label: "Cooling type", value: "Air cooling" },
    { label: "Refrigerant", value: "R290" },
    { label: "Capacity per batch", value: "Maximum 3.0L / Minimum 1.5L" },
    { label: "Initial batching time", value: "12 \u2013 18 Minutes" },
    { label: "Production capacity per hour", value: "125 Cups / 80g" },
  ];

  return (
    <motion.section
      className="gpv1-specs"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger}
    >
      <div className="gpv1-specs-inner">
        <motion.div className="gpv1-specs-image" variants={scaleIn}>
          <Image
            src="/images/GALAXY-PRO-V1/pic3.png"
            alt="Galaxy Pro V1 dimensional drawing — 550mm x 530mm x 420mm"
            width={560}
            height={470}
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
          />
        </motion.div>
        <motion.div className="gpv1-specs-data" variants={fadeUp}>
          <table className="gpv1-table">
            <tbody>
              {specs.map((s, i) => (
                <tr key={i}>
                  <td>{s.label}</td>
                  <td>{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ─── CTA ─── */
function GpV1Cta() {
  return (
    <section className="gpv1-cta">
      <motion.div
        className="gpv1-cta-inner"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={stagger}
      >
        <motion.h2 className="gpv1-cta-title" variants={fadeUp}>
          Interested in the Galaxy Pro V1?
        </motion.h2>
        <motion.p className="gpv1-cta-sub" variants={fadeUp}>
          Contact us for pricing, specifications, and availability.
        </motion.p>
        <motion.div variants={fadeUp}>
          <a href="/contact" className="btn-primary">
            Get a Quote
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─── Page ─── */
export default function GalaxyProV1Page() {
  return (
    <>
      <Navbar />
      <GpV1Title />
      <GpV1Features />
      <GpV1Specs />
      <GpV1Cta />
      <Footer />
    </>
  );
}
