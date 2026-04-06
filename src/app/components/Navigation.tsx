import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import LivingPrimaryCta from "./LivingPrimaryCta";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/tours", label: "Tours" },
    { path: "/retreats", label: "Retreats" },
    { path: "/speaking", label: "Speaking" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  const glass = isHome && !scrolled && !isOpen;

  const linkClass = (path: string) => {
    const active = isActive(path);
    if (glass) {
      return active
        ? "text-amber-900 border-b-2 border-amber-700 pb-0.5 font-medium"
        : "text-[#2a2620] hover:text-amber-900";
    }
    return active
      ? "text-amber-900 border-b-2 border-amber-700 pb-0.5"
      : "text-[#3d3429] hover:text-amber-900";
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        glass
          ? "bg-gradient-to-b from-white/55 to-transparent border-b border-white/20"
          : "bg-[#fffcf8]/95 backdrop-blur-md shadow-sm border-b border-amber-900/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex flex-col items-start">
            <span
              className={`text-3xl font-serif tracking-[0.1em] transition-colors ${
                glass ? "text-[#1c1917] drop-shadow-sm" : "text-[#1e1b18]"
              }`}
            >
              Nicole
            </span>
            <span
              className={`text-[10px] sm:text-xs tracking-[0.22em] uppercase transition-colors ${
                glass ? "text-amber-900/75" : "text-amber-900/70"
              }`}
            >
              6 Degree Soul
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className={`transition-all tracking-wide text-sm ${linkClass(link.path)}`}>
                {link.label}
              </Link>
            ))}
            <LivingPrimaryCta
              to="/contact"
              flowingGradient
              wrapperClassName="rounded-full"
              className="btn-gold !rounded-full px-8 py-3 text-sm tracking-wide"
            >
              Book Now
            </LivingPrimaryCta>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 transition-colors ${glass ? "text-[#1c1917]" : "text-gray-700 hover:text-amber-700"}`}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#fffcf8] border-t border-amber-900/10 shadow-xl"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 transition-colors tracking-wide ${
                    isActive(link.path) ? "text-amber-800 font-medium" : "text-gray-700"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <LivingPrimaryCta
                to="/contact"
                flowingGradient
                wrapperClassName="rounded-full w-full"
                className="block w-full btn-gold !rounded-full px-8 py-4 text-center"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </LivingPrimaryCta>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
