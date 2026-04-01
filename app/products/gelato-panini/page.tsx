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

/* ─── Hero ─── */
function UfoHero() {
  return (
    <section className="ufo-hero">
      <motion.div
        className="ufo-hero-inner"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.div className="ufo-hero-text" variants={fadeUp}>
          <p className="ufo-hero-eyebrow">Gelato Panini</p>
          <h1 className="ufo-hero-title">UFO2000</h1>
          <p className="ufo-hero-subtitle">Ice Cream Sandwich Maker</p>
          <p className="ufo-hero-desc">
            The ultimate compact ice-cream sandwich maker — powerful, portable,
            and designed for high-volume service. Create warm, toasted gelato
            sandwiches in seconds.
          </p>
          <a href="/contact" className="btn-primary">
            Get a Quote
          </a>
        </motion.div>
        <motion.div className="ufo-hero-image" variants={scaleIn}>
          <Image
            src="/images/GELATO-PANINI-UFO-2000/pic1.png"
            alt="Gelato Panini UFO2000 and MIHP0120 ice cream sandwich makers"
            width={640}
            height={360}
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─── Features & Specs ─── */
function UfoFeatures() {
  const features = [
    { label: "Indicator Light", desc: "Lights up when reaching working temperature" },
    { label: "Wooden Handle", desc: "Ergonomic and heat-resistant" },
    { label: "Nonstick Heating Plate", desc: "Stainless steel grill plate for perfect results" },
    { label: "Power Light & Switch", desc: "Simple one-button operation" },
    { label: "Air Flow Hole", desc: "Built-in ventilation for safe operation" },
    { label: "Compact Design", desc: "Portable with detachable power cord" },
  ];

  const specs = [
    { label: "Model", value: "UFO2000" },
    { label: "Net Weight", value: "8.8 KG" },
    { label: "Power", value: "900W" },
    { label: "Working Temperature", value: "180\u00b0C" },
    { label: "Dimensions", value: "385mm \u00d7 365mm \u00d7 207mm" },
    { label: "Plate Diameter", value: "\u00d8200mm" },
  ];

  return (
    <motion.section
      className="ufo-features"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger}
    >
      <div className="ufo-features-inner">
        <motion.div className="ufo-section-header" variants={fadeUp}>
          <h2>FEATURES</h2>
          <span className="ufo-section-accent" />
        </motion.div>
        <div className="ufo-features-grid">
          <motion.div variants={scaleIn}>
            <Image
              src="/images/GELATO-PANINI-UFO-2000/pic2.png"
              alt="UFO2000 annotated features diagram showing indicator light, handle, nonstick heating plate, power switch, air flow hole, power cord, and dimensional drawing"
              width={560}
              height={740}
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
            />
          </motion.div>
          <motion.div variants={stagger}>
            <ul className="ufo-feature-list">
              {features.map((f, i) => (
                <motion.li key={i} variants={fadeUp}>
                  <span className="ufo-feature-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </span>
                  <span><strong>{f.label}</strong> — {f.desc}</span>
                </motion.li>
              ))}
            </ul>
            <motion.div variants={fadeUp}>
              <h3 className="ufo-specs-label">Specifications</h3>
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
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

/* ─── How It Works ─── */
function UfoSteps() {
  const steps = [
    { num: "1", text: "Turn on power switch. Wait for indicator light on (around 3 minutes to preheat)." },
    { num: "2", text: "Slice the bread. Bread diameter 8\u201310 cm will do. Any bread type is applicable." },
    { num: "3", text: "Put half bread on the heating plate and scoop an ice cream ball on top of it." },
    { num: "4", text: "Cover the ice cream ball with another half bread." },
    { num: "5", text: "Start heating for 5\u201310 seconds, depending on bread type." },
    { num: "6", text: "Open the upper cover when finished." },
    { num: "7", text: "Remove the ice cream sandwich from the plate." },
    { num: "8", text: "Enjoy a warm and chilled fun experience." },
  ];

  return (
    <motion.section
      className="ufo-steps"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger}
    >
      <div className="ufo-steps-inner">
        <motion.div className="ufo-section-header" variants={fadeUp}>
          <h2>HOW IT WORKS</h2>
          <span className="ufo-section-accent" />
        </motion.div>
        <motion.div className="ufo-steps-grid" variants={stagger}>
          {steps.map((s) => (
            <motion.div key={s.num} className="ufo-step-card" variants={fadeUp}>
              <div className="ufo-step-num">{s.num}</div>
              <p className="ufo-step-text">{s.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ─── Safety Instructions ─── */
function UfoSafety() {
  const items = [
    "Wait till indicator light is on after turning on the switch. Light on means the machine is reaching working temperature.",
    "Do not touch the side of the machine directly during operation and within 1 hour after turn off.",
    "When lifting the upper part of the machine, hold the handle 90 degrees back to open and push to the end.",
    "Air flow holes shall not be blocked.",
    "Do not touch the baking tray directly during operation and within 2 hours after turn off.",
    "No flammable materials around the machine.",
  ];

  return (
    <motion.section
      className="ufo-safety"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger}
    >
      <div className="ufo-safety-inner">
        <motion.div className="ufo-safety-panel" variants={fadeUp}>
          <div className="ufo-safety-icon-col">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <h2>Safety</h2>
          </div>
          <motion.ul className="ufo-safety-list" variants={stagger}>
            {items.map((text, i) => (
              <motion.li key={i} variants={fadeUp}>{text}</motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ─── CTA ─── */
function UfoCta() {
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
          Interested in the Gelato Panini?
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
export default function GelatoPaniniPage() {
  return (
    <>
      <Navbar />
      <UfoHero />
      <UfoFeatures />
      <UfoSteps />
      <UfoSafety />
      <UfoCta />
      <Footer />
    </>
  );
}
