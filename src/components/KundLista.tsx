type Lead = {
  navn: string;
  orgnr: string;
  eier: string;
  telefon: string;
  epost: string;
  adresse: string;
};

export default function KundLista({ leads }: { leads: Lead[] }) {
  return (
    <div className="overflow-x-auto rounded-xl shadow bg-white">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Namn</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Org.nr</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Ägare</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Telefon</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">E-post</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Adress</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {leads.map((lead) => (
            <tr key={lead.orgnr}>
              <td className="px-4 py-2 whitespace-nowrap font-semibold">{lead.navn}</td>
              <td className="px-4 py-2 whitespace-nowrap">{lead.orgnr}</td>
              <td className="px-4 py-2 whitespace-nowrap">{lead.eier}</td>
              <td className="px-4 py-2 whitespace-nowrap">{lead.telefon}</td>
              <td className="px-4 py-2 whitespace-nowrap">{lead.epost}</td>
              <td className="px-4 py-2 whitespace-nowrap">{lead.adresse}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
