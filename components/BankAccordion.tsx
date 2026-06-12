// components/BankAccordion.tsx
"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface BankAccount {
  name: string;
  details: {
    bankCode?: string;
    agencyCode?: string;
    iban?: string;
    accountNumber?: string;
    swift?: string;
    accountName?: string;
  }[];
}

const bankAccounts: BankAccount[] = [
  {
    name: "Equity Bank Congo",
    details: [
      {
        bankCode: "XXXX",
        agencyCode: "XXXXX",
        iban: "XXXX XXXX XXXX XXXX XXXX USD",
        accountName: "Église Le Camp de Jésus-Christ",
      },
      {
        iban: "XXXX XXXX XXXX XXXX XXXX CDF",
        accountName: "Église Le Camp de Jésus-Christ",
      },
      {
        iban: "XXXX XXXX XXXX XXXX XXXX EURO",
        accountName: "Église Le Camp de Jésus-Christ",
      },
    ],
  },
  {
    name: "FBN Bank RDC",
    details: [
      {
        accountNumber: "XXXX XXXX XXXX XXXX XXXX",
        iban: "XXXX",
        swift: "XXXXX",
        accountName: "USD Account",
      },
      {
        accountNumber: "XXXX XXXX XXXX XXXX XXXX",
        iban: "XXXX",
        swift: "XXXXX",
        accountName: "CDF Account",
      },
    ],
  },
];

export default function BankAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {bankAccounts.map((bank, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          <button
            onClick={() => toggleAccordion(idx)}
            className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <span className="font-semibold text-lg text-gray-800">
              {bank.name}
            </span>
            {openIndex === idx ? (
              <ChevronUp className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600" />
            )}
          </button>

          {openIndex === idx && (
            <div className="p-6 bg-white border-t border-gray-100">
              {bank.details.map((detail, detailIdx) => (
                <div key={detailIdx} className="space-y-2 text-sm">
                  {detail.bankCode && (
                    <p>
                      <strong>CODE BANQUE :</strong> {detail.bankCode}
                    </p>
                  )}
                  {detail.agencyCode && (
                    <p>
                      <strong>CODE AGENCE :</strong> {detail.agencyCode}
                    </p>
                  )}
                  {detail.iban && (
                    <p>
                      <strong>💳 IBAN :</strong>
                      <br />
                      <span className="font-mono text-gray-700">
                        {detail.iban}
                      </span>
                    </p>
                  )}
                  {detail.accountNumber && (
                    <p>
                      <strong>💳 NUMÉRO DE COMPTE :</strong>
                      <br />
                      <span className="font-mono text-gray-700">
                        {detail.accountNumber}
                      </span>
                    </p>
                  )}
                  {detail.swift && (
                    <p>
                      <strong>🌐 SWIFT :</strong> {detail.swift}
                    </p>
                  )}
                  {detail.accountName && (
                    <p>
                      <strong>🏛️ INTITULÉ :</strong>
                      <br />
                      <span className="text-gray-700">{detail.accountName}</span>
                    </p>
                  )}
                  {detailIdx < bank.details.length - 1 && (
                    <hr className="my-4 border-gray-200" />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}