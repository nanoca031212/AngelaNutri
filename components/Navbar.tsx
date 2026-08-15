"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Início" },
    { href: "#sobre", label: "Sobre" },
    { href: "#planos", label: "Planos" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#faq", label: "Dúvidas" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out transform ${
        scrolled || isOpen
          ? "translate-y-0 opacity-100 bg-white/90 backdrop-blur-md shadow-sm py-4"
          : "-translate-y-full opacity-0 pointer-events-none py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-20 lg:px-32 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setIsOpen(false)}
        >
          <span className="text-2xl font-serif font-bold text-text-main tracking-tight">
            Angela <span className="text-secondary">Andrade</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/5571981401425"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            Agendar Consulta
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-text-main hover:text-primary transition-colors p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-zinc-100 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-lg font-bold text-text-main hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/5571981401425"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-6 py-4 rounded-xl text-center font-bold shadow-lg active:scale-[0.98] transition-all"
                onClick={() => setIsOpen(false)}
              >
                Agendar Consulta
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
