import Breadcrumb from "@/components/breadcrumb";
import ServiceFeatures2 from "@/components/service-features2";
import { useState } from "react";
import { ShoppingCart, Trash2, Minus, Plus, Gift, Truck } from "lucide-react";
import ProductImage from "@/assets/product-img.png";
import ghtk from "@/assets/ghtk.svg";
import momo from "@/assets/momo.svg";
import vnpay from "@/assets/vnpay.svg";
import cash from "@/assets/cash.png";
import card from "@/assets/card.png";
import { useNavigate } from "react-router-dom";
const Payment = () => {
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

    const navigate = useNavigate();
    return (
        <div>
            <div className="flex h-[350px] flex-col items-center justify-center gap-[20px] bg-sub-cyan">
                <div className="title-page">Payment</div>
                <Breadcrumb />
            </div>
            <div className="content mb-[120px] mt-[50px] flex justify-between">
                {/* Thông tin đặt hàng */}
                <div>
                    <div className="w-[820px] rounded-[8px] border p-[25px]">
                        <h2 className="mb-[27px] text-lg font-semibold">Select Payment Method</h2>

                        <div className="flex flex-col gap-[40px]">
                            {/* MoMo */}
                            <label className="flex cursor-pointer items-center gap-2 rounded border p-3">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="MoMo"
                                    checked={selectedMethod === "MoMo"}
                                    onChange={() => setSelectedMethod("MoMo")}
                                />
                                <img
                                    src={momo}
                                    alt="MoMo"
                                    className="h-[30px] w-[30px]"
                                />
                                MoMo
                            </label>

                            {/* VnPay */}
                            <label className="flex cursor-pointer items-center gap-2 rounded border p-3">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="VnPay"
                                    checked={selectedMethod === "VnPay"}
                                    onChange={() => setSelectedMethod("VnPay")}
                                />
                                <img
                                    src={vnpay}
                                    alt="VnPay"
                                    className="h-[30px] w-[30px]"
                                />
                                VnPay
                            </label>

                            {/* Cash on Delivery */}
                            <label className="flex cursor-pointer items-center gap-2 rounded border p-3">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="COD"
                                    checked={selectedMethod === "COD"}
                                    onChange={() => setSelectedMethod("COD")}
                                />
                                <img
                                    src={cash}
                                    alt="Cash on Delivery"
                                    className="h-[30px] w-[30px]"
                                />
                                Cash on Delivery
                            </label>

                            {/* Credit/Debit Card */}
                            <label className="flex cursor-pointer items-center gap-2 rounded border p-3">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="Card"
                                    checked={selectedMethod === "Card"}
                                    onChange={() => setSelectedMethod("Card")}
                                />
                                <img
                                    src={card}
                                    alt="Cash on Delivery"
                                    className="h-[30px] w-[30px]"
                                />
                                Add new Credit/Debit Card
                            </label>

                            {selectedMethod === "Card" && (
                                <div className="rounded border p-4">
                                    <div className="mb-3">
                                        <label className="mb-2 block">Card Holder Name *</label>
                                        <input
                                            type="text"
                                            className="w-full rounded border p-2"
                                            placeholder="Ex: Nguyen Van A"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="mb-2 block">Card Number *</label>
                                        <input
                                            type="text"
                                            className="w-full rounded border p-2"
                                            placeholder="4715 3423 3243 0989"
                                        />
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-1/2">
                                            <label className="mb-2 block">Expiry Date *</label>
                                            <input
                                                type="text"
                                                className="w-full rounded border p-2"
                                                placeholder="MM/YY"
                                            />
                                        </div>
                                        <div className="w-1/2">
                                            <label className="mb-2 block">CVV *</label>
                                            <input
                                                type="text"
                                                className="w-full rounded border p-2"
                                                placeholder="000"
                                            />
                                        </div>
                                    </div>
                                    <button className="mt-4 rounded bg-primary px-4 py-2 text-white">Add Card</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="h-[472px] w-[395px] rounded-[8px] border p-[25px]">
                    <h3 className="mb-[25px] text-lg font-semibold">Order Summary</h3>
                    <div className="sort-line mb-[22px] w-full bg-[#D9D9D9]"></div>
                    <div className="mb-[28px] flex justify-between">
                        <span className="order-title">Items</span>
                        <span className="order-value">{cartItems.length}</span>
                    </div>
                    <div className="mb-[28px] flex justify-between">
                        <span className="order-title">Subtotal</span>
                        <span className="order-value">{subtotal.toLocaleString()} đ</span>
                    </div>
                    <div className="mb-[28px] flex justify-between">
                        <span className="order-title">Shipping</span>
                        <span className="order-value">{shipping === 0 ? "Free" : `${shipping.toLocaleString()} đ`}</span>
                    </div>
                    <div className="mb-[28px] flex justify-between">
                        <span className="order-title">Voucher Discount</span>
                        <span className="text-[18px] text-red-500">-{discount.toLocaleString()} đ</span>
                    </div>{" "}
                    <div className="sort-line mb-[22px] w-full bg-[#D9D9D9]"></div>
                    <div className="mt-2 flex justify-between text-lg font-semibold">
                        <span className="order-title">Total</span>
                        <span className="text-[18px] text-primary">{total.toLocaleString()} đ</span>
                    </div>
                    <button
                        className="btn mt-[26px] h-[50px] w-full rounded-[8px] bg-primary text-white"
                        onClick={() => navigate("order-completed")}
                    >
                        Confirm Payment
                    </button>
                </div>
            </div>
            <ServiceFeatures2 />
        </div>
    );
};
export default Payment;
