// components/AboutTabContents.tsx
"use client";

import { FaChurch, FaEye, FaHistory, FaUsers, FaBriefcase, FaEnvelope } from "react-icons/fa";
import AboutSection from "./AboutSection";
import VisionMissionSection from "./VisionMissionSection";
import HistorySection from "./HistorySection";
import StaffSection from "./StaffSection";
import CareerSection from "./CareerSection";
import ContactSection from "./ContactSection";

export const tabContents = [
  {
    id: "a-propos",
    label: "À propos",
    icon: <FaChurch />,
    content: <AboutSection />,
  },
  {
    id: "vision",
    label: "Vision & Mission",
    icon: <FaEye />,
    content: <VisionMissionSection />,
  },
  {
    id: "histoire",
    label: "Notre histoire",
    icon: <FaHistory />,
    content: <HistorySection />,
  },
  {
    id: "staff",
    label: "Le Staff",
    icon: <FaUsers />,
    content: <StaffSection />,
  },
  {
    id: "carriere",
    label: "Carrière",
    icon: <FaBriefcase />,
    content: <CareerSection />,
  },
  {
    id: "contact",
    label: "Contact",
    icon: <FaEnvelope />,
    content: <ContactSection />,
  },
];