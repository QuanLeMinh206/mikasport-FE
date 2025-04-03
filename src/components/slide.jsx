import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slide1 from "@/assets/slide1.png";
import Slide2 from "@/assets/slide2.png";
import Slide3 from "@/assets/slide3.png";
import Slide4 from "@/assets/slide4.png";
import Slide5 from "@/assets/slide5.png";
const images = [Slide1, Slide2, Slide3, Slide4, Slide5];

const SlideShow = () => {
    return (
        <div className="relative h-[648px] w-full">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                className="h-full w-full"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={src}
                            alt={`Slide ${index + 1}`}
                            className="h-full w-full object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Arrows */}
            <button className="swiper-button-prev absolute left-4 top-1/2 flex h-[50px] w-[50px] -translate-y-1/2">
                <ChevronLeft className="text-primary" />
            </button>

            <button className="swiper-button-next absolute right-4 top-1/2 flex h-[50px] w-[50px] -translate-y-1/2 rounded-full">
                <ChevronRight className="text-primary" />
            </button>
        </div>
    );
};

export default SlideShow;
