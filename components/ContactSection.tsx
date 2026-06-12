"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(
          "Votre message a été envoyé avec succès. Nous vous répondrons rapidement."
        );

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error(error);

      alert(
        "Une erreur est survenue. Veuillez réessayer plus tard."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6"
    >
      {/* MAP */}
      <div className="absolute inset-0">
        <iframe
          src="https://www.google.com/maps/embed?pb="
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 w-full h-full"
        />

        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2"
        >

          {/* LEFT */}
          <div className="bg-[#08367a] text-white p-10 lg:p-14 flex flex-col justify-center">

            <span className="uppercase tracking-wider text-white/70 text-sm font-semibold">
              Contact
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Besoin de prière ou d&lsquo;informations ?
            </h2>

            <p className="text-white/80 leading-relaxed mb-8">
              Notre équipe est disponible pour répondre à vos
              questions, vous accompagner dans la prière ou vous
              aider à découvrir davantage l&lsquo;Église Le Camp de
              Jésus-Christ.
            </p>

            <div className="space-y-5">

              <div>
                <p className="font-semibold">Téléphone</p>
                <p className="text-white/80">
                  +243 811 132 784
                </p>
              </div>

              <div>
                <p className="font-semibold">Email</p>
                <p className="text-white/80">
                  campdejesuschrist@gmail.com
                </p>
              </div>

              <div>
                <p className="font-semibold">Adresse</p>
                <p className="text-white/80">
                  Kalembelembe
                  <br />
                  Lingwala - Kinshasa
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="p-10 lg:p-14">

            <h3 className="text-2xl font-bold text-[#0a1525] mb-8">
              Envoyez-nous un message
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                disabled={isLoading}
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#980d0e]"
              />

              <input
                type="email"
                name="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading}
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#980d0e]"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Votre téléphone"
                value={formData.phone}
                onChange={handleChange}
                disabled={isLoading}
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#980d0e]"
              />

              <textarea
                name="message"
                rows={5}
                placeholder="Votre message"
                value={formData.message}
                onChange={handleChange}
                disabled={isLoading}
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#980d0e]"
              />

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#980d0e] text-white py-4 rounded-xl font-semibold hover:opacity-90 transition"
              >
                {isLoading
                  ? "Envoi en cours..."
                  : "Envoyer le message"}
              </motion.button>

            </form>
          </div>

        </motion.div>

      </div>
    </section>
  );
}