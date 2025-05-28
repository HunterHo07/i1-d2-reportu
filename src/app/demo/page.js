'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { REPORT_CATEGORIES, COUNTRIES } from '@/lib/constants';
import { simulateSmartRouting, generateId, delay } from '@/lib/utils';

export default function DemoPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [reportData, setReportData] = useState({
    title: '',
    description: '',
    category: '',
    location: '',
    evidence: [],
    anonymous: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [routingResult, setRoutingResult] = useState(null);
  const [reportId, setReportId] = useState(null);
  const fileInputRef = useRef(null);

  const steps = [
    { id: 1, title: 'Report Details', icon: '📝' },
    { id: 2, title: 'Evidence Upload', icon: '📸' },
    { id: 3, title: 'Smart Routing', icon: '🤖' },
    { id: 4, title: 'Confirmation', icon: '✅' }
  ];

  const handleInputChange = (field, value) => {
    setReportData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const newEvidence = files.map(file => ({
      id: generateId(),
      name: file.name,
      size: file.size,
      type: file.type,
      url: URL.createObjectURL(file)
    }));
    
    setReportData(prev => ({
      ...prev,
      evidence: [...prev.evidence, ...newEvidence]
    }));
  };

  const removeEvidence = (evidenceId) => {
    setReportData(prev => ({
      ...prev,
      evidence: prev.evidence.filter(item => item.id !== evidenceId)
    }));
  };

  const handleNextStep = async () => {
    if (currentStep === 3) {
      // Simulate smart routing
      setIsSubmitting(true);
      await delay(2000); // Simulate processing time
      
      const routing = simulateSmartRouting(reportData.category, reportData.location);
      setRoutingResult(routing);
      setReportId(`RPT-${generateId().toUpperCase()}`);
      setIsSubmitting(false);
    }
    
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return reportData.title && reportData.description && reportData.category && reportData.location;
      case 2:
        return true; // Evidence is optional
      case 3:
        return true;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Demo Header */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Live Demo</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the full ReportU reporting process with our interactive simulation
          </p>
          <div className="mt-8 bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-yellow-300 text-sm">
              🎮 This is a fully functional demo. No real reports will be submitted to authorities.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                  currentStep >= step.id 
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-400 border-cyan-400 text-white' 
                    : 'border-gray-600 text-gray-400'
                }`}>
                  <span className="text-lg">{step.icon}</span>
                </div>
                <div className="ml-3 hidden sm:block">
                  <p className={`text-sm font-medium ${
                    currentStep >= step.id ? 'text-cyan-400' : 'text-gray-400'
                  }`}>
                    Step {step.id}
                  </p>
                  <p className={`text-xs ${
                    currentStep >= step.id ? 'text-white' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-8 h-0.5 mx-4 transition-all duration-300 ${
                    currentStep > step.id ? 'bg-cyan-400' : 'bg-gray-600'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Content */}
      <section className="py-12 bg-gray-800/50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl p-8 border border-gray-700/50">
            
            {/* Step 1: Report Details */}
            {currentStep === 1 && (
              <div className="space-y-6 fade-in">
                <h2 className="text-2xl font-bold text-cyan-400 mb-6">Report Details</h2>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Report Title *
                  </label>
                  <input
                    type="text"
                    value={reportData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    placeholder="Brief description of the offense"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Detailed Description *
                  </label>
                  <textarea
                    value={reportData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Provide detailed information about what happened..."
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Category *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.values(REPORT_CATEGORIES).map((category) => (
                      <div
                        key={category.id}
                        onClick={() => handleInputChange('category', category.id)}
                        className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 hover-lift ${
                          reportData.category === category.id
                            ? 'border-cyan-400 bg-cyan-900/20'
                            : 'border-gray-600 bg-gray-700/30 hover:border-gray-500'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{category.icon}</span>
                          <div>
                            <h3 className="font-semibold text-white">{category.name}</h3>
                            <p className="text-sm text-gray-400">{category.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    value={reportData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    placeholder="e.g., Kuala Lumpur, Malaysia or Singapore"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="anonymous"
                    checked={reportData.anonymous}
                    onChange={(e) => handleInputChange('anonymous', e.target.checked)}
                    className="w-4 h-4 text-cyan-400 bg-gray-700 border-gray-600 rounded focus:ring-cyan-400"
                  />
                  <label htmlFor="anonymous" className="text-sm text-gray-300">
                    Submit anonymously (recommended for sensitive cases)
                  </label>
                </div>
              </div>
            )}

            {/* Step 2: Evidence Upload */}
            {currentStep === 2 && (
              <div className="space-y-6 fade-in">
                <h2 className="text-2xl font-bold text-cyan-400 mb-6">Evidence Upload</h2>
                <p className="text-gray-300 mb-6">
                  Upload photos, videos, or documents to support your report. This step is optional but recommended.
                </p>

                <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-cyan-400 transition-colors">
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept="image/*,video/*,.pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <div className="space-y-4">
                    <div className="text-4xl">📎</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Upload Evidence</h3>
                      <p className="text-gray-400 text-sm mb-4">
                        Drag and drop files here, or click to browse
                      </p>
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="btn-primary"
                      >
                        Choose Files
                      </button>
                    </div>
                    <p className="text-xs text-gray-500">
                      Supported: Images, Videos, PDF, Word documents (Max 10MB each)
                    </p>
                  </div>
                </div>

                {reportData.evidence.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Uploaded Evidence</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {reportData.evidence.map((item) => (
                        <div key={item.id} className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="text-2xl">
                                {item.type.startsWith('image/') ? '🖼️' :
                                 item.type.startsWith('video/') ? '🎥' : '📄'}
                              </div>
                              <div>
                                <p className="text-white font-medium truncate max-w-32">{item.name}</p>
                                <p className="text-gray-400 text-sm">
                                  {(item.size / 1024 / 1024).toFixed(2)} MB
                                </p>
                              </div>
                            </div>
                            <button
                              onClick={() => removeEvidence(item.id)}
                              className="text-red-400 hover:text-red-300 transition-colors"
                            >
                              ✕
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Smart Routing */}
            {currentStep === 3 && (
              <div className="space-y-6 fade-in">
                <h2 className="text-2xl font-bold text-cyan-400 mb-6">AI Smart Routing</h2>

                {!isSubmitting && !routingResult && (
                  <div className="text-center py-8">
                    <div className="text-6xl mb-4">🤖</div>
                    <h3 className="text-xl font-semibold text-white mb-4">Ready to Process</h3>
                    <p className="text-gray-300 mb-6">
                      Our AI will analyze your report and automatically route it to the correct department
                    </p>
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 max-w-md mx-auto">
                      <p className="text-blue-300 text-sm">
                        ⚡ Processing typically takes 2-3 seconds
                      </p>
                    </div>
                  </div>
                )}

                {isSubmitting && (
                  <div className="text-center py-8">
                    <div className="animate-spin text-6xl mb-4">⚙️</div>
                    <h3 className="text-xl font-semibold text-white mb-4">Processing Report...</h3>
                    <p className="text-gray-300 mb-6">
                      AI is analyzing your report and determining the best routing
                    </p>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full animate-pulse" style={{width: '75%'}}></div>
                    </div>
                  </div>
                )}

                {routingResult && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-6xl mb-4">✅</div>
                      <h3 className="text-xl font-semibold text-green-400 mb-2">Routing Complete!</h3>
                      <p className="text-gray-300">
                        Your report has been successfully analyzed and routed
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-green-400 mb-4">Routing Results</h4>
                        <div className="space-y-3">
                          <div>
                            <span className="text-gray-400">Confidence: </span>
                            <span className="text-green-400 font-semibold">{routingResult.confidence}%</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Country: </span>
                            <span className="text-white">{routingResult.country === 'malaysia' ? '🇲🇾 Malaysia' : '🇸🇬 Singapore'}</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Priority: </span>
                            <span className={`font-semibold ${
                              routingResult.priority === 'high' ? 'text-red-400' :
                              routingResult.priority === 'medium' ? 'text-yellow-400' : 'text-green-400'
                            }`}>
                              {routingResult.priority.toUpperCase()}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-400">Est. Time: </span>
                            <span className="text-cyan-400">{routingResult.estimatedTime}</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-blue-400 mb-4">Assigned Departments</h4>
                        <div className="space-y-2">
                          {routingResult.departments.map((dept, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <span className="text-blue-400">🏛️</span>
                              <span className="text-white text-sm">{dept}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 4: Confirmation */}
            {currentStep === 4 && (
              <div className="space-y-6 fade-in text-center">
                <div className="text-6xl mb-4">🎉</div>
                <h2 className="text-2xl font-bold text-green-400 mb-6">Report Submitted Successfully!</h2>

                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6 max-w-2xl mx-auto">
                  <h3 className="text-lg font-semibold text-green-400 mb-4">Report ID: {reportId}</h3>
                  <p className="text-gray-300 mb-4">
                    Your report has been successfully submitted and is now being processed by the relevant authorities.
                  </p>
                  <div className="text-sm text-gray-400">
                    <p>✅ Report logged in the system</p>
                    <p>✅ Automatically routed to correct departments</p>
                    <p>✅ You will receive updates on the progress</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <Link href="/demo" className="btn-primary">
                    Submit Another Report
                  </Link>
                  <Link href="/" className="btn-secondary">
                    Back to Home
                  </Link>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-700">
              <button
                onClick={handlePrevStep}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  currentStep === 1
                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                    : 'bg-gray-600 text-white hover:bg-gray-500'
                }`}
              >
                Previous
              </button>
              
              <button
                onClick={handleNextStep}
                disabled={!canProceed() || isSubmitting}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  canProceed() && !isSubmitting
                    ? 'btn-primary hover-glow'
                    : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? 'Processing...' : currentStep === steps.length ? 'Complete' : 'Next Step'}
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
