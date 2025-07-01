// Komplett script: Hämta ägarens telefonnummer via Eniro med AI/fuzzy matchning
// Läser in företag från companies.xlsx och sparar resultat till companies_with_phones.xlsx

const puppeteer = require('puppeteer');
const xlsx = require('xlsx');
const stringSimilarity = require('string-similarity');
const fs = require('fs');

async function findPhoneNumber(name, address) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://www.eniro.se/personer', { waitUntil: 'networkidle2' });

  // Sök på namn + ort
  await page.type('input[name="search_word"]', name);
  await page.type('input[name="geo_area"]', address.split(',')[1] || '');
  await page.click('button[type="submit"]');
  await page.waitForSelector('.search-results', { timeout: 10000 }).catch(() => {});

  // Hämta alla träffar (namn, adress, telefon)
  const results = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.search-results .search-hit')).map(hit => ({
      name: hit.querySelector('.name')?.innerText,
      address: hit.querySelector('.address')?.innerText,
      phone: hit.querySelector('.phone-number')?.innerText
    }));
  });

  // AI/fuzzy matcha adressen
  let bestMatch = null;
  let bestScore = 0;
  for (const r of results) {
    const score = stringSimilarity.compareTwoStrings(address, r.address || '');
    if (score > bestScore) {
      bestScore = score;
      bestMatch = r;
    }
  }

  await browser.close();
  return bestMatch && bestScore > 0.7 ? bestMatch.phone : null; // threshold kan justeras
}

// Läs in företag från Excel
const wb = xlsx.readFile('companies.xlsx');
const ws = wb.Sheets[wb.SheetNames[0]];
const companies = xlsx.utils.sheet_to_json(ws);

(async () => {
  for (let i = 0; i < companies.length; i++) {
    const c = companies[i];
    if (!c.navn || !c.adresse) continue;
    console.log(`Söker: ${c.navn} (${c.adresse})`);
    const phone = await findPhoneNumber(c.eier || c.navn, c.adresse);
    companies[i].telefon = phone || '';
    // Spara efter varje för att inte tappa data
    const newWs = xlsx.utils.json_to_sheet(companies);
    const newWb = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(newWb, newWs, 'Företag');
    xlsx.writeFile(newWb, 'companies_with_phones.xlsx');
  }
  console.log('Klar! Resultat sparat i companies_with_phones.xlsx');
})();
