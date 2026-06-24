// components/decouvrir/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaPlay, FaArrowDown } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#08367a]/90 to-[#08367a]/70 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dukqurtfw/image/upload/v1781051046/WhatsApp_Image_2026-06-10_at_01.10.10_ycuhs5.jpg')",
          }}
        />
      </div>

      {/* Contenu */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Découvrez une
            <span className="text-[#cf9001] block">communauté vivante</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-2xl leading-relaxed">
            Un lieu où la parole de Dieu transforme des vies, où la communauté grandit 
            dans l'amour et où chacun trouve sa place pour servir et être servi.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="#cultes"
              className="bg-[#980d0e] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#7a0b0c] transition-all hover:scale-105 flex items-center gap-2"
            >
              <FaPlay className="text-sm" />
              Découvrir nos cultes
            </Link>
            <Link
              href="#rejoindre"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-all hover:scale-105 border border-white/30 flex items-center gap-2"
            >
              Nous rejoindre
              <FaArrowDown className="text-sm" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Flèche vers le bas */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/50"
      >
        <FaArrowDown className="text-2xl" />
      </motion.div>
    </section>
  );
}