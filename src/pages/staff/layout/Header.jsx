import React, { useEffect, useState } from "react";
import { Bell } from "lucide-react";
import { Link } from 'react-router-dom';
import { getMyInfo } from '../../../services/authService';

const Header = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await getMyInfo();
                setUser(userData);
            } catch (error) {
                console.error("Failed to fetch user info", error);
            }
        };
        fetchUser();
    }, []);

    const getUserName = () => {
        if (user && user.fullName) return user.fullName;
        return localStorage.getItem("hycare_user_name") || "Nhân viên";
    };

    const getUserRole = () => {
        // Translate role if needed
        return "Nhân viên y tế";
    };

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
                {user && user.image ? (
                    <img
                        src={`data:image/jpeg;base64,${user.image}`}
                        alt="avatar"
                        className="w-9 h-9 rounded-full object-cover"
                    />
                ) : (
                    <div className="w-9 h-9 rounded-full bg-maincolor text-white flex items-center justify-center font-bold">
                        {getUserName().charAt(0)}
                    </div>
                )}
                <div>
                    <div className="text-sm font-semibold">{getUserName()}</div>
                    <div className="text-xs text-gray-500">{getUserRole()}</div>
                </div>
            </div>
        </header>
    );
};

export default Header;
