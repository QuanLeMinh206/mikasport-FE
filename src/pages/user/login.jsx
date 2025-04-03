import { useState } from "react";
import { useNavigate } from "react-router-dom";
import login from "@/assets/login.png";
import logo from "@/assets/logo_mika.svg";
import { Eye, EyeOff } from "lucide-react";
import goggle from "@/assets/goggle.png";
import facebook from "@/assets/facebook.png";
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Data:", formData);
    };

    return (
        <div className="">
            <div className="flex items-center justify-center bg-gray-100">
                <div className="flex w-[1440px] justify-between rounded-[12px] bg-white">
                    {/* Left Block (Login Form) */}
                    <div className="ml-[75px] flex flex-col justify-center border">
                        <div className="logo flex justify-center">
                            <img
                                src={logo}
                                className="w-[228px]"
                            />
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="mx-[25px] mt-[55px] w-[530px]"
                        >
                            {" "}
                            <h2 className="text-center text-[34px] font-semibold text-gray-800">Login</h2>
                            <p className="text-medium mt-[24px] text-center text-[18px] text-gray-500">Welcome back! Please enter your details.</p>
                            <div className="my-[26px]">
                                <label className="mb-[14px] block font-medium text-secondary">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="h-[60px] w-full rounded-[12px] border p-3"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <div>
                                <label className="mb-[14px] block font-medium text-secondary">Password</label>

                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="h-[60px] w-full rounded-[12px] border p-3 pr-12" // Thêm padding phải để tránh icon che chữ
                                        placeholder="Enter your password"
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

                                <div className="mt-2 text-right">
                                    <a
                                        href="/forgot-password"
                                        className="text-[14px] text-primary hover:underline"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <button className="btn mt-[30px] h-[62px] w-full rounded-[10px] text-[20px] font-medium">Sign In</button>
                        </form>
                        <div className="text-center text-gray-500">
                            {" "}
                            <div className="ml-[33px] mt-[30px] h-[1px] w-[520px] bg-gray-300"></div>
                            <div className="mt-[28px] flex items-center justify-center gap-[56px]">
                                <button className="flex items-center gap-3 rounded-[10px] border border-gray-300 px-3 py-3">
                                    <img
                                        src={goggle}
                                        alt=""
                                        className="h-[30px] w-[30px]"
                                    />
                                    <span>Sign in with Google</span>
                                </button>
                                <button className="flex items-center gap-3 rounded-[10px] border border-gray-300 px-3 py-3">
                                    <img
                                        src={facebook}
                                        alt=""
                                        className="h-[30px] w-[30px]"
                                    />
                                    <span>Sign in with Facebook</span>
                                </button>
                            </div>
                            <div className="mt-[40px]">
                                <p>
                                    {" "}
                                    Don't have an account?{" "}
                                    <span
                                        className="cursor-pointer text-primary"
                                        onClick={() => navigate("/register")}
                                    >
                                        Sign in
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Block (Image & Text) */}
                    <div className="flex w-[50%] flex-col items-center justify-center">
                        <img
                            src={login}
                            alt="Community"
                            className="h-[1078px] w-full rounded-[12px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
