import { Link } from "react-router";
import { motion } from "motion/react";
import { Mic, Users, Sparkles, Target, ArrowRight, Check } from "lucide-react";
import { brandImages } from "../../data/brandImages";

export default function Speaking() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section
        className="py-32 relative"
        style={{
          backgroundImage: `url(${brandImages.cardSpeaking})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 font-serif">
              Speaking & brand experiences
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto font-light">
              Keynotes and workshops on confidence, reinvention, and showing up fully—without the toxic positivity gloss.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl mb-6 text-gray-900 font-serif">
              Stage energy, real-life tools
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              As Ms. Hawaii United USA 2025, I bring lived experience from corporate sales, pageantry, and building a
              public brand in real time. Talks include story, structure, and takeaways your audience can use Monday
              morning—not just applause lines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Speaking Topics Section */}
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
              Speaking Topics
            </h2>
            <p className="text-xl text-gray-600">
              Customized talks for your audience and event
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Confidence & Self-Worth",
                description: "Building unshakeable confidence from the inside out and owning your power.",
              },
              {
                icon: Target,
                title: "Purpose & Alignment",
                description: "Finding your path and living in alignment with your true calling.",
              },
              {
                icon: Users,
                title: "Leadership & Influence",
                description: "Leading with authenticity and creating meaningful impact.",
              },
              {
                icon: Sparkles,
                title: "Transformation & Growth",
                description: "Embracing change and becoming the person you're meant to be.",
              },
              {
                icon: Mic,
                title: "Pageantry & Personal Branding",
                description: "Lessons from competing at the highest levels and building your brand.",
              },
              {
                icon: Target,
                title: "Living Your Best Life",
                description: "Creating a life you love through intentional choices and bold action.",
              },
            ].map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <topic.icon className="text-amber-700 mb-4" size={40} />
                <h3 className="text-xl mb-3 text-gray-900">{topic.title}</h3>
                <p className="text-gray-600">{topic.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={brandImages.aboutMeet}
                alt="Speaking engagement"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl mb-6 text-gray-900 font-serif">
                What You Get
              </h2>
              <div className="space-y-4">
                {[
                  "Customized content tailored to your audience and event goals",
                  "Engaging delivery that keeps audiences inspired and engaged",
                  "Actionable takeaways people can implement immediately",
                  "Pre-event consultation to ensure perfect alignment",
                  "Optional Q&A and audience interaction",
                  "Professional preparation and punctuality",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="text-amber-700 flex-shrink-0 mt-1" size={24} />
                    <p className="text-lg text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl mb-6 text-gray-900 font-serif">
              Perfect For
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Corporate events & conferences",
              "Women's empowerment gatherings",
              "Leadership summits",
              "Personal development workshops",
              "University & college events",
              "Non-profit fundraisers",
              "Retreats & wellness events",
              "Private group experiences",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white p-6 rounded-xl shadow-md flex items-center gap-3"
              >
                <div className="w-2 h-2 bg-amber-700 rounded-full flex-shrink-0" />
                <p className="text-lg text-gray-800">{item}</p>
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
              &ldquo;She didn&apos;t deliver a speech—she held a conversation the whole room needed.&rdquo;
            </p>
            <p className="text-lg text-white/75">— Event lead (placeholder until testimonial release)</p>
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
              Ready to Inspire Your Audience?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Let's discuss how we can create an unforgettable experience for your event
            </p>
            <Link to="/contact" className="btn-gold !rounded-full inline-flex gap-2 text-lg">
              Invite Nicole to speak
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}