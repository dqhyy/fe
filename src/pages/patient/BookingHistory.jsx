import React, { useState } from "react";
import { Link } from "react-router-dom";
import { bookingHistory } from "../../assets/data/data";

const statusMap = {
  CONFIRMED: {
    label: "Đã xác nhận",
    color: "text-blue-600 bg-blue-50",
  },
  COMPLETED: {
    label: "Đã khám",
    color: "text-green-600 bg-green-50",
  },
  CANCELLED: {
    label: "Đã hủy",
    color: "text-red-600 bg-red-50",
  },
};

const BookingHistory = () => {
  const [filter, setFilter] = useState("ALL");

  const filteredBookings =
    filter === "ALL"
      ? bookingHistory
      : bookingHistory.filter((b) => b.status === filter);

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-semibold mb-6">Lịch sử đặt lịch</h2>

      {/* Filter */}
      <div className="flex gap-3 mb-6">
        {["ALL", "CONFIRMED", "COMPLETED", "CANCELLED"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-4 py-2 rounded-md text-sm font-medium border
              ${
                filter === item
                  ? "bg-maincolor text-white border-maincolor"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }
            `}
          >
            {item === "ALL"
              ? "Tất cả"
              : statusMap[item].label}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="space-y-4">
        {filteredBookings.map((booking) => (
          <div
            key={booking.id}
            className="border rounded-lg p-5 bg-white shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">
                  {booking.doctor} – {booking.specialty}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  {booking.date} • {booking.time}
                </p>
                <p className="text-gray-500 text-sm">
                  {booking.clinic}
                </p>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${statusMap[booking.status].color}`}
              >
                {statusMap[booking.status].label}
              </span>
            </div>

            <div className="flex justify-between items-center mt-4">
              <p className="text-gray-700 font-medium">
                Phí khám:{" "}
                <span className="text-maincolor">
                  {booking.price.toLocaleString()}đ
                </span>
              </p>

              <div className="flex gap-3">
                <Link
                  to={`/booking/${booking.id}`}
                  className="px-4 py-2 text-sm rounded-md border border-maincolor text-maincolor hover:bg-maincolor hover:text-white transition"
                >
                  Xem chi tiết
                </Link>

                {booking.status === "CONFIRMED" && (
                  <button className="px-4 py-2 text-sm rounded-md border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition">
                    Hủy lịch
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}

        {filteredBookings.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            Không có lịch đặt nào
          </p>
        )}
      </div>
    </div>
  );
};

export default BookingHistory;
