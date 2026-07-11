import { motion } from 'motion/react';
import { CARD_DATA } from '../data';
import { Check, ShieldCheck, HelpCircle, ArrowUpRight } from 'lucide-react';

export default function CardList() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
  };

  // Map card names to custom gradients/colors for styling
  const getColorStyles = (color: string) => {
    switch (color) {
      case 'Green':
        return {
          border: 'border-slate-200/80 hover:border-emerald-500',
          bg: 'bg-white hover:shadow-xl hover:shadow-emerald-100/30',
          accent: 'bg-emerald-600 text-white',
          text: 'text-emerald-600',
          glow: 'shadow-sm',
          badge: 'bg-emerald-50 text-emerald-700 border-emerald-200'
        };
      case 'Blue':
        return {
          border: 'border-slate-200/80 hover:border-blue-500',
          bg: 'bg-white hover:shadow-xl hover:shadow-blue-100/30',
          accent: 'bg-blue-600 text-white',
          text: 'text-blue-600',
          glow: 'shadow-sm',
          badge: 'bg-blue-50 text-blue-700 border-blue-200'
        };
      case 'Gold':
        return {
          border: 'border-slate-200/80 hover:border-amber-500',
          bg: 'bg-white hover:shadow-xl hover:shadow-amber-100/30',
          accent: 'bg-amber-500 text-slate-950',
          text: 'text-amber-600',
          glow: 'shadow-sm',
          badge: 'bg-amber-50 text-amber-800 border-amber-200'
        };
      case 'Black':
        return {
          border: 'border-slate-200/80 hover:border-slate-800',
          bg: 'bg-white hover:shadow-xl hover:shadow-slate-200/30',
          accent: 'bg-slate-900 text-white',
          text: 'text-slate-700',
          glow: 'shadow-sm',
          badge: 'bg-slate-100 text-slate-800 border-slate-300'
        };
      default:
        return {
          border: 'border-slate-200 hover:border-blue-500',
          bg: 'bg-white',
          accent: 'bg-blue-600 text-white',
          text: 'text-blue-600',
          glow: 'shadow-sm',
          badge: 'bg-slate-50 text-slate-700 border-slate-200'
        };
    }
  };

  return (
    <section id="cscs-cards" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-600 uppercase block">
            CSCS Certification Categories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            Find and Apply for Your CSCS Card
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            We provide official pathway support for every tier of the CSCS scheme, from trainees entering the site to seasoned project directors.
          </p>
        </div>

        {/* Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          id="cards-grid"
        >
          {CARD_DATA.map((card) => {
            const styles = getColorStyles(card.colorName);
            return (
              <motion.div
                key={card.id}
                id={`card-item-${card.id}`}
                variants={cardVariants}
                className={`flex flex-col h-full border rounded-2xl p-6 transition-all duration-300 ${styles.border} ${styles.bg} ${styles.glow} group relative`}
              >
                {/* Popular card badge */}
                {card.isPopular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg border border-blue-400 z-10">
                    Most Applied
                  </span>
                )}

                {/* Card Thumbnail / Header Visual */}
                <div className="relative h-44 rounded-xl overflow-hidden mb-6 bg-slate-100">
                  <img
                    src={card.image}
                    alt={card.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    id={`card-img-${card.id}`}
                  />
                  
                  {/* Floating card representation */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className={`text-[10px] font-bold font-mono uppercase tracking-wider px-2 py-1 rounded border ${styles.badge}`}>
                      {card.subtitle}
                    </span>
                    {card.nvqLevel && (
                      <span className="text-[10px] font-mono bg-white/95 text-slate-800 px-2 py-1 rounded border border-slate-200">
                        NVQ {card.nvqLevel}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex-grow space-y-4">
                  <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </h3>
                  
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {card.description}
                  </p>

                  {/* Requirements list */}
                  <div className="space-y-2.5 pt-2">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-bold">
                      Requirements
                    </span>
                    <ul className="space-y-2">
                      {card.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <Check className={`h-4 w-4 shrink-0 mt-0.5 ${styles.text}`} />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-8 pt-4 border-t border-slate-100">
                  <a
                    href="https://wa.me/447395000835"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 font-bold text-xs py-3 rounded-xl transition-all ${
                      card.colorName === 'Black'
                        ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-sm shadow-slate-200'
                        : card.colorName === 'Gold'
                        ? 'bg-amber-500 text-slate-950 hover:bg-amber-400'
                        : card.colorName === 'Blue'
                        ? 'bg-blue-600 text-white hover:bg-blue-500'
                        : 'bg-emerald-700 text-white hover:bg-emerald-600'
                    }`}
                    id={`apply-btn-${card.id}`}
                  >
                    <span>Apply for {card.colorName} Card</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Quick Help / Direct Route Guidance */}
        <div className="mt-12 bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6" id="card-consultation">
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl shrink-0 border border-blue-100">
              <HelpCircle className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-slate-900 text-base">Not sure which card fits your current qualifications?</h4>
              <p className="text-sm text-slate-600 max-w-xl mt-1">Our certified advisors can check your transcripts, trade history, and previous test records to map your fastest CSCS compliance pathway.</p>
            </div>
          </div>
          <a
            href="https://wa.me/447395000835"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 hover:bg-blue-50 px-5 py-3 rounded-xl border border-blue-200 transition-all shrink-0"
            id="consultation-link"
          >
            <span>Free Card Assessment</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
