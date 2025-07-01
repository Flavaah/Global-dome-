import React from "react";

export default function TopBar({ kpi, date, onDateChange }) {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 p-4 bg-white rounded-2xl shadow">
      <div className="flex gap-6 w-full md:w-auto justify-between">
        <KPI label="Nya leads" value={kpi.leads} accent />
        <KPI label="Samtal" value={kpi.calls} accent={false} />
        <KPI label="Bokningar" value={kpi.bookings} accent={false} />
      </div>
      <input
        type="date"
        className="border rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FEA559]"
        value={date}
        onChange={e => onDateChange(e.target.value)}
      />
    </header>
  );
}

function KPI({ label, value, accent = false }) {
  return (
    <div className={`flex flex-col items-center px-4 py-2 rounded-xl ${accent ? 'bg-[#FEA559]/20 text-[#FEA559]' : 'bg-gray-50 text-gray-700'}`}>
      <span className="text-lg font-bold">{value}</span>
      <span className="text-xs uppercase tracking-wide">{label}</span>
    </div>
  );
}
