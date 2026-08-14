import { createFileRoute } from "@tanstack/react-router";
import { Calendar, User, FileText, MapPin, Hash } from "lucide-react";

export const Route = createFileRoute("/nova-pericia")({
  component: NovaPericia,
});

function NovaPericia() {
  return (
    <div className="flex flex-col gap-6 pb-24 md:pb-6">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-semibold tracking-tight">Nova Perícia</h1>
        <p className="text-pergaminho-300 text-sm">Preencha os dados básicos para preparar a perícia.</p>
      </header>

      <div className="bg-tinta-800 border border-tinta-600 rounded-lg p-6 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-pergaminho-300 flex items-center gap-2">
              <Hash className="w-4 h-4" />
              Número do processo
            </label>
            <input 
              type="text" 
              placeholder="0000000-00.0000.0.00.0000"
              className="w-full bg-tinta-900 border border-tinta-600 rounded-lg py-2.5 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-400"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-pergaminho-300 flex items-center gap-2">
              <User className="w-4 h-4" />
              Pessoas / Envolvidos
            </label>
            <input 
              type="text" 
              placeholder="Nomes das pessoas envolvidas"
              className="w-full bg-tinta-900 border border-tinta-600 rounded-lg py-2.5 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-400"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-pergaminho-300 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Tipo de perícia ou modelo
            </label>
            <select className="w-full bg-tinta-900 border border-tinta-600 rounded-lg py-2.5 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-400 appearance-none">
              <option value="">Selecione um modelo...</option>
              <option value="estudo-social">Estudo social</option>
              <option value="psicologico">Laudo psicológico</option>
              <option value="psicossocial">Laudo psicossocial</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-pergaminho-300 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Prazo
              </label>
              <input 
                type="date" 
                className="w-full bg-tinta-900 border border-tinta-600 rounded-lg py-2.5 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-400"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-pergaminho-300 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Local / Endereço
              </label>
              <input 
                type="text" 
                placeholder="Endereço da diligência"
                className="w-full bg-tinta-900 border border-tinta-600 rounded-lg py-2.5 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-400"
              />
            </div>
          </div>
        </div>

        <button 
          disabled
          className="w-full bg-indigo-400/50 text-tinta-900 font-medium py-3 rounded-lg cursor-not-allowed transition-colors"
        >
          Criar Perícia
        </button>
      </div>
    </div>
  );
}
