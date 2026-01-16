import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CoverSection from '../components/CoverSection'
import { specialties, doctors } from '../assets/data/data'
import { Alert, CircularProgress } from '@mui/material'

const Booking = () => {
    const navigate = useNavigate()
    
    const [selectedSpecialty, setSelectedSpecialty] = useState('')
    const [selectedDoctor, setSelectedDoctor] = useState('')
    const [filteredDoctors, setFilteredDoctors] = useState([])
    const [appointmentDate, setAppointmentDate] = useState('')
    
    const [patientName, setPatientName] = useState('')
    const [gender, setGender] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [email, setEmail] = useState('')
    const [reasonForVisit, setReasonForVisit] = useState('')
    
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)

    const handleSpecialtyChange = (e) => {
        const specialtyKey = e.target.value
        setSelectedSpecialty(specialtyKey)
        setSelectedDoctor('')

        const result = doctors.filter(
            (doctor) => doctor.specialty.key === specialtyKey
        )
        setFilteredDoctors(result)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setSuccess(false)

        if (!selectedSpecialty) {
            setError('Vui lòng chọn chuyên khoa')
            return
        }

        if (!appointmentDate) {
            setError('Vui lòng chọn ngày khám')
            return
        }

        if (!patientName.trim()) {
            setError('Vui lòng nhập họ và tên')
            return
        }

        if (!gender) {
            setError('Vui lòng chọn giới tính')
            return
        }

        if (!phoneNumber.trim()) {
            setError('Vui lòng nhập số điện thoại')
            return
        }

        if (!dateOfBirth) {
            setError('Vui lòng nhập ngày sinh')
            return
        }

        if (!reasonForVisit.trim()) {
            setError('Vui lòng nhập lý do khám')
            return
        }

        setLoading(true)

        try {
            const token = localStorage.getItem('hycare_token')
            if (!token) {
                navigate('/login')
                return
            }

            const genderValue = gender === 'Nam' ? 'MALE' : gender === 'Nữ' ? 'FEMALE' : gender

            const requestBody = {
                specialty: selectedSpecialty,
                doctorId: selectedDoctor ? parseInt(selectedDoctor) : null,
                appointmentDate: appointmentDate,
                patientName: patientName.trim(),
                gender: genderValue,
                phoneNumber: phoneNumber.trim(),
                dateOfBirth: dateOfBirth,
                email: email.trim() || null,
                reasonForVisit: reasonForVisit.trim()
            }

            const response = await fetch('http://localhost:8080/api/patient/booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(requestBody)
            })

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}))
                throw new Error(
                    errorData.message || 
                    errorData.error || 
                    'Đặt lịch thất bại. Vui lòng thử lại.'
                )
            }

            setSuccess(true)
            
            setTimeout(() => {
                setSelectedSpecialty('')
                setSelectedDoctor('')
                setFilteredDoctors([])
                setAppointmentDate('')
                setPatientName('')
                setGender('')
                setPhoneNumber('')
                setDateOfBirth('')
                setEmail('')
                setReasonForVisit('')
                setSuccess(false)
            }, 3000)

        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
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

                {/* Error Alert */}
                {error && (
                    <Alert severity="error" sx={{ mb: 3 }}>
                        {error}
                    </Alert>
                )}

                {/* Success Alert */}
                {success && (
                    <Alert severity="success" sx={{ mb: 3 }}>
                        Đặt lịch thành công! Tổng đài viên sẽ gọi lại để xác nhận.
                    </Alert>
                )}

                <form onSubmit={handleSubmit}>
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
                        <input
                            type="date"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-gray-300"
                            value={appointmentDate}
                            onChange={(e) => setAppointmentDate(e.target.value)}
                            min={new Date().toISOString().split('T')[0]}
                            required
                        />
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
                                    value={patientName}
                                    onChange={(e) => setPatientName(e.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <label className="block font-medium text-maincolor mb-1">
                                    Giới tính <span className="text-red-500">*</span>
                                </label>
                                <div className="flex gap-4">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input 
                                            type="radio" 
                                            name="gender" 
                                            value="Nam"
                                            checked={gender === 'Nam'}
                                            onChange={(e) => setGender(e.target.value)}
                                            required
                                        /> 
                                        Nam
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input 
                                            type="radio" 
                                            name="gender" 
                                            value="Nữ"
                                            checked={gender === 'Nữ'}
                                            onChange={(e) => setGender(e.target.value)}
                                            required
                                        /> 
                                        Nữ
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className="block font-medium text-maincolor mb-1">
                                    Số điện thoại <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    placeholder="Nhập số điện thoại"
                                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-0 focus:border-gray-300"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    required
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
                                    value={dateOfBirth}
                                    onChange={(e) => setDateOfBirth(e.target.value)}
                                    max={new Date().toISOString().split('T')[0]}
                                    required
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
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                value={reasonForVisit}
                                onChange={(e) => setReasonForVisit(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="text-center mt-6">
                        <button 
                            type="submit"
                            disabled={loading}
                            className="px-6 py-3 bg-maincolor text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mx-auto"
                        >
                            {loading ? (
                                <>
                                    <CircularProgress size={20} color="inherit" />
                                    <span>Đang gửi...</span>
                                </>
                            ) : (
                                'Gửi thông tin'
                            )}
                        </button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Booking
