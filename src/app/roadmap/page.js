'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ROADMAP_ITEMS } from '@/lib/constants';

export default function RoadmapPage() {
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-green-400 border-green-400 bg-green-900/20';
      case 'in-progress':
        return 'text-yellow-400 border-yellow-400 bg-yellow-900/20';
      case 'planned':
        return 'text-blue-400 border-blue-400 bg-blue-900/20';
      default:
        return 'text-gray-400 border-gray-400 bg-gray-900/20';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return '✅';
      case 'in-progress':
        return '🚧';
      case 'planned':
        return '📋';
      default:
        return '⏳';
    }
  };

  const futureVision = [
    {
      title: 'Global Expansion',
      description: 'Expand to all ASEAN countries and beyond',
      icon: '🌍',
      timeline: '2025-2026'
    },
    {
      title: 'AI Predictions',
      description: 'Predictive analytics for crime prevention',
      icon: '🔮',
      timeline: '2025'
    },
    {
      title: 'IoT Integration',
      description: 'Smart city sensor data integration',
      icon: '📡',
      timeline: '2025'
    },
    {
      title: 'Blockchain Records',
      description: 'Immutable report records on blockchain',
      icon: '⛓️',
      timeline: '2026'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Development Roadmap</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our journey to revolutionize cross-border offense reporting across Southeast Asia and beyond
          </p>
        </div>
      </section>

      {/* Current Progress */}
      <section className="py-12 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-2xl p-8 border border-green-500/30">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-green-400 mb-4">Current Status: MVP Launched! 🎉</h2>
              <p className="text-gray-300 mb-6">
                We've successfully launched our Minimum Viable Product with core functionality for Malaysia and Singapore
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">🚀</div>
                  <div className="text-lg font-semibold text-cyan-400">Platform Live</div>
                  <div className="text-sm text-gray-400">Fully operational</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🤖</div>
                  <div className="text-lg font-semibold text-cyan-400">AI Routing</div>
                  <div className="text-sm text-gray-400">99% accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🌏</div>
                  <div className="text-lg font-semibold text-cyan-400">Cross-Border</div>
                  <div className="text-sm text-gray-400">MY & SG integrated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Development Timeline</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our strategic roadmap for the next 12 months and beyond
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 via-yellow-400 to-blue-400 rounded-full"></div>

            <div className="space-y-12">
              {ROADMAP_ITEMS.map((item, index) => (
                <div 
                  key={item.id}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className={`bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-xl p-6 border ${getStatusColor(item.status)} hover-lift`}>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(item.status)}`}>
                          {item.status.replace('-', ' ').toUpperCase()}
                        </span>
                      </div>
                      <div className="text-lg font-semibold text-cyan-400 mb-4">{item.quarter}</div>
                      <ul className="space-y-2">
                        {item.items.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm">
                            <span className="text-green-400">✓</span>
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="w-2/12 flex justify-center">
                    <div className={`w-16 h-16 rounded-full border-4 ${getStatusColor(item.status)} flex items-center justify-center text-2xl bg-gray-900`}>
                      {getStatusIcon(item.status)}
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Future Vision</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Looking beyond 2024: Our long-term vision for global impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {futureVision.map((vision, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-6 border border-gray-700/50 hover-lift hover-glow text-center"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl mb-4">{vision.icon}</div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">{vision.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{vision.description}</p>
                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-2">
                  <span className="text-purple-400 text-xs font-semibold">{vision.timeline}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Input */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">Shape Our Future</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Your feedback drives our development. Help us prioritize features that matter most to you.
          </p>
          
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-xl font-semibold text-cyan-400 mb-6">Community Priorities</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                <div className="text-2xl mb-2">📱</div>
                <h4 className="font-semibold text-blue-400 mb-2">Mobile App</h4>
                <p className="text-sm text-gray-300">Native iOS/Android apps</p>
                <div className="mt-3 bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                <span className="text-xs text-blue-400">85% requested</span>
              </div>
              
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                <div className="text-2xl mb-2">🔔</div>
                <h4 className="font-semibold text-green-400 mb-2">Push Notifications</h4>
                <p className="text-sm text-gray-300">Real-time alerts</p>
                <div className="mt-3 bg-green-500 h-2 rounded-full" style={{width: '78%'}}></div>
                <span className="text-xs text-green-400">78% requested</span>
              </div>
              
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                <div className="text-2xl mb-2">🌐</div>
                <h4 className="font-semibold text-purple-400 mb-2">More Countries</h4>
                <p className="text-sm text-gray-300">ASEAN expansion</p>
                <div className="mt-3 bg-purple-500 h-2 rounded-full" style={{width: '72%'}}></div>
                <span className="text-xs text-purple-400">72% requested</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/feedback" className="btn-primary">
                💬 Submit Feedback
              </Link>
              <Link href="/demo" className="btn-secondary">
                🎮 Try Current Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Metrics */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient">Development Metrics</span>
            </h2>
            <p className="text-xl text-gray-300">
              Track our progress in real-time
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-6 border border-gray-700/50">
              <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
              <h3 className="text-lg font-semibold text-white mb-2">Q1 2024</h3>
              <p className="text-gray-400 text-sm">MVP Completed</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-6 border border-gray-700/50">
              <div className="text-3xl font-bold text-yellow-400 mb-2">65%</div>
              <h3 className="text-lg font-semibold text-white mb-2">Q2 2024</h3>
              <p className="text-gray-400 text-sm">In Progress</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-6 border border-gray-700/50">
              <div className="text-3xl font-bold text-blue-400 mb-2">0%</div>
              <h3 className="text-lg font-semibold text-white mb-2">Q3 2024</h3>
              <p className="text-gray-400 text-sm">Planned</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-6 border border-gray-700/50">
              <div className="text-3xl font-bold text-purple-400 mb-2">0%</div>
              <h3 className="text-lg font-semibold text-white mb-2">Q4 2024</h3>
              <p className="text-gray-400 text-sm">Planned</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
