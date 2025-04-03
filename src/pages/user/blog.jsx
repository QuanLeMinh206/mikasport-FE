import Breadcrumb from "@/components/breadcrumb";
import { useState } from "react";
import { motion } from "framer-motion";
import { SortDropdown } from "@/components/sort-dropdown";
import { Link, useNavigate } from "react-router-dom";
import ServiceFeatures2 from "@/components/service-features2";
import Pagination from "@/components/pagination";
import Blog1 from "@/assets/new-blog1.png";
import Blog2 from "@/assets/new-blog2.png";
import Blog3 from "@/assets/new-blog3.png";
import Blog4 from "@/assets/blog4.png";
import Blog5 from "@/assets/blog5.png";
import Blog6 from "@/assets/blog6.png";
import Blog7 from "@/assets/blog7.png";
import Blog8 from "@/assets/blog8.png";
import Blog9 from "@/assets/blog9.png";
import Blog10 from "@/assets/blog10.png";
import Blog11 from "@/assets/blog11.png";
import Blog12 from "@/assets/blog12.png";
import Blog13 from "@/assets/blog13.png";
const Blog = () => {
    const [timeFilter, setTimeFilter] = useState("newest");
    const timeOptions = [
        { label: "Lowest", value: "lowest" },
        { label: "Newest", value: "newest" },
    ];
    const blogData = [
        {
            id: 1,
            image: Blog1,
            date: "22 Mar 2025",
            title: "Customer Feedback & Reviews for Clothes",
            description: "This page features testimonials from customers expressing their satisfaction...",
        },
        {
            id: 2,
            image: Blog2,
            date: "10 Mar 2025",
            title: "Best Classic T-shirt Customer Reviews",
            description: "This article compiles customer reviews praising the softness, perfect length...",
        },
        {
            id: 3,
            image: Blog3,
            date: "12 Jan 2025",
            title: "Real 2 - 5 FC Barca | Spanish Super Cup",
            description: "On January 12, 2025, FC Barcelona secured a commanding 5-2 victory over...",
        },

        {
            id: 4,
            image: Blog4,
            date: "05 Apr 2025",
            title: "Top 10 Trending Fashion Styles in 2025",
            description: "Discover the latest fashion trends that are taking over 2025, from streetwear to high fashion.",
        },
        {
            id: 5,
            image: Blog5,
            date: "15 Apr 2025",
            title: "Sustainable Fashion: Eco-friendly Clothing Brands",
            description: "A deep dive into sustainable fashion and the brands making a positive impact on the environment.",
        },
        {
            id: 6,
            image: Blog6,
            date: "25 Mar 2025",
            title: "How to Style Oversized Hoodies Like a Pro",
            description: "Learn how to wear oversized hoodies in a fashionable way without compromising on comfort.",
        },
        {
            id: 7,
            image: Blog7,
            date: "30 Mar 2025",
            title: "The Best Running Shoes of 2025",
            description: "Our expert reviews on the top running shoes for performance, comfort, and style.",
        },
        {
            id: 8,
            image: Blog8,
            date: "02 Apr 2025",
            title: "Luxury Watches: Are They Worth the Investment?",
            description: "An in-depth analysis of luxury watches and whether they hold long-term value.",
        },
        {
            id: 9,
            image: Blog9,
            date: "08 Apr 2025",
            title: "Minimalist Fashion: How to Build a Capsule Wardrobe",
            description: "Step-by-step guide to curating a timeless, stylish, and versatile minimalist wardrobe.",
        },
        {
            id: 10,
            image: Blog10,
            date: "12 Apr 2025",
            title: "Athleisure Wear: The Perfect Mix of Style and Comfort",
            description: "Why athleisure wear is becoming the go-to choice for both casual and sporty fashion.",
        },
        {
            id: 11,
            image: Blog11,
            date: "18 Apr 2025",
            title: "The Rise of Vintage Fashion: What’s Old is New Again",
            description: "How vintage fashion is making a comeback and where to find the best vintage pieces.",
        },
        {
            id: 12,
            image: Blog12,
            date: "22 Apr 2025",
            title: "Celebrity Street Style: Top Looks of the Month",
            description: "A collection of the best celebrity street style looks and how you can recreate them.",
        },
        {
            id: 13,
            image: Blog13,
            date: "28 Apr 2025",
            title: "Best Denim Brands You Need to Try This Year",
            description: "Our top picks for high-quality denim brands that offer the best fit and durability.",
        },
    ];
    // Dữ liệu danh sách yêu thích
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9; // Hiển thị 10 sản phẩm trên mỗi trang
    const totalPages = Math.ceil(blogData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = blogData.slice(startIndex, endIndex);
    const navigate = useNavigate();

    return (
        <div>
            <div className="flex h-[350px] flex-col items-center justify-center gap-[20px] bg-sub-cyan">
                <div className="title-page">Our Blog</div>
                <Breadcrumb />
            </div>

            <div className="content">
                <div className="mt-[74px]">
                    <div className="mb-[50px]">
                        {" "}
                        <div className="sort flex items-center justify-between">
                            <h3 className="text-[26px] font-semibold text-secondary">News & Blogs</h3>
                            <div className="flex items-center gap-2">
                                {" "}
                                <span>Sort by:</span>{" "}
                                <SortDropdown
                                    className="w-[150px]"
                                    options={timeOptions}
                                    timeFilter={timeFilter}
                                    setTimeFilter={setTimeFilter}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-x-7 gap-y-16 md:grid-cols-3 md:px-0">
                        {currentItems.map((news) => (
                            <Link
                                to={`blog-detail/${news.id}`}
                                className="block"
                            >
                                <motion.div
                                    key={news.id}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden rounded-lg bg-sub-cyan shadow-lg"
                                >
                                    <div className="mb-[32px] h-[293px]">
                                        <img
                                            src={news.image}
                                            alt={news.title}
                                            className="h-[293px] w-full object-cover"
                                        />
                                        <span className="relative left-[226px] top-[-50px] flex h-[50px] w-[173px] items-center justify-center rounded border-l-[5px] border-t-[5px] border-white bg-primary font-medium text-white">
                                            {news.date}
                                        </span>
                                    </div>
                                    <div className="mx-5">
                                        <h3 className="mb-[15px] line-clamp-2 text-[28px] font-semibold text-secondary">{news.title}</h3>
                                        <p className="text-[16px]line-clamp-2 text-secondary">{news.description}</p>
                                        <a
                                            href="#"
                                            className="my-4 inline-block text-[18px] font-semibold text-primary"
                                        >
                                            Read more →
                                        </a>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                    {/* pagination */}
                    {blogData.length > itemsPerPage && (
                        <div className="mb-[70px] mt-[43px] flex items-center justify-center">
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={setCurrentPage}
                            />
                        </div>
                    )}
                </div>
            </div>

            <ServiceFeatures2 />
        </div>
    );
};
export default Blog;
