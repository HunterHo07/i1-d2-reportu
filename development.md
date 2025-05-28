# ReportU - Development Specification

## 🛠 Technical Architecture

### Frontend Stack
- **Framework**: Next.js 15.3+ (App Router)
- **Styling**: TailwindCSS 3.4+
- **Animations**: GSAP 3.12+, Three.js, Vanta.js
- **State Management**: React Context + localStorage
- **PWA**: Next.js PWA plugin
- **Icons**: Heroicons, FontAwesome
- **Fonts**: Inter, JetBrains Mono

### Backend Simulation
- **Data Storage**: localStorage, sessionStorage
- **File Handling**: FileReader API, Base64 encoding
- **Routing Logic**: JSON-based rule engine
- **Notifications**: Web Push API simulation
- **Geolocation**: Browser Geolocation API

### Design System
- **Color Palette**: Futuristic blues, cyans, purples
- **Typography**: Modern, clean, accessible
- **Components**: Reusable, animated, responsive
- **Layout**: Mobile-first, progressive enhancement

## 📱 Application Structure

### Core Pages

#### 1. HomePage (`/`)
- **Hero Section**: Animated introduction with mini demo
- **Problem/Solution**: Clear value proposition
- **Features Showcase**: Interactive feature highlights
- **Demo Preview**: Embedded reporting simulation
- **Testimonials**: Social proof and credibility
- **Pricing**: Government and enterprise tiers
- **CTA**: Strong call-to-action for demo

#### 2. DemoPage (`/demo`)
- **Live Reporting Flow**: Full simulation of report submission
- **Evidence Upload**: Photo/video upload simulation
- **Smart Routing**: AI categorization demonstration
- **Status Tracking**: Real-time progress updates
- **Cross-Border**: Malaysia/Singapore scenarios
- **Multi-Language**: Language switching demo

#### 3. PitchDeckPage (`/pitch`)
- **Slide Presentation**: Interactive pitch deck
- **Market Analysis**: Visual data representations
- **Business Model**: Revenue stream explanations
- **Roadmap**: Development timeline
- **Team**: Founder and team information

#### 4. WhyUsPage (`/why-us`)
- **Competitive Advantage**: Unique selling points
- **Technology Edge**: AI and cross-border capabilities
- **Success Stories**: Case studies and testimonials
- **Security**: Data protection and privacy
- **Partnerships**: Government and enterprise relationships

#### 5. LandingPage (`/landing`)
- **Conversion Focused**: Optimized for sign-ups
- **Social Proof**: User testimonials and metrics
- **Feature Benefits**: Clear value propositions
- **Risk Reversal**: Guarantees and assurances
- **Multiple CTAs**: Various conversion points

#### 6. RoadmapPage (`/roadmap`)
- **Development Timeline**: Visual roadmap
- **Feature Releases**: Planned functionality
- **Milestones**: Key achievements and goals
- **Community Input**: User feedback integration
- **Progress Tracking**: Current development status

#### 7. SignUpPage (`/signup`)
- **User Registration**: Simulated account creation
- **Government Portal**: Department access simulation
- **Enterprise Signup**: Business account creation
- **Email Verification**: Simulated verification flow
- **Onboarding**: User guidance and setup

### Component Architecture

#### Layout Components
- **Header**: Navigation with animated logo
- **Footer**: Links, social media, contact info
- **Sidebar**: Mobile navigation drawer
- **Breadcrumbs**: Page navigation trail

#### UI Components
- **Button**: Multiple variants with hover effects
- **Card**: Content containers with animations
- **Modal**: Overlay dialogs and forms
- **Toast**: Notification messages
- **Loading**: Animated loading states
- **Progress**: Step indicators and progress bars

#### Feature Components
- **ReportForm**: Multi-step reporting interface
- **EvidenceUpload**: File upload with preview
- **StatusTracker**: Real-time status updates
- **LocationPicker**: Map-based location selection
- **CategorySelector**: AI-powered categorization
- **LanguageSwitcher**: Multi-language support

#### Animation Components
- **ParticleField**: Background particle effects
- **ScrollAnimations**: GSAP scroll-triggered animations
- **HoverEffects**: Interactive element animations
- **PageTransitions**: Smooth page navigation
- **LoadingAnimations**: Engaging loading sequences

## 🎨 Design Specifications

### Color System
```css
/* Primary Colors */
--primary-blue: #0066FF
--primary-cyan: #00FFFF
--primary-purple: #6600FF

/* Secondary Colors */
--secondary-dark: #0A0A0A
--secondary-gray: #1A1A1A
--secondary-light: #F5F5F5

/* Accent Colors */
--accent-green: #00FF88
--accent-orange: #FF6600
--accent-red: #FF0066

/* Gradients */
--gradient-primary: linear-gradient(135deg, #0066FF, #00FFFF)
--gradient-secondary: linear-gradient(135deg, #6600FF, #0066FF)
--gradient-accent: linear-gradient(135deg, #00FF88, #00FFFF)
```

### Typography Scale
```css
/* Headings */
--text-6xl: 3.75rem (60px)
--text-5xl: 3rem (48px)
--text-4xl: 2.25rem (36px)
--text-3xl: 1.875rem (30px)
--text-2xl: 1.5rem (24px)
--text-xl: 1.25rem (20px)

/* Body Text */
--text-lg: 1.125rem (18px)
--text-base: 1rem (16px)
--text-sm: 0.875rem (14px)
--text-xs: 0.75rem (12px)
```

### Spacing System
```css
/* Spacing Scale */
--space-1: 0.25rem (4px)
--space-2: 0.5rem (8px)
--space-4: 1rem (16px)
--space-6: 1.5rem (24px)
--space-8: 2rem (32px)
--space-12: 3rem (48px)
--space-16: 4rem (64px)
--space-24: 6rem (96px)
```

### Animation Specifications
```css
/* Timing Functions */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
--ease-out: cubic-bezier(0, 0, 0.2, 1)
--ease-in: cubic-bezier(0.4, 0, 1, 1)

/* Durations */
--duration-fast: 150ms
--duration-normal: 300ms
--duration-slow: 500ms
--duration-slower: 1000ms
```

## 🔧 Development Workflow

### Project Setup
1. **Initialize Next.js**: `npx create-next-app@latest`
2. **Install Dependencies**: Animation and UI libraries
3. **Configure TailwindCSS**: Custom design tokens
4. **Setup GSAP**: Animation library configuration
5. **Create Components**: Reusable UI components

### Development Phases

#### Phase 1: Foundation (Week 1)
- [ ] Project initialization and setup
- [ ] Basic layout and navigation
- [ ] Design system implementation
- [ ] Core components development

#### Phase 2: HomePage (Week 2)
- [ ] Hero section with animations
- [ ] Problem/solution sections
- [ ] Feature showcase
- [ ] Testimonials and social proof

#### Phase 3: DemoPage (Week 3)
- [ ] Report submission flow
- [ ] Evidence upload simulation
- [ ] Smart routing demonstration
- [ ] Status tracking interface

#### Phase 4: Additional Pages (Week 4)
- [ ] Pitch deck presentation
- [ ] Why us competitive analysis
- [ ] Landing page optimization
- [ ] Roadmap visualization

#### Phase 5: Polish & Testing (Week 5)
- [ ] Animation refinements
- [ ] Responsive design testing
- [ ] Performance optimization
- [ ] Cross-browser compatibility

### Code Organization
```
src/
├── app/
│   ├── page.js (HomePage)
│   ├── demo/page.js
│   ├── pitch/page.js
│   ├── why-us/page.js
│   ├── landing/page.js
│   ├── roadmap/page.js
│   └── signup/page.js
├── components/
│   ├── layout/
│   ├── ui/
│   ├── features/
│   └── animations/
├── lib/
│   ├── utils.js
│   ├── constants.js
│   └── data.js
├── styles/
│   └── globals.css
└── public/
    ├── images/
    ├── icons/
    └── assets/
```

## 📊 Data Simulation

### Report Categories
```javascript
const reportCategories = {
  traffic: {
    name: "Traffic Violations",
    departments: ["JPJ", "PDRM", "LTA"],
    priority: "medium",
    estimatedTime: "3-5 days"
  },
  crime: {
    name: "Criminal Activities",
    departments: ["PDRM", "SPF"],
    priority: "high",
    estimatedTime: "1-2 days"
  },
  environment: {
    name: "Environmental Issues",
    departments: ["DOE", "NEA"],
    priority: "low",
    estimatedTime: "5-7 days"
  }
}
```

### Status Tracking
```javascript
const reportStatuses = [
  { status: "submitted", message: "Report received", timestamp: "2024-01-01T10:00:00Z" },
  { status: "processing", message: "Under review", timestamp: "2024-01-01T11:00:00Z" },
  { status: "investigating", message: "Investigation in progress", timestamp: "2024-01-01T14:00:00Z" },
  { status: "resolved", message: "Case closed", timestamp: "2024-01-03T09:00:00Z" }
]
```

### User Simulation
```javascript
const simulatedUsers = {
  citizen: {
    name: "Ahmad Rahman",
    location: "Kuala Lumpur, Malaysia",
    reports: 5,
    joinDate: "2024-01-01"
  },
  government: {
    department: "Royal Malaysia Police",
    officer: "Inspector Lim Wei Ming",
    jurisdiction: "Selangor",
    casesHandled: 150
  }
}
```

## 🚀 Performance Optimization

### Core Web Vitals Targets
- **Largest Contentful Paint (LCP)**: < 2.5s
- **First Input Delay (FID)**: < 100ms
- **Cumulative Layout Shift (CLS)**: < 0.1

### Optimization Strategies
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Dynamic imports for heavy components
- **Lazy Loading**: Intersection Observer for animations
- **Caching**: localStorage for user preferences
- **Compression**: Gzip/Brotli for static assets

### Bundle Size Targets
- **Initial Bundle**: < 200KB
- **Total JavaScript**: < 500KB
- **CSS**: < 50KB
- **Images**: WebP format, optimized sizes

## 🔒 Security Considerations

### Data Protection
- **Client-Side Only**: No sensitive data transmission
- **Local Storage**: Encrypted user preferences
- **File Handling**: Secure file upload simulation
- **XSS Prevention**: Sanitized user inputs

### Privacy Features
- **Anonymous Reporting**: No personal data required
- **Data Retention**: Clear data deletion policies
- **Consent Management**: User permission handling
- **Audit Trail**: Report submission logging

---

*This development specification guides the technical implementation of the ReportU MVP.*
