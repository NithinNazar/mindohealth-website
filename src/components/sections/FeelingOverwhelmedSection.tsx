import { useState, useEffect, useRef } from "react";
import mindoMoodImage from "../../assets/mindo_mood.jpg";

const FeelingOverwhelmedSection: React.FC = () => {
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
        threshold: 0.3, // Trigger when 30% of section is visible
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

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-section-x">
        {/* Centered Heading */}
        <h2 className="text-4xl lg:text-5xl font-medium text-center text-gray-900 mb-20 italic">
          Feeling Overwhelmed?
        </h2>

        {/* Three Column Layout */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-center">
          {/* Left Side - Animated Text and CTA */}
          <div className="space-y-8">
            {/* Animated Words */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-5xl lg:text-6xl xl:text-7xl font-bold">
                <span
                  className={`text-mindo-blue transition-all ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-12"
                  }`}
                  style={{
                    transitionDuration: "2000ms",
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: "400ms",
                  }}
                >
                  Talk.
                </span>
              </div>
              <div className="flex items-center gap-2 text-5xl lg:text-6xl xl:text-7xl font-bold">
                <span
                  className={`text-mindo-teal transition-all ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-12"
                  }`}
                  style={{
                    transitionDuration: "2000ms",
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: "1400ms",
                  }}
                >
                  Vent.
                </span>
              </div>
              <div className="flex items-center gap-2 text-5xl lg:text-6xl xl:text-7xl font-bold">
                <span
                  className={`text-mindo-green transition-all ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-12"
                  }`}
                  style={{
                    transitionDuration: "2000ms",
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: "2400ms",
                  }}
                >
                  Unwind.
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg lg:text-xl text-gray-700 font-semibold leading-relaxed max-w-lg">
              No analysis. No judgments. No labels.
            </p>

            {/* CTA Button */}
            <button className="px-8 py-4 bg-black text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-colors">
              Start Talking
            </button>
          </div>

          {/* Center - Feature Text */}
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-6">
              {/* Animated Listener Icon */}
              <div className="flex justify-center mb-4">
                <div className="relative">
                  {/* Pulsing rings */}
                  <div className="absolute inset-0 rounded-full bg-mindo-blue opacity-20 animate-ping"></div>
                  <div
                    className="absolute inset-0 rounded-full bg-mindo-blue opacity-30 animate-pulse"
                    style={{ animationDuration: "2s" }}
                  ></div>
                  {/* Icon container */}
                  <div className="relative w-16 h-16 rounded-full bg-mindo-blue flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <p className="text-lg font-semibold text-mindo-blue">
                Find a listener
              </p>
              {/* Down Arrow */}
              <svg
                className="w-6 h-6 mx-auto text-mindo-teal"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
              <p className="text-lg font-semibold text-mindo-teal">Talk</p>
              {/* Down Arrow */}
              <svg
                className="w-6 h-6 mx-auto text-mindo-green"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
              <p className="text-lg font-semibold text-mindo-green">
                Zero judgement
              </p>
              {/* Down Arrow */}
              <svg
                className="w-6 h-6 mx-auto text-mindo-light-blue"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
              <p className="text-lg font-semibold text-mindo-light-blue">
                Private and secure
              </p>
            </div>
          </div>

          {/* Right Side - Circular Image with Fade Animation */}
          <div className="flex justify-center lg:justify-end">
            <div
              className={`relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl transition-all ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-85"
              }`}
              style={{
                transitionDuration: "2500ms",
                transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                transitionDelay: "1800ms",
              }}
            >
              <img
                src={mindoMoodImage}
                alt="Mental wellness"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeelingOverwhelmedSection;
