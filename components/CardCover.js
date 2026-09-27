"use client";

import { motion } from "framer-motion";
import FloralCorner from "./FloralCorner";
import FlowerDivider from "./FlowerDivider";
import Wreath from "./Wreath";
import Sparkle from "./Sparkle";
import { homecoming } from "@/lib/homecomingData";

export default function CardCover({ opened, onOpen, onAnimationComplete }) {
  const { groom, bride, event } = homecoming;

  return (
    <motion.div
      onClick={onOpen}
      animate={{ rotateY: opened ? -110 : 0 }}
      transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
      onAnimationComplete={onAnimationComplete}
      style={{
        transformOrigin: "left center",
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
      }}
      className="absolute inset-0 z-10 flex cursor-pointer flex-col items-center justify-center rounded-[1.75rem] border border-gilt-400/70 bg-blush-100 px-6 py-12 text-center shadow-[0_10px_50px_-15px_rgba(10,3,5,0.6),0_0_40px_-10px_rgba(233,203,132,0.35)] sm:px-10 sm:py-16"
    >
      <div className="pointer-events-none absolute inset-[7px] rounded-[1.4rem] border border-gilt-400/35" />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-10 rounded-r-[1.75rem]"
        style={{
          backgroundImage:
            "linear-gradient(to left, rgba(10,3,5,0.35), transparent)",
        }}
      />

      <FloralCorner className="absolute -left-3 -top-3 h-20 w-20 opacity-80 sm:h-28 sm:w-28" />
      <FloralCorner
        className="absolute -right-3 -top-3 h-20 w-20 opacity-80 sm:h-28 sm:w-28"
        flip
      />
      <FloralCorner
        className="absolute -bottom-3 -left-3 h-20 w-20 opacity-80 sm:h-28 sm:w-28"
        rotate
      />
      <FloralCorner
        className="absolute -bottom-3 -right-3 h-20 w-20 opacity-80 sm:h-28 sm:w-28"
        flip
        rotate
      />

      <Wreath className="h-14 w-14 opacity-90" color="#E9CB84" />

      <p className="mt-4 text-fluid-eyebrow uppercase text-rose-600">Homecoming</p>

      <h1 className="mt-6 font-serif text-fluid-name font-semibold text-ink-900">
        {groom.name}
      </h1>
      <p className="mt-1 font-body italic text-fluid-body text-ink-800/60">
        &amp;
      </p>
      <h1 className="mt-1 flex items-center justify-center gap-2 font-serif text-fluid-name font-semibold">
        <Sparkle className="h-4 w-4 shrink-0 text-gilt-400 sm:h-5 sm:w-5" />
        <span className="bg-gradient-to-r from-gilt-600 via-gilt-500 to-gilt-400 bg-clip-text text-transparent">
          {bride.name}
        </span>
        <Sparkle className="h-4 w-4 shrink-0 text-gilt-400 sm:h-5 sm:w-5" />
      </h1>

      <div className="mt-8 flex justify-center text-gilt-500">
        <FlowerDivider className="h-6 w-40 sm:w-52" />
      </div>

      <p className="mt-6 text-fluid-body text-ink-800/70">{event.dateLabel}</p>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/couple-illustration.gif"
        alt="Illustration of the bride and groom dancing"
        className="mt-6 h-32 w-auto drop-shadow-[0_8px_16px_rgba(10,3,5,0.5)] sm:h-40"
      />

      <motion.p
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="mt-10 text-fluid-eyebrow uppercase text-gilt-400"
      >
        Tap to open
      </motion.p>
    </motion.div>
  );
}
