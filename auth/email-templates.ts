// E-postmallar för Lucia Auth
export const emailTemplates = {
  verification: (link: string) => `
    Hej!
    Bekräfta din e-postadress för Global Dome genom att klicka på länken:
    ${link}
    
    Med vänlig hälsning,
    Global Dome-teamet
    no-reply@globaldome.com
  `,
  resetPassword: (link: string) => `
    Hej!
    Du har begärt att återställa ditt lösenord för Global Dome.
    Klicka på länken för att välja ett nytt lösenord:
    ${link}
    
    Om du inte begärt detta kan du ignorera detta meddelande.
    no-reply@globaldome.com
  `
};
