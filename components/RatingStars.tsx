"use client";

import { FaStar } from "react-icons/fa";

interface RatingStarsProps {
  rating: number;
  max?: number; // Optional max stars, defaults to 5
}

export const RatingStars = ({ rating, max = 5 }: RatingStarsProps) => {
  const safeRating = Math.max(0, Math.min(rating, max)); // Clamp rating

  return (
    <div className="flex items-center gap-1" aria-label={`Rating: ${safeRating} out of ${max}`}>
      {Array.from({ length: max }).map((_, i) => (
        <FaStar
          key={i}
          className={`text-sm ${i < safeRating ? "text-yellow-400" : "text-gray-300"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
};
