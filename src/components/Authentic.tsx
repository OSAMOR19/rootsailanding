"use client";

import React, { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { Download, Music2 } from "lucide-react";

type DrumLoop = {
  title: string;
  bpm: string;
  genre: string;
  scUrl: string;
};

const DRUM_LOOPS: DrumLoop[] = [
  {
    title: "Manifxt – Allure",
    bpm: "97 BPM",
    genre: "Afrobeats",
    scUrl:
      "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/isaac-osamor/manifxt-allure-drum-loop-97bpm-1&color=%2342FF00&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false",
  },
  {
    title: "Manifxt – Manor",
    bpm: "103 BPM",
    genre: "Afropop",
    scUrl:
      "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/isaac-osamor/manifxt-manor-drum-loop-103bpm&color=%2342FF00&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false",
  },
  {
    title: "Manifxt – Construct",
    bpm: "110 BPM",
    genre: "Highlife",
    scUrl:
      "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/isaac-osamor/manifxt-construct-drum-loop-110bpm&color=%2342FF00&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false",
  },
  {
    title: "Manifxt – Gadus",
    bpm: "95 BPM",
    genre: "Amapiano",
    scUrl:
      "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/isaac-osamor/manifxt-gadus-drum-loop-95bpm&color=%2342FF00&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false",
  },
  {
    title: "Manifxt – Hemis",
    bpm: "100 BPM",
    genre: "Afrobeats",
    scUrl:
      "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/isaac-osamor/manifxt-hemis-drum-loop-100bpm&color=%2342FF00&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false",
  },
  {
    title: "Manifxt – Magici",
    bpm: "108 BPM",
    genre: "Afropop",
    scUrl:
      "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/isaac-osamor/manifxt-magici-drum-loop-108bpm&color=%2342FF00&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false",
  },
  {
    title: "Manifxt – Gadus II",
    bpm: "95 BPM",
    genre: "Amapiano",
    scUrl:
      "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/isaac-osamor/manifxt-gadus-ii-drum-loop-95bpm&color=%2342FF00&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false",
  },
  {
    title: "Manifxt – Lemon",
    bpm: "112 BPM",
    genre: "Highlife",
    scUrl:
      "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/isaac-osamor/manifxt-lemon-drum-loop-112bpm&color=%2342FF00&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false",
  },
];

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
          }}
        />
      ))}
    </div>
  );
}

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
      {/* Vinyl grooves */}
      {[36, 52, 68, 84, 100].map((r) => (
        <div
          key={r}
          className="absolute rounded-full border border-white/[0.06]"
          style={{ width: r, height: r }}
        />
      ))}
      {/* Center label */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="rounded-full bg-[#1a1a1a] border-2 border-[#333]" style={{ width: 28, height: 28 }} />
      </div>
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

function DrumCard({ loop, index }: { loop: DrumLoop; index: number }) {
  const [playing, setPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const widgetRef = useRef<unknown>(null);
  const [widgetReady, setWidgetReady] = useState(false);

  useEffect(() => {
    let attempts = 0;
    const maxAttempts = 30;

    function tryBindWidget() {
      const iframe = iframeRef.current;
      if (!iframe) return;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const SC = (window as any).SC;
      if (!SC?.Widget) {
        if (attempts < maxAttempts) {
          attempts++;
          setTimeout(tryBindWidget, 500);
        }
        return;
      }

      const widget = SC.Widget(iframe);
      widgetRef.current = widget;

      widget.bind(SC.Widget.Events.READY, () => {
        setWidgetReady(true);
      });

      widget.bind(SC.Widget.Events.PLAY, () => setPlaying(true));
      widget.bind(SC.Widget.Events.PAUSE, () => setPlaying(false));
      widget.bind(SC.Widget.Events.FINISH, () => setPlaying(false));
    }

    tryBindWidget();
  }, []);

  function handlePlayPause() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const widget = widgetRef.current as any;
    if (!widget) return;

    if (playing) {
      widget.pause();
    } else {
      widget.play();
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
        {/* SoundCloud logo mark */}
        <svg className="size-4 shrink-0 opacity-50" viewBox="0 0 24 24" fill="#ff5500">
          <path d="M1.175 12.225c-.085 0-.14.06-.149.143l-.201 1.557.201 1.544c.008.084.064.143.15.143.083 0 .14-.06.149-.143l.228-1.544-.228-1.557c-.01-.083-.066-.143-.15-.143zm-.899.571c-.099 0-.175.076-.175.175l-.101 1.386.101 1.373c0 .099.076.175.175.175.1 0 .175-.076.175-.175l.115-1.373-.115-1.386c0-.099-.076-.175-.175-.175zm1.798-.088c-.107 0-.187.08-.196.185l-.182 1.474.182 1.462c.01.104.09.185.196.185.107 0 .187-.081.196-.185l.208-1.462-.208-1.474c-.01-.105-.09-.185-.196-.185zm.9-.28c-.12 0-.213.094-.222.212l-.163 1.754.163 1.741c.01.118.103.212.222.212.12 0 .212-.094.222-.212l.186-1.741-.186-1.754c-.01-.118-.103-.212-.222-.212zm.898.1c-.131 0-.238.106-.247.237l-.145 1.654.145 1.64c.01.132.116.238.247.238.132 0 .238-.106.247-.237l.165-1.641-.165-1.654c-.01-.131-.115-.237-.247-.237zm.9-.02c-.145 0-.263.118-.271.262l-.127 1.674.127 1.659c.009.145.126.263.271.263.145 0 .263-.118.271-.263l.144-1.659-.144-1.674c-.009-.144-.126-.262-.271-.262zm.899.217c-.156 0-.284.128-.292.284l-.109 1.457.109 1.442c.008.156.136.284.292.284.157 0 .285-.128.293-.284l.125-1.442-.125-1.457c-.009-.156-.136-.284-.293-.284zm3.598-2.124c-.08-.034-.165-.052-.254-.052-.185 0-.356.072-.484.2a.684.684 0 0 0-.2.485v4.625c0 .19.154.344.344.344h3.254a.935.935 0 0 0 .935-.934v-1.41a2.808 2.808 0 0 0-2.808-2.808 2.8 2.8 0 0 0-.787.113zm1.3-1.124c-.35 0-.636.286-.636.636v6.05c0 .35.285.636.635.636h.001c.35 0 .635-.285.635-.636V9.48a2.136 2.136 0 0 0-2.135-2.135 2.136 2.136 0 0 0-1.813 1.014 3.71 3.71 0 0 0-.323-.713 3.757 3.757 0 0 0-3.265-1.9 3.759 3.759 0 0 0-3.758 3.758v.003l.16 3.625-.16 1.516c-.01.158.118.286.276.286h7.982c.158 0 .285-.128.285-.286V9.482a2.138 2.138 0 0 0-2.136-2.136 2.137 2.137 0 0 0-2.127 1.98 3.705 3.705 0 0 0-.148-.956z" />
        </svg>
      </div>

      {/* Main card body */}
      <div className="flex flex-col items-center gap-4 px-4 pt-5 pb-4">
        {/* Genre + BPM tags */}
        <div className="flex items-center gap-2 self-start">
          <span className="rounded-full bg-[#42FF00]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#42FF00] [font-family:ui-sans-serif,system-ui,sans-serif]">
            {loop.genre}
          </span>
          <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white/50 [font-family:ui-sans-serif,system-ui,sans-serif]">
            {loop.bpm}
          </span>
        </div>

        {/* Vinyl + Play button */}
        <div className="relative flex items-center justify-center" style={{ width: 120, height: 120 }}>
          <VinylDisc playing={playing} />
          {/* Play/Pause overlay */}
          <button
            onClick={handlePlayPause}
            disabled={!widgetReady}
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

        {/* Bottom row */}
        <div className="flex items-center justify-between w-full pt-1 border-t border-white/[0.06]">
          <span className="text-[10px] text-white/30 [font-family:ui-sans-serif,system-ui,sans-serif]">
            Loop #{String(index + 1).padStart(2, "0")}
          </span>
          <button
            aria-label="Download"
            className="flex items-center gap-1 rounded-full bg-white/5 hover:bg-[#42FF00]/10 px-2.5 py-1 text-[10px] text-white/40 hover:text-[#42FF00] transition-colors [font-family:ui-sans-serif,system-ui,sans-serif]"
          >
            <Download className="size-3" />
            <span>Download</span>
          </button>
        </div>
      </div>

      {/* Hidden SoundCloud iframe */}
      <iframe
        ref={iframeRef}
        src={loop.scUrl}
        className="absolute opacity-0 pointer-events-none w-0 h-0"
        allow="autoplay"
        title={loop.title}
      />
    </div>
  );
}

const Authentic = () => {
  return (
    <section id="authentic" className="bg-black py-20 md:py-28">
      {/* SoundCloud Widget API */}
      <Script src="https://w.soundcloud.com/player/api.js" strategy="lazyOnload" />

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

      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-4 md:gap-4">
          {DRUM_LOOPS.map((loop, i) => (
            <DrumCard key={i} loop={loop} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Authentic;
