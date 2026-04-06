import { useRef } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { Sparkles, Heart, Users, ArrowRight, Star, ChevronRight } from "lucide-react";
import AsSeenInStrip from "../components/AsSeenInStrip";
import LivingPrimaryCta from "../components/LivingPrimaryCta";
import { easeOutLux, fadeUpProps, fadeScaleProps, viewReveal } from "../motion/presets";
import { brandImages } from "../../data/brandImages";
import { homeAssets } from "../../data/homeAssets";

export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <div>
      {/* Hero — owned composite; copy on open sky / water */}
      <section
        ref={heroRef}
        className="relative -mt-24 pt-24 min-h-[100svh] flex flex-col justify-end lg:justify-center overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 -z-10 scale-[1.08] will-change-transform"
          style={{ y: bgY }}
        >
          <img
            src={homeAssets.heroShowcase}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-[30%_center] sm:object-[25%_center] lg:object-center"
          />
        </motion.div>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-l from-amber-50/92 via-amber-50/55 to-transparent lg:from-white/82 lg:via-amber-50/35 lg:to-transparent" />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-amber-50/90 via-transparent to-amber-100/25 lg:from-transparent lg:to-amber-100/20" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 pt-28 lg:py-32 lg:flex lg:justify-end">
          <motion.div
            className="w-full max-w-xl lg:max-w-lg xl:max-w-xl text-left lg:text-left"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.14 } },
            }}
          >
            <motion.h1
              className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-[2.75rem] leading-[1.15] mb-5 text-[#1a1614] [text-shadow:0_0_28px_rgba(255,252,248,0.95)]"
              variants={{
                hidden: { opacity: 0, y: 22 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.78, ease: easeOutLux } },
              }}
            >
              Experience Hawaii Like Never Before
            </motion.h1>
            <motion.p
              className="text-[#3d3429] text-base sm:text-lg leading-relaxed mb-9 font-normal border-l-[3px] border-amber-600/80 pl-4"
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.68, ease: easeOutLux } },
              }}
            >
              Luxury Private Tours &amp; Transformational Retreats with Ms. Hawaii United USA 2025
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 items-center"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.64, ease: easeOutLux } },
              }}
            >
              <LivingPrimaryCta
                to="/contact"
                className="btn-gold px-9 justify-center shadow-lg w-full sm:w-auto"
              >
                Plan Your Experience
                <ChevronRight size={20} strokeWidth={2.5} />
              </LivingPrimaryCta>
              <motion.a
                href="#lead-guide"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#c9a227] bg-white px-8 py-4 text-[#2a2418] font-medium shadow-md hover:bg-amber-50/90 transition-colors"
                whileHover={{ scale: 1.02, boxShadow: "0 12px 28px -8px rgba(201,162,39,0.32)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.28, ease: easeOutLux }}
              >
                Get the Free Hawaii Guide
                <span className="text-amber-800 font-semibold">&gt;&gt;</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16 border-b border-amber-900/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AsSeenInStrip />
        </div>
      </section>

      {/* Services — full-bleed island art + light scrim; cards stay crisp */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <img
          src={homeAssets.bayMountains}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="lazy"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-white/94 via-[#fffbf7]/92 to-[#faf6f0]/96"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_20%,rgba(255,253,248,0.55)_0%,transparent_55%)]"
          aria-hidden
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUpProps()} className="text-center mb-14 sm:mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1e1b18] mb-3 tracking-[0.06em]">
              Create Your Dream Hawaiian Escape
            </h2>
            <p className="text-[#5c5348] max-w-2xl mx-auto text-base">
              Private tours, restorative retreats, and stage-ready storytelling—each crafted around you.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 lg:gap-10"
            initial="hidden"
            whileInView="show"
            viewport={viewReveal}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
            }}
          >
            {[
              {
                title: "VIP Private Tours",
                sub: "Discover exclusive island adventures",
                img: brandImages.cardTours,
                to: "/tours",
                cta: "Explore tours",
                icon: Sparkles,
              },
              {
                title: "Wellness Retreats",
                sub: "Renew & transform in paradise",
                img: brandImages.cardRetreats,
                to: "/retreats",
                cta: "View retreats",
                icon: Heart,
              },
              {
                title: "Speaking & Coaching",
                sub: "Inspire & empower your journey",
                img: brandImages.cardSpeaking,
                to: "/speaking",
                cta: "See topics",
                icon: Users,
              },
            ].map((card) => (
              <motion.article
                key={card.title}
                variants={{
                  hidden: { opacity: 0, y: 32 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.62, ease: easeOutLux } },
                }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 18px 44px -14px rgba(180, 140, 60, 0.28)",
                  transition: { duration: 0.4, ease: easeOutLux },
                }}
                className="group flex flex-col rounded-2xl overflow-hidden bg-white/95 backdrop-blur-[2px] shadow-[0_12px_40px_-12px_rgba(100,80,50,0.2)] border border-white/80 ring-1 ring-amber-100/60"
              >
                <div className="relative h-56 sm:h-60 overflow-hidden rounded-t-2xl">
                  <img
                    src={card.img}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.06]"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
                  <div className="absolute top-3 right-3 p-2.5 rounded-lg bg-white/90 shadow-sm border border-amber-100/80">
                    <card.icon className="text-amber-700" size={22} />
                  </div>
                </div>
                <div className="flex-1 flex flex-col p-7 text-left">
                  <h3 className="font-serif text-xl sm:text-2xl mb-2 text-[#8a6d1d] tracking-[0.05em]">{card.title}</h3>
                  <p className="text-[#4a433a] text-sm sm:text-base mb-6 flex-1 leading-relaxed">{card.sub}</p>
                  <Link
                    to={card.to}
                    className="inline-flex items-center gap-2 text-amber-900 font-semibold text-sm hover:text-amber-950 transition-colors"
                  >
                    {card.cta}
                    <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Meet Nicole — coast photography + radial paper scrim; portrait is the hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <img
          src={brandImages.aboutCoast}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="lazy"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_95%_90%_at_50%_45%,rgba(253,250,246,0.97)_0%,rgba(252,248,242,0.92)_42%,rgba(245,236,226,0.78)_100%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#fffdfb]/88 via-transparent to-[#f3ece4]/85"
          aria-hidden
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewReveal}
              transition={{ duration: 0.78, ease: easeOutLux }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute -inset-2 bg-gradient-to-br from-amber-200/50 to-teal-200/30 rounded-3xl blur-2xl" />
              <motion.div
                whileHover={{ scale: 1.015, transition: { duration: 0.45, ease: easeOutLux } }}
                className="relative rounded-3xl overflow-hidden shadow-xl ring-2 ring-white aspect-[4/5] max-h-[540px]"
              >
                <img
                  src={homeAssets.nicole}
                  alt="Nicole — Ms. Hawaii United USA 2025"
                  className="w-full h-full object-cover object-[center_18%]"
                />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewReveal}
              transition={{ duration: 0.78, ease: easeOutLux, delay: 0.06 }}
              className="order-1 lg:order-2"
            >
              <p className="text-[11px] uppercase tracking-[0.35em] text-amber-900/65 mb-3">Your host</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.35rem] text-[#1e1b18] mb-6 leading-snug tracking-[0.05em]">
                Meet Nicole, Your Guide &amp; Inspiration
              </h2>
              <div className="space-y-5 text-[#3d3429] leading-relaxed text-base sm:text-lg">
                <p>
                  Hi, I&apos;m Nicole—Ms. Hawaii United USA 2025 and founder of{" "}
                  <span className="font-semibold text-amber-900">6 Degree Soul</span>. Former corporate executive turned
                  island host: I design elevated private days, transformational retreats, and talks that still matter
                  after you fly home.
                </p>
                <p>If you want Hawai&apos;i with depth—and a little sparkle—you&apos;re in the right place.</p>
              </div>
              <Link to="/about" className="btn-gold mt-9 inline-flex">
                Learn More
                <ChevronRight size={20} strokeWidth={2.5} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Editorial — full-bleed bay, dark warm scrim; type like a magazine spread */}
      <section className="relative min-h-[min(68vh,640px)] flex items-center overflow-hidden py-24 sm:py-32">
        <img
          src={homeAssets.bayMountains}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
          loading="lazy"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#1c1410]/72 via-[#2a2218]/58 to-[#1a1512]/82"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/35"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_65%_at_50%_45%,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.45)_100%)]"
          aria-hidden
        />

        <div className="relative z-10 w-full max-w-3xl mx-auto px-6 sm:px-10 text-center">
          <motion.div {...fadeScaleProps()}>
            <h2 className="font-serif text-[clamp(1.15rem,2.8vw,2.15rem)] sm:text-2xl md:text-3xl lg:text-[2.35rem] leading-[1.35] mb-6 sm:mb-8">
              <span className="text-amber-100/95 uppercase tracking-[0.12em] sm:tracking-[0.16em] block sm:inline sm:whitespace-nowrap [text-shadow:0_2px_24px_rgba(0,0,0,0.4)]">
                The islands set the scene—
              </span>{" "}
              <span className="text-[#f0b8a8] normal-case tracking-[0.05em] font-medium block sm:inline mt-2 sm:mt-0 [text-shadow:0_2px_20px_rgba(0,0,0,0.35)]">
                I hold the space for what shifts inside you.
              </span>
            </h2>
            <p className="text-stone-200/90 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto [text-shadow:0_1px_12px_rgba(0,0,0,0.45)]">
              Thoughtful pacing, clear logistics, and real conversation—so you&apos;re not managing stress when you came
              here to release it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials — ocean strip + soft veil; cards read as objects on the scene */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <img
          src={brandImages.oceanWaves}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="lazy"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#faf7f2]/93 via-[#f9f6f1]/94 to-[#f3eee8]/96"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_0%,rgba(255,255,255,0.5)_0%,transparent_50%)]"
          aria-hidden
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            {...fadeUpProps()}
            className="font-serif text-2xl sm:text-3xl text-center text-[#1e1b18] mb-3 tracking-[0.06em]"
          >
            Words from people who showed up
          </motion.h2>
          <p className="text-center text-[#6b5d50] mb-12 max-w-lg mx-auto text-sm">
            Real names and headshots can replace these placeholders when releases are in place.
          </p>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="show"
            viewport={viewReveal}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
            }}
          >
            {[
              {
                quote:
                  "She mapped a day that matched my energy—not a checklist. I finally felt like I was in Hawai'i, not just driving past it.",
                who: "Private tour guest",
                where: "O'ahu",
              },
              {
                quote:
                  "Grounded, funny when it needed to be, and honestly restorative. Not performative wellness.",
                who: "Retreat participant",
                where: "Maui",
              },
              {
                quote:
                  "Our team still talks about Nicole's keynote. Confidence felt practical, not abstract.",
                who: "Corporate event lead",
                where: "U.S. West Coast",
              },
            ].map((t) => (
              <motion.blockquote
                key={t.who}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.62, ease: easeOutLux } },
                }}
                whileHover={{ y: -5, transition: { duration: 0.3, ease: easeOutLux } }}
                className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-[0_8px_30px_-8px_rgba(80,60,40,0.18)] border border-white/90 ring-1 ring-amber-100/50"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <p className="text-[#3d3429] leading-relaxed mb-5 text-sm sm:text-base">&ldquo;{t.quote}&rdquo;</p>
                <footer className="text-xs sm:text-sm text-amber-900/85 border-t border-amber-100 pt-4">
                  <span className="font-semibold text-[#1e1b18]">{t.who}</span>
                  <span className="text-[#7a7268]"> · {t.where}</span>
                </footer>
              </motion.blockquote>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lead — full-bleed wave art; warm dusk scrims (hero palette), not teal tech mesh */}
      <section id="lead-guide" className="relative py-28 sm:py-36 overflow-hidden min-h-[min(520px,70vh)] flex items-center">
        <img
          src={homeAssets.leadOcean}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="lazy"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#2a1810]/82 via-[#1a1518]/78 to-[#0c1218]/88"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_100%,rgba(120,72,40,0.35)_0%,transparent_55%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-amber-900/15"
          aria-hidden
        />

        <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            {...fadeScaleProps()}
            className="rounded-2xl bg-black/25 backdrop-blur-md ring-1 ring-white/15 px-5 py-8 sm:px-8 sm:py-10 shadow-[0_24px_80px_-20px_rgba(0,0,0,0.55)]"
          >
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl mb-3 text-white [text-shadow:0_2px_32px_rgba(0,0,0,0.5)] tracking-[0.05em]">
              Get My Free &ldquo;Luxury Hawaii Itinerary&rdquo;
            </h2>
            <p className="text-base sm:text-lg text-amber-50/90 mb-9 max-w-md mx-auto font-normal [text-shadow:0_1px_16px_rgba(0,0,0,0.4)]">
              Unlock the best hidden spots &amp; insider tips for an unforgettable island getaway.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="lead-email" className="sr-only">
                Email
              </label>
              <input
                id="lead-email"
                type="email"
                required
                placeholder="Enter Your Email"
                className="flex-1 rounded-lg px-5 py-3.5 text-[#1e1b18] shadow-inner border border-white/40 bg-white/95 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button type="submit" className="btn-gold whitespace-nowrap px-8 justify-center">
                Get the Guide
                <ChevronRight size={18} strokeWidth={2.5} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Closing — ethereal bay visible; ramp into footer navy */}
      <section className="relative overflow-hidden pt-28 sm:pt-36 pb-0 min-h-[min(520px,58vh)]">
        <div className="absolute inset-0 bg-[#e8e4dc]" aria-hidden />
        <img
          src={homeAssets.closingCta}
          alt=""
          className="absolute left-0 right-0 top-0 h-[min(58vh,560px)] w-full object-cover object-center opacity-[0.55]"
          loading="lazy"
          style={{
            maskImage: "linear-gradient(to bottom, black 0%, black 48%, transparent 88%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 48%, transparent 88%)",
          }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#f7f3ee]/80 via-[#ebe8e2]/55 to-transparent pointer-events-none"
          aria-hidden
        />

        <div className="relative z-10 max-w-2xl mx-auto px-6 sm:px-10 text-center pb-20 sm:pb-28 pt-4">
          <motion.div {...fadeScaleProps(0.05)}>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.35rem] mb-4 text-[#2a2620] tracking-[0.06em]">
              Ready to Start Your Hawaiian Adventure?
            </h2>
            <p className="text-[#4f4a44] text-base sm:text-lg font-light leading-relaxed mb-10 max-w-xl mx-auto">
              Plan your personalized escape today and experience the true spirit!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <LivingPrimaryCta
                to="/contact"
                className="btn-gold justify-center w-full min-w-0 sm:w-auto"
              >
                Plan your experience
                <ArrowRight size={20} />
              </LivingPrimaryCta>
              <Link
                to="/tours"
                className="inline-flex w-full min-w-0 sm:w-auto items-center justify-center gap-2 rounded-lg border-2 border-[#b84838]/35 bg-white/90 px-8 py-4 text-[#2a2418] font-medium hover:bg-white transition-colors shadow-sm"
              >
                Browse VIP tours
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
