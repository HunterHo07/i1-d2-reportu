import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility function to merge Tailwind classes
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Format date for display
export function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
}

// Format time for display
export function formatTime(date) {
  return new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).format(new Date(date));
}

// Format date and time for display
export function formatDateTime(date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).format(new Date(date));
}

// Generate random ID
export function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

// Simulate API delay
export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Get country from location
export function getCountryFromLocation(location) {
  const malaysianStates = [
    'kuala lumpur', 'selangor', 'johor', 'penang', 'perak', 'kedah', 
    'kelantan', 'terengganu', 'pahang', 'negeri sembilan', 'melaka', 
    'sabah', 'sarawak', 'perlis', 'putrajaya', 'labuan'
  ];
  
  const locationLower = location.toLowerCase();
  
  if (malaysianStates.some(state => locationLower.includes(state))) {
    return 'malaysia';
  }
  
  if (locationLower.includes('singapore')) {
    return 'singapore';
  }
  
  return 'unknown';
}

// Simulate smart routing based on category and location
export function simulateSmartRouting(category, location) {
  const country = getCountryFromLocation(location);
  const categories = {
    traffic: {
      malaysia: ['JPJ (Road Transport Department)', 'PDRM (Royal Malaysia Police)'],
      singapore: ['LTA (Land Transport Authority)', 'Traffic Police']
    },
    crime: {
      malaysia: ['PDRM (Royal Malaysia Police)'],
      singapore: ['SPF (Singapore Police Force)']
    },
    environment: {
      malaysia: ['DOE (Department of Environment)', 'Local Council'],
      singapore: ['NEA (National Environment Agency)', 'PUB (Public Utilities Board)']
    },
    public: {
      malaysia: ['Local Council', 'PDRM (Royal Malaysia Police)'],
      singapore: ['HDB (Housing Development Board)', 'URA (Urban Redevelopment Authority)']
    },
    commercial: {
      malaysia: ['KPDNHEP (Ministry of Domestic Trade)', 'Local Council'],
      singapore: ['SPRING Singapore', 'IE Singapore']
    }
  };

  const departments = categories[category]?.[country] || ['General Department'];
  const confidence = Math.floor(Math.random() * 10) + 90; // 90-99% confidence
  
  return {
    departments,
    confidence,
    country,
    estimatedTime: getEstimatedTime(category),
    priority: getPriority(category)
  };
}

// Get estimated processing time
export function getEstimatedTime(category) {
  const times = {
    traffic: '3-5 business days',
    crime: '1-2 business days',
    environment: '5-7 business days',
    public: '3-5 business days',
    commercial: '5-10 business days'
  };
  
  return times[category] || '3-7 business days';
}

// Get priority level
export function getPriority(category) {
  const priorities = {
    traffic: 'medium',
    crime: 'high',
    environment: 'low',
    public: 'medium',
    commercial: 'medium'
  };
  
  return priorities[category] || 'medium';
}

// Simulate report status progression
export function simulateStatusProgression() {
  const statuses = ['submitted', 'processing', 'investigating', 'resolved'];
  const currentIndex = Math.floor(Math.random() * statuses.length);
  
  return statuses.slice(0, currentIndex + 1).map((status, index) => ({
    status,
    timestamp: new Date(Date.now() - (statuses.length - index) * 24 * 60 * 60 * 1000).toISOString(),
    message: getStatusMessage(status)
  }));
}

// Get status message
export function getStatusMessage(status) {
  const messages = {
    submitted: 'Report received and logged in the system',
    processing: 'Report is under initial review',
    investigating: 'Investigation is currently in progress',
    resolved: 'Case has been successfully resolved',
    rejected: 'Report was rejected or found invalid'
  };
  
  return messages[status] || 'Status update';
}

// Validate file upload
export function validateFile(file) {
  const maxSize = 10 * 1024 * 1024; // 10MB
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'video/mp4', 'video/quicktime', 'application/pdf'];
  
  if (file.size > maxSize) {
    return { valid: false, error: 'File size must be less than 10MB' };
  }
  
  if (!allowedTypes.includes(file.type)) {
    return { valid: false, error: 'File type not supported' };
  }
  
  return { valid: true };
}

// Convert file to base64
export function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

// Simulate geolocation
export function simulateGeolocation() {
  const locations = [
    { lat: 3.139, lng: 101.6869, address: 'Kuala Lumpur, Malaysia' },
    { lat: 1.3521, lng: 103.8198, address: 'Singapore' },
    { lat: 1.4927, lng: 103.7414, address: 'Johor Bahru, Malaysia' },
    { lat: 5.4164, lng: 100.3327, address: 'George Town, Penang, Malaysia' }
  ];
  
  return locations[Math.floor(Math.random() * locations.length)];
}

// Format file size
export function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Debounce function
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function
export function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Local storage helpers
export const storage = {
  get: (key) => {
    if (typeof window === 'undefined') return null;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return null;
    }
  },
  
  set: (key, value) => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error writing to localStorage:', error);
    }
  },
  
  remove: (key) => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from localStorage:', error);
    }
  }
};

// Generate mock report data
export function generateMockReport(overrides = {}) {
  return {
    id: generateId(),
    title: 'Sample Report',
    description: 'This is a sample report for demonstration purposes',
    category: 'traffic',
    location: 'Kuala Lumpur, Malaysia',
    status: 'submitted',
    priority: 'medium',
    submittedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    evidence: [],
    reporter: {
      name: 'Anonymous',
      contact: null
    },
    ...overrides
  };
}
