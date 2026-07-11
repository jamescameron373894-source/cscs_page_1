import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_DATA } from '../data';
import { ChevronDown, MessageSquare, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('q1'); // default open the first faq

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-20 lg:py-28 bg-slate-50 border-y border-slate-200/60 relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-amber-600 uppercase block">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            Got Questions? We Have Answers
          </h2>
          <p className="text-slate-600 text-base">
            Get instant answers to the most common queries regarding CSCS cards, NVQs, CITB tests, and compliance updates.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4" id="faq-accordion-list">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                id={`faq-item-${item.id}`}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'border-blue-500 bg-white shadow-md'
                    : 'border-slate-200 bg-white hover:bg-slate-50/50 hover:border-slate-300'
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none group"
                  aria-expanded={isOpen}
                  id={`faq-trigger-${item.id}`}
                >
                  <span className="font-display font-bold text-sm sm:text-base text-slate-900 pr-4 group-hover:text-blue-600 transition-colors">
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-lg transition-transform duration-300 shrink-0 ${
                    isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </button>

                {/* Accordion Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-1 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* CTA Banner inside FAQ section */}
        <div className="mt-16 bg-white border border-slate-200 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm" id="faq-direct-ask">
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl shrink-0 border border-emerald-100">
              <HelpCircle className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-slate-900 text-sm">Still have an unanswered question?</h4>
              <p className="text-xs text-slate-500 mt-1">Our certified assistants are online and ready to help you on WhatsApp.</p>
            </div>
          </div>
          <a
            href="https://wa.me/447395000835"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-650 px-5 py-3 rounded-xl transition-all shadow-sm shrink-0"
            id="faq-whatsapp-btn"
          >
            <MessageSquare className="h-4 w-4 fill-current" />
            <span>Chat Live Now</span>
          </a>
        </div>

      </div>
    </section>
  );
}
