import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const statusOptions = [
  { key: "ringt", label: "Ringt", icon: "📞", color: "bg-[#CDE4D6] text-[#0f3f2c]", border: "border-[#CDE4D6]" },
  { key: "svarade", label: "Svarade", icon: "✅", color: "bg-[#AEEACF] text-[#004d32]", border: "border-[#AEEACF]" },
  { key: "bokad", label: "Bokad", icon: "📅", color: "bg-[#F2E1A0] text-[#665c00]", border: "border-[#F2E1A0]" }
];

function getLeadStatus(orgnr: string): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(`lead-status-${orgnr}`);
}
function setLeadStatus(orgnr: string, status: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(`lead-status-${orgnr}`, status);
}

export default function KontaktKort({ navn, orgnr, adresse, registreringsdatum, organisasjonsform }) {
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    setStatus(getLeadStatus(orgnr));
  }, [orgnr]);

  const handleStatus = (newStatus: string) => {
    setStatus(newStatus);
    setLeadStatus(orgnr, newStatus);
  };

  return (
    <motion.div
      className={`rounded-3xl bg-white text-[#0f3f2c] p-6 shadow-2xl border-2 hover:scale-105 transition-transform duration-300 ${statusOptions.find(s => s.key === status)?.border || "border-[#0f3f2c]"}`}
      animate={status ? { scale: 1.03 } : { scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <h2 className="text-2xl font-extrabold mb-1 tracking-tight flex items-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-[#0f3f2c]" />
        {navn}
      </h2>
      <div className="text-sm text-gray-700 space-y-1 mb-2">
        <p><strong>Org.nr:</strong> {orgnr}</p>
        <p><strong>Bolagsform:</strong> {organisasjonsform}</p>
        <p><strong>Registreringsdatum:</strong> {registreringsdatum}</p>
        <p><strong>Adress:</strong> {adresse}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {statusOptions.map(opt => (
          <motion.button
            key={opt.key}
            type="button"
            aria-pressed={status === opt.key}
            onClick={() => handleStatus(opt.key)}
            whileTap={{ scale: 0.92 }}
            className={`px-3 py-1 rounded-full text-xs font-semibold border-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FEA559] transition-all duration-200 ${opt.border} ${status === opt.key ? opt.color + " shadow-md ring-2 ring-[#FEA559]" : "bg-white text-gray-500 hover:shadow"}`}
          >
            <span className="mr-1 align-middle">{opt.icon}</span>
            <AnimatePresence>
              {status === opt.key && (
                <motion.span
                  layoutId="active-status"
                  className="inline-block mr-1 align-middle"
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.7, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                  ●
                </motion.span>
              )}
            </AnimatePresence>
            {opt.label}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
