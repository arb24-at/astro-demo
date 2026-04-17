export type ContactConfig = {
  phoneDisplay: string;
  phoneHref: string;
  email: string;
  street: string;
  postalCity: string;
};

export type SiteConfig = {
  name: string;
  shortName: string;
  tagline: string;
  defaultTitleSuffix: string;
  defaultDescription: string;
  serviceDistricts: string[];
  contact: ContactConfig;
};

export const siteConfig: SiteConfig = {
  name: "BerlinTech Support",
  shortName: "BerlinTech Support",
  tagline: "Vor-Ort-Service fuer Privat & Business",
  defaultTitleSuffix: "BerlinTech Support",
  defaultDescription:
    "Professioneller IT-Service in Berlin fuer Privatpersonen und Unternehmen: Vor-Ort-Support, Microsoft-Umgebungen, Systemoptimierung, Software-Installation und DSGVO-konforme Datensicherheit.",
  serviceDistricts: [
    "Mitte",
    "Pankow",
    "Charlottenburg",
    "Kreuzberg",
    "Neukoelln",
    "Friedrichshain",
    "Wilmersdorf",
    "Prenzlauer Berg"
  ],
  contact: {
    phoneDisplay: "+49 (0)30 123 45 67",
    phoneHref: "tel:+49301234567",
    email: "kontakt@berlintech-support.de",
    street: "Musterstrasse 10",
    postalCity: "10115 Berlin"
  }
};
