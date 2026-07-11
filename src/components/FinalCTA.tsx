import { motion } from 'motion/react';
import { MessageSquare, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="final-cta" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative dynamic glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="bg-slate-50 border border-slate-200 p-8 sm:p-12 lg:p-16 rounded-3xl text-center relative overflow-hidden shadow-lg shadow-slate-100"
          initial={{ opacity: 0, scale: 0.98, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 80 }}
          id="final-cta-container"
        >
          {/* Subtle grid pattern in the card */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30 pointer-events-none" />

          {/* Accent decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-40 bg-gradient-to-r from-blue-500 via-emerald-500 to-amber-500 rounded-b-full" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            
            {/* Visual badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 border border-blue-200 px-4 py-1.5 rounded-full text-xs font-mono tracking-wider font-bold" id="final-cta-badge">
              <Sparkles className="h-4 w-4" />
              <span>Fast-Track Your Construction Compliance</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight" id="final-cta-headline">
              Ready to Start Your Construction Career?
            </h2>

            {/* Subtext */}
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed" id="final-cta-subheading">
              Don't let complex paperwork hold you back. Let our experienced assessor team handle your CSCS card bookings and NVQ portfolios. Complete certification support is just a WhatsApp away.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6" id="final-cta-actions">
              <a
                href="https://wa.me/447395000835"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 bg-blue-600 text-white font-bold text-base px-8 py-4 rounded-xl hover:bg-blue-500 shadow-lg shadow-blue-100 transition-all hover:-translate-y-0.5"
                id="final-apply-btn"
              >
                <span>Apply Now</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/447395000835"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg shadow-emerald-50 transition-all hover:-translate-y-0.5"
                id="final-whatsapp-btn"
              >
                <MessageSquare className="h-5 w-5 fill-current" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Compliance Guarantee Text */}
            <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-center gap-4 text-slate-600 text-xs sm:text-sm" id="final-cta-guarantees">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>UK Nationwide Support</span>
              </div>
              <span className="hidden sm:inline text-slate-300">•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>Secure Official Dispatch</span>
              </div>
              <span className="hidden sm:inline text-slate-300">•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>CITB Compliant Bookings</span>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
