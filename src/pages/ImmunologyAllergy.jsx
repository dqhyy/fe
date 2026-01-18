import React, { useState } from 'react'
import CoverSection from '../components/CoverSection'
import { Link } from 'react-router-dom'
import ImageLeftContentRight from '../components/ImageLeftContentRight';
import ContentLeftImageRight from '../components/ContentLeftImageRight';
import UnderlinedTitle from '../components/UnderlinedTitle';
import DoctorList from '../components/DoctorList';

const ImmunologyAllergy = () => {
    const [tab, setTab] = useState("overview");
    return (
        <div className='bg-bgcolor pb-20'>
            <CoverSection title={"MIỄN DỊCH - DỊ ỨNG"} />
            <div className="container mx-auto mt-10">
                <div className="flex items-center mb-8">
                    <Link to="/" className="text-maincolor mr-2 text-base font-bold">
                        Trang chủ
                    </Link>
                    <Link to="/specialties" className="text-maincolor mr-2 text-base font-bold">
                        &gt; Chuyên khoa
                    </Link>
                    <p className="text-gray-700 text-base">
                        &gt; Cấp cứu
                    </p>

                </div>

                <div className='mx-20'>

                    <h1 className="text-3xl font-bold text-center text-red-700">
                        Giải pháp cá thể hóa cho hệ miễn dịch
                    </h1>

                    <div className="w-24 h-1 bg-red-700 mx-auto mt-3 mb-10"></div>

                    <div className="flex flex-wrap justify-center gap-3 mb-10 max-w mx-auto">
                        {["overview", "services", "technology", "doctors"].map((item) => (
                            <button
                                key={item}
                                onClick={() => setTab(item)}
                                className={`flex-1 text-center py-3 rounded-lg border transition-all
        ${tab === item
                                        ? "bg-red-700 text-white font-semibold"
                                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                                    }`}
                            >
                                {item === "overview"
                                    ? "Tổng quan"
                                    : item === "services"
                                        ? "Dịch vụ"
                                        : item === "technology"
                                            ? "Công nghệ"
                                            : "Danh sách bác sĩ"}
                            </button>
                        ))}
                    </div>

                    <p className="text-gray-700 leading-relaxed pb-5">
                        Với tiếp cận miễn dịch cá thể hóa, điều trị đích để tối ưu hiệu quả điều trị, giảm tác dụng phụ do các điều trị thông thường gây ra. Các ca bệnh khó được hội chẩn và đồng thuận bởi các chuyên gia tại Việt Nam và thế giới về tiếp cận chẩn đoán, điều trị cũng như xây dựng các biện pháp dự phòng tối ưu cho mỗi người bệnh.
                    </p>


                    <div className="px-10 bg-white text-gray-700 leading-7 text-lg">

                        {tab === "overview" && (
                            <div className="">
                                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                                    <div className="space-y-3">
                                        <UnderlinedTitle title="Đội ngũ bác sỹ và chuyên gia" />
                                        <p className="text-gray-700 leading-relaxed">
                                            <strong>Đội ngũ bác sỹ và chuyên gia HyCare:</strong> được đào tạo tại các Trung tâm Dị ứng-Miễn dịch lâm sàng lớn trên thế giới, các chuyên gia nước ngoài làm việc liên tục tại HyCare thông qua các chương trình hợp tác quốc tế với Đại học Penn State (Hoa Kỳ), Đại học Sydney, Đại Học Macquarie (Úc), ĐH Paris (Pháp).
                                        </p>
                                        <p className="text-gray-700 leading-relaxed">
                                            <strong>Chẩn đoán và điều trị:</strong> theo các tiêu chuẩn và khuyến cáo quốc tế như GA2LEN, GINA, WAO, AAAAI, EAACI, APAACI về các bệnh lý liên quan đến dị ứng và hệ thống miễn dịch
                                        </p>



                                    </div>
                                </ImageLeftContentRight>

                                <ContentLeftImageRight imageSrc="/emergency/emergency_1.jpg">
                                    <div className="space-y-3">
                                        <UnderlinedTitle title="Chuẩn đoán và điều trị" />
                                        <p className="text-gray-700 font-bold leading-relaxed">
                                            Trung tâm có các phương pháp chẩn đoán hiện đại và đồng bộ tại Việt Nam
                                        </p>

                                        <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
                                            <li>Hệ thống xét nghiệm phát hiện kháng thể tiên tiến</li>
                                            <li>Các máy đo và thăm dò chức năng hô hấp</li>
                                        </ul>

                                        <p className="text-gray-700 font-bold leading-relaxed">
                                            Trung tâm triển khai đầy đủ các dịch vụ và phương pháp điều trị tiên tiến
                                        </p>

                                        <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
                                            <li>Sử dụng các thuốc ức chế miễn dịch</li>
                                            <li>Sử dụng chế phẩm sinh học</li>
                                            <li>Sử dụng kháng thể đơn dòng</li>
                                            <li>Liệu pháp miễn dịch</li>
                                        </ul>

                                        <p className="text-gray-700 leading-relaxed">
                                            Bên cạnh việc đầu tư đồng bộ cả về vật chất và con người, HyCare còn thực hiện các chương trình chăm sóc sức khỏe từ xa, theo dõi và chăm sóc sức khỏe tại nhà, giúp khách hàng được chăm sóc một cách toàn diện.
                                        </p>
                                    </div>
                                </ContentLeftImageRight>

                            </div>
                        )}

                        {tab === "services" && (
                            <div>
                                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                                    <div className="space-y-3">
                                        <UnderlinedTitle title="Chẩn đoán và điều trị tiêu chuẩn" />
                                        <p className="text-gray-700 leading-relaxed ">
                                            <strong>Trung tâm có thế mạnh trong việc chẩn đoán và điều trị theo các tiêu chuẩn và khuyến cáo quốc tế</strong> như GA2LEN, GINA, WAO, AAAAI, EAACI, APAACI về các bệnh  lý liên quan đến dị ứng và hệ thống miễn dịch.
                                        </p>
                                        <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
                                            <li>Hen phế quản</li>
                                            <li>Viêm da cơ địa</li>
                                            <li>Mày đay phù mạch</li>
                                            <li>Dị ứng thuốc</li>
                                            <li>Lupus ban đỏ và các bệnh lý tự miễn</li>
                                            <li>Suy giảm miễn dịch bẩm sinh và mắc phải</li>
                                        </ul>
                                    </div>
                                </ImageLeftContentRight>
                            </div>
                        )}

                        {tab === "technology" && (
                            <div>
                                <ContentLeftImageRight imageSrc="/emergency/emergency_1.jpg">
                                    <div className="space-y-3">
                                        <UnderlinedTitle title="Xét nghiệm phát hiện kháng thể" />
                                        <p className="text-gray-700 leading-relaxed">
                                            Hệ thống phòng cấp cứu riêng, đặc thù cho từng loại hình chuyên khoa: Nhi khoa, Sản khoa Chấn thương, Tim mạch, Đột quỵ
                                        </p>
                                        <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
                                            <li>Miễn dịch huỳnh quang</li>
                                            <li>Immunoblot</li>
                                            <li>ImmunoCAP: có thể phát hiện 260 dị nguyên ở mức độ phân tử</li>
                                            <li>Hoạt hóa bạch cầu ưa baso (BAT) bằng Flow cytometry</li>
                                            <li>Tryptase chẩn đoán phản vệ</li>
                                        </ul>

                                    </div>
                                </ContentLeftImageRight>
                                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                                    <div className="space-y-3">
                                        <UnderlinedTitle title="Máy đo và thăm dò chức năng hô hấp" />
                                        <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
                                            <li>Đo hô hấp ký, biến đổi thể tích toàn thân</li>
                                            <li>Đo FeNO</li>
                                            <li>Đo khuếch tán khí, IOS dành cho bệnh nhân lớn tuổi, hoặc bệnh nhân nhi từ 2 tuổi và phụ nữ có thai</li>

                                        </ul>
                                    </div>
                                </ImageLeftContentRight>
                            </div>

                        )}

                        {tab === "doctors" && (
                            <div className='py-10'>
                                <UnderlinedTitle title="Đội ngũ bác sĩ Trung tâm Miễn dịch - dị ứng" />
                                <div className='mt-10'>
                                    <DoctorList specialtyKey="immunology-allergy" />
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div >
    )
}

export default ImmunologyAllergy