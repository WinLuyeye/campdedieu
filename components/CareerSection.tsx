// components/CareerSection.tsx
"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaUsers, FaHandsHelping, FaHeart } from "react-icons/fa";

const careerItems = [
  {
    icon: <FaBriefcase />,
    title: "Opportunités de Service",
    description: "Rejoignez notre équipe et servez dans différents ministères",
    areas: ["Enseignement", "Musique", "Technologie", "Administration"],
  },
  {
    icon: <FaUsers />,
    title: "Formation et Développement",
    description: "Nous investissons dans la formation de nos leaders",
    areas: ["École biblique", "Séminaires", "Ateliers pratiques"],
  },
  {
    icon: <FaHandsHelping />,
    title: "Service Communautaire",
    description: "Engagez-vous dans des projets d'impact social",
    areas: ["Aide sociale", "Éducation", "Santé"],
  },
  {
    icon: <FaHeart />,
    title: "Vocation Spirituelle",
    description: "Développez votre appel et votre ministère",
    areas: ["Pastorale", "Évangélisation", "Discipleship"],
  },
];

export default function CareerSection() {
  return (
    <section className="p-6 md:p-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#08367a]">
          Carrière &amp; Vocation
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Découvrez comment vous pouvez servir et grandir dans notre communauté
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {careerItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#980d0e]"
          >
            <div className="text-[#980d0e] text-3xl mb-3">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-[#08367a] mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 mb-3">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {item.areas.map((area, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-[#08367a]/10 text-[#08367a] rounded-full text-xs font-medium"
                >
                  {area}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center bg-[#08367a] p-6 rounded-2xl max-w-3xl mx-auto">
        <p className="text-white text-lg font-semibold">
          Vous voulez servir avec nous ?
        </p>
        <p className="text-white/80 text-sm mt-1">
          Contactez-nous pour découvrir comment vous pouvez contribuer à la vision
        </p>
        <button className="mt-4 bg-[#980d0e] text-white px-8 py-2 rounded-full hover:bg-[#7a0b0c] transition-colors">
          Nous rejoindre
        </button>
      </div>
    </section>
  );
}