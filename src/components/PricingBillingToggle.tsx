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
      className="relative h-8 w-14 shrink-0 rounded-full bg-gray-100 ring-1 ring-white/10 transition hover:ring-white/20"
    >
      <span
        className={`absolute top-1 left-1 size-6 rounded-full bg-black shadow transition-transform duration-200 ${
          on ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </button>
  );
}
