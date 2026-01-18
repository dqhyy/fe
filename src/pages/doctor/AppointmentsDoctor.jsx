import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { getMyAppointments, updateAppointmentStatus, updateAppointmentResult } from '../../services/doctorService';
import { getAllServices } from '../../services/adminService';
import { Calendar, Clock, User, XCircle, CheckCircle } from 'lucide-react';

const AppointmentsDoctor = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterStatus, setFilterStatus] = useState('ALL');

  const [services, setServices] = useState([]);
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [resultForm, setResultForm] = useState({
    diagnosis: '',
    treatment: '',
    prescription: '',
    notes: '',
    serviceIds: []
  });

  useEffect(() => {
    fetchAppointments();
    fetchServices();
  }, []);

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const data = await getMyAppointments();
      data.sort((a, b) => new Date(b.appointmentDate) - new Date(a.appointmentDate));
      setAppointments(data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchServices = async () => {
    try {
      const data = await getAllServices();
      setServices(data.filter(s => s.isActive !== false));
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  const handleStatusUpdate = async (id, newStatus) => {
    if (!window.confirm(`Bạn có chắc muốn chuyển trạng thái thành ${newStatus}?`)) return;
    try {
      await updateAppointmentStatus(id, newStatus);
      fetchAppointments();
    } catch (error) {
      toast.error("Cập nhật thất bại: " + error.message);
    }
  };

  const handleOpenResultModal = (appointment) => {
    setSelectedAppointment(appointment);
    setResultForm({
      diagnosis: '',
      treatment: '',
      prescription: '',
      notes: '',
      serviceIds: []
    });
    setIsResultModalOpen(true);
  };

  const handleServiceCheckboxChange = (e) => {
    const serviceId = parseInt(e.target.value);
    const isChecked = e.target.checked;

    let newServiceIds = [...(resultForm.serviceIds || [])];
    if (isChecked) {
      newServiceIds.push(serviceId);
    } else {
      newServiceIds = newServiceIds.filter(id => id !== serviceId);
    }

    const selectedServiceNames = services
      .filter(s => newServiceIds.includes(s.id))
      .map(s => s.name)
      .join(', ');

    setResultForm({
      ...resultForm,
      serviceIds: newServiceIds,
      treatment: selectedServiceNames
    });
  };

  const handleResultSubmit = async (e) => {
    e.preventDefault();
    if (!selectedAppointment) return;

    try {
      await updateAppointmentResult(selectedAppointment.id, resultForm);
      toast.success("Đã lưu kết quả khám và hoàn thành cuộc hẹn!");
      setIsResultModalOpen(false);
      fetchAppointments();
    } catch (error) {
      toast.error("Lỗi khi lưu kết quả: " + error.message);
    }
  };

  const filteredAppointments = appointments.filter(app => {
    if (filterStatus === 'ALL') return true;
    return app.status === filterStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'CONFIRMED': return 'bg-blue-100 text-blue-800';
      case 'FINISHED': return 'bg-green-100 text-green-800';
      case 'REJECTED': return 'bg-red-100 text-red-800';
      case 'PENDING': return 'bg-amber-100 text-amber-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold text-maincolor">Quản lý Lịch hẹn</h1>

          <select
            className="p-2 border rounded-lg text-sm"
            value={filterStatus}
            onChange={e => setFilterStatus(e.target.value)}
          >
            <option value="ALL">Tất cả</option>
            <option value="PENDING">Chờ xác nhận</option>
            <option value="CONFIRMED">Đã xác nhận</option>
            <option value="FINISHED">Đã hoàn thành</option>
            <option value="REJECTED">Đã từ chối</option>
          </select>
        </div>

        {loading ? (
          <div className="text-center py-10">Đang tải...</div>
        ) : (
          <div className="overflow-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 text-gray-700">
                  <th className="p-4">Ngày hẹn</th>
                  <th className="p-4">Bệnh nhân</th>
                  <th className="p-4">Thông tin</th>
                  <th className="p-4">Lý do khám</th>
                  <th className="p-4">Trạng thái</th>
                  <th className="p-4 text-center">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {filteredAppointments.map((app) => (
                  <tr key={app.id} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-gray-400" />
                        {app.appointmentDate}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="font-medium text-maincolor">{app.patientName}</div>
                      <div className="text-xs text-gray-500">{app.patientPhone}</div>
                    </td>
                    <td className="p-4 text-gray-600">
                      <div>{app.patientGender}</div>
                      <div className="text-xs">{app.patientDob}</div>
                    </td>
                    <td className="p-4 text-gray-600 max-w-xs truncate" title={app.reasonForVisit}>
                      {app.reasonForVisit}
                    </td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(app.status)}`}>
                        {app.status}
                      </span>
                    </td>
                    <td className="p-4 flex justify-center gap-2">

                      {app.status === 'CONFIRMED' && (
                        <button
                          onClick={() => handleOpenResultModal(app)}
                          className="p-2 text-green-600 hover:bg-green-50 rounded-full transition"
                          title="Hoàn thành & Nhập kết quả"
                        >
                          <CheckCircle size={20} />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
                {filteredAppointments.length === 0 && (
                  <tr>
                    <td colSpan="6" className="p-8 text-center text-gray-500">
                      Không có lịch hẹn nào
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {isResultModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-gray-900/30 backdrop-blur-sm transition-opacity"
            onClick={() => setIsResultModalOpen(false)}
          ></div>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 max-h-[90vh] overflow-y-auto transform transition-all scale-100">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Kết quả khám bệnh</h2>
              <button
                onClick={() => setIsResultModalOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <XCircle size={24} />
              </button>
            </div>

            <form onSubmit={handleResultSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Chẩn đoán</label>
                <textarea
                  className="w-full border rounded-lg p-2 outline-none"
                  rows="3"
                  required
                  value={resultForm.diagnosis}
                  onChange={e => setResultForm({ ...resultForm, diagnosis: e.target.value })}
                  placeholder="Nhập chẩn đoán bệnh..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Dịch vụ / Điều trị
                </label>

                {/* Dropdown chọn dịch vụ */}
                <select
                  className="w-full border rounded-lg p-2 mb-2 bg-white"
                  value=""
                  onChange={(e) => {
                    const serviceId = Number(e.target.value);
                    if (!serviceId) return;

                    const service = services.find(s => s.id === serviceId);
                    if (!service) return;

                    // tránh trùng dịch vụ
                    if (resultForm.serviceIds?.includes(serviceId)) {
                      e.target.value = "";
                      return;
                    }

                    const newTreatmentItem = `${service.name}`;

                    setResultForm({
                      ...resultForm,
                      serviceIds: [...(resultForm.serviceIds || []), serviceId],
                      treatment: resultForm.treatment
                        ? `${resultForm.treatment}, ${newTreatmentItem}`
                        : newTreatmentItem,
                    });

                    e.target.value = "";
                  }}
                >
                  <option value="">-- Chọn dịch vụ --</option>
                  {services.map(service => (
                    <option key={service.id} value={service.id}>
                      {service.name} ({formatPrice(service.price)})
                    </option>
                  ))}
                </select>


                {/* Danh sách điều trị */}
                <textarea
                  className="w-full border rounded-lg p-2 outline-none bg-gray-50"
                  rows="4"
                  value={resultForm.treatment}
                  placeholder="Danh sách điều trị..."
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Đơn thuốc</label>
                <textarea
                  className="w-full border rounded-lg p-2 outline-none"
                  rows="3"
                  value={resultForm.prescription}
                  onChange={e => setResultForm({ ...resultForm, prescription: e.target.value })}
                  placeholder="Danh sách thuốc (nếu có)..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ghi chú</label>
                <textarea
                  className="w-full border rounded-lg p-2 outline-none"
                  rows="2"
                  value={resultForm.notes}
                  onChange={e => setResultForm({ ...resultForm, notes: e.target.value })}
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsResultModalOpen(false)}
                  className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transaction"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-maincolor text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Lưu & Hoàn thành
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentsDoctor;