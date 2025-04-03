import { useState } from "react";
import { Star } from "lucide-react";

const StarRating = () => {
    const [rating, setRating] = useState(0);

    return (
        <div className="flex flex-col gap-[15px]">
            <span className="text-[18px] font-medium">Your Rating *</span>
            <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        className={`cursor-pointer text-2xl ${star <= rating ? "text-yellow-500" : "text-gray-300"}`}
                        onClick={() => setRating(star)}
                    >
                        <Star />
                    </span>
                ))}
                <input
                    type="hidden"
                    name="rating"
                    value={rating}
                />
            </div>
        </div>
    );
};

export default StarRating;
