import React from "react";
import {
  Home,
  Calendar,
  Users,
  Stethoscope,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menus = [
    {
      label: "Dashboard",
      icon: <Home size={18} />,
      path: "/admin",
      end: true, 
    },
    {
      label: "Quản lý người dùng",
      icon: <Users size={18} />,
      path: "/admin/users",
    },
    {
      label: "Quản lý nhân sự",
      icon: <Users size={18} />,
      path: "/admin/humanresources",
    },
    {
      label: "Quản lý dịch vụ",
      icon: <Stethoscope size={18} />,
      path: "/admin/services",
    },
  ];

  return (
    <aside className="w-64 bg-white border-r min-h-screen">
      <aside className="w-64 bg-white border-r min-h-screen">
        <div className="px-6 py-4 font-bold text-xl text-maincolor">
          Admin Panel
        </div>

        <nav className="px-4 space-y-2">
          {menus.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition
                            ${isActive
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
      </aside>
    </aside>
  );
};

export default Sidebar;
