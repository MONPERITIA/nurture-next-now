import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText, History, Layout, CheckCircle2, Files, Search, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/pericias/$periciaId/laudo")({
  component: PericiaLaudo,
});

function PericiaLaudo() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* 1. CABEÇALHO */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-xl font-serif text-pergaminho-100">Laudo</h2>
        <div className="flex gap-2">
          <button 
            disabled 
            className="flex items-center gap-2 px-4 py-2 bg-tinta-700 border border-tinta-600 text-pergaminho-300 rounded-lg text-sm font-semibold opacity-50 cursor-not-allowed"
          >
            <Download className="w-4 h-4" />
            Exportar DOCX
          </button>
          <button 
            disabled 
            className="flex items-center gap-2 px-4 py-2 bg-tinta-700 border border-tinta-600 text-pergaminho-300 rounded-lg text-sm font-semibold opacity-50 cursor-not-allowed"
          >
            <Download className="w-4 h-4" />
            Exportar PDF
          </button>
        </div>
      </div>

      {/* 2. ÁREA DO DOCUMENTO (Desktop: Documento esquerda, Origem direita) */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,320px] gap-6">
        <div className="space-y-6">
          {/* Documento */}
          <section className="bg-tinta-800 border border-tinta-600 rounded-lg min-h-[500px] flex flex-col">
            <div className="px-4 py-2 border-b border-tinta-600 bg-tinta-900/30">
              <h3 className="text-xs font-bold uppercase tracking-widest text-pergaminho-500 font-sans">Documento</h3>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center gap-3">
              <FileText className="w-10 h-10 text-tinta-700" />
              <div className="space-y-1">
                <p className="text-pergaminho-300 font-sans">Nenhum conteúdo montado.</p>
                <p className="text-xs text-pergaminho-500 italic font-sans">O documento será estruturado a partir do material confirmado da perícia.</p>
              </div>
            </div>
          </section>

          {/* 3. MONTAGEM */}
          <section className="bg-tinta-800 border border-tinta-600 rounded-lg overflow-hidden">
            <div className="px-4 py-2 border-b border-tinta-600 bg-tinta-900/30 flex items-center gap-2">
              <Layout className="w-3.5 h-3.5 text-pergaminho-500" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-pergaminho-500 font-sans">Montagem</h3>
            </div>
            <div className="p-6 flex items-center justify-center min-h-[100px]">
              <p className="text-sm text-pergaminho-500 font-sans">Nenhum bloco montado.</p>
            </div>
          </section>

          {/* 4. PROPOSTAS */}
          <section className="bg-tinta-800 border border-tinta-600 rounded-lg overflow-hidden">
            <div className="px-4 py-2 border-b border-tinta-600 bg-tinta-900/30 flex items-center gap-2">
              <FileText className="w-3.5 h-3.5 text-pergaminho-500" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-pergaminho-500 font-sans">Propostas</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-center min-h-[60px]">
                <p className="text-sm text-pergaminho-500 font-sans">Nenhuma proposta disponível.</p>
              </div>
              <p className="text-[10px] text-pergaminho-500 leading-relaxed font-sans text-center lg:text-left">
                Análises, pareceres, conclusões e opiniões técnicas permanecem como proposta até confirmação profissional.
              </p>
            </div>
          </section>

          {/* 5. CONFIRMAÇÕES */}
          <section className="bg-tinta-800 border border-tinta-600 rounded-lg overflow-hidden">
            <div className="px-4 py-2 border-b border-tinta-600 bg-tinta-900/30 flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-pergaminho-500" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-pergaminho-500 font-sans">Confirmações</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-center min-h-[60px]">
                <p className="text-sm text-pergaminho-500 font-sans">Nenhuma confirmação disponível.</p>
              </div>
              <p className="text-[10px] text-pergaminho-500 leading-relaxed font-sans text-center lg:text-left">
                O documento não poderá ser finalizado enquanto existir bloco obrigatório de análise sem confirmação.
              </p>
            </div>
          </section>

          {/* 6. REVISÃO */}
          <section className="bg-tinta-800 border border-tinta-600 rounded-lg overflow-hidden">
            <div className="px-4 py-2 border-b border-tinta-600 bg-tinta-900/30 flex items-center gap-2">
              <Search className="w-3.5 h-3.5 text-pergaminho-500" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-pergaminho-500 font-sans">Revisão</h3>
            </div>
            <div className="p-6 flex items-center justify-center min-h-[100px]">
              <p className="text-sm text-pergaminho-500 font-sans">Nenhum conteúdo disponível para revisão.</p>
            </div>
          </section>

          {/* 9. RASTREABILIDADE (Observação Discreta) */}
          <div className="px-2">
            <p className="text-[10px] text-pergaminho-500 italic font-sans">
              Cada trecho deverá manter vínculo com sua origem para conferência profissional.
            </p>
          </div>
        </div>

        <aside className="space-y-6">
          {/* Origem */}
          <section className="bg-tinta-800 border border-tinta-600 rounded-lg flex flex-col min-h-[300px]">
            <div className="px-4 py-2 border-b border-tinta-600 bg-tinta-900/30 flex items-center gap-2">
              <Files className="w-3.5 h-3.5 text-pergaminho-500" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-pergaminho-500 font-sans">Origem</h3>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center gap-2">
              <p className="text-sm text-pergaminho-300 font-sans">Nenhuma origem disponível.</p>
              <p className="text-[10px] text-pergaminho-500 leading-snug font-sans">
                As origens dos trechos aparecerão aqui para conferência.
              </p>
            </div>
          </section>

          {/* 7. VERSÕES */}
          <section className="bg-tinta-800 border border-tinta-600 rounded-lg overflow-hidden">
            <div className="px-4 py-2 border-b border-tinta-600 bg-tinta-900/30 flex items-center gap-2">
              <History className="w-3.5 h-3.5 text-pergaminho-500" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-pergaminho-500 font-sans">Versões</h3>
            </div>
            <div className="p-4 flex items-center justify-center min-h-[80px]">
              <p className="text-sm text-pergaminho-500 font-sans">Nenhuma versão criada.</p>
            </div>
          </section>

          {/* 8. FINALIZAÇÃO */}
          <section className="bg-tinta-800 border border-tinta-600 rounded-lg overflow-hidden">
            <div className="px-4 py-2 border-b border-tinta-600 bg-tinta-900/30 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-brass-500" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-pergaminho-500 font-sans">Finalização</h3>
            </div>
            <div className="p-4 space-y-4">
              <div className="text-center py-2">
                <p className="text-sm text-pergaminho-300 font-sans">Finalização indisponível nesta etapa.</p>
              </div>
              
              <button 
                disabled 
                className="w-full py-2 bg-brass-600/20 border border-brass-600/30 text-brass-500 rounded text-sm font-semibold opacity-50 cursor-not-allowed uppercase tracking-wider transition-all"
              >
                Finalizar versão
              </button>

              <div className="pt-2 border-t border-tinta-600">
                <p className="text-[10px] text-pergaminho-500 leading-tight font-sans">
                  A assinatura visual cadastrada, quando habilitada pelo próprio profissional, será considerada no fluxo de finalização.
                </p>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
