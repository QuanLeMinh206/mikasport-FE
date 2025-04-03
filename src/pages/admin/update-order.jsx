// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const UpdateOrder = () => {
//     const { orderId } = useParams();
//     const [order, setOrder] = useState(null);
//     const [status, setStatus] = useState("");

//     useEffect(() => {
//         // Giả lập API lấy dữ liệu đơn hàng
//         fetch(`/api/orders/${orderId}`)
//             .then((res) => res.json())
//             .then((data) => {
//                 setOrder(data);
//                 setStatus(data.status);
//             });
//     }, [orderId]);

//     const handleUpdateStatus = () => {
//         // Gửi API cập nhật trạng thái đơn hàng
//         fetch(`/api/orders/${orderId}`, {
//             method: "PUT",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ status }),
//         })
//             .then((res) => res.json())
//             .then((data) => setOrder(data));
//     };

//     if (!order) return <p>Loading...</p>;

//     return (
//         <div className="mx-auto max-w-3xl rounded-md bg-white p-4 shadow-md">
//             <h2 className="text-xl font-semibold">Order Details</h2>
//             <div className="mt-4 space-y-2">
//                 <p>
//                     <strong>Number:</strong> {order.id}
//                 </p>
//                 <p>
//                     <strong>User Name:</strong> {order.userName}
//                 </p>
//                 <p>
//                     <strong>Phone:</strong> {order.phone}
//                 </p>
//                 <p>
//                     <strong>Order Date:</strong> {order.orderDate}
//                 </p>
//                 <p>
//                     <strong>Payment Method:</strong> {order.paymentMethod}
//                 </p>
//                 <p>
//                     <strong>Shipping Method:</strong> {order.shippingMethod}
//                 </p>
//                 <p>
//                     <strong>Receiver Address:</strong> {order.receiverAddress}
//                 </p>
//                 <p>
//                     <strong>Status:</strong>
//                     <select
//                         value={status}
//                         onChange={(e) => setStatus(e.target.value)}
//                     >
//                         <option value="Pending">Pending</option>
//                         <option value="Shipped">Shipped</option>
//                         <option value="Delivered">Delivered</option>
//                         <option value="Cancelled">Cancelled</option>
//                     </select>
//                 </p>
//                 <h3 className="mt-4 text-lg font-semibold">Products</h3>
//                 {order.products.map((product, index) => (
//                     <p key={index}>
//                         {product.name} - {product.size} - {product.quantity} x ${product.price} = ${product.quantity * product.price}
//                     </p>
//                 ))}
//                 <p>
//                     <strong>Voucher Value:</strong> ${order.voucher}
//                 </p>
//                 <p>
//                     <strong>Total Price:</strong> ${order.totalPrice}
//                 </p>
//             </div>
//             <button
//                 onClick={handleUpdateStatus}
//                 className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-500"
//             >
//                 Update Status
//             </button>
//         </div>
//     );
// };

// export default UpdateOrder;
//
import { SortDropdown } from "@/components/sort-dropdown";
import { useState } from "react";
import { CheckCircle, Truck, Archive, AlertCircle } from "lucide-react";
import ProductImage from "@/assets/product-img.png";

const UpdateOrder = () => {
    const order = {
        id: "12345",
        userName: "John Doe",
        phone: "123-456-7890",
        orderDate: "2024-03-20",
        paymentMethod: "Credit Card",
        shippingMethod: "Express",
        receiverAddress: "123 Main Street, City, Country",
        status: "Pending",
        products: [
            { img: ProductImage, name: "Football Jersey", size: "M", quantity: 2, price: 30 },
            { img: ProductImage, name: "Running Shoes", size: "42", quantity: 1, price: 80 },
        ],
        voucher: 10,
        totalPrice: 130,
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case "Pending":
                return <AlertCircle className="h-5 w-5 text-yellow-500" />;
            case "Shipped":
                return <Truck className="h-5 w-5 text-blue-500" />;
            case "Delivered":
                return <CheckCircle className="h-5 w-5 text-green-500" />;
            case "Cancelled":
                return <Archive className="h-5 w-5 text-red-500" />;
            default:
                return null;
        }
    };

    const [status, setStatus] = useState(order.status);
    const handleUpdateStatus = () => {
        console.log("Updated Status:", status);
    };

    const statusOptions = [
        { label: "Pending", value: "Pending" },
        { label: "Shipped", value: "Shipped" },
        { label: "Delivered", value: "Delivered" },
        { label: "Cancelled", value: "Cancelled" },
    ];

    return (
        <div className="mx-auto mb-4 mt-4 max-w-3xl rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
            <h2 className="mb-6 border-b pb-3 text-2xl font-semibold text-gray-900">Order Details</h2>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Left Column */}
                <div className="space-y-3">
                    <p className="text-gray-700">
                        <strong className="font-medium text-gray-900">Number:</strong> {order.id}
                    </p>
                    <p className="text-gray-700">
                        <strong className="font-medium text-gray-900">User Name:</strong> {order.userName}
                    </p>
                    <p className="text-gray-700">
                        <strong className="font-medium text-gray-900">Phone:</strong> {order.phone}
                    </p>
                    <p className="text-gray-700">
                        <strong className="font-medium text-gray-900">Order Date:</strong> {order.orderDate}
                    </p>
                </div>

                {/* Right Column */}
                <div className="space-y-3">
                    <p className="text-gray-700">
                        <strong className="font-medium text-gray-900">Payment Method:</strong> {order.paymentMethod}
                    </p>
                    <p className="text-gray-700">
                        <strong className="font-medium text-gray-900">Shipping Method:</strong> {order.shippingMethod}
                    </p>
                    <p className="text-gray-700">
                        <strong className="font-medium text-gray-900">Receiver Address:</strong> {order.receiverAddress}
                    </p>
                </div>
            </div>

            {/* Status Section */}
            <div className="mt-6 flex items-center rounded-lg bg-gray-100 p-4">
                <strong className="mr-2 font-medium text-gray-900">Status:</strong>

                <SortDropdown
                    options={statusOptions}
                    timeFilter={status}
                    setTimeFilter={setStatus}
                />
                <span className="ml-3">{getStatusIcon(status)}</span>
            </div>

            {/* Products Section */}
            <h3 className="mt-6 border-b pb-2 text-lg font-semibold text-gray-900">Products</h3>
            <div className="mt-3 space-y-2">
                {order.products.map((product, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between rounded-md bg-gray-50 p-3"
                    >
                        <p className="flex items-center gap-x-4 text-gray-700">
                            <img
                                src={product.img}
                                alt={product.img}
                                className="h-[70px] w-[56px] rounded-lg object-cover"
                            />{" "}
                            {product.name} - Size {product.size}
                        </p>
                        <p className="text-gray-700">
                            {product.quantity} x ${product.price} = <strong className="text-gray-900">${product.quantity * product.price}</strong>
                        </p>
                    </div>
                ))}
            </div>

            {/* Price Section */}
            <div className="mt-6 flex flex-col items-end rounded-lg bg-gray-100 p-4">
                <p className="text-gray-700">
                    <strong className="font-medium">Voucher Value:</strong> ${order.voucher}
                </p>
                <p className="text-xl font-semibold text-gray-900">
                    <strong className="font-medium">Total Price:</strong> ${order.totalPrice}
                </p>
            </div>

            {/* Update Button */}
            <button
                onClick={handleUpdateStatus}
                className="mt-6 w-full rounded-md bg-cyan-600 px-6 py-3 font-semibold text-white transition hover:bg-cyan-500"
            >
                Update Status
            </button>
        </div>
    );
};

export default UpdateOrder;
