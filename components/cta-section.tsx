"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, Instagram } from "lucide-react"
import { MotionWrapper } from "@/components/motion-wrapper"

const WHATSAPP_LINK =
  "https://wa.me/5581973324911?text=Quero%20realizar%20um%20or%C3%A7amento"

const INSTAGRAM_LINK =
  "https://www.instagram.com/_jorgeefigueredoo.dev?igsh=bW93MWdqMTZhcmR6"

export function CtaSection() {
  return (
    <section id="contato" className="relative overflow-hidden py-20 lg:py-28">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <MotionWrapper variant="fade-up">
          <div className="relative rounded-2xl border border-border/50 bg-card/50 p-8 text-center backdrop-blur-sm sm:p-12 lg:p-16">
            {/* Decorative gradient on border */}
            <div className="pointer-events-none absolute -inset-px -z-10 rounded-2xl bg-gradient-to-b from-primary/20 via-transparent to-primary/10 opacity-50" />

            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Quer uma landing page que apresente seu servico com clareza e gere mais contatos?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Vamos conversar e montar uma solucao sob medida para o seu negocio.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="group h-12 gap-2 text-base font-semibold" asChild>
                <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Falar no WhatsApp
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="group h-12 gap-2 text-base font-semibold"
                asChild
              >
                <Link href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                  Ver Instagram
                </Link>
              </Button>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  )
}
