// components/decouvrir/TemoignagesSection.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const temoignages = [
  {
    name: "Jean M.",
    role: "Membre depuis 2018",
    text: "Le Camp de Jésus-Christ a transformé ma vie. J'ai trouvé une famille, une direction et un but. Je ne suis plus le même.",
    avatar: "https://ui-avatars.com/api/?name=Jean+M&background=08367a&color=fff&size=100",
  },
  {
    name: "Marie K.",
    role: "Membre depuis 2020",
    text: "Cette église m'a accueillie avec tant d'amour. Chaque culte est une rencontre puissante avec Dieu.",
    avatar: "https://ui-avatars.com/api/?name=Marie+K&background=980d0e&color=fff&size=100",
  },
  {
    name: "David L.",
    role: "Membre depuis 2019",
    text: "La parole de Dieu y est enseignée avec clarté et puissance. Je grandis chaque jour dans ma foi.",
    avatar: "https://ui-avatars.com/api/?name=David+L&background=08367a&color=fff&size=100",
  },
];

export default function TemoignagesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-[#980d0e] font-semibold text-sm uppercase tracking-wider">
            💬 Ils Parlent de Nous
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#08367a] mt-2">
            Ce Que Nos Membres Disent
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {temoignages.map((temoignage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <FaQuoteLeft className="text-[#980d0e] text-3xl opacity-30 mb-4" />
              <p className="text-gray-700 leading-relaxed mb-4 italic">
                "{temoignage.text}"
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src={temoignage.avatar}
                  alt={temoignage.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-[#08367a]">
                    {temoignage.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {temoignage.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}