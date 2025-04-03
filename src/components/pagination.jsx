import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const maxPagesToShow = 5; // Giới hạn số trang hiển thị
    const getPages = () => {
        let pages = [];
        let start = Math.max(1, currentPage - 2);
        let end = Math.min(totalPages, start + maxPagesToShow - 1);

        if (start > 1) pages.push("...");
        for (let i = start; i <= end; i++) pages.push(i);
        if (end < totalPages) pages.push("...");

        return pages;
    };

    return (
        <div className="flex items-center space-x-2">
            {/* Nút Previous */}
            <button
                className={`rounded-lg p-2 ${currentPage === 1 ? "cursor-not-allowed opacity-50" : "bg-cyan-500 text-white"}`}
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                ⬅
            </button>

            {/* Danh sách số trang */}
            {getPages().map((page, index) => (
                <button
                    key={index}
                    className={`rounded-md px-3 py-1 ${page === currentPage ? "bg--cyan-100 text--cyan-600" : "text-black hover:bg-gray-200"}`}
                    onClick={() => typeof page === "number" && onPageChange(page)}
                    disabled={page === "..."}
                >
                    {page}
                </button>
            ))}

            {/* Nút Next */}
            <button
                className={`rounded-lg p-2 ${currentPage === totalPages ? "cursor-not-allowed opacity-50" : "bg-cyan-500 text-white"}`}
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                ➡
            </button>
        </div>
    );
};

export default Pagination;
