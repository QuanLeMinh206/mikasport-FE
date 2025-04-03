import { CreditCard, DollarSign, Package, TrendingUp, Star, PencilLine, Trash2, BlocksIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { monthlyData, categoryData, recentSalesData, usersData, categories } from "@/constants/index";
import { SortDropdown } from "@/components/sort-dropdown";
import { useState, useEffect } from "react";
import Pagination from "@/components/pagination";

import { useTheme } from "@/hooks/use-theme";
import { Footer } from "@/layouts/footer";
import { ModalConfirmDelete } from "@/components/modal-confirm-delete";

const Users = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Hiển thị 10 sản phẩm trên mỗi trang
    const totalPages = Math.ceil(usersData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = usersData.slice(startIndex, endIndex);
    const [selectedUser, setSelectedUser] = useState();

    const timeOptions = [
        { label: "Most-Fewest", value: "Most-Fewest" },
        { label: "Fewest-Most", value: "Fewest-Most" },
        { label: "Newest", value: "Newest" },
        { label: "Oldest", value: "Oldest" },
    ];

    const { theme } = useTheme();
    const [timeFilter, setTimeFilter] = useState("Newest");

    const navigate = useNavigate();

    return (
        <div className="mx-4 flex flex-col gap-y-4">
            <div className="mt-4 flex items-center justify-between">
                <h1 className="title">Users</h1>
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
                                    <th className="table-head">User</th>

                                    <th className="table-head">Email</th>
                                    <th className="table-head">Phone</th>
                                    <th className="table-head">Total Orders</th>

                                    <th className="table-head">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="table-body">
                                {currentItems.map((user) => (
                                    <tr
                                        key={user.id}
                                        className="table-row"
                                    >
                                        <td className="table-cell">{user.id}</td>
                                        <td className="table-cell">
                                            <div className="flex w-max items-center gap-x-4">
                                                <img
                                                    src={user.img}
                                                    alt={user.name}
                                                    className="h-[50px] w-[50px] rounded-full border-4 border-cyan-200 object-cover"
                                                />
                                                <div className="flex flex-col">
                                                    <p className="">{user.name}</p>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="table-cell">{user.email}</td>
                                        <td className="table-cell">{user.phone}</td>
                                        <td className="table-cell">{user.totalOrders}</td>

                                        <td className="table-cell">
                                            <div className="flex items-center gap-x-4">
                                                <button
                                                    onClick={() => setSelectedUser(user)}
                                                    className="flex h-9 w-16 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600 dark:bg-cyan-600 dark:text-cyan-50"
                                                >
                                                    <BlocksIcon />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {/* pagination */}
                        {usersData.length > itemsPerPage && (
                            <div className="mt-4 flex items-center justify-center">
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={setCurrentPage}
                                />
                            </div>
                        )}

                        {/* modal xoa san pham */}
                        {selectedUser && (
                            <ModalConfirmDelete
                                product={selectedUser}
                                onDelete={() => {
                                    alert(`Deleted: ${selectedUser.name}`);
                                    setSelectedUser(null);
                                }}
                                onClose={() => setSelectedUser(null)}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Users;
