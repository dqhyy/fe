import React, { useState, useEffect, useMemo } from 'react';
import {
  getAllPatients,
  createPatient,
  updatePatient,
  deletePatient
} from '../../services/patientService';
import { Edit, Trash2 } from 'lucide-react';

const PatientManagement = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [openMenu, setOpenMenu] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add'); // 'add' or 'edit'
  const [currentItem, setCurrentItem] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    fullName: '',
    gender: 'MALE',
    dateOfBirth: '',
    phoneNumber: '',
    address: '',
    email: '',
    citizenIdentificationCard: '',
    insuranceNumber: ''
  });

  // Fetch Patients
  const fetchPatients = async () => {
    setLoading(true);
    try {
      const data = await getAllPatients();
      setPatients(data);
      setError(null);
    } catch (err) {
      setError("Không thể tải danh sách bệnh nhân");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  // Filter
  const filteredPatients = useMemo(() => {
    return patients.filter((p) => {
      const query = search.toLowerCase();
      return (
        (p.fullName && p.fullName.toLowerCase().includes(query)) ||
        (p.username && p.username.toLowerCase().includes(query)) ||
        (p.email && p.email.toLowerCase().includes(query)) ||
        (p.phoneNumber && p.phoneNumber.includes(query)) ||
        (p.citizenIdentificationCard && p.citizenIdentificationCard.includes(query))
      );
    });
  }, [patients, search]);

  // Pagination
  const total = filteredPatients.length;
  const totalPages = Math.ceil(total / rowsPerPage);
  const paginatedPatients = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    return filteredPatients.slice(start, start + rowsPerPage);
  }, [page, rowsPerPage, filteredPatients]);

  const from = (page - 1) * rowsPerPage + 1;
  const to = Math.min(page * rowsPerPage, total);

  // Handlers
  const handleAddNew = () => {
    setModalMode('add');
    setFormData({
      username: '',
      password: '',
      fullName: '',
      gender: 'MALE',
      dateOfBirth: '',
      phoneNumber: '',
      address: '',
      email: '',
      citizenIdentificationCard: '',
      insuranceNumber: ''
    });
    setModalOpen(true);
  };

  const handleEdit = (patient) => {
    setModalMode('edit');
    setCurrentItem(patient);
    setFormData({
      ...patient,
      password: '', // Don't show password
      dateOfBirth: patient.dateOfBirth ? patient.dateOfBirth.split('T')[0] : '',
      citizenIdentificationCard: patient.citizenIdentificationCard || (patient.account?.citizenIdentificationCard) || '',
      insuranceNumber: patient.insuranceNumber || ''
    });
    setModalOpen(true);
    setOpenMenu(null);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa bệnh nhân này?")) return;
    try {
      await deletePatient(id);
      fetchPatients();
      setOpenMenu(null);
    } catch (err) {
      alert("Xóa thất bại: " + err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (modalMode === 'add') {
        await createPatient(formData);
      } else {
        await updatePatient(currentItem.id, formData);
      }
      setModalOpen(false);
      fetchPatients();
    } catch (err) {
      alert("Lỗi: " + err.message);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-xl shadow p-4 mb-6">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <h1 className="text-xl font-semibold">
            Quản lý Bệnh nhân <span className="text-gray-400">({total})</span>
          </h1>

          <div className="flex gap-4 w-full md:w-auto">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              className="border rounded-lg px-4 py-2 w-full md:w-80 text-sm"
            />
            <button
              onClick={handleAddNew}
              className="bg-maincolor text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 whitespace-nowrap"
            >
              + Thêm mới
            </button>
          </div>
        </div>
      </div>

      {loading && <div className="text-center py-4">Đang tải dữ liệu...</div>}
      {error && <div className="text-center py-4 text-red-500">{error}</div>}

      {!loading && !error && (
        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-left whitespace-nowrap">
              <tr>
                <th className="p-3">Họ tên</th>
                <th className="p-3">Giới tính</th>
                <th className="p-3">Ngày sinh</th>
                <th className="p-3">SĐT</th>
                <th className="p-3">CCCD/CMND</th>
                <th className="p-3">BHYT</th>
                <th className="p-3">Email</th>
                <th className="p-3">Địa chỉ</th>
                <th className="p-3 text-right">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {paginatedPatients.map((patient) => (
                <tr key={patient.id} className="border-t hover:bg-gray-50">
                  <td className="p-3 font-medium">
                    <div>{patient.fullName}</div>
                    <div className="text-xs text-gray-500">{patient.username}</div>
                  </td>
                  <td className="p-3 text-gray-600">{patient.gender}</td>
                  <td className="p-3 text-gray-600">{patient.dateOfBirth}</td>
                  <td className="p-3 text-gray-600">{patient.phoneNumber}</td>
                  <td className="p-3 text-gray-600">{patient.citizenIdentificationCard || '-'}</td>
                  <td className="p-3 text-gray-600">{patient.insuranceNumber || '-'}</td>
                  <td className="p-3 text-gray-600">{patient.email}</td>
                  <td className="p-3 text-gray-600 max-w-xs truncate" title={patient.address}>{patient.address}</td>
                  <td className="p-3  text-right">
                    <button
                      onClick={() => handleEdit(patient)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(patient.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-full transition"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
              {paginatedPatients.length === 0 && (
                <tr><td colSpan="9" className="p-6 text-center text-gray-500">Không tìm thấy bệnh nhân nào</td></tr>
              )}
            </tbody>
          </table>
          {/* FOOTER */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 text-sm text-gray-600">
            <div>
              Số dòng/trang:
              <select
                className="ml-2 border rounded px-2 py-1"
                value={rowsPerPage}
                onChange={(e) => {
                  setRowsPerPage(Number(e.target.value));
                  setPage(1);
                }}
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <span>{from}–{to} trên {total}</span>
              <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                className="px-2 py-1 rounded border disabled:opacity-40"
              >‹</button>
              <button
                disabled={page === totalPages || totalPages === 0}
                onClick={() => setPage(page + 1)}
                className="px-2 py-1 rounded border disabled:opacity-40"
              >›</button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl overflow-hidden max-h-[90vh] flex flex-col">
            <div className="p-4 border-b flex justify-between items-center bg-gray-50">
              <h2 className="text-lg font-bold text-gray-700">
                {modalMode === 'add' ? 'Thêm mới bệnh nhân' : 'Cập nhật thông tin'}
              </h2>
              <button onClick={() => setModalOpen(false)} className="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
            </div>

            <div className="p-6 overflow-y-auto">
              <form id="patientForm" onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Username */}
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tên đăng nhập</label>
                  <input
                    required
                    disabled={modalMode === 'edit'}
                    type="text"
                    className="w-full border rounded px-3 py-2 disabled:bg-gray-100"
                    value={formData.username}
                    onChange={e => setFormData({ ...formData, username: e.target.value })}
                  />
                </div>
                {/* Password */}
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {modalMode === 'add' ? 'Mật khẩu' : 'Mật khẩu mới (để trống nếu không đổi)'}
                  </label>
                  <input
                    required={modalMode === 'add'}
                    type="password"
                    className="w-full border rounded px-3 py-2"
                    value={formData.password}
                    onChange={e => setFormData({ ...formData, password: e.target.value })}
                  />
                </div>

                {/* Full Name */}
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Họ và tên</label>
                  <input
                    required
                    type="text"
                    className="w-full border rounded px-3 py-2"
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>

                {/* Phone */}
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2"
                    value={formData.phoneNumber}
                    onChange={e => setFormData({ ...formData, phoneNumber: e.target.value })}
                  />
                </div>

                {/* Email */}
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full border rounded px-3 py-2"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                {/* CCCD */}
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">CCCD/CMND</label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2"
                    value={formData.citizenIdentificationCard}
                    onChange={e => setFormData({ ...formData, citizenIdentificationCard: e.target.value })}
                  />
                </div>

                {/* BHYT */}
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mã BHYT</label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2"
                    value={formData.insuranceNumber}
                    onChange={e => setFormData({ ...formData, insuranceNumber: e.target.value })}
                  />
                </div>

                {/* Gender */}
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Giới tính</label>
                  <select
                    className="w-full border rounded px-3 py-2"
                    value={formData.gender || 'MALE'}
                    onChange={e => setFormData({ ...formData, gender: e.target.value })}
                  >
                    <option value="MALE">Nam</option>
                    <option value="FEMALE">Nữ</option>
                    <option value="OTHER">Khác</option>
                  </select>
                </div>

                {/* DOB */}
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ngày sinh</label>
                  <input
                    type="date"
                    className="w-full border rounded px-3 py-2"
                    value={formData.dateOfBirth}
                    onChange={e => setFormData({ ...formData, dateOfBirth: e.target.value })}
                  />
                </div>

                {/* Address */}
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Địa chỉ</label>
                  <textarea
                    className="w-full border rounded px-3 py-2"
                    rows="2"
                    value={formData.address}
                    onChange={e => setFormData({ ...formData, address: e.target.value })}
                  ></textarea>
                </div>

              </form>
            </div>

            <div className="p-4 border-t bg-gray-50 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 border rounded hover:bg-gray-100 text-gray-700"
              >
                Hủy
              </button>
              <button
                form="patientForm"
                type="submit"
                className="px-4 py-2 bg-maincolor text-white rounded hover:bg-blue-700"
              >
                {modalMode === 'add' ? 'Thêm mới' : 'Lưu thay đổi'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default PatientManagement;
