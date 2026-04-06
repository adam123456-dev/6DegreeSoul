import { Link } from "react-router";
import { motion } from "motion/react";
import { Heart, Star, Sparkles, ArrowRight, Crown } from "lucide-react";
import nicolePortrait from "../../assets/nicole-subpage.jpg";
import aboutSectionBg from "../../assets/about-section.png";

export default function About() {
  return (
    <div className="pt-24">
      <section className="relative py-32 sm:py-40 min-h-[min(60vh,640px)] flex items-center overflow-hidden">
        <img
          src={aboutSectionBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none"
          loading="eager"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/62 to-black/48"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/30"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_85%_70%_at_50%_45%,transparent_0%,rgba(0,0,0,0.25)_100%)]"
          aria-hidden
        />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
          >
            <div className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/15">
              <Crown className="text-amber-300" size={22} />
              <span className="text-sm sm:text-base tracking-[0.25em] uppercase text-amber-100">
                Ms. Hawaii United USA 2025
              </span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl mb-6 leading-tight">
              Meet <span className="text-amber-300">Nicole</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 font-light max-w-2xl mx-auto">
              Personal brand, island roots, and a bias toward real conversation—not polished scripts.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-amber-200/40 to-teal-900/15 rounded-3xl blur-2xl" />
              <img
                src={nicolePortrait}
                alt="Nicole"
                className="relative rounded-3xl shadow-2xl w-full h-[520px] object-cover object-[center_18%] ring-1 ring-amber-100/50"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl sm:text-5xl text-[#1e1b18] mb-8">The short version</h2>
              <div className="space-y-5 text-[#3d3429] text-lg leading-relaxed">
                <p>
                  I&apos;m Nicole—Ms. Hawaii United USA 2025 and the founder of{" "}
                  <span className="font-semibold text-amber-900">6 Degree Soul</span>. My work is simple to say and deep
                  to do: help you use Hawai&apos;i as a mirror—so you leave clearer than you arrived.
                </p>
                <p>
                  I didn&apos;t grow up planning pageant titles or tour companies. I grew into them after years in
                  corporate sales taught me pace, and the islands taught me presence. Now I split my energy between
                  private itineraries, retreat weeks, and stages where confidence and clarity actually matter.
                </p>
                <p>
                  If you work with me, expect warmth with backbone: on-time logistics, honest recommendations, and
                  space to feel something bigger than your to-do list.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl sm:text-5xl text-[#1e1b18] mb-4">Mission & vision</h2>
            <p className="text-[#5c5348] max-w-2xl mx-auto">
              The job description you shared—inspiring people to expand what they believe is possible—lives here.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 sm:p-12 rounded-2xl shadow-lg border border-amber-100/80"
            >
              <div className="mb-6 inline-flex p-4 rounded-xl bg-amber-50">
                <Sparkles className="text-amber-800" size={36} />
              </div>
              <h3 className="font-serif text-3xl mb-4 text-[#1e1b18]">Mission</h3>
              <p className="text-lg text-[#3d3429] leading-relaxed">
                Help people reconnect to themselves through travel, nature, and well-hosted experiences—so perspective
                shifts stick when the trip ends.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="bg-white p-10 sm:p-12 rounded-2xl shadow-lg border border-amber-100/80"
            >
              <div className="mb-6 inline-flex p-4 rounded-xl bg-amber-50">
                <Heart className="text-amber-800" size={36} />
              </div>
              <h3 className="font-serif text-3xl mb-4 text-[#1e1b18]">Vision</h3>
              <p className="text-lg text-[#3d3429] leading-relaxed">
                A brand known for integrity on the ground: elevated, high-energy, and spiritually grounded—where clients
                feel seen, safe, and stretched in the best way.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl sm:text-5xl text-center text-[#1e1b18] mb-12"
          >
            What I won&apos;t compromise on
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-amber-50/80 to-orange-50/50 p-10 sm:p-14 rounded-2xl border border-amber-200/60 shadow-sm"
          >
            <ul className="space-y-5 text-lg text-[#3d3429] leading-relaxed">
              <li className="flex gap-3">
                <Star className="text-amber-700 shrink-0 mt-1" size={22} />
                <span>
                  <strong className="text-[#1e1b18]">Land stewardship.</strong> We move through sacred places with
                  respect—fewer crowds, more care.
                </span>
              </li>
              <li className="flex gap-3">
                <Star className="text-amber-700 shrink-0 mt-1" size={22} />
                <span>
                  <strong className="text-[#1e1b18]">Straight talk.</strong> If a route or a timeline won&apos;t serve
                  you, I&apos;ll say so and offer a better fit.
                </span>
              </li>
              <li className="flex gap-3">
                <Star className="text-amber-700 shrink-0 mt-1" size={22} />
                <span>
                  <strong className="text-[#1e1b18]">Ownership.</strong> You get a site and assets you can hand to your
                  family developer without a maze of dependencies—same standard I hold for my own brand.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-gradient-to-br from-[#1a1510] via-amber-950 to-[#0c1929] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.35),transparent_50%)]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl sm:text-5xl mb-6">Let&apos;s talk specifics</h2>
            <p className="text-lg text-white/85 mb-10 font-light">
              Dates, islands, group size, what you&apos;re navigating—send it. I read every inquiry myself.
            </p>
            <Link to="/contact" className="btn-gold inline-flex">
              Contact Nicole
              <ArrowRight size={22} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
