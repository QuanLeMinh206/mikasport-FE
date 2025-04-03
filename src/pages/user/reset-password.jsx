import { useState } from "react";
import { useNavigate } from "react-router-dom";
import resetImage from "@/assets/reset_password.png";
import logo from "@/assets/logo_mika.svg";
import { Eye, EyeOff } from "lucide-react";

const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword((prev) => !prev);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log("New Password Set:", password);
        navigate("/login");
    };

    return (
        <div className="flex items-center justify-center bg-gray-100">
            <div className="flex w-[1440px] justify-between rounded-lg bg-white shadow-lg">
                {/* Left Block (Reset Password Form) */}
                <div className="ml-[75px] flex flex-col justify-center">
                    <div className="logo mt-[180px] flex justify-center">
                        <img
                            src={logo}
                            className="w-[200px]"
                            alt="Logo"
                        />
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="mx-[25px] mt-[55px] w-[530px]"
                    >
                        <h2 className="text-center text-[34px] font-semibold text-gray-800">Set new password</h2>
                        <p className="mb-[50px] mt-3 text-center text-[16px] text-gray-500">Must be at least 8 characters</p>

                        <div className="mt-[26px]">
                            <label className="mb-[14px] block font-medium text-secondary">Password *</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="h-[55px] w-full rounded-[12px] border p-3 pr-12"
                                    placeholder="Enter password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        <div className="mt-[26px]">
                            <label className="mb-[14px] block font-medium text-secondary">Confirm Password *</label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="h-[55px] w-full rounded-[12px] border p-3 pr-12"
                                    placeholder="Enter password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={toggleConfirmPasswordVisibility}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                >
                                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        <button className="btn mt-[50px] h-[62px] w-full rounded-[12px] bg-primary text-[20px] font-medium text-white">Reset</button>
                    </form>
                </div>

                {/* Right Block (Image) */}
                <div className="flex w-[50%] items-center justify-center">
                    <img
                        src={resetImage}
                        alt="Reset Password"
                        className="h-[1087px] w-full rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
