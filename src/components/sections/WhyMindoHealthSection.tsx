import { useState, useEffect, useRef } from "react";
import whyMindoImage from "../../assets/why-mindo.jpg";

interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const WhyMindoHealthSection: React.FC = () => {
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

  const features: FeatureItem[] = [
    {
      title: "Evidence-based process",
      description:
        "Therapeutic methodology built on comprehensive clinical research.",
      icon: (
        <svg
          className="w-10 h-10 text-mindo-blue"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {/* Shield - appears first */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            style={{
              animation: "fadeInOut 3s ease-in-out infinite",
              animationDelay: "0s",
            }}
          />
          {/* Checkmark - appears second */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4"
            style={{
              animation: "fadeInOut 3s ease-in-out infinite",
              animationDelay: "1s",
            }}
          />
        </svg>
      ),
    },
    {
      title: "Personalised therapy journeys",
      description:
        "Measurable, tailored goals keep mental wellness journeys effective.",
      icon: (
        <svg
          className="w-10 h-10 text-mindo-teal"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2z"
            style={{
              animation: "fadeInOut 3s ease-in-out infinite",
              animationDelay: "0s",
            }}
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19v-10a2 2 0 00-2-2h-2a2 2 0 00-2 2v10"
            style={{
              animation: "fadeInOut 3s ease-in-out infinite",
              animationDelay: "1s",
            }}
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 19V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v14"
            style={{
              animation: "fadeInOut 3s ease-in-out infinite",
              animationDelay: "2s",
            }}
          />
        </svg>
      ),
    },
    {
      title: "Continuum of care",
      description:
        "Ongoing support through proactive check-ins and digital tools.",
      icon: (
        <svg
          className="w-10 h-10 text-mindo-green animate-spin"
          style={{
            animationDuration: "4s",
          }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-gradient-to-br from-teal-50/30 via-white to-blue-50/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-section-x">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Side - Why MindoHealth with Image */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-600 text-center">
              Why MindoHealth?
            </h2>

            {/* Static Image Container */}
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative w-full">
                {/* Rectangular Image with blue shadow */}
                <div
                  className="relative w-full rounded-2xl overflow-hidden border-4 border-white transition-shadow duration-300"
                  style={{
                    aspectRatio: "4/3",
                    boxShadow:
                      "0 10px 40px -5px rgba(13, 84, 150, 0.4), 0 4px 15px -3px rgba(13, 84, 150, 0.3)",
                  }}
                >
                  <img
                    src={whyMindoImage}
                    alt="Why MindoHealth"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Features List as Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-32"
                }`}
                style={{
                  transitionDuration: "2000ms",
                  transitionDelay: `${(index + 1) * 1000}ms`,
                  transitionProperty: "opacity, transform",
                }}
                onMouseEnter={(e) => {
                  const colors = [
                    "rgba(13, 84, 150, 0.3)",
                    "rgba(23, 172, 128, 0.3)",
                    "rgba(137, 200, 63, 0.3)",
                  ];
                  e.currentTarget.style.boxShadow = `0 20px 25px -5px ${colors[index]}, 0 8px 10px -6px ${colors[index]}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <div className="flex gap-6 items-start">
                  {/* Icon Container */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-mindo-blue/10 shadow-md flex items-center justify-center hover:scale-110 hover:bg-mindo-blue/20 transition-all duration-300">
                    {feature.icon}
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-700 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom keyframe for floating animation */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes fadeInOut {
          0%, 100% {
            opacity: 0.2;
          }
          33% {
            opacity: 1;
          }
          66% {
            opacity: 0.2;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyMindoHealthSection;
