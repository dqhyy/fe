import React from "react";
import { Bell } from "lucide-react";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="h-16 bg-white border-b flex items-center justify-between px-6 gap-4">
            <div>
                <Link to="/staff" className="flex items-center font-montserrat">
                    <img src="/logo.png" alt="HyCare Logo" className="w-10 h-auto mr-2" />
                    <span className="font-semibold text-2xl text-maincolor">Hy</span>
                    <span className="font-semibold text-2xl text-gray-700">Care</span>
                </Link>

            </div>

            <div className="flex items-center gap-3">
                <Bell className="text-gray-600" />
                <img
                    src="https://i.pravatar.cc/40"
                    alt="avatar"
                    className="w-9 h-9 rounded-full"
                />
                <div>
                    <div className="text-sm font-semibold">Huy Đỗ</div>
                    <div className="text-xs text-gray-500">Lễ tân</div>
                </div>
            </div>
        </header>
    );
};

export default Header;
