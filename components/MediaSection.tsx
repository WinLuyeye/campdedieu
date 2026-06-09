"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function MediaSection() {
  return (
    <section className="bg-[#f8fafc] py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* TEXTE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#980d0e] font-semibold uppercase tracking-wider">
            Médias
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1525] mt-3 mb-6">
            Revivez les moments forts de notre communauté
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Découvrez les temps de louange, les cultes, les conférences,
            les moments de communion fraternelle et les événements qui
            marquent la vie de notre église.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Chaque rassemblement est une occasion de rencontrer Dieu,
            grandir dans la foi et vivre l&apos;Évangile avec authenticité.
          </p>

          <Link
            href="/Medias"
            className="inline-flex items-center bg-[#980d0e] text-white px-7 py-3 rounded-full font-semibold hover:opacity-90 transition"
          >
            Voir toutes les photos
          </Link>
        </motion.div>

        {/* GALERIE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
<div className="grid grid-cols-2 gap-5">

  <div className="relative h-[320px] rounded-3xl overflow-hidden">
    <Image
      src="https://res.cloudinary.com/dukqurtfw/image/upload/v1780971481/WhatsApp_Image_2026-06-09_at_03.00.15_oablvt.jpg"
      alt="Culte"
      fill
      className="object-cover hover:scale-110 transition duration-700"
    />
  </div>

  <div className="flex flex-col gap-5">

    <div className="relative h-[150px] rounded-3xl overflow-hidden">
      <Image
        src="https://res.cloudinary.com/dukqurtfw/image/upload/v1780971152/img4_sfukmt.jpg"
        alt="Louange"
        fill
        className="object-cover hover:scale-110 transition duration-700"
      />
    </div>

    <div className="relative h-[150px] rounded-3xl overflow-hidden">
      <Image
        src="https://res.cloudinary.com/dukqurtfw/image/upload/v1780971153/img3_jjeleb.jpg"
        alt="Prédication"
        fill
        className="object-cover hover:scale-110 transition duration-700"
      />
    </div>

  </div>

  <div className="relative h-[180px] rounded-3xl overflow-hidden col-span-2">
    <Image
      src="https://res.cloudinary.com/dukqurtfw/image/upload/v1780971152/img2_myswjw.jpg"
      alt="Communauté"
      fill
      className="object-cover hover:scale-110 transition duration-700"
    />
  </div>

</div>

          {/* Accent design */}
          <div className="absolute hidden lg:block w-32 h-32 border-4 border-[#980d0e]/20 rounded-full -translate-x-10 -translate-y-10"></div>
        </motion.div>

      </div>
    </section>
  );
}