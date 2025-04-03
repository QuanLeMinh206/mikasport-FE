import { useParams } from "react-router-dom";
import Breadcrumb from "@/components/breadcrumb";
import ProductTabs from "@/components/product-desc";
import { useState } from "react";
import { ShoppingCart, Heart, Minus, Plus } from "lucide-react";
import main from "@/assets/main.png";
import thumb1 from "@/assets/thumb1.png";
import thumb2 from "@/assets/thumb2.png";
import thumb3 from "@/assets/thumb3.png";
import thumb4 from "@/assets/thumb4.png";
import color1 from "@/assets/color1.png";
import color2 from "@/assets/color2.png";
import color3 from "@/assets/color3.png";
import color4 from "@/assets/color4.png";
import ProductRow from "@/components/product-row";
import ServiceFeatures2 from "@/components/service-features2";
const ProductDetail = () => {
    const { id } = useParams();

    const product = {
        title: "Own The Run",
        category: "Running",
        rating: 4.9,
        reviews: 159,
        price: "450.000 đ",
        oldPrice: "399.000 đ",
        colors: [color1, color2, color3, color4],
        sizes: ["S", "M", "L", "XL", "XXL"],
        images: [main, thumb2, thumb3, thumb4],
    };

    const [selectedImage, setSelectedImage] = useState(product.images[0]);
    const [selectedSize, setSelectedSize] = useState("L");
    const [quantity, setQuantity] = useState(1);

    return (
        <div>
            <div className="flex h-[350px] flex-col items-center justify-center gap-[20px] bg-sub-cyan">
                <div className="title-page">Product Detail</div>
                <Breadcrumb />
            </div>
            <div className="detail mt-[50px]">
                <div className="content">
                    <div className="flex gap-[45px]">
                        {/* Block Image */}
                        <div className="w-[598px]">
                            <div className="relative flex h-[730px] items-center justify-center overflow-hidden rounded-lg bg-gray-100">
                                <img
                                    src={selectedImage}
                                    alt="Product"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="mt-5 flex gap-[20px]">
                                {product.images.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`Thumbnail ${index}`}
                                        className={`h-[170px] w-[135px] cursor-pointer rounded-lg object-cover ${
                                            selectedImage === img ? "border-2 border-primary" : ""
                                        }`}
                                        onClick={() => setSelectedImage(img)}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Block Detail */}
                        <div className="mt-[47px]">
                            <h4 className="mb-5 text-[18px] text-desc">{product.category}</h4>
                            <h1 className="mb-[18px] text-3xl font-semibold">{product.title}</h1>
                            <div className="mb-[42px] flex items-center gap-2 text-[20px]">
                                ⭐⭐⭐⭐⭐ {product.rating} <span className="text-gray-500">({product.reviews} reviews)</span>
                            </div>
                            <div className="mb-8 flex items-center gap-7">
                                <span className="text-2xl font-semibold text-gray-900">{product.price}</span>
                                <span className="text-2xl text-gray-500 line-through">{product.oldPrice}</span>
                            </div>

                            {/* Color Options */}
                            <h4 className="mb-2 mt-6 text-gray-600">Color</h4>
                            <div className="flex gap-[25px]">
                                {product.colors.map((color, index) => (
                                    <img
                                        key={index}
                                        src={color}
                                        alt="Color"
                                        className="h-[110px] w-[90px] cursor-pointer rounded-md border"
                                    />
                                ))}
                            </div>

                            {/* Size Options */}
                            <h4 className="mb-2.5 mt-6 text-gray-600">Size</h4>
                            <div className="flex gap-[26px]">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        className={`btn h-[45px] w-[70px] rounded-[8px] ${selectedSize === size ? "bg-primary text-white" : "border-primary bg-white text-primary"}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>

                            <a
                                href="#"
                                className="mt-8 inline-block text-sm text-primary underline"
                            >
                                View size guide
                            </a>

                            <div className="mt-8 flex h-[35px] w-[70px] items-center justify-center rounded-[8px] border border-primary bg-sub-cyan text-[14px] text-primary">
                                In stock
                            </div>

                            {/* Quantity & Buttons */}
                            <div className="mt-6 flex items-center gap-4">
                                <div className="mr-[44px] flex items-center gap-2 overflow-hidden">
                                    <button
                                        className="btn h-[40px] w-[50px] rounded-[8px] border-primary bg-white px-4 text-primary"
                                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                                    >
                                        <Minus />
                                    </button>
                                    <span className="btn h-[40px] w-[50px] rounded-[8px] border-primary bg-white px-4 text-primary">{quantity}</span>
                                    <button
                                        className="btn h-[40px] w-[50px] rounded-[8px] border-primary bg-white px-4 text-primary"
                                        onClick={() => setQuantity((q) => q + 1)}
                                    >
                                        <Plus />
                                    </button>
                                </div>
                                <button className="btn flex items-center rounded-[8px] border border-primary bg-white text-[18px] text-primary">
                                    Add to Cart
                                </button>
                                <button className="btn rounded-[8px] border border-primary bg-primary text-[18px] text-white">Buy Now</button>
                                <button className="btn h-[45px] w-[45px] rounded-[8px] border border-primary bg-white text-primary">
                                    <Heart size={20} />
                                </button>
                            </div>
                            <div className="mt-[45px] h-[0.8px] w-full bg-[#A4A4A4]"></div>
                            {/* Social Share */}
                            <div className="mt-[123px] flex items-center gap-4 text-secondary">
                                <span className="text-[18px]">Share :</span>
                                <div className="flex gap-5 text-3xl">
                                    <a
                                        className=""
                                        href="#"
                                    >
                                        <i className="fab fa-instagram hover:text-primary"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-facebook hover:text-primary"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-pinterest hover:text-primary"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-twitter hover:text-primary"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-[90px] h-[100px] bg-sub-cyan"></div>
            <div className="content">
                <div>
                    <ProductTabs isLoggedIn={true} />
                </div>
            </div>
            <section className="mt-[80px]">
                <h4 className="mb-2.5 text-center text-[18px] font-semibold text-secondary">Related Products</h4>
                <h2 className="mb-[60px] text-center text-[42px] font-semibold text-secondary">Explore Related Products</h2>
                <ProductRow />
            </section>

            <ServiceFeatures2 />
        </div>
    );
};

export default ProductDetail;
