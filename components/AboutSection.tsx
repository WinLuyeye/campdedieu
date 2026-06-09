"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* TEXTE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1525] mb-6">
            Qui sommes-nous ?
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
            Nous sommes une église centrée sur Jésus-Christ, appelée à impacter les vies
            par la parole de Dieu, la prière et l’amour fraternel.
          </p>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
            Notre vision est de former des disciples solides, de restaurer les vies
            brisées et de propager l’Évangile dans le monde entier.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link
              href="/decouvrir"
              className="bg-[#980d0e] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
            >
              Découvrir plus
            </Link>

            <Link
              href="/contact"
              className="border border-[#0a1525] text-[#0a1525] px-6 py-3 rounded-full font-semibold hover:bg-[#0a1525] hover:text-white transition"
            >
              Nous contacter
            </Link>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"
              alt="Église"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* accent design */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#980d0e] rounded-2xl -z-10" />
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;