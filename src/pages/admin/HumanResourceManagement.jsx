import React, { useState, useEffect } from 'react';
import { getAllDoctors } from '../../services/doctorService';
import {
  createDoctor, updateDoctor, deleteDoctor,
  getAllStaffs, createStaff, updateStaff, deleteStaff
} from '../../services/adminService';
import { Trash2, Edit, Plus, X, User, Stethoscope, Users, ChevronLeft, ChevronRight } from 'lucide-react';


const HumanResourceManagement = () => {
  const [activeTab, setActiveTab] = useState('DOCTOR'); // 'DOCTOR' | 'STAFF'
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; // số dòng / trang


  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('create');
  const [currentItem, setCurrentItem] = useState(null);

  // Form state (Combined)
  const [formData, setFormData] = useState({
    username: '', password: '', email: '', fullName: '', phone: '', citizenIdentificationCard: '',
    specialization: '', degree: '', yearsOfExperience: 0, licenseNumber: '', description: '',
    department: '', position: '',
    isActive: true
  });

  useEffect(() => {
    setCurrentPage(1);
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      if (activeTab === 'DOCTOR') {
        const data = await getAllDoctors();
        setDataList(data);
      } else {
        const data = await getAllStaffs();
        setDataList(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setDataList([]);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setModalMode('create');
    setCurrentItem(null);
    setFormData({
      username: '', password: '', email: '', fullName: '', phone: '', citizenIdentificationCard: '',
      specialization: '', degree: '', yearsOfExperience: 0, licenseNumber: '', description: '',
      department: '', position: '',
      isActive: true
    });
    setShowModal(true);
  };

  const handleEdit = (item) => {
    setModalMode('edit');
    setCurrentItem(item);

    if (activeTab === 'DOCTOR') {
      setFormData({
        ...item,
        username: item.username || '',
        password: '',
        fullName: item.name,
        specialization: item.specialty?.key || item.specialty?.name || '',
        yearsOfExperience: item.experienceYears,
        phone: item.contact?.phone || item.phone || '',
        citizenIdentificationCard: item.citizenIdentificationCard || ''
      });
    } else {
      // Staff mapping
      setFormData({
        ...item,
        username: item.username || '',
        password: '',
        fullName: item.fullName,
        phone: item.phone || '',
        email: item.email || '',
        department: item.department || '',
        position: item.position || '',
        citizenIdentificationCard: item.citizenIdentificationCard || ''
        // Staff might not have isActive in response or logic yet, assume active
      });
    }
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa nhân sự này?")) return;
    try {
      if (activeTab === 'DOCTOR') await deleteDoctor(id);
      else await deleteStaff(id);
      fetchData();
    } catch (error) {
      alert("Xóa thất bại: " + error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (activeTab === 'DOCTOR') {
        if (modalMode === 'create') await createDoctor(formData);
        else await updateDoctor(currentItem.id, formData);
      } else {
        if (modalMode === 'create') await createStaff(formData);
        else await updateStaff(currentItem.id, formData);
      }
      setShowModal(false);
      fetchData();
    } catch (error) {
      alert("Có lỗi xảy ra: " + error.message);
    }
  };

  const totalItems = dataList.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  const paginatedData = dataList.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const getVisiblePages = () => {
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage === 1) return [1, 2, 3];
    if (currentPage === totalPages) return [totalPages - 2, totalPages - 1, totalPages];

    return [currentPage - 1, currentPage, currentPage + 1];
  };


  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-xl shadow p-6">

        {/* TABS */}
        <div className="flex gap-4 mb-6 border-b">
          <button
            className={`pb-2 px-4 font-medium transition-colors ${activeTab === 'DOCTOR' ? 'text-maincolor border-b-2 border-maincolor' : 'text-gray-500 hover:text-gray-800'
              }`}
            onClick={() => setActiveTab('DOCTOR')}
          >
            Bác sĩ
          </button>
          <button
            className={`pb-2 px-4 font-medium transition-colors ${activeTab === 'STAFF' ? 'text-maincolor border-b-2 border-maincolor' : 'text-gray-500 hover:text-gray-800'
              }`}
            onClick={() => setActiveTab('STAFF')}
          >
            Nhân viên
          </button>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold">
            {activeTab === 'DOCTOR' ? 'Quản lý Bác sĩ' : 'Quản lý Nhân viên'}
          </h1>
          <button
            onClick={handleCreate}
            className="flex items-center gap-2 bg-maincolor text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            <Plus size={20} />
            Thêm mới
          </button>
        </div>

        {loading ? (
          <div className="text-center py-10">Đang tải...</div>
        ) : (
          <div className="overflow-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 text-gray-700">
                  <th className="p-4">Họ và tên</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">SĐT</th>
                  {activeTab === 'DOCTOR' ? (
                    <>
                      <th className="p-4">Chuyên khoa</th>
                      <th className="p-4">Học vị</th>
                      <th className="p-4">Trạng thái</th>
                    </>
                  ) : (
                    <>
                      <th className="p-4">Phòng ban</th>
                      <th className="p-4">Chức vụ</th>
                    </>
                  )}
                  <th className="p-4 text-center">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((item) => (
                  <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="p-4 font-medium">
                      {activeTab === 'DOCTOR' ? item.name : item.fullName}
                    </td>
                    <td className="p-4 text-gray-600 font-medium">
                      {item.email || item.contact?.email}
                    </td>
                    <td className="p-4 text-gray-600">
                      {item.phone || item.contact?.phone}
                    </td>
                    {activeTab === 'DOCTOR' ? (
                      <>
                        <td className="p-4 text-gray-600">{item.specialty?.name || item.specialty}</td>
                        <td className="p-4 text-gray-600">{item.degree}</td>
                        <td className="p-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${item.isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                            {item.isActive ? 'Hoạt động' : 'Khóa'}
                          </span>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="p-4 text-gray-600">{item.department}</td>
                        <td className="p-4 text-gray-600">{item.position}</td>
                      </>
                    )}
                    <td className="p-4 flex gap-2 justify-center">
                      <button
                        onClick={() => handleEdit(item)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition"
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-full transition"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
                {dataList.length === 0 && (
                  <tr>
                    <td colSpan="7" className="p-8 text-center text-gray-500">
                      Chưa có dữ liệu
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-gray-500">
            Hiển thị {(currentPage - 1) * pageSize + 1}
            {" - "}
            {Math.min(currentPage * pageSize, totalItems)}
            {" / "}
            {totalItems}
          </div>

          <div className="flex gap-1">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => p - 1)}
              className="px-3 py-1 border rounded disabled:opacity-40 hover:bg-gray-50"
            >
              <ChevronLeft />
            </button>

            {getVisiblePages().map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 border rounded
        ${currentPage === page
                    ? 'bg-maincolor text-white border-maincolor'
                    : 'hover:bg-gray-50'
                  }`}
              >
                {page}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => p + 1)}
              className="px-3 py-1 border rounded disabled:opacity-40 hover:bg-gray-50"
            >
              <ChevronRight />
            </button>
          </div>

        </div>
      )}


      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-auto shadow-2xl p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>

            <h2 className="text-xl font-bold mb-6 text-maincolor">
              {modalMode === 'create' ? `Thêm ${activeTab === 'DOCTOR' ? 'Bác sĩ' : 'Nhân viên'}` : 'Cập nhật thông tin'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {modalMode === 'create' && (
                <div className="md:col-span-2 bg-gray-50 p-4 rounded-lg border border-gray-100 mb-2">
                  <p className="text-sm font-semibold mb-2 text-gray-600">Thông tin đăng nhập</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Username *</label>
                      <input required type="text" className="w-full p-2 border rounded-lg"
                        value={formData.username}
                        onChange={e => setFormData({ ...formData, username: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Password *</label>
                      <input required type="password" className="w-full p-2 border rounded-lg"
                        value={formData.password}
                        onChange={e => setFormData({ ...formData, password: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">Họ và tên *</label>
                  <input required type="text" className="w-full p-2 border rounded-lg"
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">CCCD/CMND *</label>
                  <input required type="text" className="w-full p-2 border rounded-lg"
                    value={formData.citizenIdentificationCard}
                    onChange={e => setFormData({ ...formData, citizenIdentificationCard: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email *</label>
                  <input required type="email" className="w-full p-2 border rounded-lg"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Số điện thoại</label>
                  <input type="text" className="w-full p-2 border rounded-lg"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                {/* DOCTOR SPECIFIC */}
                {activeTab === 'DOCTOR' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium mb-1">Chuyên khoa</label>
                      <input type="text" className="w-full p-2 border rounded-lg"
                        value={formData.specialization}
                        onChange={e => setFormData({ ...formData, specialization: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Học vị</label>
                      <input type="text" className="w-full p-2 border rounded-lg"
                        value={formData.degree}
                        onChange={e => setFormData({ ...formData, degree: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Kinh nghiệm (năm)</label>
                      <input type="number" className="w-full p-2 border rounded-lg"
                        value={formData.yearsOfExperience}
                        onChange={e => setFormData({ ...formData, yearsOfExperience: parseInt(e.target.value) || 0 })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Số chứng chỉ hành nghề</label>
                      <input type="text" className="w-full p-2 border rounded-lg"
                        value={formData.licenseNumber}
                        onChange={e => setFormData({ ...formData, licenseNumber: e.target.value })}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-1">Giới thiệu</label>
                      <textarea className="w-full p-2 border rounded-lg" rows="3"
                        value={formData.description}
                        onChange={e => setFormData({ ...formData, description: e.target.value })}
                      />
                    </div>
                  </>
                )}

                {/* STAFF SPECIFIC */}
                {activeTab === 'STAFF' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium mb-1">Phòng ban</label>
                      <input type="text" className="w-full p-2 border rounded-lg"
                        value={formData.department}
                        onChange={e => setFormData({ ...formData, department: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Chức vụ</label>
                      <input type="text" className="w-full p-2 border rounded-lg"
                        value={formData.position}
                        onChange={e => setFormData({ ...formData, position: e.target.value })}
                      />
                    </div>
                  </>
                )}

                {activeTab === 'DOCTOR' && (
                  <div className="flex items-center pt-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="accent-maincolor w-5 h-5"
                        checked={formData.isActive !== false}
                        onChange={e => setFormData({ ...formData, isActive: e.target.checked })}
                      />
                      <span className="text-sm font-medium">Đang hoạt động</span>
                    </label>
                  </div>
                )}

              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-maincolor text-white rounded-lg hover:bg-blue-600"
                >
                  {modalMode === 'create' ? 'Lưu lại' : 'Cập nhật'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HumanResourceManagement;