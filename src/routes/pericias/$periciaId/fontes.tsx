import { createFileRoute } from "@tanstack/react-router";
import { FileUp, Files } from "lucide-react";

export const Route = createFileRoute("/pericias/$periciaId/fontes")({
  component: PericiaFontes,
});

function PericiaFontes() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Fontes</h2>
        <div className="flex gap-2">
           <button className="flex items-center gap-2 px-4 py-2 bg-tinta-700 border border-tinta-600 text-pergaminho-100 rounded-lg text-sm font-semibold">
            <Files className="w-4 h-4" />
            Autos
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-500 text-tinta-900 rounded-lg text-sm font-semibold hover:bg-indigo-400 transition-colors">
            <FileUp className="w-4 h-4" />
            Adicionar fonte
          </button>
        </div>
      </div>

      <div className="bg-tinta-800 border border-tinta-600 rounded-lg p-12 flex flex-col items-center justify-center text-center gap-4">
        <div className="w-12 h-12 rounded-full bg-tinta-700 flex items-center justify-center">
          <Files className="w-6 h-6 text-pergaminho-500" />
        </div>
        <div className="space-y-1">
          <p className="font-medium text-pergaminho-100">Nenhuma fonte ou documento</p>
          <p className="text-sm text-pergaminho-300 max-w-xs">
            Importe autos, documentos e organize os quesitos da perícia.
          </p>
        </div>
      </div>
    </div>
  );
}
