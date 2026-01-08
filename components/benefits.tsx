// components/benefits.tsx
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const items = [
  { title: "Objetivo claro", desc: "A página guia o visitante para uma ação: WhatsApp, orçamento ou agendamento." },
  { title: "Sem distrações", desc: "Estrutura direta, com seções essenciais e CTA visível." },
  { title: "Pronta pro celular", desc: "Mobile-first, carregamento leve e experiência fluida." },
];

export function Benefits() {
  return (
    <section className="border-t bg-muted/20">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          Não é só uma página bonita. É uma página que <span className="text-blue-700">converte</span>.
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Eu construo landing pages pensadas para transformar visitas em contatos, com clareza e CTA forte.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {items.map((it) => (
            <Card key={it.title} className="p-5">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                <div>
                  <div className="font-semibold">{it.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{it.desc}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
