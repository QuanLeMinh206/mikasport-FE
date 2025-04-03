import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { SortDropdown } from "@/components/sort-dropdown";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import FileUploader from "@/components/ui/file-uploader";
import { Button } from "@/components/ui/button";
import { ArrowDown, Star } from "lucide-react";
import avatar from "@/assets/profile-img.jpg";
import desc1 from "@/assets/desc1.png";
import main from "@/assets/main.png";
import desc2 from "@/assets/desc2.png";
import RatingSummary from "@/components/rating";
import StarRating from "@/components/star-rating";
export default function ProductTabs({ isLoggedIn }) {
    const [activeTab, setActiveTab] = useState("description");
    const productDetails = [
        "Regular Fit",
        "Round neck",
        "Mock Eyelet fabric made from 100% recycled polyester",
        "AEROREADY",
        "Reflective details",
        "Product color: Silver Green.",
    ];
    const [timeFilter, setTimeFilter] = useState("newest");
    const timeOptions = [
        { label: "Lowest", value: "lowest" },
        { label: "Newest", value: "newest" },
    ];
    return (
        <Card className="mt-[80px] w-full bg-white">
            <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
            >
                <TabsList className="flex gap-[90px]">
                    <TabsTrigger value="description">Description</TabsTrigger>
                    <TabsTrigger value="additional">Additional Information</TabsTrigger>
                    <TabsTrigger value="comment">Comment</TabsTrigger>
                </TabsList>
                <div className="sort-line w-full"></div>
                <TabsContent value="description">
                    <CardContent>
                        <div className="flex gap-[59px]">
                            <div className="desc flex w-[640px] flex-col gap-5">
                                <h5 className="title-desc text-[24px] font-semibold text-secondary">
                                    A breathable jogging t -shirt made from recycled materials.
                                </h5>
                                <p>
                                    Shine personality when exercising. The Run IT collection honors the spirit of expressing yourself, by helping you
                                    give your best to run the most effectively.
                                </p>
                                <p>
                                    Experience the optimal comfortable feeling with a jogging t -shirt for a smooth feeling on the skin even when the
                                    heat rise. Run IT T -shirt made from ultra -light and breathable material, helping you dry and comfortable from
                                    the beginning to the end of the run.{" "}
                                </p>
                                <p>
                                    Adidas Aeroready technology controls body sweat to help you feel dry longer. Reflective details help you stand out
                                    in low light, and the bold Performance logo showing your pride.
                                </p>
                                <p>
                                    By selecting recycling, we can reuse the created materials, thereby contributing to reducing waste and reducing
                                    dependence on finite resources.
                                </p>
                            </div>
                            <div className="h-[547px] w-[546px]">
                                <img
                                    src={desc1}
                                    className="h-[547px] w-[546px] object-cover"
                                    alt=""
                                />
                            </div>
                        </div>
                    </CardContent>
                </TabsContent>

                <TabsContent value="additional">
                    <CardContent>
                        <div className="flex gap-[59px]">
                            <div className="desc flex w-[640px] flex-col gap-5">
                                <ul className="list-disc space-y-1 pl-5 text-gray-700">
                                    {productDetails.map((detail, index) => (
                                        <li key={index}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="h-[547px] w-[546px]">
                                <img
                                    src={desc2}
                                    className="h-[547px] w-[546px] object-cover"
                                    alt=""
                                />
                            </div>
                        </div>
                    </CardContent>
                </TabsContent>

                <TabsContent value="comment">
                    <CardContent>
                        <RatingSummary />
                        <div className="sort-line mb-[48px] mt-[53px] w-full"></div>
                        <div className="comment-list">
                            <p className="text-[20px] font-semibold">Comment List </p>
                            <div className="sort mt-[41px] flex items-center justify-between">
                                <p>Showing 1-4 of 24 results</p>
                                <div className="flex items-center gap-2">
                                    {" "}
                                    <span>Sort by:</span>{" "}
                                    <SortDropdown
                                        className="w-[150px]"
                                        options={timeOptions}
                                        timeFilter={timeFilter}
                                        setTimeFilter={setTimeFilter}
                                    />
                                </div>
                            </div>
                            <div className="comment-item mt-[50px]">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-5">
                                        <img
                                            src={avatar}
                                            alt=""
                                            className="h-[60px] w-[60px] rounded-full border-4 border-primary object-cover"
                                        />
                                        <p className="text-[18px] font-semibold">Lewis Hamiton</p>
                                    </div>
                                    <p>February 25, 2025</p>
                                </div>
                                <div className="title mt-[46px] text-[18px] font-semibold text-secondary">Perfect fit and amazing looking wear</div>
                                <div className="desc mt-[29px] text-[16px] font-medium text-secondary">
                                    “ I wear this in gym and my long runs as it is comfortable and dry fit so it is sweat proof and feels light and
                                    moreover gives a smart look”
                                </div>
                                <div className="mt-[36px] flex gap-2">
                                    <Star className="text-yellow-500"></Star>
                                    <Star className="text-yellow-500"></Star>
                                    <Star className="text-yellow-500"></Star>
                                    <Star className="text-yellow-500"></Star>
                                    <span className="font-semibold text-secondary">5.0</span>
                                </div>
                                <div className="img mt-[47px] flex items-center gap-[26px]">
                                    <video
                                        controls
                                        className="h-[221px] w-[180px] rounded-[8px]"
                                    >
                                        <source
                                            src="/public/desc.mp4"
                                            type="video/mp4"
                                        />
                                    </video>
                                    <img
                                        src={main}
                                        alt=""
                                        className="h-[221px] w-[180px] rounded-[8px]"
                                    />
                                </div>
                            </div>
                            <div className="sort-line my-[62px] w-full"></div>{" "}
                            <div className="comment-item mt-[50px]">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-5">
                                        <img
                                            src={avatar}
                                            alt=""
                                            className="h-[60px] w-[60px] rounded-full border-4 border-primary object-cover"
                                        />
                                        <p className="text-[18px] font-semibold">Lee Chong Wei</p>
                                    </div>
                                    <p>February 25, 2025</p>
                                </div>
                                <div className="title mt-[46px] text-[18px] font-semibold text-secondary">Good fit highly recommend it for a 10K</div>
                                <div className="desc mt-[29px] text-[16px] font-medium text-secondary">
                                    “Quick drying and good fit and quite light on the body”
                                </div>
                                <div className="mt-[36px] flex gap-2">
                                    <Star className="text-yellow-500"></Star>
                                    <Star className="text-yellow-500"></Star>
                                    <Star className="text-yellow-500"></Star>
                                    <Star className="text-yellow-500"></Star>
                                    <span className="font-semibold text-secondary">5.0</span>
                                </div>
                                <div className="img mt-[47px] flex items-center gap-[26px]">
                                    <img
                                        src={main}
                                        alt=""
                                        className="h-[221px] w-[180px] rounded-[8px]"
                                    />
                                </div>
                            </div>
                            <div className="sort-line mb-[23px] mt-[62px] w-full"></div>{" "}
                            <button className="btn mx-auto h-[50px] w-[180px] rounded-[10px] border-primary bg-white font-semibold text-primary">
                                See more <ArrowDown className="ml-2" />
                            </button>
                        </div>{" "}
                        {isLoggedIn && (
                            <div className="mt-[74px]">
                                <h3 className="mb-[48px] text-lg font-semibold">Hi, Quan. Add your comment</h3>
                                <div className="flex flex-col gap-[40px]">
                                    <StarRating />
                                    <div>
                                        <label
                                            htmlFor="commentTitle"
                                            className="mb-[15px] block text-[18px] font-medium"
                                        >
                                            Add comment Title*
                                        </label>
                                        <Input
                                            id="commentTitle"
                                            placeholder="Write title here"
                                            className="bg-sub-cyan"
                                        />
                                    </div>{" "}
                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="mb-[15px] block text-[18px] font-medium"
                                        >
                                            Add comment detail*
                                        </label>
                                        <Textarea
                                            id="message"
                                            placeholder="Write your comment here..."
                                            className="bg-sub-cyan"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="mb-[15px] block text-[18px] font-medium"
                                        >
                                            Photo / Video (Optional) *
                                        </label>
                                        <FileUploader id="file" />
                                    </div>
                                    <button className="btn ml-auto mt-2 w-[120px] rounded-[12px]">Submit</button>
                                </div>
                            </div>
                        )}
                    </CardContent>
                </TabsContent>
            </Tabs>
        </Card>
    );
}
