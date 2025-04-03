import { useState } from "react";
import { useNavigate } from "react-router-dom";
import verifyImage from "@/assets/verify_code.png";
import logo from "@/assets/logo_mika.svg";

const VerifyCode = () => {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const navigate = useNavigate();

    const handleChange = (index, value) => {
        if (!isNaN(value) && value.length <= 1) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Entered OTP:", otp.join(""));
        navigate("/reset-password");
    };

    return (
        <div className="flex items-center justify-center bg-gray-100">
            <div className="flex w-[1440px] justify-between rounded-lg bg-white shadow-lg">
                {/* Left Block (Verify Code Form) */}
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
                        <h2 className="text-center text-[34px] font-semibold text-gray-800">Verify Code</h2>
                        <p className="mb-[50px] mt-3 text-center text-[16px] text-gray-500">
                            Please enter the code we just sent to email <span className="text-primary">lminhhquan@gmail.com</span>
                        </p>
                        <span className="text-[18px] font-semibold">Code*</span>
                        <div className="mt-[26px] flex justify-center gap-4">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength="1"
                                    value={digit}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    className="h-[60px] w-[60px] rounded-lg border text-center text-2xl font-medium"
                                />
                            ))}
                        </div>

                        <button
                            onClick={() => navigate("reset-password")}
                            className="btn mt-[50px] h-[62px] w-full rounded-[12px] bg-primary text-[20px] font-medium text-white"
                        >
                            Verify
                        </button>
                    </form>

                    <div className="mb-[314px] mt-4 text-center text-gray-500">
                        Didn’t receive code?
                        <span className="cursor-pointer text-primary hover:underline"> Resend code</span>
                    </div>
                </div>

                {/* Right Block (Image) */}
                <div className="flex w-[50%] items-center justify-center">
                    <img
                        src={verifyImage}
                        alt="Verify Code"
                        className="h-[1087px] w-full rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default VerifyCode;
