import React, { useState, useEffect } from 'react';
import { getAllPatients } from '../../services/patientService'; // Use patientService for getAll
import { FileText, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StaffPatients = () => {
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetchPatients();
    }, []);

    const fetchPatients = async () => {
        try {
            const data = await getAllPatients();
            // data is list of patients
            setPatients(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div>Đang tải...</div>;

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-xl font-semibold text-maincolor mb-6">Hồ sơ bệnh nhân</h1>
            <div className="bg-white rounded-xl shadow overflow-hidden">
                <table className="w-full border-collapse">
                    <thead className="bg-blue-50">
                        <tr className="text-left text-sm text-gray-600">
                            <th className="px-4 py-3 w-12">STT</th>
                            <th className="px-4 py-3">Họ tên</th>
                            <th className="px-4 py-3">Ngày sinh</th>
                            <th className="px-4 py-3">Giới tính</th>
                            <th className="px-4 py-3">Địa chỉ</th>
                            <th className="px-4 py-3 text-center">Hồ sơ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map((patient, index) => (
                            <tr key={patient.id} className="border-t hover:bg-blue-50 transition">
                                <td className="px-4 py-3 font-medium">{index + 1}</td>
                                <td className="px-4 py-3 text-gray-800">{patient.fullName}</td>
                                <td className="px-4 py-3">{patient.dateOfBirth}</td>
                                <td className="px-4 py-3">{patient.gender}</td>
                                <td className="px-4 py-3 max-w-xs truncate">{patient.address || "—"}</td>
                                <td className="px-4 py-3 text-center">
                                    <button
                                        onClick={() => navigate(`/staff/patients/${patient.id}/records`, { state: { patient } })}
                                        className="text-blue-600 hover:text-blue-800 flex items-center justify-center gap-1 mx-auto"
                                    >
                                        <FileText size={18} />
                                        Xem hồ sơ
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {patients.length === 0 && (
                    <p className="text-center text-gray-500 py-6">Chưa có bệnh nhân nào.</p>
                )}
            </div>
        </div>
    );
};

export default StaffPatients;
