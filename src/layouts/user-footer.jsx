import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import Bct from "@/assets/bocongthuong.png";
import Logo from "@/assets/logo_mika2.svg";
export const Footer = () => {
    return (
        <footer className="bg-secondary pb-[77px] pt-[77px] text-white">
            <div className="content">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {/* Cột 1 - Logo & Mạng xã hội */}
                    <div>
                        <div>
                            {" "}
                            <img
                                src={Logo}
                                alt=""
                            />
                        </div>
                        <p className="mt-10 text-sm italic">"Never give up, keep pushing forward. Believe in yourself and your abilities!"</p>
                        <div className="mb-[55px] mt-5 flex gap-5">
                            <FaFacebook className="h-[25px] w-[25px] cursor-pointer hover:text-primary" />
                            <FaYoutube className="h-[25px] w-[30px] cursor-pointer hover:text-primary" />
                            <FaInstagram className="h-[25px] w-[25px] cursor-pointer hover:text-primary" />
                        </div>
                        <img
                            src={Bct}
                            alt="Bộ Công Thương"
                            className=""
                        />
                    </div>

                    {/* Cột 2 - Store */}
                    <div>
                        <h3 className="footer-heading">Store</h3>
                        <ul className="mt-3 space-y-[18px] text-[16px]">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-primary"
                                >
                                    About us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-primary"
                                >
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-primary"
                                >
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-primary"
                                >
                                    Career
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Cột 3 - Customer Services */}
                    <div>
                        <h3 className="footer-heading">Customer Services</h3>
                        <ul className="mt-3 space-y-[18px] text-[16px]">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-primary"
                                >
                                    My Account
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-primary"
                                >
                                    Track Your Order
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-primary"
                                >
                                    Return
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-primary"
                                >
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="footer-heading">Our Information</h3>
                        <ul className="mt-3 space-y-[18px] text-[16px]">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-primary"
                                >
                                    Privacy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-primary"
                                >
                                    User Terms & Condition
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-primary"
                                >
                                    Return Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Cột 4 - Contact Info */}
                    <div>
                        <h3 className="footer-heading">Contact Info</h3>
                        <p className="my-[18px] mt-3 text-[16px]">+84 378 585 205</p>
                        <p className="my-[18px] mt-3 text-[16px]">mikasport@gmail.com</p>
                        <p className="my-[18px] mt-3 text-[16px]">24 To Ky, 12 District, TP HCM</p>
                        <iframe
                            className="rounded-lg"
                            width="100%"
                            height="170"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62695.08362265313!2d106.54957774863281!3d10.8538924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b6c59ba4c97%3A0x535e784068f1558b!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1svi!2s!4v1743154069679!5m2!1svi!2s"
                        />
                    </div>
                </div>
                <div className="mt-[50px] h-[1px] w-full bg-cyan-100"></div>
            </div>
        </footer>
    );
};
