// components/ContactSection.tsx
"use client";

import { motion } from "framer-motion";
import { FaClock, FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gray-50 p-6 md:p-8 rounded-2xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#08367a] mb-6">
              Nous Contacter
            </h2>
            <p className="text-gray-600 mb-8">
              En quoi pouvons-nous vous aider aujourd'hui ? Remplissez le formulaire ci-dessous.
            </p>

            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Votre nom
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#980d0e] focus:ring-2 focus:ring-[#980d0e]/20 outline-none transition"
                  placeholder="Jean M."
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Votre e-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#980d0e] focus:ring-2 focus:ring-[#980d0e]/20 outline-none transition"
                  placeholder="jean@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Objet
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#980d0e] focus:ring-2 focus:ring-[#980d0e]/20 outline-none transition"
                  placeholder="Sujet de votre message"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Votre message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#980d0e] focus:ring-2 focus:ring-[#980d0e]/20 outline-none transition resize-none"
                  placeholder="Écrivez votre message ici..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#980d0e] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#7a0b0c] transition-colors duration-300 hover:shadow-lg"
              >
                Envoyer
              </button>
            </form>
          </motion.div>

          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#08367a]">
              Bureau Administratif
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <FaClock className="text-[#980d0e] text-xl mt-1" />
                <div>
                  <p className="font-medium text-[#08367a]">Horaires d'ouverture</p>
                  <p className="text-gray-600">Mardi - Vendredi</p>
                  <p className="text-gray-600">8:30 - 17:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <FaPhone className="text-[#980d0e] text-xl mt-1" />
                <div>
                  <p className="font-medium text-[#08367a]">Téléphone</p>
                  <p className="text-gray-600">(+243) 82 850 1407</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <FaMapMarkerAlt className="text-[#980d0e] text-xl mt-1" />
                <div>
                  <p className="font-medium text-[#08367a]">Adresse</p>
                  <p className="text-gray-600">496, Tropiques - 4è rue</p>
                  <p className="text-gray-600">C/Limete - Kinshasa</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <FaEnvelope className="text-[#980d0e] text-xl mt-1" />
                <div>
                  <p className="font-medium text-[#08367a]">Email</p>
                  <p className="text-gray-600">infos@ce.church</p>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="bg-gradient-to-r from-[#08367a] to-[#980d0e] p-6 rounded-2xl text-white text-center">
              <p className="font-semibold text-lg">
                Rejoignez-nous ce dimanche !
              </p>
              <p className="text-sm opacity-90">
                Venez expérimenter la présence de Dieu dans notre communauté
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}