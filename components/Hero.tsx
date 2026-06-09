"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Bienvenue à l’Église Le Camp de Jésus-Christ",
      ghost: "Bienvenue",
      description:
        "Une communauté centrée sur Christ, ouverte à tous, pour grandir dans la foi, l’amour et la vérité de l’Évangile.",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2069&q=80",
    },
    {
      title: "Allez partout dans le monde",
      ghost: "Mission",
      description:
        "« Allez partout dans le monde et faites de toutes les nations des disciples... » — Matthieu 28:19",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2069&q=80",
    },
    {
      title: "Une communauté unie en Christ",
      ghost: "Communion",
      description:
        "Grandir ensemble dans la foi, l’amour fraternel et la présence de Dieu au quotidien.",
      image:
        "https://images.unsplash.com/photo-1511649475669-e288648b2339?auto=format&fit=crop&w=2071&q=80",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background slides */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
            initial={{ scale: 1.05 }}
            animate={{
              scale: index === currentSlide ? 1 : 1.05,
            }}
            transition={{ duration: 6, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1525]/80 via-[#0f2a3d]/75 to-[#0a1525]/85" />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <div className="max-w-4xl px-6 w-full">

          {/* Ghost text */}
          <motion.h1
            key={slides[currentSlide].ghost}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ duration: 1 }}
            className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] lg:text-[200px] font-extrabold text-white uppercase pointer-events-none whitespace-nowrap"
          >
            {slides[currentSlide].ghost}
          </motion.h1>

          {/* Title */}
          <motion.h2
            key={slides[currentSlide].title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
          >
            {slides[currentSlide].title}
          </motion.h2>

          {/* Description */}
          <motion.p
            key={slides[currentSlide].description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            {slides[currentSlide].description}
          </motion.p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/decouvrir"
              className="bg-white text-[#0a1525] px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
            >
              Découvrir l’Église
            </Link>

            <Link
              href="/contact"
              className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#0a1525] transition"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-white" : "w-4 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;