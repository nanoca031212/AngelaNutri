"use client";

import { ArrowUpRight } from "lucide-react";

interface CtaButtonProps {
  label: string;
  className?: string;
}

export default function CtaButton({ label, className = "" }: CtaButtonProps) {
  return (
    <button
      className={`group relative w-full flex items-center justify-between bg-primary rounded-full text-white font-bold shadow-xl hover:shadow-2xl hover:bg-primary/90 transition-all active:scale-[0.98] ${className}`}
    >
      <span className="flex-1 text-center text-[13px] sm:text-sm md:text-base tracking-wider md:tracking-widest uppercase py-3 px-2 sm:px-4">
        {label}
      </span>
      <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary group-hover:rotate-45 transition-transform duration-300 mr-1">
        <ArrowUpRight className="w-5 h-5" />
      </div>
    </button>
  );
}
