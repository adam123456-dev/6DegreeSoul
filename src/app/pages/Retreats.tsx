import { Link } from "react-router";
import { motion } from "motion/react";
import { Heart, Sun, Waves, Sparkles, Calendar, ArrowRight } from "lucide-react";
import { brandImages } from "../../data/brandImages";

export default function Retreats() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section
        className="py-32 relative"
        style={{
          backgroundImage: `url(${brandImages.cardRetreats})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 font-serif">
              Wellness retreats in Hawai&apos;i
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto font-light">
              Small groups, real rest, and practices that still make sense when you fly home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Retreat Experience Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl mb-4 text-gray-900 font-serif">
              The Retreat Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A carefully curated journey designed to help you reconnect with yourself, release what no longer serves you, and step into your highest potential.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={brandImages.resort}
                alt="Luxury Retreat Setting"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl mb-6 text-gray-900 font-serif">
                More Than a Vacation — A Transformation
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our retreats blend luxury accommodations with deep inner work, movement, mindfulness, and the healing power of Hawaii's sacred landscapes.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                You'll leave feeling lighter, clearer, more aligned — and ready to create the life you've been dreaming of.
              </p>
            </motion.div>
          </div>

          {/* What's Included Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Daily Wellness",
                description: "Yoga, meditation, breathwork, and movement practices",
              },
              {
                icon: Sun,
                title: "Sacred Sites",
                description: "Private access to Hawaii's most transformational locations",
              },
              {
                icon: Waves,
                title: "Nature Immersion",
                description: "Waterfall hikes, beach time, and ocean experiences",
              },
              {
                icon: Sparkles,
                title: "Personal Growth",
                description: "Workshops, journaling, and guided reflection",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full mb-4">
                  <item.icon className="text-amber-700" size={32} />
                </div>
                <h4 className="text-xl mb-2 text-gray-900">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Gain Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl mb-6 text-gray-900 font-serif">
              What You'll Gain
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                title: "Clarity & Direction",
                text: "Leave the noise behind and reconnect with what truly matters to you.",
              },
              {
                title: "Deep Rest & Renewal",
                text: "Give your nervous system the reset it's been craving through intentional rest and presence.",
              },
              {
                title: "Authentic Connection",
                text: "Bond with like-minded individuals in a safe, supportive, and inspiring environment.",
              },
              {
                title: "Tools for Life",
                text: "Walk away with practices and frameworks you can integrate into your daily routine long after the retreat ends.",
              },
              {
                title: "Expanded Perspective",
                text: "See yourself, your life, and your potential through a completely new lens.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md border-l-4 border-amber-700"
              >
                <h3 className="text-xl mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-700">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Retreats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl mb-4 text-gray-900 font-serif">
              Upcoming Retreats
            </h2>
            <p className="text-xl text-gray-600">
              Limited spaces available — join the waitlist to be notified first
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Rise & Align: 5-Day Transformation",
                dates: "June 15-20, 2026",
                location: "Maui, Hawaii",
                spots: "8 spots available",
                price: "Starting at $4,500",
                image: brandImages.aboutMeet,
                description: "A deep dive into alignment, purpose, and stepping into your power.",
              },
              {
                title: "Sacred Renewal: 3-Day Reset",
                dates: "September 8-11, 2026",
                location: "Kauai, Hawaii",
                spots: "10 spots available",
                price: "Starting at $2,800",
                image: brandImages.waterfall,
                description: "Rest, restore, and reconnect with yourself in the Garden Isle.",
              },
            ].map((retreat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100"
              >
                <img
                  src={retreat.image}
                  alt={retreat.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center gap-2 text-amber-700 mb-4">
                    <Calendar size={18} />
                    <span className="text-sm">{retreat.dates}</span>
                  </div>
                  <h3 className="text-2xl mb-2 text-gray-900">{retreat.title}</h3>
                  <p className="text-gray-600 mb-4">{retreat.description}</p>
                  <div className="space-y-2 mb-6 text-sm text-gray-700">
                    <p>📍 {retreat.location}</p>
                    <p>👥 {retreat.spots}</p>
                    <p className="text-amber-700">{retreat.price}</p>
                  </div>
                  <Link
                    to="/contact"
                    className="block w-full text-center px-6 py-3 bg-amber-700 text-white rounded-full hover:bg-amber-800 transition-all"
                  >
                    Join Waitlist
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a1510] to-[#0c1929]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-2xl sm:text-3xl italic mb-6 leading-relaxed font-light">
              &ldquo;I came overloaded and left quiet enough to hear myself think again. Nicole holds the container—firm
              and kind.&rdquo;
            </p>
            <p className="text-lg text-white/80">— Retreat participant (placeholder until release)</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl mb-6 text-gray-900 font-serif">
              Ready to Transform Your Life?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join the waitlist to be the first to know about upcoming retreats
            </p>
            <Link to="/contact" className="btn-gold !rounded-full inline-flex gap-2 text-lg">
              Join the waitlist
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}