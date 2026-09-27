"use client";

const round = (n) => Math.round(n * 1000) / 1000;

export default function FlowerDivider({ className = "", color = "currentColor" }) {
  return (
    <svg
      viewBox="0 0 220 28"
      className={className}
      fill="none"
      stroke={color}
      strokeWidth="1"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <line x1="0" y1="14" x2="82" y2="14" opacity="0.55" />
      <line x1="138" y1="14" x2="220" y2="14" opacity="0.55" />

      <g transform="translate(110 14)">
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (i / 6) * Math.PI * 2;
          const x = round(Math.cos(angle) * 9);
          const y = round(Math.sin(angle) * 9);
          const deg = round((angle * 180) / Math.PI);
          return (
            <ellipse
              key={i}
              cx={x}
              cy={y}
              rx="5"
              ry="3"
              transform={`rotate(${deg} ${x} ${y})`}
              opacity="0.8"
              fill="none"
            />
          );
        })}
        <circle r="3" fill={color} stroke="none" opacity="0.9" />
      </g>
    </svg>
  );
}
