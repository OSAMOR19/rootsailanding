"use client";

import { useState } from "react";

export function PricingBillingToggle() {
  const [on, setOn] = useState(false);

  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label="Toggle billing period"
      onClick={() => setOn((v) => !v)}
      className="relative h-6 w-10 shrink-0 rounded-full bg-black/50 ring-1 ring-white/10 transition hover:ring-white/20"
    >
      <span
        className={`absolute top-1 left-1 size-4 rounded-full bg-white shadow transition-transform duration-200 ${
          on ? "translate-x-4" : "translate-x-0"
        }`}
      />
    </button>
  );
}
