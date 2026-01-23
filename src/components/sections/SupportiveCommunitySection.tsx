import { useState, useEffect, useRef } from "react";
import supportiveCommunityImg from "../../assets/supportive-community.jpg";

interface Community {
  id: number;
  title: string;
  description: string;
}

const SupportiveCommunitySection: React.FC = () => {
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
        threshold: 0.1,
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

  const communities: Community[] = [
    {
      id: 1,
      title: "MY MINDO™ Academics",
      description:
        "Structured learning for knowledge, skills, and real-world exposure through workshops, internships, and self-help classes.",
    },
    {
      id: 2,
      title: "MY MINDO™ Clubhouse",
      description:
        "Moderated discussion spaces with topic-based rooms, clear rules, and public and professional-only spaces.",
    },
    {
      id: 3,
      title: "MY MINDO™ Experiences",
      description:
        "Therapy-informed real-life experiences, wellness trips with psychologists, and rejuvenation-focused travel.",
    },
    {
      id: 4,
      title: "MY MINDO™ Media",
      description:
        "Mental health learning on demand with free educational videos, premium courses, and guided programs.",
    },
    {
      id: 5,
      title: "MY MINDO™ Circles",
      description:
        "Small, guided group spaces for support circles and growth and self-development circles.",
    },
    {
      id: 6,
      title: "MY MINDO™ Mentorship",
      description:
        "Guided development pathways with student-professional mentorship and early-career guidance.",
    },
    {
      id: 7,
      title: "MY MINDO™ Collaborations",
      description:
        "Interdisciplinary co-creation through community projects, awareness campaigns, and knowledge exchange.",
    },
    {
      id: 8,
      title: "MY MINDO™ Wellness Tools",
      description:
        "Practical resources for daily wellbeing including guided journals, emotional tracking tools, and printable self-care resources.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full pt-12 lg:pt-20 pb-20 lg:pb-32 bg-gradient-to-br from-blue-50/30 to-teal-50/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-section-x">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: Heading + Image */}
          <div
            className={`${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full"
            }`}
            style={{
              transitionDuration: "1200ms",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
              Supportive
              <br />
              Community
            </h2>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={supportiveCommunityImg}
                  alt="Supportive Community"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div
            className={`${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full"
            }`}
            style={{
              transitionDuration: "1200ms",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              transitionDelay: "200ms",
            }}
          >
            {/* Subheading */}
            <p className="text-lg text-gray-600 mb-8">
              Join specialized groups designed for mutual support and
              professional guidance.
            </p>

            {/* Communities Grid */}
            <div className="grid grid-cols-2 gap-6">
              {communities.map((community, index) => (
                <div
                  key={community.id}
                  className={`${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDuration: "800ms",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDelay: `${400 + index * 100}ms`,
                  }}
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {community.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {community.description}
                  </p>
                  <button className="inline-flex items-center gap-2 px-4 py-2 border-2 border-mindo-blue rounded-full text-sm font-semibold text-mindo-blue bg-transparent hover:bg-mindo-blue hover:text-white transition-all duration-200">
                    Go To {community.title.replace("MY MINDO™ ", "")}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportiveCommunitySection;
