import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const NewCategory = () => {
    const [categoryName, setCategoryName] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/api/admin/categories", {
                name: categoryName,
            });
            console.log("Category created:", response.data);
            alert("Category created successfully!");
            navigate("/admin/categories"); // Điều hướng về trang danh sách categories sau khi tạo thành công
        } catch (error) {
            console.error("Error creating category:", error);
            alert("Failed to create category.");
        }
    };

    return (
        <form
            className="mx-4 mt-4"
            onSubmit={handleSubmit}
        >
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12 dark:text-cyan-50">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-cyan-50">Category Information</h2>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label
                                htmlFor="category-name"
                                className="block text-sm font-medium text-gray-900 dark:text-cyan-50"
                            >
                                Category Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="category-name"
                                    name="category-name"
                                    type="text"
                                    value={categoryName}
                                    onChange={(e) => setCategoryName(e.target.value)}
                                    className="block h-[45px] w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-cyan-600 dark:bg-slate-900 dark:text-cyan-50 dark:outline-cyan-600 sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                    type="button"
                    className="text-sm/6 font-semibold text-gray-900 dark:text-cyan-50"
                    onClick={() => navigate("/categories")}
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="shadow-xs rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white hover:bg-cyan-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Add new
                </button>
            </div>
        </form>
    );
};
