'use client'
import Link from 'next/link'

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur bg-black/80">
      <div className="mx-auto max-w-6xl px-4 md:px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold tracking-wide text-lg md:text-xl text-white"
        >
          kumamhay
        </Link>

        {/* Menu */}
        <nav className="flex items-center gap-4 md:gap-6 text-sm md:text-base">
          <span className="opacity-100 underline underline-offset-4">
            Game
          </span>
        </nav>
      </div>
    </header>
  )
}