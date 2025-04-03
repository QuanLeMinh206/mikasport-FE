import Banner1 from "@/assets/banner1.png";
import FilterSidebar from "@/components/filter-sidebar";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Expand, Search, Star, X } from "lucide-react";
import Product1 from "@/assets/product1.png";
import Product2 from "@/assets/product2.png";
import Product3 from "@/assets/product3.png";
import Product4 from "@/assets/product4.png";
import Pagination from "@/components/pagination";
import ServiceFeatures2 from "@/components/service-features2";
const Shop = () => {
    const products = [
        {
            id: 1,
            image: Product1,
            label: "20% off",
            category: "Running",
            title: "Classy Light Polo",
            price: "399.000 đ",
            oldPrice: "399.000 đ",
            rating: 4.5,
        },
        {
            id: 2,
            image: Product2,
            label: "20% off",
            category: "Running",
            title: "Own The Run",
            price: "399.000 đ",
            oldPrice: "399.000 đ",
            rating: 4.5,
        },
        {
            id: 3,
            image: Product3,
            label: "20% off",
            category: "Running",
            title: "Tank Top Bra",
            price: "399.000 đ",
            oldPrice: "399.000 đ",
            rating: 4.5,
        },
        {
            id: 4,
            image: Product4,
            label: "20% off",
            category: "Running",
            title: "ULT ENG TANK W",
            price: "399.000 đ",
            oldPrice: "399.000 đ",
            rating: 4.5,
        },
        {
            id: 5,
            image: Product4,
            label: "20% off",
            category: "Running",
            title: "ULT ENG TANK W",
            price: "399.000 đ",
            oldPrice: "399.000 đ",
            rating: 4.5,
        },
        {
            id: 6,
            image: Product4,
            label: "20% off",
            category: "Running",
            title: "ULT ENG TANK W",
            price: "399.000 đ",
            oldPrice: "399.000 đ",
            rating: 4.5,
        },
        {
            id: 7,
            image: Product4,
            label: "20% off",
            category: "Running",
            title: "ULT ENG TANK W",
            price: "399.000 đ",
            oldPrice: "399.000 đ",
            rating: 4.5,
        },
        {
            id: 8,
            image: Product4,
            label: "20% off",
            category: "Running",
            title: "ULT ENG TANK W",
            price: "399.000 đ",
            oldPrice: "399.000 đ",
            rating: 4.5,
        },
        {
            id: 9,
            image: Product4,
            label: "20% off",
            category: "Running",
            title: "ULT ENG TANK W",
            price: "399.000 đ",
            oldPrice: "399.000 đ",
            rating: 4.5,
        },
        {
            id: 10,
            image: Product4,
            label: "20% off",
            category: "Running",
            title: "ULT ENG TANK W",
            price: "399.000 đ",
            oldPrice: "399.000 đ",
            rating: 4.5,
        },
        {
            id: 11,
            image: Product4,
            label: "20% off",
            category: "Running",
            title: "ULT ENG TANK W",
            price: "399.000 đ",
            oldPrice: "399.000 đ",
            rating: 4.5,
        },
        {
            id: 12,
            image: Product4,
            label: "20% off",
            category: "Running",
            title: "ULT ENG TANK W",
            price: "399.000 đ",
            oldPrice: "399.000 đ",
            rating: 4.5,
        },
    ];
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9; // Hiển thị 10 sản phẩm trên mỗi trang
    const totalPages = Math.ceil(products.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = products.slice(startIndex, endIndex);

    return (
        <div className="">
            <div className="relative flex items-center justify-center">
                {" "}
                <img
                    src={Banner1}
                    alt=" "
                    className="h-[613px] w-full object-cover"
                />
                <div className="left-50% top-50% absolute flex flex-col items-center justify-center text-white transition-colors">
                    {" "}
                    <h2 className="text-[45px] font-bold">Shop</h2>{" "}
                    <h4 className="mt-[30px] text-[20px] font-semibold">
                        <a
                            href=""
                            className="hover:text-primary"
                        >
                            Home
                        </a>{" "}
                        /{" "}
                        <a
                            href=""
                            className="hover:text-primary"
                        >
                            Shop
                        </a>
                    </h4>
                </div>
            </div>
            <div className="content">
                <div className="container mt-[103px]">
                    {/* Sort Bar */}
                    <div className="mb-6 flex items-center justify-between">
                        <h5 className="text-[26px] font-semibold leading-[20px] tracking-[0.13px] text-secondary">Filter options</h5>

                        <span className="text-[20px] font-medium leading-[20px] text-secondary">Showing 42 results</span>
                        <div className="flex items-center">
                            <span className="mr-2 text-[18px] font-semibold leading-[20px] tracking-[0.09px] text-secondary">Sort by:</span>
                            <select className="h-[45px] rounded-lg border-gray-300 bg-white p-3 shadow-[inset_0px_1px_1px_0px_#0AAEC6]">
                                <option>Default Sorting</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                            </select>
                            <div className="ml-[60px] flex h-[45px] items-center rounded-lg border-gray-300 bg-white p-3 shadow-[inset_0px_1px_1px_0px_#0AAEC6]">
                                <input
                                    type="text"
                                    placeholder="Search for..."
                                    className="outline-none"
                                />
                                <Search className="h-[24px] w-[24px] text-secondary" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-40px flex items-center justify-between">
                        <div className="mr-[331px] flex items-center gap-2">
                            <button className="btn h-[45px] w-[130px] rounded-lg font-semibold shadow-[inset_0px_2px_2px_0px_rgba(0,0,0,0.25)]">
                                Women
                            </button>
                            <button className="btn h-[45px] w-[130px] rounded-lg border-primary bg-white font-semibold text-primary shadow-[inset_0px_2px_2px_0px_rgba(0,0,0,0.25)]">
                                Men
                            </button>
                        </div>
                        <div className="mr-[30px] flex h-[45px] w-[130px] items-center justify-between gap-[14px] rounded-[10px] border border-primary bg-sub-cyan p-3 text-primary">
                            <span>Running</span>
                            <X />
                        </div>
                        <div className="mr-[30px] flex h-[45px] w-[130px] items-center justify-between gap-[14px] rounded-[10px] border border-primary bg-sub-cyan p-3 text-primary">
                            <span>Size L</span>
                            <X />
                        </div>
                        <div className="flex h-[45px] w-fit items-center justify-between gap-[14px] rounded-[10px] border border-primary bg-sub-cyan p-3 text-primary">
                            <span>100k-500k</span>
                            <X />
                        </div>
                        <button className="ml-auto text-[18px] font-semibold leading-[20px] tracking-[0.09px] text-secondary underline">
                            Clear All
                        </button>
                    </div>
                    {/* Grid Layout */}
                    <div className="mt-[40px] flex gap-[30px]">
                        {" "}
                        <FilterSidebar />{" "}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                            {currentItems.map((product) => (
                                <Link
                                    to={`product-detail/${product.id}`}
                                    className="block"
                                >
                                    <div
                                        key={product.id}
                                        className="relative h-[445px] w-[320px] scale-[0.90625] overflow-hidden rounded-[35px] bg-card transition-shadow hover:shadow-[0px_6.401px_32.007px_0px_rgba(0,0,0,0.10)]"
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
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>{" "}
                    {/* pagination */}
                    {products.length > itemsPerPage && (
                        <div className="mb-[70px] mt-[43px] flex items-center justify-center">
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={setCurrentPage}
                            />
                        </div>
                    )}
                </div>
            </div>{" "}
            <div>
                <ServiceFeatures2 />
            </div>
        </div>
    );
};
export default Shop;
