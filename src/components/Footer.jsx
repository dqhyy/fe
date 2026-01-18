import React from 'react';
import { Link } from 'react-router-dom';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="container mx-auto grid grid-cols-5 w-full pt-6 pb-20 px-10 gap-6 text-gray-700">

                <div className="flex flex-col items-center">
                    <img src="/logo.png" alt="HyCare Logo" className="h-20 w-auto mb-2" />
                    <h1 className="text-2xl font-bold text-maincolor">
                        Hy<span className="text-gray-700">Care</span>
                    </h1>
                </div>
                <div className="space-y-2">
                    <h2 className="font-semibold text-lg">Hệ thống HyCare</h2>
                    <ul className="space-y-1 text-sm">
                        <li>
                            <Link to="/about" className="hover:text-maincolor transition">Về HyCare</Link>
                        </li>
                        <li>
                            <Link to="/doctor" className="hover:text-maincolor transition">Chuyên gia y tế</Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-maincolor transition">Tầm nhìn sứ mệnh</Link>
                        </li>
                    </ul>
                </div>

                <div className="space-y-2">
                    <p className="font-semibold text-lg">Dịch vụ</p>
                    <ul className="space-y-1 text-sm">
                        <li>
                            <Link to="/specialties" className="hover:text-maincolor transition">Chuyên khoa</Link>
                        </li>
                        <li>
                            <Link to="/booking" className="hover:text-maincolor transition">Đặt lịch</Link>
                        </li>
                    </ul>
                </div>

                <div className="space-y-2">
                    <p className="font-semibold text-lg">Theo dõi chúng tôi</p>
                    <div className="flex items-center space-x-4 mt-2">
                        <a href="https://www.youtube.com/" aria-label="Youtube" className="text-red-600 hover:opacity-75 transition">
                            <YouTubeIcon fontSize="large" />
                        </a>
                        <a href="https://www.facebook.com/" aria-label="Facebook" className="text-blue-600 hover:opacity-75 transition">
                            <FacebookIcon fontSize="large" />
                        </a>
                        <a href="https://www.instagram.com/" aria-label="Instagram" className="text-pink-500 hover:opacity-75 transition">
                            <InstagramIcon fontSize="large" />
                        </a>
                        <a href="https://twitter.com/" aria-label="X" className="text-blue-600 hover:opacity-75 transition">
                            <XIcon fontSize="large" />
                        </a>
                    </div>
                </div>

                <div className="space-y-2">
                    <h2 className="text-lg font-semibold mb-2">Chứng nhận & Bảo vệ</h2>
                    <div className="flex flex-col space-y-4">
                        <a href="http://online.gov.vn/Home/WebDetails/9966" aria-label="Bộ công thương" className="block hover:opacity-80 transition">
                            <img src="/dmca.png" alt="Bộ Công Thương" className="w-40" />
                        </a>
                        <a href="https://www.dmca.com/Protection/Status.aspx" aria-label="DMCA" className="block hover:opacity-80 transition">
                            <img src="/gov.png" alt="DMCA" className="w-32" />
                        </a>
                    </div>
                </div>
            </div>

            <div className=" py-4 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
                    <p className="text-center md:text-left mb-3 md:mb-0">
                        © 2024 Công ty Cổ phần Bệnh viện Đa khoa Quốc tế HyCare
                    </p>
                    <ul className="flex flex-wrap justify-center md:justify-end gap-4">
                        <li>
                            <Link to="/privacy-policy" className="hover:text-blue-600 transition">
                                Chính sách bảo vệ dữ liệu
                            </Link>
                        </li>
                        <li>
                            <a href="https://www.google.com/intl/en/policies/privacy/" className="hover:text-blue-600 transition">
                                GR Privacy
                            </a>
                        </li>
                        <li>
                            <a href="https://www.google.com/intl/en/policies/terms/" className="hover:text-blue-600 transition">
                                GR Terms
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
