import { createFileRoute, Outlet, Link } from "@tanstack/react-router";
import { 
  LayoutDashboard, 
  Users, 
  ClipboardCheck, 
  Files, 
  Mic, 
  FileText 
} from "lucide-react";

export const Route = createFileRoute("/pericias/$periciaId")({
  component: PericiaLayout,
});

function PericiaLayout() {
  const { periciaId } = Route.useParams();

  return (
    <div className="flex flex-col gap-6 pb-24 md:pb-6">
      <header className="flex flex-col gap-4 border-b border-tinta-600 pb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-3xl font-serif font-semibold tracking-tight">Perícia</h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-pergaminho-300">
              <span className="font-mono bg-tinta-800 px-2 py-0.5 rounded border border-tinta-600">
                Processo: ---
              </span>
              <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-tinta-700 text-pergaminho-500 border border-tinta-600">
                <span className="w-1.5 h-1.5 rounded-full bg-pergaminho-500" />
                Preparação
              </span>
            </div>
          </div>
        </div>

        {/* Navigation - Mobile optimized scroll-less tabs */}
        <nav className="flex overflow-x-auto no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex w-full md:w-auto border border-tinta-600 rounded-lg overflow-hidden bg-tinta-800">
            <PericiaNavLink to={`/pericias/${periciaId}`} label="Visão geral" icon={<LayoutDashboard className="w-4 h-4" />} />
            <PericiaNavLink to={`/pericias/${periciaId}/pessoas`} label="Pessoas" icon={<Users className="w-4 h-4" />} />
            <PericiaNavLink to={`/pericias/${periciaId}/procedimentos`} label="Procedimentos" icon={<ClipboardCheck className="w-4 h-4" />} />
            <PericiaNavLink to={`/pericias/${periciaId}/fontes`} label="Fontes" icon={<Files className="w-4 h-4" />} />
            <PericiaNavLink to={`/pericias/${periciaId}/coleta`} label="Coleta" icon={<Mic className="w-4 h-4" />} />
            <PericiaNavLink to={`/pericias/${periciaId}/laudo`} label="Laudo" icon={<FileText className="w-4 h-4" />} />
          </div>
        </nav>
      </header>

      <div className="min-h-[400px]">
        <Outlet />
      </div>
    </div>
  );
}

function PericiaNavLink({ to, label, icon }: { to: string; label: string; icon: React.ReactNode }) {
  return (
    <Link
      to={to}
      activeProps={{ className: "bg-indigo-900 text-indigo-300" }}
      inactiveProps={{ className: "text-pergaminho-300 hover:bg-tinta-700 hover:text-pergaminho-100 border-r border-tinta-600 last:border-r-0" }}
      className="flex-1 md:flex-none flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-medium transition-all whitespace-nowrap"
      activeOptions={{ exact: true }}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
      <span className="sm:hidden">{label.split(' ')[0]}</span>
    </Link>
  );
}
