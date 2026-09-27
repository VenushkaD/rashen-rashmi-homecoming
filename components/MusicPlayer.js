"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";

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

// play() is exposed via ref so it can be called synchronously inside the
// cover's own click handler — iOS Safari only allows audio to start as the
// direct result of a tap, not a tick later via a state update + effect.
//
// Autoplay-with-sound is a browser policy, not something this code
// controls: most browsers refuse it outright on a fresh visit and there is
// no reliable way around that. We still try unmuted first — some browsers
// (a returning visitor with enough "media engagement" on this site, some
// embedded/PWA contexts) do allow it — and only fall back to muted
// autoplay when the browser actually rejects the unmuted attempt.
const MusicPlayer = forwardRef(function MusicPlayer(_props, ref) {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = false;
    audio.play().catch(() => {
      audio.muted = true;
      setMuted(true);
      audio.play().catch(() => {});
    });
  }, []);

  useImperativeHandle(ref, () => ({
    play: () => {
      const audio = audioRef.current;
      if (!audio) return;
      audio.play().catch(() => {});
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
      <audio ref={audioRef} src="/audio/background-music.m4a" loop preload="auto" autoPlay />

      <button
        type="button"
        onClick={toggleMute}
        aria-label={muted ? "Unmute background music" : "Mute background music"}
        className="fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-gilt-400/50 bg-blush-100/80 text-gilt-400 shadow-[0_6px_20px_-6px_rgba(10,3,5,0.7)] backdrop-blur-sm transition hover:border-gilt-400/80 hover:text-gilt-500"
      >
        {muted ? <MutedIcon /> : <SpeakerIcon />}
      </button>
    </>
  );
});

export default MusicPlayer;
