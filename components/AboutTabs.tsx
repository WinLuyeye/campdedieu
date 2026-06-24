// components/AboutTabs.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

interface AboutTabsProps {
  tabs: Tab[];
}

export default function AboutTabs({ tabs }: AboutTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeContent = tabs.find(tab => tab.id === activeTab)?.content;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation par onglets */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2 px-4 md:px-6 py-3 rounded-full font-medium transition-all duration-300
                ${activeTab === tab.id
                  ? 'bg-[#08367a] text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 hover:scale-105 shadow-md'
                }
              `}
            >
              <span className="text-lg">{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden text-sm">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Contenu avec animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            {activeContent}
          </motion.div>
        </AnimatePresence>

        {/* Indicateur de progression */}
        <div className="flex justify-center gap-2 mt-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                h-2 rounded-full transition-all duration-300
                ${activeTab === tab.id
                  ? 'w-8 bg-[#980d0e]'
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
                }
              `}
              aria-label={`Aller à ${tab.label}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}