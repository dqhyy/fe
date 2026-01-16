import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
    return (
        <div className="flex min-h-screen flex-col">
            <div className="mb-16">
                <Navbar />
            </div>
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default PublicLayout;
