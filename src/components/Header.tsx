"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    // Check initial scroll position
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "pt-4 px-4 sm:px-6"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent"
      }`}
    >
      <div
        className={`mx-auto transition-all duration-300 ${
          isScrolled
            ? "max-w-4xl bg-[#0a0a0a]/70 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl px-6"
            : "max-w-6xl px-8"
        }`}
      >
        <nav 
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-16" : "h-24"
          }`}
        >
          <Link
            href="/"
            className="font-display flex items-center gap-2 text-white text-xl font-semibold tracking-tight transition-transform hover:scale-105"
          > 
            <Image src="/logo.avif" alt="ROOTS" width={50} height={50} priority className={`transition-all duration-300 ${isScrolled ? "w-8 h-8" : "w-10 h-10"}`} />
            ROOTS
          </Link>
          
          <div className="hidden items-center text-white gap-8 md:flex">
            <Link
              href="#features"
              className="text-sm font-medium text-white/70 transition hover:text-[#42FF00]"
            >
              Features
            </Link>
            <Link
              href="#library"
              className="text-sm font-medium text-white/70 transition hover:text-[#42FF00]"
            >
              Library
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-white/70 transition hover:text-[#42FF00]"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-white/70 transition hover:text-[#42FF00]"
            >
              FAQ
            </Link>
          </div>

          <button
            className="md:hidden text-white hover:text-[#42FF00] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`absolute top-full left-0 right-0 mt-2 px-4 transition-all duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-6 shadow-2xl">
          <Link href="#features" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-white/90 hover:text-[#42FF00] transition-colors">Features</Link>
          <Link href="#library" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-white/90 hover:text-[#42FF00] transition-colors">Library</Link>
          <Link href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-white/90 hover:text-[#42FF00] transition-colors">Pricing</Link>
          <Link href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-white/90 hover:text-[#42FF00] transition-colors">FAQ</Link>
        </div>
      </div>
    </header>
  );
}
