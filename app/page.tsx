import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  CheckCircle,
  CheckCircle2,
  Code2,
  Gauge,
  Layout,
  MessageCircle,
  Smartphone,
  Zap,
} from "lucide-react"
import { VideoPreview } from "@/components/video-preview"

const WHATSAPP_LINK =
  "https://wa.me/5581973324911?text=Quero%20realizar%20um%20or%C3%A7amento"

const INSTAGRAM_LINK =
  "https://www.instagram.com/_jorgeefigueredoo.dev?igsh=bW93MWdqMTZhcmR6"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">


      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Background suave */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
          <div className="absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-24 right-10 h-[360px] w-[360px] rounded-full bg-indigo-600/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 lg:px-8 lg:pt-24 lg:pb-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-sm text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Landing Pages • Portfólios • Conversão
              </div>

              <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Landing Pages que geram{" "}
                <span className="text-primary">contatos</span> no WhatsApp
              </h1>

              <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Eu sou <strong className="text-foreground">Jorge Figueredo</strong>. Crio páginas rápidas,
                responsivas e objetivas para transformar visitas em orçamento, agendamentos e mensagens.
              </p>

              {/* Micro benefícios */}
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

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="h-12 gap-2 text-base font-semibold" asChild>
                  <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    Solicitar orçamento <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 gap-2 bg-transparent text-base font-semibold"
                  asChild
                >
                  <Link href="#portfolio">
                    Ver portfólio <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">
                Respondo rápido no WhatsApp. Se preferir, posso enviar exemplos e valores.
              </p>
            </div>

            {/* Right: Preview */}
            <div className="relative">
              <Card className="border shadow-sm">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-foreground">
                      Preview do que você recebe
                    </div>
                    <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-700">
                      Conversão
                    </span>
                  </div>

                  {/* VÍDEO REAL */}
                  <VideoPreview />

                  {/* Benefícios */}
                  <div className="mt-6 grid gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                      CTA (WhatsApp/Orçamento) destacado
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                      Layout enxuto, sem distrações
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                      Seções claras + prova social + FAQ
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-6">
                    <Button asChild className="w-full gap-2">
                      <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                        Pedir orçamento no WhatsApp <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  {/* Mini cards */}
                  <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm">
                    <Card className="border bg-background py-3 shadow-none">
                      <div className="font-semibold text-foreground">Design</div>
                      <div className="text-muted-foreground">moderno</div>
                    </Card>
                    <Card className="border bg-background py-3 shadow-none">
                      <div className="font-semibold text-foreground">CTA</div>
                      <div className="text-muted-foreground">estratégico</div>
                    </Card>
                    <Card className="border bg-background py-3 shadow-none">
                      <div className="font-semibold text-foreground">Foco</div>
                      <div className="text-muted-foreground">conversão</div>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAL */}
      <section className="border-t bg-muted/20 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Não é só uma página bonita. É uma página que{" "}
              <span className="text-primary">converte</span>.
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              Eu construo uma página com <strong className="text-foreground">foco em conversão</strong>, pensada para
              guiar o visitante até a ação principal: entrar em contato, solicitar orçamento ou agendar um serviço.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <Card className="border transition-all hover:-translate-y-0.5 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Layout className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">Estrutura clara</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Layout enxuto e sem distrações, focado no que realmente importa para o seu negócio.
                </p>
              </CardContent>
            </Card>

            <Card className="border transition-all hover:-translate-y-0.5 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-700">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">CTA estratégico</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Botões de ação fortes e posicionados estrategicamente para maximizar conversões.
                </p>
              </CardContent>
            </Card>

            <Card className="border transition-all hover:-translate-y-0.5 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Smartphone className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">Mobile-first</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Design responsivo que funciona perfeitamente em qualquer dispositivo.
                </p>
              </CardContent>
            </Card>

            <Card className="border transition-all hover:-translate-y-0.5 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-700">
                  <Gauge className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">Carregamento rápido</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Otimização de performance para garantir uma experiência fluida ao usuário.
                </p>
              </CardContent>
            </Card>

            <Card className="border transition-all hover:-translate-y-0.5 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Code2 className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">100% personalizado</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Cada projeto é único e desenvolvido especialmente para o seu negócio.
                </p>
              </CardContent>
            </Card>

            <Card className="border transition-all hover:-translate-y-0.5 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-700">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">Integração direta</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Links diretos para WhatsApp, formulários e outros canais de contato.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ RECEBE */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              O que você pode esperar do meu trabalho
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              Soluções completas e profissionais para fortalecer sua presença digital.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:gap-6">
            {[
              "Landing page 100% personalizada para sua profissão/negócio",
              "Design moderno e responsivo (mobile-first)",
              "CTA estratégico (WhatsApp, formulário, botões e links diretos)",
              "Estrutura enxuta, sem distrações, com foco no que vende",
              "Página rápida e organizada para melhorar a experiência do usuário",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-lg border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                </div>
                <p className="leading-relaxed text-foreground">{item}</p>
              </div>
            ))}
          </div>

          {/* PORTFÓLIO (ancora) */}
          <div id="portfolio" className="mt-16">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Portfólio
              </h2>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                Aqui você vai encontrar exemplos e projetos desenvolvidos por mim.
              </p>
            </div>

            {/* Cards placeholder - substitua pelos seus projetos */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Landing Page • Profissional da Saúde", desc: "CTA WhatsApp + estrutura de conversão." },
                { title: "Landing Page • Serviços Locais", desc: "Página rápida + foco em orçamento." },
                { title: "Portfólio Profissional", desc: "Apresentação limpa e objetiva do seu trabalho." },
              ].map((p) => (
                <Card key={p.title} className="border transition-all hover:-translate-y-0.5 hover:shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                    <div className="mt-5">
                      <Button asChild variant="outline" className="w-full bg-transparent">
                        <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                          Quero um projeto assim <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden border-t py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-zinc-900 to-neutral-900">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary-foreground/10 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            Quer uma landing page que apresente seu serviço com clareza e gere mais contatos?
          </h2>

          <p className="mb-8 text-pretty text-lg leading-relaxed text-primary-foreground/90 sm:text-xl">
            Vamos conversar e montar uma solução sob medida para o seu negócio.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" variant="secondary" className="h-12 gap-2 text-base font-semibold" asChild>
              <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Falar no WhatsApp
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-12 border border-primary-foreground/25 bg-transparent text-base font-semibold text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              asChild
            >
              <Link href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
                Ver Instagram
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
