import { useState } from "react";
import type { VideoBackgroundProps } from "../types";

const VideoBackground: React.FC<VideoBackgroundProps> = ({
  src,
  fallbackImage,
  overlay = true,
  overlayOpacity = 0.3,
  children,
}) => {
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Video or Fallback Image */}
      {!videoError ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onError={handleVideoError}
          aria-label="Hero background video"
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : fallbackImage ? (
        <img
          src={fallbackImage}
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 w-full h-full bg-mindo-blue" />
      )}

      {/* Overlay */}
      {overlay && (
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

export default VideoBackground;
