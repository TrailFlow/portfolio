import { useEffect, useState } from 'react'
import { navLinks } from '../data/content'
import { Logo } from './Logo'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'border-b border-surface-border/80 bg-surface/95 shadow-lg shadow-black/20 backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" aria-label="TRAIL FLOW home" className="transition-transform hover:scale-[1.02]"><Logo size={36} /></a>
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="relative text-sm text-slate-400 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-brand-400 after:transition-all hover:text-white hover:after:w-full">{link.label}</a>
          ))}
          <a href="#contact" className="btn-shine rounded-full bg-brand-500 px-5 py-2 text-sm font-semibold text-surface shadow-md shadow-brand-500/20 hover:bg-brand-400">Get started</a>
        </nav>
        <button type="button" className="flex flex-col gap-1.5 lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>
      <nav className={`overflow-hidden border-t border-surface-border bg-surface-elevated/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 border-transparent'}`}>
        <ul className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <li key={link.href}><a href={link.href} className="block rounded-lg px-3 py-2.5 text-slate-300 hover:bg-surface-border/30" onClick={() => setOpen(false)}>{link.label}</a></li>
          ))}
          <li className="pt-2"><a href="#contact" className="block rounded-full bg-brand-500 py-2.5 text-center text-sm font-semibold text-surface" onClick={() => setOpen(false)}>Get started</a></li>
        </ul>
      </nav>
    </header>
  )
}
