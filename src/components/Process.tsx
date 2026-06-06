import { processSteps } from '../data/content'
import { Reveal } from './Reveal'

export function Process() {
  return (
    <section className="border-y border-surface-border/80 bg-surface-elevated/20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm font-medium tracking-widest text-brand-400 uppercase">Simple process</p>
          <h2 className="font-display mt-2 text-3xl font-semibold text-white md:text-4xl">From idea to live site</h2>
        </Reveal>
        <div className="relative mt-14 grid gap-8 md:grid-cols-4">
          <div className="pointer-events-none absolute top-8 right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-accent-500/40 to-transparent md:block" aria-hidden />
          {processSteps.map((item, i) => (
            <Reveal key={item.step} delay={i * 120}>
              <div>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-accent-500/30 bg-surface-elevated font-display text-xl font-bold text-brand-400">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
