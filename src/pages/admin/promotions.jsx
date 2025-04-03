import { CreditCard, DollarSign, Package, TrendingUp, Star, Users, PencilLine, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { monthlyData, categoryData, recentSalesData, promotionsData, categories } from "@/constants/index";
import { SortDropdown } from "@/components/sort-dropdown";
import { useState, useEffect } from "react";
import Pagination from "@/components/pagination";

import { useTheme } from "@/hooks/use-theme";
import { Footer } from "@/layouts/footer";
import { ModalConfirmDelete } from "@/components/modal-confirm-delete";

const Promotions = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Hiển thị 10 sản phẩm trên mỗi trang
    const totalPages = Math.ceil(promotionsData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = promotionsData.slice(startIndex, endIndex);
    const [selectedPromotion, setSelectedPromotion] = useState();

    const timeOptions = [
        { label: "A-Z", value: "A-Z" },
        { label: "Z-A", value: "Z-A" },
        { label: "Newest", value: "Newest" },
        { label: "Oldest", value: "Oldest" },
    ];

    const { theme } = useTheme();
    const [timeFilter, setTimeFilter] = useState("Newest");

    const navigate = useNavigate();

    return (
        <div className="mx-4 flex flex-col gap-y-4">
            <div className="mt-4 flex items-center justify-between">
                <h1 className="title">Products</h1>
                <SortDropdown
                    options={timeOptions}
                    timeFilter={timeFilter}
                    setTimeFilter={setTimeFilter}
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
                                    <th className="table-head">Promotion</th>
                                    <th className="table-head">Value</th>
                                    <th className="table-head">Start date</th>
                                    <th className="table-head">End date</th>

                                    <th className="table-head">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="table-body">
                                {currentItems.map((promotion) => (
                                    <tr
                                        key={promotion.id}
                                        className="table-row"
                                    >
                                        <td className="table-cell">{promotion.id}</td>
                                        <td className="table-cell">
                                            <div className="flex w-max gap-x-4">
                                                <div className="flex flex-col">
                                                    <p className="">{promotion.title}</p>
                                                    <p className="font-normal text-slate-600 dark:text-slate-400">{promotion.desc}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="table-cell"> {promotion.discountValue}%</td>

                                        <td className="table-cell">{promotion.startDate}</td>
                                        <td className="table-cell">{promotion.endDate}</td>

                                        <td className="table-cell">
                                            <div className="flex items-center gap-x-4">
                                                <button
                                                    onClick={() => navigate(`edit/${promotion.id}`)}
                                                    className="flex h-9 w-16 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600 dark:bg-cyan-600 dark:text-cyan-50"
                                                >
                                                    <PencilLine />
                                                </button>
                                                <button
                                                    onClick={() => setSelectedPromotion(promotion)}
                                                    className="flex h-9 w-16 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600 dark:bg-cyan-600 dark:text-cyan-50"
                                                >
                                                    <Trash2 />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {/* pagination */}
                        {promotionsData.length > itemsPerPage && (
                            <div className="mt-4 flex items-center justify-center">
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={setCurrentPage}
                                />
                            </div>
                        )}

                        {/* modal xoa san pham */}
                        {selectedPromotion && (
                            <ModalConfirmDelete
                                product={selectedPromotion}
                                onDelete={() => {
                                    alert(`Deleted: ${selectedPromotion.name}`);
                                    setSelectedPromotion(null);
                                }}
                                onClose={() => setSelectedPromotion(null)}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Promotions;
