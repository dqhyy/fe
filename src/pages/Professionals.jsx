import React, { useState, useMemo, useEffect } from "react"
import { Link } from "react-router-dom"
import CoverSection from "../components/CoverSection"
import { specialties, doctors } from "../assets/data/data"

const degreeOptions = ["BS", "ThS", "PGS.TS", "BSCKII", "BSCKI"]
const ITEMS_PER_PAGE = 10


const Professionals = () => {
    const [search, setSearch] = useState("")
    const [selectedSpecialties, setSelectedSpecialties] = useState([])
    const [selectedDegrees, setSelectedDegrees] = useState([])
    const [currentPage, setCurrentPage] = useState(1)


    /* ===== BUILD SPECIALTY OPTIONS (KEY + LABEL) ===== */
    const specialtyOptions = useMemo(() => {
        return specialties.flat().map(item => ({
            label: item.label,
            key: item.link.split("/").pop(), // ex: cardiology-center
        }))
    }, [])

    /* ===== TOGGLE CHECKBOX ===== */
    const toggleItem = (item, list, setList) => {
        setList(
            list.includes(item)
                ? list.filter(i => i !== item)
                : [...list, item]
        )
    }

    /* ===== FILTER LOGIC ===== */
    const filteredDoctors = useMemo(() => {
        return doctors.filter(d => {
            const matchName =
                d.name.toLowerCase().includes(search.toLowerCase())

            const matchSpecialty =
                selectedSpecialties.length === 0 ||
                selectedSpecialties.includes(d.specialty.key)

            const matchDegree =
                selectedDegrees.length === 0 ||
                selectedDegrees.some(deg => d.degree.includes(deg))

            return matchName && matchSpecialty && matchDegree
        })
    }, [search, selectedSpecialties, selectedDegrees])

    useEffect(() => {
        setCurrentPage(1)
    }, [search, selectedSpecialties, selectedDegrees])

    /* ===== PAGINATION LOGIC ===== */
    const totalPages = Math.ceil(filteredDoctors.length / ITEMS_PER_PAGE)

    const paginatedDoctors = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE
        return filteredDoctors.slice(start, start + ITEMS_PER_PAGE)
    }, [filteredDoctors, currentPage])

    return (
        <div className="bg-bgcolor pb-20">
            <CoverSection title="CHUYÊN GIA Y TẾ" />

            <div className="container mx-auto mt-10 px-4">

                {/* ===== BREADCRUMB ===== */}
                <div className="flex items-center mb-8 text-sm">
                    <Link to="/" className="text-maincolor font-semibold">
                        Trang chủ
                    </Link>
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-gray-600">Chuyên gia y tế</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    {/* ===== FILTER ===== */}
                    <aside className="bg-white rounded-2xl shadow-md p-6 h-fit">

                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold">Bộ lọc</h3>
                            <button
                                onClick={() => {
                                    setSearch("")
                                    setSelectedSpecialties([])
                                    setSelectedDegrees([])
                                }}
                                className="text-sm text-maincolor hover:underline"
                            >
                                Xóa lọc
                            </button>
                        </div>

                        {/* SEARCH */}
                        <div className="mb-5">
                            <input
                                type="text"
                                placeholder="Tìm theo tên bác sĩ..."
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                className="w-full px-4 py-2 border border-maincolor rounded-lg focus:outline-none"
                            />
                        </div>

                        {/* SPECIALTIES */}
                        <div className="mb-6">
                            <h4 className="font-medium mb-2">Chuyên khoa</h4>
                            <div className="space-y-2 max-h-52 overflow-auto pr-1">
                                {specialtyOptions.map(item => (
                                    <label
                                        key={item.key}
                                        className="flex items-center gap-2 cursor-pointer"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={selectedSpecialties.includes(item.key)}
                                            onChange={() =>
                                                toggleItem(
                                                    item.key,
                                                    selectedSpecialties,
                                                    setSelectedSpecialties
                                                )
                                            }
                                            className="accent-maincolor"
                                        />
                                        <span className="text-sm text-gray-700">
                                            {item.label}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* DEGREES */}
                        <div>
                            <h4 className="font-medium mb-2">Học vị</h4>
                            <div className="space-y-2">
                                {degreeOptions.map(item => (
                                    <label
                                        key={item}
                                        className="flex items-center gap-2 cursor-pointer"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={selectedDegrees.includes(item)}
                                            onChange={() =>
                                                toggleItem(
                                                    item,
                                                    selectedDegrees,
                                                    setSelectedDegrees
                                                )
                                            }
                                            className="accent-maincolor"
                                        />
                                        <span className="text-sm text-gray-700">
                                            {item}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* ===== DOCTOR LIST ===== */}
                    <section className="lg:col-span-3">

                        {/* SELECTED TAGS */}
                        {(selectedSpecialties.length > 0 ||
                            selectedDegrees.length > 0) && (
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {selectedSpecialties.map(key => {
                                        const sp = specialtyOptions.find(s => s.key === key)
                                        return (
                                            <span
                                                key={key}
                                                className="px-3 py-1 text-xs rounded-full bg-maincolor/10 text-maincolor"
                                            >
                                                {sp?.label}
                                            </span>
                                        )
                                    })}

                                    {selectedDegrees.map(deg => (
                                        <span
                                            key={deg}
                                            className="px-3 py-1 text-xs rounded-full bg-maincolor/10 text-maincolor"
                                        >
                                            {deg}
                                        </span>
                                    ))}
                                </div>
                            )}

                        {/* LIST */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                            {paginatedDoctors.map(doctor => (
                                <div
                                    key={doctor.id}
                                    className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 text-center"
                                >
                                    <img
                                        src={doctor.image}
                                        alt={doctor.name}
                                        className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-white shadow-md group-hover:scale-105 transition-transform"
                                    />

                                    <h4 className="mt-4 text-lg font-semibold">
                                        {doctor.name}
                                    </h4>

                                    <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-maincolor/10 text-maincolor">
                                        {doctor.specialty.name}
                                    </span>

                                    <p className="text-sm text-gray-600 mt-2">
                                        {doctor.degree}
                                    </p>

                                    <Link
                                        to={`/professionals/${doctor.id}`}
                                        className="inline-block mt-5 px-6 py-2 rounded-full border border-maincolor text-maincolor hover:bg-maincolor hover:text-white transition"
                                    >
                                        Xem hồ sơ
                                    </Link>
                                </div>
                            ))}
                        </div>

                        {totalPages > 1 && (
                            <div className="flex justify-center items-center gap-2 mt-10">
                                <button
                                    disabled={currentPage === 1}
                                    onClick={() => setCurrentPage(p => p - 1)}
                                    className="px-3 py-1 border rounded disabled:opacity-40"
                                >
                                    «
                                </button>

                                {[...Array(totalPages)].map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentPage(i + 1)}
                                        className={`px-3 py-1 rounded border ${currentPage === i + 1
                                                ? "bg-maincolor text-white"
                                                : ""
                                            }`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}

                                <button
                                    disabled={currentPage === totalPages}
                                    onClick={() => setCurrentPage(p => p + 1)}
                                    className="px-3 py-1 border rounded disabled:opacity-40"
                                >
                                    »
                                </button>
                            </div>
                        )}

                        {filteredDoctors.length === 0 && (
                            <p className="text-center text-gray-500 mt-10">
                                Không tìm thấy bác sĩ phù hợp
                            </p>
                        )}
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Professionals
