import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, Filter } from "lucide-react";

export const Route = createFileRoute("/pericias")({
  component: Pericias,
});

function Pericias() {
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

      <div className="bg-tinta-800 border border-tinta-600 rounded-lg p-6 flex flex-col items-center justify-center text-center gap-4">
        <div className="bg-tinta-900 border border-tinta-600 rounded-lg p-4 w-full flex items-center justify-between group hover:border-indigo-500/50 transition-colors">
          <div className="flex flex-col items-start gap-1">
            <span className="font-mono text-xs text-pergaminho-500 bg-tinta-800 px-2 py-0.5 rounded">DEMO-2026</span>
            <span className="font-medium text-pergaminho-100">Exemplo de Perícia</span>
          </div>
          <Link 
            to="/pericias/$periciaId" 
            params={{ periciaId: "demo" }}
            className="px-4 py-2 bg-indigo-500 text-tinta-900 rounded-lg text-sm font-semibold hover:bg-indigo-400 transition-colors"
          >
            Abrir
          </Link>
        </div>

        <div className="pt-8 flex flex-col items-center gap-4 opacity-40">
          <div className="w-12 h-12 rounded-full bg-tinta-700 flex items-center justify-center">
            <Search className="w-6 h-6 text-pergaminho-500" />
          </div>
          <div className="space-y-1">
            <p className="font-medium text-pergaminho-100">Outras perícias não encontradas</p>
            <p className="text-sm text-pergaminho-300">Comece criando uma nova perícia no botão principal.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
