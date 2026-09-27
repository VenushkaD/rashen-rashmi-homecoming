"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import FlowerDivider from "./FlowerDivider";
import FlowerSprig from "./FlowerSprig";
import Wreath from "./Wreath";
import Sparkle from "./Sparkle";
import CardCover from "./CardCover";
import MusicPlayer from "./MusicPlayer";
import { homecoming } from "@/lib/homecomingData";

/* eslint-disable-next-line @next/next/no-img-element */
function GoldCorner({ className = "", style }) {
  return (
    <img
      src="/images/gold-corner.png"
      alt=""
      aria-hidden="true"
      className={className}
      style={style}
    />
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.16, delayChildren: 0.15 },
  },
};

export default function InviteCard() {
  const { hosts, groom, bride, event } = homecoming;
  const mapsHref = event.mapsUrl;
  const searchParams = useSearchParams();
  const guestName = searchParams.get("to");
  const [opened, setOpened] = useState(false);
  const [coverMounted, setCoverMounted] = useState(true);
  const musicPlayerRef = useRef(null);

  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-blush-100 px-5 py-14 sm:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 15%, rgba(233,203,132,0.28), transparent 42%), radial-gradient(circle at 85% 12%, rgba(158,27,44,0.35), transparent 45%), radial-gradient(circle at 12% 85%, rgba(158,27,44,0.35), transparent 45%), radial-gradient(circle at 85% 88%, rgba(233,203,132,0.26), transparent 45%), radial-gradient(ellipse at 50% 50%, transparent 35%, rgba(20,5,9,0.45) 100%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #E9CB84 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <Wreath className="pointer-events-none absolute left-1/2 top-1/2 h-[130vmin] w-[130vmin] -translate-x-1/2 -translate-y-1/2 opacity-[0.1]" />

      <FlowerSprig className="pointer-events-none absolute left-[8%] top-[38%] hidden h-16 w-16 rotate-[15deg] text-gilt-400 opacity-40 md:block" />
      <FlowerSprig className="pointer-events-none absolute right-[8%] top-[55%] hidden h-16 w-16 -rotate-[20deg] scale-x-[-1] text-gilt-400 opacity-40 md:block" />

      <div
        className="relative w-full max-w-content"
        style={{ perspective: 1800 }}
      >
      <motion.div
        initial="hidden"
        animate={opened ? "show" : "hidden"}
        variants={container}
        className="relative w-full rounded-[1.75rem] border border-gilt-400/70 bg-blush-50/40 px-6 py-12 text-center shadow-[0_10px_50px_-15px_rgba(10,3,5,0.5),0_0_40px_-10px_rgba(233,203,132,0.35)] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-[7px] before:rounded-[1.4rem] before:border before:border-gilt-400/35 sm:px-10 sm:py-16"
      >
        <GoldCorner className="absolute -left-3 -top-3 h-20 w-20 opacity-90 sm:h-28 sm:w-28" />
        <GoldCorner
          className="absolute -right-3 -top-3 h-20 w-20 opacity-90 sm:h-28 sm:w-28"
          style={{ transform: "scaleX(-1)" }}
        />
        <GoldCorner
          className="absolute -bottom-3 -left-3 h-20 w-20 opacity-90 sm:h-28 sm:w-28"
          style={{ transform: "scaleY(-1)" }}
        />
        <GoldCorner
          className="absolute -bottom-3 -right-3 h-20 w-20 opacity-90 sm:h-28 sm:w-28"
          style={{ transform: "scale(-1,-1)" }}
        />

        <motion.div variants={fadeUp} className="flex justify-center">
          <Wreath className="h-14 w-14 opacity-90" color="#E9CB84" />
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mt-4 text-fluid-eyebrow uppercase text-rose-600"
        >
          Homecoming
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-6 font-serif text-lg font-semibold text-ink-900 sm:text-xl"
        >
          {hosts.line1}
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-3 max-w-xs text-fluid-body text-ink-800/70 sm:max-w-sm"
        >
          {hosts.request}
        </motion.p>

        {guestName && (
          <motion.div variants={fadeUp} className="mt-6 flex flex-col items-center">
            <p className="font-serif text-lg italic text-gilt-400 sm:text-xl">
              {guestName}
            </p>
            <span className="mt-2 h-px w-32 bg-gilt-400/50 sm:w-40" />
          </motion.div>
        )}

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-xs text-fluid-body text-ink-800/70 sm:max-w-sm"
        >
          {hosts.occasion}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8 flex justify-center text-gilt-500">
          <FlowerDivider className="h-6 w-40 sm:w-52" />
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mt-6 font-serif text-fluid-name font-semibold text-ink-900"
        >
          {groom.name}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-2 flex items-center justify-center gap-3 font-body italic text-fluid-body text-ink-800/60"
        >
          <FlowerSprig className="h-5 w-5 rotate-[-25deg] text-gilt-400/70" />
          with his bride
          <FlowerSprig className="h-5 w-5 rotate-[25deg] scale-x-[-1] text-gilt-400/70" />
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="mt-2 flex items-center justify-center gap-2 font-serif text-fluid-name font-semibold"
        >
          <Sparkle className="h-4 w-4 shrink-0 text-gilt-400 sm:h-5 sm:w-5" />
          <span className="bg-gradient-to-r from-gilt-600 via-gilt-500 to-gilt-400 bg-clip-text text-transparent">
            {bride.name}
          </span>
          <Sparkle className="h-4 w-4 shrink-0 text-gilt-400 sm:h-5 sm:w-5" />
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-8 max-w-xs text-fluid-body text-ink-800/70 sm:max-w-sm"
        >
          Loving daughter of
          <br />
          <span className="italic">{bride.parents}</span>
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex justify-center text-gilt-500">
          <FlowerDivider className="h-6 w-40 sm:w-52" />
        </motion.div>

        <motion.div variants={fadeUp} className="mt-8 space-y-1">
          <p className="font-serif text-xl font-semibold text-ink-900 sm:text-2xl">
            {event.dateLabel}
          </p>
          <p className="text-fluid-body text-ink-800/70">{event.timeLabel}</p>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-8">
          <p className="font-serif text-xl font-semibold text-gilt-400 sm:text-2xl">
            {event.venueName}
          </p>
          <p className="text-fluid-body font-medium text-ink-900">{event.venueLine}</p>

          <a
            href={mapsHref}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-full border border-gilt-400/60 px-7 py-2.5 text-xs uppercase tracking-widest2 text-ink-900 transition hover:bg-ink-900 hover:text-blush-100"
          >
            Get Directions
          </a>
        </motion.div>
      </motion.div>

      {coverMounted && (
        <CardCover
          opened={opened}
          onOpen={() => {
            musicPlayerRef.current?.unmute();
            setOpened(true);
          }}
          onAnimationComplete={() => opened && setCoverMounted(false)}
        />
      )}
      </div>

      <MusicPlayer ref={musicPlayerRef} visible={opened} />

      <p className="pointer-events-none absolute bottom-2 left-1/2 z-50 w-full -translate-x-1/2 text-center text-[0.65rem] text-ink-800/40">
        Created by{" "}
        <a
          href="https://www.instagram.com/venushkad/"
          target="_blank"
          rel="noreferrer"
          className="pointer-events-auto underline decoration-dotted underline-offset-2 transition hover:text-gilt-400"
        >
          Venushka Dhambarage
        </a>
      </p>
    </main>
  );
}
