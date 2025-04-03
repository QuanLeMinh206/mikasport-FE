import { PencilLine, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Pagination from "@/components/pagination";
import { useTheme } from "@/hooks/use-theme";
import { ModalConfirmDelete } from "@/components/modal-confirm-delete";
import { SortDropdown } from "@/components/sort-dropdown";
import axios from "axios";

const OrderPage = () => {
    const [orders, setOrders] = useState([]); // Khởi tạo orders là một mảng rỗng
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [selectedOrder, setSelectedOrder] = useState(null);
    const { theme } = useTheme();
    const navigate = useNavigate();
    const timeOptions = [
        { label: "Newest", value: "Newest" },
        { label: "Oldest", value: "Oldest" },
        { label: "Pending", value: "pending" },
        { label: "Shipped", value: "shipped" },
        { label: "Delivered", value: "delivered" },
        { label: "Cancelled", value: "cancelled" },
        { label: "Today", value: "today" },
    ];
    const [timeFilter, setTimeFilter] = useState("Newest");

    useEffect(() => {
        fetchOrders(timeFilter);
    }, [timeFilter]);

    const fetchOrders = (sort) => {
        let apiUrl = "http://localhost:8000/api/admin/orders";
        if (sort) {
            apiUrl += `?sort=${sort}`;
        }
        axios
            .get(apiUrl)
            .then((response) => {
                if (Array.isArray(response.data.orders)) {
                    // Check if orders is array.
                    setOrders(response.data.orders);
                } else {
                    console.error("API did not return an array of orders");
                    setOrders([]); // set empty array to avoid error.
                }
            })
            .catch((error) => {
                console.error("Error fetching orders:", error);
                setOrders([]); // set empty array to avoid error.
            });
    };

    const totalPages = Math.ceil(orders.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = orders.slice(startIndex, endIndex);

    const handleSortChange = (sort) => {
        setTimeFilter(sort);
    };

    return (
        <div className="mx-4 flex flex-col gap-y-4">
            <div className="mt-4 flex items-center justify-between">
                <h1 className="title">Orders</h1>
            </div>
            <div className="card">
                <div className="card-header">
                    <p className="card-title">Order List</p>
                    <div className="ml-auto">
                        <SortDropdown
                            options={timeOptions}
                            timeFilter={timeFilter}
                            setTimeFilter={handleSortChange}
                        />
                    </div>
                </div>
                <div className="card-body p-0">
                    <div className="relative h-[665px] w-full overflow-auto">
                        <table className="table">
                            <thead className="table-header">
                                <tr className="table-row">
                                    <th className="table-head">#</th>
                                    <th className="table-head">User Name</th>
                                    <th className="table-head">Total Price</th>
                                    <th className="table-head">Order Date</th>
                                    <th className="table-head">Status</th>
                                    <th className="table-head">Payment Method</th>
                                    <th className="table-head">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="table-body">
                                {currentItems.map((order) => (
                                    <tr
                                        key={order.order_id}
                                        className="table-row"
                                    >
                                        <td className="table-cell">{order.order_id}</td>
                                        <td className="table-cell">{order.receiver_name}</td>
                                        <td className="table-cell">
                                            {order.total_price !== undefined ? order.total_price.toLocaleString("vi-VN") : "N/A"} ₫
                                        </td>
                                        <td className="table-cell">{order.order_date}</td>
                                        <td
                                            className={`mt-5 inline-block rounded-full px-3 py-1 text-sm font-semibold italic ${order.status === "pending" ? "bg-yellow-100 text-yellow-600" : ""} ${order.status === "shipped" ? "bg-blue-100 text-blue-600" : ""} ${order.status === "delivered" ? "bg-green-100 text-green-600" : ""} ${order.status === "cancelled" ? "bg-red-100 text-red-600" : ""} `}
                                        >
                                            {order.status}
                                        </td>
                                        <td className="table-cell">{order.payment_method_id}</td>
                                        <td className="table-cell">
                                            <div className="flex items-center gap-x-4">
                                                <button
                                                    onClick={() => navigate(`update/${order.order_id}`)}
                                                    className="flex h-9 w-16 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600 dark:bg-cyan-600 dark:text-cyan-50"
                                                >
                                                    <PencilLine />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {orders.length > itemsPerPage && (
                            <div className="mt-4 flex items-center justify-center">
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={setCurrentPage}
                                />
                            </div>
                        )}
                        {selectedOrder && (
                            <ModalConfirmDelete
                                product={selectedOrder}
                                onDelete={() => {
                                    alert(`Deleted: ${selectedOrder.name}`);
                                    setSelectedProduct(null);
                                }}
                                onClose={() => setSelectedOrder(null)}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderPage;
