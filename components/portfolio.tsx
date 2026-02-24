"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Stethoscope, Wrench, Briefcase } from "lucide-react"
import { MotionWrapper, StaggerContainer, StaggerItem } from "@/components/motion-wrapper"

const WHATSAPP_LINK =
  "https://wa.me/5581973324911?text=Quero%20realizar%20um%20or%C3%A7amento"

const projects = [
  {
    title: "Landing Page",
    subtitle: "Profissional da Saude",
    description: "CTA WhatsApp + estrutura de conversao.",
    icon: Stethoscope,
    tags: ["Conversao", "WhatsApp", "Mobile"],
  },
  {
    title: "Landing Page",
    subtitle: "Servicos Locais",
    description: "Pagina rapida + foco em orcamento.",
    icon: Wrench,
    tags: ["Velocidade", "SEO", "CTA"],
  },
  {
    title: "Portfolio Profissional",
    subtitle: "Apresentacao pessoal",
    description: "Apresentacao limpa e objetiva do seu trabalho.",
    icon: Briefcase,
    tags: ["Design", "Responsivo", "Moderno"],
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 h-[400px] w-[400px] rounded-full bg-primary/3 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionWrapper variant="fade-up" className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Portfolio
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Aqui voce vai encontrar exemplos e projetos desenvolvidos por mim.
          </p>
        </MotionWrapper>

        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <StaggerItem key={project.title + project.subtitle}>
                <Card className="group h-full border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5">
                  <CardContent className="flex h-full flex-col p-6">
                    {/* Icon area as placeholder for project image */}
                    <div className="mb-5 flex h-40 items-center justify-center rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 transition-all duration-300 group-hover:from-primary/10 group-hover:to-primary/15">
                      <Icon className="h-12 w-12 text-primary/40 transition-all duration-300 group-hover:scale-110 group-hover:text-primary/60" />
                    </div>

                    <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">
                      {project.title}
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">
                      {project.subtitle}
                    </h3>
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    <div className="mb-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-border/50 bg-secondary/50 px-2.5 py-1 text-xs font-medium text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Button
                      asChild
                      variant="outline"
                      className="group/btn w-full gap-2 border-primary/20 transition-all hover:border-primary/40 hover:bg-primary/5"
                    >
                      <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                        Quero um projeto assim
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                      </Link>
                    </Button>
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
