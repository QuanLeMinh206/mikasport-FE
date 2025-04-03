import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Logout = () => {
    const navigate = useNavigate();
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const handleLogout = () => {
        setIsLoggingOut(true);
        setTimeout(() => {
            // Xử lý đăng xuất, có thể xóa token hoặc gọi API đăng xuất
            navigate("/login");
        }, 1000);
    };

    return (
        <div className="mb-[75px] flex h-[500px]">
            <div className=" ">
                <h2 className="mb-4 text-[20px] font-semibold">Logout</h2>
                <p className="mb-4 text-gray-600">Are you sure you want to log out?</p>
                <button
                    onClick={handleLogout}
                    className="btn rounded-md px-6 py-2"
                    disabled={isLoggingOut}
                >
                    {isLoggingOut ? "Logging out..." : "Yes, log out"}
                </button>
            </div>
        </div>
    );
};

export default Logout;
