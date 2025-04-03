import { useState, useEffect } from "react";

const FileUploader = ({ onFileSelect }) => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0]; // Lấy tệp đầu tiên

        if (selectedFile && selectedFile.type.startsWith("image/")) {
            setFile(selectedFile);
            if (onFileSelect) {
                onFileSelect(selectedFile); // Truyền tệp duy nhất lên component cha
            }
        } else if (selectedFile) {
            alert("Vui lòng chọn một tệp hình ảnh hợp lệ.");
            event.target.value = null; // Reset input file
        }
    };

    // Cleanup URL.createObjectURL to prevent memory leaks
    useEffect(() => {
        return () => {
            if (file) {
                URL.revokeObjectURL(file);
            }
        };
    }, [file]);

    return (
        <div className="rounded-lg border bg-sub-cyan p-4">
            <input
                type="file"
                accept="image/*" // Chỉ chấp nhận hình ảnh
                onChange={handleFileChange}
            />
            {file && (
                <div className="mt-4 h-[120px] space-y-2">
                    <div className="flex items-center space-x-2">
                        <img
                            src={URL.createObjectURL(file)}
                            alt="preview"
                            className="h-16 w-16 rounded object-cover"
                        />
                        <span>{file.name}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FileUploader;
