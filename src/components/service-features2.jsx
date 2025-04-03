import { Headphones, Truck, CreditCard } from "lucide-react";

const ServiceFeatures2 = () => {
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
        <section className="mb-[120px] flex h-[260px] items-center bg-sub-cyan">
            <div className="content">
                <div className="flex items-center justify-between">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex items-center rounded-[25px]"
                        >
                            <div className="flex items-center justify-center gap-2.5">
                                {" "}
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">{service.icon}</div>
                                <div>
                                    {" "}
                                    <h3 className="text-lg font-semibold text-secondary">{service.title}</h3>
                                    <p className="mt-[6px] text-desc">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceFeatures2;
