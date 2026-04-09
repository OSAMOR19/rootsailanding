"use client";

import React, { useEffect, useRef, useState } from "react";
import { Music2 } from "lucide-react";

type DrumLoop = {
  title: string;
  bpm: string;
  genre: string;
  file: string;
};

/* ------------------------------------------------------------------ */
/*  6 tracks chosen for genre + BPM diversity                          */
/* ------------------------------------------------------------------ */
const AUDIO_DIR = "/ROOTS Landing Page - Audio Previews/";

const DRUM_LOOPS: DrumLoop[] = [
  {
    title: "Manifxt – Allure",
    bpm: "97 BPM",
    genre: "Afrobeats",
    file: `${AUDIO_DIR}Manifxt - Allure Drum Loop 97BPM - Afrobeats.wav`,
  },
  {
    title: "Manifxt – Expenses",
    bpm: "98 BPM",
    genre: "Afrobeats",
    file: `${AUDIO_DIR}Manifxt - Expenses Drum Loop 98BPM - Afrobeats.wav`,
  },
  {
    title: "Manifxt – Lemon",
    bpm: "105 BPM",
    genre: "Afrobeats",
    file: `${AUDIO_DIR}Manifxt - Lemon Drum Loop 105BPM - Afrobeats.wav`,
  },
  {
    title: "Manifxt – Lasgidi",
    bpm: "112 BPM",
    genre: "Amapiano",
    file: `${AUDIO_DIR}Manifxt - Lasgidi Drum Loop 112BPM - Amapiano.wav`,
  },
  {
    title: "Manifxt – Magician",
    bpm: "118 BPM",
    genre: "Amapiano",
    file: `${AUDIO_DIR}Manifxt - Magician Drum Loop 118BPM - Amapiano.wav`,
  },
  {
    title: "Manifxt – Kinetic",
    bpm: "120 BPM",
    genre: "Afrohouse",
    file: `${AUDIO_DIR}Manifxt - Kinetic Drum Loop 120BPM - Afrohouse.wav`,
  },
];

/* ------------------------------------------------------------------ */
/*  Waveform bars – animated when playing                              */
/* ------------------------------------------------------------------ */
const BAR_HEIGHTS = [
  18, 32, 24, 40, 28, 50, 36, 44, 20, 38, 30, 48, 22, 42, 26, 52, 34, 46, 28,
  38, 20, 44, 32, 50, 24, 36, 18, 42, 30, 48, 22, 40, 26, 34, 18, 44, 28, 52,
  36, 46, 20, 38,
];

function WaveformBars({ playing }: { playing: boolean }) {
  return (
    <div className="flex items-end gap-[2px] h-12 px-1">
      {BAR_HEIGHTS.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm transition-all duration-150"
          style={{
            height: `${h}%`,
            backgroundColor: playing ? "#42FF00" : "rgba(255,255,255,0.25)",
            opacity: playing ? 0.85 + (i % 3) * 0.05 : 1,
            animation: playing
              ? `barBounce ${0.4 + (i % 5) * 0.08}s ease-in-out infinite alternate`
              : "none",
          }}
        />
      ))}

      <style>{`
        @keyframes barBounce {
          from { transform: scaleY(0.6); }
          to   { transform: scaleY(1.15); }
        }
      `}</style>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Spinning vinyl disc                                                 */
/* ------------------------------------------------------------------ */
function VinylDisc({ playing }: { playing: boolean }) {
  return (
    <div
      className="relative flex items-center justify-center rounded-full bg-[#111] border-4 border-[#222]"
      style={{
        width: 120,
        height: 120,
        boxShadow: playing
          ? "0 0 0 6px rgba(66,255,0,0.15), 0 8px 32px rgba(0,0,0,0.7)"
          : "0 8px 32px rgba(0,0,0,0.5)",
        animation: playing ? "spin 4s linear infinite" : "none",
      }}
    >
      {[36, 52, 68, 84, 100].map((r) => (
        <div
          key={r}
          className="absolute rounded-full border border-white/[0.06]"
          style={{ width: r, height: r }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="rounded-full bg-[#1a1a1a] border-2 border-[#333]"
          style={{ width: 28, height: 28 }}
        />
      </div>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Individual drum card                                               */
/* ------------------------------------------------------------------ */

// Global ref so only one track plays at a time
const currentlyPlaying: { ref: HTMLAudioElement | null } = { ref: null };

function DrumCard({ loop, index }: { loop: DrumLoop; index: number }) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(loop.file);
    audio.loop = true;
    audioRef.current = audio;

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onEnded = () => setPlaying(false);
    const onTimeUpdate = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("timeupdate", onTimeUpdate);

    return () => {
      audio.pause();
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("timeupdate", onTimeUpdate);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handlePlayPause() {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
    } else {
      // Stop any other track that is playing
      if (currentlyPlaying.ref && currentlyPlaying.ref !== audio) {
        currentlyPlaying.ref.pause();
      }
      currentlyPlaying.ref = audio;
      audio.play().catch(() => {/* autoplay policy – user gesture required */});
    }
  }

  return (
    <div className="relative flex flex-col rounded-2xl overflow-hidden bg-[#0e0e0e] border border-white/10 hover:border-[#42FF00]/30 transition-all duration-300 group">
      {/* Top bar */}
      <div className="flex items-center justify-between px-3 py-2.5 bg-[#161616] border-b border-white/[0.07]">
        <div className="flex items-center gap-2 min-w-0">
          <Music2 className="size-3.5 shrink-0 text-[#42FF00]" />
          <span className="text-xs font-medium text-white truncate [font-family:ui-sans-serif,system-ui,sans-serif]">
            {loop.title}
          </span>
        </div>
        {/* Genre + BPM */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="rounded-full bg-[#42FF00]/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#42FF00] [font-family:ui-sans-serif,system-ui,sans-serif]">
            {loop.genre}
          </span>
          <span className="rounded-full bg-white/5 px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider text-white/50 [font-family:ui-sans-serif,system-ui,sans-serif]">
            {loop.bpm}
          </span>
        </div>
      </div>

      {/* Main card body */}
      <div className="flex flex-col items-center gap-4 px-4 pt-5 pb-4">

        {/* Vinyl + Play button */}
        <div className="relative flex items-center justify-center" style={{ width: 120, height: 120 }}>
          <VinylDisc playing={playing} />
          {/* Play/Pause overlay */}
          <button
            onClick={handlePlayPause}
            aria-label={playing ? "Pause" : "Play"}
            className="absolute inset-0 flex items-center justify-center rounded-full z-10 group/btn"
          >
            <div
              className="flex items-center justify-center rounded-full transition-all duration-200 group-hover/btn:scale-110"
              style={{
                width: 44,
                height: 44,
                background: playing
                  ? "rgba(66,255,0,0.92)"
                  : "rgba(66,255,0,0.85)",
                boxShadow: playing
                  ? "0 0 20px rgba(66,255,0,0.6)"
                  : "0 4px 16px rgba(0,0,0,0.5)",
              }}
            >
              {playing ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="#000">
                  <rect x="3" y="2" width="4" height="12" rx="1.5" />
                  <rect x="9" y="2" width="4" height="12" rx="1.5" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="#000">
                  <path d="M4 2.5l10 5.5-10 5.5V2.5z" />
                </svg>
              )}
            </div>
          </button>
        </div>

        {/* Waveform */}
        <div className="w-full">
          <WaveformBars playing={playing} />
        </div>

        {/* Progress bar */}
        <div className="w-full h-[2px] rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full rounded-full bg-[#42FF00] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Bottom row */}
        <div className="flex items-center justify-between w-full pt-1 border-t border-white/[0.06]">
          <span className="text-[10px] text-white/30 [font-family:ui-sans-serif,system-ui,sans-serif]">
            Loop #{String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-[10px] text-white/20 [font-family:ui-sans-serif,system-ui,sans-serif]">
            {playing ? "● PLAYING" : "READY"}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */
const Authentic = () => {
  return (
    <section id="authentic" className="bg-black py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] flex flex-col items-center justify-center px-6">
        <h2 className="font-display text-2xl font-bold uppercase text-center leading-tight tracking-[0.02em] text-white md:text-4xl">
          AUTHENTIC DRUMS. <span className="text-[#42FF00]">NO LIMITS.</span>
        </h2>
        <p className="text-sm text-white/70 my-10 md:text-base lg:max-w-2xl text-center leading-relaxed [font-family:ui-sans-serif,system-ui,sans-serif]">
          Unlimited access to a rich library of real, handcrafted African drum
          loops, built by producers who understand rhythm, culture, and modern
          music.
        </p>
      </div>

      <div className="mx-auto max-w-[1000px] px-6">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 md:gap-4">
          {DRUM_LOOPS.map((loop, i) => (
            <DrumCard key={i} loop={loop} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Authentic;
