import React from "react";
import { useNavigate } from "react-router-dom";
import productImage from "@/assets/product-img.png";

const Orders = ({ order }) => {
    const navigate = useNavigate();

    if (!order) {
        return <p className="text-center text-gray-500">No order found.</p>;
    }

    return (
        <div className="mb-[120px]">
            {/* Order Info Header */}
            <div className="flex h-[104px] items-center justify-between rounded-[2px] bg-secondary px-[30px] text-white">
                <div className="flex flex-col items-center gap-4">
                    <span className="text-[18px] text-[#A4A4A4]">Order ID</span>
                    <span className="text-[18px] text-white">#{order.id}</span>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <span className="text-[18px] text-[#A4A4A4]">Payment Method</span>
                    <span className="text-[18px] text-white">{order.paymentMethod}</span>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <span className="text-[18px] text-[#A4A4A4]">Total Payment</span>
                    <span className="text-[18px] text-white">{order.total}đ</span>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <span className="text-[18px] text-[#A4A4A4]">Order Created Date</span>
                    <span className="text-[18px] text-white">{order.date}</span>
                </div>
            </div>

            {/* Order Items */}
            <div className="mt-6 rounded-[8px] border p-4">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-200 text-left">
                            <th className="p-2 text-[18px]">Product</th>
                            <th className="p-2 text-right text-[18px]">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order.items?.map((item, index) => (
                            <tr
                                key={index}
                                className="border-b"
                            >
                                <td className="flex items-center gap-4 px-2 py-4">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-[110px] w-[90px] rounded border border-primary"
                                    />
                                    <div>
                                        <p className="text-[18px] font-semibold">{item.name}</p>
                                        <p className="text-gray-500">
                                            Size: {item.size} | Qty: {item.qty}
                                        </p>
                                    </div>
                                </td>
                                <td className="p-2 text-right">{item.price}đ</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Order Summary */}
                <div className="mt-[28px] flex justify-between">
                    <span>Shipping</span>
                    <span>{order.shipping}đ</span>
                </div>
                <div className="mt-[28px] flex justify-between">
                    <span>Coupon discount</span>
                    <span className="text-red-500">-{order.discount}đ</span>
                </div>
                <div className="mt-4 flex justify-between border-t pt-4 text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-primary">{order.total}đ</span>
                </div>

                {/* Order Actions */}
                <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <span className="rounded-[6px] border border-[#FC9D04] bg-[#FFEFD4] p-2 text-sm text-[#FC9D04]">{order.status}</span>
                        <span className="text-[14px] text-gray-600">{order.statusMessage}</span>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={() => navigate("track")}
                            className="rounded bg-primary px-4 py-2 text-white"
                        >
                            Track order
                        </button>
                        <button className="text-red-500">Cancel order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;
