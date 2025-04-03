import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FileUploader from "@/components/ui/file-uploader";

export const NewProduct = () => {
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("");
    const [gender, setGender] = useState("Nam");
    const [color, setColor] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [productName, setProductName] = useState("");
    const [images, setImages] = useState({
        image: null,
        detail1: null,
        detail2: null,
        detail3: null,
    });
    const [sizes, setSizes] = useState([
        { size_id: 1, stock: 0 },
        { size_id: 2, stock: 0 },
        { size_id: 3, stock: 0 },
        { size_id: 4, stock: 0 },
        { size_id: 5, stock: 0 },
    ]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/categories");
                setCategories(response.data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };
        fetchCategories();
    }, []);

    useEffect(() => {
        console.log("Images state updated:", images);
    }, [images]);

    const handleSizeChange = (index, stock) => {
        setSizes((prevSizes) => {
            const newSizes = [...prevSizes];
            newSizes[index].stock = Number(stock) || 0;
            return newSizes;
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", productName);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("gender", gender);
        formData.append("color", color);
        formData.append("category_id", Number(category));

        if (images.image) {
            formData.append("image", images.image);
        } else {
            alert("Vui lòng tải lên ảnh chính.");
            return;
        }

        if (images.detail1) formData.append("image_detail1", images.detail1);
        if (images.detail2) formData.append("image_detail2", images.detail2);
        if (images.detail3) formData.append("image_detail3", images.detail3);

        formData.append("sizes", JSON.stringify(sizes));

        try {
            const response = await axios.post("http://localhost:8000/api/admin/products", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            console.log("Response:", response.data);
            alert("Sản phẩm đã được thêm thành công!");
            navigate("/admin/products");
        } catch (error) {
            console.error("Lỗi khi thêm sản phẩm:", error.response?.data || error.message);
            alert("Thêm sản phẩm thất bại. Vui lòng kiểm tra lại.");
        }
    };

    return (
        <form
            className="mx-4 mt-4"
            onSubmit={handleSubmit}
        >
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12 dark:text-cyan-50">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-cyan-50">New Product</h2>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        {/* Các trường khác giữ nguyên */}
                        <div className="sm:col-span-4">
                            <label className="block text-sm font-medium">Product Name</label>
                            <input
                                type="text"
                                className="w-full rounded-md px-3 py-1.5 dark:bg-slate-900 dark:text-cyan-50 sm:text-sm"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                            />
                        </div>

                        <div className="col-span-full">
                            <label className="block text-sm font-medium">Description</label>
                            <textarea
                                className="w-full rounded-md px-3 py-1.5 dark:bg-slate-900 dark:text-cyan-50 sm:text-sm"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <label className="block text-sm font-medium">Category</label>
                            <select
                                className="w-full rounded-md px-3 py-1.5 dark:bg-slate-900 dark:text-cyan-50 sm:text-sm"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="">Select category</option>
                                {categories.map((cat) => (
                                    <option
                                        key={cat.category_id}
                                        value={cat.category_id}
                                    >
                                        {cat.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="sm:col-span-2">
                            <label className="block text-sm font-medium">Gender</label>
                            <select
                                className="w-full rounded-md px-3 py-1.5 dark:bg-slate-900 dark:text-cyan-50 sm:text-sm"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                            >
                                <option value="Nam">Nam</option>
                                <option value="Nữ">Nữ</option>
                            </select>
                        </div>

                        <div className="sm:col-span-2">
                            <label className="block text-sm font-medium">Color</label>
                            <input
                                type="text"
                                className="w-full rounded-md px-3 py-1.5 dark:bg-slate-900 dark:text-cyan-50 sm:text-sm"
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <label className="block text-sm font-medium">Price</label>
                            <input
                                type="number"
                                className="w-full rounded-md px-3 py-1.5 dark:bg-slate-900 dark:text-cyan-50 sm:text-sm"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>

                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium">Quantity by Size</label>
                            <div className="mt-2 grid grid-cols-5 gap-2">
                                {sizes.map((size, index) => (
                                    <input
                                        key={index}
                                        type="number"
                                        placeholder={["S", "M", "L", "XL", "XXL"][index]}
                                        className="w-full rounded-md px-2 py-1.5 dark:bg-slate-900 dark:text-cyan-50 sm:text-sm"
                                        value={size.stock}
                                        onChange={(e) => handleSizeChange(index, e.target.value)}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* FileUploader cho ảnh chính */}
                        <FileUploader
                            label="Main Image"
                            onFileSelect={(file) => setImages((prev) => ({ ...prev, image: file }))}
                        />

                        {/* FileUploader cho ảnh chi tiết 1, 2, 3 */}
                        <FileUploader
                            label="Image Detail 1"
                            onFileSelect={(file) => setImages((prev) => ({ ...prev, detail1: file }))}
                        />
                        <FileUploader
                            label="Image Detail 2"
                            onFileSelect={(file) => setImages((prev) => ({ ...prev, detail2: file }))}
                        />
                        <FileUploader
                            label="Image Detail 3"
                            onFileSelect={(file) => setImages((prev) => ({ ...prev, detail3: file }))}
                        />
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                    type="submit"
                    className="rounded-md bg-cyan-600 px-3 py-2 text-sm text-white hover:bg-cyan-500"
                >
                    Add new
                </button>
            </div>
        </form>
    );
};
