import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
    const location = useLocation();
    const paths = location.pathname.split("/").filter((path) => path);

    return (
        <nav className="mb-6 flex items-center space-x-2 text-[18px] font-medium text-secondary">
            <Link
                to="/"
                className="text-gray-500 hover:text-primary"
            >
                Home
            </Link>
            {paths.map((path, index) => {
                const fullPath = `/${paths.slice(0, index + 1).join("/")}`;
                const isLast = index === paths.length - 1;
                const isProductDetail = paths[index - 1] === "product-detail";

                return (
                    <span
                        key={index}
                        className="flex items-center space-x-2"
                    >
                        <span>/</span>
                        {isLast && isProductDetail ? (
                            <Link
                                to={fullPath}
                                className="text-gray-800 hover:text-primary"
                            >
                                {decodeURIComponent(path)}
                            </Link>
                        ) : isLast ? (
                            <span className="text-gray-800">{decodeURIComponent(path)}</span>
                        ) : (
                            <Link
                                to={fullPath}
                                className="text-gray-500 hover:text-primary"
                            >
                                {decodeURIComponent(path)}
                            </Link>
                        )}
                    </span>
                );
            })}
        </nav>
    );
};

export default Breadcrumb;
