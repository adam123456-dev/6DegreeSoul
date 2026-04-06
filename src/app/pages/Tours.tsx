import { Link } from "react-router";
import { motion } from "motion/react";
import { Check, Star, MapPin, Clock, Users, Camera, ArrowRight } from "lucide-react";
import { brandImages } from "../../data/brandImages";

export default function Tours() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section
        className="py-32 relative"
        style={{
          backgroundImage: `url(${brandImages.palmRoad})`,
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
              VIP private tours in Hawai&apos;i
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto font-light">
              One itinerary, your pace—sunrise swims, hidden trails, and the kind of local context you can&apos;t Google.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What's Included Section */}
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
              What's Included
            </h2>
            <p className="text-xl text-gray-600">
              Every detail designed for your comfort and transformation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "Fully Customized Itinerary",
                description: "Tailored to your interests, energy, and intentions — no cookie-cutter tours here.",
              },
              {
                icon: Users,
                title: "Private Experience",
                description: "Just you, your group, and Nicole. Intimate, personal, and deeply meaningful.",
              },
              {
                icon: Camera,
                title: "Photo-worthy timing",
                description: "Routes timed for golden light and viewpoints—bring your camera or phone; pro add-ons available on request.",
              },
              {
                icon: Star,
                title: "Local Insider Access",
                description: "Secret spots, hidden gems, and authentic experiences most tourists never see.",
              },
              {
                icon: Clock,
                title: "Flexible Timing",
                description: "Start when you want, go at your own pace. This is your time.",
              },
              {
                icon: Check,
                title: "All Logistics Handled",
                description: "Transportation, permits, reservations — everything is taken care of for you.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl"
              >
                <item.icon className="text-amber-700 mb-4" size={40} />
                <h3 className="text-xl mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Experiences */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl mb-4 text-gray-900 font-serif">
              Sample Experiences
            </h2>
            <p className="text-xl text-gray-600">
              Examples of tours we can create for you (fully customizable)
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Sacred Sunrise Journey",
                image: brandImages.aboutMeet,
                description: "Begin before dawn at a sacred site, witness the sunrise with guided meditation, then explore hidden beaches and waterfalls.",
                duration: "6 hours",
              },
              {
                title: "Luxury Waterfall Tour",
                image: brandImages.waterfall,
                description: "Private access to stunning waterfalls, swimming in crystal-clear pools, and a gourmet picnic lunch in paradise.",
                duration: "8 hours",
              },
              {
                title: "Cultural Connection Experience",
                image: brandImages.tropicalFlowers,
                description: "Learn about Hawaiian history, visit sacred sites, participate in traditional practices, and connect with local culture.",
                duration: "5 hours",
              },
              {
                title: "Coastal Cliffs Adventure",
                image: brandImages.cliffs,
                description: "Dramatic coastal views, secret lookout points, and breathtaking perspectives you won't find on any map.",
                duration: "4 hours",
              },
            ].map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center gap-2 text-amber-700 mb-3">
                    <Clock size={18} />
                    <span className="text-sm">{experience.duration}</span>
                  </div>
                  <h3 className="text-2xl mb-3 text-gray-900">{experience.title}</h3>
                  <p className="text-gray-600">{experience.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Different Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl mb-6 text-gray-900 font-serif">
              Why This Is Different
            </h2>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                title: "It's Not About Checking Boxes",
                text: "This isn't a rushed tour hitting tourist spots. It's a soulful journey designed to help you connect with Hawaii's true essence and your own inner wisdom.",
              },
              {
                title: "You're Not Just a Client",
                text: "You're joining an experience curated by someone who deeply understands transformation, presence, and the power of this sacred land.",
              },
              {
                title: "You'll Leave Changed",
                text: "People don't just see Hawaii with us — they see themselves differently. They leave with clarity, inspiration, and a renewed sense of purpose.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl border-l-4 border-amber-700"
              >
                <h3 className="text-2xl mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-700 text-lg">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a1510] to-[#0c1929]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl mb-6 font-serif">
              Ready to map your day?
            </h2>
            <p className="text-xl mb-10 text-white/90 font-light">
              Share dates, island, and what you want to feel—not just see.
            </p>
            <Link to="/contact" className="btn-gold !rounded-full inline-flex gap-2 text-lg">
              Inquire about a private tour
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}