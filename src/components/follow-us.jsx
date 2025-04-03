import { FaTwitter, FaYoutube, FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";
import Social1 from "@/assets/social1.png";
import Social2 from "@/assets/social2.png";
import Social3 from "@/assets/social3.png";
import Social4 from "@/assets/social4.png";
import Social5 from "@/assets/social5.png";
const socialLinks = [
    { icon: <FaTwitter className="h-[70px] w-[70px]" />, image: Social1, link: "https://twitter.com" },
    { icon: <FaYoutube className="h-[70px] w-[70px]" />, image: Social2, link: "https://youtube.com" },
    { icon: <FaInstagram className="h-[70px] w-[70px]" />, image: Social3, link: "https://instagram.com" },
    { icon: <FaFacebookF className="h-[70px] w-[70px]" />, image: Social4, link: "https://facebook.com" },
    { icon: <FaPinterestP className="h-[70px] w-[70px]" />, image: Social5, link: "https://pinterest.com" },
];

const FollowUs = () => {
    return (
        <section className="mt-[120px] bg-sub-cyan py-[108px]">
            <h4 className="mb-2.5 text-center text-[18px] font-semibold text-secondary">Follow Us</h4>
            <h2 className="mb-[60px] text-center text-[42px] font-semibold text-secondary">Follow Us On Social</h2>

            <div className="mt-[65px] flex justify-center gap-[35px]">
                {socialLinks.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative h-[290px] w-[290px]"
                    >
                        <div className="relative flex items-center justify-center">
                            {" "}
                            <img
                                src={item.image}
                                alt="Social Media"
                                className="h-[290px] w-[290px] rounded-[20px] object-cover hover:blur-sm"
                            />
                            <div className="left-50% top-50% absolute text-white transition-colors hover:text-primary">{item.icon}</div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default FollowUs;
