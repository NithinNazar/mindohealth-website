import { useState, useEffect, useRef } from "react";

interface Professional {
  id: number;
  name: string;
  specialization: string;
  type: "Therapist" | "Psychologist" | "Psychiatrist" | "Centre";
  district: string;
  location: string;
  phone: string;
  rating: number;
}

interface District {
  name: string;
  x: number;
  y: number;
  professionals: number;
}

const MindoYellowPagesSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<string>("All");
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

  const districts: District[] = [
    // South Kerala
    { name: "Thiruvananthapuram", x: 48, y: 92, professionals: 45 },
    { name: "Kollam", x: 50, y: 84, professionals: 32 },
    { name: "Pathanamthitta", x: 57, y: 78, professionals: 18 },
    { name: "Alappuzha", x: 48, y: 76, professionals: 28 },
    { name: "Kottayam", x: 56, y: 72, professionals: 35 },
    { name: "Idukki", x: 68, y: 70, professionals: 15 },

    // Central Kerala
    { name: "Ernakulam", x: 52, y: 64, professionals: 52 },
    { name: "Thrissur", x: 50, y: 56, professionals: 38 },
    { name: "Palakkad", x: 66, y: 54, professionals: 25 },

    // North Kerala
    { name: "Malappuram", x: 52, y: 48, professionals: 30 },
    { name: "Kozhikode", x: 50, y: 40, professionals: 42 },
    { name: "Wayanad", x: 66, y: 38, professionals: 12 },
    { name: "Kannur", x: 52, y: 28, professionals: 28 },
    { name: "Kasaragod", x: 54, y: 18, professionals: 16 },
  ];

  const professionals: Professional[] = [
    {
      id: 1,
      name: "Dr. Anjali Menon",
      specialization: "Clinical Psychology, Anxiety & Depression",
      type: "Psychologist",
      district: "Thiruvananthapuram",
      location: "Medical College, Thiruvananthapuram",
      phone: "+91 471 2345678",
      rating: 4.8,
    },
    {
      id: 2,
      name: "MindCare Centre",
      specialization: "Comprehensive Mental Health Services",
      type: "Centre",
      district: "Ernakulam",
      location: "MG Road, Kochi",
      phone: "+91 484 2876543",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Dr. Rajesh Kumar",
      specialization: "Psychiatry, Addiction Medicine",
      type: "Psychiatrist",
      district: "Kozhikode",
      location: "Beach Road, Kozhikode",
      phone: "+91 495 2765432",
      rating: 4.7,
    },
  ];

  const filteredProfessionals = professionals.filter((prof) => {
    const matchesSearch =
      prof.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prof.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prof.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === "All" || prof.type === filterType;
    const matchesDistrict =
      !selectedDistrict || prof.district === selectedDistrict;
    return matchesSearch && matchesType && matchesDistrict;
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-full pt-12 lg:pt-20 pb-20 lg:pb-32 bg-gradient-to-br from-teal-50/40 to-blue-50/40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-section-x">
        {/* Header */}
        <div
          className={`text-center mb-12 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            transitionDuration: "1000ms",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
            MINDO™ Yellow Pages
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Discover trusted mental health professionals and centres across
            Kerala
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Interactive Map */}
          <div
            className={`${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
            style={{
              transitionDuration: "1200ms",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              transitionDelay: "200ms",
            }}
          >
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Select Your District
              </h3>

              {/* Kerala Map SVG */}
              <div className="relative bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 aspect-[3/4]">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full"
                  style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.1))" }}
                >
                  {/* Kerala outline - simplified shape */}
                  <path
                    d="M 45 5 L 70 8 L 75 15 L 72 22 L 68 28 L 65 35 L 70 40 L 75 45 L 78 52 L 80 60 L 75 68 L 70 75 L 65 82 L 60 88 L 50 92 L 45 85 L 50 78 L 55 70 L 58 62 L 60 55 L 62 48 L 58 42 L 55 35 L 52 28 L 50 20 L 48 12 Z"
                    fill="url(#mapGradient)"
                    stroke="#17ac80"
                    strokeWidth="0.5"
                    opacity="0.3"
                  />
                  <defs>
                    <linearGradient
                      id="mapGradient"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#17ac80" stopOpacity="0.2" />
                      <stop
                        offset="100%"
                        stopColor="#0d5496"
                        stopOpacity="0.2"
                      />
                    </linearGradient>
                  </defs>

                  {/* District markers */}
                  {districts.map((district, index) => (
                    <g
                      key={district.name}
                      className={`cursor-pointer transition-all duration-300 ${
                        selectedDistrict === district.name
                          ? "scale-125"
                          : "hover:scale-110"
                      }`}
                      onClick={() =>
                        setSelectedDistrict(
                          selectedDistrict === district.name
                            ? null
                            : district.name,
                        )
                      }
                      style={{
                        transitionDelay: `${index * 50}ms`,
                        opacity: isVisible ? 1 : 0,
                      }}
                    >
                      <circle
                        cx={district.x}
                        cy={district.y}
                        r={selectedDistrict === district.name ? "3" : "2.5"}
                        fill={
                          selectedDistrict === district.name
                            ? "#0d5496"
                            : "#17ac80"
                        }
                        className="transition-all duration-300"
                      />
                      <circle
                        cx={district.x}
                        cy={district.y}
                        r="4"
                        fill="none"
                        stroke={
                          selectedDistrict === district.name
                            ? "#0d5496"
                            : "#17ac80"
                        }
                        strokeWidth="0.5"
                        opacity="0.3"
                        className="animate-ping-slow"
                      />
                    </g>
                  ))}
                </svg>
              </div>

              {/* Selected District Info */}
              {selectedDistrict && (
                <div className="mt-4 p-4 bg-gradient-to-r from-mindo-teal/10 to-mindo-blue/10 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Selected District</p>
                      <p className="text-lg font-bold text-gray-900">
                        {selectedDistrict}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedDistrict(null)}
                      className="text-sm text-mindo-blue hover:text-mindo-teal transition-colors"
                    >
                      Clear
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Search & Listings */}
          <div
            className={`${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
            style={{
              transitionDuration: "1200ms",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              transitionDelay: "400ms",
            }}
          >
            {/* Search & Filter */}
            <div className="bg-white rounded-3xl p-6 shadow-xl mb-6">
              {/* Search Bar */}
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search by name, specialization, or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-5 py-3 pl-12 border-2 border-gray-200 rounded-full focus:border-mindo-teal focus:outline-none transition-colors"
                />
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-2">
                {[
                  "All",
                  "Therapist",
                  "Psychologist",
                  "Psychiatrist",
                  "Centre",
                ].map((type) => (
                  <button
                    key={type}
                    onClick={() => setFilterType(type)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      filterType === type
                        ? "bg-mindo-teal text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Listings */}
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              {filteredProfessionals.length > 0 ? (
                filteredProfessionals.map((prof, index) => (
                  <div
                    key={prof.id}
                    className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{
                      transitionDelay: `${600 + index * 100}ms`,
                    }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-1">
                          {prof.name}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          {prof.specialization}
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-gradient-to-r from-mindo-teal/20 to-mindo-blue/20 text-mindo-blue text-xs font-semibold rounded-full">
                        {prof.type}
                      </span>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <svg
                          className="w-4 h-4 text-mindo-teal"
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
                        <span>{prof.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <svg
                          className="w-4 h-4 text-mindo-teal"
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
                        <span>{prof.phone}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(prof.rating)
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="text-sm text-gray-600 ml-1">
                          {prof.rating}
                        </span>
                      </div>
                    </div>

                    <button className="w-full px-6 py-2.5 bg-gradient-to-r from-mindo-teal to-mindo-green rounded-full text-gray-700 font-semibold hover:opacity-90 transition-opacity duration-200">
                      Book Appointment
                    </button>
                  </div>
                ))
              ) : (
                <div className="bg-white rounded-2xl p-8 text-center">
                  <p className="text-gray-600">
                    No professionals found matching your criteria
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MindoYellowPagesSection;
