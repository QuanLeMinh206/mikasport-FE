import { useState } from "react";

import Breadcrumb from "@/components/breadcrumb";
import ServiceFeatures2 from "@/components/service-features2";
import Orders from "@/components/order-acc";
import ManagePassword from "@/components/password-acc";
import { Edit, Camera } from "lucide-react";
import avatar from "@/assets/profile-img.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import productImage from "@/assets/product-img.png";
import ManageAddress from "@/components/address-acc";
import Logout from "@/components/logout-acc";

const Account = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Danh sách tab
    const tabs = [
        { name: "Personal Information", path: "/account" },
        { name: "My order", path: "/account/order" },
        { name: "Password manager", path: "/account/password" },
        { name: "Manage Address", path: "/account/address" },
        { name: "Logout", path: "/account/logout" },
    ];

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    // Xử lý thay đổi input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Xử lý submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Updated Info:", formData);
    };

    // data
    const order = {
        id: 7,
        paymentMethod: "MoMo",
        total: "768.000",
        date: "20 March 2025",
        shipping: "0",
        discount: "30.000",
        status: "Accepted",
        statusMessage: "Your order has been accepted",
        items: [
            {
                name: "Own The Run",
                size: "L",
                qty: 2,
                price: "798.000",
                image: productImage, // Ảnh tạm
            },
        ],
    };
    // Xử lý nội dung hiển thị dựa vào URL

    const renderContent = () => {
        switch (location.pathname) {
            case "/account/order":
                return (
                    <div>
                        <Orders order={order} />
                    </div>
                );
            case "/account/password":
                return (
                    <div>
                        <ManagePassword />
                    </div>
                );
            case "/account/address":
                return (
                    <div>
                        <ManageAddress />
                    </div>
                );
            case "/account/logout":
                return (
                    <div>
                        <Logout />
                    </div>
                );
            default:
                return (
                    <div className="mb-[80px]">
                        {/* Profile Picture */}
                        <div className="flex">
                            <div className="relative">
                                <img
                                    src={avatar}
                                    alt="Profile"
                                    className="h-[100px] w-[100px] rounded-full border-4 border-primary object-cover"
                                />
                                <button className="absolute bottom-0 right-0 flex h-[30px] w-[30px] items-center justify-center rounded-full border-primary bg-white text-primary">
                                    <Edit size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Form */}
                        <h2 className="mt-8 text-[24px] font-semibold text-gray-800">Personal Information</h2>
                        <form
                            onSubmit={handleSubmit}
                            className="mt-8 space-y-10"
                        >
                            <div>
                                <label className="block font-medium text-gray-600">Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="mt-2 w-full rounded-lg border p-3"
                                    placeholder="Your name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block font-medium text-gray-600">Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-2 w-full rounded-lg border p-3"
                                    placeholder="example@gmail.com"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block font-medium text-gray-600">Phone *</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="mt-2 w-full rounded-lg border p-3"
                                    placeholder="Your phone number"
                                    required
                                />
                            </div>
                            <button className="mt-4 w-[167px] rounded-lg bg-primary py-3 font-medium text-white">Update changes</button>
                        </form>
                    </div>
                );
        }
    };

    return (
        <div>
            <div className="flex h-[350px] flex-col items-center justify-center gap-[20px] bg-sub-cyan">
                <div className="title-page">My Account</div>
                <Breadcrumb />
            </div>
            <div className="content mt-[95px]">
                <div className="flex justify-between">
                    {/* Sidebar (Left) */}
                    <div className="w-[388px]">
                        <ul className="flex flex-col gap-[24px]">
                            {tabs.map((tab, index) => (
                                <li
                                    key={index}
                                    onClick={() => navigate(tab.path)}
                                    className={`flex h-[80px] cursor-pointer items-center rounded-lg px-6 text-[18px] font-medium ${
                                        location.pathname === tab.path ? "bg-primary text-white" : "bg-sub-cyan text-gray-600"
                                    }`}
                                >
                                    {tab.name}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Content (Right) */}
                    <div className="w-[792px]">{renderContent()}</div>
                </div>
            </div>
            <ServiceFeatures2 />
        </div>
    );
};

export default Account;
