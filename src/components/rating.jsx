import { Star } from "lucide-react";

const ratings = [
    { star: 5, percentage: 80 },
    { star: 4, percentage: 50 },
    { star: 3, percentage: 25 },
    { star: 2, percentage: 15 },
    { star: 1, percentage: 10 },
];

export default function RatingSummary() {
    return (
        <div className="mt-[48px] flex items-center justify-center gap-[78px]">
            {/* Left - Average Rating */}
            <div className="text-center">
                <p className="mb-[10px] text-3xl font-bold">4.7</p>
                <div className="flex justify-center gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            size={20}
                            fill="currentColor"
                        />
                    ))}
                </div>
                <p className="text-md mt-[20px] text-gray-500">( 36 comments )</p>
            </div>
            <div className="h-[211px] w-[0.8px] bg-gray-400"></div>
            {/* Right - Rating Breakdown */}
            <div className="w-[700px]">
                {ratings.map((item) => (
                    <div
                        key={item.star}
                        className="mb-[30px] flex items-center gap-2"
                    >
                        <span className="inline-flex h-full self-center text-[16px] leading-none text-gray-600">{item.star}&nbsp;star</span>
                        <div className="h-2 w-full items-center overflow-hidden rounded-lg bg-gray-300 drop-shadow-md">
                            <div
                                className="h-full bg-yellow-400"
                                style={{ width: `${item.percentage}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
