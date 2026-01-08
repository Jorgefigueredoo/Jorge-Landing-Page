import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Code2, Gauge, Layout, MessageCircle, Smartphone } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Desenvolvedor Web
            </div>

            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Prazer! Eu sou <span className="text-primary">Jorge Figueredo</span>
            </h1>

            <p className="mb-8 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Desenvolvedor e criador de soluções web. Produzo{" "}
              <strong className="text-foreground">Landing Pages</strong> e{" "}
              <strong className="text-foreground">portfólios profissionais</strong> para negócios e profissionais de
              qualquer nicho que querem mais resultados com uma presença digital simples e objetiva.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="h-12 gap-2 text-base font-semibold" asChild>
                <Link
                  href="https://wa.me/5581973324911?text=Quero%20realizar%20um%20or%C3%A7amento"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  Solicitar Orçamento
                </Link>
              </Button>

              <Button size="lg" variant="outline" className="h-12 text-base font-semibold bg-transparent" asChild>
                <Link
                  href="https://www.instagram.com/_jorgeefigueredoo.dev?igsh=bW93MWdqMTZhcmR6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Instagram
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Diferencial Section */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Não é apenas "uma página bonita"
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              Eu construo uma página com <strong className="text-foreground">foco em conversão</strong>, pensada para
              guiar o visitante até a ação principal: entrar em contato, solicitar orçamento ou agendar um serviço.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <Card className="border-2 transition-shadow hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Layout className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">Estrutura Clara</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Layout enxuto e sem distrações, focado no que realmente importa para o seu negócio.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-shadow hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">CTA Estratégico</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Botões de ação fortes e posicionados estrategicamente para maximizar conversões.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-shadow hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Smartphone className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">Mobile-First</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Design 100% responsivo que funciona perfeitamente em qualquer dispositivo.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-shadow hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Gauge className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">Carregamento Rápido</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Otimização de performance para garantir uma experiência fluida ao usuário.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-shadow hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Code2 className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">100% Personalizado</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Cada projeto é único e desenvolvido especialmente para o seu negócio.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-shadow hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">Integração Direta</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Links diretos para WhatsApp, formulários e outros canais de contato.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* O que você recebe Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              O que você pode esperar do meu trabalho
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              Entrego soluções completas e profissionais para estabelecer sua presença digital
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:gap-6">
            {[
              "Landing Page 100% personalizada para sua profissão/negócio",
              "Design moderno e responsivo (mobile-first)",
              "CTA estratégico (WhatsApp, formulário, botões e links diretos)",
              "Estrutura enxuta, sem distrações, com foco no que vende",
              "Página rápida e organizada para melhorar a experiência do usuário",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-lg bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <p className="leading-relaxed text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="relative overflow-hidden bg-primary py-16 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary-foreground/10 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            Quer uma Landing Page que apresente seu serviço com clareza e gere mais contatos?
          </h2>

          <p className="mb-8 text-pretty text-lg leading-relaxed text-primary-foreground/90 sm:text-xl">
            É só me chamar. Vamos conversar sobre como posso ajudar o seu negócio a crescer.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" variant="secondary" className="h-12 gap-2 text-base font-semibold" asChild>
              <Link
                href="https://wa.me/5581973324911?text=Quero%20realizar%20um%20or%C3%A7amento"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                Falar no WhatsApp
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-12 border-2 border-primary-foreground/20 bg-transparent text-base font-semibold text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              asChild
            >
              <Link
                href="https://www.instagram.com/_jorgeefigueredoo.dev?igsh=bW93MWdqMTZhcmR6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Seguir no Instagram
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-8">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jorge Figueredo. Desenvolvedor de Landing Pages.
          </p>
        </div>
      </footer>
    </main>
  )
}
