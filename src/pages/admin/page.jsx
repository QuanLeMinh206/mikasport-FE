import { CreditCard, DollarSign, Package, TrendingUp, Star, Users, PencilLine, Trash2 } from "lucide-react";
import { ResponsiveContainer, AreaChart, Tooltip, Area, XAxis, YAxis, BarChart, Bar } from "recharts";
import { monthlyData, categoryData, recentSalesData, topProductsData } from "@/constants/index";
import { SortDropdown } from "@/components/sort-dropdown";
import { useState } from "react";

import { useTheme } from "@/hooks/use-theme";
import { Footer } from "@/layouts/footer";
const DashboardPage = () => {
    const { theme } = useTheme();
    const [timeFilter, setTimeFilter] = useState("day");
    const timeOptions = [
        { label: "Day", value: "day" },
        { label: "Month", value: "month" },
        { label: "Year", value: "year" },
    ];
    return (
        <div className="mx-4 flex flex-col gap-y-4">
            <div className="mt-4 flex items-center justify-between">
                <h1 className="title">Dashboard</h1>
                <SortDropdown
                    options={timeOptions}
                    timeFilter={timeFilter}
                    setTimeFilter={setTimeFilter}
                />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className="card">
                    <div className="card-header">
                        <div className="dark:bg-cyan-60 w-fit rounded-lg bg-cyan-500/20 p-2 text-cyan-500 transition-colors dark:text-cyan-600">
                            <Package size={26} />
                        </div>
                        <p className="card-title">Total Orders</p>
                    </div>
                    <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                        <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">25,12</p>

                        <span className="dark:bg-cyan-60 flex w-fit items-center gap-x-2 rounded-full border border-cyan-600 px-2 py-1 font-medium text-cyan-500 dark:text-cyan-600">
                            <TrendingUp size={16} />
                            25%
                        </span>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <div className="w-fit rounded-lg bg-cyan-500/20 p-2 text-cyan-500 transition-colors dark:bg-cyan-600/20 dark:text-cyan-600">
                            <DollarSign size={26} />
                        </div>
                        <p className="card-title">Total Earnings</p>
                    </div>
                    <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                        <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">25,12</p>

                        <span className="dark:bg-cyan-60 flex w-fit items-center gap-x-2 rounded-full border border-cyan-600 px-2 py-1 font-medium text-cyan-500 dark:text-cyan-600">
                            <TrendingUp size={16} />
                            25%
                        </span>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <div className="w-fit rounded-lg bg-cyan-500/20 p-2 text-cyan-500 transition-colors dark:bg-cyan-600/20 dark:text-cyan-600">
                            <Users size={26} />
                        </div>
                        <p className="card-title">Total Users</p>
                    </div>
                    <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                        <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">25,12</p>

                        <span className="dark:bg-cyan-60 flex w-fit items-center gap-x-2 rounded-full border border-cyan-600 px-2 py-1 font-medium text-cyan-500 dark:text-cyan-600">
                            <TrendingUp size={16} />
                            25%
                        </span>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <div className="w-fit rounded-lg bg-cyan-500/20 p-2 text-cyan-500 transition-colors dark:bg-cyan-600/20 dark:text-cyan-600">
                            <CreditCard size={26} />
                        </div>
                        <p className="card-title">Total Products</p>
                    </div>
                    <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                        <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">25,12</p>

                        <span className="dark:bg-cyan-60 flex w-fit items-center gap-x-2 rounded-full border border-cyan-600 px-2 py-1 font-medium text-cyan-500 dark:text-cyan-600">
                            <TrendingUp size={16} />
                            25%
                        </span>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7">
                <div className="card col-span-1 md:col-span-2 lg:col-span-4">
                    <div className="card-header">
                        <p className="card-title">Overview</p>
                    </div>
                    <div className="card-body p-0">
                        <ResponsiveContainer
                            width="100%"
                            height={300}
                        >
                            <AreaChart
                                data={monthlyData}
                                margin={0}
                            >
                                <defs>
                                    <linearGradient
                                        id="colorTotal"
                                        x1="0"
                                        y1="0"
                                        x2="0"
                                        y2="1"
                                    >
                                        <stop
                                            offset="5%"
                                            stopColor="#0aaec6"
                                            stopOpacity={0.8}
                                        />
                                        <stop
                                            offset="95%"
                                            stopColor="#0aaec6"
                                            stopOpacity={0}
                                        />
                                    </linearGradient>
                                </defs>
                                <Tooltip formatter={(value) => `${(value / 1_000_000).toFixed(2)} tr`} />

                                <XAxis
                                    dataKey="name"
                                    strokeWidth={1}
                                    stroke={theme === "light" ? "#475569" : "#94a3b8"}
                                />
                                <YAxis
                                    dataKey="total"
                                    strokeWidth={1}
                                    stroke={theme === "light" ? "#475569" : "#94a3b8"}
                                    tickFormatter={(value) => `${(value / 1_000_000).toFixed(1)} tr`}
                                    tickMargin={6}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="total"
                                    stroke="#0aaec6"
                                    fillOpacity={1}
                                    fill="url(#colorTotal)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="card col-span-1 md:col-span-2 lg:col-span-3">
                    <div className="card-header">
                        <p className="card-title">Categories Top</p>
                    </div>
                    <div className="card-body p-0">
                        <ResponsiveContainer
                            width="100%"
                            height={300}
                        >
                            <BarChart
                                data={categoryData}
                                margin={{ top: 10, right: 20, left: 0, bottom: 5 }}
                            >
                                <XAxis
                                    dataKey="name"
                                    stroke={theme === "light" ? "#475569" : "#94a3b8"}
                                />
                                <YAxis stroke={theme === "light" ? "#475569" : "#94a3b8"} />
                                <Tooltip formatter={(value) => `${value} đơn`} />
                                <Bar
                                    dataKey="orders"
                                    fill=" #0aaec6"
                                    radius={[5, 5, 0, 0]}
                                    barSize={65}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="card col-span-1 md:col-span-2 lg:col-span-3">
                    <div className="card-header">
                        <p className="card-title">Recent Sales</p>
                    </div>
                    <div className="card-body h-[300px] overflow-auto p-0">
                        {recentSalesData.map((sale) => (
                            <div
                                key={sale.id}
                                className="flex items-center justify-between gap-x-4 py-2 pr-2"
                            >
                                <div className="flex items-center gap-x-4">
                                    <img
                                        src={sale.image}
                                        alt={sale.name}
                                        className="size-10 flex-shrink-0 rounded-full object-cover"
                                    />
                                    <div className="flex flex-col gap-y-2">
                                        <p className="font-medium text-slate-900 dark:text-slate-50">{sale.name}</p>
                                        <p className="dark:text-slate-480 text-sm text-slate-600">{sale.email}</p>
                                    </div>{" "}
                                </div>
                                <p className="font-medium text-slate-900 dark:text-slate-50">
                                    <p>{sale.total.toLocaleString("vi-VN")} ₫</p>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <p className="card-title">Top orders</p>
                </div>
                <div className="card-body p-0">
                    <div className="relative h-[500px] w-full flex-shrink-0 overflow-auto rounded-none [scrollbar-width:_thin]">
                        <table className="table">
                            <thead className="table-header">
                                <tr className="table-row">
                                    <th className="table-head">#</th>
                                    <th className="table-head">Product</th>
                                    <th className="table-head">Price</th>
                                    <th className="table-head">Status</th>
                                    <th className="table-head">Rating</th>
                                    <th className="table-head">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="table-body">
                                {topProductsData.map((product) => (
                                    <tr
                                        key={product.number}
                                        className="table-row"
                                    >
                                        <td className="table-cell">{product.number}</td>
                                        <td className="table-cell">
                                            <div className="flex w-max gap-x-4">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="h-[70px] w-[56px] rounded-lg object-cover"
                                                />
                                                <div className="flex flex-col">
                                                    <p className="">{product.name}</p>
                                                    <p className="font-normal text-slate-600 dark:text-slate-400">{product.description}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="table-cell">{product.price.toLocaleString("vi-VN")} ₫</td>
                                        <td className="table-cell">{product.status}</td>
                                        <td className="table-cell">
                                            <div className="flex items-center gap-x-2">
                                                <Star
                                                    size={18}
                                                    className="fill-yellow-600 stroke-yellow-600"
                                                />{" "}
                                                {product.rating}
                                            </div>
                                        </td>
                                        <td className="table-cell">
                                            <div className="flex items-center gap-x-4">
                                                <button className="text-cyan-500 dark:text-cyan-600">
                                                    <PencilLine />
                                                </button>
                                                <button className="text-cyan-500 dark:text-cyan-600">
                                                    <Trash2 />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default DashboardPage;
