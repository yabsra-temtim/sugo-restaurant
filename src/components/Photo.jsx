import { useState } from "react";
import { photoUrl } from "../data/images.js";

// Shows a photo, or a colored placeholder with an emoji if it is missing or fails to load.
export default function Photo({ id, alt, w = 900, emoji = "🍽️", className = "" }) {
  const [bad, setBad] = useState(false);
  if (!id || bad) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`grid place-items-center bg-gradient-to-br from-brand/30 to-surface text-5xl ${className}`}
      >
        {emoji}
      </div>
    );
  }
  return (
    <img
      src={photoUrl(id, w)}
      alt={alt}
      loading="lazy"
      onError={() => setBad(true)}
      className={`object-cover ${className}`}
    />
  );
}
