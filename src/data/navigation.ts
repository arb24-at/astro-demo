export type NavItem = {
  label: string;
  href: string;
};

export const mainNavigation: NavItem[] = [
  { label: "Startseite", href: "/" },
  { label: "Unternehmen", href: "/leistungen/unternehmen" },
  { label: "Privatpersonen", href: "/leistungen/privatpersonen" },
  { label: "Reparatur & Installation", href: "/leistungen/reparatur-installation" },
  { label: "Datensicherheit", href: "/datensicherheit-zertifizierungen" }
];

export const legalNavigation: NavItem[] = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutzerklaerung", href: "/datenschutz" }
];
