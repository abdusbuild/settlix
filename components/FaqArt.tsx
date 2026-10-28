// Decorative "FAQ" illustration for the home FAQ section, drawn in the site palette
export default function FaqArt() {
  return (
    <svg className="faq-art" viewBox="0 0 380 230" aria-hidden="true">
      <defs>
        <linearGradient id="faq-art-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0A3D9A" />
          <stop offset="1" stopColor="#0E8C82" />
        </linearGradient>
      </defs>
      <ellipse cx="190" cy="196" rx="170" ry="22" fill="#E6F5F3" />
      <text x="8" y="186" style={{ fontFamily: "var(--font-head)" }} fontWeight="800" fontSize="170" fill="url(#faq-art-grad)" opacity=".9">F</text>
      <text x="104" y="186" style={{ fontFamily: "var(--font-head)" }} fontWeight="800" fontSize="170" fill="#7FB8E8">A</text>
      <text x="222" y="186" style={{ fontFamily: "var(--font-head)" }} fontWeight="800" fontSize="170" fill="url(#faq-art-grad)">Q</text>

      {/* Speech bubble */}
      <g className="faq-art-bubble">
        <path d="M262 62h86a12 12 0 0 1 12 12v40a12 12 0 0 1-12 12h-54l-18 16 4-16h-18a12 12 0 0 1-12-12V74a12 12 0 0 1 12-12z" fill="#0B1B3A" />
        <circle cx="282" cy="97" r="4.5" fill="#fff" />
        <circle cx="298" cy="97" r="4.5" fill="#fff" />
        <circle cx="314" cy="97" r="4.5" fill="#fff" />
        <text x="326" y="111" style={{ fontFamily: "var(--font-head)" }} fontWeight="800" fontSize="40" fill="#7FE0D5">?</text>
      </g>

      {/* Rupee coin */}
      <g className="faq-art-coin">
        <circle cx="58" cy="44" r="24" fill="#F4B740" />
        <circle cx="58" cy="44" r="18" fill="none" stroke="#fff" strokeOpacity=".6" strokeWidth="2" />
        <text x="58" y="53" textAnchor="middle" style={{ fontFamily: "var(--font-head)" }} fontWeight="800" fontSize="24" fill="#fff">₹</text>
      </g>

      {/* Settlement letter */}
      <g transform="rotate(-8 176 182)">
        <rect x="150" y="150" width="54" height="66" rx="5" fill="#fff" stroke="#0A3D9A" strokeWidth="2.5" />
        <path d="M160 166h34M160 177h34M160 188h22" stroke="#B9C6DC" strokeWidth="3" strokeLinecap="round" />
        <circle cx="190" cy="203" r="8" fill="#0E8C82" />
        <path d="m186 203 3 3 5-6" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Sparkles */}
      <path d="M128 30l4 10 10 4-10 4-4 10-4-10-10-4 10-4z" fill="#0E8C82" />
      <path d="M364 170l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill="#F4B740" />
    </svg>
  );
}
