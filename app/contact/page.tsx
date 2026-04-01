"use client";

import { Suspense, useState, useEffect, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar, Footer, fadeUp, stagger } from "../components";

/* ── product options for the dropdown ── */
const PRODUCT_OPTIONS = [
  { group: "Table Top Models", items: ["PRO V1 Single Pot", "PRO V1 Café Speciality"] },
  { group: "Standing Models", items: ["Galaxy Pro V2", "Galaxy Pro V4A", "Galaxy Pro V4B", "Galaxy Pro V6", "Galaxy Pro V8"] },
  { group: "Mobile Cart Models", items: ["Galaxy EV", "Galaxy Pro V2C", "Galaxy Pro V4C"] },
  { group: "Gelato Panini", items: ["UFO 2000"] },
];

/* ── service options ── */
const SERVICE_OPTIONS = [
  "Purchase a Machine",
  "Lease & Learn",
  "Gelato Catering",
  "General Inquiry",
];

/* ── event type options (shown when Catering is selected) ── */
const EVENT_TYPES = [
  "Corporate Event",
  "Wedding",
  "Private Party",
  "Product Launch",
  "Hotel / Brunch",
  "Festival / Market",
  "Other",
];

/* ── offices data ── */
const OFFICES = [
  {
    region: "Miles China",
    company: "Hangzhou Gelato Tech Co., ltd.",
    email: "info@milestac.com",
    address: "585 Jinhua Town, Xiaoshan District, Hangzhou, China",
    image: "/images/about-us/pic4.jpg",
  },
  {
    region: "Miles USA",
    company: "Texas Frozen Tech.",
    email: "richard@txfrozentech.com",
    address: "2801 Technology Drive Suit 127 Plano TX 75074",
    image: "/images/about-us/pic6.jpg",
  },
  {
    region: "Miles Italy",
    company: "MILES S.R.L.",
    email: "luca@milestac.com",
    address: "Via Bracciano, 10, 20098 San Giuliano Milanese MI (Italy)",
    image: "/images/about-us/pic8.jpg",
  },
];

/* ══════════════════════════════════════════
   1. CONTACT HERO
   ══════════════════════════════════════════ */
function ContactHero() {
  return (
    <section className="about-hero contact-hero">
      <motion.div
        className="about-hero-inner"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.p className="about-hero-eyebrow" variants={fadeUp}>
          Get In Touch
        </motion.p>
        <motion.h1 className="about-hero-title" variants={fadeUp}>
          Contact Us
        </motion.h1>
        <motion.p className="about-hero-subtitle" variants={fadeUp}>
          For inquiry distributors, reach out and our team will get back to you
          within 24 hours.
        </motion.p>
        <motion.a
          href="#contact-form"
          className="btn-primary btn-hero-primary"
          style={{ marginTop: 32 }}
          variants={fadeUp}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Send a Message
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
}

/* ══════════════════════════════════════════
   2. CONTACT FORM
   ══════════════════════════════════════════ */
function ContactForm() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    product: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  /* pre-fill service from ?service= query param */
  useEffect(() => {
    const svc = searchParams.get("service");
    if (svc) {
      const normalize = (s: string) =>
        s.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-");
      const match = SERVICE_OPTIONS.find(
        (o) => normalize(o) === svc.toLowerCase()
      );
      if (match) setForm((prev) => ({ ...prev, service: match }));
    }
  }, [searchParams]);

  const isCatering = form.service === "Gelato Catering";
  const isPurchase = form.service === "Purchase a Machine";

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          product: isPurchase ? form.product : "",
          eventType: isCatering ? form.eventType : "",
          eventDate: isCatering ? form.eventDate : "",
          guestCount: isCatering ? form.guestCount : "",
          message: form.message,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <motion.section
      id="contact-form"
      className="contact-form-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger}
    >
      <div className="contact-form-inner">
        {/* Left — form */}
        <motion.div className="contact-form-card" variants={fadeUp}>
          <h2 className="contact-form-heading">Send Us a Message</h2>
          <p className="contact-form-subheading">
            Tell us what you&apos;re looking for and we&apos;ll get back to you
            with the perfect solution.
          </p>

          {submitted && (
            <div className="contact-form-success">
              Thank you! Your message has been sent successfully. Our team will
              get back to you within 24 hours. You can also reach us at{" "}
              <a href="mailto:info@milestac.com">info@milestac.com</a>.
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="contact-name">Name *</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  required
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="contact-field">
                <label htmlFor="contact-email">Email *</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="contact-phone">Phone Number</label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="contact-field">
                <label htmlFor="contact-service">Service Interested In *</label>
                <select
                  id="contact-service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service…</option>
                  {SERVICE_OPTIONS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Show product dropdown when Purchase is selected */}
            {isPurchase && (
              <div className="contact-form-row">
                <div className="contact-field" style={{ gridColumn: "1 / -1" }}>
                  <label htmlFor="contact-product">Product / Model</label>
                  <select
                    id="contact-product"
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                  >
                    <option value="">Select a product…</option>
                    {PRODUCT_OPTIONS.map((group) => (
                      <optgroup key={group.group} label={group.group}>
                        {group.items.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
              </div>
            )}

            {/* Show catering-specific fields when Catering is selected */}
            {isCatering && (
              <>
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="contact-event-type">Event Type</label>
                    <select
                      id="contact-event-type"
                      name="eventType"
                      value={form.eventType}
                      onChange={handleChange}
                    >
                      <option value="">Select event type…</option>
                      {EVENT_TYPES.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div className="contact-field">
                    <label htmlFor="contact-event-date">Event Date</label>
                    <input
                      id="contact-event-date"
                      name="eventDate"
                      type="date"
                      value={form.eventDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="contact-form-row">
                  <div className="contact-field" style={{ gridColumn: "1 / -1" }}>
                    <label htmlFor="contact-guest-count">Estimated Number of Guests</label>
                    <input
                      id="contact-guest-count"
                      name="guestCount"
                      type="text"
                      placeholder="e.g. 150"
                      value={form.guestCount}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </>
            )}

            <div className="contact-field contact-field-grow">
              <label htmlFor="contact-message">Message *</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder={
                  isCatering
                    ? "Tell us about your event — location, flavour preferences, special requests…"
                    : "Tell us about your needs — quantities, timeline, questions…"
                }
                required
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn-primary contact-submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending…" : "Send Message"}
              {!isSubmitting && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              )}
            </button>

            {submitError && (
              <p style={{ color: "#dc2626", fontSize: "0.875rem", textAlign: "center", marginTop: "0.75rem" }}>
                Something went wrong. Please try again or email us at{" "}
                <a href="mailto:info@milestac.com" style={{ textDecoration: "underline", fontWeight: 500 }}>
                  info@milestac.com
                </a>.
              </p>
            )}
          </form>
        </motion.div>

        {/* Right — quick contact info */}
        <motion.div className="contact-info-side" variants={fadeUp}>
          <div className="contact-info-block">
            <span className="contact-info-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </span>
            <h3>Email Us</h3>
            <a href="mailto:info@milestac.com">info@milestac.com</a>
            <a href="mailto:richard@txfrozentech.com">richard@txfrozentech.com</a>
          </div>

          <div className="contact-info-block">
            <span className="contact-info-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            <h3>Headquarters</h3>
            <p>585 Jinhua Town, Xiaoshan District,<br />Hangzhou, China</p>
          </div>

          <div className="contact-info-block">
            <span className="contact-info-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
              </svg>
            </span>
            <h3>Global Presence</h3>
            <p>Offices in China, USA &amp; Italy<br />Serving 80+ countries</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ══════════════════════════════════════════
   3. OFFICE LOCATIONS
   ══════════════════════════════════════════ */
function OfficeLocations() {
  return (
    <motion.section
      className="contact-offices"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger}
    >
      <div className="contact-offices-inner">
        <motion.div className="section-header" variants={fadeUp}>
          <h2>OUR OFFICES</h2>
          <span className="header-accent" />
        </motion.div>

        <motion.div className="contact-offices-grid" variants={stagger}>
          {OFFICES.map((office) => (
            <motion.div key={office.region} className="contact-office-card" variants={fadeUp}>
              <div className="contact-office-image">
                <Image
                  src={office.image}
                  alt={`${office.region} — ${office.company}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="contact-office-body">
                <h3 className="contact-office-region">{office.region}</h3>
                <p className="contact-office-company">{office.company}</p>
                <a href={`mailto:${office.email}`} className="contact-office-email">
                  {office.email}
                </a>
                <p className="contact-office-address">{office.address}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ══════════════════════════════════════════
   4. BRANDS BANNER
   ══════════════════════════════════════════ */
function BrandsBanner() {
  return (
    <motion.section
      className="contact-brands"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger}
    >
      <div className="contact-brands-inner">
        <motion.p className="contact-brands-label" variants={fadeUp}>
          INQUIRY DISTRIBUTORS
        </motion.p>
        <motion.div className="contact-brands-logos" variants={fadeUp}>
          <Image
            src="/images/about-us/pic1.png"
            alt="Miles brands — Miles, Texas FrozenTech, Miles.srl"
            width={600}
            height={80}
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ══════════════════════════════════════════
   PAGE ASSEMBLY
   ══════════════════════════════════════════ */
export default function Contact() {
  return (
    <main>
      <Navbar />
      <ContactHero />
      <Suspense>
        <ContactForm />
      </Suspense>
      <OfficeLocations />
      <BrandsBanner />
      <Footer />
    </main>
  );
}
