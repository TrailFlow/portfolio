export function BrowserMockup() {
  return (
    <div className="animate-float-delayed relative mx-auto w-full max-w-md">
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent-500/20 to-brand-500/10 blur-2xl" />
      <div className="premium-card relative overflow-hidden rounded-2xl border border-surface-border bg-surface-elevated shadow-2xl">
        <div className="flex items-center gap-2 border-b border-surface-border bg-surface px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
          <span className="ml-3 flex-1 rounded-md bg-surface-border/50 px-3 py-1 text-xs text-slate-500">
            yourbusiness.in
          </span>
        </div>
        <div className="p-5">
          <div className="rounded-xl bg-gradient-to-br from-accent-600/40 to-surface p-6">
            <div className="h-2 w-24 rounded bg-brand-400/60" />
            <div className="mt-4 h-4 w-3/4 rounded bg-white/90" />
            <div className="mt-2 h-3 w-1/2 rounded bg-white/40" />
            <div className="mt-6 flex gap-2">
              <div className="h-8 w-20 rounded-full bg-brand-500/80" />
              <div className="h-8 w-20 rounded-full border border-white/20" />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[1, 2, 3].map((n) => (
              <div key={n} className="rounded-lg bg-surface-border/40 p-3">
                <div className="h-8 w-8 rounded-full bg-accent-500/30" />
                <div className="mt-2 h-2 w-full rounded bg-slate-600/50" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute -bottom-6 -left-6 rounded-xl border border-emerald-500/30 bg-surface-elevated/95 px-4 py-3 shadow-xl backdrop-blur-sm">
        <p className="text-xs text-slate-400">Live in</p>
        <p className="font-display text-lg font-semibold text-emerald-400">7–14 days</p>
      </div>
      <div className="absolute -top-4 -right-4 rounded-xl border border-brand-500/30 bg-surface-elevated/95 px-4 py-3 shadow-xl backdrop-blur-sm">
        <p className="text-xs text-slate-400">Starting at</p>
        <p className="font-display text-lg font-semibold shimmer-gold">₹3,099</p>
      </div>
    </div>
  )
}
