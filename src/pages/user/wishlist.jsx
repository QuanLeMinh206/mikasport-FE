import Breadcrumb from "@/components/breadcrumb";
import { useState } from "react";
import { X } from "lucide-react";
import ProductImage from "@/assets/product-img.png";
import { useNavigate } from "react-router-dom";
import ServiceFeatures2 from "@/components/service-features2";
const Wishlist = () => {
    // Dữ liệu danh sách yêu thích
    const wishlistItemsData = [
        {
            id: 1,
            name: "Authentic Real Madrid",
            image: ProductImage,
            size: "L",
            price: 499000,
            dateAdded: "05 April 2025",
        },
        {
            id: 2,
            name: "Ultimate CLIMACOOL",
            image: ProductImage,
            size: "L",
            price: 399000,
            dateAdded: "05 April 2025",
        },
        {
            id: 3,
            name: "Adizero Essentials",
            image: ProductImage,
            size: "L",
            price: 399000,
            dateAdded: "05 April 2025",
        },
    ];

    const [wishlistItems, setWishlistItems] = useState(wishlistItemsData);
    const navigate = useNavigate();

    // Xóa sản phẩm khỏi wishlist
    const removeItem = (index) => {
        setWishlistItems(wishlistItems.filter((_, i) => i !== index));
    };

    // Thêm tất cả vào giỏ hàng (giả định)
    const addAllToCart = () => {
        alert("All items added to cart!");
    };

    return (
        <div>
            <div className="flex h-[350px] flex-col items-center justify-center gap-[20px] bg-sub-cyan">
                <div className="title-page">Wishlist</div>
                <Breadcrumb />
            </div>
            <div className="content mb-[120px] mt-[50px]">
                <h2 className="mb-4 text-xl font-semibold">Your Wishlist</h2>
                <table className="w-full border-collapse overflow-hidden rounded-[8px]">
                    <thead>
                        <tr className="h-[60px] bg-secondary text-[18px] font-normal text-white">
                            <th className="p-3 font-semibold">Product</th>
                            <th className="p-3 font-semibold">Price</th>
                            <th className="p-3 font-semibold">Date Added</th>
                            <th className="p-3 font-semibold">Stock Status</th>
                            <th className="p-3 font-semibold"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {wishlistItems.map((item, index) => (
                            <tr
                                key={index}
                                className="border-b border-gray-300"
                            >
                                <td className="flex items-center gap-4 py-8">
                                    <button
                                        onClick={() => removeItem(index)}
                                        className="text-gray-400"
                                    >
                                        <X size={20} />
                                    </button>
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-[110px] w-[90px] rounded-[8px] border border-primary"
                                    />
                                    <div>
                                        <p className="text-[18px] font-semibold">{item.name}</p>
                                        <p className="text-gray-500">Size: {item.size}</p>
                                    </div>
                                </td>
                                <td className="p-3 text-center text-[18px] font-medium">{item.price.toLocaleString()} đ</td>
                                <td className="p-3 text-center text-[18px] font-medium">{item.dateAdded}</td>
                                <td className="p-3 text-center text-[18px] font-medium text-green-500">In stock</td>
                                <td className="text-right">
                                    <button className="rounded-[8px] bg-primary px-4 py-2 text-white">Add to Cart</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Nút Clear Wishlist & Add all to Cart */}
                <div className="mt-8 flex justify-end gap-[70px]">
                    <button
                        onClick={() => setWishlistItems([])}
                        className="font-medium text-secondary underline"
                    >
                        Clear Wishlist
                    </button>
                    <button
                        onClick={addAllToCart}
                        className="rounded-[8px] bg-primary px-5 py-3 text-white"
                    >
                        Add all to Cart
                    </button>
                </div>
            </div>
            <ServiceFeatures2 />
        </div>
    );
};
export default Wishlist;
