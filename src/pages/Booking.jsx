import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CoverSection from '../components/CoverSection'
import { specialties, doctors } from '../assets/data/data'

const Booking = () => {
    const [selectedSpecialty, setSelectedSpecialty] = useState('')
    const [selectedDoctor, setSelectedDoctor] = useState('')
    const [filteredDoctors, setFilteredDoctors] = useState([])

    const handleSpecialtyChange = (e) => {
        const specialtyKey = e.target.value
        setSelectedSpecialty(specialtyKey)
        setSelectedDoctor('')

        const result = doctors.filter(
            (doctor) => doctor.specialty.key === specialtyKey
        )
        setFilteredDoctors(result)
    }

    return (
        <div className="bg-bgcolor pb-20">
            <CoverSection title="Đặt lịch" />

            <div className="container mx-auto px-4 pt-10">
                <div className="flex items-center mb-8">
                    <Link to="/" className="text-maincolor mr-2 text-base font-bold">
                        Trang chủ
                    </Link>
                    <p className="text-gray-700 text-base">&gt; Đặt lịch</p>
                </div>
            </div>

            <div className="container mx-auto px-4 pb-10">
                <h2 className="text-2xl font-semibold mb-6">
                    Nội dung chi tiết đặt hẹn
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    {/* LEFT */}
                    <div className="space-y-4">
                        {/* Chuyên khoa */}
                        <div>
                            <label className="block font-medium text-maincolor mb-1">
                                Chuyên khoa <span className="text-red-500">*</span>
                            </label>
                            <select
                                className="w-full border border-gray-300 rounded-md p-2 text-gray-600 focus:outline-none focus:ring-0 focus:border-gray-300"
                                value={selectedSpecialty}
                                onChange={handleSpecialtyChange}
                            >
                                <option value="">Chọn chuyên khoa</option>
                                {specialties.flat().map((item, index) => (
                                    <option
                                        key={index}
                                        value={item.link.split('/').pop()}
                                    >
                                        {item.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Bác sĩ */}
                        <div>
                            <label className="block font-medium text-maincolor mb-1">
                                Bác sĩ
                            </label>
                            <select
                                className="w-full border border-gray-300 rounded-md p-2 text-gray-600 focus:outline-none focus:ring-0 focus:border-gray-300"
                                value={selectedDoctor}
                                onChange={(e) => setSelectedDoctor(e.target.value)}
                                disabled={!selectedSpecialty}
                            >
                                <option value="">Chọn bác sĩ muốn khám</option>

                                {filteredDoctors.length > 0 ? (
                                    filteredDoctors.map((doctor) => (
                                        <option key={doctor.id} value={doctor.id}>
                                            {doctor.degree} {doctor.name}
                                        </option>
                                    ))
                                ) : (
                                    selectedSpecialty && (
                                        <option disabled>
                                            Không có bác sĩ phù hợp
                                        </option>
                                    )
                                )}
                            </select>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="space-y-4">
                        <label className="block font-medium text-maincolor">
                            Thời gian khám <span className="text-red-500">*</span>
                        </label>
                        <div className="flex gap-2 flex-wrap">
                            <button className="px-4 py-2 bg-blue-100 rounded">
                                28/11 Thứ 6
                            </button>
                            <button className="px-4 py-2 rounded text-gray-400 border">
                                29/11 Thứ 7
                            </button>
                            <button className="px-4 py-2 rounded text-gray-400 border">
                                30/11 Chủ nhật
                            </button>
                            <input
                                type="date"
                                className="px-4 py-2 border rounded text-gray-400"
                            />
                        </div>
                        <p className="text-sm text-gray-500">
                            * Tổng đài viên HyCare sẽ gọi lại để xác nhận thời gian
                            khám.
                        </p>
                    </div>
                </div>

                {/* THÔNG TIN KHÁCH HÀNG */}
                <div className="mt-12">
                    <h2 className="text-2xl font-semibold mb-6">
                        Thông tin khách hàng
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                        <div className="space-y-4">
                            <div>
                                <label className="block font-medium text-maincolor mb-1">
                                    Họ và tên <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Họ và tên"
                                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-0 focus:border-gray-300"
                                />
                            </div>

                            <div>
                                <label className="block font-medium text-maincolor mb-1">
                                    Giới tính <span className="text-red-500">*</span>
                                </label>
                                <div className="flex gap-4">
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="gender" /> Nam
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="gender" /> Nữ
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className="block font-medium text-maincolor mb-1">
                                    Số điện thoại <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Nhập số điện thoại"
                                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-0 focus:border-gray-300"
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block font-medium text-maincolor mb-1">
                                    Ngày sinh <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="date"
                                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-0 focus:border-gray-300"
                                />
                            </div>

                            <div>
                                <label className="block font-medium text-maincolor mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Nhập email"
                                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-0 focus:border-gray-300"
                                />
                            </div>
                        </div>

                        <div className="md:col-span-2">
                            <label className="block font-medium text-maincolor mb-1">
                                Lý do khám <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                rows="4"
                                placeholder="Triệu chứng của bạn"
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-0 focus:border-gray-300"
                            />
                        </div>
                    </div>

                    <div className="text-center mt-6">
                        <button className="px-6 py-3 bg-maincolor text-white rounded-md hover:bg-blue-700">
                            Gửi thông tin
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking
