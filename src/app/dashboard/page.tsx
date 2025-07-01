import StatistikRuta from "../components/StatistikRuta";
import KundLista from "../components/KundLista";
import leads from "../../data/live-leads.json";

export default function Dashboard() {
  const antalKunder = leads.length;
  const nyaLeads = leads.filter(lead => lead.ny === true).length;

  return (
    <main className="max-w-[997px] min-h-[812px] mx-auto my-10 bg-white rounded-2xl shadow p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Welcome Back, Jenny Wilson 👋</h1>
          <p className="text-sm text-gray-500">Monthly Premium User</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatistikRuta title="Totalt antal kunder" value={antalKunder} />
        <StatistikRuta title="Nya leads" value={nyaLeads} />
        {/* Lägg till fler statistikrutor här */}
      </div>
      <section>
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Kundlista</h2>
        <KundLista leads={leads} />
      </section>
    </main>
  );
}
