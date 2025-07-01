export type Lead = {
  navn: string;
  orgnr: string;
  eier: string;
  telefon: string;
  epost: string;
  adresse: string;
  status?: string;
};

declare module "../../data/live-leads.json" {
  const value: Lead[];
  export default value;
}
