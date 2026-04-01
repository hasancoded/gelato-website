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
function GEvTitle() {
  return (
    <section className="gpv1-banner">
      <motion.div
        className="gpv1-banner-inner"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.h1 className="gpv1-banner-title" variants={fadeUp}>
          GALAXY EV
        </motion.h1>
      </motion.div>
    </section>
  );
}

/* ─── Features + Product Image ─── */
function GEvFeatures() {
  const standardItems = [
    { text: "Intelligent touch screen control system Sophisticated parameter settings for ice-cream, gelato, sorbet, frozen yogurt, granita/slush", patent: false },
    { text: "Temperature control for each cylinder", patent: false },
    { text: "Over run control for each cylinder", patent: false },
    { text: "Anti-condensate counter top", patent: true },
    { text: "Displable pozzetti system", patent: true },
    { text: "Built-in spatular", patent: true },
    { text: "Easy cleaning and drainage", patent: true },
    { text: "Enhanced display with built-in LED spotlights in each pot", patent: true },
    { text: "Self-adaptive anti-frozen scraper", patent: true },
    { text: "Safety switch on lid for start-stop of the blades", patent: false },
    { text: "Speed adjustable high power blade", patent: false },
    { text: "Low power storage and night mode", patent: false },
  ];

  const optionalItems = [
    { text: "Customizable exterior graphic", patent: false },
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
              <li>Displayable making of fresh ice-cream bar area</li>
              <li>Dynamic frozen storage with continuous churning program</li>
              <li>Direct serve of freshly made ice-cream</li>
              <li>8 hours battery power</li>
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
            {["CE", "RoHS", "MOCA", "NSF", "KC", "PSE"].map((c) => (
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
              src="/images/GALAXY-EV/pic1.png"
              alt="Galaxy EV gelato machine"
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
function GEvSpecs() {
  const specs = [
    { label: "Dimensions", value: "520mm \u00d7 760mm \u00d7 890mm" },
    { label: "Weight", value: "140 KG" },
    { label: "Power", value: "12A Single phase 220V 50/60HZ" },
    { label: "Power supply", value: "Rechargeable lithium battery (8 hours)" },
    { label: "Peak power", value: "1300W" },
    { label: "Cooling type", value: "Air cooling" },
    { label: "Refrigerant", value: "R290" },
    { label: "Capacity per batch", value: "Maximum 2.0L / Minimum 1.0L" },
    { label: "Initial batching time", value: "12 \u2013 18 Minutes" },
    { label: "Production capacity per hour", value: "200 Cups / 80g" },
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
            src="/images/GALAXY-EV/pic3.png"
            alt="Galaxy EV dimensional drawing — 520mm x 760mm x 890mm"
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
function GEvCta() {
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
          Interested in the Galaxy EV?
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
export default function GalaxyEVPage() {
  return (
    <>
      <Navbar />
      <GEvTitle />
      <GEvFeatures />
      <GEvSpecs />
      <GEvCta />
      <Footer />
    </>
  );
}
