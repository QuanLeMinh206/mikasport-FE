import { useState } from "react";
import TiptapEditor from "@/components/tiptap-editor";

const EditBlog = () => {
    const [title, setTitle] = useState(""); // State cho tiêu đề bài viết
    const [content, setContent] = useState("<p>Nhập nội dung bài viết...</p>"); // Nội dung bài viết

    return (
        <form className="mx-4 mt-4">
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12 dark:text-cyan-50">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-cyan-50">Edit Blog</h2>

                    {/* Tiêu đề bài viết */}
                    <div className="mt-4">
                        <label className="mb-2z block text-sm font-medium text-gray-900 dark:text-cyan-50">Blog Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="block h-[45px] w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-cyan-600 dark:bg-slate-900 dark:text-cyan-50 dark:outline-cyan-600 sm:text-sm"
                            placeholder="Enter your blog title..."
                        />
                    </div>

                    {/* Nội dung bài viết */}
                    <div className="mt-6">
                        <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-cyan-50">Content</label>
                        <TiptapEditor
                            content={content}
                            setContent={setContent}
                            style={{ minHeight: "300px" }}
                        />
                    </div>
                </div>
            </div>

            {/* Nút Save */}
            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                    type="button"
                    className="text-sm font-semibold text-gray-900 dark:text-cyan-50"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="shadow-xs rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white hover:bg-cyan-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
        </form>
    );
};

export default EditBlog;
