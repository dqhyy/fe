import React from "react";
import { Sun, HeartPulse } from "lucide-react";

const DashboardStaff = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const name = user?.name || "bạn";

  return (
    <div className="h-170 bg-linear-to-br from-blue-50 via-white to-purple-50 p-8 relative overflow-hidden">
      
      {/* DECOR */}
      <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-[-120px] right-[-120px] w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-40" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="backdrop-blur rounded-2xl p-10 text-center">
          
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
              <Sun className="text-blue-600" size={40} />
            </div>
          </div>

          {/* GREETING */}
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            Chào {name} 👋
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            Chúc bạn một ngày làm việc{" "}
            <span className="font-semibold text-blue-600">
              hiệu quả – tích cực – tràn đầy năng lượng
            </span>.
          </p>

          <div className="flex items-center justify-center gap-2 text-gray-500">
            <HeartPulse className="text-red-500" size={20} />
            <span>
              Cảm ơn bạn đã đồng hành cùng hệ thống chăm sóc sức khỏe
            </span>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-gray-400">
          “Mỗi ngày làm việc là một cơ hội để giúp đỡ và lan tỏa yêu thương.”
        </div>
      </div>
    </div>
  );
};

export default DashboardStaff;
