import { whyUs } from '../data/content'
import { Reveal } from './Reveal'

export function WhyUs() {
  return (
    <section id="why" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm font-medium tracking-widest text-accent-400 uppercase">Why choose us</p>
          <h2 className="font-display mt-2 text-3xl font-semibold text-white md:text-4xl">Built for Indian businesses</h2>
          <p className="mt-4 max-w-2xl text-slate-400">Affordable, professional websites with real human support.</p>
        </Reveal>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((item, i) => (
            <Reveal key={item.title} delay={i * 100} direction="scale">
              <li className="premium-card h-full rounded-2xl border border-surface-border bg-gradient-to-b from-surface-elevated/80 to-surface/50 p-6 text-center">
                <span className="text-4xl">{item.icon}</span>
                <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{item.description}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
