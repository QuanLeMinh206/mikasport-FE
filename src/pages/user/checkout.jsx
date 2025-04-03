import Breadcrumb from "@/components/breadcrumb";
import ServiceFeatures2 from "@/components/service-features2";
import { useState } from "react";
import { ShoppingCart, Trash2, Minus, Plus, Gift, Truck } from "lucide-react";
import ProductImage from "@/assets/product-img.png";
import ghtk from "@/assets/ghtk.svg";
import { useNavigate } from "react-router-dom";
const Checkout = () => {
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
    const codeVoucher = vouchersData[0];
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
                <div className="title-page">Checkout</div>
                <Breadcrumb />
            </div>
            <div className="content mb-[120px] mt-[50px] flex justify-between">
                {/* Thông tin đặt hàng */}
                <div className="w-[820px] rounded-[8px] border p-[25px]">
                    <h2 className="mb-4 text-lg font-semibold">Order Information</h2>
                    <div className="mb-4">
                        <label className="form-title mb-2 block">Name *</label>
                        <input
                            type="text"
                            className="h-[50px] w-full rounded-[8px] border p-2"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="mt-[40px]">
                        <label className="form-title mb-2 block">Tel number *</label>
                        <input
                            type="text"
                            className="h-[50px] w-full rounded-[8px] border p-2"
                            placeholder="Enter your phone number"
                        />
                    </div>
                    <div className="mt-[40px]">
                        <label className="form-title mb-2 block">Email *</label>
                        <input
                            type="email"
                            className="h-[50px] w-full rounded-[8px] border p-2"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mt-[40px]">
                        <label className="form-title mb-2 block">Delivery Address *</label>
                        <input
                            type="text"
                            className="h-[50px] w-full rounded-[8px] border p-2"
                            placeholder="Enter your address"
                        />
                    </div>
                    <div className="mt-[40px]">
                        <div>
                            <h3 className="form-title mb-4">Shipping Method</h3>
                            <div className="mb-4 flex items-center gap-4">
                                {" "}
                                <img
                                    src={ghtk}
                                    className="w-[55px]"
                                    alt=""
                                />{" "}
                                <span>GHTK</span>
                            </div>
                            <p className="mt-2 font-medium text-secondary">- Standard delivery to all addresses: 30.000đ</p>
                            <p className="mt-2 font-medium text-secondary">- Inner Ho Chi Minh city ( 1 - 2 days )</p>
                            <p className="mt-2 font-medium text-secondary">- Southern Suburban ( 2 - 3 days ) </p>
                            <p className="mt-2 font-medium text-secondary">- Northern Suburban ( 3 - 5 days ) </p>
                            <p className="mt-2 font-medium text-secondary">- Free shipping for order above 500k </p>
                            <p className="mt-2 font-medium text-secondary">- Customers need to speed up the hotline: 0378 585 205</p>
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
                        onClick={() => navigate("payment")}
                        className="btn mt-[26px] h-[50px] w-full rounded-[8px] bg-primary text-white"
                    >
                        Continue to Payment
                    </button>
                </div>
            </div>
            <ServiceFeatures2 />
        </div>
    );
};
export default Checkout;
