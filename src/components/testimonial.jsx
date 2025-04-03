import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import Cmt1 from "@/assets/cmt1.png";
import Quotation from "@/assets/quotation.svg";
const testimonials = [
    {
        id: 1,
        image: Cmt1, // Thay đường dẫn ảnh phù hợp
        rating: 5.0,
        text: "The t-shirt fits perfectly, feels comfortable, and the fabric quality is great. Love it! Great service! Fast delivery, well-packaged, and the support team was very helpful. Highly recommend!",
    },
    {
        id: 2,
        image: "/path-to-image2.jpg",
        rating: 4.5,
        text: "Excellent material and quick delivery. The support team was responsive and helpful. Will definitely purchase again!",
    },
    {
        id: 3,
        image: "/path-to-image3.jpg",
        rating: 5.0,
        text: "Perfect fit and premium quality. Highly recommend this product to everyone looking for comfort and style.",
    },
];

const TestimonialSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-white">
            <div className="content">
                <h4 className="pt-[64px] text-[22px] font-semibold text-secondary">Testimonial</h4>
                <div className="flex items-center justify-between">
                    {" "}
                    <h2 className="text-[42px] font-semibold text-secondary">What Our Clients Say</h2>
                    <div className="flex gap-[20px]">
                        <button className="btn h-[55px] w-[55px] border-2 border-primary bg-white text-primary">
                            <ArrowLeft />
                        </button>
                        <button className="btn h-[55px] w-[55px]">
                            <ArrowRight />
                        </button>
                    </div>
                </div>
                <div className="mt-[58px] overflow-hidden rounded-xl border-cyan-400">
                    <motion.div
                        ref={sliderRef}
                        className="flex gap-6"
                        animate={{ x: -currentIndex * (1246 + 20) }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="flex h-[580px] w-[1248px] flex-shrink-0 items-center justify-center gap-[90px] rounded-xl border-secondary bg-sub-cyan"
                            >
                                <div className="relative flex h-[425px] w-[366px] items-center justify-center bg-white">
                                    <img
                                        src={testimonial.image}
                                        alt="Client"
                                        className="h-[284px] w-[229px] object-cover"
                                    />
                                    <div className="absolute right-0 top-0 flex h-[63px] w-[60px] items-center justify-center bg-primary text-white">
                                        {" "}
                                        <img
                                            src={Quotation}
                                            alt=""
                                            className=""
                                        />
                                    </div>
                                </div>
                                <div className="ml-6 flex flex-col justify-center">
                                    <div className="mb-2 flex items-center">
                                        {[...Array(5)].map((_, index) => (
                                            <Star
                                                key={index}
                                                size={24}
                                                className={index < Math.round(testimonial.rating) ? "text-yellow-400" : "text-gray-300"}
                                            />
                                        ))}
                                        <span className="ml-2 font-bold text-gray-700">{testimonial.rating}</span>
                                    </div>
                                    <p className="max-w-lg text-lg text-desc">{testimonial.text}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>{" "}
            </div>
        </section>
    );
};

export default TestimonialSlider;
