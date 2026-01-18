import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPatientMedicalRecords } from "../../services/patientService";

const MedicalResult = () => {
  const [year, setYear] = useState("ALL");
  const [medicalRecords, setMedicalRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMedicalRecords();
  }, []);

  const fetchMedicalRecords = async () => {
    try {
      const data = await getPatientMedicalRecords();
      setMedicalRecords(data);
    } catch (error) {
      console.error("Failed to fetch medical records:", error);
    } finally {
      setLoading(false);
    }
  };

  const years = ["ALL", ...new Set(medicalRecords.map(i => i.visitDate ? i.visitDate.substring(0, 4) : 'N/A'))];

  const filteredList =
    year === "ALL"
      ? medicalRecords
      : medicalRecords.filter(i => (i.visitDate ? i.visitDate.substring(0, 4) : 'N/A') === year);

  if (loading) return <div className="text-center py-10">Đang tải...</div>;

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-semibold mb-6">
        Hồ sơ khám bệnh
      </h2>

      {/* Filter */}
      <div className="flex gap-3 mb-6">
        {years.map((y) => (
          <button
            key={y}
            onClick={() => setYear(y)}
            className={`px-4 py-2 rounded-md text-sm font-medium border
              ${year === y
                ? "bg-maincolor text-white border-maincolor"
                : "bg-white text-gray-600 hover:bg-gray-100"
              }
            `}
          >
            {y === "ALL" ? "Tất cả năm" : y}
          </button>
        ))}
      </div>

      {/* LIST */}
      <div className="space-y-4">
        {filteredList.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-5 bg-white shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">
                  {item.doctorName} – {item.specialty}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  {item.visitDate} • {item.clinicName}
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>Chẩn đoán:</strong> {item.diagnosis}
                </p>
              </div>

              <Link
                to={`/myprofile/medicalresults/${item.id}`}
                className="px-4 py-2 text-sm rounded-md border border-maincolor text-maincolor hover:bg-maincolor hover:text-white transition"
              >
                Xem chi tiết
              </Link>
            </div>
          </div>
        ))}

        {filteredList.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            Không có hồ sơ khám bệnh
          </p>
        )}
      </div>
    </div>
  );
};

export default MedicalResult;
