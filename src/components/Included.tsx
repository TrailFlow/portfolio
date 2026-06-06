import { servicesIncluded } from '../data/content'
import { Reveal } from './Reveal'

export function Included() {
  return (
    <section id="included" className="bg-surface-elevated/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm font-medium tracking-widest text-brand-400 uppercase">Full package</p>
          <h2 className="font-display mt-2 text-3xl font-semibold text-white md:text-4xl">Services Included</h2>
          <p className="mt-4 max-w-2xl text-slate-400">One price covers everything — launch-ready for a full year.</p>
        </Reveal>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2">
          {servicesIncluded.map((item, i) => (
            <Reveal key={item.title} delay={i * 70} direction={i % 2 === 0 ? 'left' : 'right'}>
              <li className="premium-card flex h-full gap-4 rounded-2xl border border-surface-border bg-surface/80 p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">✓</div>
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-400">{item.description}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
