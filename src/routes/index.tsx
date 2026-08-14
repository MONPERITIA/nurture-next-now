import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, Plus, Clock, AlertCircle } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Dashboard,
});

function Dashboard() {
  return (
    <div className="flex flex-col gap-6 pb-24 md:pb-6">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-semibold tracking-tight">Início</h1>
        <p className="text-pergaminho-300 text-sm">Bem-vindo ao MONPERIT IA.</p>
      </header>

      {/* Busca em destaque */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-pergaminho-500" />
        <input 
          type="text" 
          placeholder="Buscar perícias, processos ou pessoas..."
          className="w-full bg-tinta-800 border border-tinta-600 rounded-lg py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-400 transition-all"
        />
      </div>

      {/* Ação rápida */}
      <Link 
        to="/nova-pericia"
        className="flex items-center justify-center gap-2 w-full bg-indigo-400 hover:bg-indigo-500 text-tinta-900 font-medium py-3 rounded-lg transition-colors"
      >
        <Plus className="w-5 h-5" />
        <span>Nova perícia</span>
      </Link>

      {/* Perícias recentes */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium flex items-center gap-2">
            <Clock className="w-4 h-4 text-indigo-400" />
            Perícias recentes
          </h2>
        </div>
        <div className="bg-tinta-800 border border-tinta-600 rounded-lg p-4 flex flex-col items-center justify-center text-center gap-4">
          <div className="bg-tinta-900 border border-tinta-600 rounded-lg p-3 w-full flex items-center justify-between">
            <div className="flex flex-col items-start gap-1">
              <span className="font-mono text-[10px] text-pergaminho-500 bg-tinta-800 px-1.5 py-0.5 rounded">DEMO</span>
              <span className="text-sm font-medium text-pergaminho-100">Exemplo de Perícia</span>
            </div>
            <Link 
              to="/pericias/$periciaId" 
              params={{ periciaId: "demo" }}
              className="px-3 py-1.5 bg-tinta-700 text-pergaminho-100 rounded text-xs font-semibold hover:bg-tinta-600 transition-colors"
            >
              Abrir
            </Link>
          </div>
          <p className="text-pergaminho-500 text-xs">Nenhuma outra perícia recente.</p>
        </div>
      </section>

      {/* Pendências */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-alerta" />
            Pendências
          </h2>
        </div>
        <div className="bg-tinta-800 border border-tinta-600 rounded-lg p-8 flex flex-col items-center justify-center text-center gap-2">
          <p className="text-pergaminho-300 text-sm">Nenhuma pendência no momento.</p>
        </div>
      </section>
    </div>
  );
}
