import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-110 flex items-center justify-center bg-bgcolor px-4">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-bold text-maincolor mb-4">404</h1>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Trang không tồn tại
        </h2>

        <p className="text-gray-600 mb-6">
          Trang bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
        </p>

        <Link
          to="/"
          className="inline-block bg-maincolor text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Quay về trang chủ
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
