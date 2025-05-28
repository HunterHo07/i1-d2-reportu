'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { STATS } from '@/lib/constants';

export default function WhyUsPage() {
  const competitiveAdvantages = [
    {
      title: 'Cross-Border First',
      description: 'The only platform designed specifically for Malaysia-Singapore integration',
      icon: '🌏',
      details: [
        'Unified reporting across two countries',
        'Automatic jurisdiction detection',
        'Seamless cross-border workflows',
        'Cultural and legal compliance'
      ]
    },
    {
      title: 'AI-Powered Intelligence',
      description: 'Advanced machine learning for 99% accurate report routing',
      icon: '🤖',
      details: [
        'Natural language processing',
        'Smart categorization algorithms',
        'Predictive routing optimization',
        'Continuous learning system'
      ]
    },
    {
      title: 'Real-Time Transparency',
      description: 'Complete visibility throughout the entire reporting process',
      icon: '📊',
      details: [
        'Live status updates',
        'Push notifications',
        'Timeline tracking',
        'Progress analytics'
      ]
    },
    {
      title: 'Mobile-First Design',
      description: 'Built for smartphones with intuitive user experience',
      icon: '📱',
      details: [
        'Responsive design',
        'Touch-optimized interface',
        'Offline capability',
        'One-tap reporting'
      ]
    },
    {
      title: 'Government Integration',
      description: 'Direct API connections with official departments',
      icon: '🏛️',
      details: [
        'Official partnerships',
        'Secure data transmission',
        'Compliance standards',
        'Verified departments'
      ]
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security with privacy protection',
      icon: '🔒',
      details: [
        'End-to-end encryption',
        'GDPR compliance',
        'Anonymous reporting',
        'Audit trails'
      ]
    }
  ];

  const successStories = [
    {
      title: 'Traffic Violation Resolution',
      location: 'Kuala Lumpur, Malaysia',
      timeframe: '2 days',
      description: 'Illegal parking report automatically routed to JPJ and resolved within 48 hours',
      impact: '95% faster than traditional reporting',
      icon: '🚗'
    },
    {
      title: 'Environmental Cleanup',
      location: 'Singapore',
      timeframe: '3 days',
      description: 'Illegal dumping report led to immediate cleanup and fine enforcement',
      impact: 'Community health improved',
      icon: '🌱'
    },
    {
      title: 'Public Safety Enhancement',
      location: 'Johor Bahru, Malaysia',
      timeframe: '1 day',
      description: 'Broken streetlight report resulted in same-day repair',
      impact: 'Accident prevention achieved',
      icon: '💡'
    }
  ];

  const technologyEdge = [
    {
      feature: 'AI Routing Accuracy',
      value: '99.2%',
      description: 'Industry-leading accuracy in department routing'
    },
    {
      feature: 'Processing Speed',
      value: '< 3 sec',
      description: 'Average time for AI analysis and routing'
    },
    {
      feature: 'User Satisfaction',
      value: '4.8/5',
      description: 'Average rating from citizen users'
    },
    {
      feature: 'Resolution Rate',
      value: '85%',
      description: 'Reports successfully resolved'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Why Choose ReportU?</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover what makes ReportU the leading cross-border offense reporting platform
          </p>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Our Competitive Edge</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Six key advantages that set ReportU apart from traditional reporting systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competitiveAdvantages.map((advantage, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-6 border border-gray-700/50 hover-lift hover-glow group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {advantage.description}
                </p>
                <ul className="space-y-2">
                  {advantage.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-400">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Edge */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Technology Leadership</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technology delivering measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologyEdge.map((tech, index) => (
              <div 
                key={index}
                className="text-center bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-xl p-6 border border-gray-700/50 hover-lift"
              >
                <div className="text-3xl font-bold text-cyan-400 mb-2">{tech.value}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.feature}</h3>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real impact stories from our platform users
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-6 border border-gray-700/50 hover-lift"
              >
                <div className="text-4xl mb-4">{story.icon}</div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">{story.title}</h3>
                <div className="flex items-center space-x-4 mb-4 text-sm">
                  <span className="text-gray-400">📍 {story.location}</span>
                  <span className="text-green-400">⏱️ {story.timeframe}</span>
                </div>
                <p className="text-gray-300 mb-4">{story.description}</p>
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3">
                  <p className="text-green-400 text-sm font-semibold">Impact: {story.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Trust */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient">Security & Trust</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Your data and privacy are our top priorities. We implement enterprise-grade security measures.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🔐</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-400 mb-2">End-to-End Encryption</h3>
                    <p className="text-gray-300">All data is encrypted in transit and at rest using AES-256 encryption</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🛡️</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-400 mb-2">GDPR Compliance</h3>
                    <p className="text-gray-300">Full compliance with international data protection regulations</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">👤</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-pink-400 mb-2">Anonymous Reporting</h3>
                    <p className="text-gray-300">Option to submit reports without revealing personal identity</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-2xl p-8 border border-cyan-500/30 glow-cyan">
                <h3 className="text-2xl font-bold text-center mb-6 text-gradient">Trust Metrics</h3>
                <div className="grid grid-cols-2 gap-6">
                  {STATS.map((stat) => (
                    <div key={stat.id} className="text-center">
                      <div className="text-3xl mb-2">{stat.icon}</div>
                      <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">Ready to Experience the Difference?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of citizens who trust ReportU for their offense reporting needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo" className="btn-primary text-lg px-8 py-4 hover-glow">
              🚀 Try Live Demo
            </Link>
            <Link href="/signup" className="btn-secondary text-lg px-8 py-4">
              📝 Sign Up Free
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
