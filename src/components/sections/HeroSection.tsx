import { useState, useEffect, useRef } from "react";
import type { HeroSectionProps } from "../types";

const HeroSection: React.FC<HeroSectionProps> = ({
  videoSrc,
  fallbackImage,
  headline,
  subheadline,
}) => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const backgroundVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Start playing background video immediately (muted and blurred)
    if (backgroundVideoRef.current) {
      backgroundVideoRef.current.play().catch((err) => {
        console.log("Background video autoplay prevented:", err);
      });
    }

    // Trigger the slide-in animation after component mounts
    const timer = setTimeout(() => {
      setIsVideoVisible(true);
    }, 300);

    // Start autoplay after animation completes
    const autoplayTimer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch((err) => {
          console.log("Autoplay prevented:", err);
        });
      }
    }, 1800); // 300ms delay + 1500ms animation

    return () => {
      clearTimeout(timer);
      clearTimeout(autoplayTimer);
    };
  }, []);

  const handleVideoError = () => {
    setVideoError(true);
  };

  const handleBackgroundVideoError = () => {
    console.log("Background video failed to load");
  };

  const handleWatchStory = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen"
      style={{ marginTop: "var(--nav-height)" }}
    >
      {/* Blurred Video Background - Full Screen */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={backgroundVideoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onError={handleBackgroundVideoError}
          aria-hidden="true"
          style={{
            filter: "blur(12px)",
            transform: "scale(1.1)",
          }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        {/* Lighter overlay for better video visibility - 30% opacity */}
        <div className="absolute inset-0 bg-white/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-section-x py-20 lg:py-32">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content (2 columns) */}
          <div className="lg:col-span-2 space-y-8">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-mindo-gray-900 leading-tight">
              {headline}
            </h1>

            <p className="text-lg lg:text-xl text-mindo-gray-900 leading-relaxed">
              {subheadline}
            </p>

            {/* Watch Our Story Button */}
            <button
              onClick={handleWatchStory}
              className="flex items-center gap-3 group"
            >
              <div className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg
                  className="w-6 h-6 text-mindo-blue ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-base font-medium text-mindo-gray-900 uppercase tracking-wide">
                Watch Our Story
              </span>
            </button>
          </div>

          {/* Right Side - Video (3 columns) */}
          <div className="lg:col-span-3 relative">
            <div
              className={`relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-1500 ease-out ${
                isVideoVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-32"
              }`}
              style={{
                aspectRatio: "16/9",
                width: "100%",
                maxWidth: "900px",
                marginLeft: "auto",
              }}
            >
              {!videoError ? (
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  onError={handleVideoError}
                  poster={fallbackImage}
                  aria-label="Hero video"
                >
                  <source src={videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : fallbackImage ? (
                <img
                  src={fallbackImage}
                  alt="Hero background"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-mindo-blue" />
              )}

              {/* Subtle gradient overlay on video */}
              <div className="absolute inset-0 bg-gradient-to-tr from-mindo-blue/5 to-transparent pointer-events-none" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-mindo-teal/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-mindo-light-blue/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
