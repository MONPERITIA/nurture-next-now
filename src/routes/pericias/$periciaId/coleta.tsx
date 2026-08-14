import { createFileRoute } from "@tanstack/react-router";
import { Mic, Type, Camera, FileSpreadsheet, Timer } from "lucide-react";

export const Route = createFileRoute("/pericias/$periciaId/coleta")({
  component: PericiaColeta,
});

function PericiaColeta() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Coleta em campo</h2>
        <div className="flex items-center gap-2 text-pergaminho-500 bg-tinta-800 px-3 py-1 rounded-full border border-tinta-600">
           <Timer className="w-4 h-4" />
           <span className="font-mono text-sm">00:00:00</span>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {/* Main Action - Gravar Entrevista */}
        <button 
          className="w-full aspect-video md:aspect-[21/9] bg-tinta-800 border-2 border-dashed border-tinta-600 rounded-xl flex flex-col items-center justify-center gap-4 cursor-not-allowed opacity-60 group"
          aria-label="Gravar entrevista"
          disabled
        >
          <div className="w-20 h-20 rounded-full bg-tinta-700 flex items-center justify-center">
             <Mic className="w-10 h-10 text-indigo-400" />
          </div>
          <div className="text-center">
             <p className="text-lg font-semibold text-pergaminho-100">Gravar entrevista</p>
             <p className="text-sm text-pergaminho-500">Gravação disponível em etapa posterior</p>
          </div>
        </button>

        {/* Secondary Actions Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           <ColetaButton icon={<Type className="w-6 h-6" />} label="Ditado de anotação" disabled />
           <ColetaButton icon={<Camera className="w-6 h-6" />} label="Fotos/documentos" disabled />
           <ColetaButton icon={<Type className="w-6 h-6" />} label="Digitação direta" disabled />
           <ColetaButton icon={<FileSpreadsheet className="w-6 h-6" />} label="Fichas estruturadas" disabled />
        </div>
      </div>
    </div>
  );
}

function ColetaButton({ icon, label, disabled }: { icon: React.ReactNode; label: string; disabled?: boolean }) {
  return (
    <button 
      disabled={disabled}
      className={`flex flex-col items-center justify-center gap-3 p-6 bg-tinta-800 border border-tinta-600 rounded-lg transition-colors min-h-[120px] ${disabled ? 'opacity-40 cursor-not-allowed' : 'hover:bg-tinta-700'}`}
    >
      <div className="text-pergaminho-300">
        {icon}
      </div>
      <span className="text-[10px] md:text-sm font-medium text-pergaminho-100">{label}</span>
    </button>
  );
}
