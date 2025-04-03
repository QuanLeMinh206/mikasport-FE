import Breadcrumb from "@/components/breadcrumb";
import ServiceFeatures2 from "@/components/service-features2";
import { useState } from "react";

import ProductImage from "@/assets/product-img.png";
import checkCircle from "@/assets/check-circle.svg";

const OrderCompleted = () => {
    const [selectedMethod, setSelectedMethod] = useState("MoMo");
    const [cardDetails, setCardDetails] = useState({
        name: "",
        number: "",
        expiry: "",
        cvv: "",
    });
    // Dữ liệu sản phẩm và voucher
    const productsData = [
        {
            number: 1,
            name: "Own The Run",
            image: ProductImage,
            description: "Lightweight and breathable training jersey.",
            price: 399000,
            quantity: 2, // Số lượng đã chọn trong giỏ hàng
            size: "L",
        },
    ];

    const vouchersData = [
        {
            id: 2,
            code: "SUMMER10",
            discountValue: 30000, // 30.000đ
            minOrderValue: 500000,
            startDate: "2025-02-01",
            endDate: "2025-06-30",
        },
    ];

    const [cartItems, setCartItems] = useState(productsData);
    const [voucherCode, setVoucherCode] = useState("");
    const [discount, setDiscount] = useState(0);

    // Cập nhật số lượng sản phẩm
    const updateQuantity = (index, change) => {
        const updatedCart = [...cartItems];
        updatedCart[index].quantity = Math.max(1, updatedCart[index].quantity + change);
        setCartItems(updatedCart);
    };

    // Xóa sản phẩm khỏi giỏ hàng
    const removeItem = (index) => {
        setCartItems(cartItems.filter((_, i) => i !== index));
    };

    // Tính tổng tiền trước giảm giá
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    // Kiểm tra điều kiện áp dụng voucher
    const applyVoucher = () => {
        const voucher = vouchersData.find((v) => v.code === voucherCode);
        if (voucher && subtotal >= voucher.minOrderValue) {
            setDiscount(voucher.discountValue);
        } else {
            setDiscount(0);
            alert("Voucher không hợp lệ hoặc đơn hàng chưa đạt mức tối thiểu.");
        }
    };

    // Tính phí ship
    const shipping = subtotal >= 500000 ? 0 : 30000;

    // Tính tổng đơn hàng
    const total = subtotal - discount + shipping;
    return (
        <div>
            <div className="flex h-[350px] flex-col items-center justify-center gap-[20px] bg-sub-cyan">
                <div className="title-page">Order Completed</div>
                <Breadcrumb />
            </div>
            <div className="content mb-[120px] mt-[66px]">
                <div className="mx-auto flex flex-col items-center">
                    {" "}
                    <img
                        src={checkCircle}
                        alt=""
                        className="mb-[40px] h-[85px] w-[85px]"
                    />
                    <h2 className="mb-[17px] text-[30px] font-semibold text-secondary">Your order is completed!</h2>
                    <p className="text-[18px] font-medium text-gray-500">Thank you. Your Order has been received.</p>
                </div>

                <div className="mt-8">
                    <div className="flex h-[127px] items-center justify-between rounded-[2px] bg-secondary px-[30px] text-white">
                        <div className="flex w-[80%] justify-between">
                            <div className="flex flex-col items-center gap-4">
                                <span className="text-[18px] text-[#A4A4A4]">Order ID</span>
                                <span className="text-[18px] text-white">#7</span>
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <span className="text-[18px] text-[#A4A4A4]">Payment Method</span>
                                <span className="text-[18px] text-white">MoMo</span>
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <span className="text-[18px] text-[#A4A4A4]">Receiver Name</span>
                                <span className="text-[18px] text-white">Le Minh Quan</span>
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <span className="text-[18px] text-[#A4A4A4]">Created Order Date</span>
                                <span className="text-[18px] text-white">20 March 2025</span>
                            </div>
                        </div>
                        <button className="rounded-[8px] bg-primary px-5 py-4 text-white">Download Invoice</button>
                    </div>
                </div>

                <div className="mt-6 rounded-[8px] border p-4">
                    <h3 className="mb-4 text-lg font-semibold">Order Details</h3>
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-200 text-left">
                                <th className="p-2 text-[18px]">Product</th>
                                <th className="p-2 text-right text-[18px]">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="flex items-center gap-4 px-2 py-4">
                                    <img
                                        src={ProductImage}
                                        alt="Own The Run"
                                        className="h-[110px] w-[90px] rounded border border-primary"
                                    />
                                    <div>
                                        <p className="text-[18px] font-semibold">Own The Run</p>
                                        <p className="text-gray-500">Size: L | Qty: 2</p>
                                    </div>
                                </td>
                                <td className="p-2 text-right">798.000 đ</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="mt-[28px] flex justify-between">
                        <span>Shipping</span>
                        <span>0đ</span>
                    </div>
                    <div className="mt-[28px] flex justify-between">
                        <span>Coupon discount</span>
                        <span className="text-red-500">-30.000đ</span>
                    </div>
                    <div className="mt-4 flex justify-between border-t pt-4 text-lg font-semibold">
                        <span>Total</span>
                        <span className="text-primary">768.000đ</span>
                    </div>
                </div>
            </div>
            <ServiceFeatures2 />
        </div>
    );
};
export default OrderCompleted;
