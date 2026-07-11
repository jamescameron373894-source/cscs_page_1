import { Award, MessageSquare, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#" className="flex items-center gap-2 group" id="footer-logo">
              <div className="bg-blue-600 p-2 rounded-lg text-white group-hover:bg-blue-500 transition-colors">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white flex items-center gap-1.5">
                  BUILD<span className="text-blue-500">CERT</span> UK
                </span>
                <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  Official Compliance Support
                </span>
              </div>
            </a>
            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              We help UK construction trade professionals fast-track their CSCS cards and NVQ portfolios through fully managed compliance services. Reach out today for direct assistance.
            </p>
            {/* Trusted support badge */}
            <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-950 border border-slate-800 p-3 rounded-xl inline-flex">
              <ShieldCheck className="h-5 w-5 text-emerald-500 shrink-0" />
              <span>Approved UK Construction Training Support</span>
            </div>
          </div>

          {/* Quick Links / Cards */}
          <div className="lg:col-span-3 space-y-4" id="footer-cscs-links">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">CSCS Cards</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#cscs-cards" className="hover:text-white transition-colors">Green Labourer Card</a>
              </li>
              <li>
                <a href="#cscs-cards" className="hover:text-white transition-colors">Blue Skilled Worker Card</a>
              </li>
              <li>
                <a href="#cscs-cards" className="hover:text-white transition-colors">Gold Supervisor Card</a>
              </li>
              <li>
                <a href="#cscs-cards" className="hover:text-white transition-colors">Black Manager Card</a>
              </li>
            </ul>
          </div>

          {/* NVQ Qualifications */}
          <div className="lg:col-span-2 space-y-4" id="footer-nvq-links">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">NVQ Qualifications</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="https://wa.me/447395000835" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">NVQ Level 2 (Skilled Trades)</a>
              </li>
              <li>
                <a href="https://wa.me/447395000835" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">NVQ Level 3 (Supervisors)</a>
              </li>
              <li>
                <a href="https://wa.me/447395000835" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">NVQ Level 6 (Site Managers)</a>
              </li>
              <li>
                <a href="https://wa.me/447395000835" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">NVQ Level 7 (Directors)</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-4" id="footer-contact">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">Direct Contact</h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href="https://wa.me/447395000835"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors text-emerald-400 font-medium"
                >
                  <MessageSquare className="h-4 w-4 fill-current" />
                  <span>WhatsApp Contact</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-slate-500 shrink-0" />
                <span>+44 7395 000835</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-slate-500 shrink-0" />
                <span>apply@constructioncertification.uk</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-slate-500 shrink-0" />
                <span className="text-slate-500">London, United Kingdom</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500" id="footer-bottom">
          <p>
            &copy; {currentYear} UK Construction Certification Support. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://wa.me/447395000835" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="https://wa.me/447395000835" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="https://wa.me/447395000835" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">CITB Alignment</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
