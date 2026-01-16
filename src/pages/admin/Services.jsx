import React, { useState, useMemo } from "react";
import { services, specialties } from "../../assets/data/data";

const STATUS_LABEL = {
  ACTIVE: "Hoạt động",
  INACTIVE: "Ngưng hoạt động",
};

const Services = () => {
  const allSpecialties = specialties.flat();

  const [category, setCategory] = useState("ALL");
  const [specialty, setSpecialty] = useState("ALL");
  const [status, setStatus] = useState("ALL");
  const [requireDoctor, setRequireDoctor] = useState("ALL");

  const filteredServices = useMemo(() => {
    return services.filter((s) => {
      if (category !== "ALL" && s.category !== category) return false;
      if (specialty !== "ALL" && s.specialty !== specialty) return false;
      if (status !== "ALL" && s.status !== status) return false;
      if (
        requireDoctor !== "ALL" &&
        s.requireDoctor !== (requireDoctor === "true")
      )
        return false;
      return true;
    });
  }, [category, specialty, status, requireDoctor]);

  const resetFilter = () => {
    setCategory("ALL");
    setSpecialty("ALL");
    setStatus("ALL");
    setRequireDoctor("ALL");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header + Filters */}
      <div className="p-4 mb-6">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          {/* Filters */}
          <div className="flex flex-wrap gap-4">
            {/* Danh mục */}

            {/* Khoa chuyên môn */}
            <select
              className="border rounded-lg px-3 py-2 text-sm"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
            >
              <option value="ALL">Chuyên khoa</option>
              {allSpecialties.map((s) => (
                <option key={s.label} value={s.label}>
                  {s.label}
                </option>
              ))}
            </select>

            {/* Trạng thái */}
            <select
              className="border rounded-lg px-3 py-2 text-sm"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="ALL">Trạng thái</option>
              <option value="ACTIVE">Hoạt động</option>
              <option value="INACTIVE">Ngưng hoạt động</option>
            </select>

            {/* Chỉ định bác sĩ */}
            <select
              className="border rounded-lg px-3 py-2 text-sm"
              value={requireDoctor}
              onChange={(e) => setRequireDoctor(e.target.value)}
            >
              <option value="ALL">Chỉ định của bác sĩ</option>
              <option value="true">Cần chỉ định</option>
              <option value="false">Không cần</option>
            </select>

            <button
              onClick={resetFilter}
              className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-100"
            >
              Bỏ lọc
            </button>

            <button className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-100">
              🔄 Làm mới
            </button>
          </div>

          {/* Add service */}
          <button className="bg-teal-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-teal-600">
            + Thêm dịch vụ
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-4 py-3">Mã</th>
              <th className="px-4 py-3">Tên</th>
              <th className="px-4 py-3">Giá</th>
              <th className="px-4 py-3">Danh mục</th>
              <th className="px-4 py-3">Khoa</th>
              <th className="px-4 py-3">Trạng thái</th>
              <th className="px-4 py-3">Cần chỉ định BS</th>
              <th className="px-4 py-3">Hành động</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {filteredServices.map((s) => (
              <tr key={s.code}>
                <td className="px-4 py-3 font-medium">{s.code}</td>
                <td className="px-4 py-3">{s.name}</td>
                <td className="px-4 py-3">
                  {s.price.toLocaleString()} VND
                </td>
                <td className="px-4 py-3">{s.category}</td>
                <td className="px-4 py-3">{s.specialty}</td>
                <td className="px-4 py-3">
                  <span className="text-green-600 font-semibold">
                    {STATUS_LABEL[s.status]}
                  </span>
                </td>
                <td className="px-4 py-3">
                  {s.requireDoctor ? "Cần" : "Không cần"}
                </td>
                <td className="px-4 py-3 flex gap-2">
                  <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">
                    ✏️ Sửa
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600">
                    🗑 Xóa
                  </button>
                </td>
              </tr>
            ))}

            {filteredServices.length === 0 && (
              <tr>
                <td
                  colSpan="8"
                  className="text-center py-6 text-gray-400"
                >
                  Không có dịch vụ phù hợp
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Services;
