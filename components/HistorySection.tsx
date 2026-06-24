// components/HistorySection.tsx
"use client";

import { motion } from "framer-motion";

const historyEvents = [
  {
    year: "2016",
    title: "Démarrage du Camp de Jésus-Christ",
    description: "La nouvelle église commence par des cultes matinaux dénommés « Exhaler » avant de tenir le culte inaugural avec près de 3800 participants.",
    side: "right"
  },
  {
    year: "2017",
    title: "Structuration et Autonomie",
    description: "La jeune église se structure en ministères et lance sa première grande activité. L'autonomie de l'église est reconnue comme une église mère.",
    side: "left"
  },
  {
    year: "2018",
    title: "Maturité et Organisation",
    description: "Le nombre des leaders ayant augmenté, la planification des dépenses, la hiérarchisation des fonctions et des tâches deviennent des priorités. Un ministère propre aux adolescents se démarque.",
    side: "right"
  },
  {
    year: "2019",
    title: "Roadmap et Développement",
    description: "Mise en place d'un roadmap pour orienter les efforts collectifs. Intégration maximale des ouvriers et semi-automatisation du fonctionnement entre administration et ministères.",
    side: "left"
  },
  {
    year: "2020",
    title: "Consolidation du Système",
    description: "Adaptation à la pandémie avec les cultes en ligne qui deviennent un point fort. Mise en place des départements de coordination de la vision.",
    side: "right"
  },
  {
    year: "2021",
    title: "Système Apostolique",
    description: "Vulgarisation du système de gouvernance et mise en place d'un système apostolique. Début des extensions de l'église avec de nouvelles implantations.",
    side: "left"
  },
];

export default function HistorySection() {
  return (
    <section id="histoire" className="py-16 md:py-20 bg-[#08367a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
            Notre Histoire
          </h2>
          <p className="text-xl text-white/80 text-center mb-12">
            Comment tout a commencé...
          </p>

          <div className="relative">
            {/* Ligne centrale */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#980d0e] hidden md:block"></div>

            {/* Événements */}
            <div className="space-y-12">
              {historyEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: event.side === 'right' ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center ${
                    event.side === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Contenu */}
                  <div className={`w-full md:w-5/12 ${
                    event.side === 'right' ? 'md:text-right' : 'md:text-left'
                  }`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl font-bold text-[#980d0e]">
                          {event.year}
                        </span>
                        <span className="text-[#08367a] font-semibold">•</span>
                        <h3 className="text-xl font-bold text-[#08367a]">
                          {event.title}
                        </h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Point central */}
                  <div className="hidden md:flex w-2/12 justify-center relative">
                    <div className="w-6 h-6 bg-[#980d0e] rounded-full border-4 border-white shadow-lg z-10"></div>
                  </div>

                  {/* Espace vide */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Version mobile simplifiée */}
          <div className="md:hidden mt-8 space-y-6">
            {historyEvents.map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl font-bold text-[#980d0e]">
                    {event.year}
                  </span>
                  <span className="text-[#08367a] font-semibold">•</span>
                  <h3 className="text-xl font-bold text-[#08367a]">
                    {event.title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}