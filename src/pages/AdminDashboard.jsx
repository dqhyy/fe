import React, { useState, useEffect } from 'react';
import { getAllDoctors } from '../services/doctorService';
import {
    createDoctor, updateDoctor, deleteDoctor,
    getAllServices, createService, updateService, deleteService
} from '../services/adminService';
import { Trash2, Edit, Plus, X, Search, UserPlus, FileText } from 'lucide-react';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('doctors');
    const [doctors, setDoctors] = useState([]);
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const [modalMode, setModalMode] = useState('create'); // 'create' or 'edit'
    const [currentItem, setCurrentItem] = useState(null);

    const [doctorForm, setDoctorForm] = useState({
        username: '', password: '', email: '', fullName: '', phone: '',
        specialization: '', degree: '', yearsOfExperience: 0, licenseNumber: '', description: ''
    });

    const [serviceForm, setServiceForm] = useState({
        name: '', description: '', price: 0, durationMinutes: 30, isActive: true
    });

    useEffect(() => {
        fetchData();
    }, [activeTab]);

    const fetchData = async () => {
        setLoading(true);
        try {
            if (activeTab === 'doctors') {
                const data = await getAllDoctors();
                setDoctors(data);
            } else {
                const data = await getAllServices();
                setServices(data);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleCreate = () => {
        setModalMode('create');
        setCurrentItem(null);
        setDoctorForm({
            username: '', password: '', email: '', fullName: '', phone: '',
            specialization: '', degree: '', yearsOfExperience: 0, licenseNumber: '', description: ''
        });
        setServiceForm({
            name: '', description: '', price: 0, durationMinutes: 30, isActive: true
        });
        setShowModal(true);
    };

    const handleEdit = (item) => {
        setModalMode('edit');
        setCurrentItem(item);
        if (activeTab === 'doctors') {
            setDoctorForm({
                ...item,
                fullName: item.name,
                specialization: item.specialty?.key || item.specialty?.name || '',
                yearsOfExperience: item.experienceYears,
                password: '' // Don't show password
            });
        } else {
            setServiceForm({ ...item });
        }
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Bạn có chắc chắn muốn xóa?")) return;
        try {
            if (activeTab === 'doctors') {
                await deleteDoctor(id);
            } else {
                await deleteService(id);
            }
            fetchData();
        } catch (error) {
            alert("Xóa thất bại: " + error.message);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (activeTab === 'doctors') {
                if (modalMode === 'create') {
                    await createDoctor(doctorForm);
                } else {
                    await updateDoctor(currentItem.id, doctorForm);
                }
            } else {
                if (modalMode === 'create') {
                    await createService(serviceForm);
                } else {
                    await updateService(currentItem.id, serviceForm);
                }
            }
            setShowModal(false);
            fetchData();
        } catch (error) {
            alert("Có lỗi xảy ra: " + error.message);
        }
    };

    return (
        <div className="min-h-screen bg-bgcolor p-6">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-maincolor mb-6">Quản trị hệ thống</h1>

                <div className="flex gap-4 mb-6">
                    <button
                        onClick={() => setActiveTab('doctors')}
                        className={`px-6 py-2 rounded-lg font-medium transition-colors ${activeTab === 'doctors' ? 'bg-maincolor text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
                    >
                        Quản lý Bác sĩ
                    </button>
                    <button
                        onClick={() => setActiveTab('services')}
                        className={`px-6 py-2 rounded-lg font-medium transition-colors ${activeTab === 'services' ? 'bg-maincolor text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
                    >
                        Quản lý Dịch vụ
                    </button>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold">
                            {activeTab === 'doctors' ? 'Danh sách Bác sĩ' : 'Danh sách Dịch vụ'}
                        </h2>
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
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-100 text-gray-700">
                                        {activeTab === 'doctors' ? (
                                            <>
                                                <th className="p-4">Tên Bác sĩ</th>
                                                <th className="p-4">Chuyên khoa</th>
                                                <th className="p-4">Số điện thoại</th>
                                                <th className="p-4">Kinh nghiệm</th>
                                                <th className="p-4">Trạng thái</th>
                                            </>
                                        ) : (
                                            <>
                                                <th className="p-4">Tên Dịch vụ</th>
                                                <th className="p-4">Giá (VNĐ)</th>
                                                <th className="p-4">Thời lượng (phút)</th>
                                                <th className="p-4">Trạng thái</th>
                                            </>
                                        )}
                                        <th className="p-4 text-center">Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(activeTab === 'doctors' ? doctors : services).map((item) => (
                                        <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50">
                                            {activeTab === 'doctors' ? (
                                                <>
                                                    <td className="p-4 font-medium">{item.name}</td>
                                                    <td className="p-4 text-gray-600">{item.specialty?.name || item.specialty}</td>
                                                    <td className="p-4 text-gray-600">{item.contact?.phone || item.phone}</td>
                                                    <td className="p-4 text-gray-600">{item.experienceYears || item.yearsOfExperience} năm</td>
                                                    <td className="p-4">
                                                        <span className={`px-2 py-1 rounded-full text-xs ${item.isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                                            {item.isActive ? 'Hoạt động' : 'Khóa'}
                                                        </span>
                                                    </td>
                                                </>
                                            ) : (
                                                <>
                                                    <td className="p-4 font-medium">{item.name}</td>
                                                    <td className="p-4 text-maincolor font-semibold">{item.price?.toLocaleString()} đ</td>
                                                    <td className="p-4 text-gray-600">{item.durationMinutes}</td>
                                                    <td className="p-4">
                                                        <span className={`px-2 py-1 rounded-full text-xs ${item.isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                                            {item.isActive ? 'Hoạt động' : 'Khóa'}
                                                        </span>
                                                    </td>
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
                                    {(activeTab === 'doctors' ? doctors : services).length === 0 && (
                                        <tr>
                                            <td colSpan="6" className="p-8 text-center text-gray-500">
                                                Chưa có dữ liệu
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-auto shadow-2xl p-6 relative">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                        >
                            <X size={24} />
                        </button>

                        <h2 className="text-2xl font-bold mb-6 text-maincolor">
                            {modalMode === 'create' ? 'Thêm mới' : 'Chỉnh sửa'} {activeTab === 'doctors' ? 'Bác sĩ' : 'Dịch vụ'}
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {activeTab === 'doctors' ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {modalMode === 'create' && (
                                        <>
                                            <div className="md:col-span-2 bg-gray-50 p-4 rounded-lg border border-gray-100 mb-2">
                                                <p className="text-sm font-semibold mb-2 text-gray-600">Thông tin tài khoản</p>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-sm font-medium mb-1">Username *</label>
                                                        <input required type="text" className="w-full p-2 border rounded-lg"
                                                            value={doctorForm.username}
                                                            onChange={e => setDoctorForm({ ...doctorForm, username: e.target.value })}
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium mb-1">Password *</label>
                                                        <input required type="password" className="w-full p-2 border rounded-lg"
                                                            value={doctorForm.password}
                                                            onChange={e => setDoctorForm({ ...doctorForm, password: e.target.value })}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    <div className="md:col-span-2">
                                        <p className="text-sm font-semibold mb-2 text-gray-600">Thông tin cá nhân</p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-1">Họ và tên *</label>
                                        <input required type="text" className="w-full p-2 border rounded-lg"
                                            value={doctorForm.fullName}
                                            onChange={e => setDoctorForm({ ...doctorForm, fullName: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Email *</label>
                                        <input required type="email" className="w-full p-2 border rounded-lg"
                                            value={doctorForm.email}
                                            onChange={e => setDoctorForm({ ...doctorForm, email: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Số điện thoại</label>
                                        <input type="text" className="w-full p-2 border rounded-lg"
                                            value={doctorForm.phone}
                                            onChange={e => setDoctorForm({ ...doctorForm, phone: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Chuyên khoa</label>
                                        <input type="text" className="w-full p-2 border rounded-lg"
                                            value={doctorForm.specialization}
                                            onChange={e => setDoctorForm({ ...doctorForm, specialization: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Học vị</label>
                                        <input type="text" className="w-full p-2 border rounded-lg"
                                            value={doctorForm.degree}
                                            onChange={e => setDoctorForm({ ...doctorForm, degree: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Kinh nghiệm (năm)</label>
                                        <input type="number" className="w-full p-2 border rounded-lg"
                                            value={doctorForm.yearsOfExperience}
                                            onChange={e => setDoctorForm({ ...doctorForm, yearsOfExperience: parseInt(e.target.value) || 0 })}
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium mb-1">Giới thiệu</label>
                                        <textarea className="w-full p-2 border rounded-lg" rows="3"
                                            value={doctorForm.description}
                                            onChange={e => setDoctorForm({ ...doctorForm, description: e.target.value })}
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 gap-4">
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
                                </div>
                            )}

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
                                    {modalMode === 'create' ? 'Tạo mới' : 'Cập nhật'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
