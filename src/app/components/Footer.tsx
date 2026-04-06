import { Link } from "react-router";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0c1929] via-[#1a1510] to-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="mb-4">
              <div className="text-3xl font-serif text-amber-200 mb-1 tracking-wide">Nicole</div>
              <div className="text-[10px] text-amber-200/70 tracking-[0.2em] uppercase">6 Degree Soul</div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              VIP island days, wellness retreats, and speaking—hosted with warmth and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-amber-300 tracking-wider">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/tours" className="text-gray-300 hover:text-amber-400 transition-colors">
                  VIP Tours
                </Link>
              </li>
              <li>
                <Link to="/retreats" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Retreats
                </Link>
              </li>
              <li>
                <Link to="/speaking" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Speaking
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="mb-6 text-amber-300 tracking-wider">About</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-amber-400 transition-colors">
                  My Story
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="mb-6 text-amber-300 tracking-wider">Connect</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone size={16} className="text-amber-400" />
                <a href="tel:+15169027680" className="hover:text-amber-400 transition-colors">
                  +1-516-902-7680
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={16} className="text-amber-400" />
                <a href="mailto:Nicole@6DegreeSoul.com" className="hover:text-amber-400 transition-colors">
                  Nicole@6DegreeSoul.com
                </a>
              </div>
              <div className="flex gap-4 mt-6">
                <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                  <Instagram size={22} />
                </a>
                <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                  <Facebook size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>© 2026 Nicole • 6 Degree Soul • Ms. Hawaii 2025</p>
          <p className="mt-2 text-xs">All rights reserved. Creating transformational experiences in Hawai'i.</p>
        </div>
      </div>
    </footer>
  );
}