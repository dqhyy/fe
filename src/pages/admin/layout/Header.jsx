import React, { useState, useEffect } from "react";
import { Bell } from "lucide-react";
import { Link } from 'react-router-dom';
import { getMyInfo } from '../../../services/authService';

const Header = () => {
    const [userInfo, setUserInfo] = useState({
        name: 'Admin',
        role: 'Quản trị viên',
        avatar: "https://ui-avatars.com/api/?name=Admin&background=random"
    });

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await getMyInfo();
                if (data) {
                    setUserInfo({
                        name: data.fullName || data.username,
                        role: 'Quản trị viên',
                        avatar: data.image ? `data:image/jpeg;base64,${data.image}` : `https://ui-avatars.com/api/?name=${encodeURIComponent(data.fullName || data.username || "Admin")}&background=random`
                    });
                }
            } catch (error) {
                console.error("Failed to fetch admin info", error);
            }
        };
        fetchUser();
    }, []);

    return (
        <header className="h-16 bg-white border-b flex items-center justify-between px-6 gap-4">
            <div>
                <Link to="/admin" className="flex items-center font-montserrat">
                    <img src="/logo.png" alt="HyCare Logo" className="w-10 h-auto mr-2" />
                    <span className="font-semibold text-2xl text-maincolor">Hy</span>
                    <span className="font-semibold text-2xl text-gray-700">Care</span>
                </Link>

            </div>

            <div className="flex items-center gap-3">
                <Bell className="text-gray-600" />
                <img
                    src={userInfo.avatar}
                    alt="avatar"
                    className="w-9 h-9 rounded-full object-cover"
                />
                <div>
                    <div className="text-sm font-semibold">{userInfo.name}</div>
                    <div className="text-xs text-gray-500">{userInfo.role}</div>
                </div>
            </div>
        </header>
    );
};

export default Header;
