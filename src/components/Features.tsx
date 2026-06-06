import { features } from '../data/content'
import { Reveal } from './Reveal'

const icons = ['📱', '✨', '🌐', '🚀', '🔍', '📄']

export function Features() {
  return (
    <section id="features" className="border-t border-surface-border/80 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm font-medium tracking-widest text-accent-400 uppercase">What you get</p>
          <h2 className="font-display mt-2 text-3xl font-semibold text-white md:text-4xl">Features</h2>
          <p className="mt-4 max-w-2xl text-slate-400">Every TRAIL FLOW website includes these premium essentials.</p>
        </Reveal>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <li className="premium-card group h-full rounded-2xl border border-surface-border bg-surface-elevated/40 p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500/20 to-brand-500/10 text-xl">
                  {icons[i]}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-brand-400 transition-colors">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{f.description}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
