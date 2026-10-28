// Decorative path from first call (1) to a signed no-dues letter (5), drawn in the site palette
export default function HowItWorksArt() {
  const nodes = [
    { x: 46, y: 238 },
    { x: 128, y: 196 },
    { x: 196, y: 236 },
    { x: 262, y: 168 },
    { x: 318, y: 112 },
  ];
  const head = { fontFamily: "var(--font-head)" };
  return (
    <svg className="hero-art" viewBox="0 0 420 300" aria-hidden="true">
      <defs>
        <linearGradient id="hiw-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0A3D9A" />
          <stop offset="1" stopColor="#0E8C82" />
        </linearGradient>
      </defs>
      <ellipse cx="210" cy="272" rx="190" ry="20" fill="#E6F5F3" />
      <path
        className="hiw-path"
        d="M46 238 C 86 238, 96 196, 128 196 S 170 236, 196 236 S 236 168, 262 168 S 300 112, 318 112"
        fill="none" stroke="url(#hiw-grad)" strokeWidth="4" strokeDasharray="10 10" strokeLinecap="round"
      />
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="19" fill="#fff" stroke="url(#hiw-grad)" strokeWidth="4" />
          <text x={n.x} y={n.y + 7} textAnchor="middle" style={head} fontWeight="800" fontSize="19" fill="#0B1B3A">{i + 1}</text>
        </g>
      ))}

      {/* No-dues letter at the end of the path */}
      <g className="hiw-letter">
        <rect x="320" y="18" width="78" height="96" rx="8" fill="#fff" stroke="#0A3D9A" strokeWidth="3" />
        <text x="359" y="46" textAnchor="middle" style={head} fontWeight="800" fontSize="15" fill="#0A3D9A">NOC</text>
        <path d="M334 60h50M334 72h50M334 84h32" stroke="#B9C6DC" strokeWidth="4" strokeLinecap="round" />
        <circle cx="384" cy="104" r="17" fill="#0E8C82" />
        <path d="m376 104 6 6 10-12" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Phone at the start: the first free call */}
      <g transform="rotate(-10 40 150)">
        <rect x="20" y="104" width="44" height="78" rx="9" fill="#0B1B3A" />
        <rect x="25" y="112" width="34" height="58" rx="4" fill="#7FE0D5" />
        <path d="M34 134c2 6 7 11 13 13l4-4 6 3-2 7c-12 0-25-13-25-25l7-2 3 6z" fill="#0B1B3A" />
      </g>

      <path d="M196 70l4 10 10 4-10 4-4 10-4-10-10-4 10-4z" fill="#0E8C82" />
      <path d="M100 40l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill="#F4B740" />
    </svg>
  );
}
