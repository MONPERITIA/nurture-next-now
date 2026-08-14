import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Clock, MapPin, Navigation } from "lucide-react";

export const Route = createFileRoute("/pericias/$periciaId/")({
  component: PericiaVisaoGeral,
});

function PericiaVisaoGeral() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-6">
        <section className="bg-tinta-800 border border-tinta-600 rounded-lg p-6 space-y-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-indigo-400" />
            Checklist de andamento
          </h2>
          <div className="space-y-3">
            <CheckItem label="Informações preenchidas" checked={false} />
            <CheckItem label="Dados coletados" checked={false} />
            <CheckItem label="Pendências finalizadas" checked={false} />
          </div>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <section className="bg-tinta-800 border border-tinta-600 rounded-lg p-5 space-y-3">
            <h3 className="text-xs uppercase font-bold tracking-wider text-pergaminho-500">Prazo</h3>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-indigo-400" />
              <span className="text-pergaminho-100">---</span>
            </div>
          </section>
          
          <section className="bg-tinta-800 border border-tinta-600 rounded-lg p-5 space-y-3">
            <h3 className="text-xs uppercase font-bold tracking-wider text-pergaminho-500">Status</h3>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-pergaminho-500" />
              <span className="text-pergaminho-100">Preparação</span>
            </div>
          </section>
        </div>
      </div>

      <div className="space-y-6">
        <section className="bg-tinta-800 border border-tinta-600 rounded-lg p-6 space-y-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <MapPin className="w-5 h-5 text-indigo-400" />
            Local da visita
          </h2>
          <div className="text-pergaminho-300 text-sm">
            Endereço não informado
          </div>
          <button className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-tinta-700 border border-tinta-600 rounded-lg text-pergaminho-300 cursor-not-allowed opacity-60">
            <Navigation className="w-4 h-4" />
            Como chegar
          </button>
        </section>
      </div>
    </div>
  );
}

function CheckItem({ label, checked }: { label: string; checked: boolean }) {
  return (
    <div className="flex items-center gap-3 py-1">
      <div className={`w-5 h-5 rounded border ${checked ? 'bg-indigo-500 border-indigo-500' : 'border-tinta-500 bg-tinta-900'} flex items-center justify-center transition-colors`}>
        {checked && <CheckCircle2 className="w-3.5 h-3.5 text-tinta-900" />}
      </div>
      <span className={checked ? 'text-pergaminho-100' : 'text-pergaminho-300'}>{label}</span>
    </div>
  );
}
