import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 flex flex-col items-center">
          <h1 className="text-4xl font-extrabold text-blue-700 mb-2 tracking-tight">Välkommen till Global Dome CRM</h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl">
            Ett modernt, svenskanpassat CRM-system inspirerat av de bästa öppna lösningarna. Hantera kunder, leads och affärer med enkelhet och stil.
          </p>
        </header>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-blue-600 mb-2">Kundöversikt</h2>
            <p className="text-gray-500 mb-4 text-center">Få en snabb överblick över dina viktigaste kunder och deras status.</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Visa kunder</button>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-blue-600 mb-2">Leads & Affärer</h2>
            <p className="text-gray-500 mb-4 text-center">Hantera och följ upp dina leads och affärsmöjligheter på ett smidigt sätt.</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Visa leads</button>
          </div>
        </section>
        <footer className="mt-16 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Global Dome CRM. Byggd med Next.js & TailwindCSS.
        </footer>
      </div>
    </main>
  );
}
