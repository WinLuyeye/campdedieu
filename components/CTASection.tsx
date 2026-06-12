"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="bg-[#08367a] py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Rejoignez notre famille spirituelle
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-white/80 max-w-3xl mx-auto mb-10"
        >
          Que vous découvriez la foi ou que vous cherchiez une
          communauté pour grandir avec Christ, vous êtes les bienvenus.
          Venez vivre des moments de communion, de prière et de
          transformation avec nous.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/decouvrir"
            className="bg-white text-[#08367a] px-7 py-3 rounded-full font-semibold hover:opacity-90 transition"
          >
            Découvrir l&lsquo;Église
          </Link>

          <Link
            href="/contact"
            className="border border-white text-white px-7 py-3 rounded-full font-semibold hover:bg-white hover:text-[#08367a] transition"
          >
            Nous contacter
          </Link>
        </motion.div>

      </div>
    </section>
  );
}