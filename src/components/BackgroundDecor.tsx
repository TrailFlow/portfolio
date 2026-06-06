export function BackgroundDecor() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="bg-grid absolute inset-0 opacity-60" />
      <div
        className="animate-rotate-slow absolute -top-1/2 -right-1/4 h-[800px] w-[800px] rounded-full opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)' }}
      />
      <div
        className="animate-float absolute top-1/3 -left-32 h-64 w-64 rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.2) 0%, transparent 70%)' }}
      />
    </div>
  )
}
