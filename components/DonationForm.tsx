// components/DonationForm.tsx
"use client";

import { useState } from "react";

interface FormData {
  yourName: string;
  yourPhone: string;
  yourEmail: string;
  yourPays: string;
  donationType: string;
  donationDescription: string;
  pickupOption: string;
}

export default function DonationForm() {
  const [formData, setFormData] = useState<FormData>({
    yourName: "",
    yourPhone: "",
    yourEmail: "",
    yourPays: "",
    donationType: "",
    donationDescription: "",
    pickupOption: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Ici, vous pouvez intégrer votre logique d'envoi (API route, service tier, etc.)
    try {
      // Simulation d'envoi - À remplacer par votre endpoint réel
      // const response = await fetch('/api/donation', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus({
        type: "success",
        message: "Merci ! Votre offrande a été enregistrée avec succès.",
      });
      setFormData({
        yourName: "",
        yourPhone: "",
        yourEmail: "",
        yourPays: "",
        donationType: "",
        donationDescription: "",
        pickupOption: "",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Une erreur est survenue. Veuillez réessayer.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <input
          type="text"
          name="yourName"
          value={formData.yourName}
          onChange={handleChange}
          placeholder="Votre nom complet"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#980d0e] focus:ring-2 focus:ring-[#980d0e]/20 outline-none transition"
        />
      </div>

      <div>
        <input
          type="tel"
          name="yourPhone"
          value={formData.yourPhone}
          onChange={handleChange}
          placeholder="Téléphone WhatsApp"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#980d0e] focus:ring-2 focus:ring-[#980d0e]/20 outline-none transition"
        />
      </div>

      <div>
        <input
          type="email"
          name="yourEmail"
          value={formData.yourEmail}
          onChange={handleChange}
          placeholder="Adresse e-mail"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#980d0e] focus:ring-2 focus:ring-[#980d0e]/20 outline-none transition"
        />
      </div>

      <div>
        <input
          type="text"
          name="yourPays"
          value={formData.yourPays}
          onChange={handleChange}
          placeholder="Votre Pays"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#980d0e] focus:ring-2 focus:ring-[#980d0e]/20 outline-none transition"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          📦 Type de don
        </label>
        <select
          name="donationType"
          value={formData.donationType}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#980d0e] focus:ring-2 focus:ring-[#980d0e]/20 outline-none transition bg-white"
        >
          <option value="">— Veuillez choisir une option —</option>
          <option value="Produits agricoles">Produits agricoles</option>
          <option value="Vivres">Vivres</option>
          <option value="Matériel">Matériel</option>
          <option value="Véhicule">Véhicule</option>
          <option value="Autres">Autres</option>
        </select>
      </div>

      <div>
        <textarea
          name="donationDescription"
          value={formData.donationDescription}
          onChange={handleChange}
          placeholder="Décrivez votre offrande (ex: 2 sacs de maïs, 1 machine à coudre, etc.)"
          required
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#980d0e] focus:ring-2 focus:ring-[#980d0e]/20 outline-none transition resize-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          🚚 Souhaitez-vous qu'on vienne le récupérer ?
        </label>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="pickupOption"
              value="Oui, venez le récupérer"
              checked={formData.pickupOption === "Oui, venez le récupérer"}
              onChange={handleChange}
              className="w-4 h-4 text-[#980d0e] focus:ring-[#980d0e]"
            />
            <span>Oui, venez le récupérer</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="pickupOption"
              value="Non, je déposerai moi-même"
              checked={formData.pickupOption === "Non, je déposerai moi-même"}
              onChange={handleChange}
              className="w-4 h-4 text-[#980d0e] focus:ring-[#980d0e]"
            />
            <span>Non, je déposerai moi-même</span>
          </label>
        </div>
      </div>

      {submitStatus.message && (
        <div
          className={`p-3 rounded-lg text-sm ${
            submitStatus.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#980d0e] hover:bg-[#7a0a0b] text-white font-semibold py-3 rounded-lg transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Envoi en cours..." : "Envoyer mon offrande"}
      </button>
    </form>
  );
}