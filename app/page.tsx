import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Benefits } from "@/components/benefits"
import { Deliverables } from "@/components/deliverables"
import { Portfolio } from "@/components/portfolio"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { WhatsAppFab } from "@/components/whatsapp-fab"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Benefits />
      <Deliverables />
      <Portfolio />
      <CtaSection />
      <Footer />
      <WhatsAppFab />
    </main>
  )
}
