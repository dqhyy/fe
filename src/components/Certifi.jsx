import React from "react";
import EastIcon from "@mui/icons-material/East";
import { Link } from "react-router-dom";
import { certifies } from "../assets/data/data";

const Certifi = () => {
  return (
    <div className="bg-maincolor py-14">
      <div className="container mx-auto px-6 text-white">

        <h1 className="font-bold text-3xl">
          Chứng nhận và giải thưởng
        </h1>
        <div className="mt-2 h-1 w-24 bg-white mb-6"></div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-white/90 leading-relaxed mb-6">
              HyCare tự hào được các tổ chức y tế uy tín trong và ngoài nước
              công nhận về chất lượng dịch vụ, tiêu chuẩn an toàn và hiệu quả
              trong chăm sóc sức khỏe cộng đồng.
            </p>

            <Link
              to="/certifications"
              className="inline-flex items-center gap-2 font-medium hover:underline"
            >
              Xem thêm
              <EastIcon fontSize="small" />
            </Link>
          </div>

         
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {certifies.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-sm p-4 flex items-center justify-center shadow-sm hover:shadow-md transition"
              >
                <img
                  src={item}
                  alt={`Chứng nhận ${index + 1}`}
                  className="max-h-15 object-contain"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Certifi;
