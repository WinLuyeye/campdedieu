// components/decouvrir/MinisteresSection.tsx
"use client";

import { motion } from "framer-motion";
import { FaChild, FaMusic, FaUsers, FaHandsHelping, FaBook, FaPray, FaVideo, FaHeart } from "react-icons/fa";

const ministeres = [
  {
    icon: <FaUsers />,
    title: "Ministère des Jeunes",
    description: "Des jeunes passionnés qui impactent leur génération pour Christ",
    verse: "1 Timothée 4:12",
    bgColor: "from-[#980d0e]/10",
  },
  {
    icon: <FaChild />,
    title: "École du Dimanche",
    description: "Éduquer et former les enfants à la connaissance de Dieu",
    verse: "Proverbes 22:6",
    bgColor: "from-[#08367a]/10",
  },
  {
    icon: <FaMusic />,
    title: "Ministère de Louange",
    description: "Des adorateurs qui préparent le cœur de l'église à la présence de Dieu",
    verse: "Psaumes 150",
    bgColor: "from-[#cf9001]/10",
  },
  {
    icon: <FaPray />,
    title: "Ministère de Prière",
    description: "Des intercesseurs qui veillent sur l'église et la nation",
    verse: "1 Thessaloniciens 5:17",
    bgColor: "from-[#980d0e]/10",
  },
  {
    icon: <FaHandsHelping />,
    title: "Ministère Social",
    description: "Aider les plus vulnérables et manifester l'amour de Christ",
    verse: "Matthieu 25:35-36",
    bgColor: "from-[#08367a]/10",
  },
  {
    icon: <FaHeart />,
    title: "Accueil et Intégration",
    description: "Accueillir les nouveaux et les aider à trouver leur place",
    verse: "Romains 15:7",
    bgColor: "from-[#cf9001]/10",
  },
];

export default function MinisteresSection() {
  return (
    <section id="ministeres" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-[#980d0e] font-semibold text-sm uppercase tracking-wider">
            🙌 Servir Ensemble
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#08367a] mt-2">
            Nos Ministères
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Des opportunités pour servir Dieu et sa communauté selon vos talents et passions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ministeres.map((min, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`bg-gradient-to-br ${min.bgColor} to-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group`}
            >
              <div className="text-[#980d0e] text-4xl mb-4 group-hover:scale-110 transition-transform">
                {min.icon}
              </div>
              <h3 className="text-xl font-bold text-[#08367a] mb-2">
                {min.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {min.description}
              </p>
              <p className="mt-3 text-xs font-semibold text-[#980d0e] italic">
                « {min.verse} »
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}