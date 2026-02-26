"use client"

import { CheckCircle } from "lucide-react"
import { MotionWrapper, StaggerContainer, StaggerItem } from "@/components/motion-wrapper"

const items = [
  "Sites 100% personalizados para sua profissão/negócio",
  "Design moderno e responsivo (mobile-first)",
  "CTA estratégico (WhatsApp, formulário, botões e links diretos)",
  "Estrutura enxuta, sem distrações, com foco no que vende",
  "Página rápida e organizada para melhorar a experiência do usuário",
]

export function Deliverables() {
  return (
    <section id="entregas" className="relative py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 h-[350px] w-[350px] rounded-full bg-primary/3 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionWrapper variant="fade-up" className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            O que voce pode esperar do meu trabalho
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Solucoes completas e profissionais para fortalecer sua presenca digital.
          </p>
        </MotionWrapper>

        <StaggerContainer className="mx-auto mt-12 flex max-w-3xl flex-col gap-3" staggerDelay={0.1}>
          {items.map((item, index) => (
            <StaggerItem key={index}>
              <div className="group flex items-start gap-4 rounded-xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-card/80 hover:shadow-md hover:shadow-primary/5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <p className="pt-1 leading-relaxed text-foreground">{item}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
