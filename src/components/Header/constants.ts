export interface BREADCRUMB {
  title: string;
  href: string;
}

export const BREADCRUMBS: { [key: string]: Array<BREADCRUMB> } = {
  "/profile/new": [
    { title: "Editar usuário", href: "/profile/new" },
  ],
  "/dashboard": [
    { title: "Tela inicial", href: "/dashboard" },
  ],
  "/students": [
    { title: "Alunos", href: "/students" },
  ],
  "/students/new": [
    { title: "Criar aluno", href: "/students/new" },
  ],
  "/subjects": [
    { title: "Matérias", href: "/subjects" },
  ],
  "/subjects/new": [
    { title: "Criar matéria", href: "/subjects/new" },
  ],
  "/teams": [
    { title: "Turmas", href: "/teams" },
  ],
  "/teams/new": [
    { title: "Criar turma", href: "/teams/new" },
  ],
  "/teachers": [
    { title: "Professores", href: "/teachers" },
  ],
  "/teachers/new": [
    { title: "Novo professor", href: "/teachers" },
  ],
  "/resumes/new": [
    { title: "Novo resumo", href: "/resumes/new" },
  ],
};
