import { createFileRoute } from "@tanstack/react-router";
import { User, Briefcase, BadgeCheck, Map, Mail, Phone, PenTool, FileStack } from "lucide-react";

export const Route = createFileRoute("/perfil")({
  component: Perfil,
});

function Perfil() {
  return (
    <div className="flex flex-col gap-8 pb-24 md:pb-6">
      <header className="flex items-center gap-4">
        <div className="w-20 h-20 rounded-full bg-tinta-800 border border-tinta-600 flex items-center justify-center">
          <User className="w-10 h-10 text-pergaminho-500" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold">Perfil Profissional</h1>
          <p className="text-pergaminho-300 text-sm">Visualize e edite seus dados de cadastro.</p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="bg-tinta-800 border border-tinta-600 rounded-lg p-6 space-y-4">
          <h2 className="text-lg font-medium flex items-center gap-2 border-b border-tinta-600 pb-2 mb-4">
            <User className="w-4 h-4 text-indigo-400" />
            Dados Pessoais
          </h2>
          
          <div className="space-y-4 text-sm">
            <div className="flex flex-col gap-1">
              <span className="text-pergaminho-500 uppercase text-[10px] font-bold tracking-wider">Nome Profissional</span>
              <p className="text-pergaminho-100 font-medium">—</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-pergaminho-500 uppercase text-[10px] font-bold tracking-wider">E-mail</span>
              <p className="text-pergaminho-100 font-medium">—</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-pergaminho-500 uppercase text-[10px] font-bold tracking-wider">Telefone (Opcional)</span>
              <p className="text-pergaminho-100 font-medium">—</p>
            </div>
          </div>
        </section>

        <section className="bg-tinta-800 border border-tinta-600 rounded-lg p-6 space-y-4">
          <h2 className="text-lg font-medium flex items-center gap-2 border-b border-tinta-600 pb-2 mb-4">
            <Briefcase className="w-4 h-4 text-indigo-400" />
            Registro Profissional
          </h2>
          
          <div className="space-y-4 text-sm">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-pergaminho-500 uppercase text-[10px] font-bold tracking-wider">Profissão</span>
                <p className="text-pergaminho-100 font-medium">—</p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-pergaminho-500 uppercase text-[10px] font-bold tracking-wider">Conselho</span>
                <p className="text-pergaminho-100 font-medium">—</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-pergaminho-500 uppercase text-[10px] font-bold tracking-wider">UF</span>
                <p className="text-pergaminho-100 font-medium">—</p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-pergaminho-500 uppercase text-[10px] font-bold tracking-wider">Registro</span>
                <p className="text-pergaminho-100 font-medium">—</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-tinta-800 border border-tinta-600 rounded-lg p-6 space-y-4">
          <h2 className="text-lg font-medium flex items-center gap-2 border-b border-tinta-600 pb-2 mb-4">
            <PenTool className="w-4 h-4 text-indigo-400" />
            Assinatura visual cadastrada
          </h2>
          <div className="aspect-video rounded border border-dashed border-tinta-600 flex items-center justify-center bg-tinta-900">
            <p className="text-xs text-pergaminho-500">Nenhuma assinatura visual cadastrada</p>
          </div>
        </section>

        <section className="bg-tinta-800 border border-tinta-600 rounded-lg p-6 space-y-4">
          <h2 className="text-lg font-medium flex items-center gap-2 border-b border-tinta-600 pb-2 mb-4">
            <FileStack className="w-4 h-4 text-indigo-400" />
            Modelos Particulares
          </h2>
          <div className="flex flex-col items-center justify-center py-4 gap-2">
            <FileStack className="w-8 h-8 text-tinta-600" />
            <p className="text-xs text-pergaminho-500">Nenhum modelo cadastrado</p>
          </div>
        </section>
      </div>
    </div>
  );
}
