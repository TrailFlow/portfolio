import { useState } from 'react'
import { faqs } from '../data/content'
import { Reveal } from './Reveal'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <h2 className="font-display text-center text-3xl font-semibold text-white md:text-4xl">FAQ</h2>
        </Reveal>
        <ul className="mt-12 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <Reveal key={faq.q} delay={i * 60}>
                <li className="overflow-hidden rounded-2xl border border-surface-border bg-surface-elevated/50">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-white">{faq.q}</span>
                    <span className={`text-brand-400 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
                  </button>
                  <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm text-slate-400">{faq.a}</p>
                    </div>
                  </div>
                </li>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
