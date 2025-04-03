import { Outlet } from "react-router-dom";
import Header from "@/layouts/user-header";
import { Footer } from "@/layouts/user-footer";
import Noticed from "@/components/noticed";

const UserLayout = () => {
    return (
        <div className="flex min-h-screen flex-col">
            {/* Header */}
            <Noticed />
            <Header />

            {/* Nội dung chính */}
            <main className="flex-grow">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default UserLayout;
