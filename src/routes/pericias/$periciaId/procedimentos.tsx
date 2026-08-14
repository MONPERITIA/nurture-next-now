import { createFileRoute } from "@tanstack/react-router";
import { Plus, ClipboardCheck } from "lucide-react";

export const Route = createFileRoute("/pericias/$periciaId/procedimentos")({
  component: PericiaProcedimentos,
});

function PericiaProcedimentos() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Procedimentos</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-500 text-tinta-900 rounded-lg text-sm font-semibold hover:bg-indigo-400 transition-colors">
          <Plus className="w-4 h-4" />
          Adicionar procedimento
        </button>
      </div>

      <div className="bg-tinta-800 border border-tinta-600 rounded-lg p-12 flex flex-col items-center justify-center text-center gap-4">
        <div className="w-12 h-12 rounded-full bg-tinta-700 flex items-center justify-center">
          <ClipboardCheck className="w-6 h-6 text-pergaminho-500" />
        </div>
        <div className="space-y-1">
          <p className="font-medium text-pergaminho-100">Nenhum procedimento registrado</p>
          <p className="text-sm text-pergaminho-300 max-w-xs">
            Organize entrevistas, visitas e observações técnicas aqui.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6 opacity-10 grayscale">
         <div className="bg-tinta-800 border border-tinta-600 p-4 rounded-lg space-y-2">
            <div className="h-4 w-24 bg-tinta-600 rounded" />
            <div className="h-3 w-32 bg-tinta-700 rounded" />
         </div>
         <div className="bg-tinta-800 border border-tinta-600 p-4 rounded-lg space-y-2">
            <div className="h-4 w-24 bg-tinta-600 rounded" />
            <div className="h-3 w-32 bg-tinta-700 rounded" />
         </div>
      </div>
    </div>
  );
}
