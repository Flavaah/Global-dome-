import KundLista from "@/components/KundLista";
import leads from "../../data/live-leads.json";

export default function Dashboard() {
  // Exempel på statistik, kan anpassas
  const antalKunder = leads.length;
  const nyaLeads = leads.filter(lead => lead.ny === true).length;

  return (
    <main className="min-h-screen bg-[#f5f7fa] py-10 px-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <div className="text-2xl font-bold">{antalKunder}</div>
          <div className="text-gray-500">Totalt antal kunder</div>
        </div>
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <div className="text-2xl font-bold">{nyaLeads}</div>
          <div className="text-gray-500">Nya leads</div>
        </div>
        {/* Lägg till fler statistikrutor här */}
      </div>
      <section>
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Kundlista</h2>
        <KundLista leads={leads} />
      </section>
    </main>
  );
}
