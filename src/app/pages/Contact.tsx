import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, Instagram, MapPin, Send } from "lucide-react";

import { brandImages } from "../../data/brandImages";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send to a backend
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We'll get back to you soon.");
    setFormData({ name: "", email: "", interest: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section
        className="py-32 relative"
        style={{
          backgroundImage: `url(${brandImages.tropicalFlowers})`,
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
              Start with a real conversation
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 font-light max-w-2xl mx-auto">
              Tours, retreats, or speaking—tell me what you&apos;re planning and I&apos;ll reply personally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl mb-8 text-gray-900 font-serif">
                Send Me a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-gray-700 mb-2">
                    What are you interested in? *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent"
                  >
                    <option value="">Select an option</option>
                    <option value="tour">VIP Private Tour</option>
                    <option value="retreat">Luxury Retreat</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent resize-none"
                    placeholder="Tell me about your vision and what you're looking for..."
                  />
                </div>

                <button type="submit" className="w-full btn-gold !rounded-full justify-center gap-2 text-lg">
                  Send inquiry
                  <Send size={20} />
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl sm:text-4xl mb-8 text-gray-900 font-serif">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Whether you're ready to book an experience or just have questions, I'd love to connect. Fill out the form or reach out directly — I typically respond within 24 hours.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-amber-700" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg mb-1 text-gray-900">Email</h4>
                    <a
                      href="mailto:Nicole@6DegreeSoul.com"
                      className="text-amber-700 hover:text-amber-800"
                    >
                      Nicole@6DegreeSoul.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-amber-700" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg mb-1 text-gray-900">Phone</h4>
                    <a
                      href="tel:+15169027680"
                      className="text-amber-700 hover:text-amber-800"
                    >
                      +1-516-902-7680
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-amber-700" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg mb-1 text-gray-900">Location</h4>
                    <p className="text-gray-600">Hawaii, United States</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Instagram className="text-amber-700" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg mb-1 text-gray-900">Social Media</h4>
                    <a
                      href="https://instagram.com/nicole6degreesoul"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-700 hover:text-amber-800"
                    >
                      @nicole6degreesoul
                    </a>
                  </div>
                </div>
              </div>

              {/* FAQ Box */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl">
                <h3 className="text-2xl mb-4 text-gray-900">Quick Questions?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>✨ Tours can be customized for any group size</li>
                  <li>✨ Retreats typically have 8-12 participants</li>
                  <li>✨ Speaking engagements available worldwide</li>
                  <li>✨ Book at least 2-4 weeks in advance for best availability</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map/Image Section */}
      <section className="relative h-96">
        <img
          src={brandImages.cliffs}
          alt="Hawaii Coastline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1a1510] to-[#0c1929]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl mb-6 font-serif">Mahalo for reaching out</h2>
            <p className="text-xl text-white/85 font-light">
              I read every message—expect a thoughtful reply, not a generic autoresponder.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}