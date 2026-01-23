// Navigation Types
export interface NavigationLink {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface NavigationProps {
  logo?: string;
  links: NavigationLink[];
  ctaText: string;
  ctaAction: () => void;
}

// Button Types
export interface ButtonProps {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
}

// Hero Section Types
export interface CTAButton {
  text: string;
  variant: "primary" | "secondary";
  action: () => void;
}

export interface HeroSectionProps {
  videoSrc: string;
  fallbackImage?: string;
  headline: string;
  subheadline: string;
  ctaButtons: CTAButton[];
}

// Video Background Types
export interface VideoBackgroundProps {
  src: string;
  fallbackImage?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  children?: React.ReactNode;
}

// Service Card Types
export interface ServiceCardProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  link?: string;
  variant?: "default" | "featured";
}

// Section Types
export interface SectionProps {
  id?: string;
  className?: string;
}

// Asset Map Types
export interface AssetMap {
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

// Asset constants
export const assets: AssetMap = {
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
