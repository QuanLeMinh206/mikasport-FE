import { Heart, ShoppingBag, Expand, Star } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Product1 from "@/assets/product1.png";
import Product2 from "@/assets/product2.png";
import Product3 from "@/assets/product3.png";
import Product4 from "@/assets/product4.png";
const products = [
    {
        id: 1,
        image: Product1,
        label: "25% off",
        category: "Running",
        title: "ULT ENG TEE",
        price: "399.000 đ",
        oldPrice: "550.000 đ",
        rating: 4.5,
    },
    {
        id: 2,
        image: Product2,
        label: "15% off",
        category: "Workout",
        title: "Graphic Climacool Training",
        price: "399.000 đ",
        oldPrice: "550.000 đ",
        rating: 4.5,
    },
    {
        id: 3,
        image: Product3,
        label: "20% off",
        category: "Running",
        title: "Classy Light Polo",
        price: "399.000 đ",
        oldPrice: "399.000 đ",
        rating: 4.5,
    },
    {
        id: 4,
        image: Product4,
        label: "20% off",
        category: "Running",
        title: "Classy Light Polo",
        price: "399.000 đ",
        oldPrice: "399.000 đ",
        rating: 4.5,
    },
];

const ProductCard = ({ product, index }) => {
    return (
        <motion.div
            className="relative h-[445px] w-[320px] overflow-hidden rounded-[35px] bg-card transition-shadow hover:shadow-[0px_6.401px_32.007px_0px_rgba(0,0,0,0.10)]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
        >
            <span className="absolute left-5 top-2.5 z-10 flex h-[40px] w-[74px] items-center justify-center rounded-full border border-primary bg-white text-[14px] font-medium text-primary">
                {product.label}
            </span>
            <img
                src={product.image}
                alt={product.title}
                className="relative left-6 top-[22px] h-[305px] w-[250px] rounded object-cover"
            />
            <div className="absolute right-6 top-6 flex flex-col space-y-2.5">
                <button className="btn-product">
                    <Heart size={20} />
                </button>
                <button className="btn-product">
                    <Expand size={20} />
                </button>
                <button className="btn-product">
                    <ShoppingBag size={20} />
                </button>
            </div>
            <div className="mt-[22px] h-[116px] bg-white px-5 py-[14px]">
                <div className="flex items-center justify-between">
                    <span className="mb-2 text-[14px] text-gray-500">{product.category}</span>
                    <div className="flex items-center gap-1">
                        <Star
                            className="text-yellow-400"
                            size={16}
                        />
                        <span className="text-[14px] font-semibold text-gray-800">{product.rating}</span>
                    </div>
                </div>
                <h3 className="mb-2 text-[18px] font-semibold text-gray-800">{product.title}</h3>
                <div className="flex items-center gap-2">
                    <span className="mr-[17px] text-[16px] font-bold text-gray-900">{product.price}</span>
                    <span className="text-[16px] text-gray-500 line-through">{product.oldPrice}</span>
                </div>
            </div>
        </motion.div>
    );
};

const ProductRow = () => {
    const sliderRef = useRef(null);
    return (
        <section className="mb-[120px] mt-[35px]">
            <div className="mt-[52px] flex justify-center gap-[55px] overflow-x-auto">
                <motion.div
                    ref={sliderRef}
                    className="mt-[52px] flex cursor-grab gap-[55px] overflow-hidden"
                    drag="x"
                    dragConstraints={{ right: 0, left: -1000 }} // Điều chỉnh giá trị tùy thuộc số lượng sản phẩm
                >
                    {products.map((product, index) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            index={index}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProductRow;
