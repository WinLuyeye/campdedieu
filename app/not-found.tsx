"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a1525] text-white px-6">
      <div className="text-center max-w-2xl">

        {/* Animation 404 */}
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[90px] md:text-[140px] font-extrabold text-[#980d0e]"
        >
          404
        </motion.h1>

        {/* Message */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-bold mb-4"
        >
          Page introuvable
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 mb-8"
        >
          La page que vous recherchez n’existe pas ou a été déplacée.
        </motion.p>

        {/* Bouton retour */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/"
            className="inline-block bg-[#980d0e] hover:opacity-90 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            Retour à l’accueil
          </Link>
        </motion.div>

      </div>
    </div>
  );
}