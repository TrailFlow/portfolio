import { pricing, site, stats } from '../data/content'
import { BrowserMockup } from './BrowserMockup'
import { LogoMark } from './Logo'

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 30% -10%, rgba(59,130,246,0.35), transparent), radial-gradient(ellipse 50% 40% at 90% 80%, rgba(245,158,11,0.12), transparent)',
        }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <div className="hero-enter hero-enter-1 logo-pulse relative mb-6 inline-block">
            <LogoMark size={56} className="animate-float" />
          </div>
          <p className="hero-enter hero-enter-2 mb-4 inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-1.5 text-sm font-medium text-accent-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
            </span>
            {site.headline}
          </p>
          <h1 className="hero-enter hero-enter-3 font-display text-4xl leading-tight font-semibold text-white md:text-5xl lg:text-6xl">
            {site.tagline.split('TRAIL FLOW')[0]}
            <span className="shimmer-gold">TRAIL FLOW</span>
          </h1>
          <p className="hero-enter hero-enter-4 mt-6 max-w-lg text-lg text-slate-400">
            Complete website package — domain, hosting, design, SSL & 1-year maintenance from{' '}
            <span className="font-semibold text-brand-400">₹{pricing.offerPrice.toLocaleString('en-IN')}</span>.
          </p>
          <div className="hero-enter hero-enter-5 mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="btn-shine rounded-full bg-brand-500 px-8 py-3.5 text-sm font-semibold text-surface shadow-lg shadow-brand-500/20 hover:bg-brand-400">
              Order your website
            </a>
            <a
              href={`https://wa.me/${site.phones[0].whatsapp}?text=Hi%20TRAIL%20FLOW%2C%20I%20want%20to%20order%20a%20website`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-surface-border px-8 py-3.5 text-sm font-semibold text-slate-200 hover:border-emerald-500/50 hover:text-emerald-400"
            >
              WhatsApp us
            </a>
          </div>
          <p className="hero-enter hero-enter-6 mt-6 text-xs text-slate-500">{pricing.disclaimer}</p>
        </div>
        <div className="hero-enter hero-enter-4 hidden lg:block">
          <BrowserMockup />
        </div>
      </div>
      <div className="relative mx-auto mt-16 max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="premium-card hero-enter rounded-2xl border border-surface-border/80 bg-surface-elevated/60 p-5 text-center backdrop-blur-sm"
              style={{ animationDelay: `${0.6 + i * 0.08}s` }}
            >
              <p className="font-display text-2xl font-bold text-white md:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs text-slate-400 md:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
