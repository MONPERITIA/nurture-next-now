import { createFileRoute } from "@tanstack/react-router";
import { UserPlus, Users, X, Info } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/pericias/$periciaId/pessoas")({
  component: PericiaPessoas,
});

function PericiaPessoas() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-serif text-pergaminho-100">Pessoas</h2>
        {!isPanelOpen && (
          <button 
            onClick={() => setIsPanelOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-500 text-tinta-900 rounded-lg text-sm font-semibold hover:bg-indigo-400 transition-colors focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          >
            <UserPlus className="w-4 h-4" />
            Adicionar pessoa
          </button>
        )}
      </div>

      <p className="text-sm text-pergaminho-300">
        Registre as pessoas, papéis e vínculos envolvidos nesta perícia.
      </p>

      {isPanelOpen && (
        <div className="bg-tinta-800 border border-tinta-600 rounded-lg p-6 space-y-6 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex items-center justify-between border-b border-tinta-600 pb-4">
            <h3 className="text-lg font-serif text-pergaminho-100">Nova Pessoa</h3>
            <button 
              onClick={() => setIsPanelOpen(false)}
              className="text-pergaminho-500 hover:text-pergaminho-100 transition-colors focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4" onSubmit={(e) => e.preventDefault()}>
            {/* Nome */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-pergaminho-500 uppercase tracking-wider">Nome</label>
              <input 
                type="text" 
                placeholder="Nome completo"
                className="w-full h-10 bg-tinta-900 border border-tinta-600 rounded-lg px-3 text-pergaminho-100 placeholder:text-tinta-500 focus:border-indigo-400 focus:outline-none transition-colors"
              />
            </div>

            {/* Papel */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-pergaminho-500 uppercase tracking-wider">Papel</label>
              <input 
                type="text" 
                placeholder="Ex: Periciado, Assistente, Testemunha"
                className="w-full h-10 bg-tinta-900 border border-tinta-600 rounded-lg px-3 text-pergaminho-100 placeholder:text-tinta-500 focus:border-indigo-400 focus:outline-none transition-colors"
              />
            </div>

            {/* Data de Nascimento */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-pergaminho-500 uppercase tracking-wider">Data de nascimento</label>
              <input 
                type="date" 
                className="w-full h-10 bg-tinta-900 border border-tinta-600 rounded-lg px-3 text-pergaminho-100 [color-scheme:dark] focus:border-indigo-400 focus:outline-none transition-colors"
              />
            </div>

            {/* Idade Calculada */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-pergaminho-500 uppercase tracking-wider">Idade calculada</label>
              <div className="w-full h-10 bg-tinta-700 border border-tinta-600 rounded-lg px-3 flex items-center text-pergaminho-500 select-none cursor-not-allowed">
                —
              </div>
            </div>

            {/* Endereço */}
            <div className="md:col-span-2 space-y-1.5">
              <label className="text-xs font-bold text-pergaminho-500 uppercase tracking-wider">Endereço</label>
              <input 
                type="text" 
                placeholder="Rua, número, complemento, cidade, UF"
                className="w-full h-10 bg-tinta-900 border border-tinta-600 rounded-lg px-3 text-pergaminho-100 placeholder:text-tinta-500 focus:border-indigo-400 focus:outline-none transition-colors"
              />
            </div>

            {/* Documentos */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-pergaminho-500 uppercase tracking-wider">Documentos</label>
              <input 
                type="text" 
                placeholder="CPF, RG, CNH ou outros"
                className="w-full h-10 bg-tinta-900 border border-tinta-600 rounded-lg px-3 text-pergaminho-100 placeholder:text-tinta-500 focus:border-indigo-400 focus:outline-none transition-colors"
              />
            </div>

            {/* Ocupação */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-pergaminho-500 uppercase tracking-wider">Ocupação</label>
              <input 
                type="text" 
                placeholder="Profissão ou atividade atual"
                className="w-full h-10 bg-tinta-900 border border-tinta-600 rounded-lg px-3 text-pergaminho-100 placeholder:text-tinta-500 focus:border-indigo-400 focus:outline-none transition-colors"
              />
            </div>

            {/* Vínculo */}
            <div className="md:col-span-2 space-y-1.5">
              <label className="text-xs font-bold text-pergaminho-500 uppercase tracking-wider">Vínculo com objeto/perícia</label>
              <textarea 
                placeholder="Descreva o envolvimento desta pessoa com o objeto ou fato periciado"
                className="w-full min-h-[80px] bg-tinta-900 border border-tinta-600 rounded-lg p-3 text-pergaminho-100 placeholder:text-tinta-500 focus:border-indigo-400 focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Observação Idade */}
            <div className="md:col-span-2 flex items-start gap-2 py-2">
              <Info className="w-4 h-4 text-latao-400 shrink-0 mt-0.5" />
              <p className="text-[11px] text-pergaminho-500 leading-relaxed italic">
                A idade será calculada a partir da data de nascimento e da data de referência da perícia.
              </p>
            </div>

            {/* Botões do Painel */}
            <div className="md:col-span-2 flex items-center justify-end gap-3 pt-4 border-t border-tinta-600">
              <button 
                type="button"
                onClick={() => setIsPanelOpen(false)}
                className="px-4 py-2 text-sm font-medium text-pergaminho-300 hover:text-pergaminho-100 transition-colors"
              >
                Cancelar
              </button>
              <button 
                disabled
                className="px-4 py-2 bg-indigo-500 text-tinta-900 rounded-lg text-sm font-semibold opacity-50 cursor-not-allowed"
              >
                Adicionar pessoa
              </button>
            </div>
          </form>
        </div>
      )}

      {!isPanelOpen && (
        <div className="bg-tinta-800 border border-tinta-600 rounded-lg p-12 flex flex-col items-center justify-center text-center gap-4">
          <div className="w-12 h-12 rounded-full bg-tinta-700 flex items-center justify-center">
            <Users className="w-6 h-6 text-pergaminho-500" />
          </div>
          <div className="space-y-1">
            <p className="font-medium text-pergaminho-100">Nenhuma pessoa cadastrada</p>
            <p className="text-sm text-pergaminho-300 max-w-xs mx-auto">
              Registre as pessoas, papéis e vínculos envolvidos nesta perícia.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
