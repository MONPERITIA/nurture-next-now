import { createFileRoute } from "@tanstack/react-router";
import { Mic, Type, Camera, FileSpreadsheet, Timer, ShieldCheck, Info, WifiOff } from "lucide-react";

export const Route = createFileRoute("/pericias/$periciaId/coleta")({
  component: PericiaColeta,
});

function PericiaColeta() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* 1. CABEÇALHO */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-serif text-pergaminho-100">Coleta em campo</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-pergaminho-300 bg-tinta-900/50 px-4 py-2 rounded-md border border-tinta-700">
             <Timer className="w-4 h-4" />
             <span className="font-mono text-lg tracking-wider" aria-label="Cronômetro">00:00:00</span>
          </div>
          <span className="text-sm text-pergaminho-500 font-medium italic">
            Gravação não iniciada
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* 2. CONSENTIMENTO */}
          <section className="bg-tinta-800/40 border border-tinta-700 rounded-[6px] p-6 space-y-6">
            <div className="flex items-center gap-2 border-b border-tinta-700 pb-3">
              <ShieldCheck className="w-5 h-5 text-indigo-400" />
              <h3 className="font-serif text-lg text-pergaminho-100">Consentimento para gravação</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-pergaminho-500 font-semibold">Pessoa</span>
                <p className="text-pergaminho-300">—</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-pergaminho-500 font-semibold">Aceite explícito</span>
                <p className="text-pergaminho-300">Não registrado</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-pergaminho-500 font-semibold">Data e hora</span>
                <p className="text-pergaminho-300">—</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-pergaminho-500 font-semibold">Consentimento verbal na gravação</span>
                <p className="text-pergaminho-300">Não registrado</p>
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <p className="text-xs text-pergaminho-500 italic">
                “O consentimento deverá ser registrado antes de iniciar uma gravação.”
              </p>
              <p className="text-xs text-pergaminho-500/80 border-t border-tinta-700/50 pt-2">
                “O formato de consentimento deverá ser validado antes do uso com dados reais.”
              </p>
            </div>
          </section>

          {/* 3. GRAVAÇÃO */}
          <section className="space-y-4">
            <button 
              className="w-full aspect-video md:aspect-[21/9] bg-tinta-800 border-2 border-dashed border-tinta-600 rounded-[6px] flex flex-col items-center justify-center gap-6 cursor-not-allowed opacity-60 group outline-offset-4 focus-visible:outline-2 focus-visible:outline-indigo-500 transition-opacity"
              aria-label="Gravar entrevista"
              disabled
            >
              <div className="w-24 h-24 rounded-full bg-tinta-700 flex items-center justify-center border border-tinta-600 group-hover:bg-tinta-600 transition-colors">
                 <Mic className="w-12 h-12 text-indigo-400" />
              </div>
              <div className="text-center space-y-2 px-4">
                 <p className="text-xl font-semibold text-pergaminho-100">Gravar entrevista</p>
                 <p className="text-sm text-pergaminho-500 bg-tinta-900/40 px-3 py-1 rounded">
                   Gravação disponível em etapa funcional posterior.
                 </p>
              </div>
            </button>
          </section>

          {/* 4. OUTRAS FORMAS DE COLETA */}
          <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
             <ColetaButton icon={<Mic className="w-6 h-6" />} label="Ditado de anotação" />
             <ColetaButton icon={<Camera className="w-6 h-6" />} label="Fotos/documentos" />
             <ColetaButton icon={<Type className="w-6 h-6" />} label="Digitação direta" />
             <ColetaButton icon={<FileSpreadsheet className="w-6 h-6" />} label="Fichas estruturadas" />
          </section>
        </div>

        <div className="space-y-6">
          {/* 5. PRIVACIDADE */}
          <section className="bg-tinta-800/30 border border-tinta-700 rounded-[6px] p-5 space-y-3">
            <div className="flex items-center gap-2 text-indigo-400/80">
              <ShieldCheck className="w-4 h-4" />
              <h4 className="font-semibold text-sm tracking-tight">Privacidade da coleta</h4>
            </div>
            <p className="text-xs text-pergaminho-300 leading-relaxed">
              “Gravações, transcrições integrais e anotações pessoais permanecem privadas por padrão.”
            </p>
          </section>

          {/* 6. OPERAÇÃO OFFLINE */}
          <section className="bg-tinta-800/30 border border-tinta-700 rounded-[6px] p-5 space-y-3">
            <div className="flex items-center gap-2 text-pergaminho-300">
              <WifiOff className="w-4 h-4" />
              <h4 className="font-semibold text-sm tracking-tight">Uso em campo</h4>
            </div>
            <p className="text-xs text-pergaminho-300 leading-relaxed">
              “A operação offline e a sincronização serão habilitadas e validadas em etapa funcional posterior.”
            </p>
          </section>

          {/* Ajuda/Info discreto */}
          <div className="p-5 flex gap-3 text-pergaminho-500/60 bg-tinta-900/20 rounded-[6px] border border-tinta-800/50">
            <Info className="w-4 h-4 shrink-0 mt-0.5" />
            <p className="text-[11px] leading-normal italic">
              Esta interface representa o ambiente de captura em tempo real. Todos os controles estão desabilitados durante esta fase de construção visual.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ColetaButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button 
      disabled
      className="flex flex-col items-center justify-center gap-4 p-6 bg-tinta-800 border border-tinta-600 rounded-[6px] opacity-40 cursor-not-allowed min-h-[140px] w-full text-center outline-offset-4 focus-visible:outline-2 focus-visible:outline-indigo-500"
    >
      <div className="text-indigo-400/70">
        {icon}
      </div>
      <span className="text-xs font-medium text-pergaminho-300 tracking-tight leading-tight">{label}</span>
    </button>
  );
}
