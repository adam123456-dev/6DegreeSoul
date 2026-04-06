import { Link } from "react-router";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "./ui/utils";

type LivingPrimaryCtaProps = {
  to: string;
  /** Classes for the inner `Link` (e.g. `btn-gold`, sizing). */
  className?: string;
  /** Match button radius so the wrapper matches corners (`rounded-lg` vs `rounded-full`). */
  wrapperClassName?: string;
  /**
   * Header-style CTA: CSS flowing gold gradient on the button (see `.btn-gold-flow`).
   * Skips the outer box-shadow pulse so the gradient is the hero.
   */
  flowingGradient?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

const nudgeAnimate = {
  x: [0, 0, 0, 0, -1.2, 1.2, -0.6, 0.6, 0, 0, 0],
  rotate: [0, 0, 0, 0, -0.35, 0.35, -0.2, 0.2, 0, 0, 0],
};

const nudgeTransition = {
  x: {
    duration: 13,
    repeat: Infinity,
    ease: "linear" as const,
    times: [0, 0.88, 0.89, 0.895, 0.905, 0.915, 0.925, 0.935, 0.945, 0.95, 1],
  },
  rotate: {
    duration: 13,
    repeat: Infinity,
    ease: "linear" as const,
    times: [0, 0.88, 0.89, 0.895, 0.905, 0.915, 0.925, 0.935, 0.945, 0.95, 1],
  },
};

const glowPulseAnimate = {
  boxShadow: [
    "0 0 0 0 rgba(232, 197, 71, 0)",
    "0 0 22px 6px rgba(212, 175, 55, 0.26)",
    "0 0 30px 8px rgba(232, 197, 71, 0.16)",
    "0 0 0 0 rgba(232, 197, 71, 0)",
  ],
  ...nudgeAnimate,
};

const glowPulseTransition = {
  boxShadow: {
    duration: 3.6,
    repeat: Infinity,
    ease: [0.45, 0, 0.55, 1] as const,
  },
  ...nudgeTransition,
};

/**
 * Primary booking CTA: optional flowing gold (nav) or soft halo + rare nudge (elsewhere).
 * Hover/tap stay on `.btn-gold` in CSS. Respects `prefers-reduced-motion`.
 */
export default function LivingPrimaryCta({
  to,
  className,
  wrapperClassName = "rounded-lg",
  flowingGradient = false,
  onClick,
  children,
}: LivingPrimaryCtaProps) {
  const reduceMotion = useReducedMotion();

  const linkClass = cn(className, flowingGradient && "btn-gold-flow");

  const hasFullWidth = Boolean(className?.includes("w-full"));

  /** Match link width: `w-full sm:w-auto` on the link needs `sm:w-fit` on the wrapper or the span stays full-width. */
  const wrapperWidth = (() => {
    if (!hasFullWidth) return "";
    if (className.includes("sm:w-auto") || className.includes("md:w-auto") || className.includes("lg:w-auto")) {
      return "w-full min-w-0 sm:w-fit max-w-full";
    }
    return "w-full";
  })();

  /** In `flex-col`, default stretch makes `inline-flex` wrappers full-width while the link stays narrow — phantom hit area. */
  const wrapperSelf = !hasFullWidth ? "self-center" : "";

  if (reduceMotion) {
    return (
      <Link to={to} className={linkClass} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <motion.span
      className={cn("inline-flex", wrapperClassName, wrapperWidth, wrapperSelf)}
      animate={flowingGradient ? nudgeAnimate : glowPulseAnimate}
      transition={flowingGradient ? nudgeTransition : glowPulseTransition}
    >
      <Link to={to} className={linkClass} onClick={onClick}>
        {children}
      </Link>
    </motion.span>
  );
}
