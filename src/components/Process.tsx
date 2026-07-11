import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../data';
import { ArrowRight, HelpCircle, Sparkles } from 'lucide-react';

export default function Process() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 90, damping: 16 }
    }
  };

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-600 uppercase block">
            4-Step Application Pipeline
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            How to Get Certified Fast
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            We've condensed the complex UK construction credential procedures into four simple, guided steps with zero guesswork.
          </p>
        </div>

        {/* Timeline Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          id="process-grid"
        >
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[68px] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-blue-300 via-emerald-300 to-amber-300 opacity-50 z-0" />

          {PROCESS_STEPS.map((step, idx) => {
            const isLast = idx === PROCESS_STEPS.length - 1;
            
            // Step styling
            const stepStyles = [
              { bg: 'bg-blue-50 border-blue-200 text-blue-600' },
              { bg: 'bg-indigo-50 border-indigo-200 text-indigo-600' },
              { bg: 'bg-emerald-50 border-emerald-200 text-emerald-600' },
              { bg: 'bg-amber-50 border-amber-200 text-amber-600' }
            ];
            
            const style = stepStyles[idx] || stepStyles[0];

            return (
              <motion.div
                key={step.number}
                id={`process-step-${step.number}`}
                variants={itemVariants}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 relative flex flex-col h-full hover:border-slate-300 hover:bg-white hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300 z-10 group"
              >
                {/* Step Badge / Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center font-display font-black text-lg border ${style.bg} shadow-sm`}>
                    {step.number}
                  </div>
                  {/* Small decorative icon for final step */}
                  {isLast && (
                    <div className="bg-amber-50 text-amber-600 p-2 rounded-lg border border-amber-200 animate-pulse">
                      <Sparkles className="h-4 w-4" />
                    </div>
                  )}
                </div>

                {/* Step Details */}
                <div className="flex-grow space-y-3">
                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Mobile / tablet transition indicator */}
                {!isLast && (
                  <div className="lg:hidden flex justify-center pt-4">
                    <ArrowRight className="h-5 w-5 text-slate-400 rotate-90 md:rotate-0" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Quick action helper card */}
        <div className="mt-16 text-center max-w-xl mx-auto" id="process-action">
          <p className="text-sm text-slate-600 mb-4">
            Have a question about specific qualifications, CITB test centers, or fast-track assessments?
          </p>
          <a
            href="https://wa.me/447395000835"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-50 hover:bg-slate-100 border border-slate-250 text-slate-800 font-bold text-sm px-6 py-3 rounded-full transition-all shadow-sm"
            id="process-whatsapp-cta"
          >
            <span>Ask an Assessor on WhatsApp</span>
            <ArrowRight className="h-4 w-4 text-emerald-600" />
          </a>
        </div>

      </div>
    </section>
  );
}
