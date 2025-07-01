import React, { useMemo, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Select, Button, Input } from "@chakra-ui/react";

const statusOptions = [
  { key: "", label: "Ingen" },
  { key: "ringt", label: "Ringt" },
  { key: "svarat", label: "Svarat" },
  { key: "kopplat", label: "Kopplat vidare" },
];

function getStatus(orgnr) {
  if (typeof window === "undefined") return "";
  return localStorage.getItem(`company-status-${orgnr}`) || "";
}
function setStatus(orgnr, status) {
  if (typeof window === "undefined") return;
  localStorage.setItem(`company-status-${orgnr}`, status);
}

export default function CompanyTable({ companies }) {
  const [statusFilter, setStatusFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return companies.filter((c) => {
      const status = getStatus(c.orgnr);
      return (
        (!statusFilter || status === statusFilter) &&
        (!dateFilter || c.registreringsdatum === dateFilter) &&
        (!search || c.navn.toLowerCase().includes(search.toLowerCase()) || c.orgnr.includes(search))
      );
    });
  }, [companies, statusFilter, dateFilter, search]);

  return (
    <div>
      <div className="flex flex-wrap gap-4 mb-4">
        <Select placeholder="Filtrera på status" value={statusFilter} onChange={e => setStatusFilter(e.target.value)} width="200px">
          {statusOptions.map(opt => (
            <option key={opt.key} value={opt.key}>{opt.label}</option>
          ))}
        </Select>
        <Input type="date" value={dateFilter} onChange={e => setDateFilter(e.target.value)} width="200px" placeholder="Datum" />
        <Input placeholder="Sök namn/orgnr" value={search} onChange={e => setSearch(e.target.value)} width="200px" />
      </div>
      <Table variant="striped" colorScheme="teal" size="sm">
        <Thead>
          <Tr>
            <Th>Org.nr</Th>
            <Th>Namn</Th>
            <Th>Bolagsform</Th>
            <Th>Registreringsdatum</Th>
            <Th>Adress</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filtered.slice(0, 100).map((c) => (
            <Tr key={c.orgnr}>
              <Td>{c.orgnr}</Td>
              <Td>{c.navn}</Td>
              <Td>{c.organisasjonsform}</Td>
              <Td>{c.registreringsdatum}</Td>
              <Td>{c.adress}, {c.postnummer} {c.poststed}</Td>
              <Td>
                <Select size="sm" value={getStatus(c.orgnr)} onChange={e => { setStatus(c.orgnr, e.target.value); setStatusFilter(""); }}>
                  {statusOptions.map(opt => (
                    <option key={opt.key} value={opt.key}>{opt.label}</option>
                  ))}
                </Select>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <div className="text-xs text-gray-500 mt-2">Visar max 100 rader. Använd filtrering för att hitta rätt företag.</div>
    </div>
  );
}
