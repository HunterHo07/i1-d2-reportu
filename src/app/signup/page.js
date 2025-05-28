'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { delay } from '@/lib/utils';

export default function SignUpPage() {
  const [activeTab, setActiveTab] = useState('citizen');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    country: '',
    userType: 'citizen'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const tabs = [
    { id: 'citizen', name: 'Citizens', icon: '👤', description: 'Individual users' },
    { id: 'government', name: 'Government', icon: '🏛️', description: 'Departments & agencies' },
    { id: 'enterprise', name: 'Enterprise', icon: '🏢', description: 'Organizations & businesses' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value, userType: activeTab }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await delay(2000);
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const canSubmit = () => {
    const required = ['name', 'email'];
    if (activeTab !== 'citizen') {
      required.push('organization');
    }
    return required.every(field => formData[field].trim() !== '');
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Header />
        
        <section className="pt-20 pb-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 min-h-screen flex items-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl p-8 border border-gray-700/50">
              <div className="text-6xl mb-6">🎉</div>
              <h1 className="text-3xl font-bold text-green-400 mb-4">Welcome to ReportU!</h1>
              <p className="text-xl text-gray-300 mb-6">
                Your account has been created successfully. We'll be in touch soon with next steps.
              </p>
              
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold text-green-400 mb-2">What's Next?</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>✅ Account verification email sent</li>
                  <li>✅ Access to demo platform</li>
                  <li>✅ Onboarding materials prepared</li>
                  {activeTab !== 'citizen' && <li>✅ Sales team will contact you within 24 hours</li>}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/demo" className="btn-primary">
                  🎮 Try Demo Now
                </Link>
                <Link href="/" className="btn-secondary">
                  🏠 Back to Home
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Join ReportU</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Start your journey with the leading cross-border offense reporting platform
          </p>
        </div>
      </section>

      {/* Sign Up Form */}
      <section className="py-12 bg-gray-800/50 min-h-screen">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl p-8 border border-gray-700/50">
            
            {/* User Type Tabs */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-cyan-400 mb-6 text-center">Choose Your Account Type</h2>
              <div className="grid grid-cols-3 gap-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`p-4 rounded-lg border transition-all duration-300 text-center ${
                      activeTab === tab.id
                        ? 'border-cyan-400 bg-cyan-900/20'
                        : 'border-gray-600 bg-gray-700/30 hover:border-gray-500'
                    }`}
                  >
                    <div className="text-2xl mb-2">{tab.icon}</div>
                    <h3 className="font-semibold text-white text-sm">{tab.name}</h3>
                    <p className="text-xs text-gray-400">{tab.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+60 12-345-6789"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Country
                  </label>
                  <select
                    value={formData.country}
                    onChange={(e) => handleInputChange('country', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  >
                    <option value="">Select country</option>
                    <option value="malaysia">🇲🇾 Malaysia</option>
                    <option value="singapore">🇸🇬 Singapore</option>
                    <option value="other">🌍 Other</option>
                  </select>
                </div>
              </div>

              {activeTab !== 'citizen' && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Organization Name *
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => handleInputChange('organization', e.target.value)}
                    placeholder={activeTab === 'government' ? 'Department/Agency name' : 'Company name'}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    required
                  />
                </div>
              )}

              {/* Account Type Benefits */}
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-400 mb-3">
                  {activeTab === 'citizen' ? 'Citizen Benefits' : 
                   activeTab === 'government' ? 'Government Features' : 'Enterprise Features'}
                </h3>
                <ul className="space-y-1 text-sm text-gray-300">
                  {activeTab === 'citizen' && (
                    <>
                      <li>✅ Unlimited free report submissions</li>
                      <li>✅ Real-time status tracking</li>
                      <li>✅ Cross-border support</li>
                      <li>✅ Anonymous reporting option</li>
                    </>
                  )}
                  {activeTab === 'government' && (
                    <>
                      <li>✅ Department dashboard</li>
                      <li>✅ Report management system</li>
                      <li>✅ Analytics and insights</li>
                      <li>✅ API integration</li>
                    </>
                  )}
                  {activeTab === 'enterprise' && (
                    <>
                      <li>✅ White-label solution</li>
                      <li>✅ Custom integrations</li>
                      <li>✅ Dedicated support</li>
                      <li>✅ Advanced security</li>
                    </>
                  )}
                </ul>
              </div>

              {/* Terms and Privacy */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="w-4 h-4 text-cyan-400 bg-gray-700 border-gray-600 rounded focus:ring-cyan-400 mt-1"
                />
                <label htmlFor="terms" className="text-sm text-gray-300">
                  I agree to the{' '}
                  <Link href="/terms" className="text-cyan-400 hover:text-cyan-300">Terms of Service</Link>
                  {' '}and{' '}
                  <Link href="/privacy" className="text-cyan-400 hover:text-cyan-300">Privacy Policy</Link>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!canSubmit() || isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  canSubmit() && !isSubmitting
                    ? 'btn-primary hover-glow'
                    : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating Account...
                  </span>
                ) : (
                  `Create ${activeTab === 'citizen' ? 'Free' : activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Account`
                )}
              </button>
            </form>

            {/* Login Link */}
            <div className="mt-6 text-center">
              <p className="text-gray-400">
                Already have an account?{' '}
                <Link href="/login" className="text-cyan-400 hover:text-cyan-300 font-medium">
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
