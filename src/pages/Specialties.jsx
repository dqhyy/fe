import React from 'react'
import CoverSection from '../components/CoverSection'
import { Link } from 'react-router-dom'
import { specialties } from '../assets/data/data'

const Specialties = () => {
    return (
        <div className='bg-bgcolor pb-20' >
            <CoverSection title={"CHUYÊN KHOA"} />
            <div className="container mx-auto mt-10">
                <div className="flex items-center mb-8">
                    <Link to="/" className="text-maincolor mr-2 text-base font-bold">
                        Trang chủ
                    </Link>
                    <p className="text-gray-700 text-base">
                        &gt; Chuyên khoa
                    </p>
                </div>

                {/* Grid */}
                <div className="mx-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {specialties.flat().map((item, index) => (
                        <Link
                            key={index}
                            to={item.link}
                            className="group border border-gray-300 overflow-hidden transition"
                        >
                            <div className=" overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.label}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="p-5 flex flex-col">
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                    {item.label}
                                </h3>

                                <span className="text-maincolor text-sm font-light">
                                    Xem thêm →
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Specialties