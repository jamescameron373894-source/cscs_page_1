import { CSCSCard, Feature, Step, FaqItem } from './types';

export const CARD_DATA: CSCSCard[] = [
  {
    id: 'green-labourer',
    title: 'Green Labourer Card',
    subtitle: 'Entry Level Card',
    colorName: 'Green',
    colorClass: 'border-emerald-500 bg-emerald-50/50 hover:bg-emerald-50',
    accentColor: '#15803D',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    textColor: 'text-emerald-700',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop',
    description: 'The starting point for your construction career. Perfect for general site workers and labourers entering the UK construction industry.',
    requirements: [
      'Entry level card',
      'Ideal for labourers',
      'Health, Safety & Environment Test required',
      'Great for beginners'
    ],
    isPopular: false
  },
  {
    id: 'blue-skilled',
    title: 'Blue Skilled Worker Card',
    subtitle: 'Skilled Worker Card',
    colorName: 'Blue',
    colorClass: 'border-blue-500 bg-blue-50/50 hover:bg-blue-50',
    accentColor: '#2563EB',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    textColor: 'text-blue-700',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop',
    description: 'Designed for skilled tradespeople who have completed an NVQ Level 2 or an approved construction apprenticeship.',
    requirements: [
      'Skilled Worker',
      'NVQ Level 2 required',
      'Industry recognised standard'
    ],
    nvqLevel: 'Level 2',
    isPopular: true
  },
  {
    id: 'gold-supervisor',
    title: 'Gold Supervisor Card',
    subtitle: 'Supervisor Card',
    colorName: 'Gold',
    colorClass: 'border-amber-500 bg-amber-50/50 hover:bg-amber-50',
    accentColor: '#D4AF37',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    textColor: 'text-amber-700',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=600&auto=format&fit=crop',
    description: 'For highly skilled supervisors, technical personnel, and advanced craft workers with leadership responsibilities.',
    requirements: [
      'Supervisor status',
      'NVQ Level 3 required',
      'Leadership role on-site'
    ],
    nvqLevel: 'Level 3',
    isPopular: false
  },
  {
    id: 'black-manager',
    title: 'Black Manager Card',
    subtitle: 'Site Manager Card',
    colorName: 'Black',
    colorClass: 'border-slate-800 bg-slate-50/50 hover:bg-slate-100',
    accentColor: '#111827',
    badgeColor: 'bg-slate-900 text-white border-slate-900',
    textColor: 'text-slate-800',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop',
    description: 'The highest standard CSCS card for site managers, project managers, and directors in the UK construction industry.',
    requirements: [
      'Site Manager status',
      'NVQ Level 6 or 7 required',
      'Highest management card'
    ],
    nvqLevel: 'Level 6/7',
    isPopular: false
  }
];

export const FEATURES_DATA: Feature[] = [
  {
    id: 'fast-processing',
    title: 'Fast Processing',
    description: 'We expedite your application to ensure your card is processed and dispatched in record time.',
    iconName: 'Zap'
  },
  {
    id: 'trusted-uk',
    title: 'Trusted UK Service',
    description: 'Approved support network helping thousands of UK construction professionals achieve compliance annually.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'expert-support',
    title: 'Expert Support',
    description: 'Get matched with a dedicated assessor who guides you step-by-step through test bookings and NVQ portfolios.',
    iconName: 'UserCheck'
  },
  {
    id: 'secure-application',
    title: 'Secure Application',
    description: 'Your personal data and documents are handled under strict security protocols and GDPR regulations.',
    iconName: 'Lock'
  },
  {
    id: 'experienced-team',
    title: 'Experienced Team',
    description: 'Our team comprises seasoned construction consultants who understand complex certification criteria thoroughly.',
    iconName: 'Briefcase'
  },
  {
    id: 'excellent-customer',
    title: 'Excellent Customer Service',
    description: 'Highly responsive communication via phone, email, and WhatsApp, ensuring you are never left in the dark.',
    iconName: 'HeartHandshake'
  }
];

export const PROCESS_STEPS: Step[] = [
  {
    number: 1,
    title: 'Choose Your Card',
    description: 'Select the CSCS card or NVQ qualification that fits your trade, experience, or role. Not sure? Speak to our team via WhatsApp for instant advice.'
  },
  {
    number: 2,
    title: 'Submit Your Details',
    description: 'Send us your basic professional details, previous qualifications, and role requirements securely through our expert consultants.'
  },
  {
    number: 3,
    title: 'Complete Requirements',
    description: 'Book your CITB Health, Safety and Environment (HS&E) test or enroll in your tailored NVQ level course with our expert curriculum and assistance.'
  },
  {
    number: 4,
    title: 'Receive Your CSCS Card',
    description: 'Once all requirements are satisfied, we manage the card application with CSCS and your brand new physical card is dispatched directly to your doorstep.'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'q1',
    question: 'Which CSCS card do I need?',
    answer: 'The CSCS card you need depends on your experience, qualifications, and job role. Beginners and general site workers need the Green Labourer Card. Skilled tradespeople with an NVQ Level 2 need the Blue Skilled Worker Card. Supervisors with an NVQ Level 3 require the Gold Card, while Site Managers with an NVQ Level 6/7 require the Black Card. We can assess your qualifications and advise you on the exact card you should apply for.'
  },
  {
    id: 'q2',
    question: 'Do I need an NVQ?',
    answer: 'Yes, for the skilled cards (Blue, Gold, and Black), a relevant National Vocational Qualification (NVQ) or equivalent is mandatory. We offer fully-supported NVQ courses from Level 2 up to Level 7 to help you gain the exact qualification needed for your target CSCS card, complete with dedicated assessor guidance.'
  },
  {
    id: 'q3',
    question: 'How long does it take?',
    answer: 'A standard CSCS card application is usually processed within 3-5 working days once all requirements (like CITB tests and NVQs) are completed. NVQ qualification times vary depending on the level and your speed of submitting evidence, but our fast-track assessment process helps most candidates finish in a fraction of the standard time.'
  },
  {
    id: 'q4',
    question: 'Can I upgrade my card later?',
    answer: 'Absolutely! As you gain more experience or complete higher NVQ levels, you can upgrade your CSCS card. For example, moving from a Green Labourer Card to a Blue Skilled Worker Card once you complete your NVQ Level 2, or upgrading to a Gold/Black card when stepping into supervisory or managerial roles.'
  },
  {
    id: 'q5',
    question: 'How do I apply?',
    answer: 'Simply click "Apply Now" or "WhatsApp Us" anywhere on this page to start a conversation with our construction certification experts. We will check your details, advise you on the best path, book your CITB test if needed, register you for the NVQ, and handle the final card dispatch.'
  }
];
