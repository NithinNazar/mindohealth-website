# Design Document: Mental Health Homepage

## Overview

The Mindo Health homepage is a React-based single-page application that serves as the primary entry point for users seeking mental health support. The design emphasizes a calm, credible, and modern aesthetic through careful use of whitespace, a curated color palette, and the Inter Tight font family. The homepage is built using React 19, TypeScript, and Tailwind CSS, with a component-based architecture that allows for incremental development of individual sections.

The design follows a top-to-bottom flow: Navigation Bar → Hero Section → Services Sections → Additional Content Sections. Each section is self-contained and can be developed independently, with shared components for common patterns like buttons and service cards.

## Architecture

### Technology Stack

- **Frontend Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS with custom configuration
- **Build Tool**: Vite
- **Font**: Inter Tight (loaded via Google Fonts or local)
- **Asset Management**: Vite's static asset handling

### Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── EAPSection.tsx
│   │   ├── AcademicsSection.tsx
│   │   ├── ClubhouseSection.tsx
│   │   ├── CommunitySection.tsx
│   │   ├── MoodSection.tsx
│   │   ├── ExpertSection.tsx
│   │   └── SAPSection.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── ServiceCard.tsx
│   │   └── VideoBackground.tsx
│   └── types/
│       └── index.ts
├── assets/
│   └── [all image and video files]
├── App.tsx
├── main.tsx
└── index.css
```

### Design Principles

1. **High Whitespace, Low Noise**: Generous spacing between elements, minimal decorative elements
2. **Clinical but Warm**: Professional medical aesthetic balanced with welcoming, human touches
3. **Incremental Rendering**: Each section loads independently without blocking others
4. **Mobile-First Responsive**: Design adapts gracefully from mobile to desktop
5. **Accessibility First**: Semantic HTML, ARIA labels, keyboard navigation

## Components and Interfaces

### Core Components

#### Navigation Component

```typescript
interface NavigationProps {
  logo?: string;
  links: NavigationLink[];
  ctaText: string;
  ctaAction: () => void;
}

interface NavigationLink {
  label: string;
  href: string;
  isActive?: boolean;
}
```

The Navigation component is a fixed or sticky header that provides site-wide navigation. It uses flexbox for layout with the logo on the left and navigation links centered or right-aligned. The CTA button uses the primary blue color (#0d5496).

#### Hero Section Component

```typescript
interface HeroSectionProps {
  videoSrc: string;
  fallbackImage?: string;
  headline: string;
  subheadline: string;
  ctaButtons: CTAButton[];
}

interface CTAButton {
  text: string;
  variant: "primary" | "secondary";
  action: () => void;
}
```

The Hero Section uses a full-width video background with overlay text. The video element has `autoplay`, `muted`, `loop`, and `playsInline` attributes. Text is centered and uses high contrast against the video with a semi-transparent overlay if needed.

#### Service Card Component

```typescript
interface ServiceCardProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  link?: string;
  variant?: "default" | "featured";
}
```

Service cards are reusable components displaying service information. They use a card layout with image on top (or left on desktop), followed by title and description. Hover states provide subtle feedback. Cards maintain consistent aspect ratios and spacing.

#### Button Component

```typescript
interface ButtonProps {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
}
```

Buttons follow the design system with three variants:

- **Primary**: Deep blue background (#0d5496), white text
- **Secondary**: Green background (#89c83f), white text
- **Outline**: Transparent background, colored border and text

#### Video Background Component

```typescript
interface VideoBackgroundProps {
  src: string;
  fallbackImage?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  children?: React.ReactNode;
}
```

Handles video playback with fallback to static image if video fails to load. Provides optional dark overlay for text readability.

### Section Components

Each section component follows a similar pattern:

```typescript
interface SectionProps {
  id?: string;
  className?: string;
}
```

Sections are self-contained with their own data and assets. They use consistent padding and margin utilities from Tailwind.

## Data Models

### Color Palette Configuration

```typescript
// tailwind.config.js
const colors = {
  "mindo-blue": "#0d5496", // Deep Blue - primary, clinical
  "mindo-green": "#89c83f", // Green - wellness, fresh
  "mindo-teal": "#17ac80", // Greenish Blue - accent
  "mindo-light-blue": "#06a3cd", // Light Blue - secondary accent
  "mindo-white": "#ffffff",
  "mindo-gray-50": "#f9fafb",
  "mindo-gray-100": "#f3f4f6",
  "mindo-gray-900": "#111827",
};
```

### Typography Configuration

```typescript
// tailwind.config.js
const fontFamily = {
  sans: ["Inter Tight", "system-ui", "sans-serif"],
};

const fontSize = {
  "hero-xl": ["4rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
  "hero-lg": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
  "heading-xl": ["2.5rem", { lineHeight: "1.2" }],
  "heading-lg": ["2rem", { lineHeight: "1.3" }],
  "heading-md": ["1.5rem", { lineHeight: "1.4" }],
  "body-lg": ["1.125rem", { lineHeight: "1.6" }],
  body: ["1rem", { lineHeight: "1.6" }],
  "body-sm": ["0.875rem", { lineHeight: "1.5" }],
};
```

### Spacing System

```typescript
// tailwind.config.js
const spacing = {
  "section-y": "5rem", // Vertical section padding (desktop)
  "section-y-mobile": "3rem", // Vertical section padding (mobile)
  "section-x": "2rem", // Horizontal section padding
  "card-gap": "2rem", // Gap between cards
  "element-gap": "1rem", // Gap between related elements
};
```

### Asset Mapping

```typescript
interface AssetMap {
  hero: {
    video: string;
    fallback?: string;
  };
  services: {
    eap: string[];
    academics: string;
    clubhouse: string;
    community: string;
    mood: string;
    expert: string[];
    sap: string;
  };
}

const assets: AssetMap = {
  hero: {
    video: "/src/assets/mindo_hero_video.mp4",
  },
  services: {
    eap: ["/src/assets/mindo_eap.jpg", "/src/assets/mindo_eap_2.jpg"],
    academics: "/src/assets/mindo_academics.jpg",
    clubhouse: "/src/assets/mindo_clubhouse.jpg",
    community: "/src/assets/mindo_community_experience.jpg",
    mood: "/src/assets/mindo_mood.jpg",
    expert: [
      "/src/assets/mindo-expert_1.jpg",
      "/src/assets/mindo-expert_2.jpg",
    ],
    sap: "/src/assets/mindo-sap.jpg",
  },
};
```

### Responsive Breakpoints

```typescript
// tailwind.config.js
const screens = {
  sm: "640px", // Mobile landscape
  md: "768px", // Tablet
  lg: "1024px", // Desktop
  xl: "1280px", // Large desktop
  "2xl": "1536px", // Extra large desktop
};
```

## Layout Patterns

### Navigation Layout

- **Desktop**: Horizontal flex layout with logo left, links center/right, CTA button right
- **Mobile**: Hamburger menu with slide-out drawer or dropdown
- **Sticky behavior**: Remains at top on scroll with subtle shadow

### Hero Section Layout

- **Desktop**: Full viewport height, centered content, video background covers entire area
- **Mobile**: Reduced height (70vh), stacked content, video still covers background
- **Content positioning**: Centered both horizontally and vertically

### Services Grid Layout

- **Desktop**: 3-column grid with equal-width cards
- **Tablet**: 2-column grid
- **Mobile**: Single column stack
- **Gap**: Consistent spacing using `card-gap` token

### Section Container Pattern

All sections follow this pattern:

```typescript
<section className="py-section-y md:py-section-y-mobile px-section-x">
  <div className="max-w-7xl mx-auto">
    {/* Section content */}
  </div>
</section>
```

This ensures consistent maximum width, centering, and padding across all sections.

## Styling Approach

### Tailwind Configuration

The Tailwind config extends the default theme with custom colors, fonts, and spacing. All custom values are defined in the config to maintain consistency.

### Component Styling Strategy

1. **Utility-first**: Use Tailwind utilities directly in components
2. **Component classes**: Create reusable component classes for complex patterns
3. **Responsive modifiers**: Use Tailwind's responsive prefixes (sm:, md:, lg:)
4. **State variants**: Use hover:, focus:, active: for interactive states

### CSS Custom Properties

For dynamic values or JavaScript-controlled styles:

```css
:root {
  --nav-height: 80px;
  --hero-overlay-opacity: 0.3;
}
```

## Accessibility Implementation

### Semantic HTML

- Use `<nav>` for navigation
- Use `<main>` for main content
- Use `<section>` with appropriate headings
- Use `<article>` for self-contained content
- Use `<button>` for interactive elements (not `<div>`)

### ARIA Labels

```typescript
// Navigation
<nav aria-label="Main navigation">

// Video
<video aria-label="Hero background video">

// Buttons
<button aria-label="Get started with consultation">

// Sections
<section aria-labelledby="services-heading">
  <h2 id="services-heading">Our Services</h2>
</section>
```

### Keyboard Navigation

- All interactive elements must be keyboard accessible
- Focus states must be visible (custom focus ring using Tailwind)
- Tab order must be logical
- Skip links for screen readers

### Color Contrast

All text must meet WCAG AA standards:

- Normal text: 4.5:1 contrast ratio
- Large text (18pt+): 3:1 contrast ratio
- Test all color combinations from the palette

## Performance Optimization

### Image Optimization

1. **Lazy loading**: Use `loading="lazy"` for images below the fold
2. **Responsive images**: Use `srcset` for different screen sizes
3. **Format**: Use WebP with JPEG fallback
4. **Compression**: Optimize all images before deployment

### Video Optimization

1. **Compression**: Compress hero video to reasonable quality
2. **Preload**: Use `<link rel="preload">` for hero video
3. **Poster image**: Provide poster attribute for initial frame
4. **Fallback**: Graceful degradation to static image

### Code Splitting

1. **Route-based**: Split by page (future consideration)
2. **Component-based**: Lazy load below-fold sections
3. **Dynamic imports**: Use React.lazy() for heavy components

```typescript
const HeavySection = React.lazy(() => import('./sections/HeavySection'));

<Suspense fallback={<LoadingSpinner />}>
  <HeavySection />
</Suspense>
```

### Bundle Optimization

1. **Tree shaking**: Ensure Tailwind purges unused styles
2. **Minification**: Vite handles this automatically
3. **Compression**: Enable gzip/brotli on server

## Error Handling

### Asset Loading Errors

```typescript
const handleVideoError = () => {
  setVideoError(true);
  // Fall back to static image
};

<video onError={handleVideoError}>
```

### Graceful Degradation

- Video fails → Show fallback image
- Image fails → Show placeholder with alt text
- Font fails → Fall back to system fonts
- JavaScript disabled → Content still readable (progressive enhancement)

## Testing Strategy

The testing strategy will be defined in the Correctness Properties section below, which will outline specific properties that must hold true across the application, along with unit tests for individual components and integration tests for section interactions.

## Correctness Properties

_A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees._

### Property 1: Scroll Behavior Maintains Navigation Accessibility

_For any_ scroll position on the homepage, the navigation bar should remain accessible and visible to the user.

**Validates: Requirements 2.7**

### Property 2: Service Cards Have Required Elements

_For any_ Service_Card component rendered on the page, it must contain an image element, a title element, and a description element.

**Validates: Requirements 4.4**

### Property 3: Design System Font Consistency

_For any_ text element rendered on the homepage, it should use the Inter Tight font family (or fall back to system fonts if unavailable).

**Validates: Requirements 5.1**

### Property 4: Color Palette Consistency

_For any_ colored element (text, background, border) on the homepage, the color value should match one of the defined Color_Palette values (#0d5496, #89c83f, #17ac80, #06a3cd, or neutral colors like white/gray).

**Validates: Requirements 5.2**

### Property 5: Responsive Layout Adjustment

_For any_ viewport width change, the layout should adjust appropriately according to the defined breakpoints (mobile < 768px, tablet 768-1023px, desktop ≥ 1024px).

**Validates: Requirements 6.4**

### Property 6: Asset-Section Mapping Correctness

_For any_ section component that displays service information, it should use the correctly mapped asset file(s) from the assets folder according to the asset mapping specification.

**Validates: Requirements 4.2, 7.3**

### Property 7: Asset Loading Fallback

_For any_ asset (image or video) that fails to load, the system should display an appropriate fallback (placeholder image, alt text, or fallback background).

**Validates: Requirements 3.8, 7.4**

### Property 8: Image Accessibility

_For all_ image elements rendered on the homepage, each must have a non-empty alt attribute that describes the image content.

**Validates: Requirements 8.1**

### Property 9: Color Contrast Compliance

_For any_ text element on the homepage, the contrast ratio between the text color and its background color should meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text).

**Validates: Requirements 8.2**

### Property 10: Video Controls Availability

_For any_ video element that plays on the homepage, it should provide user controls (either native controls attribute or custom play/pause controls) for accessibility.

**Validates: Requirements 8.6**

### Property 11: Loading State Display

_For any_ asset that is in a loading state, the system should display a loading indicator or placeholder until the asset completes loading or fails.

**Validates: Requirements 10.5**

## Testing Strategy

The homepage will be tested using a dual approach combining unit tests and property-based tests to ensure comprehensive coverage.

### Unit Testing

Unit tests will verify specific examples, edge cases, and component behavior:

- **Component Rendering**: Test that each component (Navigation, HeroSection, ServiceCard, Button) renders without errors
- **Props Handling**: Test that components correctly handle different prop combinations
- **Event Handlers**: Test that click handlers, scroll handlers, and other events work correctly
- **Edge Cases**: Test empty states, missing props, invalid data
- **Integration Points**: Test how components interact with each other

**Testing Framework**: Vitest with React Testing Library

**Example Unit Tests**:

- Navigation component renders with provided links
- Button component applies correct variant styles
- ServiceCard component handles missing image gracefully
- HeroSection displays fallback when video source is invalid

### Property-Based Testing

Property-based tests will verify universal properties across all inputs using randomized test data:

- **Property Tests**: Each correctness property listed above will be implemented as a property-based test
- **Test Configuration**: Minimum 100 iterations per property test to ensure thorough coverage
- **Tagging**: Each test will be tagged with: **Feature: mental-health-homepage, Property {number}: {property_text}**

**Testing Framework**: fast-check (JavaScript/TypeScript property-based testing library)

**Example Property Tests**:

- Generate random scroll positions and verify navigation remains accessible (Property 1)
- Generate random service card data and verify all required elements present (Property 2)
- Generate random viewport widths and verify layout adjusts correctly (Property 5)
- Generate random color values and verify only palette colors are used (Property 4)

### Integration Testing

Integration tests will verify that sections work together correctly:

- Full page rendering with all sections
- Navigation links scroll to correct sections
- Asset loading across multiple sections
- Responsive behavior across breakpoints

### Accessibility Testing

Automated accessibility testing using:

- **axe-core**: Automated accessibility testing
- **Keyboard navigation testing**: Verify all interactive elements are keyboard accessible
- **Screen reader testing**: Manual testing with screen readers (NVDA, JAWS, VoiceOver)

### Visual Regression Testing

Optional visual regression testing to catch unintended UI changes:

- **Tool**: Percy or Chromatic
- **Snapshots**: Capture snapshots at different breakpoints
- **Comparison**: Compare against baseline on each change

### Performance Testing

- **Lighthouse CI**: Automated Lighthouse audits in CI/CD pipeline
- **Bundle size monitoring**: Track bundle size changes
- **Load time metrics**: Monitor Core Web Vitals (LCP, FID, CLS)

### Test Organization

```
src/
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx
│   │   ├── Navigation.test.tsx
│   │   └── Navigation.properties.test.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Button.test.tsx
│   │   └── ServiceCard.test.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       └── HeroSection.test.tsx
└── __tests__/
    ├── integration/
    │   └── homepage.test.tsx
    └── properties/
        ├── accessibility.properties.test.tsx
        ├── responsive.properties.test.tsx
        └── design-system.properties.test.tsx
```

### Testing Balance

- **Unit tests**: Focus on specific component behavior and edge cases
- **Property tests**: Focus on universal rules that must hold across all inputs
- Both approaches are complementary and necessary for comprehensive coverage
- Unit tests catch concrete bugs in specific scenarios
- Property tests verify general correctness across the input space

### Continuous Integration

All tests will run automatically on:

- Every pull request
- Every commit to main branch
- Nightly builds for extended property test runs (1000+ iterations)

### Test Coverage Goals

- **Line coverage**: Minimum 80%
- **Branch coverage**: Minimum 75%
- **Property test iterations**: Minimum 100 per test
- **Accessibility**: Zero critical violations from axe-core
