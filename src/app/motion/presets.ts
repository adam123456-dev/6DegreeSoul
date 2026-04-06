/** Shared easing — calm, editorial (not snappy / “template”) */
export const easeOutLux = [0.22, 1, 0.36, 1] as const;

export const viewReveal = {
  once: true,
  amount: 0.16 as const,
  margin: "0px 0px -72px 0px" as const,
};

export const fadeUpProps = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: viewReveal,
  transition: { duration: 0.72, delay, ease: easeOutLux },
});

export const fadeScaleProps = (delay = 0) => ({
  initial: { opacity: 0, y: 24, scale: 0.985 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: viewReveal,
  transition: { duration: 0.75, delay, ease: easeOutLux },
});
