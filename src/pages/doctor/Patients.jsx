import React, { useState, useEffect } from 'react';
import { getMyPatients, getMedicalRecordsByPatientId, updateMedicalRecord } from '../../services/doctorService';
import { User, Phone, Calendar, XCircle, FileText, Edit } from 'lucide-react';

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("info");

  const InfoItem = ({ label, value }) => (
    <div className="p-4 flex gap-2">
      <p className="text-sl text-gray-800">{label} : {value} </p>
    </div>
  );

  const [selectedPatient, setSelectedPatient] = useState(null);
  const [medicalRecords, setMedicalRecords] = useState([]);
  const [recordsLoading, setRecordsLoading] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null); 
  const [editForm, setEditForm] = useState({});

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const data = await getMyPatients();
      setPatients(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handlePatientClick = async (patient) => {
    setSelectedPatient(patient);
    setActiveTab("info"); 
    setRecordsLoading(true);
    setEditingRecord(null);

    try {
      const records = await getMedicalRecordsByPatientId(patient.id);
      setMedicalRecords(records);
    } catch (error) {
      console.error("Failed to fetch medical records:", error);
    } finally {
      setRecordsLoading(false);
    }
  };


  const handleEditClick = (record) => {
    setEditingRecord(record);
    setEditForm({
      diagnosis: record.diagnosis || '',
      treatment: record.treatment || '',
      prescription: record.prescription || '',
      notes: record.notes || ''
    });
  };

  const handleUpdateRecord = async (e) => {
    e.preventDefault();
    if (!editingRecord) return;

    try {
      await updateMedicalRecord(editingRecord.id, editForm);
      alert("Cập nhật hồ sơ thành công!");
      setEditingRecord(null);
      const records = await getMedicalRecordsByPatientId(selectedPatient.id);
      setMedicalRecords(records);
    } catch (error) {
      alert("Cập nhật thất bại: " + error.message);
    }
  };



  if (loading) return <div>Đang tải...</div>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-xl font-semibold text-maincolor mb-6">Danh sách bệnh nhân</h1>
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-blue-50">
            <tr className="text-left text-sm text-gray-600">
              <th className="px-4 py-3 w-12">STT</th>
              <th className="px-4 py-3">Họ tên</th>
              <th className="px-4 py-3">Ngày sinh</th>
              <th className="px-4 py-3">Giới tính</th>
              <th className="px-4 py-3">Địa chỉ</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr
                key={patient.id}
                onClick={() => handlePatientClick(patient)}
                className="border-t hover:bg-blue-50 cursor-pointer transition"
              >
                <td className="px-4 py-3 font-medium">{index + 1}</td>
                <td className="px-4 py-3 text-gray-800">
                  {patient.fullName}
                </td>
                <td className="px-4 py-3">
                  {patient.dateOfBirth}
                </td>
                <td className="px-4 py-3">
                  {patient.gender}
                </td>
                <td className="px-4 py-3">
                  {patient.address || "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {patients.length === 0 && (
          <p className="text-center text-gray-500 py-6">
            Chưa có bệnh nhân nào.
          </p>
        )}
      </div>

      {selectedPatient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-gray-900/30 backdrop-blur-sm"
            onClick={() => setSelectedPatient(null)}
          />

          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl p-8 max-h-[90vh] flex flex-col">

            <div className="flex justify-between items-center border-b pb-4 mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  Hồ sơ bệnh án: {selectedPatient.fullName}
                </h2>
              </div>
              <button onClick={() => setSelectedPatient(null)} className="text-gray-400 hover:text-gray-600">
                <XCircle size={28} />
              </button>
            </div>
            <div className="flex mb-4">
              <button
                onClick={() => setActiveTab("info")}
                className={`px-4 py-2 font-medium
            ${activeTab === "info"
                    ? "border-b-2 border-maincolor text-maincolor"
                    : "text-gray-500 hover:text-gray-700"
                  }`}
              >
                Thông tin cá nhân
              </button>

              <button
                onClick={() => setActiveTab("records")}
                className={`px-4 py-2 font-medium
            ${activeTab === "records"
                    ? "border-b-2 border-maincolor text-maincolor"
                    : "text-gray-500 hover:text-gray-700"
                  }`}
              >
                Hồ sơ khám bệnh
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              {activeTab === "info" && (
                <div className="border rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InfoItem label="Họ và tên" value={selectedPatient.fullName} />
                  <InfoItem label="Ngày sinh" value={selectedPatient.dateOfBirth} />
                  <InfoItem label="Giới tính" value={selectedPatient.gender} />
                  <InfoItem label="Số điện thoại" value={selectedPatient.phoneNumber} />
                  <InfoItem label="Địa chỉ" value={selectedPatient.address || "Chưa cập nhật"} />
                </div>
              )}
              {activeTab === "records" && (
                <>
                  {recordsLoading ? (
                    <div className="text-center py-10">Đang tải hồ sơ...</div>
                  ) : (
                    <div className="space-y-6">
                      {medicalRecords.length > 0 ? (
                        medicalRecords.map((record) => (
                          <div key={record.id} className="border rounded-lg bg-gray-50 p-4">
                            {editingRecord && editingRecord.id === record.id ? (
                              <form onSubmit={handleUpdateRecord} className="space-y-4">
                                <h3 className="font-semibold text-maincolor">
                                  Chỉnh sửa kết quả khám ({record.visitDate})
                                </h3>

                                <textarea
                                  className="w-full border rounded p-2"
                                  placeholder="Chẩn đoán"
                                  value={editForm.diagnosis}
                                  onChange={e =>
                                    setEditForm({ ...editForm, diagnosis: e.target.value })
                                  }
                                />

                                <textarea
                                  className="w-full border rounded p-2"
                                  placeholder="Điều trị"
                                  value={editForm.treatment}
                                  onChange={e =>
                                    setEditForm({ ...editForm, treatment: e.target.value })
                                  }
                                />

                                <textarea
                                  className="w-full border rounded p-2"
                                  placeholder="Đơn thuốc"
                                  value={editForm.prescription}
                                  onChange={e =>
                                    setEditForm({ ...editForm, prescription: e.target.value })
                                  }
                                />

                                <textarea
                                  className="w-full border rounded p-2"
                                  placeholder="Ghi chú"
                                  value={editForm.notes}
                                  onChange={e =>
                                    setEditForm({ ...editForm, notes: e.target.value })
                                  }
                                />

                                <div className="flex justify-end gap-2">
                                  <button
                                    type="button"
                                    onClick={() => setEditingRecord(null)}
                                    className="px-3 py-1 bg-gray-300 rounded"
                                  >
                                    Hủy
                                  </button>
                                  <button
                                    type="submit"
                                    className="px-3 py-1 bg-maincolor text-white rounded"
                                  >
                                    Lưu
                                  </button>
                                </div>
                              </form>
                            ) : (
                              <div className="relative">
                                <button
                                  onClick={() => handleEditClick(record)}
                                  className="absolute top-0 right-0 text-blue-600"
                                >
                                  <Edit size={18} />
                                </button>

                                <div className="grid grid-cols-2 gap-4 bg-white">

                                  <div className="font-medium text-gray-600">Ngày khám</div>
                                  <div>{record.visitDate}</div>

                                  <div className="font-medium text-gray-600">Bác sĩ</div>
                                  <div>{record.doctorName}</div>

                                  <div className="font-medium text-gray-600">Chẩn đoán</div>
                                  <div className="whitespace-pre-line">
                                    {record.diagnosis || "—"}
                                  </div>

                                  <div className="font-medium text-gray-600">Điều trị</div>
                                  <div className="whitespace-pre-line">
                                    {record.treatment || "—"}
                                  </div>

                                  <div className="font-medium text-gray-600">Đơn thuốc</div>
                                  <div className="whitespace-pre-line rounded">
                                    {record.prescription || "—"}
                                  </div>

                                  <div className="font-medium text-gray-600">Ghi chú</div>
                                  <div className="whitespace-pre-line">
                                    {record.notes || "—"}
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        ))
                      ) : (
                        <div className="text-center text-gray-500 py-10">
                          <FileText size={48} className="mx-auto mb-2 text-gray-300" />
                          Bệnh nhân chưa có hồ sơ khám bệnh nào.
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}


            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Patients;