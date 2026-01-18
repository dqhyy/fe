import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import { specialties } from '../assets/data/data.js';

import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

import { getMyInfo } from '../services/authService';

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
    const profileDropdownRef = useRef(null);
    const navigate = useNavigate();

    const [userRole, setUserRole] = useState(localStorage.getItem('hycare_user_role'));
    const [avatarUrl, setAvatarUrl] = useState(null);

    const fetchUserInfo = async () => {
        const userInfo = await getMyInfo();
        if (userInfo) {
            if (userInfo.image) {
                setAvatarUrl(`data:image/jpeg;base64,${userInfo.image}`);
            } else {
                setAvatarUrl(`https://ui-avatars.com/api/?name=${encodeURIComponent(userInfo.fullName || userInfo.username || "User")}&background=random`);
            }
        } else {
            setAvatarUrl(null);
        }
    };

    useEffect(() => {
        const handleStorageChange = () => {
            setUserRole(localStorage.getItem('hycare_user_role'));
            fetchUserInfo();
        };

        if (localStorage.getItem('hycare_token')) {
            fetchUserInfo();
        }

        window.addEventListener('authChange', handleStorageChange);
        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('authChange', handleStorageChange);
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
                setProfileDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('hycare_token');
        localStorage.removeItem('hycare_user_id');
        localStorage.removeItem('hycare_user_name');
        localStorage.removeItem('hycare_user_role');
        setAvatarUrl(null);

        window.dispatchEvent(new Event('authChange'));

        navigate('/login');
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-20 bg-white">
            <div className="shadow-md">
                <div className="container mx-auto h-16 flex items-center justify-between ">
                    <Link to="/" className="flex items-center font-montserrat">
                        <img src="/logo.png" alt="HyCare Logo" className="w-10 h-auto mr-2" />
                        <span className="font-semibold text-2xl text-maincolor">Hy</span>
                        <span className="font-semibold text-2xl text-gray-700">Care</span>
                    </Link>

                    <div className="flex-1 mx-4 flex">
                        <div className="container mx-auto flex justify-center gap-20 text-gray-700 h-12 items-center">
                            <Link to="/" className="hover:text-maincolor transition-colors">Trang chủ</Link>

                            <div
                                className="relative cursor-pointer select-none"
                                onMouseEnter={() => setActiveMenu(0)}
                                onMouseLeave={() => setActiveMenu(null)}
                            >
                                <span className="hover:text-maincolor transition-colors flex items-center gap-1">
                                    Chuyên khoa
                                </span>

                                <div
                                    className={`absolute left-1/2 -translate-x-1/2 mt-3 bg-white shadow-lg rounded-md border border-gray-200 z-20
    transition-all duration-200 ease-in-out
    ${activeMenu === 0 ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}
  `}
                                >
                                    <div className="absolute top-[-7px]  left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-gray-200 rotate-45 "></div>

                                    <div className={`grid ${specialties.length > 1 ? 'grid-cols-2 gap-x-6 w-[520px]' : 'grid-cols-1 w-64'} py-3 px-2`}>
                                        {specialties.map((col, colIdx) => (
                                            <ul key={colIdx} className="space-y-1">
                                                {col.map((item, i) => (
                                                    <li
                                                        key={i}
                                                        className="px-3 py-2 text-gray-700 text-sm hover:text-maincolor border-b border-gray-100 transition-colors"
                                                    >
                                                        <Link to={item.link} className="block w-full">
                                                            {item.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        ))}
                                    </div>
                                </div>

                            </div>

                            <Link to="/booking" className="hover:text-maincolor transition-colors">Đặt lịch</Link>
                            <Link to="/professionals" className="hover:text-maincolor transition-colors">Chuyên gia y tế</Link>
                            <Link to="/about" className="hover:text-maincolor transition-colors">Giới thiệu</Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        {userRole === 'ADMIN' && (
                            <Link to="/admin" className="text-maincolor hover:text-gray-700 transition-colors" title="Quản trị hệ thống">
                                <AdminPanelSettingsIcon fontSize="medium" />
                            </Link>
                        )}

                        {userRole === 'DOCTOR' && (
                            <Link to="/doctor" className="text-maincolor hover:text-gray-700 transition-colors" title="Trang bác sĩ">
                                <AdminPanelSettingsIcon fontSize="medium" />
                            </Link>
                        )}

                        <button className="text-maincolor hover:text-gray-700 transition-colors">
                            <NotificationsIcon fontSize="medium" />
                        </button>

                        <div className="relative" ref={profileDropdownRef}>
                            <button
                                className="flex items-center text-maincolor hover:text-gray-700 transition-colors"
                                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                            >
                                {avatarUrl ? (
                                    <img
                                        src={avatarUrl}
                                        alt="Avatar"
                                        className="w-8 h-8 rounded-full object-cover border border-gray-200"
                                    />
                                ) : (
                                    <AccountCircleIcon fontSize="medium" />
                                )}
                                <ArrowDropDownIcon fontSize="medium" />
                            </button>

                            {profileDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200 z-30">
                                    <div className="py-1">
                                        <Link
                                            to="/myprofile"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                            onClick={() => setProfileDropdownOpen(false)}
                                        >
                                            Hồ sơ
                                        </Link>
                                        <Link
                                            to="/myprofile/bookinghistory"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                            onClick={() => setProfileDropdownOpen(false)}
                                        >
                                            Lịch sử đặt lịch
                                        </Link>
                                        <Link
                                            to="/myprofile/medicalresults"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                            onClick={() => setProfileDropdownOpen(false)}
                                        >
                                            Kết quả khám bệnh
                                        </Link>

                                        {userRole === 'ADMIN' && (
                                            <Link
                                                to="/admin"
                                                className="block px-4 py-2 text-sm text-maincolor font-medium hover:bg-gray-100 transition-colors border-t border-gray-100"
                                                onClick={() => setProfileDropdownOpen(false)}
                                            >
                                                Quản trị hệ thống
                                            </Link>
                                        )}

                                        {userRole === 'DOCTOR' && (
                                            <Link
                                                to="/doctor"
                                                className="block px-4 py-2 text-sm text-maincolor font-medium hover:bg-gray-100 transition-colors border-t border-gray-100"
                                                onClick={() => setProfileDropdownOpen(false)}
                                            >
                                                Trang bác sĩ
                                            </Link>
                                        )}

                                        <button
                                            onClick={handleLogout}
                                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors flex items-center gap-2 border-t border-gray-100"
                                        >
                                            <LogoutIcon fontSize="small" />
                                            Đăng xuất
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
