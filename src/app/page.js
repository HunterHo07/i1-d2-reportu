'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { FEATURES, TESTIMONIALS, PRICING_TIERS, STATS } from '@/lib/constants';

export default function Home() {
  const heroRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    // Initialize particle animation
    if (typeof window !== 'undefined') {
      initParticles();
    }
  }, []);

  const initParticles = () => {
    const canvas = particlesRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 255, ${particle.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Particle Background */}
        <canvas
          ref={particlesRef}
          className="absolute inset-0 z-0"
          style={{ background: 'transparent' }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-blue-900/80 to-purple-900/90 z-10"></div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 fade-in">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-gradient">Cross-Border</span>
              <br />
              <span className="text-white">Offense Reporting</span>
              <br />
              <span className="text-gradient-purple">Made Simple</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Report offenses across <span className="text-cyan-400 font-semibold">Malaysia</span> and{' '}
              <span className="text-cyan-400 font-semibold">Singapore</span> with AI-powered routing,
              real-time updates, and seamless cross-border integration.
            </p>

            {/* Key Benefits */}
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-green-400">✓</span>
                <span>Instant AI Routing</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-green-400">✓</span>
                <span>Real-Time Updates</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-green-400">✓</span>
                <span>Cross-Border Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link
                href="/demo"
                className="btn-primary text-lg px-8 py-4 hover-glow scale-in"
                style={{ animationDelay: '0.5s' }}
              >
                🚀 Try Live Demo
              </Link>
              <Link
                href="#features"
                className="btn-secondary text-lg px-8 py-4 scale-in"
                style={{ animationDelay: '0.7s' }}
              >
                Learn More
              </Link>
            </div>

            {/* Mini Demo Preview */}
            <div className="pt-12 slide-in-up" style={{ animationDelay: '1s' }}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto border border-cyan-500/20 glow-cyan">
                <h3 className="text-lg font-semibold mb-4 text-cyan-400">Quick Report Preview</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-sm">1</div>
                    <span className="text-gray-300">Select offense type</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-sm">2</div>
                    <span className="text-gray-300">Upload evidence</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-sm">3</div>
                    <span className="text-gray-300">Get real-time updates</span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <span className="text-green-400 text-sm font-medium">⚡ Average processing: 2-5 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Problem Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-red-400">The Problem</span> We Solve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Citizens across Malaysia and Singapore face significant challenges when reporting offenses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {/* Problem Cards */}
            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 hover-lift">
              <div className="text-4xl mb-4">😤</div>
              <h3 className="text-xl font-semibold text-red-400 mb-3">Complex Processes</h3>
              <p className="text-gray-300">
                Multiple platforms, confusing navigation, and unclear procedures make reporting a nightmare
              </p>
            </div>

            <div className="bg-orange-900/20 border border-orange-500/30 rounded-xl p-6 hover-lift">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-semibold text-orange-400 mb-3">Time-Consuming</h3>
              <p className="text-gray-300">
                Citizens waste hours trying to figure out which department handles their specific case
              </p>
            </div>

            <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-6 hover-lift">
              <div className="text-4xl mb-4">🤷</div>
              <h3 className="text-xl font-semibold text-yellow-400 mb-3">No Feedback</h3>
              <p className="text-gray-300">
                Reports disappear into black holes with no status updates or resolution timelines
              </p>
            </div>

            <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 hover-lift">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-purple-400 mb-3">Cross-Border Chaos</h3>
              <p className="text-gray-300">
                Separate systems for Malaysia and Singapore create confusion for travelers and residents
              </p>
            </div>

            <div className="bg-pink-900/20 border border-pink-500/30 rounded-xl p-6 hover-lift">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-pink-400 mb-3">Mobile Unfriendly</h3>
              <p className="text-gray-300">
                Most government portals are not optimized for smartphones, the primary reporting device
              </p>
            </div>

            <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-xl p-6 hover-lift">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-indigo-400 mb-3">Authority Confusion</h3>
              <p className="text-gray-300">
                Citizens don't know which department to approach for different types of offenses
              </p>
            </div>
          </div>

          {/* Solution Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Our Solution</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              ReportU provides a unified, intelligent platform that solves every pain point
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-2">AI-Powered Smart Routing</h3>
                  <p className="text-gray-300">
                    Our AI automatically categorizes and routes reports to the correct department with 99% accuracy
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📊</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-2">Real-Time Tracking</h3>
                  <p className="text-gray-300">
                    Track your report from submission to resolution with live updates and notifications
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🌏</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pink-400 mb-2">Cross-Border Integration</h3>
                  <p className="text-gray-300">
                    Seamless reporting across Malaysia and Singapore with automatic jurisdiction detection
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📱</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-red-400 mb-2">Mobile-First Design</h3>
                  <p className="text-gray-300">
                    Built for smartphones with intuitive interface and one-tap reporting capabilities
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-2xl p-8 border border-cyan-500/30 glow-cyan">
                <h3 className="text-2xl font-bold text-center mb-6 text-gradient">Impact Metrics</h3>
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

      {/* Features Showcase */}
      <section id="features" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Powerful Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need for efficient cross-border offense reporting
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, index) => (
              <div
                key={feature.id}
                className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-xl p-6 border border-gray-700/50 hover-lift hover-glow group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-400">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Demo Teaser */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8 border border-cyan-500/30 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-gradient">See It In Action</h3>
              <p className="text-gray-300 mb-6">
                Experience the power of ReportU with our interactive demo
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/demo"
                  className="btn-primary text-lg px-8 py-4 hover-glow"
                >
                  🎮 Try Interactive Demo
                </Link>
                <Link
                  href="#testimonials"
                  className="btn-secondary text-lg px-8 py-4"
                >
                  👥 See User Stories
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">What Users Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real stories from citizens who've used ReportU to make their voices heard
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-6 border border-gray-700/50 hover-lift"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <div className="flex items-center mt-1">
                      <span className="text-xs text-gray-500 mr-2">{testimonial.location}</span>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-xs">⭐</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Simple Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your needs. Citizens always report for free.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PRICING_TIERS.map((tier, index) => (
              <div
                key={tier.id}
                className={`relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-xl p-8 border ${
                  tier.popular
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20'
                    : 'border-gray-700/50'
                } hover-lift h-full flex flex-col`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    {tier.period && <span className="text-gray-400">{tier.period}</span>}
                  </div>
                  <p className="text-gray-300 text-sm">{tier.description}</p>
                </div>

                <div className="flex-grow">
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <span className="text-green-400 mt-1">✓</span>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'btn-primary hover-glow'
                      : 'btn-secondary'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
