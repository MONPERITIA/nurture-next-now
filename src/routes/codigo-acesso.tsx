import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useRef, useState } from "react";

export const Route = createFileRoute("/codigo-acesso")({
  head: () => ({
    meta: [
      { title: "Código de acesso — MONPERIT IA" },
      {
        name: "description",
        content: "Confirmação de código de acesso na plataforma MONPERIT IA.",
      },
      { property: "og:title", content: "Código de acesso — MONPERIT IA" },
      { property: "og:description", content: "Confirmação de código de acesso na plataforma MONPERIT IA." },
    ],
  }),
  component: CodigoAcessoRoute,
});

function CodigoAcessoRoute() {
  return (
    <div className="relative min-h-screen bg-tinta-950 text-pergaminho-100 font-sans">
      <CodigoAcessoScreen />
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
/* Código de acesso screen                                              */
/* ------------------------------------------------------------------ */

function CodigoAcessoScreen() {
  const [values, setValues] = useState<string[]>(["", "", "", "", "", ""]);
  const refs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, raw: string) => {
    const digit = raw.replace(/\D/g, "").slice(-1);
    const next = [...values];
    next[index] = digit;
    setValues(next);
    if (digit && index < 5 && refs.current[index + 1]) {
      refs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace" && !values[index] && index > 0) {
      refs.current[index - 1]?.focus();
    }
  };

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

        <h1 className="font-serif text-lg text-pergaminho-100 text-center mb-3">
          Código de acesso
        </h1>

        <p className="text-sm text-pergaminho-300 text-center mb-6">
          Digite o código recebido por e-mail para continuar.
        </p>

        {/* Formulário (apenas visual — não envia nada) */}
        <form
          className="flex flex-col gap-5"
          onSubmit={(e) => e.preventDefault()}
          autoComplete="off"
        >
          <div
            className="flex items-center justify-between gap-2"
            role="group"
            aria-label="Código de 6 dígitos"
          >
            {values.map((v, i) => (
              <input
                key={i}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                id={`digito-${i + 1}`}
                name={`digito-${i + 1}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={v}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                aria-label={`Dígito ${i + 1}`}
                className="w-11 h-12 text-center text-lg font-medium bg-tinta-900 border border-tinta-600 rounded-md text-pergaminho-100 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-colors"
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-400 hover:bg-indigo-500 text-tinta-900 font-medium py-2.5 rounded-md border border-transparent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-tinta-950"
          >
            Confirmar código
          </button>

          <button
            type="button"
            className="w-full bg-transparent border border-tinta-600 text-pergaminho-100 font-medium py-2.5 rounded-md transition-colors hover:bg-tinta-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-tinta-950"
          >
            Reenviar código
          </button>
        </form>

        {/* Novo aparelho — indicação discreta */}
        <div className="mt-8 pt-6 border-t border-tinta-600">
          <p className="text-xs font-semibold text-pergaminho-300 uppercase tracking-wider text-center mb-2">
            Confirmação de novo aparelho
          </p>
          <p className="text-xs text-pergaminho-500 text-center">
            Este código também será usado quando o acesso ocorrer em um novo aparelho.
          </p>
        </div>

        {/* Voltar para o login */}
        <p className="mt-6 text-center text-sm text-pergaminho-300">
          <Link
            to="/login"
            className="underline underline-offset-4 decoration-pergaminho-500 hover:text-pergaminho-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 rounded"
          >
            Voltar para o login
          </Link>
        </p>
      </div>
    </div>
  );
}
