import { useState, useEffect, useRef } from "react";
import type { HeroSectionProps } from "../types";

const HeroSection: React.FC<HeroSectionProps> = ({
  videoSrc,
  fallbackImage,
}) => {
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Start autoplay after a short delay
    const autoplayTimer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch((err) => {
          console.log("Autoplay prevented:", err);
        });
      }
    }, 500);

    return () => {
      clearTimeout(autoplayTimer);
    };
  }, []);

  const handleVideoError = () => {
    setVideoError(true);
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
      className="relative w-full min-h-screen overflow-hidden bg-white"
    >
      {/* Gradient Background - Strong at top left, fading to white */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: `
            radial-gradient(ellipse 800px 800px at 0% 0%, 
              rgba(23, 172, 128, 0.28) 0%, 
              rgba(23, 172, 128, 0.20) 20%,
              rgba(23, 172, 128, 0.12) 35%,
              rgba(23, 172, 128, 0.06) 50%,
              rgba(255, 255, 255, 0) 70%
            )
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-section-x py-20 lg:py-32">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left Side - Colored Text Content */}
          <div className="lg:col-span-2 space-y-6">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              <span className="text-mindo-teal">Headlines</span>
              <span className="text-mindo-teal"> and</span>
              <br />
              <span className="text-mindo-blue">Description</span>
            </h1>

            <p className="text-base lg:text-lg text-mindo-gray-900 leading-relaxed max-w-lg">
              Experience comprehensive mental health support with our 100%
              online platform. Connect with expert therapists, access live
              consultations, and find the care you need, whenever you need it.
            </p>

            {/* Watch Our Story Button */}
            <button
              onClick={handleWatchStory}
              className="flex items-center gap-3 group mt-8"
            >
              <div className="w-14 h-14 rounded-full bg-mindo-teal shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg
                  className="w-6 h-6 text-white ml-1"
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

          {/* Right Side - Much Larger Video Box */}
          <div className="lg:col-span-3 relative">
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{
                aspectRatio: "16/9",
                width: "100%",
                maxWidth: "1000px",
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
                  alt="Hero visual"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-mindo-teal" />
              )}
            </div>

            {/* Decorative elements behind video */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-mindo-light-blue/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-mindo-teal/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
