import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { Search, Filter } from "lucide-react";

export const Route = createFileRoute("/pericias")({
  component: PericiasLayout,
});

function PericiasLayout() {
  return <Outlet />;
}

export function PericiasList() {
  return (
    <div className="flex flex-col gap-6 pb-24 md:pb-6">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-semibold tracking-tight">Perícias</h1>
        <p className="text-pergaminho-300 text-sm">Acompanhe e acesse suas perícias.</p>
      </header>

      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-pergaminho-500" />
          <input 
            type="text" 
            placeholder="Buscar por número, nome..."
            className="w-full bg-tinta-800 border border-tinta-600 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-400"
          />
        </div>
        <button className="flex items-center justify-center p-2 bg-tinta-800 border border-tinta-600 rounded-lg hover:bg-tinta-700 transition-colors">
          <Filter className="w-5 h-5 text-pergaminho-300" />
        </button>
      </div>

      <div className="bg-tinta-800 border border-tinta-600 rounded-lg p-12 flex flex-col items-center justify-center text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-tinta-900 flex items-center justify-center mb-2">
          <Search className="w-8 h-8 text-pergaminho-500/50" />
        </div>
        <div className="space-y-2">
          <p className="font-medium text-pergaminho-100 text-lg">Nenhuma perícia encontrada.</p>
          <p className="text-pergaminho-400">Crie uma nova perícia para começar.</p>
        </div>
        <Link 
          to="/nova-pericia"
          className="mt-4 px-6 py-2.5 bg-indigo-500 text-tinta-900 rounded-lg text-sm font-semibold hover:bg-indigo-400 transition-colors"
        >
          Nova perícia
        </Link>
      </div>
    </div>
  );
}

