export interface BREADCRUMB {
  title: string;
  href: string;
}

export const BREADCRUMBS: { [key: string]: Array<BREADCRUMB> } = {
  "/dashboard": [
    { title: "Tela inicial", href: "/dashboard" },
  ],
  "/teachers": [
    { title: "Professores", href: "/teachers" },
  ],
  "/teachers/new": [
    { title: "Professores", href: "/teachers" },
    { title: "Cadastro do Professor", href: "/teachers/new" },
  ],
};
