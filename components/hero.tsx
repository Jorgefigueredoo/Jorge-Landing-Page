// components/hero.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Smartphone, Zap, MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* background suave */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute -bottom-24 right-10 h-[360px] w-[360px] rounded-full bg-indigo-600/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Landing Pages • Portfólios • Conversão
            </div>

            <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
              Landing Pages que geram <span className="text-blue-700">contatos</span> no WhatsApp
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Eu sou <span className="font-semibold text-foreground">Jorge Figueredo</span>. Crio páginas rápidas,
              responsivas e objetivas para transformar visitas em orçamento, agendamentos e mensagens.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link href="https://wa.me/5581973324911?text=Quero%20realizar%20um%20or%C3%A7amento">
                  Solicitar orçamento <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline" className="gap-2">
                <Link href="#portfolio">
                  Ver portfólio <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-6 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-emerald-600" />
                Página rápida
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="h-4 w-4 text-emerald-600" />
                Mobile-first
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-emerald-600" />
                CTA forte
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <Card className="p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Preview do projeto</div>
                <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-700">
                  Conversão
                </span>
              </div>

              {/* “mockup” simples */}
              <div className="mt-4 rounded-xl border bg-muted/40 p-4">
                <div className="h-3 w-24 rounded bg-muted" />
                <div className="mt-3 space-y-2">
                  <div className="h-3 w-full rounded bg-muted" />
                  <div className="h-3 w-5/6 rounded bg-muted" />
                  <div className="h-3 w-4/6 rounded bg-muted" />
                </div>

                <div className="mt-5 grid gap-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    Botão WhatsApp destacado
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    Seções objetivas e claras
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    Prova social + FAQ
                  </div>
                </div>

                <div className="mt-5">
                  <Button asChild className="w-full gap-2">
                    <Link href="https://wa.me/5581973324911?text=Quero%20realizar%20um%20or%C3%A7amento">
                      Pedir orçamento no WhatsApp <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>

            <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm">
              <Card className="py-3">
                <div className="font-semibold">Design</div>
                <div className="text-muted-foreground">moderno</div>
              </Card>
              <Card className="py-3">
                <div className="font-semibold">CTA</div>
                <div className="text-muted-foreground">estratégico</div>
              </Card>
              <Card className="py-3">
                <div className="font-semibold">Foco</div>
                <div className="text-muted-foreground">conversão</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
