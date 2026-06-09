'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function MediaSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Images de la galerie
  const galleryImages = [
    {
      src: 'https://res.cloudinary.com/dukqurtfw/image/upload/v1780971481/WhatsApp_Image_2026-06-09_at_03.00.15_oablvt.jpg',
      alt: 'Culte',
    },
    {
      src: 'https://res.cloudinary.com/dukqurtfw/image/upload/v1780971152/img4_sfukmt.jpg',
      alt: 'Louange',
    },
    {
      src: 'https://res.cloudinary.com/dukqurtfw/image/upload/v1780971153/img3_jjeleb.jpg',
      alt: 'Prédication',
    },
    {
      src: 'https://res.cloudinary.com/dukqurtfw/image/upload/v1780971152/img2_myswjw.jpg',
      alt: 'Communauté',
    },
    {
      src: 'https://res.cloudinary.com/dukqurtfw/image/upload/v1780971152/img1_zjxkqf.jpg',
      alt: 'Événement',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Effet ripple pour le bouton vidéo
  const rippleVariants = {
    animate: {
      scale: [1, 1.4, 1.8],
      opacity: [0.5, 0.2, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative bg-gradient-to-br from-[#f8fafc] via-white to-[#f8fafc] py-20 lg:py-28 overflow-hidden">
      {/* Cercles décoratifs */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-[#980d0e]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#980d0e]/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* COLONNE GAUCHE - Texte et Vidéo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block text-[#980d0e] font-semibold uppercase tracking-wider text-sm mb-4"
            >
              Médias
            </motion.span>

            {/* Titre */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a1525] mb-6 leading-tight"
            >
              Revivez les moments forts de notre{' '}
              <span className="text-[#980d0e]">communauté</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 text-lg leading-relaxed mb-4 max-w-xl mx-auto lg:mx-0"
            >
              Découvrez les temps de louange, les cultes, les conférences, les
              moments de communion fraternelle et les événements qui marquent la
              vie de notre église.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Chaque rassemblement est une occasion de rencontrer Dieu, grandir
              dans la foi et vivre l&apos;Évangile avec authenticité.
            </motion.p>

            {/* Boutons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/medias/photos"
                className="inline-flex items-center justify-center bg-[#980d0e] text-white px-7 py-3.5 rounded-full font-semibold hover:bg-[#7a0b0c] transition-all duration-300 hover:shadow-lg hover:shadow-[#980d0e]/25"
              >
                Voir toutes les photos
              </Link>

              {/* Bouton Vidéo */}
              <button
                onClick={() => setIsVideoOpen(true)}
                className="relative group cursor-pointer inline-flex items-center justify-center gap-3 border-2 border-[#980d0e] text-[#980d0e] px-7 py-3.5 rounded-full font-semibold hover:bg-[#980d0e] hover:text-white transition-all duration-300"
                aria-label="Lire la vidéo"
              >
                <span className="relative flex items-center justify-center w-7 h-7 rounded-full bg-[#980d0e] group-hover:bg-white transition-colors duration-300">
                  <Play className="w-3.5 h-3.5 text-white group-hover:text-[#980d0e] transition-colors duration-300 ml-0.5" fill="currentColor" />
                </span>
                Regarder la vidéo
              </button>
            </motion.div>
          </motion.div>

          {/* COLONNE DROITE - Galerie d'images */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Carrousel principal */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
              <motion.div
                key={currentSlide}
                className="relative w-full h-full"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={galleryImages[currentSlide].src}
                  alt={galleryImages[currentSlide].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={currentSlide === 0}
                />
              </motion.div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              {/* Compteur */}
              <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium">
                {currentSlide + 1} / {galleryImages.length}
              </div>
            </div>

            {/* Flèches navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-[#980d0e] backdrop-blur-sm text-[#0a1525] hover:text-white w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl z-10"
              aria-label="Image précédente"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-[#980d0e] backdrop-blur-sm text-[#0a1525] hover:text-white w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl z-10"
              aria-label="Image suivante"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Indicateurs */}
            <div className="flex justify-center gap-1.5 mt-5">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'w-7 bg-[#980d0e]'
                      : 'w-1.5 bg-[#980d0e]/20 hover:bg-[#980d0e]/40'
                  }`}
                  aria-label={`Aller à l'image ${index + 1}`}
                />
              ))}
            </div>

            {/* Miniatures */}
            <div className="grid grid-cols-5 gap-3 mt-4">
              {galleryImages.map((img, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`relative aspect-square rounded-xl overflow-hidden transition-all duration-300 ${
                    index === currentSlide
                      ? 'ring-2 ring-[#980d0e] ring-offset-2 scale-105'
                      : 'hover:scale-105 opacity-70 hover:opacity-100'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </motion.button>
              ))}
            </div>

            {/* Cercle décoratif */}
            <div className="absolute hidden lg:block -z-10 w-36 h-36 border-4 border-[#980d0e]/10 rounded-full -right-10 -bottom-10" />
          </motion.div>
        </div>
      </div>

      {/* MODAL VIDÉO */}
      {isVideoOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-[#980d0e] transition-colors p-2"
              aria-label="Fermer la vidéo"
            >
              <X className="w-8 h-8" />
            </button>
            <iframe
              className="w-full h-full rounded-2xl shadow-2xl"
              src="https://www.youtube.com/embed/woUhAkiIGDQ?autoplay=1&loop=1&controls=1"
              title="Vidéo Le Camp de Jésus-Christ"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}