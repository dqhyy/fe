import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { createPortal } from "react-dom"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import CloseIcon from '@mui/icons-material/Close'

const BF = () => {
    const [openContact, setOpenContact] = useState(false)

    useEffect(() => {
        document.body.style.overflow = openContact ? "hidden" : "auto"
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [openContact])

    return (
        <>
            <div className="max-w-4xl w-full h-20 mx-auto grid grid-cols-3 shadow-lg rounded-t-lg overflow-hidden">

                <button
                    onClick={() => setOpenContact(true)}
                    className="flex items-center justify-center gap-2 bg-contactcolor text-white text-lg"
                >
                    <CalendarMonthIcon />
                    Liên hệ
                </button>

                <Link
                    to="/booking"
                    className="flex items-center justify-center gap-2 bg-bookingcolor text-white text-lg"
                >
                    <CalendarMonthIcon />
                    Đặt lịch
                </Link>

                <Link
                    to="/professionals"
                    className="flex items-center justify-center gap-2 bg-doctorcolor text-white text-lg"
                >
                    <LocalHospitalIcon />
                    Tìm bác sĩ
                </Link>
            </div>

           
            {openContact &&
                createPortal(
                    <div className="fixed inset-0 z-50 flex items-center justify-center">

                        <div
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                            onClick={() => setOpenContact(false)}
                        />

                        <div className="relative z-10 bg-white rounded-xl shadow-xl w-[90%] max-w-md p-6 animate-fadeIn">

                            <button
                                onClick={() => setOpenContact(false)}
                                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                            >
                                <CloseIcon />
                            </button>

                            <h2 className="text-2xl font-semibold mb-4 text-center">
                                Thông tin liên hệ
                            </h2>

                            <div className="space-y-3 text-gray-700">
                                <p>📞 <strong>Hotline:</strong> 1900 1234</p>
                                <p>📧 <strong>Email:</strong> support@benhvien.vn</p>
                                <p>📍 <strong>Địa chỉ:</strong> 123 Nguyễn Trãi, Hà Nội</p>
                                <p>⏰ <strong>Giờ làm việc:</strong> 7:00 – 17:00</p>
                            </div>
                        </div>
                    </div>,
                    document.body
                )
            }
        </>
    )
}

export default BF
