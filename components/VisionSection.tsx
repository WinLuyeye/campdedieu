"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const VisionSection = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center text-center overflow-hidden">

      {/* IMAGE BACKGROUND */}
      <Image
        src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=2070&q=80"
        alt="Vision de l'église"
        fill
        className="object-cover"
        priority
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#08367a]/80" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl px-6">

        {/* VERSET */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white/80 text-sm md:text-base uppercase tracking-widest mb-4"
        >
          Matthieu 28:19
        </motion.p>

        {/* TEXTE PRINCIPAL */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
        >
          “Allez, faites de toutes les nations des disciples.”
        </motion.h2>

        {/* VISION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto"
        >
          Une église appelée à transformer des vies, restaurer les cœurs et propager
          l’Évangile de Jésus-Christ dans le monde entier.
        </motion.p>

      </div>

    </section>
  );
};

export default VisionSection;