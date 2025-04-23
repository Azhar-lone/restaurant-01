import { Star, StarHalf, StarOff } from "lucide-react";
const RatingStars = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const totalStars = 5;

  return (
    <div className="flex gap-1 text-jellyBeanBlue">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} fill="currentColor" stroke="none" />
      ))}
      {hasHalf && <StarHalf fill="currentColor" stroke="none" />}
      {[...Array(totalStars - fullStars - (hasHalf ? 1 : 0))].map((_, i) => (
        <StarOff key={`off-${i}`} />
      ))}
    </div>
  );
};
export default RatingStars;
