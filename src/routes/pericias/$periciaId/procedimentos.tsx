import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, ClipboardCheck, X } from "lucide-react";

export const Route = createFileRoute("/pericias/$periciaId/procedimentos")({
  component: PericiaProcedimentos,
});

function PericiaProcedimentos() {
  const [painelAberto, setPainelAberto] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Procedimentos</h2>
        <button
          onClick={() => setPainelAberto(true)}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-500 text-tinta-900 rounded-lg text-sm font-semibold hover:bg-indigo-400 transition-colors"
        >
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

      {painelAberto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-tinta-950/80">
          <div className="bg-tinta-800 border border-tinta-600 rounded-lg w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-tinta-600 px-5 py-4">
              <h3 className="text-lg font-semibold">Novo Procedimento</h3>
              <button
                onClick={() => setPainelAberto(false)}
                className="text-pergaminho-300 hover:text-pergaminho-100 transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="px-5 py-5 space-y-4"
            >
              {/* 1. Tipo */}
              <div className="space-y-1.5">
                <label htmlFor="proc-tipo" className="block text-sm font-medium text-pergaminho-300">
                  Tipo
                </label>
                <input
                  id="proc-tipo"
                  type="text"
                  placeholder="Informe o tipo de procedimento"
                  className="w-full bg-tinta-900 border border-tinta-600 rounded-md px-3 py-2 text-sm text-pergaminho-100 placeholder:text-pergaminho-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                />
              </div>

              {/* 2. Data */}
              <div className="space-y-1.5">
                <label htmlFor="proc-data" className="block text-sm font-medium text-pergaminho-300">
                  Data
                </label>
                <input
                  id="proc-data"
                  type="date"
                  className="w-full bg-tinta-900 border border-tinta-600 rounded-md px-3 py-2 text-sm text-pergaminho-100 placeholder:text-pergaminho-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                />
              </div>

              {/* 3. Participantes */}
              <div className="space-y-1.5">
                <label htmlFor="proc-participantes" className="block text-sm font-medium text-pergaminho-300">
                  Participantes
                </label>
                <input
                  id="proc-participantes"
                  type="text"
                  placeholder="Informe os participantes"
                  className="w-full bg-tinta-900 border border-tinta-600 rounded-md px-3 py-2 text-sm text-pergaminho-100 placeholder:text-pergaminho-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                />
              </div>

              {/* 4. Modalidade/local */}
              <div className="space-y-1.5">
                <label htmlFor="proc-modalidade" className="block text-sm font-medium text-pergaminho-300">
                  Modalidade/local
                </label>
                <input
                  id="proc-modalidade"
                  type="text"
                  placeholder="Informe a modalidade ou o local"
                  className="w-full bg-tinta-900 border border-tinta-600 rounded-md px-3 py-2 text-sm text-pergaminho-100 placeholder:text-pergaminho-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                />
              </div>

              {/* 5. Profissional responsável */}
              <div className="space-y-1.5">
                <label htmlFor="proc-profissional" className="block text-sm font-medium text-pergaminho-300">
                  Profissional responsável
                </label>
                <input
                  id="proc-profissional"
                  type="text"
                  placeholder="Informe o profissional responsável"
                  className="w-full bg-tinta-900 border border-tinta-600 rounded-md px-3 py-2 text-sm text-pergaminho-100 placeholder:text-pergaminho-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                />
              </div>

              {/* 6. Finalidade */}
              <div className="space-y-1.5">
                <label htmlFor="proc-finalidade" className="block text-sm font-medium text-pergaminho-300">
                  Finalidade
                </label>
                <textarea
                  id="proc-finalidade"
                  rows={3}
                  placeholder="Informe a finalidade do procedimento"
                  className="w-full bg-tinta-900 border border-tinta-600 rounded-md px-3 py-2 text-sm text-pergaminho-100 placeholder:text-pergaminho-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 resize-y"
                />
              </div>

              {/* 7. Limite */}
              <div className="space-y-1.5">
                <label htmlFor="proc-limite" className="block text-sm font-medium text-pergaminho-300">
                  Limite
                </label>
                <textarea
                  id="proc-limite"
                  rows={3}
                  placeholder="Informe o limite do procedimento"
                  className="w-full bg-tinta-900 border border-tinta-600 rounded-md px-3 py-2 text-sm text-pergaminho-100 placeholder:text-pergaminho-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 resize-y"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2 border-t border-tinta-600">
                <button
                  type="button"
                  onClick={() => setPainelAberto(false)}
                  className="px-4 py-2 rounded-md border border-tinta-600 text-sm font-medium text-pergaminho-300 hover:bg-tinta-700 hover:text-pergaminho-100 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  disabled
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-500/40 text-tinta-900/50 rounded-md text-sm font-semibold cursor-not-allowed"
                >
                  <Plus className="w-4 h-4" />
                  Adicionar procedimento
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
