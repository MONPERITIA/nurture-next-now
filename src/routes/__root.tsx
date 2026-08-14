import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Home, ClipboardList, PlusSquare, Mail, User } from "lucide-react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que você está procurando não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Esta página não carregou
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo deu errado do nosso lado. Você pode tentar atualizar ou voltar para o início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Voltar ao início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "MONPERIT IA" },
      { name: "description", content: "Aplicativo multiprofissional para coleta, organização, redação e finalização de laudos e pareceres técnicos." },
      { name: "author", content: "MONPERIT" },
      { property: "og:title", content: "MONPERIT IA" },
      { property: "og:description", content: "Aplicativo multiprofissional para coleta, organização, redação e finalização de laudos e pareceres técnicos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=IBM+Plex+Sans:wght@400;500;600&family=Spectral:wght@400;600&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // /login e /cadastro são telas de acesso independentes, sem a navegação global do app.
  if (pathname === "/login" || pathname === "/cadastro") {
    return (
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-tinta-900 text-pergaminho-100 flex flex-col md:flex-row">
        {/* Desktop Sidebar */}
        <nav className="hidden md:flex flex-col w-64 bg-tinta-800 border-r border-tinta-600 p-6 gap-8 fixed h-full">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl font-serif font-semibold tracking-tight">MONPERIT <span className="text-latao-400">IA</span></span>
          </div>
          <div className="flex flex-col gap-2">
            <NavLink to="/" icon={<Home className="w-5 h-5" />} label="Início" />
            <NavLink to="/pericias" icon={<ClipboardList className="w-5 h-5" />} label="Perícias" />
            <NavLink to="/nova-pericia" icon={<PlusSquare className="w-5 h-5" />} label="Nova Perícia" />
            <NavLink to="/convites" icon={<Mail className="w-5 h-5" />} label="Convites" />
            <NavLink to="/perfil" icon={<User className="w-5 h-5" />} label="Perfil" />
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 md:ml-64 p-4 md:p-8 max-w-5xl mx-auto w-full">
          <Outlet />
        </main>

        {/* Mobile Tab Bar */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-tinta-800 border-t border-tinta-600 px-2 py-3 flex items-center justify-around z-50">
          <MobileNavLink to="/" icon={<Home className="w-6 h-6" />} label="Início" />
          <MobileNavLink to="/pericias" icon={<ClipboardList className="w-6 h-6" />} label="Perícias" />
          <MobileNavLink to="/nova-pericia" icon={<PlusSquare className="w-6 h-6 text-indigo-400" />} label="Nova" />
          <MobileNavLink to="/convites" icon={<Mail className="w-6 h-6" />} label="Convites" />
          <MobileNavLink to="/perfil" icon={<User className="w-6 h-6" />} label="Perfil" />
        </nav>
      </div>
    </QueryClientProvider>
  );
}

function NavLink({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      to={to}
      activeProps={{ className: "bg-indigo-900 text-indigo-300" }}
      inactiveProps={{ className: "text-pergaminho-300 hover:bg-tinta-700 hover:text-pergaminho-100" }}
      className="flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm font-medium"
    >
      {icon}
      {label}
    </Link>
  );
}

function MobileNavLink({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      to={to}
      activeProps={{ className: "text-indigo-400" }}
      inactiveProps={{ className: "text-pergaminho-500" }}
      className="flex flex-col items-center gap-1 min-w-[64px]"
    >
      {icon}
      <span className="text-[10px] uppercase font-bold tracking-wider">{label}</span>
    </Link>
  );
}
