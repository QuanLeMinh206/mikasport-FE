import { Search, ShoppingBag, Heart, User, Menu } from "lucide-react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { navbarUserLinks } from "@/constants/index";
import Logo from "@/assets/logo_mika.svg";
import VietFlag from "@/assets/viet-flag.png";
import EngFlag from "@/assets/eng-flag.png";
import { useState, useEffect, useRef } from "react";

const Header = () => {
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isUserOpen, setIsUserOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const langDropdownRef = useRef(null);
    const userDropdownRef = useRef(null);
    const mobileMenuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
                setIsLangOpen(false);
            }
            if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
                setIsUserOpen(false);
            }
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isMobileMenuOpen]);

    //login
    const navigate = useNavigate();
    return (
        <header className="bg-white">
            <div className="content">
                <div className="container mx-auto flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a
                            href="/"
                            className="text-2xl font-bold text-primary"
                        >
                            <img
                                src={Logo}
                                alt="logo"
                            />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <Menu size={24} />
                    </button>

                    {/* Menu Navigation (Hidden on Mobile) */}
                    <nav className="hidden gap-[40px] text-[20px] font-medium lg:flex">
                        {navbarUserLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) => `text-secondary hover:text-primary ${isActive ? "font-bold text-primary" : ""}`}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Right icons */}
                    <div className="flex items-center gap-5">
                        {/* Language Toggle */}
                        <div
                            className="relative"
                            ref={langDropdownRef}
                        >
                            <button
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className="rounded-lg border px-3 py-1 text-sm"
                            >
                                ENG
                            </button>
                            {isLangOpen && (
                                <div className="absolute mt-3 flex h-[156px] w-[200px] flex-col items-center gap-4 rounded-lg border border-gray-300 bg-white shadow-lg">
                                    <button className="mt-4 flex h-[53px] w-[155px] justify-between gap-2 rounded-lg border border-l border-primary p-2 hover:bg-gray-100">
                                        <img
                                            src={VietFlag}
                                            alt="Vietnamese Flag"
                                            className="h-[35px] w-[50px]"
                                        />
                                        <span className="text-[20px] font-semibold text-primary">VIE</span>
                                    </button>
                                    <button className="flex h-[53px] w-[155px] justify-between gap-2 rounded-lg border border-l bg-primary p-2 hover:border-primary hover:bg-sub-cyan hover:text-primary">
                                        <img
                                            src={EngFlag}
                                            alt="English Flag"
                                            className="h-[35px] w-[50px]"
                                        />
                                        <span className="text-[20px] font-semibold text-white hover:text-primary">ENG</span>
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Icons */}

                        <Link to="/track">
                            <button className="text-gray-700 hover:text-primary">
                                <Search size={24} />
                            </button>
                        </Link>

                        <Link to="/cart">
                            <button className="text-gray-700 hover:text-primary">
                                <ShoppingBag size={24} />
                            </button>{" "}
                        </Link>
                        <Link to="/wishlist">
                            <button className="text-gray-700 hover:text-primary">
                                <Heart size={24} />
                            </button>
                        </Link>

                        <div
                            className="relative"
                            ref={userDropdownRef}
                        >
                            <button
                                className="text-gray-700 hover:text-primary"
                                onClick={() => setIsUserOpen(!isUserOpen)}
                            >
                                <User size={24} />
                            </button>
                            {isUserOpen && (
                                <div className="absolute right-0 mt-3 flex w-[200px] flex-col items-center gap-4 rounded-lg border border-gray-300 bg-white shadow-lg">
                                    <button
                                        className="mt-4 w-[150px] cursor-pointer rounded-lg border border-primary p-3 text-[18px] font-medium text-primary hover:bg-gray-100"
                                        onClick={() => navigate("/login")}
                                    >
                                        Login
                                    </button>
                                    <button
                                        className="mb-4 mt-2 w-[150px] rounded-lg bg-primary p-3 text-[18px] font-medium text-white hover:bg-sub-cyan"
                                        onClick={() => navigate("/register")}
                                    >
                                        Register
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div
                        ref={mobileMenuRef}
                        className="absolute left-0 top-16 z-10 w-full bg-white p-4 shadow-md lg:hidden"
                    >
                        <nav className="flex flex-col gap-4">
                            {navbarUserLinks.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    className={({ isActive }) => `text-secondary hover:text-primary ${isActive ? "font-bold text-primary" : ""}`}
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
