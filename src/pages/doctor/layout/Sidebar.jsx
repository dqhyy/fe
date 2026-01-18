import React from "react";
import {
  Home,
  Calendar,
  Users,
  LogOut,
  User,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const menus = [
    {
      label: "Dashboard",
      icon: <Home size={18} />,
      path: "/doctor",
      end: true,
    },
    {
      label: "Lịch làm việc",
      icon: <Calendar size={18} />,
      path: "/doctor/appointments",
    },
    {
      label: "Danh sách bệnh nhân",
      icon: <Users size={18} />,
      path: "/doctor/patients",
    },
    {
      label: "Thông tin cá nhân",
      icon: <User size={18} />,
      path: "/doctor/doctorprofile",
    },
  ];

  const handleLogout = () => {
    // TODO: clear auth (token/session)
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <aside className="w-64 bg-white border-r min-h-screen flex flex-col">
      {/* HEADER */}
      <div className="px-6 py-4 font-bold text-xl text-maincolor">
        Doctor Panel
      </div>

      {/* MENU */}
      <nav className="px-4 space-y-2 flex-1">
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

      {/* LOGOUT */}
      <div className="px-4 py-4 border-t">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg
                     text-red-600 font-medium hover:bg-red-50 transition"
        >
          <LogOut size={18} />
          Đăng xuất
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
