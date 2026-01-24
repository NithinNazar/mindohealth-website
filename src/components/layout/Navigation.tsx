import type { NavigationProps } from "../types";

const Navigation: React.FC<NavigationProps> = ({ logo, links }) => {
  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleEmergencyCall = () => {
    console.log("Emergency call clicked");
  };

  const handleSignIn = () => {
    console.log("Sign in clicked");
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm"
      aria-label="Main navigation"
      style={{ height: "var(--nav-height)" }}
    >
      <div className="max-w-7xl mx-auto px-section-x h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            {logo ? (
              <img
                src={logo}
                alt="Mindo Health Logo"
                className="h-18 w-auto object-contain rounded-2xl"
              />
            ) : (
              <span className="text-2xl font-bold text-mindo-gray-900">
                MindoHealth
              </span>
            )}
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {links.map((link, index) => (
              <button
                key={index}
                onClick={() => handleLinkClick(link.href)}
                className={`text-base font-medium transition-colors hover:text-mindo-blue flex items-center gap-1 ${
                  link.isActive ? "text-mindo-blue" : "text-mindo-gray-900"
                }`}
              >
                {link.label}
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
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Search Icon */}
            <button
              className="p-2 hover:bg-mindo-gray-50 rounded-full transition-colors"
              aria-label="Search"
            >
              <svg
                className="w-5 h-5 text-mindo-gray-900"
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
            </button>

            {/* Phone Icon */}
            <button
              className="p-2 hover:bg-mindo-gray-50 rounded-full transition-colors"
              aria-label="Call"
            >
              <svg
                className="w-5 h-5 text-mindo-gray-900"
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
            </button>

            {/* Emergency Call Button */}
            <button
              onClick={handleEmergencyCall}
              className="hidden md:flex items-center gap-2 px-4 py-2 border-2 border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition-colors font-medium text-sm"
            >
              EMERGENCY CALL
            </button>

            {/* Sign In Button */}
            <button
              onClick={handleSignIn}
              className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm"
            >
              SIGN IN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
