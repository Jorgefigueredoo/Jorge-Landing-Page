"use client"

export function VideoPreview() {
  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-border/50 bg-secondary/30">
      <div className="relative aspect-[16/10] w-full">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          controls={false}
        >
          <source src="/videos/videodemonstracao.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  )
}
