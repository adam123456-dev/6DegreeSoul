import { motion } from "motion/react";

function SunMark() {
  return (
    <svg viewBox="0 0 48 48" className="h-9 w-9 text-amber-600" aria-hidden>
      <circle cx="24" cy="24" r="7" fill="currentColor" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <line
          key={deg}
          x1="24"
          y1="5"
          x2="24"
          y2="11"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          transform={`rotate(${deg} 24 24)`}
        />
      ))}
    </svg>
  );
}

type Entry =
  | { key: string; kind: "lines"; a: string; b: string }
  | { key: string; kind: "single"; text: string }
  | { key: string; kind: "sun" };

const entries: Entry[] = [
  { key: "mus", kind: "lines", a: "Miss", b: "United States" },
  { key: "hnn", kind: "lines", a: "Hawaii", b: "News Now" },
  { key: "sun", kind: "sun" },
  { key: "mv", kind: "single", text: "Mindvalley" },
];

export default function AsSeenInStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55 }}
      className="w-full"
    >
      <p className="font-serif text-xl sm:text-2xl text-[#2c2824] text-center mb-8 sm:mb-10 tracking-[0.08em]">
        As Seen In
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 md:gap-x-20">
        {entries.map((item, i) => (
          <motion.div
            key={item.key}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.04 * i, duration: 0.45 }}
            className="flex flex-col items-center justify-center min-h-[2.5rem] opacity-90 hover:opacity-100 transition-opacity"
          >
            {item.kind === "sun" && <SunMark />}
            {item.kind === "lines" && (
              <div className="text-center text-[#2c2824] leading-tight">
                <div className="text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#6b5d4f] font-medium">{item.a}</div>
                <div className="font-serif text-base sm:text-lg font-semibold mt-0.5 tracking-[0.06em]">{item.b}</div>
              </div>
            )}
            {item.kind === "single" && (
              <div className="font-serif text-lg sm:text-xl font-semibold text-[#2c2824] tracking-[0.12em]">{item.text}</div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
