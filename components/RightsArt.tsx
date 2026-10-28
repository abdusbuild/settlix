// Decorative shield-and-phone illustration for the borrower rights page, drawn in the site palette
export default function RightsArt() {
  const head = { fontFamily: "var(--font-head)" };
  return (
    <svg className="hero-art" viewBox="0 0 420 300" aria-hidden="true">
      <defs>
        <linearGradient id="rights-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0A3D9A" />
          <stop offset="1" stopColor="#0E8C82" />
        </linearGradient>
      </defs>
      <ellipse cx="210" cy="272" rx="180" ry="20" fill="#E6F5F3" />

      {/* Shield */}
      <path d="M210 30l96 34v70c0 64-42 106-96 130-54-24-96-66-96-130V64z" fill="url(#rights-grad)" />
      <path d="M210 54l74 26v54c0 50-32 84-74 104-42-20-74-54-74-104V80z" fill="none" stroke="#fff" strokeOpacity=".35" strokeWidth="3" />
      <path d="m172 146 26 26 52-56" fill="none" stroke="#fff" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />

      {/* Blocked call */}
      <g className="rights-phone" transform="rotate(-8 62 160)">
        <rect x="30" y="108" width="62" height="108" rx="12" fill="#0B1B3A" />
        <rect x="37" y="120" width="48" height="80" rx="5" fill="#fff" />
        <path d="M50 146c3 8 9 14 17 17l5-5 8 4-3 9c-16 0-31-15-31-31l9-3 4 8z" fill="#0B1B3A" />
        <circle cx="80" cy="120" r="15" fill="#C23B3B" />
        <path d="m74 114 12 12m0-12-12 12" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" />
      </g>

      {/* Calling hours */}
      <g className="rights-hours">
        <rect x="284" y="190" width="132" height="40" rx="20" fill="#fff" stroke="#0E8C82" strokeWidth="2.5" />
        <circle cx="304" cy="210" r="10" fill="none" stroke="#0E8C82" strokeWidth="2.5" />
        <path d="M304 204v6l4 3" stroke="#0E8C82" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <text x="362" y="215" textAnchor="middle" style={head} fontWeight="700" fontSize="13" fill="#0B1B3A">8 AM–7 PM</text>
      </g>

      {/* Rupee coin */}
      <g className="rights-coin">
        <circle cx="352" cy="78" r="24" fill="#F4B740" />
        <text x="352" y="87" textAnchor="middle" style={head} fontWeight="800" fontSize="24" fill="#fff">₹</text>
      </g>
      <path d="M96 52l4 10 10 4-10 4-4 10-4-10-10-4 10-4z" fill="#0E8C82" />
    </svg>
  );
}
