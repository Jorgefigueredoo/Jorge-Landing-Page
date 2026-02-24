"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Smartphone,
  Zap,
} from "lucide-react"
import { motion } from "framer-motion"
import { VideoPreview } from "@/components/video-preview"

const WHATSAPP_LINK =
  "https://wa.me/5581973324911?text=Quero%20realizar%20um%20or%C3%A7amento"

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/3 h-[500px] w-[500px] rounded-full bg-primary/8 blur-[120px]" />
        <div className="absolute -bottom-32 right-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/3 blur-[80px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              Landing Pages &bull; Portfolios &bull; Conversao
            </div>

            <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Landing Pages que geram{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                contatos
              </span>{" "}
              no WhatsApp
            </h1>

            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Eu sou <strong className="text-foreground">Jorge Figueredo</strong>. Crio paginas rapidas,
              responsivas e objetivas para transformar visitas em orcamento, agendamentos e mensagens.
            </p>

            {/* Micro benefits */}
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10">
                  <Zap className="h-3.5 w-3.5 text-primary" />
                </div>
                Pagina rapida
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10">
                  <Smartphone className="h-3.5 w-3.5 text-primary" />
                </div>
                Mobile-first
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10">
                  <MessageCircle className="h-3.5 w-3.5 text-primary" />
                </div>
                CTA forte
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="group h-12 gap-2 text-base font-semibold" asChild>
                <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Solicitar orcamento
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="group h-12 gap-2 text-base font-semibold"
                asChild
              >
                <Link href="#portfolio">
                  Ver portfolio
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>

            <p className="mt-5 text-sm text-muted-foreground">
              Respondo rapido no WhatsApp. Se preferir, posso enviar exemplos e valores.
            </p>
          </motion.div>

          {/* Right: Preview card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <Card className="overflow-hidden border-border/50 bg-card/80 shadow-2xl shadow-primary/5 backdrop-blur-sm">
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-foreground">
                    Preview do que voce recebe
                  </div>
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                    Conversao
                  </span>
                </div>

                <VideoPreview />

                <div className="mt-5 flex flex-col gap-2.5 text-sm">
                  {[
                    "CTA (WhatsApp/Orcamento) destacado",
                    "Layout enxuto, sem distracoes",
                    "Secoes claras + prova social + FAQ",
                  ].map((text) => (
                    <div key={text} className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5">
                  <Button asChild className="group w-full gap-2">
                    <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      Pedir orcamento no WhatsApp
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </Button>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm">
                  {[
                    { label: "Design", value: "moderno" },
                    { label: "CTA", value: "estrategico" },
                    { label: "Foco", value: "conversao" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-lg border border-border/50 bg-background/50 px-3 py-2.5"
                    >
                      <div className="font-semibold text-foreground">{item.label}</div>
                      <div className="text-xs text-muted-foreground">{item.value}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
