export interface BREADCRUMB {
  title: string;
  href: string;
}

export const BREADCRUMBS: { [key: string]: Array<BREADCRUMB> } = {
  "/profiles/new": [{ title: "Editar usuário", href: "/profiles/new" }],
  "/dashboard": [{ title: "Tela inicial", href: "/dashboard" }],
  "/students": [{ title: "Alunos", href: "/students" }],
  "/students/new": [{ title: "Criar aluno", href: "/students/new" }],
  "/subjects": [{ title: "Matérias", href: "/subjects" }],
  "/subjects/new": [{ title: "Criar matéria", href: "/subjects/new" }],
  "/teams": [{ title: "Turmas", href: "/teams" }],
  "/teams/new": [{ title: "Criar turma", href: "/teams/new" }],
  "/teachers": [{ title: "Professores", href: "/teachers" }],
  "/teachers/new": [{ title: "Novo professor", href: "/teachers" }],
  "/resumes": [{ title: "Resumos", href: "/resumes" }],
  "/resumes/new": [{ title: "Novo resumo", href: "/resumes/new" }],
  "/responsibles": [{ title: "Responsáveis", href: "/responsibles" }],
  "/responsibles/new": [
    { title: "Novo responsável", href: "/responsibles/new" },
  ],
};
