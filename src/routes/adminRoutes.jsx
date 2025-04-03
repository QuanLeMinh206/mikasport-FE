import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@/pages/Layout";
import DashboardPage from "@/pages/admin/page";
import { ThemeProvider } from "@/contexts/theme-context";

// Products
import ProductPage from "@/pages/admin/product";
import { NewProduct } from "@/pages/admin/new-product";
import { EditProduct } from "@/pages/admin/edit-product";

// Categories
import Categories from "@/pages/admin/categories";
import { NewCategory } from "@/pages/admin/new-category";
import { EditCategory } from "@/pages/admin/edit-category";

// Orders
import OrderPage from "@/pages/admin/order";
import UpdateOrder from "@/pages/admin/update-order";

// Users & Comments
import Users from "@/pages/admin/users";
import Comments from "@/pages/admin/comments";

// Blogs
import Blogs from "@/pages/admin/blogs";
import NewBlog from "@/pages/admin/new-blog";
import EditBlog from "@/pages/admin/edit-blog";

// Promotions
import Promotions from "@/pages/admin/promotions";
import NewPromotion from "@/pages/admin/new-promotion";
import EditPromotion from "@/pages/admin/edit-promotion";

// Vouchers
import Vouchers from "@/pages/admin/vouchers";
import NewVoucher from "@/pages/admin/new-voucher";
import EditVoucher from "@/pages/admin/edit-voucher";

const adminRoutes = [
    {
        path: "/admin",
        element: <Layout />,
        children: [
            // Dashboard
            { index: true, element: <DashboardPage /> },

            // Products
            { path: "products", element: <ProductPage /> },
            { path: "products/new", element: <NewProduct /> },
            { path: "products/edit/:id", element: <EditProduct /> },

            // Categories
            { path: "categories", element: <Categories /> },
            { path: "categories/new", element: <NewCategory /> },
            { path: "categories/edit/:id", element: <EditCategory /> },

            // Orders
            { path: "orders", element: <OrderPage /> },
            { path: "orders/update/:id", element: <UpdateOrder /> },

            // Users & Comments
            { path: "users", element: <Users /> },
            { path: "comments", element: <Comments /> },

            // Blogs
            { path: "blogs", element: <Blogs /> },
            { path: "blogs/new", element: <NewBlog /> },
            { path: "blogs/edit/:id", element: <EditBlog /> },

            // Promotions
            { path: "promotions", element: <Promotions /> },
            { path: "promotions/new", element: <NewPromotion /> },
            { path: "promotions/edit/:id", element: <EditPromotion /> },

            // Vouchers
            { path: "vouchers", element: <Vouchers /> },
            { path: "vouchers/new", element: <NewVoucher /> },
            { path: "vouchers/edit/:id", element: <EditVoucher /> },
        ],
    },
];
export default adminRoutes;
