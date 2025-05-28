// ReportU Constants and Data

export const REPORT_CATEGORIES = {
  traffic: {
    id: 'traffic',
    name: 'Traffic Violations',
    icon: '🚗',
    description: 'Illegal parking, speeding, reckless driving',
    departments: {
      malaysia: ['JPJ', 'PDRM'],
      singapore: ['LTA', 'TP']
    },
    priority: 'medium',
    estimatedTime: '3-5 days',
    color: 'from-orange-500 to-red-500'
  },
  crime: {
    id: 'crime',
    name: 'Criminal Activities',
    icon: '🚨',
    description: 'Theft, vandalism, suspicious activities',
    departments: {
      malaysia: ['PDRM'],
      singapore: ['SPF']
    },
    priority: 'high',
    estimatedTime: '1-2 days',
    color: 'from-red-500 to-pink-500'
  },
  environment: {
    id: 'environment',
    name: 'Environmental Issues',
    icon: '🌱',
    description: 'Pollution, illegal dumping, noise complaints',
    departments: {
      malaysia: ['DOE', 'Local Council'],
      singapore: ['NEA', 'PUB']
    },
    priority: 'low',
    estimatedTime: '5-7 days',
    color: 'from-green-500 to-emerald-500'
  },
  public: {
    id: 'public',
    name: 'Public Safety',
    icon: '🏛️',
    description: 'Infrastructure damage, public disturbances',
    departments: {
      malaysia: ['Local Council', 'PDRM'],
      singapore: ['HDB', 'URA']
    },
    priority: 'medium',
    estimatedTime: '3-5 days',
    color: 'from-blue-500 to-cyan-500'
  },
  commercial: {
    id: 'commercial',
    name: 'Commercial Violations',
    icon: '🏪',
    description: 'Counterfeit goods, illegal business operations',
    departments: {
      malaysia: ['KPDNHEP', 'Local Council'],
      singapore: ['SPRING', 'IE Singapore']
    },
    priority: 'medium',
    estimatedTime: '5-10 days',
    color: 'from-purple-500 to-indigo-500'
  }
};

export const REPORT_STATUSES = [
  {
    id: 'submitted',
    name: 'Submitted',
    description: 'Report received and logged',
    icon: '📝',
    color: 'text-blue-400'
  },
  {
    id: 'processing',
    name: 'Processing',
    description: 'Under initial review',
    icon: '⚙️',
    color: 'text-yellow-400'
  },
  {
    id: 'investigating',
    name: 'Investigating',
    description: 'Investigation in progress',
    icon: '🔍',
    color: 'text-orange-400'
  },
  {
    id: 'resolved',
    name: 'Resolved',
    description: 'Case closed successfully',
    icon: '✅',
    color: 'text-green-400'
  },
  {
    id: 'rejected',
    name: 'Rejected',
    description: 'Report rejected or invalid',
    icon: '❌',
    color: 'text-red-400'
  }
];

export const COUNTRIES = {
  malaysia: {
    id: 'malaysia',
    name: 'Malaysia',
    flag: '🇲🇾',
    code: 'MY',
    timezone: 'Asia/Kuala_Lumpur',
    currency: 'MYR',
    languages: ['English', 'Malay', 'Mandarin', 'Tamil']
  },
  singapore: {
    id: 'singapore',
    name: 'Singapore',
    flag: '🇸🇬',
    code: 'SG',
    timezone: 'Asia/Singapore',
    currency: 'SGD',
    languages: ['English', 'Malay', 'Mandarin', 'Tamil']
  }
};

export const FEATURES = [
  {
    id: 'smart-routing',
    title: 'Smart AI Routing',
    description: 'Automatically routes reports to the correct department using AI categorization',
    icon: '🤖',
    benefits: ['99% accuracy', 'Instant routing', 'No manual sorting']
  },
  {
    id: 'real-time-tracking',
    title: 'Real-Time Tracking',
    description: 'Track your report status from submission to resolution',
    icon: '📊',
    benefits: ['Live updates', 'Push notifications', 'Timeline view']
  },
  {
    id: 'multimedia-evidence',
    title: 'Multimedia Evidence',
    description: 'Upload photos, videos, and documents as evidence',
    icon: '📸',
    benefits: ['Multiple formats', 'Cloud storage', 'Secure handling']
  },
  {
    id: 'cross-border',
    title: 'Cross-Border Support',
    description: 'Seamless reporting across Malaysia and Singapore',
    icon: '🌏',
    benefits: ['Unified platform', 'Auto-detection', 'Local compliance']
  },
  {
    id: 'anonymous-reporting',
    title: 'Anonymous Reporting',
    description: 'Submit reports anonymously for sensitive cases',
    icon: '🔒',
    benefits: ['Privacy protection', 'Secure submission', 'No personal data']
  },
  {
    id: 'multi-language',
    title: 'Multi-Language',
    description: 'Available in English, Malay, Mandarin, and Tamil',
    icon: '🌐',
    benefits: ['4 languages', 'Auto-translation', 'Cultural adaptation']
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Ahmad Rahman',
    role: 'Kuala Lumpur Resident',
    avatar: '👨🏽‍💼',
    content: 'ReportU made reporting a traffic violation so easy. I got updates throughout the process and the issue was resolved quickly.',
    rating: 5,
    location: 'Malaysia'
  },
  {
    id: 2,
    name: 'Sarah Lim',
    role: 'Singapore Citizen',
    avatar: '👩🏻‍💻',
    content: 'Finally, a platform that works across borders! Reported illegal dumping during my trip to Malaysia seamlessly.',
    rating: 5,
    location: 'Singapore'
  },
  {
    id: 3,
    name: 'Raj Patel',
    role: 'Business Owner',
    avatar: '👨🏾‍💼',
    content: 'The AI routing is incredible. My counterfeit goods report went straight to the right department without any confusion.',
    rating: 5,
    location: 'Malaysia'
  },
  {
    id: 4,
    name: 'Michelle Tan',
    role: 'Tourist',
    avatar: '👩🏻‍🦱',
    content: 'As a tourist, I was worried about reporting an incident. ReportU made it simple and I felt heard throughout the process.',
    rating: 5,
    location: 'Singapore'
  }
];

export const PRICING_TIERS = [
  {
    id: 'citizen',
    name: 'Citizens',
    price: 'Free',
    description: 'For individual citizens reporting offenses',
    features: [
      'Unlimited report submissions',
      'Real-time status tracking',
      'Multimedia evidence upload',
      'Cross-border support',
      'Multi-language interface',
      'Anonymous reporting option'
    ],
    cta: 'Start Reporting',
    popular: false,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'government',
    name: 'Government',
    price: '$25,000',
    period: '/department/year',
    description: 'For government departments and agencies',
    features: [
      'Department dashboard',
      'Report management system',
      'Analytics and insights',
      'API integration',
      'Priority support',
      'Custom workflows',
      'Bulk processing tools',
      'Advanced reporting'
    ],
    cta: 'Contact Sales',
    popular: true,
    color: 'from-purple-500 to-indigo-500'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '$150,000',
    period: '/organization/year',
    description: 'For large organizations and enterprises',
    features: [
      'Everything in Government',
      'White-label solution',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantees',
      'Advanced security',
      'Custom training',
      'Multi-tenant support'
    ],
    cta: 'Contact Sales',
    popular: false,
    color: 'from-green-500 to-emerald-500'
  }
];

export const STATS = [
  {
    id: 'reports',
    value: '50,000+',
    label: 'Reports Processed',
    icon: '📊'
  },
  {
    id: 'users',
    value: '25,000+',
    label: 'Active Users',
    icon: '👥'
  },
  {
    id: 'departments',
    value: '150+',
    label: 'Partner Departments',
    icon: '🏛️'
  },
  {
    id: 'resolution',
    value: '85%',
    label: 'Resolution Rate',
    icon: '✅'
  }
];

export const ROADMAP_ITEMS = [
  {
    id: 'q1-2024',
    quarter: 'Q1 2024',
    title: 'MVP Launch',
    status: 'completed',
    items: [
      'Core reporting functionality',
      'Malaysia & Singapore integration',
      'Basic mobile app',
      'AI routing system'
    ]
  },
  {
    id: 'q2-2024',
    quarter: 'Q2 2024',
    title: 'Enhanced Features',
    status: 'in-progress',
    items: [
      'Real-time notifications',
      'Advanced analytics',
      'Government partnerships',
      'Community features'
    ]
  },
  {
    id: 'q3-2024',
    quarter: 'Q3 2024',
    title: 'Scale & Expand',
    status: 'planned',
    items: [
      'Additional ASEAN countries',
      'Enterprise features',
      'API marketplace',
      'Advanced AI capabilities'
    ]
  },
  {
    id: 'q4-2024',
    quarter: 'Q4 2024',
    title: 'Global Platform',
    status: 'planned',
    items: [
      'Global expansion',
      'Blockchain integration',
      'IoT sensor integration',
      'Predictive analytics'
    ]
  }
];

export const DEMO_SCENARIOS = [
  {
    id: 'traffic-violation',
    title: 'Traffic Violation Report',
    description: 'Report illegal parking in Kuala Lumpur',
    category: 'traffic',
    location: 'Kuala Lumpur, Malaysia',
    evidence: ['photo1.jpg', 'video1.mp4'],
    status: 'investigating'
  },
  {
    id: 'environmental-issue',
    title: 'Illegal Dumping',
    description: 'Report illegal waste dumping in Singapore',
    category: 'environment',
    location: 'Singapore',
    evidence: ['photo2.jpg'],
    status: 'resolved'
  },
  {
    id: 'public-safety',
    title: 'Broken Infrastructure',
    description: 'Report damaged streetlight in Johor',
    category: 'public',
    location: 'Johor Bahru, Malaysia',
    evidence: ['photo3.jpg'],
    status: 'processing'
  }
];
