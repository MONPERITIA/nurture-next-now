import { createFileRoute } from "@tanstack/react-router";
import { UserPlus, Users } from "lucide-react";

export const Route = createFileRoute("/pericias/$periciaId/pessoas")({
  component: PericiaPessoas,
});

function PericiaPessoas() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Pessoas</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-500 text-tinta-900 rounded-lg text-sm font-semibold hover:bg-indigo-400 transition-colors">
          <UserPlus className="w-4 h-4" />
          Adicionar pessoa
        </button>
      </div>

      <div className="bg-tinta-800 border border-tinta-600 rounded-lg p-12 flex flex-col items-center justify-center text-center gap-4">
        <div className="w-12 h-12 rounded-full bg-tinta-700 flex items-center justify-center">
          <Users className="w-6 h-6 text-pergaminho-500" />
        </div>
        <div className="space-y-1">
          <p className="font-medium text-pergaminho-100">Nenhuma pessoa cadastrada</p>
          <p className="text-sm text-pergaminho-300 max-w-xs">
            Registre as pessoas, papéis e vínculos envolvidos nesta perícia.
          </p>
        </div>
      </div>

      {/* Concept Layout for future form */}
      <div className="hidden grid-cols-1 sm:grid-cols-2 gap-4 pt-6 opacity-20 pointer-events-none select-none">
        <div className="space-y-1">
          <label className="text-xs font-bold text-pergaminho-500 uppercase tracking-wider">Nome</label>
          <div className="h-10 bg-tinta-800 border border-tinta-600 rounded" />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-bold text-pergaminho-500 uppercase tracking-wider">Papel</label>
          <div className="h-10 bg-tinta-800 border border-tinta-600 rounded" />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-bold text-pergaminho-500 uppercase tracking-wider">Vínculo</label>
          <div className="h-10 bg-tinta-800 border border-tinta-600 rounded" />
        </div>
      </div>
    </div>
  );
}
