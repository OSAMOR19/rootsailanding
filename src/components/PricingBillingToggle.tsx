"use client";

import { useState } from "react";

export function PricingBillingToggle({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (val: boolean) => void;
}) {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label="Toggle billing period"
        onClick={() => onChange(!checked)}
        className="relative h-8 w-14 shrink-0 rounded-full bg-gray-100 ring-1 ring-white/10 transition hover:ring-white/20"
      >
      <span
        className={`absolute top-1 left-1 size-6 rounded-full bg-black shadow transition-transform duration-200 ${
          checked ? "translate-x-6" : "translate-x-0"
        }`}
      />
      </button>
      <span className="text-sm font-semibold uppercase tracking-wide text-white">
        {checked ? "Yearly" : "Monthly"}
      </span>
    </div>
  );
}
