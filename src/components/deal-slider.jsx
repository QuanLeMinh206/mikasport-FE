import { useEffect, useRef, useState } from "react";
import { Heart, ShoppingBag, Expand, Star } from "lucide-react";
import { motion } from "framer-motion";
import Deal1 from "@/assets/deal1.png";
import Deal2 from "@/assets/deal2.png";
import Deal3 from "@/assets/deal3.png";
import { section } from "framer-motion/client";
const products = [
    {
        id: 1,
        image: Deal1,
        label: "25% off",
        category: "Tennis",
        title: "Henley Tennis Climacool",
        price: "399.000 đ",
        oldPrice: "399.000 đ",
        rating: 4.5,
        description: "Climacool technology helps you control sweat thanks to the quick sweat material. Fast fabric dry for a fresh feeling...",
    },
    {
        id: 2,
        image: Deal2,
        label: "25% off",
        category: "Tennis",
        title: "Tee Tennis FreeLift",
        price: "399.000 đ",
        oldPrice: "399.000 đ",
        rating: 4.5,
        description: "This product is made from 100% recycled material. By reusing the created materials, we contribute to reducing waste and...",
    },
    {
        id: 3,
        image: Deal3,
        label: "25% off",
        category: "Tennis",
        title: "Tee Tennis FreeLift",
        price: "399.000 đ",
        oldPrice: "399.000 đ",
        rating: 4.5,
        description: "The shirt uses Climacool+fabric, our best cooling technology. And outstanding design? The coming time is coming...",
    },
];

const DealsSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-sub-cyan">
            <div className="content">
                <h4 className="pt-[64px] text-[22px] font-semibold text-secondary">Today Deals</h4>
                <div className="flex items-center justify-between">
                    {" "}
                    <h2 className="text-[42px] font-semibold text-secondary">Deals of the Day</h2>
                    <div className="">Limited-time deals on top products! Grab yours before they're gone!</div>
                </div>
            </div>

            <div className="relative mt-[30px] w-full overflow-hidden">
                <motion.div
                    ref={sliderRef}
                    className="flex gap-[20px]"
                    animate={{ x: -currentIndex * (614 + 20) }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="mb-[80px] h-[400px] w-[614px] flex-shrink-0 rounded-[20px] bg-white p-2.5 shadow-md"
                        >
                            <div className="flex w-full justify-between">
                                <div className="relative flex h-[380px] w-[305px] justify-between rounded-[15px] bg-card">
                                    <span className="absolute left-5 top-2.5 z-10 flex h-[40px] w-[74px] items-center justify-center rounded-full border border-primary bg-white text-[14px] font-medium text-primary">
                                        {product.label}
                                    </span>
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="relative left-6 top-[50px] h-[325px] w-[223px] rounded object-cover"
                                    />
                                    <div className="z-10 mr-[16px] mt-[18px] flex items-start justify-between">
                                        <div className="flex flex-col gap-2">
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
                                    </div>
                                </div>
                                <div className="ml-4 mt-[36px] flex w-[276px] flex-col justify-between gap-[20px]">
                                    <div>
                                        <span className="text-sm text-desc">{product.category}</span>
                                        <h3 className="text-[20px] font-semibold text-gray-800">{product.title}</h3>
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg font-bold text-gray-900">{product.price}</span>
                                            <span className="text-lg text-gray-500 line-through">{product.oldPrice}</span>
                                        </div>
                                        <div className="mt-3 flex items-center gap-1">
                                            <Star
                                                className="text-yellow-400"
                                                size={18}
                                            />
                                            <span className="text-[14px] font-semibold text-gray-800">{product.rating}</span>
                                        </div>
                                    </div>
                                    <p className="text-[16px] leading-[25px] text-desc">{product.description}</p>
                                    <a
                                        href="#"
                                        className="font-semibold text-primary"
                                    >
                                        Buy now →
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default DealsSlider;
