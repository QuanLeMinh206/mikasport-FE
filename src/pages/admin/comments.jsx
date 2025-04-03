import { PencilLine, Reply, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Pagination from "@/components/pagination";
import { useTheme } from "@/hooks/use-theme";
import { ModalConfirmDelete } from "@/components/modal-confirm-delete";
import { commentsData } from "@/constants/index";
import { SortDropdown } from "@/components/sort-dropdown";
const CommentPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(commentsData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = commentsData.slice(startIndex, endIndex);
    const [selectedComment, setSelectedComment] = useState(null);

    const { theme } = useTheme();
    const navigate = useNavigate();
    const timeOptions = [
        { label: "A-Z", value: "A-Z" },
        { label: "Z-A", value: "Z-A" },
        { label: "Newest", value: "Newest" },
        { label: "Oldest", value: "Oldest" },
    ];
    const [timeFilter, setTimeFilter] = useState("Newest");
    return (
        <div className="mx-4 flex flex-col gap-y-4">
            <div className="mt-4 flex items-center justify-between">
                <h1 className="title">Comments</h1>
            </div>
            <div className="card">
                <div className="card-header">
                    <p className="card-title">Comments List</p>

                    <div className="ml-auto">
                        <SortDropdown
                            options={timeOptions}
                            timeFilter={timeFilter}
                            setTimeFilter={setTimeFilter}
                        />
                    </div>
                </div>

                <div className="card-body p-0">
                    <div className="relative h-[665px] w-full overflow-auto">
                        <table className="table">
                            <thead className="table-header">
                                <tr className="table-row">
                                    <th className="table-head">#</th>
                                    <th className="table-head">Product</th>

                                    <th className="table-head">Message</th>
                                    <th className="table-head">User</th>
                                    <th className="table-head">Date</th>
                                    <th className="table-head">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="table-body">
                                {currentItems.map((comment) => (
                                    <tr
                                        key={comment.id}
                                        className="table-row"
                                    >
                                        <td className="table-cell">{comment.id}</td>
                                        <td className="table-cell">
                                            <div className="flex w-max items-center gap-x-4">
                                                <img
                                                    src={comment.productImg}
                                                    alt={comment.product}
                                                    className="h-[70px] w-[56px] rounded-lg object-cover"
                                                />
                                                <div className="flex flex-col">
                                                    <p className="">{comment.product}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="table-cell">
                                            {" "}
                                            <div className="flex flex-col">
                                                <p className="">{comment.title}</p>
                                                <p className="font-normal text-slate-600 dark:text-slate-400">{comment.message}</p>
                                            </div>
                                        </td>

                                        <td className="table-cell">
                                            <div className="flex w-max items-center gap-x-4">
                                                <img
                                                    src={comment.profileImg}
                                                    alt={comment.userName}
                                                    className="h-[50px] w-[50px] rounded-full border-4 border-cyan-200 object-cover"
                                                />
                                                <div className="flex flex-col">
                                                    <p className="">{comment.userName}</p>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="table-cell">{comment.commentDate}</td>

                                        <td className="table-cell">
                                            <div className="flex items-center gap-x-4">
                                                <button
                                                    // onClick={() => navigate(`/update-order/${order.number}`)}
                                                    className="flex h-9 w-16 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600 dark:bg-cyan-600 dark:text-cyan-50"
                                                >
                                                    <Reply />
                                                </button>
                                                <button
                                                    onClick={() => setSelectedComment(comment)}
                                                    className="flex h-9 w-16 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600 dark:bg-cyan-600 dark:text-cyan-50"
                                                >
                                                    <Trash2 />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {commentsData.length > itemsPerPage && (
                            <div className="mt-4 flex items-center justify-center">
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={setCurrentPage}
                                />
                            </div>
                        )}
                        {selectedComment && (
                            <ModalConfirmDelete
                                product={selectedComment}
                                onDelete={() => {
                                    alert(`Deleted: ${selectedComment.name}`);
                                    setSelectedComment(null);
                                }}
                                onClose={() => setSelectedComment(null)}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentPage;
