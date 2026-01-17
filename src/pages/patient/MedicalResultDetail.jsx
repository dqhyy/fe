import React from "react";
import { useParams, Link } from "react-router-dom";
import { medicalResults } from "../../assets/data/data";

const MedicalResultDetail = () => {
  const { id } = useParams();

  const result = medicalResults.find(r => r.id.toString() === id);

  if (!result) {
    return (
      <div className="container mx-auto py-20 text-center">
        <p className="text-gray-600 mb-4">
          Không tìm thấy hồ sơ khám bệnh
        </p>
        <Link to="/myprofile/medicalresults" className="text-maincolor hover:underline">
          Quay lại danh sách
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 max-w-4xl">
      <h1 className="text-2xl font-semibold mb-6">
        Chi tiết kết quả khám bệnh
      </h1>

      {/* Booking info */}
      <Section title="Thông tin lịch khám">
        <Info label="Ngày khám" value={`${result.bookingInfo.date} • ${result.bookingInfo.time}`} />
        <Info label="Bác sĩ" value={result.bookingInfo.doctor} />
        <Info label="Chuyên khoa" value={result.bookingInfo.specialty} />
        <Info label="Phòng khám" value={result.bookingInfo.clinic} />
      </Section>

      {/* Diagnosis */}
      <Section title="Chẩn đoán & kết luận">
        <p><strong>Chẩn đoán:</strong> {result.diagnosis.main}</p>
        <p className="mt-2"><strong>Kết luận:</strong> {result.diagnosis.conclusion}</p>
      </Section>

      {/* Prescription */}
      <Section title="Đơn thuốc">
        {result.prescriptions.length === 0 ? (
          <p className="text-gray-500">Không có đơn thuốc</p>
        ) : (
          result.prescriptions.map((med, index) => (
            <div key={index} className="border-b py-2">
              <p className="font-medium">{med.name}</p>
              <p className="text-sm text-gray-600">
                {med.dosage} – {med.usage} – {med.duration}
              </p>
            </div>
          ))
        )}
      </Section>

      <Link
        to="/myprofile/medicalresults"
        className="inline-block mt-4 text-maincolor hover:underline"
      >
        ← Quay lại hồ sơ khám bệnh
      </Link>
    </div>
  );
};

/* Reusable UI giống Booking History */

const Section = ({ title, children }) => (
  <div className="bg-white border rounded-lg p-5 mb-6">
    <h2 className="text-lg font-semibold mb-4">{title}</h2>
    <div className="space-y-2 text-gray-700">{children}</div>
  </div>
);

const Info = ({ label, value }) => (
  <div className="flex justify-between text-sm">
    <span className="text-gray-500">{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);

export default MedicalResultDetail;
