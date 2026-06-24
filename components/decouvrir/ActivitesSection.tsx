// components/decouvrir/ActivitesSection.tsx
"use client";

import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaUsers, FaChurch, FaPrayingHands } from "react-icons/fa";

const activites = [
  {
    title: "École Biblique",
    description: "Approfondir la connaissance de la Parole de Dieu",
    schedule: "Tous les samedis",
    time: "14h00 - 16h00",
    icon: <FaPrayingHands />,
  },
  {
    title: "Réunion de Prière",
    description: "Se rassembler pour intercéder pour l'église et la nation",
    schedule: "Chaque mercredi",
    time: "17h00 - 19h00",
    icon: <FaChurch />,
  },
  {
    title: "Groupe de Jeunes",
    description: "Des rencontres dynamiques pour la génération montante",
    schedule: "Tous les vendredis",
    time: "16h00 - 18h00",
    icon: <FaUsers />,
  },
  {
    title: "Cellules de Quartier",
    description: "Vivre l'église en petit groupe dans vos quartiers",
    schedule: "Pendant la semaine",
    time: "Selon les cellules",
    icon: <FaMapMarkerAlt />,
  },
];

export default function ActivitesSection() {
  return (
    <section id="activites" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-[#980d0e] font-semibold text-sm uppercase tracking-wider">
            📆 Au-delà des Cultes
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#08367a] mt-2">
            Nos Activités
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Des moments de partage, de croissance et de communion tout au long de la semaine
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activites.map((activite, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-shadow border border-gray-100 group"
            >
              <div className="flex items-start gap-4">
                <div className="text-[#980d0e] text-3xl bg-[#980d0e]/10 p-3 rounded-xl group-hover:scale-110 transition-transform">
                  {activite.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#08367a]">
                    {activite.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {activite.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mt-3 text-xs">
                    <span className="flex items-center gap-1 text-[#980d0e] font-medium">
                      <FaCalendarAlt />
                      {activite.schedule}
                    </span>
                    <span className="flex items-center gap-1 text-[#08367a] font-medium">
                      <FaClock />
                      {activite.time}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}