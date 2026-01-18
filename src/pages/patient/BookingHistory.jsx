import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPatientAppointments } from "../../services/patientService";

const statusMap = {
  PENDING: {
    label: "Chờ xác nhận",
    color: "text-amber-600 bg-amber-50",
  },
  CONFIRMED: {
    label: "Đã xác nhận",
    color: "text-blue-600 bg-blue-50",
  },
  FINISHED: {
    label: "Đã khám",
    color: "text-green-600 bg-green-50",
  },
  REJECTED: {
    label: "Đã từ chối",
    color: "text-red-600 bg-red-50",
  },
  CANCELLED: {
    label: "Đã hủy",
    color: "text-red-600 bg-red-50",
  }
};

const BookingHistory = () => {
  const [filter, setFilter] = useState("ALL");
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const data = await getPatientAppointments();
      setAppointments(data);
    } catch (error) {
      console.error("Failed to fetch appointments:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredBookings =
    filter === "ALL"
      ? appointments
      : appointments.filter((b) => b.status === filter);

  if (loading) return <div className="text-center py-10">Đang tải...</div>;

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-semibold mb-6">Lịch sử đặt lịch</h2>

      {/* Filter */}
      <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
        {["ALL", "PENDING", "CONFIRMED", "FINISHED", "REJECTED"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-4 py-2 rounded-md text-sm font-medium border whitespace-nowrap
              ${filter === item
                ? "bg-maincolor text-white border-maincolor"
                : "bg-white text-gray-600 hover:bg-gray-100"
              }
            `}
          >
            {item === "ALL"
              ? "Tất cả"
              : statusMap[item]?.label || item}
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
                  {booking.doctorName || "Bác sĩ"} – {booking.specialty}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  {booking.appointmentDate || "N/A"}
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Lý do: {booking.reasonForVisit}
                </p>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${statusMap[booking.status]?.color || 'bg-gray-100'}`}
              >
                {statusMap[booking.status]?.label || booking.status}
              </span>
            </div>

            <div className="flex justify-between items-center mt-4">
              <p className="text-gray-700 font-medium">
                {/* Price is not in API yet, hiding or showing placeholder */}
              </p>

              <div className="flex gap-3">
                {/* Link to detail if available */}
                {/* 
                <Link
                  to={`/booking/${booking.id}`}
                  className="px-4 py-2 text-sm rounded-md border border-maincolor text-maincolor hover:bg-maincolor hover:text-white transition"
                >
                  Xem chi tiết
                </Link>
                */}

                {booking.status === "PENDING" && (
                  <button className="px-4 py-2 text-sm rounded-md border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition"
                    onClick={() => alert("Tính năng hủy chưa được cập nhật")}
                  >
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
