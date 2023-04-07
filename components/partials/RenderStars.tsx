import React, { useEffect, useState } from "react";
import Star from "../icons/Star";
import HalfStar from "../icons/HalfStar";

const RenderStars: React.FC<{ noOfStars: number; starClasses?: string }> = ({
  noOfStars,
  starClasses,
}) => {
  const [stars, setStars] = useState<number[]>([]);

  useEffect(() => {
    setStars([]);
    for (let i = 0; i < 5; i++) {
      if (i < Math.round(noOfStars)) {
        // true

        setStars((prev) =>
          prev.length > 0 ? [...prev, noOfStars - i] : [noOfStars - i]
        );
      } else {
        // false

        setStars((prev) => (prev.length > 0 ? [...prev, 0] : [0]));
      }
    }
  }, [noOfStars]);

  return (
    <div className="flex items-center gap-x-1">
      {stars.map((item, i) =>
        item > 0 && item < 1 ? (
          <HalfStar key={i} className={starClasses} />
        ) : (
          <Star
            key={i}
            color={item ? "gold" : "white"}
            className={starClasses}
          />
        )
      )}
    </div>
  );
};

export default RenderStars;
