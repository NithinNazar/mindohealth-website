import { useState, useEffect, useRef } from "react";
import type { HeroSectionProps } from "../types";

const HeroSectionAlt: React.FC<HeroSectionProps> = ({
  videoSrc,
  fallbackImage,
  headline,
  subheadline,
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
    <section id="hero-alt" className="relative w-full h-screen overflow-hidden">
      {/* Full Width Video Background */}
      <div className="absolute inset-0 w-full h-full">
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

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Overlapping Text Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-section-x w-full">
          <div className="max-w-2xl space-y-8">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              {headline}
            </h1>

            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
              {subheadline}
            </p>

            {/* Watch Our Story Button */}
            <button
              onClick={handleWatchStory}
              className="flex items-center gap-3 group"
            >
              <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg
                  className="w-7 h-7 text-mindo-blue ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-lg font-medium text-white uppercase tracking-wide">
                Watch Our Story
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSectionAlt;
