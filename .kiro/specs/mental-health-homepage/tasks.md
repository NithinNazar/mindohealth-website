# Implementation Plan: Mental Health Homepage

## Overview

This implementation plan breaks down the Mindo Health homepage into incremental, testable steps. We'll start with project configuration, then build the design system foundation, followed by individual sections from top to bottom. Each major component includes corresponding tests to validate functionality early.

## Tasks

- [x] 1. Configure Tailwind CSS and design system
  - Install Tailwind CSS and its dependencies
  - Create tailwind.config.js with custom color palette (#0d5496, #89c83f, #17ac80, #06a3cd)
  - Configure Inter Tight font family (via Google Fonts or local)
  - Set up custom spacing tokens (section-y, section-x, card-gap)
  - Configure responsive breakpoints
  - Update index.css with Tailwind directives and custom CSS variables
  - _Requirements: 1.1, 1.2, 1.3, 5.6, 5.7, 5.8, 5.9_

- [ ] 1.1 Write unit tests for Tailwind configuration
  - Verify custom colors are defined correctly
  - Verify font family is configured
  - _Requirements: 1.1, 1.2, 1.3_

- [ ] 2. Set up testing infrastructure
  - Install Vitest and React Testing Library
  - Install fast-check for property-based testing
  - Install @axe-core/react for accessibility testing
  - Configure Vitest with React support
  - Create test utilities and helpers
  - _Requirements: All testing requirements_

- [x] 3. Create base TypeScript types and interfaces
  - Create src/components/types/index.ts
  - Define NavigationProps, NavigationLink interfaces
  - Define HeroSectionProps, CTAButton interfaces
  - Define ServiceCardProps interface
  - Define ButtonProps interface
  - Define AssetMap interface and asset constants
  - _Requirements: 1.4, 9.3_

- [ ] 4. Implement Button component
  - [x] 4.1 Create src/components/ui/Button.tsx
    - Implement Button component with variant support (primary, secondary, outline)
    - Support size prop (small, medium, large)
    - Apply Tailwind classes based on variant and size
    - Use colors from the palette
    - _Requirements: 5.6, 5.7, 5.8, 5.9_

  - [ ] 4.2 Write unit tests for Button component
    - Test all variant styles render correctly
    - Test size variations
    - Test onClick handler
    - Test disabled state
    - _Requirements: 5.6, 5.7, 5.8, 5.9_

- [ ] 5. Implement ServiceCard component
  - [ ] 5.1 Create src/components/ui/ServiceCard.tsx
    - Implement ServiceCard with image, title, description
    - Apply responsive layout (image top on mobile, left on desktop)
    - Use Tailwind for spacing and styling
    - Handle image loading errors with fallback
    - _Requirements: 4.4, 4.6, 7.4, 8.1_

  - [ ] 5.2 Write property test for ServiceCard required elements
    - **Property 2: Service Cards Have Required Elements**
    - **Validates: Requirements 4.4**

  - [ ] 5.3 Write unit tests for ServiceCard component
    - Test with valid props
    - Test image fallback on error
    - Test optional link prop
    - _Requirements: 4.4, 7.4_

- [ ] 6. Implement Navigation component
  - [x] 6.1 Create src/components/layout/Navigation.tsx
    - Implement Navigation with logo, links, and CTA button
    - Use flexbox layout (logo left, links center/right, CTA right)
    - Apply sticky/fixed positioning
    - Use colors from palette
    - Add smooth scroll behavior for section links
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.6, 2.7_

  - [ ] 6.2 Write property test for scroll accessibility
    - **Property 1: Scroll Behavior Maintains Navigation Accessibility**
    - **Validates: Requirements 2.7**

  - [ ] 6.3 Write unit tests for Navigation component
    - Test navigation renders with links
    - Test CTA button is present
    - Test logo displays correctly
    - _Requirements: 2.1, 2.2, 2.3, 2.4_

- [ ] 7. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 8. Implement VideoBackground component
  - [x] 8.1 Create src/components/ui/VideoBackground.tsx
    - Implement video element with autoplay, muted, loop, playsInline
    - Add error handling with onError callback
    - Support fallback image prop
    - Support optional overlay with configurable opacity
    - _Requirements: 3.2, 3.8, 7.1, 7.4_

  - [ ] 8.2 Write property test for video fallback
    - **Property 7: Asset Loading Fallback**
    - **Validates: Requirements 3.8, 7.4**

  - [ ] 8.3 Write unit tests for VideoBackground component
    - Test video renders with correct attributes
    - Test fallback on video error
    - Test overlay rendering
    - _Requirements: 3.2, 3.8_

- [ ] 9. Implement HeroSection component
  - [x] 9.1 Create src/components/sections/HeroSection.tsx
    - Use VideoBackground component
    - Implement centered content layout
    - Add headline and subheadline with proper typography
    - Add CTA buttons using Button component
    - Apply full viewport height on desktop, 70vh on mobile
    - Use colors from palette for text
    - _Requirements: 3.1, 3.2, 3.3, 3.5, 3.7, 7.1_

  - [ ] 9.2 Write unit tests for HeroSection component
    - Test hero section renders with video
    - Test headline and subheadline display
    - Test CTA buttons render
    - _Requirements: 3.1, 3.2, 3.3, 3.5_

- [ ] 10. Implement service section components
  - [ ] 10.1 Create src/components/sections/EAPSection.tsx
    - Use ServiceCard components with EAP assets (mindo_eap.jpg, mindo_eap_2.jpg)
    - Implement section container with proper padding
    - Add section heading
    - _Requirements: 4.1, 4.3, 7.2, 7.3_

  - [ ] 10.2 Create src/components/sections/AcademicsSection.tsx
    - Use ServiceCard with academics asset (mindo_academics.jpg)
    - Implement section container
    - _Requirements: 4.1, 4.3, 7.2, 7.3_

  - [ ] 10.3 Create src/components/sections/ClubhouseSection.tsx
    - Use ServiceCard with clubhouse asset (mindo_clubhouse.jpg)
    - Implement section container
    - _Requirements: 4.1, 4.3, 7.2, 7.3_

  - [ ] 10.4 Create src/components/sections/CommunitySection.tsx
    - Use ServiceCard with community asset (mindo_community_experience.jpg)
    - Implement section container
    - _Requirements: 4.1, 4.3, 7.2, 7.3_

  - [ ] 10.5 Create src/components/sections/MoodSection.tsx
    - Use ServiceCard with mood asset (mindo_mood.jpg)
    - Implement section container
    - _Requirements: 4.1, 4.3, 7.2, 7.3_

  - [ ] 10.6 Create src/components/sections/ExpertSection.tsx
    - Use ServiceCard with expert assets (mindo-expert_1.jpg, mindo-expert_2.jpg)
    - Implement section container
    - _Requirements: 4.1, 4.3, 7.2, 7.3_

  - [ ] 10.7 Create src/components/sections/SAPSection.tsx
    - Use ServiceCard with SAP asset (mindo-sap.jpg)
    - Implement section container
    - _Requirements: 4.1, 4.3, 7.2, 7.3_

  - [ ] 10.8 Write property test for asset-section mapping
    - **Property 6: Asset-Section Mapping Correctness**
    - **Validates: Requirements 4.2, 7.3**

- [ ] 11. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 12. Implement responsive grid layout for services
  - [ ] 12.1 Create src/components/sections/ServicesSection.tsx
    - Implement container component that wraps all service sections
    - Apply responsive grid: 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
    - Use Tailwind grid utilities with proper gaps
    - Ensure vertical stacking on mobile
    - _Requirements: 4.7, 6.1, 6.2, 6.3, 6.6_

  - [ ] 12.2 Write property test for responsive layout
    - **Property 5: Responsive Layout Adjustment**
    - **Validates: Requirements 6.4**

  - [ ] 12.3 Write unit tests for responsive behavior
    - Test grid layout at desktop breakpoint
    - Test grid layout at tablet breakpoint
    - Test vertical stacking at mobile breakpoint
    - _Requirements: 6.1, 6.2, 6.3, 6.6_

- [ ] 13. Integrate all sections in App.tsx
  - [ ] 13.1 Update src/App.tsx
    - Import all section components
    - Arrange sections in order: Navigation → Hero → Services sections
    - Remove boilerplate code
    - Apply proper semantic HTML (main, section elements)
    - _Requirements: 3.1, 8.4, 9.1_

  - [ ] 13.2 Write integration tests for full page
    - Test all sections render in correct order
    - Test navigation links work
    - Test page structure is semantic
    - _Requirements: 3.1, 8.4, 9.1_

- [ ] 14. Implement accessibility features
  - [ ] 14.1 Add alt text to all images
    - Update ServiceCard to require imageAlt prop
    - Add descriptive alt text to all image usages
    - _Requirements: 8.1_

  - [ ] 14.2 Add ARIA labels to interactive elements
    - Add aria-label to navigation
    - Add aria-label to buttons where needed
    - Add aria-labelledby to sections
    - _Requirements: 8.5_

  - [ ] 14.3 Add video controls
    - Update VideoBackground to include controls attribute or custom controls
    - Ensure keyboard accessibility for video controls
    - _Requirements: 8.6_

  - [ ] 14.4 Implement keyboard navigation support
    - Ensure all interactive elements are keyboard accessible
    - Add visible focus states using Tailwind focus utilities
    - Test tab order is logical
    - _Requirements: 8.3_

  - [ ] 14.5 Write property test for image alt text
    - **Property 8: Image Accessibility**
    - **Validates: Requirements 8.1**

  - [ ] 14.6 Write property test for color contrast
    - **Property 9: Color Contrast Compliance**
    - **Validates: Requirements 8.2**

  - [ ] 14.7 Write property test for video controls
    - **Property 10: Video Controls Availability**
    - **Validates: Requirements 8.6**

  - [ ] 14.8 Run axe-core accessibility tests
    - Test full page with axe-core
    - Verify zero critical violations
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6_

- [ ] 15. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 16. Implement performance optimizations
  - [ ] 16.1 Add lazy loading to images
    - Add loading="lazy" attribute to images below the fold
    - Keep hero section images eager-loaded
    - _Requirements: 10.1_

  - [ ] 16.2 Implement loading states
    - Create loading placeholder components
    - Add loading states to ServiceCard
    - Add loading state to VideoBackground
    - _Requirements: 10.5_

  - [ ] 16.3 Configure code splitting
    - Use React.lazy() for below-fold sections
    - Add Suspense boundaries with loading fallbacks
    - _Requirements: 10.3_

  - [ ] 16.4 Write property test for loading states
    - **Property 11: Loading State Display**
    - **Validates: Requirements 10.5**

  - [ ] 16.5 Run Lighthouse performance audit
    - Run Lighthouse on built application
    - Verify performance score above 80
    - _Requirements: 10.4_

- [ ] 17. Implement design system consistency checks
  - [ ] 17.1 Write property test for font consistency
    - **Property 3: Design System Font Consistency**
    - **Validates: Requirements 5.1**

  - [ ] 17.2 Write property test for color palette consistency
    - **Property 4: Color Palette Consistency**
    - **Validates: Requirements 5.2**

- [ ] 18. Final checkpoint - Ensure all tests pass
  - Run full test suite
  - Verify all property tests pass with 100+ iterations
  - Verify all unit tests pass
  - Verify accessibility tests pass
  - Ask the user if questions arise or if ready for deployment

## Notes

- All tasks are required for comprehensive implementation
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation throughout development
- Property tests validate universal correctness properties with minimum 100 iterations
- Unit tests validate specific examples and edge cases
- Build sections incrementally from top to bottom for visual progress
- Test each component as it's built to catch issues early
