"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ServicesSection() {
  return (
    <section id="culte" className="relative w-full bg-white py-24 overflow-hidden">

      {/* 🔵 ELEMENTS DECORATIFS ABSOLUTE */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-[#980d0e]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-[#08367a]/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-[#980d0e]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-14">


          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#0a1525]"
          >
            Nos Cultes
          </motion.h2>

          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Venez vivre des moments puissants dans la présence de Dieu à travers nos différents cultes hebdomadaires.
          </p>

        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="group text-center"
          >
            <div className="relative overflow-hidden rounded-2xl h-[260px]">
              <Image
                src="/"
                alt="Culte mardi"
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <p className="mt-5 font-semibold text-[#0a1525]">
              Mardi : 16h - 19h30
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="group text-center"
          >
            <div className="relative overflow-hidden rounded-2xl h-[260px]">
              <Image
                src="/"
                alt="Culte jeudi"
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <p className="mt-5 font-semibold text-[#0a1525]">
              Jeudi : 16h30 - 19h30
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="group text-center"
          >
            <div className="relative overflow-hidden rounded-2xl h-[260px]">
              <Image
                src="/"
                alt="Culte dimanche"
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <p className="mt-5 font-semibold text-[#0a1525]">
              Dimanche : 08h30 - 10h30
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}