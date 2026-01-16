import React from "react";
import {
  Home,
  Calendar,
  Users,
  Stethoscope,
  SquareUserRound,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menus = [
    {
      label: "Hồ sơ cá nhân",
      icon: <SquareUserRound size={18} />,
      path: "/myprofile",
      end: true,
    },
    {
      label: "Lịch sử đặt lịch",
      icon: <Calendar size={18} />,
      path: "/myprofile/bookinghistory",
    },
    {
      label: "Kết quả khám bệnh",
      icon: <Users size={18} />,
      path: "/myprofile/medicalresults",
    },
  ];

  return (
    <div className="w-64 bg-white min-h-screen">
      <div className="px-6 py-4 font-bold text-xl text-maincolor">
        Thông tin cá nhân
      </div>

      <nav className="px-4 space-y-2">
        {menus.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.end}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition
              ${
                isActive
                  ? "bg-maincolor text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            {item.icon}
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
