import { pricing } from '../data/content'
import { Reveal } from './Reveal'

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-surface-border/80 bg-surface-elevated/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm font-medium tracking-widest text-brand-400 uppercase">Transparent pricing</p>
          <h2 className="font-display mt-2 text-3xl font-semibold text-white md:text-4xl">Choose your plan</h2>
          <p className="mt-4 max-w-2xl text-slate-400">{pricing.offerNote}</p>
        </Reveal>
        <div className="mt-14 grid gap-8 md:grid-cols-2 md:max-w-4xl">
          <Reveal>
            <article className="premium-card h-full rounded-2xl border border-surface-border bg-surface/80 p-8">
              <p className="text-sm text-slate-400 uppercase">Standard</p>
              <p className="mt-4 font-display text-5xl font-bold text-white">₹{pricing.standardPrice.toLocaleString('en-IN')}</p>
              <p className="mt-2 text-slate-400">Complete website package</p>
              <ul className="mt-8 space-y-3 text-sm text-slate-300">
                {['Up to 5 pages', 'Domain + 1 year hosting', 'SSL certificate', '1 year maintenance'].map((x) => (
                  <li key={x}><span className="text-emerald-400">✓ </span>{x}</li>
                ))}
              </ul>
              <a href="#contact" className="mt-8 inline-block rounded-full border border-surface-border px-6 py-2.5 text-sm font-semibold hover:border-accent-500">Get started</a>
            </article>
          </Reveal>
          <Reveal delay={120}>
            <article className="animate-glow-pulse premium-card gradient-border relative h-full rounded-2xl p-8">
              <span className="absolute -top-3 right-6 rounded-full bg-brand-500 px-4 py-1 text-xs font-bold text-surface">🔥 Best value</span>
              <p className="text-sm text-brand-400 uppercase">Limited offer</p>
              <p className="mt-4 font-display text-5xl font-bold shimmer-gold">₹{pricing.offerPrice.toLocaleString('en-IN')}</p>
              <p className="mt-2 text-slate-300">First 10 orders only</p>
              <ul className="mt-8 space-y-3 text-sm text-slate-200">
                <li><span className="text-brand-400">✓ </span>Same full package</li>
                <li><span className="text-brand-400">✓ </span>Save ₹{(pricing.standardPrice - pricing.offerPrice).toLocaleString('en-IN')}</li>
                <li><span className="text-brand-400">✓ </span>Priority delivery</li>
              </ul>
              <a href="#contact" className="btn-shine mt-8 inline-block rounded-full bg-brand-500 px-8 py-3 text-sm font-semibold text-surface shadow-lg shadow-brand-500/25 hover:bg-brand-400">Claim offer</a>
            </article>
          </Reveal>
        </div>
        <Reveal delay={200}><p className="mt-10 text-center text-sm text-slate-500">{pricing.disclaimer}</p></Reveal>
      </div>
    </section>
  )
}
