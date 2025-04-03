import { Headphones, Truck, CreditCard } from "lucide-react";

const ServiceFeatures = () => {
    const services = [
        {
            icon: <Headphones size={32} />,
            title: "24x7 Support",
            description: "We support online all days",
        },
        {
            icon: <Truck size={32} />,
            title: "Free Shipping",
            description: "Free shipping for order above 500k",
        },
        {
            icon: <CreditCard size={32} />,
            title: "Flexible Payment",
            description: "Multiple secure payment options",
        },
    ];

    return (
        <section className="flex h-[554px] items-center bg-white">
            <div className="content">
                <div className="flex items-center justify-center gap-[96px]">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex h-[314px] w-[270px] flex-col items-center gap-[24px] rounded-[25px] bg-transparent p-6 text-center transition-all duration-300 hover:scale-105 hover:bg-white hover:p-8 hover:shadow-lg"
                        >
                            <div className="bg-primary flex h-16 w-16 items-center justify-center rounded-full text-white">{service.icon}</div>
                            <h3 className="text-secondary mt-4 text-lg font-semibold">{service.title}</h3>
                            <p className="text-desc mt-2">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceFeatures;
