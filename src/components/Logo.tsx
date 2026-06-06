type LogoProps = {
  size?: number
  showText?: boolean
  className?: string
}

export function LogoMark({ size = 40, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="tf-gold" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fcd34d" />
          <stop offset="1" stopColor="#d97706" />
        </linearGradient>
        <linearGradient id="tf-blue" x1="4" y1="44" x2="44" y2="4" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563eb" />
          <stop offset="1" stopColor="#60a5fa" />
        </linearGradient>
        <linearGradient id="tf-ring" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1e40af" stopOpacity="0.6" />
          <stop offset="1" stopColor="#3b82f6" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Outer ring — compass bezel */}
      <circle cx="24" cy="24" r="22" stroke="url(#tf-ring)" strokeWidth="1.5" fill="#0a1628" />
      <circle cx="24" cy="24" r="19" stroke="#1e3a5f" strokeWidth="0.75" fill="none" opacity="0.8" />

      {/* Flowing trail path — wraps around compass */}
      <path
        d="M8 32 C14 22, 18 18, 24 20 C30 22, 34 16, 40 12"
        stroke="url(#tf-blue)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />
      <path
        d="M10 36 C16 28, 20 26, 26 28 C32 30, 36 24, 42 18"
        stroke="url(#tf-blue)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.45"
      />
      {/* Trail dots */}
      <circle cx="14" cy="26" r="1.5" fill="#60a5fa" opacity="0.7" />
      <circle cx="24" cy="20" r="1.5" fill="#93c5fd" />
      <circle cx="34" cy="17" r="1.5" fill="#60a5fa" opacity="0.7" />

      {/* Compass rose */}
      <path d="M24 10 L26.5 24 L24 22 L21.5 24 Z" fill="url(#tf-gold)" />
      <path d="M24 38 L21.5 24 L24 26 L26.5 24 Z" fill="#1e3a5f" />
      <path d="M10 24 L24 21.5 L24 26.5 Z" fill="#334155" opacity="0.9" />
      <path d="M38 24 L24 26.5 L24 21.5 Z" fill="#334155" opacity="0.9" />

      {/* Cardinal ticks */}
      <line x1="24" y1="5" x2="24" y2="8" stroke="#64748b" strokeWidth="1" strokeLinecap="round" />
      <line x1="24" y1="40" x2="24" y2="43" stroke="#64748b" strokeWidth="1" strokeLinecap="round" />
      <line x1="5" y1="24" x2="8" y2="24" stroke="#64748b" strokeWidth="1" strokeLinecap="round" />
      <line x1="40" y1="24" x2="43" y2="24" stroke="#64748b" strokeWidth="1" strokeLinecap="round" />

      {/* Center hub */}
      <circle cx="24" cy="24" r="3" fill="#0a1628" stroke="url(#tf-gold)" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="1" fill="#fbbf24" />
    </svg>
  )
}

export function Logo({ size = 40, showText = true, className = '' }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={size} />
      {showText && (
        <span className="font-display text-xl font-semibold tracking-tight leading-none">
          <span className="text-white">TRAIL </span>
          <span className="text-brand-400">FLOW</span>
        </span>
      )}
    </span>
  )
}
