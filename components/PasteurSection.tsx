// components/PasteurSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Collaborateur {
  id: number;
  nom: string;
  fonction: string;
  image: string;
}

const collaborateurs: Collaborateur[] = [
  {
    id: 1,
    nom: "Jean-Paul MIKOLO",
    fonction: "Pasteur adjoint",
    image: "/collab1.jpg", // À remplacer par vos images
  },
  {
    id: 2,
    nom: "Marie-Claire NTUMBA",
    fonction: "Responsable des femmes",
    image: "/collab2.jpg",
  },
  {
    id: 3,
    nom: "David KABONGO",
    fonction: "Responsable des jeunes",
    image: "/collab3.jpg",
  },
];

export default function PasteurSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Conteneur principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Colonne gauche - Texte */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Espaceur */}
            <div className="h-4 md:h-8"></div>

            {/* Titre */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#08367a] leading-tight">
              Pasteur ELIE TSHINGULI
            </h2>

            {/* Description */}
            <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-4">
              <p>
                La communauté des églises Le Camp de Jésus-Christ est une communauté Christo-centrique ayant pour vision première propager l&apos;évangile du Christ partout dans le monde.
              </p>
              <p className="italic text-[#08367a] font-medium border-l-4 border-[#980d0e] pl-4">
                « Allez partout dans le monde et faites de toutes les nations des disciples... »
              </p>
            </div>

            {/* Bouton */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/qui-sommes-nous"
                className="inline-block bg-[#980d0e] text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:bg-[#7a0b0c] hover:shadow-lg"
              >
                En savoir plus
              </Link>
            </motion.div>
          </motion.div>

          {/* Colonne droite - Illustration ou icône */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center items-center"
          >
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
  <Image
    src="https://apcsc.gouv.cd/public/dga1.jpg" // Mettez votre photo
    alt="Église Le Camp de Jésus-Christ"
    fill
    className="object-cover object-top"
  />
</div>
          </motion.div>
        </div>

        {/* Section des collaborateurs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 md:mt-20 pt-12 border-t-2 border-gray-200"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-center text-[#08367a] mb-12"
          >
            Nos collaborateurs
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {collaborateurs.map((collab) => (
              <motion.div
                key={collab.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group text-center"
              >
                {/* Image du collaborateur */}
                <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-4 border-[#08367a] shadow-lg transition-all duration-300 group-hover:border-[#980d0e] group-hover:shadow-xl">
                  <Image
                    src={collab.image}
                    alt={collab.nom}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Nom et fonction */}
                <h4 className="mt-4 text-xl md:text-2xl font-bold text-[#08367a] group-hover:text-[#980d0e] transition-colors">
                  {collab.nom}
                </h4>
                <p className="text-sm md:text-base text-gray-600 font-medium">
                  {collab.fonction}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}