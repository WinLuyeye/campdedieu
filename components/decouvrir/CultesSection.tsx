// components/decouvrir/CultesSection.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaClock, FaMapMarkerAlt, FaUsers, FaPrayingHands } from "react-icons/fa";

const cultes = [
  {
    id: 1,
    day: "Mardi",
    time: "16h00 - 19h30",
    title: "Culte de Réveil",
    description: "Un moment intense de prière et d'adoration pour recharger votre semaine",
    icon: <FaPrayingHands />,
    image: "https://res.cloudinary.com/dukqurtfw/image/upload/v1781051046/WhatsApp_Image_2026-06-10_at_01.10.10_ycuhs5.jpg",
    bgColor: "from-[#980d0e]/20 to-[#980d0e]/5",
    borderColor: "border-[#980d0e]",
    highlight: "Réveil Spirituel",
  },
  {
    id: 2,
    day: "Jeudi",
    time: "16h30 - 19h30",
    title: "Culte d'Intercession",
    description: "Un temps consacré à l'intercession pour notre nation et nos familles",
    icon: <FaPrayingHands />,
    image: "https://res.cloudinary.com/dukqurtfw/image/upload/v1781051046/WhatsApp_Image_2026-06-10_at_01.10.09_fd4knp.jpg",
    bgColor: "from-[#08367a]/20 to-[#08367a]/5",
    borderColor: "border-[#08367a]",
    highlight: "Intercession",
  },
  {
    id: 3,
    day: "Dimanche",
    time: "08h30 - 10h30",
    title: "Culte de Gloire",
    description: "Le grand rendez-vous dominical pour célébrer la résurrection de Christ",
    icon: <FaPrayingHands />,
    image: "https://res.cloudinary.com/dukqurtfw/image/upload/v1781048578/WhatsApp_Image_2026-06-10_at_00.39.11_vjtzjv.jpg",
    bgColor: "from-[#cf9001]/20 to-[#cf9001]/5",
    borderColor: "border-[#cf9001]",
    highlight: "Célébration",
  },
];

export default function CultesSection() {
  return (
    <section id="cultes" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-[#980d0e] font-semibold text-sm uppercase tracking-wider">
            📅 Nos Rendez-vous
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#08367a] mt-2">
            Nos Cultes Hebdomadaires
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Trois moments forts dans la semaine pour se ressourcer, prier et célébrer ensemble
          </p>
        </motion.div>

        {/* Grid des cultes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cultes.map((culte, index) => (
            <motion.div
              key={culte.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={culte.image}
                  alt={`Culte du ${culte.day}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent`} />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className={`inline-block px-4 py-1.5 rounded-full text-white text-xs font-bold bg-[${culte.borderColor}]`}>
                    {culte.highlight}
                  </span>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-[#08367a]">
                    {culte.day}
                  </h3>
                  <div className={`text-[#980d0e] text-2xl bg-[#980d0e]/10 p-3 rounded-full`}>
                    {culte.icon}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[#980d0e] font-semibold text-sm mb-3">
                  <FaClock />
                  <span>{culte.time}</span>
                </div>

                <h4 className="text-lg font-bold text-[#08367a] mb-2">
                  {culte.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {culte.description}
                </p>

                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-3 text-xs text-gray-500">
                  <FaUsers />
                  <span>Famille de Dieu</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <FaMapMarkerAlt />
                  <span>Kinshasa</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600">
            <span className="text-[#980d0e] font-semibold">📍</span> Nous vous attendons !
          </p>
        </motion.div>
      </div>
    </section>
  );
}