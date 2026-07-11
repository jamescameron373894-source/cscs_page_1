import { motion } from 'motion/react';
import { MessageSquare, ArrowRight, ShieldCheck, Star, Users, Award, Clock } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    }
  };

  const counters = [
    { value: '25,000+', label: 'Cards Issued', icon: Award, color: 'text-emerald-500' },
    { value: '99.2%', label: 'NVQ Pass Rate', icon: Users, color: 'text-blue-500' },
    { value: '24 Hour', label: 'Support Turnaround', icon: Clock, color: 'text-amber-500' },
  ];

  return (
    <section 
      id="hero" 
      className="relative min-h-screen bg-slate-50 pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex items-center"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50" />
      
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Content */}
          <motion.div 
            className="lg:col-span-7 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Trust Pilot Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-white border border-slate-200 px-3 py-1.5 rounded-full text-xs text-slate-700 shadow-sm"
              id="trust-badge"
            >
              <div className="flex gap-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-slate-900">4.9/5</span>
              <span className="text-slate-500">Excellent UK Trust Rating</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1]"
              id="hero-headline"
            >
              Get Your <span className="text-blue-600">CSCS Card</span> & <span className="text-emerald-700">NVQ Qualification</span> Fast
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              variants={itemVariants}
              className="text-lg text-slate-600 max-w-2xl leading-relaxed"
              id="hero-subheading"
            >
              Apply for Green, Blue, Gold and Black CSCS Cards with expert guidance. Fast processing, trusted support, and UK wide service.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-2"
              id="hero-ctas"
            >
              <a
                href="https://wa.me/447395000835"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 bg-blue-600 text-white font-bold text-base px-8 py-4 rounded-xl hover:bg-blue-500 shadow-lg shadow-blue-200 transition-all hover:-translate-y-0.5"
                id="hero-apply-btn"
              >
                <span>Apply Now</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/447395000835"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg shadow-emerald-100 transition-all hover:-translate-y-0.5"
                id="hero-whatsapp-btn"
              >
                <MessageSquare className="h-5 w-5 fill-current" />
                <span>WhatsApp Us</span>
              </a>
            </motion.div>

            {/* Sub-hero trust bullets */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-200"
              id="hero-bullets"
            >
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>CITB Test Booking Included</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <ShieldCheck className="h-5 w-5 text-blue-600 shrink-0" />
                <span>Full NVQ Levels 2 - 7 Support</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image Section */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            id="hero-image-container"
          >
            {/* Decorative background shape */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-emerald-600/20 rounded-3xl transform rotate-3 scale-102 blur-lg -z-10" />
            
            <div className="relative bg-white border border-slate-200 p-4 rounded-3xl shadow-xl overflow-hidden group">
              <img
                src="https://www.fireandsafetysolutionsltd.com/wp-content/uploads/2016/05/news-cscs-card.jpg"
                alt="Blue CSCS Card held in hand on UK construction site"
                referrerPolicy="no-referrer"
                className="w-full h-[320px] sm:h-[400px] object-cover rounded-2xl shadow-2xl filter brightness-95 group-hover:brightness-100 transition-all duration-500"
                id="hero-main-image"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md border border-slate-200 p-4 rounded-xl flex items-center gap-3 shadow-lg">
                <div className="bg-blue-100 p-2.5 rounded-lg text-blue-600">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-900">Blue Skilled Worker Card</h4>
                  <p className="text-xs text-slate-500">Achieve yours in days, not months</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Dynamic Counters / Stats Panel */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 lg:mt-24 bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 shadow-sm"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          id="hero-counters"
        >
          {counters.map((counter, idx) => {
            const Icon = counter.icon;
            return (
              <div 
                key={idx} 
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <div className={`p-3 rounded-xl bg-slate-100 border border-slate-200 ${counter.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
                    {counter.value}
                  </div>
                  <div className="text-sm font-medium text-slate-500">
                    {counter.label}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
