import { useState, useEffect } from "react";
import SlideShow from "@/components/slide";
import ServiceFeatures from "@/components/service-features";
import ProductSlider from "@/components/product";
import DealSlider from "@/components/deal-slider";
import TestimonialSlider from "@/components/testimonial";
import NewBlog from "@/components/new-blog";
import FollowUs from "@/components/follow-us";
import FAQ from "@/components/faqs";
import Hero1 from "@/assets/hero1.svg";
import Hero2 from "@/assets/Hero2.png";
import Hero3 from "@/assets/Hero3.png";
import Hero4 from "@/assets/Hero4.png";
import Image1 from "@/assets/image1.png";
import Image2 from "@/assets/image2.png";
import Image3 from "@/assets/image3.png";
import Image4 from "@/assets/image4.png";
import Image5 from "@/assets/image5.png";
import Image6 from "@/assets/image6.png";
import axios from "axios";

const players = [Hero1, Hero2, Hero3, Hero4];

const Home = () => {
    // call api categories
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/categories")
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.error("Error fetching categories:", error);
            });
    }, []);

    //----------
    const [currentPlayer, setCurrentPlayer] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPlayer((prev) => (prev + 1) % players.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <section className="mt-4 h-[675px] bg-sub-cyan">
                <div className="content">
                    <div className="flex items-center justify-between">
                        {" "}
                        {/* Background pattern */}
                        {/* Text Content */}
                        <div className="relative w-[672px]">
                            <h1 className="mb-[33px] text-[48px] font-medium leading-[65px] tracking-[0.24px] text-primary text-shadow-lg">
                                Elevate Your Game with Premium Sportswear!
                            </h1>
                            <p className="mb-[67px] text-[16px] font-medium leading-[25px] tracking-[0.08px] text-desc">
                                From the training ground to the run, we bring the most suitable products for you. Feel the comfort and durability in
                                every step!
                            </p>
                            <button className="btn bg-cyan-500 text-[20px] text-white shadow-lg transition duration-300">Buy now !</button>
                        </div>
                        {/* Player Image Transition */}
                        <div className="h-[672px] w-[560px]">
                            {players.map((player, index) => (
                                <img
                                    key={index}
                                    src={player}
                                    alt="Player"
                                    className={`absolute transition-opacity duration-1000 ease-in-out ${index === currentPlayer ? "opacity-100" : "opacity-0"}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div>
                <SlideShow />
            </div>
            <div>
                <ServiceFeatures />
            </div>
            <div>
                <section className="flex h-[674px] items-center bg-sub-cyan">
                    <div className="content">
                        {" "}
                        <div className="relative flex h-[478px] items-center">
                            {/* Block bên trái */}
                            <div className="h-[478px] w-[400px] rounded-[40px] bg-card pl-[47px] pt-[33px] transition-all duration-300 hover:shadow-lg">
                                <h2 className="text-[42px] font-semibold text-secondary">For Men’s</h2>
                                <ul className="mt-[55px] space-y-[30px]">
                                    {categories.map((category, index) => (
                                        <li
                                            key={index}
                                            className="cursor-pointer text-[18px] font-medium text-desc hover:text-primary"
                                        >
                                            {category.name}
                                        </li>
                                    ))}
                                </ul>
                                <img
                                    src={Image1}
                                    alt="Bruno"
                                    className="absolute -bottom-1 left-32 w-[304px] object-cover"
                                />
                            </div>
                            {/* Hai block hình ảnh nhỏ */}
                            <div className="ml-[24px] flex transform flex-col gap-6">
                                <div className="flex h-[227px] w-[295px] items-center justify-center rounded-[30px] bg-card transition-all duration-300 hover:shadow-lg">
                                    <img
                                        src={Image2}
                                        alt="Federer"
                                        className="w-[230px]"
                                    />
                                </div>
                                <div className="relative flex h-[227px] w-[295px] justify-center rounded-[30px] bg-card transition-all duration-300 hover:shadow-lg">
                                    <img
                                        src={Image3}
                                        alt="Ronaldo"
                                        className="absolute bottom-0 h-[242px] w-[176px]"
                                    />
                                </div>
                            </div>
                            {/* Block chữ bên phải */}
                            <div className="ml-[70px] max-w-[450px]">
                                <h2 className="text-[42px] font-semibold text-secondary">Sports style Lead quality</h2>
                                <p className="mt-4 text-[16px] leading-relaxed text-desc">
                                    Discover the collection of modern men's sports fashion, stylish standard. <br /> From the pitch to the playground,
                                    costumes help you stand out anytime.
                                    <br />
                                    Comfortable material, class design - Ready Accompanying you in all challenges!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <section className="flex h-[674px] items-center bg-white">
                    <div className="content">
                        <div className="relative flex h-[478px] items-center">
                            {" "}
                            {/* Block chữ bên phải */}
                            <div className="mr-[70px] max-w-[450px]">
                                <h2 className="text-[42px] font-semibold text-secondary">Empower Your Style with Confidence</h2>
                                <p className="mt-4 text-[16px] leading-relaxed text-desc">
                                    Discover the latest trends in women’s fashion, designed for elegance, comfort, and confidence.
                                    <br />
                                    From active wear to casual chic, find the perfect outfit for every occasion!
                                </p>
                            </div>
                            {/* Hai block hình ảnh nhỏ */}
                            <div className="mr-[24px] flex transform flex-col gap-6">
                                <div className="flex h-[227px] w-[295px] items-center justify-center rounded-[30px] bg-card transition-all duration-300 hover:shadow-lg">
                                    <img
                                        src={Image4}
                                        alt="Federer"
                                        className="w-[235px]"
                                    />
                                </div>
                                <div className="relative flex h-[227px] w-[295px] justify-center rounded-[30px] bg-card transition-all duration-300 hover:shadow-lg">
                                    <img
                                        src={Image5}
                                        alt="Ronaldo"
                                        className="absolute bottom-0 h-[242px] w-[184px]"
                                    />
                                </div>
                            </div>
                            {/* Block bên trái */}
                            <div className="h-[478px] w-[400px] rounded-[40px] bg-card pl-[47px] pt-[33px] transition-all duration-300 hover:shadow-lg">
                                <h2 className="text-[42px] font-semibold text-secondary">For Women’s</h2>
                                <ul className="mt-[55px] space-y-[30px]">
                                    {["Running", "Football", "Workout", "Tennis", "Basketball"].map((item, index) => (
                                        <li
                                            key={index}
                                            className="cursor-pointer text-[18px] font-medium text-desc hover:text-primary"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <img
                                    src={Image6}
                                    alt="Bruno"
                                    className="absolute -right-2 bottom-0 w-[243px] object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <ProductSlider />
            </div>
            <div>
                <DealSlider />
            </div>
            <div>
                <TestimonialSlider />
            </div>
            <div className="mt-[120px]">
                <h4 className="mb-2.5 text-center text-[18px] font-semibold text-secondary">News & Blog</h4>
                <h2 className="mb-[60px] text-center text-[42px] font-semibold text-secondary">Our Latest News & Blogs</h2>
                <NewBlog />
            </div>
            <div>
                <FollowUs />
            </div>
            <div>
                <FAQ />
            </div>
        </div>
    );
};

export default Home;
