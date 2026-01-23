import { useState, useEffect, useRef } from "react";

interface StatCard {
  stat: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  shadowColor: string;
}

const StatsSection: React.FC = () => {
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

  const stats: StatCard[] = [
    {
      stat: "9 out of 10",
      description:
        "clients say their therapist helped them understand their thoughts",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {/* Heart icon - always visible */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
          {/* Animated pulse rings */}
          <circle
            cx="12"
            cy="12"
            r="10"
            strokeWidth={1}
            style={{
              animation: "pulseRing 2s ease-out infinite",
              animationDelay: "0s",
            }}
          />
          <circle
            cx="12"
            cy="12"
            r="10"
            strokeWidth={1}
            style={{
              animation: "pulseRing 2s ease-out infinite",
              animationDelay: "1s",
            }}
          />
        </svg>
      ),
      bgColor: "bg-mindo-blue/10",
      shadowColor: "hover:shadow-mindo-blue/30",
    },
    {
      stat: "93%",
      description: "of clients say they noticed better sleep, more focus, etc.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {/* Circle - always visible */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
          {/* Checkmark - animated */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4"
            style={{
              animation: "drawCheck 2s ease-in-out infinite",
            }}
          />
        </svg>
      ),
      bgColor: "bg-mindo-teal/10",
      shadowColor: "hover:shadow-mindo-teal/30",
    },
    {
      stat: "2× better",
      description:
        "outcomes when clients work closely with both a therapist and a psychiatrist",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          style={{
            animation: "flash 2s ease-in-out infinite",
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      bgColor: "bg-mindo-green/10",
      shadowColor: "hover:shadow-mindo-green/30",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full pt-12 lg:pt-20 pb-20 lg:pb-32 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-section-x">
        {/* Stats Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl p-6 lg:p-8 border-2 border-gray-200 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                item.shadowColor
              } ${item.bgColor} ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
            >
              {/* Animated Icon */}
              <div className="flex justify-center mb-4">
                <div
                  className={`w-16 h-16 rounded-2xl ${item.bgColor} flex items-center justify-center text-${
                    index === 0
                      ? "mindo-blue"
                      : index === 1
                        ? "mindo-teal"
                        : "mindo-green"
                  } group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.icon}
                </div>
              </div>

              {/* Stat Number */}
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-3">
                {item.stat}
              </h3>

              {/* Description */}
              <p className="text-sm lg:text-base text-gray-600 text-center leading-relaxed">
                {item.description}
              </p>

              {/* Decorative gradient overlay on hover */}
              <div
                className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none ${
                  index === 0
                    ? "bg-gradient-to-br from-mindo-blue to-transparent"
                    : index === 1
                      ? "bg-gradient-to-br from-mindo-teal to-transparent"
                      : "bg-gradient-to-br from-mindo-green to-transparent"
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Custom keyframe animations */}
      <style>{`
        @keyframes fadeInOut {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }
        
        @keyframes drawCheck {
          0%, 100% {
            stroke-dasharray: 0, 100;
            opacity: 0.3;
          }
          50% {
            stroke-dasharray: 100, 0;
            opacity: 1;
          }
        }
        
        @keyframes flash {
          0%, 100% {
            opacity: 0.2;
            transform: scale(0.95);
          }
          10% {
            opacity: 1;
            transform: scale(1.1);
          }
          20% {
            opacity: 0.2;
            transform: scale(0.95);
          }
        }
        
        @keyframes pulseRing {
          0% {
            opacity: 0.6;
            transform: scale(0.8);
          }
          50% {
            opacity: 0.3;
          }
          100% {
            opacity: 0;
            transform: scale(1.3);
          }
        }
      `}</style>
    </section>
  );
};

export default StatsSection;
