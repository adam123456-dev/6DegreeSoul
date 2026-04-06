import heroShowcase from "../assets/hero-section.png";
import oceanLeadGen from "../assets/ocean-wave-lead.png";
import bayMountainsGen from "../assets/hawaii-bay-mountains.png";
import closingCtaScene from "../assets/closing-ethereal-bay.png";
import nicolePortrait from "../assets/nicole.jpg";

/**
 * heroShowcase — composite: hero key visual only.
 * bayMountainsGen — services + editorial full-bleed (with scrims).
 * oceanLeadGen — lead section full-bleed behind form.
 * closingCtaScene — closing band (masked + ramp to footer).
 */
export const homeAssets = {
  heroShowcase,
  leadOcean: oceanLeadGen,
  bayMountains: bayMountainsGen,
  closingCta: closingCtaScene,
  nicole: nicolePortrait,
} as const;
