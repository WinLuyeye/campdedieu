// components/AboutSection.tsx (version sans padding extérieur)
"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <div className="p-6 md:p-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#08367a] text-center mb-8">
          À propos du Camp de Jésus-Christ
        </h2>

        <div className="max-w-4xl mx-auto space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
          <p className="text-center text-xl md:text-2xl font-semibold text-[#08367a]">
            Telle une ville bâtie au-dessus d&apos;une montagne qui ne peut pas échapper des regards, nous sommes une cité ambassadrice de Christ-Jésus.
          </p>

          <p>
            La communauté des églises Le Camp de Jésus-Christ est une communauté Christo-centrique ayant pour vision première propager l&apos;évangile du Christ partout dans le monde. Nous sommes une église biblique qui expose chaque personne à la Parole de Dieu et à l&apos;œuvre de son Esprit.
          </p>

          <p>
            Aujourd&apos;hui, nous nous réunissons comme une seule église dans de nombreux endroits chaque semaine, portant la lumière de l&apos;Évangile à travers nos différentes assemblées locales.
          </p>

          <div className="bg-gradient-to-r from-[#08367a]/5 to-[#980d0e]/5 p-6 rounded-xl border-l-4 border-[#980d0e]">
            <p className="font-semibold text-[#08367a]">
              ✦ Au Camp de Jésus-Christ, tout tourne autour de Christ.
            </p>
            <p className="mt-2">
              Notre expression d&apos;amour pour Dieu est d&apos;aimer les gens et leur présenter Christ.
            </p>
          </div>

          <div className="text-center bg-[#08367a] text-white p-6 rounded-xl">
            <p className="text-xl font-bold">
              Voulez-vous expérimenter cet amour ?
            </p>
            <p className="mt-1">
              Joignez-vous à nous pour un service, nous sommes là pour vous aider.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}