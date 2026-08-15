import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { FileUp, Files, ScanText, ClipboardCheck, CheckCheck, X, FileText } from "lucide-react";

export const Route = createFileRoute("/pericias/$periciaId/fontes")({
  component: PericiaFontes,
});

function PericiaFontes() {
  const [painelAberto, setPainelAberto] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Fontes</h2>
        <div className="flex gap-2">
          <button
            onClick={() => {
              const el = document.getElementById("area-autos");
              if (el) el.scrollIntoView({ block: "start" });
            }}
            className="flex items-center gap-2 px-4 py-2 bg-tinta-700 border border-tinta-600 text-pergaminho-100 rounded-lg text-sm font-semibold hover:bg-tinta-600 transition-colors"
          >
            <Files className="w-4 h-4" />
            Autos
          </button>
          <button
            onClick={() => setPainelAberto(true)}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-500 text-tinta-900 rounded-lg text-sm font-semibold hover:bg-indigo-400 transition-colors"
          >
            <FileUp className="w-4 h-4" />
            Adicionar fonte
          </button>
        </div>
      </div>

      {/* Estado vazio */}
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

      {/* Áreas visuais */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AreaVisual id="area-autos" icon={<Files className="w-5 h-5" />} titulo="Autos e documentos" estado="Nenhum arquivo adicionado." />
        <AreaVisual icon={<ScanText className="w-5 h-5" />} titulo="OCR" estado="Nenhum material para reconhecimento." />
        <AreaVisual icon={<ClipboardCheck className="w-5 h-5" />} titulo="Quesitos" estado="Nenhum quesito para conferência." />
        <AreaVisual icon={<CheckCheck className="w-5 h-5" />} titulo="Revisão" estado="Nenhuma fonte para revisar." />
      </div>

      {painelAberto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-tinta-950/80">
          <div className="bg-tinta-800 border border-tinta-600 rounded-lg w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-tinta-600 px-5 py-4">
              <h3 className="text-lg font-semibold">Nova Fonte Documental</h3>
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
              {/* 1. Código F */}
              <div className="space-y-1.5">
                <label htmlFor="fonte-codigo-f" className="block text-sm font-medium text-pergaminho-300">
                  Código F
                </label>
                <input
                  id="fonte-codigo-f"
                  type="text"
                  value="—"
                  readOnly
                  className="w-full bg-tinta-900 border border-tinta-600 rounded-md px-3 py-2 text-sm text-pergaminho-500 cursor-not-allowed"
                />
              </div>

              {/* 2. Arquivo */}
              <div className="space-y-1.5">
                <label htmlFor="fonte-arquivo" className="block text-sm font-medium text-pergaminho-300">
                  Arquivo
                </label>
                <div className="w-full bg-tinta-900 border border-tinta-600 rounded-md px-3 py-2 text-sm text-pergaminho-500 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Nenhum arquivo selecionado
                </div>
                <button
                  type="button"
                  disabled
                  className="flex items-center gap-2 px-3 py-1.5 bg-tinta-700 border border-tinta-600 text-pergaminho-500 rounded-md text-xs font-semibold cursor-not-allowed"
                >
                  <FileUp className="w-3.5 h-3.5" />
                  Selecionar arquivo
                </button>
              </div>

              {/* 3. Tipo */}
              <div className="space-y-1.5">
                <label htmlFor="fonte-tipo" className="block text-sm font-medium text-pergaminho-300">
                  Tipo
                </label>
                <input
                  id="fonte-tipo"
                  type="text"
                  placeholder="Informe o tipo da fonte"
                  className="w-full bg-tinta-900 border border-tinta-600 rounded-md px-3 py-2 text-sm text-pergaminho-100 placeholder:text-pergaminho-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                />
              </div>

              {/* 4. Autor */}
              <div className="space-y-1.5">
                <label htmlFor="fonte-autor" className="block text-sm font-medium text-pergaminho-300">
                  Autor
                </label>
                <input
                  id="fonte-autor"
                  type="text"
                  placeholder="Informe o autor"
                  className="w-full bg-tinta-900 border border-tinta-600 rounded-md px-3 py-2 text-sm text-pergaminho-100 placeholder:text-pergaminho-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                />
              </div>

              {/* 5. Data */}
              <div className="space-y-1.5">
                <label htmlFor="fonte-data" className="block text-sm font-medium text-pergaminho-300">
                  Data
                </label>
                <input
                  id="fonte-data"
                  type="date"
                  className="w-full bg-tinta-900 border border-tinta-600 rounded-md px-3 py-2 text-sm text-pergaminho-100 placeholder:text-pergaminho-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                />
              </div>

              {/* 6. Movimentação */}
              <div className="space-y-1.5">
                <label htmlFor="fonte-movimentacao" className="block text-sm font-medium text-pergaminho-300">
                  Movimentação
                </label>
                <input
                  id="fonte-movimentacao"
                  type="text"
                  placeholder="Informe a movimentação"
                  className="w-full bg-tinta-900 border border-tinta-600 rounded-md px-3 py-2 text-sm text-pergaminho-100 placeholder:text-pergaminho-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                />
              </div>

              {/* 7. Páginas */}
              <div className="space-y-1.5">
                <label htmlFor="fonte-paginas" className="block text-sm font-medium text-pergaminho-300">
                  Páginas
                </label>
                <input
                  id="fonte-paginas"
                  type="text"
                  placeholder="Informe as páginas"
                  className="w-full bg-tinta-900 border border-tinta-600 rounded-md px-3 py-2 text-sm text-pergaminho-100 placeholder:text-pergaminho-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                />
              </div>

              {/* 8. Resumo */}
              <div className="space-y-1.5">
                <label htmlFor="fonte-resumo" className="block text-sm font-medium text-pergaminho-300">
                  Resumo
                </label>
                <textarea
                  id="fonte-resumo"
                  rows={3}
                  placeholder="Informe o resumo da fonte"
                  className="w-full bg-tinta-900 border border-tinta-600 rounded-md px-3 py-2 text-sm text-pergaminho-100 placeholder:text-pergaminho-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 resize-y"
                />
              </div>

              {/* 9. Limite */}
              <div className="space-y-1.5">
                <label htmlFor="fonte-limite" className="block text-sm font-medium text-pergaminho-300">
                  Limite
                </label>
                <textarea
                  id="fonte-limite"
                  rows={3}
                  placeholder="Informe o limite da fonte"
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
                  <FileUp className="w-4 h-4" />
                  Adicionar fonte
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function AreaVisual({ id, icon, titulo, estado }: { id?: string; icon: React.ReactNode; titulo: string; estado: string }) {
  return (
    <div id={id} className="bg-tinta-800 border border-tinta-600 rounded-lg p-5 flex flex-col gap-3 scroll-mt-24">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded bg-tinta-700 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-sm font-semibold text-pergaminho-100">{titulo}</h3>
      </div>
      <p className="text-sm text-pergaminho-500">{estado}</p>
    </div>
  );
}
