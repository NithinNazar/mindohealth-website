import { useState, useEffect, useRef } from "react";

interface Card {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const DesignedWithIntentionSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const cards: Card[] = [
    {
      title: "AI-driven intelligent care",
      description:
        "Our AI-powered assistant uses emotional intelligence to provide a supportive, non-judgmental, and empathetic experience, helping users access personalised, effective, and unbiased care tailored to their individual needs.",
      icon: (
        <div className="relative w-20 h-20">
          <svg
            className="w-20 h-20 text-mindo-blue"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 64 64"
          >
            {/* Outer circle - gentle rotation */}
            <circle
              cx="32"
              cy="32"
              r="28"
              className="animate-rotate-gentle"
              style={{ transformOrigin: "center" }}
            />
            {/* Chat bubble */}
            <rect
              x="18"
              y="22"
              width="20"
              height="14"
              rx="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M28 36 L24 42 L26 36"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Sparkle - breathing opacity */}
            <path
              d="M42 20 L44 24 L48 22 L44 26 L46 30 L42 26 L38 28 L40 24 L36 22 L40 20 Z"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-breathe"
            />
          </svg>
        </div>
      ),
    },
    {
      title: "Personal goals with real impact",
      description:
        "Members and therapists work together to define clear, achievable goals that bring structure and direction to therapy, ensuring progress feels meaningful and leads to measurable results.",
      icon: (
        <div className="relative w-20 h-20">
          <svg
            className="w-20 h-20 text-mindo-teal"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 64 64"
          >
            {/* Clipboard */}
            <rect
              x="16"
              y="12"
              width="32"
              height="44"
              rx="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect x="24" y="8" width="16" height="6" rx="1" />
            {/* Target outer ring - stroke drawing */}
            <circle cx="38" cy="38" r="10" className="animate-draw" />
            {/* Target middle ring - breathing */}
            <circle cx="38" cy="38" r="5" className="animate-breathe" />
            {/* Target center */}
            <circle cx="38" cy="38" r="2" fill="currentColor" />
            {/* Arrow */}
            <path d="M28 28 L35 35" strokeLinecap="round" />
            <path d="M35 35 L32 35 L35 32" strokeLinecap="round" />
          </svg>
        </div>
      ),
    },
    {
      title: "Continuous support, beyond sessions",
      description:
        "Care doesn't end with appointments. With 24/7 access, regular check-ins, guided tools, and evidence-based resources, MindoHealth provides consistent and thoughtful support at every stage of the journey.",
      icon: (
        <div className="relative w-20 h-20">
          <svg
            className="w-20 h-20 text-mindo-green"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 64 64"
          >
            {/* Person icon */}
            <circle cx="32" cy="22" r="6" />
            <path
              d="M20 48 C20 38 26 34 32 34 C38 34 44 38 44 48"
              strokeLinecap="round"
            />
            {/* Circular arrow - stroke drawing + gentle rotation */}
            <g
              className="animate-rotate-gentle"
              style={{ transformOrigin: "center" }}
            >
              <path
                d="M50 32 A18 18 0 1 1 32 14"
                strokeLinecap="round"
                strokeDasharray="4 4"
                className="animate-breathe"
              />
              <path d="M32 14 L28 10 M32 14 L36 10" strokeLinecap="round" />
            </g>
          </svg>
        </div>
      ),
    },
    {
      title: "Seamless access to psychiatric care",
      description:
        "When additional support is needed, MindoHealth connects members with a trusted network of psychiatrists, ensuring smooth continuity and comprehensive care.",
      icon: (
        <div className="relative w-20 h-20">
          <svg
            className="w-20 h-20 text-mindo-light-blue"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 64 64"
          >
            {/* Hand holding medical cross */}
            <path
              d="M12 40 C12 40 16 36 20 36 C24 36 26 38 28 40 L32 44 L42 34 C44 32 46 30 50 30 C54 30 58 34 58 34"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Medical cross circle - breathing scale */}
            <circle
              cx="38"
              cy="22"
              r="10"
              className="animate-breathe-scale"
              style={{ transformOrigin: "38px 22px" }}
            />
            {/* Medical cross/plus */}
            <path
              d="M38 16 L38 28 M32 22 L44 22"
              strokeLinecap="round"
              strokeWidth={2.5}
            />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full pt-10 lg:pt-16 pb-20 lg:pb-32 overflow-hidden"
      style={{ backgroundColor: "#0d5496" }}
    >
      <div className="max-w-7xl mx-auto px-section-x">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-mindo-teal leading-tight">
            Designed with intention
            <br />
            Backed by science
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`bg-mindo-light-blue/20 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-full"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 400}ms` : "0ms",
                transitionDuration: isVisible ? "1200ms" : "200ms",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                transitionProperty: isVisible
                  ? "opacity, transform"
                  : "transform, box-shadow",
              }}
            >
              {/* Animated Icon */}
              <div className="mb-6">{card.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-700 mb-3">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-base text-gray-300 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignedWithIntentionSection;
