import { useState, useEffect, useRef } from "react";
import contactUsImg from "../../assets/contact-us.jpg";

const ContactLocationSection: React.FC = () => {
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

  return (
    <section
      ref={sectionRef}
      className="relative w-full pt-12 lg:pt-20 pb-20 lg:pb-32 bg-gradient-to-br from-teal-50/30 to-blue-50/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-section-x">
        {/* Main Heading */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            transitionDuration: "1000ms",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-mindo-blue mb-2">
            Contact & Locations
          </h2>
        </div>

        {/* Contact Card */}
        <div
          className={`bg-gradient-to-br from-mindo-blue/8 to-mindo-green/8 rounded-3xl p-8 lg:p-12 shadow-xl mb-12 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{
            transitionDuration: "1200ms",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDelay: "200ms",
          }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-mindo-blue mb-4">
                Connect with our
                <br />
                Care Team
              </h3>
              <p className="text-base text-gray-600 mb-8 leading-relaxed">
                Talk to MindoHealth's Care Team on WhatsApp or call to get help
                with any questions or guidance you may need.
              </p>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button className="w-full lg:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 border-2 border-mindo-teal rounded-full text-mindo-teal font-semibold hover:bg-mindo-teal hover:text-white transition-all duration-200">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  CALL US
                </button>

                <button className="w-full lg:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 border-2 border-mindo-blue rounded-full text-mindo-blue font-semibold hover:bg-mindo-blue hover:text-white transition-all duration-200">
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
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  CHAT WITH US
                </button>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={contactUsImg}
                  alt="Contact Us"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Location Cards */}
        <div
          className={`grid md:grid-cols-3 gap-6 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{
            transitionDuration: "1200ms",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDelay: "400ms",
          }}
        >
          {/* Location 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 border border-mindo-teal/10">
            <div className="w-12 h-12 bg-gradient-to-br from-mindo-teal/15 to-mindo-blue/15 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-mindo-teal"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-mindo-blue mb-2">
              Thiruvananthapuram
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              Medical College Road
              <br />
              Thiruvananthapuram, Kerala 695011
            </p>
            <a
              href="#"
              className="text-sm text-mindo-teal hover:text-mindo-blue font-semibold inline-flex items-center gap-1 transition-colors"
            >
              Get Directions
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          {/* Location 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 border border-mindo-blue/10">
            <div className="w-12 h-12 bg-gradient-to-br from-mindo-blue/15 to-mindo-light-blue/15 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-mindo-blue"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-mindo-blue mb-2">Kochi</h4>
            <p className="text-sm text-gray-600 mb-4">
              MG Road, Ernakulam
              <br />
              Kochi, Kerala 682016
            </p>
            <a
              href="#"
              className="text-sm text-mindo-teal hover:text-mindo-blue font-semibold inline-flex items-center gap-1 transition-colors"
            >
              Get Directions
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          {/* Location 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 border border-mindo-light-blue/10">
            <div className="w-12 h-12 bg-gradient-to-br from-mindo-light-blue/15 to-mindo-teal/15 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-mindo-light-blue"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-mindo-blue mb-2">
              Kozhikode
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              Beach Road, Calicut
              <br />
              Kozhikode, Kerala 673032
            </p>
            <a
              href="#"
              className="text-sm text-mindo-teal hover:text-mindo-blue font-semibold inline-flex items-center gap-1 transition-colors"
            >
              Get Directions
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLocationSection;
