import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Phone, MessageSquare, Menu, X, ShieldCheck, Award } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'CSCS Cards', href: '#cscs-cards' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'FAQs', href: '#faqs' },
  ];

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-200'
            : 'bg-white/80 backdrop-blur-md py-4 border-b border-slate-100'
        }`}
      >
        {/* Scroll Progress Bar */}
        <motion.div
          id="scroll-progress-bar"
          className="absolute top-0 left-0 right-0 h-1 bg-blue-600 origin-left"
          style={{ scaleX }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group" id="logo-link">
              <div className="bg-blue-600 p-2 rounded-lg text-white group-hover:bg-blue-500 transition-colors">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-slate-900 flex items-center gap-1.5">
                  BUILD<span className="text-blue-600">CERT</span> UK
                </span>
                <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                  Official Compliance Support
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-medium text-sm text-slate-600 hover:text-blue-600 transition-colors py-2 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center gap-4" id="desktop-ctas">
              <a
                href="https://wa.me/447395000835"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-emerald-700 text-white font-semibold text-sm px-4 py-2.5 rounded-full hover:bg-emerald-600 transition-all hover:shadow-lg hover:shadow-emerald-200"
                id="header-cta-whatsapp"
              >
                <MessageSquare className="h-4 w-4 fill-current" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href="https://wa.me/447395000835"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-blue-500 transition-all hover:shadow-lg hover:shadow-blue-200"
                id="header-cta-apply"
              >
                Apply Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-slate-600 hover:text-slate-900 focus:outline-none p-2"
              aria-label="Toggle Menu"
              id="mobile-menu-toggle"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Nav */}
        <motion.div
          id="mobile-dropdown"
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white border-t border-slate-250 overflow-hidden shadow-xl"
        >
          <div className="px-4 pt-3 pb-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 grid grid-cols-2 gap-3 px-3">
              <a
                href="https://wa.me/447395000835"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-600 text-white font-semibold text-sm py-3 rounded-xl hover:bg-emerald-500 transition-colors"
                id="mobile-header-whatsapp"
              >
                <MessageSquare className="h-4 w-4 fill-current" />
                <span>WhatsApp</span>
              </a>
              <a
                href="https://wa.me/447395000835"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-blue-600 text-white font-semibold text-sm py-3 rounded-xl hover:bg-blue-500 transition-colors"
                id="mobile-header-apply"
              >
                Apply Now
              </a>
            </div>
            {/* Trust badge on mobile */}
            <div className="flex items-center justify-center gap-2 pt-4 border-t border-slate-100 text-slate-500 text-xs">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>UK Government Standards Compliant Support</span>
            </div>
          </div>
        </motion.div>
      </header>
    </>
  );
}
