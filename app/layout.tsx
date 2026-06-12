import "./globals.css";
import { Metadata } from "next";
import { Mulish } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Le Camp de Jésus-Christ | Communauté Christo-centrique",
    template: "%s | Le Camp de Jésus-Christ",
  },
  description:
    "Une communauté Christo-centrique ayant pour vision première de propager l'Évangile du Christ partout dans le monde. « Allez partout dans le monde et faites de toutes les nations des disciples... »",

  keywords: [
    "Église Le Camp de Jésus-Christ",
    "Communauté Christo-centrique",
    "Église évangélique RDC",
    "Église Congo",
    "Prédications chrétiennes",
    "Enseignements bibliques",
    "Évangile du Christ",
    "Matthieu 28:19",
    "Foi chrétienne",
    "Vie d'église",
  ],

  authors: [{ name: "Le Camp de Jésus-Christ" }],
  creator: "Le Camp de Jésus-Christ",

  openGraph: {
    title: "Le Camp de Jésus-Christ | Communauté Christo-centrique",
    description:
      "Rejoignez une communauté passionnée par l'Évangile du Christ. Prédications, enseignements, et vie d'église.",
    url: "https://lecampdejesuschrist.org",
    siteName: "Le Camp de Jésus-Christ",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Le Camp de Jésus-Christ - Communauté Christo-centrique",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Le Camp de Jésus-Christ",
    description:
      "Une communauté Christo-centrique qui propage l'Évangile du Christ partout dans le monde.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "votre-code-verification-google",
  },

  alternates: {
    canonical: "https://lecampdejesuschrist.org",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={mulish.variable}>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}