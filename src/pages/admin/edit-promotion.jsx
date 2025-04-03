import { useState } from "react";
import { SortDropdown } from "@/components/sort-dropdown";

const EditPromotion = () => {
    const categoryOptions = [
        { label: "All", value: "All" },
        { label: "Football", value: "Football" },
        { label: "Running", value: "Running" },
        { label: "Basketball", value: "Basketball" },
        { label: "Tennis", value: "Tennis" },
        { label: "Workout", value: "Workout" },
    ];

    const [selectedCategory, setSelectedCategory] = useState("All");

    return (
        <form className="mx-4 mt-4">
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12 dark:text-cyan-50">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-cyan-50">Edit Promotion</h2>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        {/* Title */}
                        <div className="sm:col-span-4">
                            <label
                                htmlFor="title"
                                className="block text-sm font-medium text-gray-900 dark:text-cyan-50"
                            >
                                Promotion Title
                            </label>
                            <div className="mt-2">
                                <input
                                    id="title"
                                    name="title"
                                    type="text"
                                    className="block h-[45px] w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-cyan-600 dark:bg-slate-900 dark:text-cyan-50 dark:outline-cyan-600 sm:text-sm"
                                />
                            </div>
                        </div>

                        {/* Description */}
                        <div className="col-span-full">
                            <label
                                htmlFor="description"
                                className="block text-sm font-medium text-gray-900 dark:text-cyan-50"
                            >
                                Description
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="description"
                                    name="description"
                                    rows={4}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-cyan-600 dark:bg-slate-900 dark:text-cyan-50 dark:outline-cyan-600 sm:text-sm"
                                />
                            </div>
                        </div>

                        {/* Discount Value */}
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="value"
                                className="block text-sm font-medium text-gray-900 dark:text-cyan-50"
                            >
                                Discount Value (%)
                            </label>
                            <div className="mt-2">
                                <input
                                    id="value"
                                    name="value"
                                    type="number"
                                    min="5"
                                    max="20"
                                    className="block h-[45px] w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-cyan-600 dark:bg-slate-900 dark:text-cyan-50 dark:outline-cyan-600 sm:text-sm"
                                />
                            </div>
                        </div>

                        {/* Start Date */}
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="start-date"
                                className="block text-sm font-medium text-gray-900 dark:text-cyan-50"
                            >
                                Start Date
                            </label>
                            <div className="mt-2">
                                <input
                                    id="start-date"
                                    name="start-date"
                                    type="date"
                                    className="block h-[45px] w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-cyan-600 dark:bg-slate-900 dark:text-cyan-50 dark:outline-cyan-600 sm:text-sm"
                                />
                            </div>
                        </div>

                        {/* End Date */}
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="end-date"
                                className="block text-sm font-medium text-gray-900 dark:text-cyan-50"
                            >
                                End Date
                            </label>
                            <div className="mt-2">
                                <input
                                    id="end-date"
                                    name="end-date"
                                    type="date"
                                    className="block h-[45px] w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-cyan-600 dark:bg-slate-900 dark:text-cyan-50 dark:outline-cyan-600 sm:text-sm"
                                />
                            </div>
                        </div>

                        {/* Category */}
                        <div className="sm:col-span-3">
                            <label
                                htmlFor="category"
                                className="block text-sm font-medium text-gray-900 dark:text-cyan-50"
                            >
                                Apply Discount To
                            </label>
                            <SortDropdown
                                options={categoryOptions}
                                timeFilter={selectedCategory}
                                setTimeFilter={setSelectedCategory}
                                className="w-[100%]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                    type="button"
                    className="text-sm font-semibold text-gray-900 dark:text-cyan-50"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="shadow-xs rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white hover:bg-cyan-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
        </form>
    );
};
export default EditPromotion;
