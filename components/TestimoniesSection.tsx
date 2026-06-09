"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonies = [
  {
    name: "Sarah M.",
    image: "/images/testimony-1.jpg",
    text: "J'ai retrouvé la paix intérieure et une relation profonde avec Dieu grâce aux enseignements et à l'accompagnement spirituel de l'Église Le Camp de Jésus-Christ.",
  },
  {
    name: "David K.",
    image: "/images/testimony-2.jpg",
    text: "Ma vie a été transformée. J'ai découvert ma vocation, renforcé ma foi et trouvé une véritable famille spirituelle.",
  },
  {
    name: "Grâce N.",
    image: "/images/testimony-3.jpg",
    text: "Dans les moments les plus difficiles de ma vie, Dieu m'a relevée. Aujourd'hui, je témoigne de Sa fidélité et de Son amour.",
  },
];

export default function TestimoniesSection() {
  return (
    <section className="py-24 bg-[#08367a] text-white relative overflow-hidden">
      {/* Décoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-32 -translate-y-32" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#980d0e]/20 rounded-full translate-x-32 translate-y-32" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#cf9001] font-semibold uppercase tracking-widest">
            Témoignages
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Dieu transforme encore des vies aujourd&apos;hui
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Découvrez quelques témoignages de personnes dont la vie a été
            impactée par la grâce de Dieu à travers notre communauté.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {testimonies.map((testimony, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
            >
              <div className="flex items-center gap-4 mb-6">

                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimony.image}
                    alt={testimony.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    {testimony.name}
                  </h3>

                  <p className="text-sm text-gray-300">
                    Membre de l&apos;église
                  </p>
                </div>
              </div>

              <p className="text-gray-200 leading-relaxed">
                “{testimony.text}”
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}