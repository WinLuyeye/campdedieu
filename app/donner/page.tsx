// app/donner/page.tsx (ou app/donation/page.tsx)
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import DonationForm from "@/components/DonationForm";
import BankAccordion from "@/components/BankAccordion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export default function DonationPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-20">
            {/* Section 4: Hero/Bannière finale */}
      <section className="relative py-20 lg:py-28 bg-[#08367a] overflow-hidden">
        {/* Formes décoratives */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-repeat"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white space-y-6">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Votre générosité change des vies
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-gray-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              À Église Le Camp de Jésus-Christ, chaque offrande est une semence d&lsquo;impact. Grâce à vous, des âmes
              entendent l&lsquo;Évangile, des vies sont restaurées, et l&lsquo;Église grandit. Votre
              geste compte.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="#ensavoirplus"
                className="inline-block bg-[#980d0e] hover:bg-[#7a0a0b] text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300"
              >
                EN SAVOIR PLUS
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

            {/* Section 3: Méthodes de don (Cartes) */}
      <section id="ensavoirplus" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Carte 1 - Paiement en ligne */}
            <DonationCard
              title="Paiement en ligne"
              description="Donnez facilement depuis votre téléphone ou ordinateur, en toute sécurité."
              imageUrl="https://ce.church/wp-content/uploads/2025/06/jeune-femme-faisant-achats-ligne_23-2149187288.avif"
              buttonText="EN SAVOIR PLUS"
              buttonLink="https://vpos.flexpaie.com/pay/advanced/UEhJTEE="
              delay={0.2}
            />

            {/* Carte 2 - Virement bancaire */}
            <DonationCard
              title="Virement bancaire"
              description="Transférez votre don vers nos comptes officiels et recevez un reçu."
              imageUrl="https://ce.church/wp-content/uploads/2025/06/705DEEC5-D73A-42C7-B95B-4A8E7B818564.jpeg"
              buttonText="Voir nos coordonnées"
              buttonLink="#Banque"
              delay={0.6}
            />

            {/* Carte 3 - Don en nature */}
            <DonationCard
              title="Don en nature"
              description="Offrez des vivres, du matériel ou tout autre bien utile à la mission."
              imageUrl="https://ce.church/wp-content/uploads/2025/10/donation-en-nature.png"
              buttonText="Donner en nature"
              buttonLink="#Nature"
              delay={0.9}
            />
          </div>
        </div>
      </section>

      {/* Section 1: Don en Nature (Formulaire) */}
      <section id="Nature" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Colonne gauche - Texte et image */}
            <motion.div
              className="flex-1 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
                Votre donation <span className="text-[#980d0e]">en nature</span>
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Vos offrandes en nature, qu&lsquo;il s&lsquo;agisse de vivres, de produits agricoles,
                  d&lsquo;équipements, d&lsquo;instruments ou de matériel de service, participent
                  directement à l&lsquo;œuvre de Dieu à travers l&lsquo;Église Le Camp de Jésus-Christ.
                </p>
                <p>
                  Chaque offrande est reçue avec reconnaissance, utilisée avec sagesse et
                  gérée avec transparence.
                </p>
              </div>
              <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://ce.church/wp-content/uploads/2025/10/hh.png"
                  alt="Donation en nature"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Colonne droite - Formulaire */}
            <motion.div
              className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl p-6 md:p-8 relative overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              variants={fadeInRight}
            >
              {/* Forme décorative */}
              <div className="absolute bottom-0 left-0 w-full h-2 bg-[#980d0e]"></div>
              <DonationForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Coordonnées Bancaires */}
      <section id="Banque" className="py-16 lg:py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Colonne gauche - Images */}
            <motion.div
              className="flex-1 relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              variants={fadeInLeft}
            >
              <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://res.cloudinary.com/dukqurtfw/image/upload/v1781183667/vb_djzvm0.jpg"
                  alt="Virement bancaire"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-32 rounded-xl overflow-hidden shadow-lg border-4 border-white">
                <Image
                  src="https://res.cloudinary.com/dukqurtfw/image/upload/v1781183668/paiement-en-ligne_l35aw2.webp"
                  alt="Paiement en ligne"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Colonne droite - Accordion bancaire */}
            <motion.div
              className="flex-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              variants={fadeInRight}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center lg:text-left">
                Nos <span className="text-[#980d0e]">Coordonnées Bancaires</span>
              </h2>
              <BankAccordion />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Composant Carte de Don
function DonationCard({
  title,
  description,
  imageUrl,
  buttonText,
  buttonLink,
  delay,
}: {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  buttonLink: string;
  delay: number;
}) {
  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
    >
      <Link href={buttonLink} className="block overflow-hidden group">
        <div className="relative w-full h-56">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>
      <div className="p-6">
        <Link href={buttonLink}>
          <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-[#980d0e] transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-6">{description}</p>
        <Link
          href={buttonLink}
          className="inline-block w-full text-center bg-gray-100 hover:bg-[#980d0e] text-gray-700 hover:text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300"
        >
          {buttonText}
        </Link>
      </div>
    </motion.div>
  );
}