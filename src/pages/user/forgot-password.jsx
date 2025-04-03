import { useState } from "react";
import { useNavigate } from "react-router-dom";
import forgotImage from "@/assets/forgot_password.png";
import logo from "@/assets/logo_mika.svg";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Reset Password Email:", email);
    };

    return (
        <div className="flex items-center justify-center bg-gray-100">
            <div className="flex w-[1440px] justify-between rounded-lg bg-white shadow-lg">
                {/* Left Block (Forgot Password Form) */}
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
                        <h2 className="text-center text-[34px] font-semibold text-gray-800">Forgot Password ?</h2>
                        <p className="mb-[50px] mt-3 text-center text-[16px] text-gray-500">Don’t worry, we’ll send you reset instructions</p>
                        <div className="mt-[26px]">
                            <label className="mb-[14px] block font-medium text-secondary">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="h-[55px] w-full rounded-[12px] border p-3"
                                placeholder="Enter email here"
                                required
                            />
                        </div>
                        <button
                            onClick={() => navigate("verify-code")}
                            className="btn mt-[50px] h-[62px] w-full rounded-[12px] bg-primary text-[20px] font-medium text-white"
                        >
                            Submit
                        </button>
                    </form>
                    <div className="mb-[314px] mt-4 text-center text-gray-500">
                        Remember password?
                        <span
                            className="cursor-pointer text-primary hover:underline"
                            onClick={() => navigate("/login")}
                        >
                            Sign in
                        </span>
                    </div>
                </div>

                {/* Right Block (Image) */}
                <div className="flex w-[50%] items-center justify-center">
                    <img
                        src={forgotImage}
                        alt="Forgot Password"
                        className="h-[1087px] w-full rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
