import { motion } from 'motion/react';
import { FEATURES_DATA } from '../data';
import { Zap, ShieldCheck, UserCheck, Lock, Briefcase, HeartHandshake } from 'lucide-react';

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 18 }
    }
  };

  // Dynamically map icon names to Lucide icon components
  const getIcon = (name: string) => {
    switch (name) {
      case 'Zap':
        return <Zap className="h-6 w-6 text-amber-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="h-6 w-6 text-emerald-600" />;
      case 'UserCheck':
        return <UserCheck className="h-6 w-6 text-blue-600" />;
      case 'Lock':
        return <Lock className="h-6 w-6 text-purple-600" />;
      case 'Briefcase':
        return <Briefcase className="h-6 w-6 text-amber-600" />;
      case 'HeartHandshake':
        return <HeartHandshake className="h-6 w-6 text-red-600" />;
      default:
        return <ShieldCheck className="h-6 w-6 text-blue-600" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-slate-50 border-y border-slate-200/60 relative overflow-hidden">
      {/* Decorative gradient accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-emerald-700 uppercase block">
            Why Contractors Trust Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            Designed for Speed & Reliability
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            We streamline the bureaucratic construction card pipeline, replacing confusing forms and long queues with direct, certified expert support.
          </p>
        </div>

        {/* Features Bento/Grid Layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          id="features-grid"
        >
          {FEATURES_DATA.map((feature) => (
            <motion.div
              key={feature.id}
              id={`feature-item-${feature.id}`}
              variants={itemVariants}
              className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-sm transition-all hover:border-slate-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-100/50 group"
            >
              <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl inline-block mb-5 group-hover:scale-110 transition-transform duration-300">
                {getIcon(feature.iconName)}
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Real-time trust stats banner */}
        <div className="mt-16 bg-white border border-slate-200 p-6 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm" id="trust-banner">
          <div className="flex gap-4 items-center">
            <div className="bg-emerald-50 text-emerald-600 p-2.5 rounded-full shrink-0 border border-emerald-100">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="font-bold text-sm text-slate-900">Full GDPR & UK Construction Compliance Guaranteed</p>
              <p className="text-xs text-slate-500">All assessments are performed in alliance with UK training criteria and CITB curriculum standards.</p>
            </div>
          </div>
          <div className="flex gap-8 divide-x divide-slate-200 text-center shrink-0">
            <div className="px-4">
              <span className="block text-xl font-bold font-display text-slate-900">48h</span>
              <span className="text-[10px] uppercase font-mono text-slate-400 font-bold">Dispatch Target</span>
            </div>
            <div className="px-4">
              <span className="block text-xl font-bold font-display text-slate-900">100%</span>
              <span className="text-[10px] uppercase font-mono text-slate-400 font-bold">Secure Service</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
