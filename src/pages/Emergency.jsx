import React, { useState } from 'react'
import CoverSection from '../components/CoverSection'
import { Link } from 'react-router-dom'
import ImageLeftContentRight from '../components/ImageLeftContentRight';
import ContentLeftImageRight from '../components/ContentLeftImageRight';
import UnderlinedTitle from '../components/UnderlinedTitle';
import DoctorList from '../components/DoctorList';

const Emergency = () => {
    const [tab, setTab] = useState("overview");
    return (
        <div className='bg-bgcolor pb-20'>
            <CoverSection title={"CẤP CỨU"} />
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

                    {/* Title */}
                    <h1 className="text-3xl font-bold text-center text-red-700">
                        CẤP CỨU - HỒI SỨC TÍCH CỰC
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

                    <p className="text-gray-700 leading-relaxed pb-5">
                        Trong nhiều năm qua, HyCare đã tiến hành cấp cứu và cứu sống những bệnh nhân nặng, phức tạp; thực hiện thành công nhiều sự việc cấp cứu lớn, cấp cứu hàng loạt. Hàng năm, các bệnh viện HyCare tiếp nhận và cấp cứu thành công nhiều bệnh nhân hội chứng vành cấp, suy tim cấp theo đúng tiêu chuẩn của Hội tim mạch Hoa Kỳ (ACC/AHA), đột quỵ não theo đúng tiêu chuẩn ANGLES
                    </p>


                    {/* Content */}
                    <div className="px-10 bg-white text-gray-700 leading-7 text-lg">

                        {tab === "overview" && (
                            <div className="">
                                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                                    <div className="space-y-3">
                                        <UnderlinedTitle title="Hoạt động 24/7" />
                                        <p className="text-gray-700 leading-relaxed">
                                            Tất cả các ngày trong tuần, kể cả Thứ 7, Chủ nhật và ngày lễ trong năm.
                                        </p>

                                        <UnderlinedTitle title="Uy tín và phản ứng nhanh" />
                                        <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
                                            <li>Đội ngũ bác sĩ, nhân viên y tế được đào tạo bài bản, chuyên sâu về nhiều lĩnh vực hồi sức cấp cứu với chứng chỉ quốc tế như ACLS (Hồi sinh tim phổi nâng cao người lớn), PALS (Hồi sinh tim phổi nâng cao trẻ nhi), FCCS… Luôn cập nhật phác đồ và kỹ thuật cấp cứu hiện đại (như E-PCR…) để đáp ứng mọi tình huống.</li>
                                            <li>Hỗ trợ đắc lực cho khoa Cấp cứu là đội ngũ thư ký chuyên môn kiêm phiên dịch viên nhiều ngôn ngữ như Anh, Pháp, Hàn Quốc, Nhật Bản, Nga, Trung...</li>
                                            <li>Tất cả các xe cấp cứu chuyên dụng được trang bị hiện đại: máy thở chuyên nghiệp, monitor theo dõi sinh tồn, máy sốc điện tự động, băng ca đa năng… Đảm bảo phản ứng xuất xe ngay khi có yêu cầu.</li>
                                        </ul>

                                    </div>
                                </ImageLeftContentRight>

                                <ContentLeftImageRight imageSrc="/emergency/emergency_1.jpg">
                                    <div className="space-y-3">
                                        <UnderlinedTitle title="Quy trình cấp cứu chuyên nghiệp" />
                                        <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
                                            <li>Người bệnh được đánh giá chính xác và phân loại tình trạng bệnh theo thang điểm phân loại bệnh nhân của Úc tại khoa Cấp cứu – chống độc. (ATS), áp dụng các biện pháp cấp cứu thích hợp theo mức độ ưu tiên.</li>
                                            <li>Người bệnh được chăm sóc chuyên sâu, với sự phối hợp của nhiều chuyên khoa chuyên (chăm sóc theo nhóm chuyên khoa - Team Based Care) ngay từ lúc nhập viện, đảm bảo sự chính xác, nhanh chóng với mức độ tin cậy cao, để có thể nhanh chóng qua khỏi giai đoạn nguy kịch và ổn định</li>
                                            <li>Khoa có đầy đủ chức năng cấp cứu và điều trị tình trạng cấp cứu, khẩn cấp cho bệnh nhân thuộc các chuyên ngành khác nhau: Nội, Ngoại, Sản, Nhi.</li>
                                            <li>Khoa Hồi sức cấp cứu HyCare cũng đảm nhiệm công tác hồi sức sau phẫu thuật, các ca bệnh diễn biến nặng cần chăm sóc đặc biệt (sau đột quỵ, sau chấn thương nặng, người cao tuổi bệnh nặng…).</li>
                                        </ul>
                                    </div>
                                </ContentLeftImageRight>

                                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                                    <div className="space-y-3">
                                        <UnderlinedTitle title="Thực hiện 4 mô hình hồi sức cấp cứu" />
                                        <p className="text-gray-700 leading-relaxed font-bold">
                                            Đội phản ứng nhanh
                                        </p>
                                        <p className="text-gray-700 leading-relaxed">
                                            Để phát hiện sớm các dấu hiệu thay đổi cấp tính của người bệnh, dự phòng từ xa các biến cố ngừng tuần hoàn (kích hoạt code blue) không mong muốn, các khoa phòng có thể yêu cầu hỗ trợ của RRT tiếp cận đánh giá và đưa ra các can thiệp sớm nếu bệnh nhân có chỉ định can thiệp.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed font-bold">
                                            Xử trí tình trạng nhiễm khuẩn huyết
                                        </p>
                                        <p className="text-gray-700 leading-relaxed">
                                            Nhận diện được sớm các dấu hiệu tưởng chừng như mơ hồ khi bênh nhân bị nhiễm khuẩn huyết và sốc nhiễm khuẩn và xử trí kịp thời, tránh diễn biến nặng thành sốc nhiễm khuẩn, suy đa phủ tạng là tình trạng nặng, điều trị thường khó khăn, phức tạp và tốn kém tỉ lệ tử vong cao.
                                        </p>
                                    </div>
                                </ImageLeftContentRight>

                                <ContentLeftImageRight imageSrc="/emergency/emergency_1.jpg">
                                    <div className="space-y-3">
                                        <UnderlinedTitle title="Đi buồng chuyên khoa" />
                                        <p className="text-gray-700 leading-relaxed">
                                            Hàng ngày đội Core (gồm bác sĩ & điều dưỡng hồi sức cấp cứu - phục hồi chức năng - dinh dưỡng - dược lâm sàng ) đi buồng các bệnh nhân ICU. Thông qua đó, kế hoạch điều trị chăm sóc toàn diện trong mỗi ngày được thảo luận và thống nhất, nhằm được hiệu quả điều trị cao và an toàn cho người bệnh.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed font-bold">
                                            Telemedicine trong hồi sức cấp cứu                                    </p>
                                        <p className="text-gray-700 leading-relaxed">
                                            Telemedicine cho phép đồng bộ hóa chất lượng điều trị trong toàn bộ các bệnh viện thuộc Hệ thống y tế HyCare về lĩnh vực hồi sức cấp cứu.                                     </p>
                                    </div>
                                </ContentLeftImageRight>

                            </div>
                        )}

                        {tab === "services" && (
                            <div>
                                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                                    <div className="space-y-3">
                                        <UnderlinedTitle title="Khám và xử trí cấp cứu đa khoa" />
                                        <p className="text-gray-700 leading-relaxed font-bold">
                                            Cấp cứu nội khoa
                                        </p>
                                        <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
                                            <li>Cấp cứu ngừng tuần hoàn với người bệnh ngừng tim, hội chứng mạch vành cấp, suy tim cấp theo tiêu chuẩn Hội Tim mạch Hoa Kỳ</li>
                                            <li>Cấp cứu đột quỵ não cấp</li>
                                            <li>Cấp cứu nhiễm trùng nặng</li>
                                            <li>Cấp cứu hô hấp (suy hô hấp, tắc động mạch phổi, đợt cấp bệnh phổi tắc nghẽn mạn tính…)</li>
                                            <li>Cấp cứu ổ bụng (viêm tụy cấp, xuất huyết tiêu hóa…)</li>
                                            <li>Cấp cứu thần kinh (hôn mê, co giật…)</li>
                                        </ul>
                                        <p className="text-gray-700 leading-relaxed">
                                            <span className="font-bold">Cấp cứu ngoại khoa:</span>
                                            sỏi túi mật, sỏi ống mật chủ với các kỹ thuật tán sỏi qua da hoặc nội soi đường mật ngược dòng,
                                            giảm nguy cơ phải phẫu thuật, viêm ruột thừa cấp, sỏi tiết niệu…
                                        </p>

                                        <p className="text-gray-700 leading-relaxed">
                                            <span className="font-bold">Cấp cứu chấn thương:</span>
                                            Có hệ thống báo động đỏ đối với những trường hợp đa chấn thương nặng có chỉ định mổ cấp cứu,
                                            đảm bảo người bệnh được thăm khám và phẫu thuật sớm nhất.
                                        </p>

                                        <p className="text-gray-700 leading-relaxed font-bold">
                                            Cấp cứu bệnh nhi nặng
                                        </p>
                                        <p className="text-gray-700 leading-relaxed font-bold">
                                            Cấp cứu bệnh nhân sản khoa có diễn biến bất thường
                                        </p>
                                    </div>
                                </ImageLeftContentRight>

                                <ContentLeftImageRight imageSrc="/emergency/emergency_1.jpg">
                                    <div className="space-y-3">
                                        <UnderlinedTitle title="Quy trình cấp cứu chuyên nghiệp" />
                                        <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
                                            <li>Hồi sức cấp cứu từ cơ bản đến chuyên sâu ở nhiều lĩnh vực: Hô hấp, tuần hoàn, tiết niệu, chấn thương…</li>
                                            <li>Hồi sức các bệnh lý nhiễm khuẩn nặng</li>
                                            <li>Hồi sức các trường hợp bệnh nặng thuộc các chuyên khoa: Nội khoa, truyền nhiễm, nội tiết, hô hấp, thận, tiêu hóa</li>
                                            <li>Hồi sức bệnh lý hô hấp: Viêm phổi nặng, suy hô hấp cấp tiến triển (ARDS), phổi tắc nghẽn mạn tính (COPD), hen phế quản ác tính</li>
                                            <li>Hồi sức hậu phẫu sau phẫu thuật tim mạch (tim hở, can thiệp), lồng ngực (thực quản, dạ dày…) và sọ não</li>
                                            <li>Hồi sức ngoại thần kinh: Sau mổ u não, chấn thương sọ não</li>
                                            <li>Hồi sức nhi khoa sau phẫu thuật… </li>
                                        </ul>
                                    </div>
                                </ContentLeftImageRight>
                            </div>
                        )}

                        {tab === "technology" && (
                            <div>
                                <ContentLeftImageRight imageSrc="/emergency/emergency_1.jpg">
                                    <div className="space-y-3">
                                        <UnderlinedTitle title="Hệ thống phòng cấp cứu riêng biệt" />
                                        <p className="text-gray-700 leading-relaxed">
                                            Hệ thống phòng cấp cứu riêng, đặc thù cho từng loại hình chuyên khoa: Nhi khoa, Sản khoa Chấn thương, Tim mạch, Đột quỵ
                                        </p>
                                        <p className="text-gray-700 leading-relaxed">
                                            Hệ thống phòng cách ly áp lực âm đáp ứng các yêu cầu cách ly riêng biệt trong các tình huống: Bệnh lý hồi sức ngoại khoa cần cách ly (ghép tạng), hồi sức nội khoa hoặc các trường hợp bệnh lây nhiễm qua đường hô hấp và không khí, Phòng cách ly bệnh lý tâm thần kinh, Phòng lưu bệnh nhân cấp cứu.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed">
                                            Hệ thống phòng cấp cứu dành riêng cho trẻ em.
                                        </p>
                                    </div>
                                </ContentLeftImageRight>
                                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                                    <div className="space-y-3">
                                        <UnderlinedTitle title="Hệ thống trang thiết bị hiện đại" />
                                        <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
                                            <li>Máy thở cao cấp</li>
                                            <li>Máy thở không xâm nhập</li>
                                            <li>Máy thở vận chuyển</li>
                                            <li>Máy thở HFNC</li>
                                            <li>Máy siêu âm di động</li>
                                            <li>Máy xét nghiệm khí máu nhanh/Máy xét nghiệm sinh hóa nhanh</li>
                                            <li>Bộ đặt nội khí quản khó có camera</li>
                                            <li>Máy sốc điện tự động AED</li>
                                            <li>Máy phá rung tim đồng bộ 2 pha có tạo nhịp</li>
                                            <li>Cáng vận chuyển bệnh nhân thủy lực</li>
                                        </ul>
                                    </div>
                                </ImageLeftContentRight>
                            </div>

                        )}

                        {tab === "doctors" && (
                            <div className='py-10'>
                                <UnderlinedTitle title="Đội ngũ bác sĩ Trung tâm Cấp cứu - Hồi sức" />
                                <div className='mt-10'>
                                    <DoctorList specialtyKey="emergency" />
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Emergency