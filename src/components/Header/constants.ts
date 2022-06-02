export interface BREADCRUMB {
  title: string;
  href: string;
}

export const BREADCRUMBS: { [key: string]: Array<BREADCRUMB> } = {
  "/teachers/new": [
    { title: "Professores", href: "/teachers" },
    { title: "Cadastro do Professor", href: "/teachers/new" },
  ],
};
