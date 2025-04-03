import { motion } from "framer-motion";
import Blog1 from "@/assets/new-blog1.png";
import Blog2 from "@/assets/new-blog2.png";
import Blog3 from "@/assets/new-blog3.png";
const newsData = [
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
];

const NewsBlog = () => {
    return (
        <section className="bg-white">
            <div className="content">
                {" "}
                <div className="container">
                    <div className="grid gap-6 px-4 md:grid-cols-3 md:px-0">
                        {newsData.map((news) => (
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
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsBlog;
