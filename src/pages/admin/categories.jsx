import { PencilLine, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SortDropdown } from "@/components/sort-dropdown";
import { useState, useEffect } from "react";
import Pagination from "@/components/pagination";
import { useTheme } from "@/hooks/use-theme";
import { ModalConfirmDelete } from "@/components/modal-confirm-delete";
import axios from "axios";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [selectedCategory, setSelectedCategory] = useState(null);
    const timeOptions = [
        { label: "A-Z", value: "A-Z" },
        { label: "Z-A", value: "Z-A" },
        { label: "Newest", value: "Newest" },
        { label: "Oldest", value: "Oldest" },
    ];
    const { theme } = useTheme();
    const [timeFilter, setTimeFilter] = useState("Newest");
    const navigate = useNavigate();

    useEffect(() => {
        fetchCategories(timeFilter); // Gọi fetchCategories với giá trị sắp xếp ban đầu
    }, [timeFilter]);

    const fetchCategories = (sort) => {
        let apiUrl = "http://localhost:8000/api/admin/categories";
        if (sort) {
            apiUrl += `?sort=${sort}`; // Thêm tham số sort vào URL
        }
        axios
            .get(apiUrl)
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.error("Error fetching categories:", error);
            });
    };

    const handleDeleteCategory = async (categoryId) => {
        try {
            await axios.delete(`http://localhost:8000/api/admin/categories/${categoryId}`);
            setCategories(categories.filter((category) => category.category_id !== categoryId));
            setSelectedCategory(null);
            alert("Category deleted successfully");
        } catch (error) {
            console.error("Error deleting category:", error);
            alert("Failed to delete category");
        }
    };

    const totalPages = Math.ceil(categories.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = categories.slice(startIndex, endIndex);

    // Hàm xử lý thay đổi sắp xếp
    const handleSortChange = (sort) => {
        setTimeFilter(sort);
    };

    return (
        <div className="mx-4 flex flex-col gap-y-4">
            <div className="mt-4 flex items-center justify-between">
                <h1 className="title">Categories</h1>
                <SortDropdown
                    options={timeOptions}
                    timeFilter={timeFilter}
                    setTimeFilter={handleSortChange} // Gọi handleSortChange khi thay đổi sắp xếp
                />
            </div>
            <div className="card">
                <div className="card-header">
                    <p className="card-title">List</p>
                </div>
                <div className="card-body p-0">
                    <div className="relative h-[665px] w-full flex-shrink-0 overflow-auto rounded-none [scrollbar-width:_thin]">
                        <table className="table">
                            <thead className="table-header">
                                <tr className="table-row">
                                    <th className="table-head">#</th>
                                    <th className="table-head">Category name</th>
                                    <th className="table-head">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="table-body">
                                {currentItems.map((category, index) => (
                                    <tr
                                        key={category.category_id}
                                        className="table-row"
                                    >
                                        <td className="table-cell">{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                                        <td className="table-cell">
                                            <div className="flex w-max gap-x-4">
                                                <div className="flex flex-col">
                                                    <p className="">{category.name}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="table-cell">
                                            <div className="flex items-center gap-x-4">
                                                <button
                                                    onClick={() => navigate(`edit/${category.category_id}`)}
                                                    className="flex h-9 w-16 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600 dark:bg-cyan-600 dark:text-cyan-50"
                                                >
                                                    <PencilLine />
                                                </button>
                                                <button
                                                    onClick={() => setSelectedCategory(category)}
                                                    className="flex h-9 w-16 items-center justify-center rounded-lg bg-red-100 text-red-600"
                                                >
                                                    <Trash2 />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {categories.length > itemsPerPage && (
                            <div className="mt-4 flex items-center justify-center">
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={setCurrentPage}
                                />
                            </div>
                        )}
                        {selectedCategory && (
                            <ModalConfirmDelete
                                product={selectedCategory}
                                onDelete={() => handleDeleteCategory(selectedCategory.category_id)}
                                onClose={() => setSelectedCategory(null)}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
