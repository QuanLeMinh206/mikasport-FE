import { useState } from "react";

const PriceRange = () => {
    const [price, setPrice] = useState(100000); // Giá mặc định 100,000

    // Hàm format giá thành "100k", "1M"
    const formatPrice = (value) => {
        if (value >= 1000000) return "1M";
        return `${Math.floor(value / 1000)}k`;
    };

    return (
        <div className="mb-4">
            <h3 className="sort-title text-gray-700">Price</h3>
            <p className="text-[18px] text-sm font-semibold text-gray-600">{formatPrice(price)}</p>
            <input
                type="range"
                min="100000"
                max="1000000"
                step="10000"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="range-primary w-full cursor-pointer accent-primary"
                style={{
                    "--tw-range-track-color": "white", // Thay đổi màu đen thành đỏ
                }}
            />
        </div>
    );
};

export default PriceRange;
