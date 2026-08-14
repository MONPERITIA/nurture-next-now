import { createFileRoute } from "@tanstack/react-router";
import { Mail, Inbox } from "lucide-react";

export const Route = createFileRoute("/convites")({
  component: Convites,
});

function Convites() {
  return (
    <div className="flex flex-col gap-6 pb-24 md:pb-6">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-semibold tracking-tight">Convites</h1>
        <p className="text-pergaminho-300 text-sm">Gerencie convites de colaboração e nomeações.</p>
      </header>

      <div className="flex border-b border-tinta-600">
        <button className="px-4 py-2 text-sm font-medium text-indigo-400 border-b-2 border-indigo-400">Recebidos</button>
        <button className="px-4 py-2 text-sm font-medium text-pergaminho-300 hover:text-pergaminho-100 transition-colors">Enviados</button>
      </div>

      <div className="bg-tinta-800 border border-tinta-600 rounded-lg p-12 flex flex-col items-center justify-center text-center gap-4">
        <div className="w-12 h-12 rounded-full bg-tinta-700 flex items-center justify-center">
          <Inbox className="w-6 h-6 text-pergaminho-500" />
        </div>
        <p className="text-pergaminho-300 text-sm">Nenhum convite recebido.</p>
      </div>
    </div>
  );
}
