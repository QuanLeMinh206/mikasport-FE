import { useState } from "react";
import { X } from "lucide-react"; // Import icon X từ thư viện lucide-react

const Noticed = () => {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
        <div className="from-primary to-secondary h-[70px] bg-gradient-to-r text-white">
            <div className="content">
                {" "}
                <div className="my-auto mt-6 flex items-center justify-between text-[18px]">
                    <span>Support : 0378 585 205</span>
                    <span>
                        Sign up and <strong>GET 30% OFF</strong> for your first order.{" "}
                        <a
                            href="#"
                            className="text-primary hover:underline"
                        >
                            Sign up now!
                        </a>
                    </span>
                    <button
                        onClick={() => setVisible(false)}
                        className="text-white"
                    >
                        <X size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Noticed;
