# Global Dome CRM – Manual & Smarta Funktioner

## Innehåll
1. **Inloggning & Roller**
2. **Dashboard & KPI**
3. **Lead-hantering**
4. **Status & Uppföljning**
5. **KPI-uppdatering**
6. **Sök & Filtrering**
7. **Design & Interaktion**
8. **Tips för säljare**

---

## 1. Inloggning & Roller
- Logga in med e-post och lösenord (test: `test@globaldome.com` / `123456`).
- Roller: Säljare, Admin (adminpanel kan utökas).
- Sessionshantering med Lucia Auth och localStorage.

## 2. Dashboard & KPI
- TopBar visar: Nya leads idag, Samtal, Bokningar, Datumväljare.
- KPI uppdateras automatiskt när du markerar status på leads.
- KPI sparas per användare i localStorage.

## 3. Lead-hantering
- Leads hämtas dagligen från Brønnøysund och filtreras automatiskt.
- Leads visas i responsiv grid (1–3 kolumner).
- Varje lead visas som ett KontaktKort med namn, orgnr, ägare, telefon, e-post, adress.

## 4. Status & Uppföljning
- Klicka på statusknappar (Ringt, Svarade, Bokad) för att markera varje lead.
- Status sparas i localStorage och visas även efter sidladdning.
- Färg och micro-animation visar aktiv status.

## 5. KPI-uppdatering
- När du markerar "Ringt", "Svarade" eller "Bokad" ökar motsvarande KPI för användaren.
- KPI visas i TopBar och kan användas för säljstatistik.

## 6. Sök & Filtrering
- (Utbyggbart) Lägg till sökfält för att filtrera leads på namn, ort, status etc.
- (Utbyggbart) Filtrera på datum via datumväljaren.

## 7. Design & Interaktion
- Modern, responsiv design med TailwindCSS och Framer Motion.
- Gradientbakgrund, mjuka färger, interaktiva kort och statusknappar.
- Fallback: "Inga bolag att visa" med ikon om listan är tom.

## 8. Tips för säljare
- Markera status direkt efter samtal för att hålla KPI uppdaterad.
- Använd datumväljaren för att se leads från olika dagar (om data finns).
- Klicka på e-post eller telefon för att snabbt kontakta lead.

---

## Smarta Funktioner (exempel)
- **Automatisk status-sparning:** Status för varje lead sparas per användare i localStorage.
- **KPI-uppdatering:** KPI ökar automatiskt när du markerar status.
- **Responsiv grid:** Fungerar på mobil, surfplatta och desktop.
- **Animerade interaktioner:** Framer Motion används för micro-interactions.
- **Fallback/empty state:** Visar ikon och text om inga leads finns.
- **Testanvändare:** Snabb test med `test@globaldome.com` / `123456`.
- **Utbyggbarhet:** Lätt att lägga till sök, filter, adminpanel, export m.m.

---

## Vidareutveckling
- Koppla status och KPI till backend/databas för statistik per säljare.
- Lägg till notifikationer, påminnelser och e-postutskick.
- Bygg ut adminpanel för användarhantering och rapporter.
- Lägg till export till Excel/CSV.

---

**Behöver du fler funktioner eller vill du anpassa systemet? Säg bara till!**
