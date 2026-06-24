// components/VisionMissionSection.tsx (version sans padding extérieur)
"use client";

import { motion } from "framer-motion";

export default function VisionMissionSection() {
  return (
    <div className="p-6 md:p-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#08367a] text-center mb-8">
          Vision &amp; Mission
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Vision */}
          <div className="bg-gray-50 p-6 rounded-xl border-t-4 border-[#980d0e] hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-[#08367a] mb-3 flex items-center">
              <span className="text-[#980d0e] text-2xl mr-2"></span>
              Notre Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Voir des gens, déçus du monde, vouloir appartenir à une communauté de ceux qui ont en eux <strong className="text-[#08367a]">le système de vie céleste</strong> sur terre; <strong className="text-[#08367a]">une cité ambassadrice</strong> de Christ-Jésus.
            </p>
            <div className="mt-3 p-3 bg-[#08367a]/5 rounded-lg">
              <p className="text-sm italic text-[#08367a]">
                « Allez partout dans le monde et faites de toutes les nations des disciples... »
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-gray-50 p-6 rounded-xl border-t-4 border-[#08367a] hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-[#08367a] mb-3 flex items-center">
              <span className="text-[#980d0e] text-2xl mr-2"></span>
              Notre Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-[#08367a]">Exposer</strong> chaque <strong className="text-[#08367a]">personne</strong> à la <strong className="text-[#08367a]">Parole de Dieu</strong> et à l&apos;<strong className="text-[#08367a]">œuvre</strong> de son <strong className="text-[#08367a]">Esprit</strong> pour que la <strong className="text-[#08367a]">vie</strong> de Christ <strong className="text-[#08367a]">se manifeste en lui</strong> personnellement et <strong className="text-[#08367a]">par lui</strong> socialement.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-2 py-1 bg-[#980d0e]/10 text-[#980d0e] rounded-full text-xs font-medium">Enseignement</span>
              <span className="px-2 py-1 bg-[#08367a]/10 text-[#08367a] rounded-full text-xs font-medium">Discipleship</span>
              <span className="px-2 py-1 bg-[#980d0e]/10 text-[#980d0e] rounded-full text-xs font-medium">Évangélisation</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}