import { useState } from "react";

const SortCheckbox = ({ color }) => {
    const [checked, setChecked] = useState(false);

    return (
        <label
            key={color}
            className="flex cursor-pointer items-center space-x-2"
        >
            <input
                type="checkbox"
                className="peer hidden"
                checked={checked}
                onChange={() => setChecked(!checked)}
            />
            <div
                className={`sort-check flex h-5 w-5 items-center justify-center rounded border transition-all ${checked ? "border-blue-500 bg-blue-500" : "border-gray-400"}`}
            >
                {checked && (
                    <svg
                        className="h-4 w-4 text-white"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentColor"
                            d="M9 16.2l-4.2-4.2L3 13l6 6 12-12-1.8-1.8z"
                        />
                    </svg>
                )}
            </div>
            <span className="sort-item">{color}</span>
        </label>
    );
};

export default SortCheckbox;
