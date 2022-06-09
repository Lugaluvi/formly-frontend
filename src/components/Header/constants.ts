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
  ],
  "/students": [
    { title: "Alunos", href: "/students" },
  ]
};
