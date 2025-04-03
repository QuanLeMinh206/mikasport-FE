import Breadcrumb from "@/components/breadcrumb";
import ServiceFeatures2 from "@/components/service-features2";

const ContactUs = () => {
    return (
        <div>
            <div className="flex h-[350px] flex-col items-center justify-center gap-[20px] bg-sub-cyan">
                <div className="title-page">Contact Us</div>
                <Breadcrumb />
            </div>
            <div className="content mb-[120px] mt-[50px] flex justify-between">
                {/* Contact Form */}
                <div className="w-[60%] rounded-[8px] border p-[25px]">
                    <h2 className="mb-8 text-lg font-semibold">Contact Information</h2>
                    <div className="mb-[45px] flex justify-between">
                        <div className="">
                            <label className="form-title mb-2 block">Name *</label>
                            <input
                                type="text"
                                className="h-[50px] w-[335px] rounded-[8px] border p-2"
                                placeholder="Your name"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="form-title mb-2 block">Email *</label>
                            <input
                                type="email"
                                className="h-[50px] w-[335px] rounded-[8px] border p-2"
                                placeholder="example@gmail.com"
                            />
                        </div>
                    </div>
                    <div className="mb-[45px]">
                        <label className="form-title mb-2 block">Subject *</label>
                        <input
                            type="text"
                            className="h-[50px] w-full rounded-[8px] border p-2"
                            placeholder="Enter subject"
                        />
                    </div>
                    <div className="mb-[45px]">
                        <label className="form-title mb-2 block">Your message *</label>
                        <textarea
                            className="h-[200px] w-full rounded-[8px] border p-2 outline-none focus:border-primary"
                            placeholder="Enter here..."
                        ></textarea>
                    </div>
                    <button className="btn mt-[10px] h-[50px] rounded-[8px] bg-primary text-white">Send message</button>
                </div>

                {/* Contact Information */}
                <div className="bg-light-gray flex w-[35%] flex-col gap-[60px] rounded-[8px] bg-sub-cyan p-[25px]">
                    <div>
                        <h3 className="text-[22px] font-semibold">Address</h3>
                        <p className="mb-4 text-gray-600">24 To Ky, 12 District, Ho Chi Minh City</p>
                    </div>
                    <div>
                        <h3 className="text-[22px] font-semibold">Contact</h3>
                        <p className="text-gray-600">Phone: +84 378 585 203</p>
                        <p className="text-gray-600">Email: lminhhquan@gmail.com</p>
                    </div>

                    <div>
                        <h3 className="mt-4 text-[22px] font-semibold">Open time</h3>
                        <p className="text-gray-600">Monday - Friday: 8 a.m - 20 p.m</p>
                        <p className="text-gray-600">Saturday - Sunday: 10 a.m - 17 p.m</p>
                    </div>

                    <div>
                        <h3 className="mt-4 text-lg font-semibold">Stay Connected</h3>
                        <div className="mt-2 flex gap-4">
                            <i className="fab fa-facebook text-2xl text-primary"></i>
                            <i className="fab fa-instagram text-2xl text-primary"></i>
                            <i className="fab fa-youtube text-2xl text-primary"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-[72px]">
                <iframe
                    width="100%"
                    height="274"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62695.08362265313!2d106.54957774863281!3d10.8538924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b6c59ba4c97%3A0x535e784068f1558b!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1svi!2s!4v1743154069679!5m2!1svi!2s"
                />
            </div>{" "}
            <ServiceFeatures2 />
        </div>
    );
};

export default ContactUs;
