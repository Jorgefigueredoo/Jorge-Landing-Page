"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { MessageCircle, ArrowUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const WHATSAPP_LINK =
  "https://wa.me/5581973324911?text=Quero%20realizar%20um%20or%C3%A7amento"

export function WhatsAppFab() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* WhatsApp floating button - desktop: bottom-right, mobile: hidden (uses sticky bar) */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
        className="fixed right-5 bottom-24 z-50 hidden md:block"
      >
        <Link
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#25D366]/30"
        >
          <MessageCircle className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
        </Link>
      </motion.div>

      {/* Back to top - desktop only */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
            className="fixed right-5 bottom-6 z-50 hidden h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-card/80 text-muted-foreground shadow-lg backdrop-blur-sm transition-colors hover:bg-card hover:text-foreground md:flex"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Mobile sticky CTA bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border/50 bg-background/95 p-3 backdrop-blur-xl md:hidden">
        <Link
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] text-base font-semibold text-white shadow-lg shadow-[#25D366]/20 transition-all active:scale-[0.98]"
        >
          <MessageCircle className="h-5 w-5" />
          Chamar no WhatsApp
        </Link>
      </div>
    </>
  )
}
