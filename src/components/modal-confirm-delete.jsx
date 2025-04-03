import { Trash2 } from "lucide-react";
export const ModalConfirmDelete = ({ product, onDelete, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="flex h-[250px] w-[400px] flex-col items-center gap-y-6 rounded-xl border border-cyan-600 bg-white p-6 text-center shadow-lg">
                <p className="text-lg font-semibold text-cyan-600">Are you sure you want to delete "{product.name}"?</p>
                <div className="flex items-center justify-center gap-y-4">
                    <Trash2
                        size={50}
                        className="font-bold text-cyan-600"
                    />
                </div>
                <div className="mb-2 flex justify-center gap-14">
                    <button
                        onClick={onDelete}
                        className="w-20 rounded-full bg-cyan-600 px-4 py-2 font-semibold text-white hover:bg-cyan-700"
                    >
                        Yes
                    </button>
                    <button
                        onClick={onClose}
                        className="w-20 rounded-full border border-cyan-600 px-4 py-2 font-semibold text-cyan-600 hover:bg-cyan-50"
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
};
