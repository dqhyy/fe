import React, { useState, useEffect } from 'react';
import { getAllBills, confirmPayment } from "../../services/staffService";
import { Search, Filter, Receipt, CheckCircle, Clock, Calendar, User, UserCheck } from 'lucide-react';
import { toast } from 'react-toastify';

const BillManagement = () => {
    const [bills, setBills] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filterStatus, setFilterStatus] = useState('ALL'); // ALL, UNPAID, PAID
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchBills();
    }, []);

    const fetchBills = async () => {
        setLoading(true);
        try {
            const data = await getAllBills();
            // Sort by createdAt desc
            data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            setBills(data);
        } catch (error) {
            toast.error("Không thể tải danh sách hóa đơn: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleConfirmPayment = async (billId) => {
        if (!window.confirm("Xác nhận đã nhận thanh toán cho hóa đơn này?")) return;
        try {
            await confirmPayment(billId);
            toast.success("Đã xác nhận thanh toán!");
            fetchBills();
        } catch (error) {
            toast.error("Lỗi: " + error.message);
        }
    };

    // Filter Logic
    const filteredBills = bills.filter(bill => {
        const matchesStatus = filterStatus === 'ALL' || bill.status === filterStatus;
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch =
            (bill.patientName && bill.patientName.toLowerCase().includes(searchLower)) ||
            (bill.id.toString().includes(searchLower)) ||
            (bill.specialty && bill.specialty.toLowerCase().includes(searchLower));

        return matchesStatus && matchesSearch;
    });

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
    };

    const formatDate = (dateString) => {
        if (!dateString) return "-";
        return new Date(dateString).toLocaleString('vi-VN');
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                            <Receipt className="text-maincolor" /> Quản lý Thanh toán
                        </h1>
                        <p className="text-gray-500 mt-1">Theo dõi và xác nhận thanh toán viện phí</p>
                    </div>
                </div>

                {/* Filters */}
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="flex items-center gap-2 w-full md:w-auto">
                        <div className="relative flex-1 md:w-80">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                placeholder="Tìm kiếm tên bệnh nhân, mã hóa đơn..."
                                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto">
                        <Filter size={18} className="text-gray-400 hidden md:block" />
                        <button
                            onClick={() => setFilterStatus('ALL')}
                            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition ${filterStatus === 'ALL' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                        >
                            Tất cả
                        </button>
                        <button
                            onClick={() => setFilterStatus('UNPAID')}
                            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition ${filterStatus === 'UNPAID' ? 'bg-yellow-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                        >
                            Chưa thanh toán
                        </button>
                        <button
                            onClick={() => setFilterStatus('PAID')}
                            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition ${filterStatus === 'PAID' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                        >
                            Đã thanh toán
                        </button>
                        <button
                            onClick={fetchBills}
                            className="px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center gap-2"
                            title="Tải lại danh sách"
                        >
                            <span className="text-xs">🔄</span> Tải lại
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200 text-gray-600 text-sm uppercase tracking-wider">
                                    <th className="p-4 font-semibold">Mã HĐ</th>
                                    <th className="p-4 font-semibold">Bệnh nhân</th>
                                    <th className="p-4 font-semibold">Bác sĩ / Chuyên khoa</th>
                                    <th className="p-4 font-semibold">Dịch vụ / Ngày khám</th>
                                    <th className="p-4 font-semibold">Số tiền</th>
                                    <th className="p-4 font-semibold">Trạng thái</th>
                                    <th className="p-4 font-semibold text-right">Hành động</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {loading ? (
                                    <tr>
                                        <td colSpan="7" className="p-8 text-center text-gray-500">Đang tải dữ liệu...</td>
                                    </tr>
                                ) : filteredBills.length === 0 ? (
                                    <tr>
                                        <td colSpan="7" className="p-8 text-center text-gray-500">Không tìm thấy hóa đơn nào.</td>
                                    </tr>
                                ) : (
                                    filteredBills.map((bill) => (
                                        <tr key={bill.id} className="hover:bg-gray-50 transition">
                                            <td className="p-4 font-medium text-gray-800">#{bill.id}</td>
                                            <td className="p-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">
                                                        {bill.patientName?.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <div className="font-medium text-gray-800">{bill.patientName}</div>
                                                        <div className="text-xs text-gray-500">Mã BN: {bill.patientId || '-'}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <div className="text-gray-800 font-medium">{bill.doctorName}</div>
                                                <div className="text-xs text-gray-500">{bill.specialty}</div>
                                            </td>
                                            <td className="p-4">
                                                <div className="flex items-center gap-1 text-gray-600 text-sm">
                                                    <Calendar size={14} /> {bill.appointmentDate}
                                                </div>
                                                <div className="text-xs text-gray-500 mt-1">Đã khám xong</div>
                                            </td>
                                            <td className="p-4 font-bold text-gray-800 text-base">
                                                {formatCurrency(bill.amount)}
                                            </td>
                                            <td className="p-4">
                                                {bill.status === 'PAID' ? (
                                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">
                                                        <CheckCircle size={12} /> Đã thanh toán
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-yellow-100 text-yellow-700">
                                                        <Clock size={12} /> Chờ thanh toán
                                                    </span>
                                                )}
                                                {bill.paymentDate && (
                                                    <div className="text-xs text-gray-400 mt-1">
                                                        {formatDate(bill.paymentDate)}
                                                    </div>
                                                )}
                                            </td>
                                            <td className="p-4 text-right">
                                                {bill.status === 'UNPAID' && (
                                                    <button
                                                        onClick={() => handleConfirmPayment(bill.id)}
                                                        className="px-4 py-2 bg-maincolor text-white text-sm font-medium rounded-lg hover:bg-blue-700 shadow-sm transition hover:shadow-md"
                                                    >
                                                        Xác nhận thu tiền
                                                    </button>
                                                )}
                                                {bill.status === 'PAID' && (
                                                    <button className="text-gray-400 text-sm font-medium hover:text-gray-600">
                                                        In hóa đơn
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BillManagement;
