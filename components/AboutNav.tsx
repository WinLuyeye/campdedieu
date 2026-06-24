// components/AboutNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "A propos", href: "/qui-sommes-nous" },
  { name: "Vision & Mission", href: "/qui-sommes-nous#vision" },
  { name: "Notre histoire", href: "/qui-sommes-nous#histoire" },
  { name: "Le Staff", href: "/qui-sommes-nous#staff" },
  { name: "Carrière", href: "/qui-sommes-nous#carriere" },
  { name: "Contact", href: "/qui-sommes-nous#contact" },
];

export default function AboutNav() {
  const pathname = usePathname();

  return (
    <nav className="bg-[#08367a] py-4 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <ul className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm md:text-base">
          {navItems.map((item) => {
            const isActive = pathname === item.href || 
              (item.href.includes('#') && pathname === '/qui-sommes-nous');
            
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`text-white hover:text-[#cf9001] transition-colors duration-300 font-medium ${
                    isActive ? 'text-[#cf9001] border-b-2 border-[#cf9001] pb-1' : ''
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}