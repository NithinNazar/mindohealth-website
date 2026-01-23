import { useState, useEffect, useRef } from "react";
import mindoUnit1 from "../../assets/mindo-unit-1.jpg";
import mindoUnit2 from "../../assets/mindo-unit-2.jpg";
import mindoExpert1 from "../../assets/mindo-expert_1.jpg";
import mindoExpert2 from "../../assets/mindo-expert_2.jpg";

interface Unit {
  id: number;
  title: string;
  description: string;
}

const MindoCareUnitsSection: React.FC = () => {
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

  const topUnits: Unit[] = [
    {
      id: 1,
      title: "Couples & Relationship Unit",
      description:
        "Support for communication, trust, conflict, intimacy, and rebuilding connection.",
    },
    {
      id: 2,
      title: "Child & Adolescent Wellbeing Unit",
      description:
        "Support for emotional, behavioural, academic, and family-related challenges in children and teens.",
    },
    {
      id: 3,
      title: "Family & Parenting Support Unit",
      description:
        "Guidance for parenting stress, co-parenting, family conflicts, and healthy home routines.",
    },
    {
      id: 4,
      title: "Sexual Wellbeing Unit",
      description:
        "Confidential care for sexual concerns, intimacy difficulties, and performance-related stress.",
    },
    {
      id: 5,
      title: "Women's Wellbeing Unit",
      description:
        "Support across life stages including mood, self-esteem, perinatal concerns, and role balance.",
    },
    {
      id: 6,
      title: "Men's Wellbeing Unit",
      description:
        "Support for stress, anger, mood concerns, relationship challenges, and coping skills.",
    },
  ];

  const bottomUnits: Unit[] = [
    {
      id: 7,
      title: "Anxiety & Calm Unit",
      description:
        "Care for worry, panic, overthinking, phobias, and social anxiety.",
    },
    {
      id: 8,
      title: "Mood & Resilience Unit",
      description:
        "Support for low mood, burnout, emotional heaviness, and resilience building.",
    },
    {
      id: 9,
      title: "Stress, Sleep & Burnout Unit",
      description:
        "Care for work stress, sleep issues, physical tension, and exhaustion.",
    },
    {
      id: 10,
      title: "Trauma & Recovery Unit",
      description:
        "Safe, paced support for healing after traumatic or overwhelming life experiences.",
    },
    {
      id: 11,
      title: "Addictions & Habit Change Unit",
      description:
        "Support for substance use and behavioural habits with harm reduction and relapse prevention.",
    },
    {
      id: 12,
      title: "Grief & Life Transitions Unit",
      description:
        "Support through loss, separation, relocation, career change, and major life decisions.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-gradient-to-br from-teal-50/40 to-blue-50/40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-section-x">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900">
            MINDO™ Care Units
          </h2>
        </div>

        {/* Top Row: Image Left + Cards Right */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          {/* Left Side: Description + Image */}
          <div className="lg:col-span-5">
            <p className="text-lg text-gray-700 mb-6">
              Our specialized care units bring together expert clinicians,
              evidence-based approaches, and personalized support to address
              your unique mental health needs across every stage of life.
            </p>
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src={mindoUnit1}
                alt="Mindo Care Unit"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side: 6 Cards (2 rows x 3 columns) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {topUnits.map((unit, index) => (
                <div
                  key={unit.id}
                  className={`flip-card ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-full"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                    transitionDuration: isVisible ? "1000ms" : "200ms",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionProperty: isVisible
                      ? "opacity, transform"
                      : "opacity, transform",
                    minHeight: "320px",
                  }}
                >
                  <div className="flip-card-inner">
                    {/* Front Side */}
                    <div className="flip-card-front bg-gradient-to-br from-mindo-blue/70 to-mindo-blue/50 rounded-3xl p-6 shadow-lg flex flex-col">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {unit.title}
                      </h3>
                      <p className="text-sm text-white/90 mb-4 flex-grow">
                        {unit.description}
                      </p>
                      <button
                        className="w-full py-2 px-4 rounded-full text-sm font-semibold text-gray-800 bg-gradient-to-r from-mindo-teal to-mindo-green hover:opacity-90 transition-all duration-200"
                      >
                        Book Now
                      </button>
                    </div>

                    {/* Back Side */}
                    <div className="flip-card-back rounded-3xl overflow-hidden shadow-lg">
                      <div className="relative w-full h-full flex flex-col">
                        <img
                          src={index % 2 === 0 ? mindoExpert1 : mindoExpert2}
                          alt="Unit Head"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                          <h3 className="text-xl font-bold text-white mb-4">
                            Unit Head
                          </h3>
                          <button
                            className="w-full py-2 px-4 rounded-full text-sm font-semibold text-gray-800 bg-gradient-to-r from-mindo-teal to-mindo-green hover:opacity-90 transition-all duration-200"
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row: Cards Left + Image Right */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Side: 6 Cards (2 rows x 3 columns) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {bottomUnits.map((unit, index) => (
                <div
                  key={unit.id}
                  className={`flip-card ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-full"
                  }`}
                  style={{
                    transitionDelay: isVisible
                      ? `${(index + 6) * 100}ms`
                      : "0ms",
                    transitionDuration: isVisible ? "1000ms" : "200ms",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionProperty: isVisible
                      ? "opacity, transform"
                      : "opacity, transform",
                    minHeight: "320px",
                  }}
                >
                  <div className="flip-card-inner">
                    {/* Front Side */}
                    <div className="flip-card-front bg-gradient-to-br from-mindo-blue/70 to-mindo-blue/50 rounded-3xl p-6 shadow-lg flex flex-col">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {unit.title}
                      </h3>
                      <p className="text-sm text-white/90 mb-4 flex-grow">
                        {unit.description}
                      </p>
                      <button
                        className="w-full py-2 px-4 rounded-full text-sm font-semibold text-gray-800 bg-gradient-to-r from-mindo-teal to-mindo-green hover:opacity-90 transition-all duration-200"
                      >
                        Book Now
                      </button>
                    </div>

                    {/* Back Side */}
                    <div className="flip-card-back rounded-3xl overflow-hidden shadow-lg">
                      <div className="relative w-full h-full flex flex-col">
                        <img
                          src={index % 2 === 0 ? mindoExpert1 : mindoExpert2}
                          alt="Unit Head"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                          <h3 className="text-xl font-bold text-white mb-4">
                            Unit Head
                          </h3>
                          <button
                            className="w-full py-2 px-4 rounded-full text-sm font-semibold text-gray-800 bg-gradient-to-r from-mindo-teal to-mindo-green hover:opacity-90 transition-all duration-200"
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Description + Image */}
          <div className="lg:col-span-5">
            <p className="text-lg text-gray-700 mb-6">
              Each unit is led by dedicated specialists who understand the
              complexities of mental health. From anxiety and trauma to life
              transitions and relationship challenges, we provide comprehensive
              care that adapts to your journey.
            </p>
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src={mindoUnit2}
                alt="Mindo Care Unit"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MindoCareUnitsSection;


