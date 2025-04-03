import { createBrowserRouter } from "react-router-dom";
import UserLayout from "@/pages/user-layout";
import Home from "@/pages/user/home";
import Shop from "@/pages/user/shop";
import ProductDetail from "@/pages/user/product-detail";
import Blog from "@/pages/user/blog";
import BlogDetail from "@/pages/user/blog-detail";

import Contact from "@/pages/user/contact";
import Login from "@/pages/user/login";
import Register from "@/pages/user/register";
import ForgotPassword from "@/pages/user/forgot-password";
import VerifyCode from "@/pages/user/verify-code";
import ResetPassword from "@/pages/user/reset-password";
import Cart from "@/pages/user/cart";
import Account from "@/pages/user/account";
import OrderTrackDetail from "@/pages/user/order-track-detail";
import OrderTrack from "@/pages/user/track";
import Wishlist from "@/pages/user/wishlist";
import Checkout from "@/pages/user/checkout";
import Payment from "@/pages/user/payment";
import OrderCompleted from "@/pages/user/order-completed";

const userRoutes = [
    {
        path: "/",
        element: <UserLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "shop", element: <Shop /> },
            { path: "shop/product-detail/:id", element: <ProductDetail /> },
            { path: "blog", element: <Blog /> },
            { path: "blog/blog-detail/:id", element: <BlogDetail /> },
            { path: "contact", element: <Contact /> },
            { path: "cart", element: <Cart /> },
            { path: "track", element: <OrderTrack /> },
            //account
            { path: "account", element: <Account /> },
            { path: "account/order", element: <Account /> },
            { path: "account/order/track", element: <OrderTrackDetail /> },
            { path: "account/password", element: <Account /> },
            { path: "account/address", element: <Account /> },
            { path: "account/logout", element: <Account /> },

            { path: "wishlist", element: <Wishlist /> },
            { path: "cart/checkout", element: <Checkout /> },
            { path: "cart/checkout/payment", element: <Payment /> },
            { path: "cart/checkout/payment/order-completed", element: <OrderCompleted /> },
        ],
    },
    // Tách riêng route login
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword />,
    },
    {
        path: "/forgot-password/verify-code",
        element: <VerifyCode />,
    },
    {
        path: "/forgot-password/verify-code/reset-password",
        element: <ResetPassword />,
    },
];

export default userRoutes;
