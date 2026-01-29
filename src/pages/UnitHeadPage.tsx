import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import mindoLogo from "../assets/mindo_logo_3.png";
import heroVideo from "../assets/mindo_hero_video.mp4";
import expert1 from "../assets/mindo-expert_1.jpg";
import expert2 from "../assets/mindo-expert_2.jpg";
import { useState, useEffect } from "react";

interface Professional {
  id: number;
  name: string;
  title: string;
  role: "unit-head" | "junior" | "consultant";
  image: string;
  experience: string;
  price: string;
  expertise: string[];
  languages: string[];
  therapyHours: string;
  specializations: string[];
  nextAvailable: string;
  startsFrom: string;
}

const UnitHeadPage: React.FC = () => {
  const navigationLinks = [
    { label: "Experts", href: "#experts" },
    { label: "Clinics", href: "#clinics" },
    { label: "Services", href: "#services" },
    { label: "Conditions", href: "#conditions" },
    { label: "Resources", href: "#resources" },
  ];

  // Sample data
  const professionals: Professional[] = [
    {
      id: 1,
      name: "Dr. Arjun Sharma",
      title: "Sr Clinical Psychologist",
      role: "unit-head",
      image: expert1,
      experience: "8+ years of experience",
      price: "₹1700 for 50 mins",
      expertise: [
        "Personality disorders",
        "Anxiety disorders",
        "Depressive disorders",
      ],
      languages: ["English", "Hindi", "Malayalam"],
      therapyHours: "500+ Therapy Hours",
      specializations: ["Procrastination", "Relationship", "Intimacy"],
      nextAvailable: "Tomorrow, 10:00 AM",
      startsFrom: "₹1700",
    },
    {
      id: 2,
      name: "Mohammed Farhan",
      title: "Jr Clinical Psychologist",
      role: "junior",
      image: expert2,
      experience: "3+ years of experience",
      price: "₹1000",
      expertise: [],
      languages: ["English", "Hindi"],
      therapyHours: "250+ Therapy Hours",
      specializations: ["Procrastination", "Relationship", "Intimacy"],
      nextAvailable: "Today, 6:00 PM",
      startsFrom: "₹1000",
    },
    {
      id: 3,
      name: "Dr. Thomas Joseph",
      title: "Consultant Psychiatrist",
      role: "consultant",
      image: expert1,
      experience: "5+ years of experience",
      price: "₹1200",
      expertise: [],
      languages: ["English", "Hindi"],
      therapyHours: "350+ Therapy Hours",
      specializations: ["Stress Management", "Depression", "Anxiety"],
      nextAvailable: "Today, 7:00 PM",
      startsFrom: "₹1200",
    },
  ];

  const unitHead = professionals.find((p) => p.role === "unit-head");
  const juniorPsychologist = professionals.find((p) => p.role === "junior");
  const consultantPsychiatrist = professionals.find(
    (p) => p.role === "consultant",
  );

  const ProfessionalCard = ({
    professional,
    isUnitHead = false,
  }: {
    professional: Professional;
    isUnitHead?: boolean;
  }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 2; // Profile image and video preview

    useEffect(() => {
      if (!isUnitHead) return;

      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 3000);

      return () => clearInterval(interval);
    }, [isUnitHead]);

    const goToSlide = (index: number) => {
      setCurrentSlide(index);
    };

    return (
      <div
        className={`rounded-3xl p-8 bg-[#82d1e6] backdrop-blur-sm border border-white/40 shadow-2xl transition-all duration-300 w-full max-w-sm ${
          isUnitHead ? "lg:max-w-md" : ""
        }`}
      >
        {isUnitHead ? (
          <>
            {/* Slider Section - Full Width */}
            <div className="relative w-full h-48 mb-6">
              {/* Slider Container */}
              <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg ring-4 ring-white/50">
                {/* Slide 1: Profile Image */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    currentSlide === 0 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={professional.image}
                    alt={professional.name}
                    className="w-full h-full object-cover bg-gray-200"
                  />
                </div>

                {/* Slide 2: Video Preview with Play Button */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    currentSlide === 1 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={professional.image}
                    alt={professional.name}
                    className="w-full h-full object-cover bg-gray-200"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg">
                      <svg
                        className="w-8 h-8 text-gray-900 ml-0.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Slider Indicators */}
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      currentSlide === index
                        ? "w-6 h-2 bg-orange-500"
                        : "w-2 h-2 bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Content Section Below Slider */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
                  {professional.name}
                </h3>
                <p className="text-base text-gray-700 font-medium mb-3">
                  {professional.title}
                </p>
                <p className="text-sm text-gray-700 mb-2 flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {professional.experience}
                </p>
                <p className="text-lg font-bold text-gray-900 flex items-center gap-1.5">
                  <svg
                    className="w-5 h-5 text-mindo-green"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {professional.price}
                </p>
              </div>
              <button className="px-5 py-2.5 bg-white/90 backdrop-blur-sm border-2 border-gray-900 rounded-full text-xs font-bold hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105">
                Quick View ⊕
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-start gap-5 mb-6">
            <div className="relative">
              <img
                src={professional.image}
                alt={professional.name}
                className="w-32 h-32 rounded-2xl object-cover bg-gray-200 shadow-lg ring-4 ring-white/50"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-1.5 tracking-tight">
                {professional.name}
              </h3>
              <p className="text-sm text-gray-700 font-medium mb-2">
                {professional.title}
              </p>
            </div>
            <button className="px-5 py-2.5 bg-white/90 backdrop-blur-sm border-2 border-gray-900 rounded-full text-xs font-bold hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105">
              Quick View ⊕
            </button>
          </div>
        )}

        {isUnitHead && (
          <>
            {/* Expertise Tags */}
            <div className="mb-5">
              <p className="text-xs font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                Expertise
              </p>
              <div className="flex flex-wrap gap-2">
                {professional.expertise.map((item, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-800 shadow-sm hover:shadow-md transition-shadow"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="mb-5 p-4 bg-white/60 backdrop-blur-sm rounded-2xl">
              <p className="text-xs font-semibold text-gray-700 flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z"
                    clipRule="evenodd"
                  />
                </svg>
                Speaks:{" "}
                <span className="text-gray-900 font-bold">
                  {professional.languages.join(", ")}
                </span>
              </p>
            </div>

            {/* Online/In-person */}
            <div className="flex gap-3 mb-5">
              <button className="flex-1 px-5 py-3 bg-white border-2 border-mindo-green text-mindo-green rounded-full text-sm font-bold hover:bg-mindo-green hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
                🌐 Online
              </button>
              <button className="flex-1 px-5 py-3 bg-white/60 border-2 border-gray-300 text-gray-700 rounded-full text-sm font-bold hover:bg-white hover:border-gray-400 transition-all duration-300 shadow-md">
                📍 In-person
              </button>
            </div>

            {/* Video, Voice */}
            <div className="mb-5 p-4 bg-white/60 backdrop-blur-sm rounded-2xl space-y-2">
              <p className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <span className="text-lg">📹</span> Video, Voice
              </p>
              <p className="text-sm text-gray-700 flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-mindo-green"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                Next online slot:{" "}
                <span className="text-mindo-green font-bold">
                  {professional.nextAvailable}
                </span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 py-4 bg-white border-2 border-gray-900 rounded-full text-sm font-bold hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                VIEW PROFILE
              </button>
              <button className="flex-1 py-4 bg-gradient-to-r from-mindo-green to-mindo-teal text-white rounded-full text-sm font-bold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                BOOK NOW
              </button>
            </div>
          </>
        )}

        {!isUnitHead && (
          <>
            {/* Therapy Hours */}
            <div className="mb-4 p-3 bg-white/60 backdrop-blur-sm rounded-xl">
              <p className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-mindo-teal"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                {professional.therapyHours}
              </p>
            </div>

            {/* Specializations */}
            <div className="flex flex-wrap gap-2 mb-5">
              {professional.specializations.map((spec, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-800 shadow-sm hover:shadow-md transition-shadow"
                >
                  {spec}
                </span>
              ))}
            </div>

            {/* Audio Player */}
            <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-5 py-3 mb-5 shadow-md">
              <button className="w-10 h-10 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                <svg
                  className="w-5 h-5 text-white ml-0.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-gradient-to-r from-mindo-teal to-mindo-green rounded-full"></div>
              </div>
              <span className="text-xs font-semibold text-gray-700">1:34</span>
            </div>

            {/* Availability */}
            <div className="border-t-2 border-white/50 pt-4">
              <div className="mb-4 p-3 bg-white/60 backdrop-blur-sm rounded-xl">
                <p className="text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                  Next available slot
                </p>
                <p className="text-base font-bold text-mindo-teal mb-2 flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {professional.nextAvailable}
                </p>
                <p className="text-sm text-gray-700">
                  Starts From{" "}
                  <span className="font-bold text-gray-900 text-base">
                    {professional.startsFrom}
                  </span>
                </p>
              </div>

              <button className="w-full py-3.5 bg-gradient-to-r from-mindo-green to-mindo-teal text-white rounded-full font-bold hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105">
                Book Appointment
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        logo={mindoLogo}
        links={navigationLinks}
        ctaText="Book Consultation"
        ctaAction={() => console.log("CTA clicked")}
      />

      {/* Hero Section with Video Banner */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Purple Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-purple-800/70 to-purple-900/80"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 text-center">
            Clinical Supervision Model
          </h1>
          <p className="text-lg text-white/90 max-w-2xl text-center mb-6">
            Our care structure ensures that every patient benefits from a
            multi-tiered team of experts.
          </p>

          {/* Play button */}
          <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform -mt-[10px]">
            <svg
              className="w-8 h-8 text-purple-900 ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </section>

      {/* Cards Section - Overlapping Layout */}
      <section className="relative -mt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {/* Left Card - Jr Clinical Psychologist */}
            <div className="lg:mt-[calc(8rem+30px)] lg:ml-[10px]">
              {juniorPsychologist && (
                <>
                  <ProfessionalCard professional={juniorPsychologist} />
                  <div className="text-center mt-4">
                    <h3 className="text-lg font-bold text-gray-900 bg-gray-200 rounded-2xl px-6 py-3 inline-block">
                      Jr Clinical Psychologist
                    </h3>
                  </div>
                </>
              )}
            </div>

            {/* Center Card - Unit Head (Overlapping) */}
            <div className="flex flex-col items-center mt-[10px]">
              {unitHead && (
                <>
                  <ProfessionalCard professional={unitHead} isUnitHead />
                  <div className="text-center mt-4 bg-gray-200 rounded-2xl px-6 py-3">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      UNIT HEAD
                    </h3>
                    <p className="text-lg font-bold text-gray-900">
                      Sr Clinical Psychologist
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Right Card - Consultant Psychiatrist */}
            <div className="lg:mt-[calc(8rem+30px)]">
              {consultantPsychiatrist && (
                <>
                  <ProfessionalCard professional={consultantPsychiatrist} />
                  <div className="text-center mt-4">
                    <h3 className="text-lg font-bold text-gray-900 bg-gray-200 rounded-2xl px-6 py-3 inline-block">
                      Consultant Psychiatrist
                    </h3>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Sr Psychologist Section */}
      <section className="bg-white py-12 -mt-[75px]">
        <div className="max-w-7xl mx-auto px-4">
          {/* Sr Psychologist Card - Centered with Text on Sides */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Text */}
            <div className="hidden lg:flex justify-end items-center -mt-[300px] pr-[100px]">
              <p className="text-3xl italic font-medium text-right max-w-xs leading-relaxed">
                <span className="text-mindo-blue">Every care plan</span>{" "}
                <span className="text-mindo-teal">is overseen</span>{" "}
                <span className="text-mindo-green">by the Unit Head.</span>
              </p>
            </div>

            {/* Center - Sr Psychologist Card */}
            <div className="w-full max-w-sm mx-auto">
              {/* Section Title */}
              <div className="mb-6 flex justify-center">
                <h2 className="text-xl font-bold text-gray-900 bg-gray-200 rounded-2xl px-6 py-3">
                  Sr Psychologist
                </h2>
              </div>

              <ProfessionalCard
                professional={{
                  id: 5,
                  name: "Rajesh Kumar",
                  title: "Consultant Psychologist",
                  role: "consultant",
                  image: expert1,
                  experience: "5+ years of experience",
                  price: "₹1100",
                  expertise: [],
                  languages: ["English", "Hindi", "Tamil"],
                  therapyHours: "300+ Therapy Hours in",
                  specializations: ["Anxiety", "Stress Management"],
                  nextAvailable: "Tomorrow, 9:00 AM",
                  startsFrom: "₹1100",
                }}
              />
            </div>

            {/* Right Text */}
            <div className="hidden lg:flex justify-start items-center -mt-[300px] pl-[100px]">
              <p className="text-3xl italic font-medium text-left max-w-xs leading-relaxed">
                <span className="text-mindo-teal">Whichever expert</span>{" "}
                <span className="text-mindo-light-blue">you choose,</span>{" "}
                <span className="text-mindo-blue">
                  your care is clinically supervised.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Jr Psychologists Section */}
      <section className="bg-white py-12 -mt-[50px]">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Title - Full Width Background */}
          <div className="mb-8 bg-gray-200 rounded-2xl px-6 py-3">
            <h2 className="text-xl font-bold text-gray-900 text-center">
              Jr Psychologists
            </h2>
          </div>

          {/* Jr Psychologists Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProfessionalCard
              professional={{
                id: 7,
                name: "Imran Khan",
                title: "Consultant Psychologist",
                role: "consultant",
                image: expert2,
                experience: "2+ years of experience",
                price: "₹900",
                expertise: [],
                languages: ["English", "Hindi", "Urdu"],
                therapyHours: "250+ Therapy Hours in",
                specializations: [
                  "Challenges",
                  "Personality-related challenges",
                ],
                nextAvailable: "Today, 6:15 PM",
                startsFrom: "₹1000",
              }}
            />
            <ProfessionalCard
              professional={{
                id: 8,
                name: "Vikram Singh",
                title: "Consultant Psychologist",
                role: "consultant",
                image: expert1,
                experience: "2+ years of experience",
                price: "₹900",
                expertise: [],
                languages: ["English", "Hindi", "Telugu"],
                therapyHours: "250+ Therapy Hours in",
                specializations: [
                  "Challenges",
                  "Personality-related challenges",
                ],
                nextAvailable: "Today, 6:15 PM",
                startsFrom: "₹1000",
              }}
            />
            <ProfessionalCard
              professional={{
                id: 9,
                name: "Samuel Matthew",
                title: "Consultant Psychologist",
                role: "consultant",
                image: expert2,
                experience: "2+ years of experience",
                price: "₹900",
                expertise: [],
                languages: ["English", "Hindi", "Malayalam"],
                therapyHours: "250+ Therapy Hours in",
                specializations: [
                  "Challenges",
                  "Personality-related challenges",
                ],
                nextAvailable: "Today, 6:15 PM",
                startsFrom: "₹1000",
              }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UnitHeadPage;
