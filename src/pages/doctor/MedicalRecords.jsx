import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { getMedicalRecordsByPatientId } from '../../services/doctorService';
import { ArrowLeft, FileText, Calendar, User } from 'lucide-react';

const MedicalRecords = () => {
  const { patientId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const patient = location.state?.patient;

  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (patientId) {
      fetchRecords();
    }
  }, [patientId]);

  const fetchRecords = async () => {
    try {
      const data = await getMedicalRecordsByPatientId(patientId);
      setRecords(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="p-6">Đang tải hồ sơ...</div>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-maincolor mb-4"
      >
        <ArrowLeft size={20} /> Quay lại
      </button>

      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-maincolor">Hồ sơ khám bệnh</h1>
          {patient && (
            <p className="text-gray-600 mt-1 flex items-center gap-2">
              <User size={16} /> Bệnh nhân: <span className="font-semibold">{patient.fullName}</span>
              | {patient.gender} | {patient.dateOfBirth}
            </p>
          )}
        </div>
      </div>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      <div className="space-y-4">
        {records.length > 0 ? (
          records.map((record) => (
            <div key={record.id} className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2 text-maincolor font-semibold">
                  <Calendar size={18} />
                  <span>{record.visitDate}</span>
                </div>
                <div className="text-sm text-gray-500">
                  Bác sĩ: {record.doctorName}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Chẩn đoán</h3>
                  <p className="text-gray-800 whitespace-pre-line bg-gray-50 p-3 rounded">{record.diagnosis || "Chưa cập nhật"}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Điều trị</h3>
                  <p className="text-gray-800 whitespace-pre-line bg-gray-50 p-3 rounded">{record.treatment || "Chưa cập nhật"}</p>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Đơn thuốc</h3>
                  <p className="text-gray-800 whitespace-pre-line bg-gray-50 p-3 rounded">{record.prescription || "Chưa cập nhật"}</p>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Ghi chú</h3>
                  <p className="text-gray-800 whitespace-pre-line bg-gray-50 p-3 rounded">{record.notes || "—"}</p>
                </div>
              </div>

              {/* Indicator for missing info */}
              {(!record.diagnosis || !record.treatment || !record.prescription) && (
                <div className="mt-4 p-2 bg-yellow-50 text-yellow-700 text-sm rounded border border-yellow-200">
                  ⚠️ Hồ sơ này chưa đầy đủ thông tin. Bác sĩ cần cập nhật thêm.
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center py-12 bg-white rounded-xl shadow">
            <FileText size={48} className="mx-auto text-gray-300 mb-3" />
            <p className="text-gray-500">Chưa có hồ sơ khám bệnh nào.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicalRecords;