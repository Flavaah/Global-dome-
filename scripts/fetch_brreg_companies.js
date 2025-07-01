// Automatisk hämtning av ENK och AS från Brønnøysundregistrene med paginering
// Spara som Excel-fil (companies.xlsx)

const https = require('https');
const xlsx = require('xlsx');

const SIZE = 1000; // max per sida
const MAX_PAGES = 10; // hämta upp till 10 000 företag (kan ökas vid behov)

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });
}

(async () => {
  try {
    let all = [];
    for (let page = 0; page < MAX_PAGES; page++) {
      const url = `https://data.brreg.no/enhetsregisteret/api/enheter?organisasjonsform=ENK,AS&size=${SIZE}&page=${page}`;
      console.log('Hämtar sida', page + 1);
      const result = await fetchJSON(url);
      const enheter = result._embedded?.enheter || [];
      if (enheter.length === 0) break;
      all = all.concat(enheter);
      if (!result.page || page + 1 >= result.page.totalPages) break;
    }
    const companies = all.map((c) => ({
      navn: c.navn,
      orgnr: c.organisasjonsnummer,
      organisasjonsform: c.organisasjonsform.kode,
      registreringsdatum: c.registreringsdatoEnhetsregisteret,
      adress: c.forretningsadresse ? c.forretningsadresse.adresse.join(', ') : '',
      postnummer: c.forretningsadresse ? c.forretningsadresse.postnummer : '',
      poststed: c.forretningsadresse ? c.forretningsadresse.poststed : ''
    }));
    const ws = xlsx.utils.json_to_sheet(companies);
    const wb = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Företag');
    xlsx.writeFile(wb, 'companies.xlsx');
    console.log('Klar! Sparat', companies.length, 'företag i companies.xlsx');
  } catch (err) {
    console.error('Fel vid hämtning:', err);
  }
})();
