// components/StaffSection.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const staffMembers = [
  {
    id: 1,
    name: "Pasteur ELIE TSHINGULI",
    role: "Pasteur Principal",
    image: "/staff/pasteur.jpg",
    description: "Fondateur et leader spirituel de la communauté",
  },
  {
    id: 2,
    name: "Pasteur Jean MIKOLO",
    role: "Pasteur Adjoint",
    image: "/staff/pasteur-adjoint.jpg",
    description: "Responsable des ministères et de la formation",
  },
  {
    id: 3,
    name: "Soeur Marie NTUMBA",
    role: "Responsable des Femmes",
    image: "/staff/responsable-femmes.jpg",
    description: "Coordination des activités féminines",
  },
  {
    id: 4,
    name: "Frère David KABONGO",
    role: "Responsable des Jeunes",
    image: "/staff/responsable-jeunes.jpg",
    description: "Animation et encadrement des jeunes",
  },
  {
    id: 5,
    name: "Frère Samuel LUMBU",
    role: "Coordinateur Administratif",
    image: "/staff/coord-admin.jpg",
    description: "Gestion administrative et logistique",
  },
  {
    id: 6,
    name: "Soeur Esther KASONGO",
    role: "Responsable des Enfants",
    image: "/staff/responsable-enfants.jpg",
    description: "Ministère des enfants et école du dimanche",
  },
];

export default function StaffSection() {
  return (
    <section className="p-6 md:p-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#08367a]">
          Notre Équipe Pastorale
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Des serviteurs dévoués, appelés à servir Dieu et sa communauté
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {staffMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
          >
            <div className="relative h-64 bg-gradient-to-br from-[#08367a]/10 to-[#980d0e]/10">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-[#08367a]">
                {member.name}
              </h3>
              <p className="text-[#980d0e] font-semibold text-sm mb-2">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm">
                {member.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}