import { PencilLine, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SortDropdown } from "@/components/sort-dropdown";
import { useState, useEffect } from "react";
import Pagination from "@/components/pagination";
import { useTheme } from "@/hooks/use-theme";
import { ModalConfirmDelete } from "@/components/modal-confirm-delete";
import axios from "axios";

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [selectedProduct, setSelectedProduct] = useState(null);
    const timeOptions = [
        { label: "Newest", value: "Newest" },
        { label: "Oldest", value: "Oldest" },
        { label: "Category A-Z", value: "CategoryA-Z" },
        { label: "Category Z-A", value: "CategoryZ-A" },
    ];
    const { theme } = useTheme();
    const [timeFilter, setTimeFilter] = useState("Newest");
    const navigate = useNavigate();

    useEffect(() => {
        fetchProducts(timeFilter);
    }, [timeFilter]);

    const fetchProducts = (sort) => {
        let apiUrl = "http://localhost:8000/api/admin/products";
        if (sort) {
            apiUrl += `?sort=${sort}`;
        }
        axios
            .get(apiUrl)
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    };

    const handleDeleteProduct = async (productId) => {
        try {
            await axios.delete(`http://localhost:8000/api/admin/products/${productId}`);
            setProducts(products.filter((product) => product.product_id !== productId));
            setSelectedProduct(null);
            alert("Product deleted successfully");
        } catch (error) {
            console.error("Error deleting product:", error);
            alert("Failed to delete product");
        }
    };

    const totalPages = Math.ceil(products.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = products.slice(startIndex, endIndex);

    const handleSortChange = (sort) => {
        setTimeFilter(sort);
    };

    return (
        <div className="mx-4 flex flex-col gap-y-4">
            <div className="mt-4 flex items-center justify-between">
                <h1 className="title">Products</h1>
                <SortDropdown
                    options={timeOptions}
                    timeFilter={timeFilter}
                    setTimeFilter={handleSortChange}
                />
            </div>
            <div className="card">
                <div className="card-header">
                    <p className="card-title">List</p>
                </div>
                <div className="card-body p-0">
                    <div className="relative h-[665px] w-full flex-shrink-0 overflow-auto rounded-none [scrollbar-width:_thin]">
                        <table className="table">
                            <thead className="table-header">
                                <tr className="table-row">
                                    <th className="table-head">#</th>
                                    <th className="table-head">Product</th>
                                    <th className="table-head">Price</th>
                                    <th className="table-head">Quantity</th>
                                    <th className="table-head">S</th>
                                    <th className="table-head">M</th>
                                    <th className="table-head">L</th>
                                    <th className="table-head">XL</th>
                                    <th className="table-head">XXL</th>
                                    <th className="table-head">Category</th>
                                    <th className="table-head">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="table-body">
                                {currentItems.map((product, index) => {
                                    const totalQuantity = product.sizes.reduce((sum, size) => sum + size.pivot.stock, 0);
                                    const sizeMap = { S: 0, M: 0, L: 0, XL: 0, XXL: 0 };
                                    product.sizes.forEach((size) => {
                                        if (sizeMap.hasOwnProperty(size.name)) {
                                            sizeMap[size.name] = size.pivot.stock;
                                        }
                                    });

                                    return (
                                        <tr
                                            key={product.product_id}
                                            className="border-b"
                                        >
                                            <td className="p-2 text-center">{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                                            <td className="flex items-center gap-x-4 p-2">
                                                <img
                                                    src={`http://localhost:8000/storage/products/${product.image}`}
                                                    alt={product.name}
                                                    className="h-[70px] w-[56px] rounded-lg object-cover"
                                                />
                                                <div>
                                                    <p className="font-semibold">{product.name}</p>
                                                    <p className="text-gray-600">{product.description}</p>
                                                </div>
                                            </td>
                                            <td className="p-2 text-right">{Number(product.price).toLocaleString("vi-VN")} ₫</td>
                                            <td className="p-2 text-center">{totalQuantity}</td>
                                            <td className="p-2 text-center">{sizeMap.S}</td>
                                            <td className="p-2 text-center">{sizeMap.M}</td>
                                            <td className="p-2 text-center">{sizeMap.L}</td>
                                            <td className="p-2 text-center">{sizeMap.XL}</td>
                                            <td className="p-2 text-center">{sizeMap.XXL}</td>
                                            <td className="p-2 text-center">{product.category.name}</td>
                                            <td className="p-2">
                                                <div className="flex items-center gap-x-4">
                                                    <button
                                                        onClick={() => navigate(`edit/${product.product_id}`)}
                                                        className="flex h-9 w-16 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600"
                                                    >
                                                        <PencilLine />
                                                    </button>
                                                    <button
                                                        onClick={() => setSelectedProduct(product)}
                                                        className="flex h-9 w-16 items-center justify-center rounded-lg bg-red-100 text-red-600"
                                                    >
                                                        <Trash2 />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        {products.length > itemsPerPage && (
                            <div className="mt-4 flex items-center justify-center">
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={setCurrentPage}
                                />
                            </div>
                        )}
                        {selectedProduct && (
                            <ModalConfirmDelete
                                product={selectedProduct}
                                onDelete={() => handleDeleteProduct(selectedProduct.product_id)}
                                onClose={() => setSelectedProduct(null)}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
