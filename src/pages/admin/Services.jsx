import React, { useState, useEffect } from 'react';
import { getAllServices, createService, updateService, deleteService } from '../../services/adminService';
import { Trash2, Edit, Plus, X, Search, ChevronLeft, ChevronRight } from 'lucide-react';

const Services = () => {
  const pageSize = 5;

  const [currentPage, setCurrentPage] = useState(1);

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('create'); // 'create' or 'edit'
  const [currentItem, setCurrentItem] = useState(null);

  // Form state
  const [serviceForm, setServiceForm] = useState({
    name: '', description: '', price: 0, durationMinutes: 30, isActive: true
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await getAllServices();
      setServices(data);
    } catch (error) {
      console.error("Error fetching services:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setModalMode('create');
    setCurrentItem(null);
    setServiceForm({
      name: '', description: '', price: 0, durationMinutes: 30, isActive: true
    });
    setShowModal(true);
  };

  const handleEdit = (item) => {
    setModalMode('edit');
    setCurrentItem(item);
    setServiceForm({ ...item });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa dịch vụ này?")) return;
    try {
      await deleteService(id);
      fetchData();
    } catch (error) {
      alert("Xóa thất bại: " + error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (modalMode === 'create') {
        await createService(serviceForm);
      } else {
        await updateService(currentItem.id, serviceForm);
      }
      setShowModal(false);
      fetchData();
    } catch (error) {
      alert("Có lỗi xảy ra: " + error.message);
    }
  };

  const totalItems = services.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  const paginatedServices = services.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const getVisiblePages = () => {
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage === 1) return [1, 2, 3];
    if (currentPage === totalPages) {
      return [totalPages - 2, totalPages - 1, totalPages];
    }

    return [currentPage - 1, currentPage, currentPage + 1];
  };



  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold">Quản lý Dịch vụ Y tế</h1>
          <button
            onClick={handleCreate}
            className="flex items-center gap-2 bg-maincolor text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            <Plus size={20} />
            Thêm dịch vụ
          </button>
        </div>

        {loading ? (
          <div className="text-center py-10">Đang tải...</div>
        ) : (
          <div className="overflow-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 text-gray-700">
                  <th className="p-4">Tên Dịch vụ</th>
                  <th className="p-4">Giá (VNĐ)</th>
                  <th className="p-4">Thời lượng (phút)</th>
                  <th className="p-4">Mô tả</th>
                  <th className="p-4">Trạng thái</th>
                  <th className="p-4 text-center">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {paginatedServices.map((item) => (
                  <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="p-4 font-medium">{item.name}</td>
                    <td className="p-4 text-maincolor font-semibold">{item.price?.toLocaleString()} đ</td>
                    <td className="p-4 text-gray-600">{item.durationMinutes}</td>
                    <td className="p-4 text-gray-600 max-w-xs truncate">{item.description}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${item.isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {item.isActive ? 'Hoạt động' : 'Khóa'}
                      </span>
                    </td>
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
                {services.length === 0 && (
                  <tr>
                    <td colSpan="6" className="p-8 text-center text-gray-500">
                      Chưa có dịch vụ nào
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>



      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>

            <h2 className="text-xl font-bold mb-6 text-maincolor">
              {modalMode === 'create' ? 'Thêm dịch vụ mới' : 'Cập nhật dịch vụ'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Tên Dịch vụ *</label>
                <input required type="text" className="w-full p-2 border rounded-lg"
                  value={serviceForm.name}
                  onChange={e => setServiceForm({ ...serviceForm, name: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Giá (VNĐ) *</label>
                  <input required type="number" className="w-full p-2 border rounded-lg"
                    value={serviceForm.price}
                    onChange={e => setServiceForm({ ...serviceForm, price: parseFloat(e.target.value) })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Thời lượng (phút) *</label>
                  <input required type="number" className="w-full p-2 border rounded-lg"
                    value={serviceForm.durationMinutes}
                    onChange={e => setServiceForm({ ...serviceForm, durationMinutes: parseInt(e.target.value) })}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Mô tả</label>
                <textarea className="w-full p-2 border rounded-lg" rows="3"
                  value={serviceForm.description}
                  onChange={e => setServiceForm({ ...serviceForm, description: e.target.value })}
                />
              </div>
              <div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-maincolor w-5 h-5"
                    checked={serviceForm.isActive}
                    onChange={e => setServiceForm({ ...serviceForm, isActive: e.target.checked })}
                  />
                  <span className="text-sm font-medium">Đang hoạt động</span>
                </label>
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

    </div>
  );
};

export default Services;
