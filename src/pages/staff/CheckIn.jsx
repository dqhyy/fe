import React, { useState } from "react";
import { Trash2, CheckCircle, PlusCircle } from "lucide-react";
import { specialties, doctors } from "../../assets/data/data";

/* ===== FLATTEN SPECIALTIES ===== */
const flatSpecialties = specialties.flat().map((s) => ({
  label: s.label,
  key: s.link.replace("/specialties/", ""),
}));

/* ===== MOCK PATIENT DATA (BỆNH NHÂN CŨ) ===== */
const patients = [
  {
    id: 1,
    cccd: "012345678901",
    fullName: "Nguyễn Văn A",
    age: 45,
  },
  {
    id: 2,
    cccd: "098765432109",
    fullName: "Trần Thị B",
    age: 30,
  },
];

/* ===== INITIAL CHECKIN ===== */
const initialCheckIns = [
  {
    id: 1,
    fullName: "Nguyễn Hoàng Long",
    age: 27,
    specialty: "Trung tâm mắt",
    specialtyKey: "ophthalmology",
    doctor: "BS. Võ Thị Ánh",
    date: "2026-01-20",
    status: "Đang chờ",
  },
];

const CheckIn = () => {
  const today = new Date().toISOString().slice(0, 10);

  const [checkIns, setCheckIns] = useState(initialCheckIns);
  const [showAdd, setShowAdd] = useState(false);

  /* ===== FILTER ===== */
  const [filterDate, setFilterDate] = useState("");
  const [filterSpecialty, setFilterSpecialty] = useState("");

  /* ===== ADD FORM ===== */
  const [patientType, setPatientType] = useState(""); // new | old
  const [cccd, setCccd] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);

  const [form, setForm] = useState({
    fullName: "",
    age: "",
    specialty: "",
    specialtyKey: "",
    doctor: "",
    date: "",
  });

  /* ===== FILTER LIST ===== */
  const filteredCheckIns = checkIns
    .filter((c) => (filterDate ? c.date === filterDate : true))
    .filter((c) =>
      filterSpecialty ? c.specialtyKey === filterSpecialty : true
    )
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  /* ===== FILTER DOCTOR ===== */
  const filteredDoctors = doctors.filter(
    (d) => d.specialty.key === form.specialtyKey
  );

  /* ===== FIND OLD PATIENT ===== */
  const findPatientByCccd = () => {
    const p = patients.find((x) => x.cccd === cccd);
    if (!p) {
      alert("Không tìm thấy bệnh nhân");
      return;
    }

    setSelectedPatient(p);
    setForm({
      ...form,
      fullName: p.fullName,
      age: p.age,
      date: new Date().toISOString().slice(0, 10),
    });
  };

  /* ===== ADD CHECKIN ===== */
  const handleAdd = () => {
    if (!form.fullName || !form.specialtyKey || !form.date) return;

    setCheckIns([
      ...checkIns,
      {
        id: Date.now(),
        ...form,
        status: "Đang chờ",
      },
    ]);

    /* RESET */
    setPatientType("");
    setCccd("");
    setSelectedPatient(null);
    setForm({
      fullName: "",
      age: "",
      specialty: "",
      specialtyKey: "",
      doctor: "",
      date: "",
    });
    setShowAdd(false);
  };

  /* ===== STATUS ===== */
  const markDone = (id) => {
    setCheckIns(
      checkIns.map((c) =>
        c.id === id ? { ...c, status: "Đã khám xong" } : c
      )
    );
  };

  /* ===== DELETE ===== */
  const remove = (id) => {
    setCheckIns(checkIns.filter((c) => c.id !== id));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-xl font-semibold mb-4">Check-in khám bệnh</h1>

      {/* ===== FILTER ===== */}
      <div className="flex gap-4 mb-4">
        <input
          type="date"
          className="border rounded p-2"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
        />

        <select
          className="border rounded p-2"
          value={filterSpecialty}
          onChange={(e) => setFilterSpecialty(e.target.value)}
        >
          <option value="">Tất cả chuyên khoa</option>
          {flatSpecialties.map((s) => (
            <option key={s.key} value={s.key}>
              {s.label}
            </option>
          ))}
        </select>

        <button
          onClick={() => setShowAdd(true)}
          className="ml-auto flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded"
        >
          <PlusCircle size={18} />
          Thêm bệnh nhân
        </button>
      </div>

      {/* ===== TABLE ===== */}
      <table className="w-full bg-white rounded shadow text-sm">
        <thead className="bg-blue-50 text-left">
          <tr>
            <th className="px-4 py-3">STT</th>
            <th className="px-4 py-3">Họ tên</th>
            <th className="px-4 py-3">Tuổi</th>
            <th className="px-4 py-3">Chuyên khoa</th>
            <th className="px-4 py-3">Bác sĩ</th>
            <th className="px-4 py-3">Ngày khám</th>
            <th className="px-4 py-3">Trạng thái</th>
            <th className="px-4 py-3 text-center">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {filteredCheckIns.map((c, index) => (
            <tr key={c.id} className="border-t">
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{c.fullName}</td>
              <td className="px-4 py-2">{c.age}</td>
              <td className="px-4 py-2">{c.specialty}</td>
              <td className="px-4 py-2">{c.doctor || "-"}</td>
              <td className="px-4 py-2">{c.date}</td>
              <td className="px-4 py-2">{c.status}</td>
              <td className="px-4 py-2 flex justify-center gap-3">
                {c.status !== "Đã khám xong" && (
                  <button
                    onClick={() => markDone(c.id)}
                    className="text-green-600"
                  >
                    <CheckCircle size={18} />
                  </button>
                )}
                <button
                  onClick={() => remove(c.id)}
                  className="text-red-600"
                >
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ===== ADD MODAL ===== */}
      {showAdd && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded w-full max-w-md">
            <h2 className="font-semibold mb-4">Thêm bệnh nhân</h2>

            {/* TYPE */}
            <div className="flex gap-4 mb-3">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="new"
                  checked={patientType === "new"}
                  onChange={() => {
                    setPatientType("new");
                    setForm({
                      ...form,
                      date: today,
                    });
                  }}

                />
                Bệnh nhân mới
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="old"
                  checked={patientType === "old"}
                  onChange={() => setPatientType("old")}
                />
                Bệnh nhân cũ
              </label>
            </div>

            <div className="space-y-3">
              {/* OLD PATIENT */}
              {patientType === "old" && (
                <>
                  <input
                    className="w-full border rounded p-2"
                    placeholder="Nhập CCCD"
                    value={cccd}
                    onChange={(e) => setCccd(e.target.value)}
                  />

                  <button
                    onClick={findPatientByCccd}
                    className="w-full bg-blue-500 text-white py-2 rounded"
                  >
                    Tìm bệnh nhân
                  </button>

                  {selectedPatient && (
                    <div className="bg-gray-100 p-3 rounded text-sm">
                      <p><b>Họ tên:</b> {selectedPatient.fullName}</p>
                      <p><b>Tuổi:</b> {selectedPatient.age}</p>
                    </div>
                  )}
                </>
              )}

              {/* NEW PATIENT */}
              {patientType === "new" && (
                <>
                  <input
                    className="w-full border rounded p-2"
                    placeholder="Họ tên"
                    value={form.fullName}
                    onChange={(e) =>
                      setForm({ ...form, fullName: e.target.value })
                    }
                  />

                  <input
                    className="w-full border rounded p-2"
                    placeholder="Tuổi"
                    type="number"
                    value={form.age}
                    onChange={(e) =>
                      setForm({ ...form, age: e.target.value })
                    }
                  />

                  <input
                    className="w-full border rounded p-2"
                    placeholder="CCCD"
                    value={cccd}
                    onChange={(e) => setCccd(e.target.value)}
                  />
                </>
              )}

              {/* COMMON */}
              {(patientType === "new" || selectedPatient) && (
                <>
                  <select
                    className="w-full border rounded p-2"
                    value={form.specialtyKey}
                    onChange={(e) => {
                      const s = flatSpecialties.find(
                        (x) => x.key === e.target.value
                      );
                      setForm({
                        ...form,
                        specialtyKey: s.key,
                        specialty: s.label,
                        doctor: "",
                      });
                    }}
                  >
                    <option value="">Chọn chuyên khoa</option>
                    {flatSpecialties.map((s) => (
                      <option key={s.key} value={s.key}>
                        {s.label}
                      </option>
                    ))}
                  </select>

                  <select
                    className="w-full border rounded p-2"
                    disabled={!form.specialtyKey}
                    value={form.doctor}
                    onChange={(e) =>
                      setForm({ ...form, doctor: e.target.value })
                    }
                  >
                    <option value="">Chọn bác sĩ</option>
                    {filteredDoctors.map((d) => (
                      <option key={d.id} value={d.name}>
                        {d.name}
                      </option>
                    ))}
                  </select>
                </>
              )}
            </div>

            <div className="flex justify-end gap-2 mt-5">
              <button
                onClick={() => setShowAdd(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Hủy
              </button>
              <button
                onClick={handleAdd}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Thêm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckIn;
