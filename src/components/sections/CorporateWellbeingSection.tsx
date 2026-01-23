import { useState, useEffect, useRef } from "react";
import eapImg from "../../assets/mindo_eap.jpg";
import sapImg from "../../assets/mindo-sap.jpg";

interface WellbeingCard {
  id: number;
  title: string;
  description: string;
  image: string;
}

const CorporateWellbeingSection: React.FC = () => {
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

  const wellbeingCards: WellbeingCard[] = [
    {
      id: 1,
      title: "Employee Assistance Program (EAP)",
      description:
        "Comprehensive mental health support for your workforce. Confidential counseling, crisis intervention, and wellness resources to help employees navigate personal and professional challenges.",
      image: eapImg,
    },
    {
      id: 2,
      title: "Student Assistance Program (SAP)",
      description:
        "Specialized support for students facing academic stress, emotional challenges, and life transitions. Professional guidance to promote wellbeing and academic success.",
      image: sapImg,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full pt-12 lg:pt-20 pb-20 lg:pb-32 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-section-x">
        {/* Main Heading */}
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-3">
          Corporate Wellbeing
        </h2>
        <p className="text-base text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Empower your organization with comprehensive mental health solutions
          designed for employees and students.
        </p>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {wellbeingCards.map((card, index) => (
            <div
              key={card.id}
              className={`bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDuration: "1000ms",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                transitionDelay: `${index * 200}ms`,
              }}
            >
              {/* Image */}
              <div className="relative h-56 lg:h-64 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                  {card.description}
                </p>

                {/* Button */}
                <button className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-mindo-teal to-mindo-green rounded-full text-gray-700 font-semibold hover:opacity-90 transition-opacity duration-200">
                  Learn More
                  <svg
                    className="w-5 h-5"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporateWellbeingSection;
