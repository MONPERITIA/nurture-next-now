import { createFileRoute } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MONPERIT IA" },
      { name: "description", content: "Inteligência Artificial de alto desempenho para análise e gestão." },
      { property: "og:title", content: "MONPERIT IA" },
      { property: "og:description", content: "Inteligência Artificial de alto desempenho para análise e gestão." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center p-6 bg-[#0E1420] selection:bg-[#8AA0E8]/30">
      <div className="w-full max-w-lg space-y-12 text-center">
        {/* Branding */}
        <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#E8E4DA] font-serif">
            MONPERIT IA
          </h1>
          <div className="h-0.5 w-12 bg-[#C89B5A] mx-auto opacity-80" />
        </div>

        {/* Presentation */}
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          <p className="text-lg md:text-xl text-[#A8AEBC] leading-relaxed font-sans max-w-md mx-auto">
            Inteligência Artificial de alto desempenho para análise estratégica e gestão de dados complexos.
          </p>
        </div>

        {/* Entry Indication */}
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <button 
            disabled
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[#18202E] border border-[#2A354A] rounded-lg text-[#8AA0E8] font-medium transition-all duration-300 opacity-80 cursor-default"
          >
            <span>Acessar Plataforma</span>
            <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-lg bg-[#8AA0E8]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          
          <p className="mt-4 text-xs text-[#A8AEBC]/60 font-mono tracking-widest uppercase">
            Ambiente Seguro
          </p>
        </div>
      </div>

      {/* Footer detail */}
      <footer className="absolute bottom-8 text-[10px] text-[#A8AEBC]/40 font-mono tracking-tighter uppercase">
        © 2026 MONPERIT SYSTEMS
      </footer>
    </div>
  );
}
