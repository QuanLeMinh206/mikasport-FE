import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
    {
        question: "How can I place an order?",
        answer: "To place an order, simply browse our products, add items to your cart, and proceed to checkout.",
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept a variety of payment methods, including credit and debit cards (Visa, MasterCard, American Express), PayPal, and other secure payment options.",
    },
    {
        question: "Can I track my order after it’s been placed?",
        answer: "Yes! Once your order is shipped, you will receive a tracking number via email.",
    },
    {
        question: "Do you offer customer support?",
        answer: "Yes, our support team is available 24/7. You can reach us via live chat, email, or phone.",
    },
    {
        question: "What is your return policy?",
        answer: "We offer a 30-day return policy. If you're not satisfied with your purchase, you can return it for a full refund.",
    },
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-white py-[120px]">
            <div className="content">
                <h4 className="mb-2.5 text-center text-[18px] font-semibold text-secondary">FAQ</h4>
                <h2 className="mb-[60px] text-center text-[42px] font-semibold text-secondary">Questions? Look here.</h2>
                <div className="mx-auto mt-[40px]">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-gray-300"
                        >
                            <button
                                className="flex w-full items-center justify-between py-[34px] text-[22px] font-semibold text-secondary focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                {activeIndex === index ? <FaMinus className="text-secondary" /> : <FaPlus className="text-secondary" />}
                            </button>
                            {activeIndex === index && (
                                <div className="h-[100px] bg-secondary py-[30px] pl-[22px] pr-[270px] text-[16px] text-white">{faq.answer}</div>
                            )}
                        </div>
                    ))}
                </div>{" "}
            </div>
        </section>
    );
};

export default FAQ;
