export interface BREADCRUMB {
  title: string;
  href: string;
}

export const BREADCRUMBS: { [key: string]: Array<BREADCRUMB> } = {
  "/teachers": [
    { title: "Professores", href: "/teachers" },
  ],
  "/teachers/new": [
    { title: "Cadastro do Professor", href: "/teachers/new" },
  ],
  "/students": [
    { title: "Alunos", href: "/students" },
  ]
};
