import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
const ManagePassword = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState({
        current: false,
        new: false,
        confirm: false,
    });

    const togglePasswordVisibility = (field) => {
        setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
    };

    const [formData, setFormData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Password Update Data:", formData);
    };

    return (
        <div className="mb-[120px] flex items-center justify-center">
            <div className="w-full">
                <form
                    onSubmit={handleSubmit}
                    className=""
                >
                    {/* Current Password */}
                    <div className="mb-[32px]">
                        <label className="mb-2.5 block text-[18px] font-semibold text-gray-700">Current Password *</label>
                        <div className="relative">
                            <input
                                type={showPassword.current ? "text" : "password"}
                                name="currentPassword"
                                value={formData.currentPassword}
                                onChange={handleChange}
                                className="h-[60px] w-full rounded-md border p-3"
                                placeholder="Enter current password"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => togglePasswordVisibility("current")}
                                className="absolute right-4 top-[30%] -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            >
                                {showPassword.current ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                            <div className="mt-4 text-right">
                                <a
                                    href="/forgot-password"
                                    className="text-[16px] font-semibold text-primary hover:underline"
                                >
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* New Password */}
                    <div className="mb-[45px]">
                        <label className="mb-2.5 block text-[18px] font-semibold text-gray-700">New Password</label>
                        <div className="relative">
                            <input
                                type={showPassword.new ? "text" : "password"}
                                name="newPassword"
                                value={formData.newPassword}
                                onChange={handleChange}
                                className="h-[60px] w-full rounded-md border p-3 pr-12"
                                placeholder="Enter new password"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => togglePasswordVisibility("new")}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            >
                                {showPassword.new ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div className="mb-5">
                        <label className="mb-2.5 block text-[18px] font-semibold text-gray-700">Confirm Password</label>
                        <div className="relative">
                            <input
                                type={showPassword.confirm ? "text" : "password"}
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="h-[60px] w-full rounded-md border p-3 pr-12"
                                placeholder="Confirm new password"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => togglePasswordVisibility("confirm")}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            >
                                {showPassword.confirm ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button className="btn mt-[40px] w-[165px] rounded-[12px]">Update changes</button>
                </form>
            </div>
        </div>
    );
};

export default ManagePassword;
