import React, { useState } from 'react'
import CoverSection from '../components/CoverSection'
import { Link } from 'react-router-dom'
import ImageLeftContentRight from '../components/ImageLeftContentRight';
import ContentLeftImageRight from '../components/ContentLeftImageRight';
import UnderlinedTitle from '../components/UnderlinedTitle';
import DoctorList from '../components/DoctorList';

const Ophthalmology = () => {
    const [tab, setTab] = useState("overview");
    return (
        <div className='bg-bgcolor pb-20'>
            <CoverSection title={"TRUNG TÂM MẮT"} />
            <div className="container mx-auto mt-10">
                <div className="flex items-center mb-8">
                    <Link to="/" className="text-maincolor mr-2 text-base font-bold">
                        Trang chủ
                    </Link>
                    <Link to="/specialties" className="text-maincolor mr-2 text-base font-bold">
                        &gt; Chuyên khoa
                    </Link>
                    <p className="text-gray-700 text-base">
                        &gt; Trung tâm Mắt
                    </p>

                </div>

                <div className='mx-20'>

                    {/* Title */}
                    <h1 className="text-3xl font-bold text-center text-red-700">
                        TRUNG TÂM MẮT
                    </h1>

                    {/* Divider */}
                    <div className="w-24 h-1 bg-red-700 mx-auto mt-3 mb-10"></div>

                    {/* Tabs */}
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




                    {/* Content */}
                    <div className="px-10 bg-white text-gray-700 leading-7 text-lg">

                        {tab === "overview" && (
                            <div className="">
                                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                                    <div className="space-y-3">
                                        <UnderlinedTitle title="Sứ mệnh" />
                                        <p className="text-gray-700 leading-relaxed">
                                            Đồng hành cùng sứ mệnh của HyCare “Chăm sóc bằng tài năng, y đức và sự thấu cảm”, Trung tâm Mắt HyCare - Alina, quy tụ đội ngũ chuyên gia, bác sĩ giàu kinh nghiệm có trình độ chuyên môn cao, tận tụy và hết lòng vì sức khỏe của người bệnh. Các bác sĩ tại Trung tâm Mắt HyCare - Alina thường xuyên tham gia các khóa đào tạo, trao đổi kinh nghiệm, hội chẩn với các chuyên gia trong và ngoài nước để cập nhật các kỹ thuật y tế tiên tiến nhằm mang lại những phương pháp điều trị hiệu quả cho người bệnh.
                                        </p>

                                    </div>
                                </ImageLeftContentRight>

                                <ContentLeftImageRight imageSrc="/emergency/emergency_1.jpg">
                                    <div className="space-y-3">
                                        <UnderlinedTitle title="Kỹ thuật & Cơ sở" />
                                        <p className="text-gray-700 leading-relaxed">
                                            Trung tâm Mắt HyCare - Alina tập trung vào các kỹ thuật chuyên môn cao để điều trị các bệnh lý mắt phổ biến, giúp nâng cao chất lượng cuộc sống của bệnh nhân như: bệnh lý đục thủy tinh thể, mộng, quặm, umi, bọng mỡ, glocom, các bệnh lý đáy mắt; điều trị các tật khúc xạ (cận thị, viễn thị, loạn thị): sử dụng kính gọng, kính áp tròng ban đêm Ortho K, gói kiểm soát tiến triển cận thị,...
                                        </p>
                                        <p className="text-gray-700 leading-relaxed">
                                            Bên cạnh đó, Trung tâm Mắt HyCare - Alina cũng được đầu tư đồng bộ về cơ sở vật chất cùng trang thiết bị hiện đại trên thế giới như Đức, Mỹ …, hỗ trợ hiệu quả cho việc chẩn đoán và điều trị như máy đo khúc xạ tự động, máy IOL Master, Máy laser Yag và SLT, máy chụp cắt lớp võng mạc …
                                        </p>
                                    </div>
                                </ContentLeftImageRight>


                            </div>
                        )}

                        {tab === "services" && (
                            <div>
                                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                                    <div className="space-y-3">
                                        <UnderlinedTitle title="Dịch vụ đa dạng" />

                                        <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
                                            <li>Phẫu thuật thay thủy tinh thể bằng phương pháp Phaco</li>
                                            <li>
                                                Điều trị cận thị, viễn thị bằng phương pháp kính áp tròng ban đêm Ortho-K
                                            </li>
                                            <li>
                                                Kiểm soát tiến triển cận thị, hạn chế tăng độ cận ở trẻ em
                                            </li>
                                            <li>
                                                Theo dõi và điều trị các bệnh mắt mạn tính
                                            </li>
                                            <li>Thẩm mỹ mắt</li>
                                            <li>
                                                Các gói khám và điều trị các bệnh lý nhãn khoa
                                            </li>
                                            <li>
                                                Điều trị các bệnh lý như ghép giác mạc, phẫu thuật bong võng mạc, phẫu thuật mộng - ghép kết mạc rìa tự thân; viêm màng bồ đào trước, viêm mủ nội nhãn sau phẫu thuật, viêm mủ nội nhãn nội sinh; mộng, quặm, u mi, bọng mỡ
                                            </li>
                                        </ul>

                                    </div>
                                </ImageLeftContentRight>


                            </div>
                        )}

                        {tab === "technology" && (
                            <div>
                                <ContentLeftImageRight imageSrc="/emergency/emergency_1.jpg">
                                    <div className="space-y-3">
                                        <UnderlinedTitle title="Trang thiết bị hiện đại" />
                                        <p className="text-gray-700 leading-relaxed">
                                            Phòng khám chuyên nghiệp, hiện đại và thân thiện với khách hàng.
                                        </p>

                                        <p className="text-gray-700 leading-relaxed mt-3">
                                            Hệ thống máy móc, trang thiết bị của Trung tâm được đầu tư đồng bộ từ các hãng uy tín
                                            trên thế giới như Đức, Mỹ… nhằm phục vụ hiệu quả nhu cầu chẩn đoán và điều trị
                                            các bệnh lý về mắt:
                                        </p>

                                        <ul className="list-disc pl-6 text-gray-700 leading-relaxed mt-2">
                                            <li>
                                                Máy đo khúc xạ tự động: phát hiện các tật khúc xạ như cận thị, loạn thị, viễn thị.
                                            </li>
                                            <li>
                                                Máy chụp cắt lớp võng mạc: phát hiện sớm các bất thường do bệnh glôcôm,
                                                bệnh võng mạc tiểu đường, bệnh võng mạc do tăng huyết áp…
                                            </li>
                                            <li>
                                                Máy chụp đáy mắt: hỗ trợ phát hiện các bệnh lý liên quan đến đáy mắt,
                                                bệnh võng mạc tiểu đường…
                                            </li>
                                            <li>
                                                Máy IOL Master: tính công suất thủy tinh thể chính xác.
                                            </li>
                                            <li>
                                                Máy Laser YAG và SLT: điều trị bệnh glôcôm, đục bao sau…
                                            </li>
                                            <li>
                                                Máy Phaco Centurion: phẫu thuật thay thủy tinh thể bằng công nghệ mới,
                                                an toàn và chính xác.
                                            </li>
                                        </ul>

                                        <p className="text-gray-700 leading-relaxed mt-4">
                                            Khu phẫu thuật được trang bị hệ thống phòng mổ hiện đại, đạt các tiêu chuẩn
                                            kiểm soát nhiễm khuẩn và an toàn theo JCI
                                            (chứng chỉ quốc tế về chất lượng dịch vụ y tế và an toàn trong bệnh viện).
                                        </p>

                                    </div>
                                </ContentLeftImageRight>

                            </div>

                        )}

                        {tab === "doctors" && (
                            <div className='py-10'>
                                <UnderlinedTitle title="Đội ngũ bác sĩ Trung tâm Mắt" />
                                <div className='mt-10'>
                                    <DoctorList specialtyKey="ophthalmology" />
                                </div>
                            </div>
                        )}


                    </div>
                </div>
            </div>
        </div >
    )
}

export default Ophthalmology