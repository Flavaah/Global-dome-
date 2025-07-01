// Script för att räkna antal företag i companies.xlsx
const xlsx = require('xlsx');
const wb = xlsx.readFile('companies.xlsx');
const ws = wb.Sheets[wb.SheetNames[0]];
const companies = xlsx.utils.sheet_to_json(ws);
console.log('Antal företag:', companies.length);
