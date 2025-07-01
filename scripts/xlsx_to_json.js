// Konvertera companies.xlsx till companies.json för CRM-systemet
const xlsx = require('xlsx');
const fs = require('fs');
const wb = xlsx.readFile('companies.xlsx');
const ws = wb.Sheets[wb.SheetNames[0]];
const companies = xlsx.utils.sheet_to_json(ws);
fs.writeFileSync('data/companies.json', JSON.stringify(companies, null, 2));
console.log('Klar! companies.json skapad.');
