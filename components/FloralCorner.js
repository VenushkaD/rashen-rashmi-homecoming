"use client";

export default function FloralCorner({
  className = "",
  color = "#C9A227",
  flip = false,
  rotate = false,
}) {
  const transform = `${flip ? "scale(-1,1)" : ""} ${
    rotate ? "rotate(180 90 90)" : ""
  }`.trim();

  return (
    <svg
      viewBox="0 0 180 180"
      className={className}
      fill="none"
      stroke={color}
      strokeWidth="1.3"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <g transform={transform || undefined} opacity="0.75">
        <path d="M4 8c30 2 55 14 68 34 10 16 12 34 6 46" />
        <path d="M4 8c22 10 36 26 40 46" />
        <circle cx="46" cy="52" r="10" />
        <circle cx="46" cy="52" r="4" />
        <path d="M46 42c-4-8-2-16 4-20" />
        <path d="M56 46c8-4 14-12 14-22" />
        <circle cx="78" cy="20" r="8" />
        <circle cx="78" cy="20" r="3" />
        <path d="M30 30c-6-6-16-8-24-4" />
        <circle cx="10" cy="30" r="6" />
        <path d="M60 62c10 6 16 16 14 28" />
        <path d="M52 78c6 2 12 8 12 16" />
        <path d="M20 20c4 6 4 14 0 20" />
      </g>
    </svg>
  );
}
