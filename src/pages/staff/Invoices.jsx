import React, { useState } from "react";
import { CheckCircle, CreditCard, User, FileText } from "lucide-react";

/* ===== MOCK DATA ===== */
const patients = [
  {
    id: 1,
    name: "Nguyễn Hoàng Long",
    age: 27,
    gender: "Nam",
    phone: "0909123456",
    cccd: "123456",
    records: [
      {
        id: 101,
        visitDate: "2026-01-10",
        doctor: "BS. Võ Thị Ánh",
        status: "Đã khám xong",
        fee: 750000,
        paid: false,
        services: [
          { name: "Khám chuyên khoa", price: 300000 },
          { name: "Đo thị lực", price: 150000 },
          { name: "Thuốc điều trị", price: 300000 },
        ],
      },
      {
        id: 102,
        visitDate: "2026-01-05",
        doctor: "BS. Lê Thị Hương",
        status: "Đã khám xong",
        fee: 550000,
        paid: true,
        services: [{ name: "Khám tổng quát", price: 550000 }],
      },
    ],
  },
  {
    id: 2,
    name: "Trần Thị Mai",
    age: 32,
    gender: "Nữ",
    phone: "0911222333",
    cccd: "123456",
    records: [
      {
        id: 201,
        visitDate: "2026-01-12",
        doctor: "BS. Nguyễn Văn An",
        status: "Đang chờ",
        fee: 400000,
        paid: false,
        services: [{ name: "Khám tim mạch", price: 400000 }],
      },
    ],
  },
];

const Invoices = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [activeTab, setActiveTab] = useState("info");
  const [payingRecord, setPayingRecord] = useState(null);

  const confirmPayment = () => {
    setSelectedPatient({
      ...selectedPatient,
      records: selectedPatient.records.map((r) =>
        r.id === payingRecord.id ? { ...r, paid: true } : r
      ),
    });
    setPayingRecord(null);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-xl font-semibold mb-6">Hồ sơ & Thanh toán</h1>

      <div className="grid grid-cols-3 gap-6">
        {/* ===== PATIENT LIST ===== */}
        <div className="bg-white rounded shadow p-4">
          <h2 className="font-semibold mb-3">Danh sách bệnh nhân</h2>
          <ul className="space-y-2">
            {patients.map((p) => (
              <li
                key={p.id}
                onClick={() => {
                  setSelectedPatient(p);
                  setActiveTab("info");
                }}
                className={`p-3 rounded cursor-pointer border ${
                  selectedPatient?.id === p.id
                    ? "bg-blue-50 border-blue-400"
                    : "hover:bg-gray-50"
                }`}
              >
                <p className="font-medium">{p.name}</p>
                <p className="text-sm text-gray-500">Tuổi: {p.age}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== RECORD LIST ===== */}
        <div className="col-span-2 bg-white rounded shadow p-4">
          {!selectedPatient ? (
            <p className="text-gray-500 text-center py-20">
              Chọn bệnh nhân để xem chi tiết
            </p>
          ) : (
            <>
              {/* ===== TABS ===== */}
              <div className="flex border-b mb-4">
                <button
                  onClick={() => setActiveTab("info")}
                  className={`px-4 py-2 flex items-center gap-1 ${
                    activeTab === "info"
                      ? " text-maincolor font-medium"
                      : "text-gray-500"
                  }`}
                >
                  <User size={16} /> Thông tin bệnh nhân
                </button>

                <button
                  onClick={() => setActiveTab("records")}
                  className={`px-4 py-2 flex items-center gap-1 ${
                    activeTab === "records"
                      ? "text-maincolor font-medium"
                      : "text-gray-500"
                  }`}
                >
                  <FileText size={16} /> Lịch sử khám bệnh
                </button>
              </div>

              {/* ===== TAB CONTENT ===== */}
              {activeTab === "info" && (
                <div className="space-y-3">
                  <p>
                    <b>Họ tên:</b> {selectedPatient.name}
                  </p>
                  <p>
                    <b>Tuổi:</b> {selectedPatient.age}
                  </p>
                  <p>
                    <b>Giới tính:</b> {selectedPatient.gender}
                  </p>
                  <p>
                    <b>CCCD:</b> {selectedPatient.cccd}
                  </p>
                  <p>
                    <b>Số điện thoại:</b> {selectedPatient.phone}
                  </p>
                  <p>
                    <b>Số lần khám:</b>{" "}
                    {selectedPatient.records.length}
                  </p>
                </div>
              )}

              {activeTab === "records" && (
                <table className="w-full text-sm">
                  <thead className="bg-blue-50 text-left">
                    <tr>
                      <th className="px-3 py-2">Ngày khám</th>
                      <th className="px-3 py-2">Bác sĩ</th>
                      <th className="px-3 py-2">Trạng thái</th>
                      <th className="px-3 py-2">Chi phí</th>
                      <th className="px-3 py-2">Thanh toán</th>
                      <th className="px-3 py-2 text-center">Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedPatient.records.map((r) => (
                      <tr key={r.id} className="border-t">
                        <td className="px-3 py-2">{r.visitDate}</td>
                        <td className="px-3 py-2">{r.doctor}</td>
                        <td className="px-3 py-2">{r.status}</td>
                        <td className="px-3 py-2">
                          {r.fee.toLocaleString()} đ
                        </td>
                        <td className="px-3 py-2">
                          {r.paid ? (
                            <span className="text-green-600 font-medium">
                              Đã thanh toán
                            </span>
                          ) : (
                            <span className="text-red-600 font-medium">
                              Chưa thanh toán
                            </span>
                          )}
                        </td>
                        <td className="px-3 py-2 text-center">
                          {!r.paid && (
                            <button
                              onClick={() => setPayingRecord(r)}
                              className="text-blue-600 flex items-center gap-1 mx-auto"
                            >
                              <CreditCard size={16} />
                              Thanh toán
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </>
          )}
        </div>
      </div>

      {/* ===== PAYMENT MODAL ===== */}
      {payingRecord && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded w-full max-w-md">
            <h2 className="font-semibold mb-3">Chi tiết thanh toán</h2>

            <ul className="mb-4 space-y-2">
              {payingRecord.services.map((s, index) => (
                <li key={index} className="flex justify-between">
                  <span>{s.name}</span>
                  <span>{s.price.toLocaleString()} đ</span>
                </li>
              ))}
            </ul>

            <p className="font-semibold text-right mb-4">
              Tổng: {payingRecord.fee.toLocaleString()} đ
            </p>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setPayingRecord(null)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Hủy
              </button>
              <button
                onClick={confirmPayment}
                className="px-4 py-2 bg-green-600 text-white rounded flex items-center gap-1"
              >
                <CheckCircle size={16} />
                Xác nhận thanh toán
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Invoices;
