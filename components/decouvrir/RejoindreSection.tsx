// components/decouvrir/RejoindreSection.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaHeart, FaArrowRight, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function RejoindreSection() {
  return (
    <section id="rejoindre" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#08367a] to-[#980d0e]"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <FaHeart className="text-4xl" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Rejoignez Notre Famille
          </h2>

          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Vous cherchez une communauté où vous pouvez grandir, servir et être aimé ?
            Le Camp de Jésus-Christ est votre maison.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              href="/contact"
              className="bg-white text-[#08367a] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 flex items-center gap-2"
            >
              Nous contacter
              <FaArrowRight />
            </Link>
            <Link
              href="#cultes"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all hover:scale-105"
            >
              Voir nos cultes
            </Link>
          </div>

          {/* Infos pratiques */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <FaMapMarkerAlt className="text-2xl mx-auto mb-2" />
              <p className="text-sm">496, Tropiques, Kinshasa</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <FaPhone className="text-2xl mx-auto mb-2" />
              <p className="text-sm">(+243) 82 850 1407</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <FaEnvelope className="text-2xl mx-auto mb-2" />
              <p className="text-sm">infos@ce.church</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}