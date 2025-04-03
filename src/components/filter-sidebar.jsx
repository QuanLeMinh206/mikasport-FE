import { useState } from "react";
import { Check } from "lucide-react";
import PriceRange from "@/components/price-range";
const FilterSidebar = () => {
    const [selectedSport, setSelectedSport] = useState("Running");
    const [selectedSize, setSelectedSize] = useState("L");

    return (
        <div className="w-[290px] rounded-lg bg-white">
            {/* Sport Filter */}
            <div className="sort-line"></div>
            <div className="mb-4">
                <h3 className="sort-title">Sport</h3>
                {["Basketball", "Football", "Tennis", "Running", "Workout"].map((sport) => (
                    <label
                        key={sport}
                        className="mb-2 flex items-center gap-2"
                    >
                        <input
                            type="checkbox"
                            checked={selectedSport === sport}
                            onChange={() => setSelectedSport(sport)}
                            className="sort-check accent-primary"
                        />
                        <span className="sort-item">{sport}</span>
                    </label>
                ))}
            </div>
            <div className="sort-line"></div>
            {/* Price Filter */}
            <div className="mb-4">
                {/* <h3 className="sort-title text-gray-700">Price</h3>
                <p className="text-sm text-gray-600">100k - 500k</p>
                <input
                    type="range"
                    className="w-full cursor-pointer"
                /> */}
                <PriceRange />
            </div>
            <div className="sort-line"></div>
            {/* Color Filter */}
            <div className="mb-4">
                <h3 className="sort-title">Color</h3>
                {["Red", "Blue", "Green", "Black", "White", "Other"].map((color) => (
                    <label
                        key={color}
                        className="mb-2 flex items-center gap-2"
                    >
                        <input
                            type="checkbox"
                            className="peer hidden"
                        />
                        <div className="sort-check">
                            {" "}
                            <Check />{" "}
                        </div>
                        <span className="sort-item">{color}</span>
                    </label>
                ))}
            </div>
            <div className="sort-line"></div>
            {/* Size Filter */}
            <div>
                <h3 className="sort-title">Size</h3>
                {["M", "L", "XL", "XXL"].map((size) => (
                    <label
                        key={size}
                        className="mb-2 flex items-center gap-2"
                    >
                        <input
                            type="checkbox"
                            checked={selectedSize === size}
                            onChange={() => setSelectedSize(size)}
                            className="sort-check accent-primary"
                        />
                        <span className="sort-item">{size}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default FilterSidebar;
