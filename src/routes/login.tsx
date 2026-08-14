import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Acessar sua conta — MONPERIT IA" },
      {
        name: "description",
        content: "Acesso à plataforma MONPERIT IA.",
      },
      { property: "og:title", content: "Acessar sua conta — MONPERIT IA" },
      { property: "og:description", content: "Acesso à plataforma MONPERIT IA." },
    ],
  }),
  component: LoginRoute,
});

function LoginRoute() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShowSplash(false);
      return;
    }
    const t = setTimeout(() => setShowSplash(false), 850);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative min-h-screen bg-tinta-950 text-pergaminho-100 font-sans">
      {showSplash && <Splash />}
      <LoginScreen />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Splash                                                              */
/* ------------------------------------------------------------------ */

function Splash() {
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-tinta-950 motion-safe:animate-[monperit-fade_850ms_ease-out_forwards]"
      aria-hidden="true"
    >
      <MonperitSeal className="w-24 h-24 text-latao-400 motion-safe:animate-[monperit-seal_700ms_ease-out_both]" />
      <div className="mt-6 flex items-baseline gap-1">
        <span className="font-serif text-2xl tracking-tight text-pergaminho-100">
          MONPERIT
        </span>
        <span className="font-serif text-2xl tracking-tight text-latao-400">
          IA
        </span>
      </div>
    </div>
  );
}

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
/* Login screen                                                        */
/* ------------------------------------------------------------------ */

function LoginScreen() {
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
          Acessar sua conta
        </h1>

        {/* Formulário (apenas visual — não envia nada) */}
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
          autoComplete="off"
        >
          <Field id="email" label="E-mail" type="email" placeholder="nome@exemplo.com" />
          <Field id="senha" label="Senha" type="password" placeholder="••••••••" />

          <button
            type="submit"
            className="w-full bg-indigo-400 hover:bg-indigo-500 text-tinta-900 font-medium py-2.5 rounded-md border border-transparent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-tinta-950"
          >
            Entrar
          </button>
        </form>

        {/* Separador */}
        <div className="flex items-center gap-3 my-6">
          <span className="h-px flex-1 bg-tinta-600" />
          <span className="text-xs text-pergaminho-500 uppercase tracking-wider">
            ou
          </span>
          <span className="h-px flex-1 bg-tinta-600" />
        </div>

        {/* Ações alternativas (apenas visual) */}
        <div className="flex flex-col gap-3">
          <button
            type="button"
            className="w-full bg-transparent border border-tinta-600 text-pergaminho-100 font-medium py-2.5 rounded-md transition-colors hover:bg-tinta-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-tinta-950"
          >
            Receber link ou código por e-mail
          </button>

          <SecondaryButton icon={<GoogleIcon className="w-4 h-4" />}>
            Continuar com Google
          </SecondaryButton>
          <SecondaryButton icon={<AppleIcon className="w-4 h-4" />}>
            Continuar com Apple
          </SecondaryButton>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4 text-sm text-pergaminho-300">
          <button
            type="button"
            className="underline underline-offset-4 decoration-pergaminho-500 hover:text-pergaminho-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 rounded"
          >
            Esqueci minha senha
          </button>
          <span className="text-pergaminho-500" aria-hidden="true">
            ·
          </span>
          <Link
            to="/cadastro"
            className="underline underline-offset-4 decoration-pergaminho-500 hover:text-pergaminho-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 rounded"
          >
            Criar conta
          </Link>
        </div>
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

function SecondaryButton({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className="w-full flex items-center justify-center gap-2.5 bg-transparent border border-tinta-600 text-pergaminho-100 font-medium py-2.5 rounded-md transition-colors hover:bg-tinta-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-tinta-950"
    >
      {icon}
      {children}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Ícones de marca (somente visuais)                                    */
/* ------------------------------------------------------------------ */

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"
      />
    </svg>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.36 1.43c.02 1.02-.36 2.01-1.02 2.78-.7.81-1.66 1.27-2.57 1.2-.06-.98.38-1.99 1.02-2.71.71-.8 1.74-1.24 2.57-1.27zM20.5 17.36c-.5 1.15-.74 1.66-1.39 2.68-.9 1.41-2.17 3.16-3.74 3.17-1.4.01-1.76-.91-3.66-.9-1.9.01-2.3.92-3.7.9-1.57-.02-2.77-1.58-3.67-2.99C1.46 16.96 1.2 12.79 3.13 9.9c1.1-1.65 2.84-2.71 4.46-2.71 1.65 0 2.69.91 4.05.91 1.32 0 2.13-.91 4.04-.91 1.45 0 2.98.79 4.08 2.16-3.59 1.97-3.01 7.1-.27 8.01z" />
    </svg>
  );
}
