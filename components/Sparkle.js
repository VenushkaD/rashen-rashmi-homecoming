"use client";

export default function Sparkle({ className = "", color = "currentColor" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 1c0.6 4.6 2.2 8 5.2 9.8C14.2 12.6 12.6 16 12 20.6 11.4 16 9.8 12.6 6.8 10.8 9.8 9 11.4 5.6 12 1Z"
        fill={color}
      />
      <circle cx="20.5" cy="4" r="1.1" fill={color} opacity="0.85" />
      <circle cx="2.5" cy="19.5" r="1.4" fill={color} opacity="0.7" />
    </svg>
  );
}
