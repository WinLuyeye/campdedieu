"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Découvrir", href: "/decouvrir" },
    { name: "Qui sommes-nous ?", href: "/qui-sommes-nous" },
  ];

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Link href="/" className="flex-shrink-0">
              <div className="relative w-36 md:w-48 h-12 md:h-14">
                <Image
                  src="/logo1.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-sm lg:text-base font-medium text-black group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#cf9001] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center">
              <Link
                href="/don"
                className="rounded-full border border-white/30 bg-[#980d0e] px-3 py-1.5 text-sm font-medium text-white transition hover:opacity-90"
              >
                Faire un don
              </Link>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-black"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg transition-all duration-500"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* LOGO */}
            <Link href="/" className="flex-shrink-0">
              <div className="relative w-36 md:w-48 h-12 md:h-14 transition-all duration-500">
                <Image
                  src="/logo1.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* DESKTOP LINKS */}
            <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-sm lg:text-base font-medium text-black transition-colors duration-200 group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#08367a] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* DON BUTTON */}
            <div className="hidden md:flex items-center">
              <Link
                href="/donner"
                className="rounded-full px-3 py-1.5 text-sm font-semibold bg-[#980d0e] text-white hover:opacity-90 transition"
              >
                Faire un don
              </Link>
            </div>

            {/* MOBILE */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-black focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-full z-40 transition-transform duration-500 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl overflow-y-auto">
          <div className="flex flex-col pt-24 px-6 space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-black hover:text-[#cf9001] px-4 py-3 rounded-lg hover:bg-gray-50 transition"
                style={{
                  animation: isMobileMenuOpen
                    ? `slideInFromRight 0.4s ease-out ${index * 0.05}s forwards`
                    : "none",
                  opacity: 0,
                  transform: "translateX(20px)",
                }}
              >
                {link.name}
              </Link>
            ))}

            <div className="h-px bg-gray-200 my-4" />

            <Link
              href="/donner"
              className="block text-center py-4 font-semibold text-white bg-[#980d0e] rounded-lg mx-4 hover:opacity-90 transition"
            >
              Faire un don
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;