"use client";

export default function Wreath({ className = "", color = "#AD8A44" }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="100" cy="100" r="72" opacity="0.35" strokeDasharray="1 7" />
      {Array.from({ length: 14 }).map((_, i) => {
        const angle = (i / 14) * Math.PI * 2;
        const x = 100 + Math.cos(angle) * 72;
        const y = 100 + Math.sin(angle) * 72;
        const r = i % 3 === 0 ? 7 : 4;
        return (
          <g key={i} opacity={0.85}>
            <circle cx={x} cy={y} r={r} />
            {i % 3 === 0 && <circle cx={x} cy={y} r={2} />}
          </g>
        );
      })}
    </svg>
  );
}
