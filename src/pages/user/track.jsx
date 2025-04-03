import Breadcrumb from "@/components/breadcrumb";
import ServiceFeatures2 from "@/components/service-features2";
import { useState } from "react";

const TrackOrder = () => {
    const [orderId, setOrderId] = useState("");
    const [orderEmail, setOrderEmail] = useState("");

    const handleTrackOrder = () => {
        alert(`Tracking order with ID: ${orderId} and Email: ${orderEmail}`);
    };

    return (
        <div>
            <div className="flex h-[350px] flex-col items-center justify-center gap-[20px] bg-sub-cyan">
                <div className="title-page">Track Your Order</div>
                <Breadcrumb />
            </div>
            <div className="content mb-[120px] mt-[65px] flex justify-center">
                <div className="rounded-[8px] border p-[25px]">
                    <p className="mb-[40px] text-sm text-gray-600">
                        To track your order please enter your Order ID in the box below and press the "Track Order" button. This was given to you on
                        your receipt and in the confirmation email you should have received.
                    </p>
                    <div className="mb-[60px]">
                        <label className="form-title mb-2 block">Order ID *</label>
                        <input
                            type="text"
                            className="h-[63px] w-full rounded-[8px] border p-2"
                            placeholder="Enter your order ID"
                            value={orderId}
                            onChange={(e) => setOrderId(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="form-title mb-2 block">Order Email *</label>
                        <input
                            type="email"
                            className="h-[63px] w-full rounded-[8px] border p-2"
                            placeholder="Enter email address"
                            value={orderEmail}
                            onChange={(e) => setOrderEmail(e.target.value)}
                        />
                    </div>
                    <button
                        onClick={handleTrackOrder}
                        className="btn mt-[40px] h-[55px] w-[165px] rounded-[8px] bg-primary text-white"
                    >
                        Track Order
                    </button>
                </div>
            </div>
            <ServiceFeatures2 />
        </div>
    );
};

export default TrackOrder;
