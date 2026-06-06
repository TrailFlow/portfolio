import { navLinks, site } from '../data/content'
import { Logo } from './Logo'
import { Reveal } from './Reveal'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-surface-border bg-surface-elevated/40 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
            <div>
              <Logo size={32} />
              <p className="mt-4 max-w-xs text-sm text-slate-500">Professional website services for Indian businesses.</p>
            </div>
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-slate-500 hover:text-brand-400">{link.label}</a>
              ))}
            </nav>
          </div>
        </Reveal>
        <p className="mt-10 border-t border-surface-border/60 pt-8 text-center text-sm text-slate-600">© {year} {site.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
