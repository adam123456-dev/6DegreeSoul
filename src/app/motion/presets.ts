/** Shared easing — calm, editorial (not snappy / “template”) */
export const easeOutLux = [0.22, 1, 0.36, 1] as const;

export const viewReveal = {
  once: true,
  amount: 0.2 as const,
  margin: "0px 0px -56px 0px" as const,
};

export const fadeUpProps = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: viewReveal,
  transition: { duration: 0.68, delay, ease: easeOutLux },
});

export const fadeScaleProps = (delay = 0) => ({
  initial: { opacity: 0, y: 20, scale: 0.988 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: viewReveal,
  transition: { duration: 0.7, delay, ease: easeOutLux },
});
