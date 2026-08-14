import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/cadastro")({
  head: () => ({
    meta: [
      { title: "Criar sua conta — MONPERIT IA" },
      {
        name: "description",
        content: "Cadastro de nova conta na plataforma MONPERIT IA.",
      },
      { property: "og:title", content: "Criar sua conta — MONPERIT IA" },
      { property: "og:description", content: "Cadastro de nova conta na plataforma MONPERIT IA." },
    ],
  }),
  component: CadastroRoute,
});

function CadastroRoute() {
  return (
    <div className="relative min-h-screen bg-tinta-950 text-pergaminho-100 font-sans">
      <CadastroScreen />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Marca                                                                */
/* ------------------------------------------------------------------ */

function MonperitSeal({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      aria-label="Selo MONPERIT"
      role="img"
    >
      <path d="M60,22 A34,46 0 0,0 60,98" />
      <path d="M60,22 A34,46 0 0,1 60,98" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Cadastro screen                                                      */
/* ------------------------------------------------------------------ */

function CadastroScreen() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5 py-10">
      <div className="w-full max-w-sm">
        {/* Marca */}
        <div className="flex flex-col items-center mb-8">
          <MonperitSeal className="w-10 h-10 text-latao-400 mb-3" />
          <div className="flex items-baseline gap-1">
            <span className="font-serif text-xl tracking-tight text-pergaminho-100">
              MONPERIT
            </span>
            <span className="font-serif text-xl tracking-tight text-latao-400">
              IA
            </span>
          </div>
        </div>

        <h1 className="font-serif text-lg text-pergaminho-100 text-center mb-6">
          Criar sua conta
        </h1>

        {/* Formulário (apenas visual — não envia nada) */}
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
          autoComplete="off"
        >
          <Field id="nome" label="Nome" type="text" placeholder="Seu nome completo" />
          <Field id="email" label="E-mail" type="email" placeholder="nome@exemplo.com" />
          <Field id="telefone" label="Telefone (opcional)" type="tel" placeholder="(00) 00000-0000" />
          <Field id="profissao" label="Profissão" type="text" placeholder="Sua profissão" />
          <Field id="conselho" label="Conselho (quando aplicável)" type="text" placeholder="Conselho profissional" />
          <Field id="uf" label="UF (quando aplicável)" type="text" placeholder="UF" />
          <Field id="registro" label="Número de registro (quando aplicável)" type="text" placeholder="Número de registro" />
          <Field id="senha" label="Senha" type="password" placeholder="••••••••" />

          <button
            type="submit"
            className="w-full bg-indigo-400 hover:bg-indigo-500 text-tinta-900 font-medium py-2.5 rounded-md border border-transparent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-tinta-950"
          >
            Criar conta
          </button>
        </form>

        {/* Ação para login */}
        <p className="mt-6 text-center text-sm text-pergaminho-300">
          <Link
            to="/login"
            className="underline underline-offset-4 decoration-pergaminho-500 hover:text-pergaminho-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 rounded"
          >
            Já tenho uma conta
          </Link>
        </p>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  type,
  placeholder,
}: {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
}) {
  return (
    <label htmlFor={id} className="flex flex-col gap-1.5">
      <span className="text-sm text-pergaminho-300">{label}</span>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className="w-full bg-tinta-900 border border-tinta-600 rounded-md px-3 py-2.5 text-sm text-pergaminho-100 placeholder:text-pergaminho-500 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-colors"
      />
    </label>
  );
}
