import { useState } from 'react'
import type { FormEvent } from 'react'
import { site } from '../data/content'
import { Reveal } from './Reveal'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSending(true)
    setError('')

    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '')
    const phone = String(data.get('phone') ?? '')
    const message = String(data.get('message') ?? '')

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(site.email)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          phone,
          message,
          _subject: `New website enquiry from ${name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      })

      const result = (await response.json()) as { success?: string; message?: string }
      const formSubmitOk = response.ok && result.success !== 'false'

      if (!formSubmitOk) {
        const needsActivation = result.message?.toLowerCase().includes('activation')
        throw new Error(
          needsActivation
            ? `Email form not activated yet. Check ${site.email} for an "Activate Form" email, click the link, then submit again.`
            : (result.message ?? 'Failed to send enquiry'),
        )
      }

      setSubmitted(true)
      form.reset()
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Could not send your enquiry. Please call or WhatsApp us directly.',
      )
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="border-t border-surface-border/80 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm font-medium tracking-widest text-emerald-400 uppercase">Get in touch</p>
          <h2 className="font-display mt-2 text-3xl font-semibold text-white md:text-4xl">Call / WhatsApp</h2>
          <p className="mt-4 max-w-2xl text-slate-400">
            Reach us anytime — we respond quickly on call and WhatsApp.
          </p>
        </Reveal>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
          <Reveal direction="left" className="flex flex-col gap-4">
            <div className="premium-card rounded-xl border border-surface-border bg-surface-elevated/50 p-5">
              <span className="text-xs font-medium tracking-wide text-slate-500 uppercase">Email</span>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 block text-lg font-medium text-brand-400 hover:underline"
              >
                {site.email}
              </a>
            </div>

            {site.phones.map((phone) => (
              <div
                key={phone.tel}
                className="premium-card rounded-xl border border-surface-border bg-surface-elevated/50 p-5"
              >
                <span className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                  Phone & WhatsApp
                </span>
                <div className="mt-3 flex items-center justify-between gap-4">
                  <a
                    href={`tel:${phone.tel}`}
                    className="text-lg font-semibold text-white hover:text-brand-400"
                  >
                    {phone.display}
                  </a>
                  <a
                    href={`https://wa.me/${phone.whatsapp}?text=Hi%20TRAIL%20FLOW%2C%20I%20want%20to%20order%20a%20website`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 rounded-full border border-emerald-500/50 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-400 hover:bg-emerald-500/20"
                  >
                    WhatsApp →
                  </a>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal direction="right" delay={100} className="h-full">
            {submitted ? (
              <div className="flex min-h-full flex-col items-center justify-center rounded-2xl border border-brand-500/30 bg-brand-500/10 p-8 text-center lg:min-h-[420px]">
                <span className="text-5xl">🎉</span>
                <p className="mt-4 text-xl font-medium text-white">Thanks for reaching out!</p>
                <p className="mt-2 text-slate-400">
                  Your enquiry was sent to {site.email}. We&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex h-full min-h-[420px] flex-col rounded-2xl border border-surface-border bg-surface-elevated/80 p-6 shadow-xl md:p-8"
              >
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">Send an enquiry</h3>
                  <p className="mt-1 text-sm text-slate-400">We&apos;ll email you back within 24 hours.</p>
                </div>

                <div className="mt-6 grid flex-1 gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-sm text-slate-400">Name</span>
                    <input
                      type="text"
                      name="name"
                      required
                      disabled={sending}
                      className="w-full rounded-xl border border-surface-border bg-surface px-4 py-3 text-white outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 disabled:opacity-60"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-sm text-slate-400">Phone</span>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="10-digit number"
                      disabled={sending}
                      className="w-full rounded-xl border border-surface-border bg-surface px-4 py-3 text-white outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 disabled:opacity-60"
                    />
                  </label>
                </div>

                <label className="mt-5 block flex-1">
                  <span className="mb-1.5 block text-sm text-slate-400">Message</span>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us about your business."
                    disabled={sending}
                    className="h-full min-h-[120px] w-full resize-y rounded-xl border border-surface-border bg-surface px-4 py-3 text-white outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 disabled:opacity-60"
                  />
                </label>

                {error && (
                  <p className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-shine mt-6 w-full rounded-full bg-brand-500 py-3.5 text-sm font-semibold text-surface shadow-lg shadow-brand-500/20 hover:bg-brand-400 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-10"
                >
                  {sending ? 'Sending…' : 'Send enquiry'}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
