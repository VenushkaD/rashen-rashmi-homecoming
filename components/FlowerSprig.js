"use client";

const round = (n) => Math.round(n * 1000) / 1000;

export default function FlowerSprig({ className = "", color = "currentColor" }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      stroke={color}
      strokeWidth="1"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M20 38V16" opacity="0.6" />
      <path d="M20 24c-5-1-8-5-8-10" opacity="0.6" />
      <path d="M20 20c5-1 8-5 8-10" opacity="0.6" />
      <g opacity="0.85">
        {Array.from({ length: 5 }).map((_, i) => {
          const angle = (i / 5) * Math.PI * 2 - Math.PI / 2;
          const x = round(20 + Math.cos(angle) * 6);
          const y = round(8 + Math.sin(angle) * 6);
          const deg = round((angle * 180) / Math.PI + 90);
          return (
            <ellipse
              key={i}
              cx={x}
              cy={y}
              rx="4.2"
              ry="2.6"
              transform={`rotate(${deg} ${x} ${y})`}
            />
          );
        })}
        <circle cx="20" cy="8" r="2" fill={color} stroke="none" />
      </g>
    </svg>
  );
}
