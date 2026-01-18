import React, { useState, useEffect } from 'react';
import { getMyBills, createPaymentUrl } from '../../services/patientService'; // Ensure createPaymentUrl is exported from patientService
import { CreditCard, Calendar, CheckCircle, Clock } from 'lucide-react';
import { toast } from 'react-toastify';

const PatientBills = () => {
    const [bills, setBills] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchBills();
    }, []);

    const fetchBills = async () => {
        setLoading(true);
        try {
            const data = await getMyBills();
            // Sort: UNPAID first, then by date desc
            data.sort((a, b) => {
                if (a.status === 'UNPAID' && b.status !== 'UNPAID') return -1;
                if (a.status !== 'UNPAID' && b.status === 'UNPAID') return 1;
                return new Date(b.createdAt) - new Date(a.createdAt);
            });
            setBills(data);
        } catch (error) {
            console.error(error);
            toast.error("Không thể tải danh sách hóa đơn");
        } finally {
            setLoading(false);
        }
    };

    const handlePayment = async (billId) => {
        try {
            const paymentUrl = await createPaymentUrl(billId);
            if (paymentUrl) {
                window.location.href = paymentUrl;
            } else {
                toast.error("Không thể tạo link thanh toán");
            }
        } catch (error) {
            console.error(error);
            toast.error("Lỗi khi kết nối đến cổng thanh toán");
        }
    };

    const getStatusBadge = (status) => {
        switch (status) {
            case 'PAID':
                return <span className="flex items-center gap-1 text-green-600 bg-green-50 px-3 py-1 rounded-full text-xs font-medium"><CheckCircle size={14} /> ĐÃ THANH TOÁN</span>;
            case 'UNPAID':
                return <span className="flex items-center gap-1 text-red-600 bg-red-50 px-3 py-1 rounded-full text-xs font-medium"><Clock size={14} /> CHƯA THANH TOÁN</span>;
            default:
                return <span className="text-gray-600 bg-gray-50 px-3 py-1 rounded-full text-xs font-medium">{status}</span>;
        }
    };

    if (loading) return <div className="text-center py-10">Đang tải hóa đơn...</div>;

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Hóa đơn & Thanh toán</h2>

            <div className="grid gap-4">
                {bills.length === 0 ? (
                    <div className="text-center py-10 bg-gray-50 rounded-lg text-gray-500">
                        Bạn chưa có hóa đơn nào.
                    </div>
                ) : (
                    bills.map((bill) => (
                        <div key={bill.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition hover:shadow-md">
                            <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                    <span className="font-semibold text-lg text-maincolor">#{bill.id}</span>
                                    {getStatusBadge(bill.status)}
                                </div>
                                <div className="text-gray-600 text-sm flex items-center gap-4">
                                    <span className="flex items-center gap-1"><Calendar size={14} /> {bill.appointmentDate}</span>
                                    <span>•</span>
                                    <span>BS. {bill.doctorName}</span>
                                    <span>•</span>
                                    <span>{bill.specialty}</span>
                                </div>
                                <div className="text-sm text-gray-500">
                                    Ngày tạo: {new Date(bill.createdAt).toLocaleDateString()}
                                </div>
                            </div>

                            <div className="flex flex-col items-end gap-3 w-full md:w-auto">
                                <span className="text-xl font-bold text-gray-800">
                                    {bill.amount.toLocaleString()} VND
                                </span>
                                {bill.status === 'UNPAID' && (
                                    <button
                                        onClick={() => handlePayment(bill.id)}
                                        className="flex items-center gap-2 bg-maincolor text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition w-full md:w-auto justify-center"
                                    >
                                        <CreditCard size={18} />
                                        Thanh toán ngay (VNPay)
                                    </button>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default PatientBills;
