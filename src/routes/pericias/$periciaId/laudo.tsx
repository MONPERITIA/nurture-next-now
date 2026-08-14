import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText, History, Layout, Settings } from "lucide-react";

export const Route = createFileRoute("/pericias/$periciaId/laudo")({
  component: PericiaLaudo,
});

function PericiaLaudo() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Laudo Pericial</h2>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-tinta-700 border border-tinta-600 text-pergaminho-500 rounded-lg text-sm font-semibold cursor-not-allowed opacity-50">
            <Download className="w-4 h-4" />
            Exportar
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Document Editor Area (Conceptual) */}
        <div className="flex-1 bg-tinta-800 border border-tinta-600 rounded-lg min-h-[600px] p-12 flex flex-col items-center justify-center text-center gap-4">
           <FileText className="w-12 h-12 text-tinta-700" />
           <div className="space-y-1">
              <p className="text-pergaminho-300">Aguardando preenchimento da perícia...</p>
              <p className="text-xs text-pergaminho-500 italic">O laudo será estruturado a partir das coletas e análises.</p>
           </div>
        </div>

        {/* Side Panel (Conceptual) */}
        <div className="w-full lg:w-72 space-y-4">
           <section className="bg-tinta-800 border border-tinta-600 rounded-lg p-4 space-y-4">
              <h3 className="text-xs uppercase font-bold tracking-wider text-pergaminho-500">Opções do Laudo</h3>
              <div className="space-y-2">
                 <SideAction icon={<Layout className="w-4 h-4" />} label="Modelos" />
                 <SideAction icon={<History className="w-4 h-4" />} label="Versões" />
                 <SideAction icon={<Settings className="w-4 h-4" />} label="Configurações" />
              </div>
           </section>

           <div className="p-4 border border-tinta-600 rounded-lg bg-tinta-950/50">
              <p className="text-[10px] text-pergaminho-500 leading-tight">
                 Finalização requer <span className="text-pergaminho-300">assinatura visual cadastrada</span> no perfil.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
}

function SideAction({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-pergaminho-300 hover:bg-tinta-700 rounded transition-colors">
      {icon}
      {label}
    </button>
  );
}
