import React from "react";

import {
  LayoutDashboard,
  CalendarCheck,
  ClipboardCheck,
  Receipt,
  MessageSquare,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menus = [
  {
    label: "Dashboard",
    icon: <LayoutDashboard size={18} />,
    path: "/staff",
    end: true,
  },
  {
    label: "Lịch hẹn",
    icon: <CalendarCheck size={18} />,
    path: "/staff/appointments",
  },
  {
    label: "Tiếp nhận",
    icon: <ClipboardCheck size={18} />,
    path: "/staff/check-in",
  },
  {
    label: "Hóa đơn",
    icon: <Receipt size={18} />,
    path: "/staff/invoices",
  },
  {
    label: "Chat bệnh nhân",
    icon: <MessageSquare size={18} />,
    path: "/staff/chat",
  },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r min-h-screen">
      <div className="px-6 py-4 font-bold text-xl text-maincolor">
        Staff Panel
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
    </aside>
  );
};

export default Sidebar;
