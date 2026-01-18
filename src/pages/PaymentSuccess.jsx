import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { CheckCircle, XCircle } from 'lucide-react';
import { toast } from 'react-toastify';

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [status, setStatus] = useState('processing'); // processing, success, failed

    useEffect(() => {
        const verifyPayment = async () => {
            try {
                const queryString = searchParams.toString();
                const response = await fetch(`http://localhost:8080/api/payment/vnpay-return?${queryString}`);
                const data = await response.json();

                if (data.result === 1) {
                    setStatus('success');
                    toast.success("Thanh toán thành công!");
                } else {
                    setStatus('failed');
                    toast.error("Thanh toán thất bại hoặc lỗi xác thực!");
                }
            } catch (error) {
                console.error(error);
                setStatus('failed');
            }
        };

        verifyPayment();
    }, [searchParams]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center space-y-6">
                {status === 'processing' && (
                    <div className="space-y-4">
                        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                        <h2 className="text-xl font-semibold text-gray-800">Đang xử lý thanh toán...</h2>
                        <p className="text-gray-500">Vui lòng chờ trong giây lát.</p>
                    </div>
                )}

                {status === 'success' && (
                    <div className="space-y-4 animate-fade-in-up">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                            <CheckCircle size={40} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">Thanh toán thành công!</h2>
                        <p className="text-gray-500">Hóa đơn của bạn đã được cập nhật.</p>
                        <button
                            onClick={() => navigate('/myprofile/bills')}
                            className="bg-maincolor text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition w-full"
                        >
                            Xem hóa đơn
                        </button>
                    </div>
                )}

                {status === 'failed' && (
                    <div className="space-y-4 animate-fade-in-up">
                        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto text-red-600">
                            <XCircle size={40} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">Thanh toán thất bại</h2>
                        <p className="text-gray-500">Có lỗi xảy ra hoặc bạn đã hủy giao dịch.</p>
                        <button
                            onClick={() => navigate('/myprofile/bills')}
                            className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition w-full"
                        >
                            Quay lại
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PaymentSuccess;
