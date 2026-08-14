import { createFileRoute } from "@tanstack/react-router";
import { Mail, Inbox, Send, Info, Lock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/convites")({
  component: Convites,
});

function Convites() {
  const [tab, setTab] = useState<"recebidos" | "enviados">("recebidos");

  return (
    <div className="flex flex-col gap-6 pb-24 md:pb-6 max-w-4xl">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-serif tracking-tight text-pergaminho-100 uppercase">Convites</h1>
        <p className="text-pergaminho-400 text-sm font-sans italic">Gerencie convites de parceria vinculados às perícias.</p>
      </header>

      {/* Tabs */}
      <div className="flex border-b border-tinta-700">
        <button 
          onClick={() => setTab("recebidos")}
          className={`px-6 py-3 text-sm font-medium transition-colors font-sans uppercase tracking-wider ${
            tab === "recebidos" 
              ? "text-indigo-400 border-b-2 border-indigo-500 bg-tinta-800/50" 
              : "text-pergaminho-500 hover:text-pergaminho-300"
          }`}
        >
          Recebidos
        </button>
        <button 
          onClick={() => setTab("enviados")}
          className={`px-6 py-3 text-sm font-medium transition-colors font-sans uppercase tracking-wider ${
            tab === "enviados" 
              ? "text-indigo-400 border-b-2 border-indigo-500 bg-tinta-800/50" 
              : "text-pergaminho-500 hover:text-pergaminho-300"
          }`}
        >
          Enviados
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          {/* Empty State Section */}
          <div className="bg-tinta-800/40 border border-tinta-700 rounded-[6px] p-12 flex flex-col items-center justify-center text-center gap-4">
            <div className="w-14 h-14 rounded-full bg-tinta-700/50 flex items-center justify-center border border-tinta-600">
              {tab === "recebidos" ? (
                <Inbox className="w-7 h-7 text-pergaminho-500" />
              ) : (
                <Send className="w-7 h-7 text-pergaminho-500" />
              )}
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-pergaminho-200 font-sans font-medium">
                {tab === "recebidos" ? "Nenhum convite recebido." : "Nenhum convite enviado."}
              </h3>
              <p className="text-pergaminho-500 text-sm font-sans italic">
                {tab === "recebidos" 
                  ? "Convites de parceria vinculados às perícias aparecerão aqui." 
                  : "Os convites enviados a partir de uma perícia aparecerão aqui."}
              </p>
            </div>
          </div>

          {/* Structure Preview Section */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xs font-sans uppercase tracking-[0.2em] text-brass/70 border-b border-tinta-800 pb-2">
              Informações de um convite
            </h2>
            <div className="bg-tinta-800/30 border border-tinta-700/50 rounded-[6px] p-6 flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                <InfoItem label="Perícia" value="—" />
                <InfoItem label="Nome de quem convidou" value="—" />
                <InfoItem label="Profissão" value="—" />
                <InfoItem label="Conselho / UF / número" value="—" />
                <InfoItem label="E-mail" value="—" />
                <InfoItem label="Telefone (quando disponibilizado)" value="—" />
                <InfoItem label="Situação" value="—" />
              </div>

              <div className="flex flex-col gap-3 pt-4 border-t border-tinta-800">
                <div className="flex flex-wrap gap-3">
                  <button 
                    disabled 
                    className="px-6 py-2 bg-indigo-900/20 text-indigo-400/50 border border-indigo-900/30 rounded-[6px] text-sm font-medium font-sans uppercase tracking-widest cursor-not-allowed"
                  >
                    Aceitar
                  </button>
                  <button 
                    disabled 
                    className="px-6 py-2 bg-tinta-700/30 text-pergaminho-500 border border-tinta-600 rounded-[6px] text-sm font-medium font-sans uppercase tracking-widest cursor-not-allowed"
                  >
                    Recusar
                  </button>
                </div>
                <p className="text-[10px] text-pergaminho-600 font-sans italic">
                  As ações serão habilitadas quando houver um convite real.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar Info Area */}
        <aside className="flex flex-col gap-6">
          {/* Partnership Rules */}
          <section className="bg-tinta-900/50 border border-indigo-900/20 rounded-[6px] p-5 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-indigo-400">
              <Info size={16} />
              <h3 className="text-xs font-sans uppercase tracking-widest font-semibold">Regras de Parceria</h3>
            </div>
            <ul className="flex flex-col gap-3">
              <RuleItem text="Cada convite é vinculado a uma perícia específica." />
              <RuleItem text="A V1 permite no máximo dois profissionais na mesma perícia." />
              <RuleItem text="O destinatário aceita ou recusa o convite; não há aprovação central da parceria." />
            </ul>
          </section>

          {/* Privacy Note */}
          <section className="flex items-start gap-3 p-4 border border-tinta-800 rounded-[6px] bg-tinta-800/20">
            <Lock size={14} className="text-brass shrink-0 mt-0.5" />
            <p className="text-[11px] text-pergaminho-400 font-sans leading-relaxed">
              Gravações, transcrições integrais e anotações pessoais permanecem privadas por padrão.
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[10px] uppercase tracking-wider text-pergaminho-600 font-sans">{label}</span>
      <span className="text-sm text-pergaminho-300 font-sans">{value}</span>
    </div>
  );
}

function RuleItem({ text }: { text: string }) {
  return (
    <li className="flex gap-2 text-[11px] text-pergaminho-400 font-sans leading-snug">
      <span className="text-indigo-500 mt-1">•</span>
      <span>{text}</span>
    </li>
  );
}
