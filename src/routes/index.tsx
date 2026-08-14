import { createFileRoute } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MONPERIT IA" },
      { name: "description", content: "Aplicativo multiprofissional para coleta, organização, redação e finalização de laudos e pareceres técnicos." },
      { property: "og:title", content: "MONPERIT IA" },
      { property: "og:description", content: "Aplicativo multiprofissional para coleta, organização, redação e finalização de laudos e pareceres técnicos." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center p-6 bg-background selection:bg-primary/30">
      <div className="w-full max-w-lg space-y-12 text-center">
        {/* Branding */}
        <div className="space-y-2 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground font-serif">
            MONPERIT IA
          </h1>
          <div className="h-0.5 w-12 bg-brass mx-auto opacity-80" />
        </div>

        {/* Presentation */}
        <div className="space-y-6 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-1000 motion-safe:delay-200">
          <p className="text-lg md:text-xl text-secondary-foreground leading-relaxed font-sans max-w-md mx-auto">
            Aplicativo multiprofissional para coleta, organização, redação e finalização de laudos e pareceres técnicos.
          </p>
        </div>

        {/* Entry Indication */}
        <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-8 motion-safe:duration-1000 motion-safe:delay-500">
          <button 
            disabled
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-card border border-border rounded-lg text-primary font-medium transition-all duration-300 opacity-80 cursor-default"
          >
            <span>Acessar Plataforma</span>
            <ChevronRight className="w-4 h-4 transition-transform duration-300 motion-safe:group-hover:translate-x-1" />
            
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 motion-safe:group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </div>
    </div>
  );
}
