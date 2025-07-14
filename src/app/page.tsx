import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import TopBar from "../components/TopBar";
import dynamic from "next/dynamic";

const CompanyTable = dynamic(() => import("../components/CompanyTable"), {
  ssr: false,
});
// Data hämtas dynamiskt med fetch
import { auth } from "../lib/auth";


type Company = {
  navn: string;
  orgnr: string;
  organisasjonsform: string;
  registreringsdatum: string;
  adress: string;
  postnummer: string;
  poststed: string;
};

export default function Home() {
  const router = useRouter();
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [form, setForm] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [companiesData, setCompaniesData] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/data/companies.json")
      .then(res => res.json())
      .then(data => {
        setCompaniesData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && !auth.getUser()) {
      router.replace("/login");
    }
  }, [router]);


  // KPI-data
  const kpi = {
    total: companiesData.length,
    enk: companiesData.filter((c) => c.organisasjonsform === "ENK").length,
    as: companiesData.filter((c) => c.organisasjonsform === "AS").length,
  };

  // Filtrera företag
  let filteredCompanies = companiesData.filter((c) =>
    (!date || c.registreringsdatum === date) &&
    (!form || c.organisasjonsform === form) &&
    (!search || c.navn.toLowerCase().includes(search.toLowerCase()) || c.adress.toLowerCase().includes(search.toLowerCase()) || c.poststed.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <main className="p-8 space-y-8 max-w-7xl mx-auto min-h-screen bg-gradient-to-br from-[#0f3f2c] via-[#013820] to-[#143828] text-white">
      <TopBar kpi={kpi} date={date} onDateChange={setDate} />
      <motion.h1
        className="text-5xl font-extrabold mb-10 text-center tracking-tight drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block align-middle mr-2">🏢</span>Säljarens Dashboard
      </motion.h1>
      {loading ? (
        <p className="text-center text-gray-300">Laddar företag...</p>
      ) : (
        <div className="bg-white rounded-xl p-4 shadow">
          {typeof window !== "undefined" && <CompanyTable companies={companiesData} />}
        </div>
      )}
    </main>
  );
}
