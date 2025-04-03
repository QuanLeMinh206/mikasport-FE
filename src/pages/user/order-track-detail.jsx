import Breadcrumb from "@/components/breadcrumb";
import { useState } from "react";
import ProductImage from "@/assets/product-img.png";
import checkCircle from "@/assets/check-circle.svg";
import ServiceFeatures2 from "@/components/service-features2";

const OrderTrack = () => {
    const orderStatus = [
        { label: "Order Placed", date: "18 Feb 2025", completed: true },
        { label: "Accepted + In Progress", date: "18 Feb 2025", completed: true },

        { label: "On the Way", date: "19, 20, 21 Feb 2025", completed: true },
        { label: "Delivered", date: "22 Feb 2025", completed: false },
    ];

    return (
        <div>
            <div className="flex h-[350px] flex-col items-center justify-center gap-[20px] bg-sub-cyan">
                <div className="title-page">Order Tracking</div>
                <Breadcrumb />
            </div>

            <div className="content mx-auto mb-[120px] mt-[66px]">
                <h2 className="text-2xl font-semibold">Order Status</h2>
                <p className="mt-[25px] text-gray-500">Order ID: #7</p>

                <div className="mt-6 rounded-lg border border-cyan-200 bg-white p-6">
                    <div className="flex items-center justify-between">
                        {orderStatus.map((step, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center"
                            >
                                <div
                                    className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white ${step.completed ? "bg-primary" : "bg-gray-300"}`}
                                >
                                    {step.completed ? "✔" : index + 1}
                                </div>
                                <span className="mt-2 font-medium text-gray-700">{step.label}</span>
                                <span className="text-gray-500">{step.date}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-6 rounded-lg border p-4">
                    <h3 className="mb-4 text-lg font-semibold">Order Details</h3>
                    <div className="flex items-center gap-4">
                        <img
                            src={ProductImage}
                            alt="Own The Run"
                            className="h-[110px] w-[90px] rounded border border-primary"
                        />
                        <div>
                            <p className="text-lg font-semibold">Own The Run</p>
                            <p className="text-gray-500">Size: L | Qty: 2</p>
                        </div>
                    </div>
                </div>
            </div>
            <ServiceFeatures2 />
        </div>
    );
};

export default OrderTrack;
