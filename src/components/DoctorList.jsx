import { useMemo, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { doctors } from "../assets/data/data"

const PAGE_SIZE = 10

const DoctorList = ({ specialtyKey }) => {
    const [page, setPage] = useState(1)

    // reset page khi đổi chuyên khoa
    useEffect(() => {
        setPage(1)
    }, [specialtyKey])

    // lọc bác sĩ theo chuyên khoa + đang hoạt động
    const filteredDoctors = useMemo(() => {
        return doctors.filter(
            d =>
                d.specialty?.key === specialtyKey &&
                d.isActive !== false
        )
    }, [specialtyKey])

    const totalPages = Math.ceil(filteredDoctors.length / PAGE_SIZE)

    const pagedDoctors = useMemo(() => {
        const start = (page - 1) * PAGE_SIZE
        return filteredDoctors.slice(start, start + PAGE_SIZE)
    }, [filteredDoctors, page])

    if (filteredDoctors.length === 0) {
        return (
            <p className="text-gray-500">
                Hiện chưa có bác sĩ cho chuyên khoa này
            </p>
        )
    }

    return (
        <div className="space-y-6">
            {/* Danh sách bác sĩ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pagedDoctors.map(doctor => (
                    <div
                        key={doctor.id}
                        className="flex gap-4 rounded-lg p-4 bg-white shadow-sm"
                    >
                        <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="w-24 h-24 object-cover rounded-full"
                        />

                        <div className="flex flex-col justify-between flex-1">
                            <div>
                                <h3 className="font-semibold text-lg">
                                    <Link
                                        to={`/professionals/${doctor.id}`}
                                        className="hover:text-red-700 transition"
                                    >
                                        {doctor.name}
                                    </Link>
                                </h3>

                                <p className="text-sm text-gray-600">
                                    {doctor.degree}
                                    {doctor.experienceYears &&
                                        ` • ${doctor.experienceYears} năm kinh nghiệm`}
                                </p>

                                <p className="text-sm text-maincolor font-medium mt-1">
                                    {doctor.specialty.name}
                                </p>

                                {doctor.room && (
                                    <p className="text-xs text-gray-500 mt-1">
                                        📍 {doctor.room}
                                    </p>
                                )}
                            </div>

                            {/* Button đăng ký khám */}
                            <Link
                                to={`/booking?doctorId=${doctor.id}`}
                                className="mt-3 inline-block text-center
                                    px-4 py-2 rounded-md
                                    bg-red-700 text-white text-sm font-medium
                                    hover:bg-red-800 transition"
                            >
                                Đăng ký khám
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center gap-2">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setPage(index + 1)}
                            className={`px-3 py-1 rounded border
                                ${page === index + 1
                                    ? "bg-red-700 text-white"
                                    : "bg-white text-gray-700"
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default DoctorList
