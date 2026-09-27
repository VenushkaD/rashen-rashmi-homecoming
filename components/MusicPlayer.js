"use client";

import { forwardRef, useImperativeHandle, useRef, useState } from "react";

function SpeakerIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 9v6h4l5 4V5L8 9H4Z" />
      <path d="M16.5 8.5a5 5 0 0 1 0 7" />
      <path d="M19 6a8.5 8.5 0 0 1 0 12" />
    </svg>
  );
}

function MutedIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 9v6h4l5 4V5L8 9H4Z" />
      <path d="m16 9 4.5 6M20.5 9 16 15" />
    </svg>
  );
}

// Nothing plays until the cover's "Tap to open" is clicked — that click
// calls unmute() below, synchronously, inside its own handler. Audio can
// only start with sound as the direct result of a real tap like that; it
// is not started here on mount, and not started muted in the background.
const MusicPlayer = forwardRef(function MusicPlayer({ visible = true }, ref) {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);

  useImperativeHandle(ref, () => ({
    // Called from the cover's own tap handler.
    unmute: () => {
      const audio = audioRef.current;
      if (!audio) return;
      audio.muted = false;
      audio.play().catch(() => {});
      setMuted(false);
    },
  }));

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    const next = !muted;
    audio.muted = next;
    if (!next) audio.play().catch(() => {});
    setMuted(next);
  };

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio ref={audioRef} src="/audio/background-music.m4a" loop preload="auto" />

      {visible && (
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? "Unmute background music" : "Mute background music"}
          className="fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-gilt-400/50 bg-blush-100/80 text-gilt-400 shadow-[0_6px_20px_-6px_rgba(10,3,5,0.7)] backdrop-blur-sm transition hover:border-gilt-400/80 hover:text-gilt-500"
        >
          {muted ? <MutedIcon /> : <SpeakerIcon />}
        </button>
      )}
    </>
  );
});

export default MusicPlayer;
