import Breadcrumb from "@/components/breadcrumb";
import blog from "@/assets/blog-detail.png";
import blog2 from "@/assets/blog-detail2.png";
import blog3 from "@/assets/blog-detail3.png";
import blog4 from "@/assets/blog-detail4.png";
import avatar from "@/assets/profile-img.jpg";
import ServiceFeatures2 from "@/components/service-features2";
import NewBlog from "@/components/new-blog";
const BlogDetail = () => {
    return (
        <div className=" ">
            <div className="flex h-[350px] flex-col items-center justify-center gap-[20px] bg-sub-cyan">
                <div className="title-page">Our Blog</div>
                <Breadcrumb />
            </div>

            <div className="content mt-[84px]">
                <div>
                    <img
                        src={blog}
                        alt=""
                        className="h-full"
                    />
                </div>
                {/* Tiêu đề bài viết */}
                <div className="flex flex-col items-center">
                    <h1 className="mt-[37px] text-3xl font-bold">Barcelona thrash Real 5-2 in Spanish Super Cup thriller</h1>

                    <div className="flex flex-col items-center justify-between">
                        <div className="mt-8 flex items-center gap-5">
                            <img
                                src={avatar}
                                alt=""
                                className="h-[60px] w-[60px] rounded-full border-4 border-primary object-cover"
                            />
                        </div>
                        <div className="mt-3 text-center">
                            {" "}
                            <p className="text-[18px] font-semibold">Written by Lee Chong Wei</p>
                            <p> 12 Jan 2025 | 7 min read</p>
                        </div>
                    </div>
                </div>

                {/* Ảnh chính */}
                <div className="mt-[76px] flex justify-center gap-7">
                    <p className="text-[18px] font-semibold leading-[38px] text-primary">
                        On January 12, 2025, at the King Abdullah Sports City Stadium in Jeddah, Saudi Arabia, Barcelona secured a commanding 5-2
                        victory over Real Madrid in the Spanish Super Cup Final.
                    </p>
                    <img
                        src={blog3}
                        alt="Barcelona vs Real Madrid"
                        className="w-full max-w-4xl rounded-lg shadow-lg"
                    />
                </div>

                {/* Nội dung bài viết */}
                <div className="mt-[65px] space-y-6 text-lg text-gray-700">
                    <h2 className="text-2xl font-semibold">Match Highlights:</h2>
                    <ul className="list-disc space-y-2 pl-6">
                        <li>
                            Early on, Real Madrid’s Kylian Mbappé opened the scoring in the 8th minute, showcasing his speed and finishing skills.
                        </li>
                        <li>
                            Barcelona’s Lamine Yamal equalized in the 22nd minute with a left-footed shot from the center of the box, assisted by
                            Robert Lewandowski.
                        </li>
                        <li className="flex justify-center">
                            <img
                                src={blog2}
                                alt=""
                            />
                        </li>
                        <li>
                            Penalty Drama: Robert Lewandowski put Barcelona ahead in the 39th minute, converting a penalty after Eduardo Camavinga
                            fouled Gavi in the box.
                        </li>
                        <li>Raphinha extended the lead with a header in the 73rd minute, making it 3-1.</li>
                        <li>
                            Real Madrid fought back as Mbappé scored his second goal in the 65th minute, but Ferran Torres and João Félix sealed the
                            win for Barcelona with two late goals.
                        </li>
                    </ul>
                    <div className="flex justify-center">
                        <img
                            src={blog4}
                            alt=""
                        />
                    </div>
                    <h2 className="text-2xl font-semibold">Post-Match Reactions:</h2>
                    <p>
                        Barcelona’s head coach Xavi Hernández praised his team’s tactical execution, while Carlo Ancelotti admitted Real Madrid
                        struggled defensively. Fans worldwide hailed the match as one of the best in recent Spanish Super Cup history.
                    </p>
                </div>
                <div className="my-[120px]">
                    <h4 className="mb-2.5 text-center text-[18px] font-semibold text-secondary">Related Blog</h4>
                    <h2 className="mb-[60px] text-center text-[42px] font-semibold text-secondary">Latest Related Blogs</h2>
                    <NewBlog />
                </div>
                {/* Ảnh bổ sung */}
            </div>
            <ServiceFeatures2 />
        </div>
    );
};

export default BlogDetail;
