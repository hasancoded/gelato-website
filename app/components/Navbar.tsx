"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-inner">
        <Link href="/" className="navbar-logo">
          <span className="logo-miles">Miles</span>
          <span className="logo-dot">.</span>
        </Link>

        <div className="navbar-links">
          {[
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about-us" },
            { label: "Products", href: "/products" },
            { label: "Services", href: "/services" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <a key={link.label} href={link.href} className="navbar-link">
              {link.label}
            </a>
          ))}
        </div>

        <a href="/contact" className="navbar-cta">
          Get a Quote
        </a>
      </div>
    </nav>
  );
}
