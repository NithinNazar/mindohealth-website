import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import mindoLogo from "../assets/mindo_logo_3.png";
import heroVideo from "../assets/mindo_hero_video.mp4";
import expert1 from "../assets/mindo-expert_1.jpg";
import expert2 from "../assets/mindo-expert_2.jpg";

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
  }) => (
    <div
      className={`bg-gradient-to-br ${
        isUnitHead
          ? "from-mindo-light-blue to-mindo-light-blue"
          : "from-mindo-light-blue/30 to-mindo-light-blue/20"
      } rounded-3xl p-6 shadow-xl ${
        isUnitHead ? "w-full max-w-2xl" : "w-full max-w-sm"
      }`}
    >
      <div className="flex items-start gap-4 mb-4">
        <img
          src={professional.image}
          alt={professional.name}
          className="w-32 h-32 rounded-2xl object-cover bg-gray-200"
        />
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            {professional.name}
          </h3>
          <p className="text-sm text-gray-600 mb-2">{professional.title}</p>
          {isUnitHead && (
            <>
              <p className="text-sm text-gray-700 mb-1">
                {professional.experience}
              </p>
              <p className="text-sm font-semibold text-gray-900">
                {professional.price}
              </p>
            </>
          )}
        </div>
        <button className="px-4 py-2 border-2 border-gray-900 rounded-full text-xs font-semibold hover:bg-gray-900 hover:text-white transition-colors">
          Quick View ⊕
        </button>
      </div>

      {isUnitHead && (
        <>
          {/* Expertise Tags */}
          <div className="mb-4">
            <p className="text-xs text-gray-600 mb-2">Expertise:</p>
            <div className="flex flex-wrap gap-2">
              {professional.expertise.map((item, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white rounded-full text-xs text-gray-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="mb-4">
            <p className="text-xs text-gray-600">
              Speaks:{" "}
              <span className="text-gray-900 font-medium">
                {professional.languages.join(", ")}
              </span>
            </p>
          </div>

          {/* Online/In-person */}
          <div className="flex gap-2 mb-4">
            <button className="px-4 py-2 border-2 border-mindo-green text-mindo-green rounded-full text-sm font-semibold">
              Online
            </button>
            <button className="px-4 py-2 border-2 border-gray-300 text-gray-600 rounded-full text-sm font-semibold">
              In-person
            </button>
          </div>

          {/* Video, Voice */}
          <p className="text-sm text-gray-600 mb-2">📹 Video, Voice</p>
          <p className="text-sm text-gray-600 mb-4">
            Next online slot:{" "}
            <span className="text-mindo-green font-medium">
              {professional.nextAvailable}
            </span>
          </p>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 py-3 border-2 border-gray-900 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
              VIEW PROFILE
            </button>
            <button className="flex-1 py-3 bg-mindo-green text-white rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
              BOOK
            </button>
          </div>
        </>
      )}

      {!isUnitHead && (
        <>
          {/* Therapy Hours */}
          <p className="text-sm text-gray-700 mb-3">
            {professional.therapyHours}
          </p>

          {/* Specializations */}
          <div className="flex flex-wrap gap-2 mb-4">
            {professional.specializations.map((spec, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white rounded-full text-xs text-gray-700"
              >
                {spec}
              </span>
            ))}
          </div>

          {/* Audio Player */}
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-4">
            <button className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
              <svg
                className="w-4 h-4 text-white ml-0.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <div className="flex-1 h-1 bg-gray-200 rounded-full">
              <div className="h-full w-1/3 bg-gray-400 rounded-full"></div>
            </div>
            <span className="text-xs text-gray-600">1:34</span>
          </div>

          {/* Availability */}
          <div className="border-t border-gray-300 pt-3">
            <p className="text-xs text-gray-600 mb-1">Next available slot:</p>
            <p className="text-sm font-semibold text-mindo-teal mb-2">
              {professional.nextAvailable}
            </p>
            <p className="text-sm text-gray-700 mb-3">
              Starts From{" "}
              <span className="font-bold">{professional.startsFrom}</span>
            </p>

            <button className="w-full py-2.5 bg-mindo-green text-white rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              Book
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
            </button>
          </div>
        </>
      )}
    </div>
  );

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
          <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left Card - Jr Clinical Psychologist */}
            <div className="lg:mt-32">
              {juniorPsychologist && (
                <>
                  <ProfessionalCard professional={juniorPsychologist} />
                  <div className="text-center mt-4">
                    <h3 className="text-lg font-bold text-gray-900 bg-gradient-to-r from-purple-200 to-purple-300 rounded-2xl px-6 py-3 inline-block">
                      Jr Clinical Psychologist
                    </h3>
                  </div>
                </>
              )}
            </div>

            {/* Center Card - Unit Head (Overlapping) */}
            <div className="flex flex-col items-center">
              {unitHead && (
                <>
                  <ProfessionalCard professional={unitHead} isUnitHead />
                  <div className="text-center mt-4 bg-gradient-to-r from-purple-200 to-purple-300 rounded-2xl px-6 py-3">
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
            <div className="lg:mt-32">
              {consultantPsychiatrist && (
                <>
                  <ProfessionalCard professional={consultantPsychiatrist} />
                  <div className="text-center mt-4">
                    <h3 className="text-lg font-bold text-gray-900 bg-gradient-to-r from-purple-200 to-purple-300 rounded-2xl px-6 py-3 inline-block">
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
          {/* Sr Psychologist Card - Centered with Title Above */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              {/* Section Title */}
              <div className="mb-6 flex justify-center">
                <h2 className="text-xl font-bold text-gray-900 bg-gradient-to-r from-purple-200 to-purple-300 rounded-2xl px-6 py-3">
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
          </div>
        </div>
      </section>

      {/* Jr Psychologists Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Title - Full Width Background */}
          <div className="mb-8 bg-gradient-to-r from-purple-200 to-purple-300 rounded-2xl px-6 py-3">
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
