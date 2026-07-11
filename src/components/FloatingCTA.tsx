import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, ArrowUp } from 'lucide-react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3" id="floating-actions">
      <AnimatePresence>
        {/* Scroll To Top button */}
        {isVisible && (
          <motion.button
            key="scroll-top"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="p-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-slate-900 rounded-full shadow-lg transition-all duration-300"
            aria-label="Back to top"
            id="back-to-top-btn"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}

        {/* Floating WhatsApp CTA */}
        <motion.a
          key="whatsapp-float"
          href="https://wa.me/447395000835"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 120, delay: 0.1 }}
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl shadow-emerald-950/40 hover:-translate-y-0.5 transition-all group animate-shaky"
          id="whatsapp-floating-btn"
        >
          <MessageSquare className="h-5 w-5 fill-current" />
          <span className="hidden sm:inline font-bold text-sm tracking-wide">
            Need Help? Chat Now
          </span>
          {/* Unread notification ping */}
          <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 border-2 border-emerald-600 rounded-full animate-ping" />
          <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 border-2 border-emerald-600 rounded-full" />
        </motion.a>
      </AnimatePresence>
    </div>
  );
}
