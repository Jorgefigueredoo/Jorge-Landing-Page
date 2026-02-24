import Link from "next/link"

const WHATSAPP_LINK =
  "https://wa.me/5581973324911?text=Quero%20realizar%20um%20or%C3%A7amento"
const INSTAGRAM_LINK =
  "https://www.instagram.com/_jorgeefigueredoo.dev?igsh=bW93MWdqMTZhcmR6"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div>
            <Link href="#inicio" className="text-lg font-bold tracking-tight text-foreground">
              Jorge Figueredo<span className="text-primary">.</span>
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">
              Desenvolvedor Web
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              WhatsApp
            </Link>
            <Link
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              Instagram
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-border/30 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Jorge Figueredo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
