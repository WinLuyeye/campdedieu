"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Contact = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      <Navbar />

      <div
        className="relative flex h-96 items-center justify-center bg-cover bg-center md:h-[500px]"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dukqurtfw/image/upload/v1781048578/WhatsApp_Image_2026-06-10_at_00.39.11_vjtzjv.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#0f2a3d]/70" />

        <div className="relative max-w-7xl px-6 md:px-12">
          <h2 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[85px]">
            Contact
          </h2>
        </div>
      </div>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:px-12 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-5 text-black">
          <h2 className="mb-4 text-5xl font-extrabold text-[#1f2937] md:text-6xl lg:text-7xl">
            Contactez-nous
          </h2>

          <hr className="w-40 border-t-2 border-[#cf8e02]" />

          <p className="mt-4 mb-6 max-w-lg text-xl font-medium">
            Vous pouvez nous contacter pour toute demande d'information, de
            partenariat ou de prière. Nous sommes là pour vous aider et vous
            soutenir dans votre cheminement spirituel.
          </p>

          <ul className="space-y-3 text-lg font-medium">
            <li>+243 811 132 784</li>
            <li>campdejesuschrist@gmail.com</li>
            <li>
              Kalembelembe
              <br />
              Lingwala - Kinshasa
            </li>
          </ul>
        </div>

        <form className="flex flex-col gap-4 bg-white p-8">
          <input
            type="text"
            placeholder="Votre nom"
            className="border border-gray-300 p-3 text-[#1f2937] focus:border-[#cf8e02] focus:outline-none"
            required
          />

          <input
            type="email"
            placeholder="Votre email"
            className="border border-gray-300 p-3 text-[#1f2937] focus:border-[#cf8e02] focus:outline-none"
            required
          />

          <input
            type="tel"
            placeholder="Votre numéro de téléphone"
            className="border border-gray-300 p-3 text-[#1f2937] focus:border-[#cf8e02] focus:outline-none"
            required
          />

          <textarea
            rows={5}
            placeholder="Votre message"
            className="border border-gray-300 p-3 text-[#1f2937] focus:border-[#cf8e02] focus:outline-none"
            required
          />

          <button
            type="submit"
            className="cursor-pointer bg-[#980d0e] px-10 py-5 text-sm font-light uppercase text-white transition hover:border hover:border-[#08367a] hover:bg-white hover:text-[#003233]"
          >
            Envoyer
          </button>
        </form>
      </section>

      <section className="h-[400px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.4556641835625!2d15.2741812!3d-4.325179399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3129ac4e4fa5%3A0xa6babea9dabcacd3!2sConcession%20Safricas!5e0!3m2!1sfr!2scd!4v1775236361802!5m2!1sfr!2scd"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <Footer />
    </div>
  );
};

export default Contact;