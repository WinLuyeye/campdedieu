// components/decouvrir/VieEgliseSection.tsx
"use client";

import { motion } from "framer-motion";
import { FaCross, FaBible, FaUsers, FaHeart, FaHands, FaStar } from "react-icons/fa";

const valeurs = [
  {
    icon: <FaCross />,
    title: "Christo-centrique",
    description: "Tout tourne autour de Christ et de sa parole",
  },
  {
    icon: <FaBible />,
    title: "Biblique",
    description: "La Bible est notre seule règle de foi et de conduite",
  },
  {
    icon: <FaUsers />,
    title: "Communauté",
    description: "Nous grandissons ensemble dans l'amour et l'unité",
  },
  {
    icon: <FaHeart />,
    title: "Amour",
    description: "L'amour de Dieu manifesté à travers nos actions",
  },
  {
    icon: <FaHands />,
    title: "Service",
    description: "Servir Dieu en servant les autres",
  },
  {
    icon: <FaStar />,
    title: "Excellence",
    description: "Faire toutes choses pour la gloire de Dieu",
  },
];

export default function VieEgliseSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-[#980d0e] font-semibold text-sm uppercase tracking-wider">
            Notre Identité
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#08367a] mt-2">
            La Vie de Notre Église
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Nos valeurs fondamentales qui façonnent notre communauté
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {valeurs.map((valeur, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#08367a] to-[#980d0e] rounded-2xl flex items-center justify-center text-white text-3xl mb-4 group-hover:scale-110 transition-transform shadow-lg group-hover:shadow-xl">
                {valeur.icon}
              </div>
              <h3 className="text-xl font-bold text-[#08367a] mb-2">
                {valeur.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {valeur.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}