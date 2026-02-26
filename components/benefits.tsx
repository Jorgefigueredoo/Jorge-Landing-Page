"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Layout,
  CheckCircle,
  Smartphone,
  Gauge,
  Code2,
  MessageCircle,
} from "lucide-react"
import { MotionWrapper, StaggerContainer, StaggerItem } from "@/components/motion-wrapper"

const benefits = [
  {
    icon: Layout,
    title: "Estrutura clara",
    description: "Layout enxuto e sem distracoes, focado no que realmente importa para o seu negocio.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: CheckCircle,
    title: "CTA estrategico",
    description: "Botoes de acao fortes e posicionados estrategicamente para maximizar conversoes.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Smartphone,
    title: "Mobile-first",
    description: "Design responsivo que funciona perfeitamente em qualquer dispositivo.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Gauge,
    title: "Carregamento rapido",
    description: "Otimização de performance para garantir uma experiencia fluida ao usuario.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Code2,
    title: "100% personalizado",
    description: "Cada projeto e unico e desenvolvido especialmente para o seu negocio.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: MessageCircle,
    title: "Integracao direta",
    description: "Links diretos para WhatsApp, formulários e outros canais de contato.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="relative py-20 lg:py-28">
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-primary/3 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionWrapper variant="fade-up" className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Nao e so uma pagina bonita. E uma pagina que{" "}
            <span className="text-primary">converte</span>.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Eu construo uma pagina com{" "}
            <strong className="text-foreground">foco em conversao</strong>, pensada para guiar o visitante
            ate a acao principal: entrar em contato, solicitar orcamento ou agendar um servico.
          </p>
        </MotionWrapper>

        <StaggerContainer className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <StaggerItem key={benefit.title}>
                <Card className="group h-full border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5">
                  <CardContent className="p-6">
                    <div
                      className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${benefit.bg} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className={`h-5 w-5 ${benefit.color}`} />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">{benefit.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
