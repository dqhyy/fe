import React, { useState } from 'react'
import CoverSection from '../components/CoverSection'
import { Link } from 'react-router-dom'
import ImageLeftContentRight from '../components/ImageLeftContentRight';
import ContentLeftImageRight from '../components/ContentLeftImageRight';
import UnderlinedTitle from '../components/UnderlinedTitle';
import DoctorList from '../components/DoctorList';

const CardiologyCenter = () => {
  const [tab, setTab] = useState("overview");
  return (
    <div className='bg-bgcolor pb-20'>
      <CoverSection title={"TRUNG TÂM TIM MẠCH"} />
      <div className="container mx-auto mt-10">
        <div className="flex items-center mb-8">
          <Link to="/" className="text-maincolor mr-2 text-base font-bold">
            Trang chủ
          </Link>
          <Link to="/specialties" className="text-maincolor mr-2 text-base font-bold">
            &gt; Chuyên khoa
          </Link>
          <p className="text-gray-700 text-base">
            &gt; Trung tâm tim mạch
          </p>
        </div>

        <div className='mx-20'>

          {/* Title */}
          <h1 className="text-3xl font-bold text-center text-red-700">
            Khám và điều trị theo tiêu chuẩn Mỹ
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
            Trung tâm Tim mạch HyCare là một trong những trung tâm tim mạch quy mô lớn, uy tín tại Việt Nam, được trang bị hệ thống thiết bị hiện đại, quy trình thăm khám chuyên nghiệp và đạt chứng chỉ quản lý, chăm sóc bệnh mạch vành - suy tim theo tiêu chuẩn Trường Môn Tim mạch Hoa Kỳ (ACC). Chuyên khoa Tim mạch HyCare cung cấp dịch vụ khám, điều trị và chăm sóc bệnh lý tim mạch cho bệnh nhân trong nước và quốc tế theo tiêu chuẩn quốc tế. Tùy tình trạng bệnh, người bệnh được thăm khám và điều trị tại các đơn vị chuyên sâu gồm Nội tim mạch, Can thiệp tim mạch và Ngoại tim mạch. Đội ngũ chuyên gia của Trung tâm là các Giáo sư, Tiến sĩ, Bác sĩ chuyên khoa giàu kinh nghiệm, áp dụng phương pháp điều trị cá thể hóa bằng nội khoa, phẫu thuật, can thiệp tim mạch và nhiều kỹ thuật cao, nhằm mang lại hiệu quả tối ưu cho từng người bệnh.
          </p>


          {/* Content */}
          <div className="px-10 bg-white text-gray-700 leading-7 text-lg">

            {tab === "overview" && (
              <div className="">
                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Khám và điều trị theo tiêu chuẩn Mỹ" />
                    <p className="text-gray-700 leading-relaxed">
                      Là thành viên của Cleveland Clinic Connected – hệ thống y tế hàng đầu Hoa Kỳ, Trung tâm Tim mạch HyCare tiếp cận và ứng dụng các kinh nghiệm, quy trình điều trị theo chuẩn Cleveland Clinic, không ngừng nâng cao chất lượng chăm sóc. Đặc biệt, các ca bệnh phức tạp có thể được tham vấn ý kiến chuyên gia quốc tế để lựa chọn phương án điều trị tối ưu.
                    </p>

                  </div>
                </ImageLeftContentRight>

                <ContentLeftImageRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Làm chủ các kỹ thuật điều trị" />
                    <p className="text-gray-700 leading-relaxed">
                      Với tầm nhìn trở thành tổ chức y tế hàn lâm mang lại giá trị cao và trải nghiệm xuất sắc cho người bệnh, Trung tâm Tim mạch HyCare tuân thủ các quy trình điều trị, chăm sóc theo tiêu chuẩn Mỹ. Đội ngũ bác sĩ tại Trung tâm đã làm chủ và áp dụng thường quy các kỹ thuật khó về tim mạch hiện nay, đồng thời xử trí tối ưu các tình huống cấp cứu phát sinh, giúp người bệnh phục hồi tốt.
                    </p>
                  </div>
                </ContentLeftImageRight>

                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Trong lĩnh vực can thiệp tim mạch" />
                    <p className="text-gray-700 leading-relaxed">
                      Trung tâm Tim mạch HyCare là đơn vị tiên phong tại Việt Nam được công nhận thực hiện độc lập các kỹ thuật can thiệp tim mạch phức tạp như thay van động mạch chủ qua da (TAVI) và cấy máy tạo nhịp tim không dây Micra, giúp người bệnh chủ động tiếp cận điều trị sớm mà không cần chờ chuyên gia quốc tế.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Bên cạnh đó, HyCare là một trong những trung tâm đầu tiên tại Việt Nam thực hiện thành công cấy tim nhân tạo hỗ trợ tâm thất (HVAD), đồng thời ứng dụng công nghệ in 3D trong điều trị các bệnh tim mạch phức tạp như lóc tách - phình động mạch chủ, bệnh tim cấu trúc và các bệnh lý lồng ngực, khẳng định vị thế trung tâm can thiệp tim mạch hàng đầu.
                    </p>
                  </div>
                </ImageLeftContentRight>

                <ContentLeftImageRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Trong lĩnh vực phẫu thuật tim mạch" />
                    <p className="text-gray-700 leading-relaxed">
                      HyCare triển khai thường quy các phẫu thuật tim nội soi và ít xâm lấn, kể cả ca phức tạp, do đội ngũ chuyên gia giàu kinh nghiệm thực hiện. Trên thế giới, chỉ số ít trung tâm tim mạch lớn có thể làm chủ các kỹ thuật này.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Bên cạnh đó, HyCare đang phát triển phẫu thuật tim có hỗ trợ robot, ứng dụng các kỹ thuật tiên tiến như thay van không khâu, điều trị rung nhĩ, đồng thời áp dụng giảm đau ESP thay thế morphin, giúp người bệnh ít đau, hồi phục nhanh và an toàn hơn
                    </p>
                  </div>
                </ContentLeftImageRight>

              </div>
            )}

            {tab === "services" && (
              <div>
                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Chuẩn đoán & Điều trị" />
                    <p className="text-gray-700 leading-relaxed font-bold">
                      Chẩn đoán bệnh lý tim mạch
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
                      <li>Chụp MSCT động mạch vành 256 dãy hiện đại tại Việt Nam</li>
                      <li>Chụp MRI tim với máy chụp 3.0 Tesla hiện đại tại Việt Nam</li>
                      <li>Siêu âm tim 4D qua thực quản tái tạo hình ảnh trực tiếp ứng dụng trong chẩn đoán, can thiệp tim mạch.</li>
                      <li>Các kỹ thuật thăm dò chẩn đoán chuyên sâu: Siêu âm tim qua thành ngực, siêu âm tim gắng sức, Holter 24h điện tim, holter 24h huyết áp, điện tim, nghiệm pháp bàn nghiêng.</li>
                      <li>Chụp động mạch vành, với siêu âm trong lòng mạch IVUS và FFR</li>
                      <li>Chụp SPECT/CT tim, PET/CT tim</li>
                    </ul>
                  </div>
                </ImageLeftContentRight>

                <ContentLeftImageRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Chuẩn đoán & Điều trị" />
                    <p className="text-gray-700 leading-relaxed font-bold">
                      Điều trị nội tim mạch
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
                      <li>Điều trị suy tim chuyên sâu</li>
                      <li>Điều trị sau nhồi máu cơ tim</li>
                      <li>Điều trị tăng huyết áp phức tạp</li>
                      <li>Điều trị các rối loạn nhịp dai dẳng (rung nhĩ, ngoại tâm thu)</li>
                      <li>Điều trị các bệnh tim mạch khác</li>
                      <li>Quản lý bệnh nhân ngoại trú các bệnh nhân có tiền sử tăng huyết áp, bệnh mạch vành, nhồi máu cơ tim.</li>
                      <li>Điều trị và quản lý các bệnh lý mạch máu: Bệnh động mạch chi trên - chi dưới, mạch cảnh, bệnh lý suy tĩnh mạch chi dưới, huyết khối tĩnh mạch, bệnh lý mạch tạng (bệnh động mạch thận, mạch mạc treo tràng trên, tân tạng…)</li>
                    </ul>
                  </div>
                </ContentLeftImageRight>

                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Can thiệp tim mạch" />
                    <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
                      <li>Can thiệp động mạch vành cấp cứu xử trí nhồi máu cơ tim cấp</li>
                      <li>Can thiệp động mạch vành có chương trình với hỗ trợ của FFR, IVUS.</li>
                      <li>Can thiệp bệnh động mạch ngoại biên: Mạch chi trên, chi dưới, mạch tạng, mạch cảnh …</li>
                      <li>Can thiệp kẹp sửa van hai lá qua da (Mitra Clip)</li>
                      <li>Can thiệp thay van động mạch chủ qua da (TAVI)</li>
                      <li>Can thiệp đặt stent Graft động mạch chủ điều trị lóc tách động mạch có hướng dẫn của in 3D</li>
                      <li>Can thiệp điều trị các bệnh lý tim bẩm sinh: Thông liên thất, thông liên nhĩ, còn ống động mạch, rò động mạch vành, hẹp van động mạch phổi …</li>
                      <li>Điều trị triệt đốt thần kinh giao cảm mạch thận trong tăng huyết áp kháng trị.</li>
                      <li>Cấy máy tạo nhịp tim tạm thời, vĩnh viễn, máy tạo nhịp không dây</li>
                      <li>Cấy máy phá rung tự động ICD</li>
                      <li>Cấy máy tái đồng bộ cơ tim CRT, CRT-D.</li>
                      <li>Triệt đốt rung nhĩ 2D, 3D.</li>
                      <li>Can thiệp suy tĩnh mạch chi dưới, tiêm xơ điều trị giãn tĩnh mạch nông.</li>
                    </ul>
                  </div>
                </ImageLeftContentRight>

                <ContentLeftImageRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Phẫu thuật tim mạch" />

                    <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
                      <li>Phẫu thuật tim ít xâm lấn, phẫu thuật nội soi tim toàn bộ tránh sẹo cưa xương ức.</li>
                      <li>Phẫu thuật điều trị rung nhĩ (điều trị toàn diện cả bệnh tim cấu trúc và tim chức năng).</li>
                      <li>Phẫu thuật tim người lớn: bệnh van tim, bệnh lý cơ tim, bệnh mạch vành, bệnh động mạch chủ,…</li>
                      <li>Phẫu thuật bệnh tim bẩm sinh, trẻ nhỏ và người lớn</li>
                      <li>Phẫu thuật cấy ghép thiết bị hỗ trợ thất trái HVAD</li>
                    </ul>
                  </div>
                </ContentLeftImageRight>
              </div>
            )}

            {tab === "technology" && (
              <div>
                <ContentLeftImageRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Trang thiết bị hiện đại" />
                    <p className="text-gray-700 leading-relaxed">
                      Các trang thiết bị hiện đại, ngang tầm với các bệnh viện uy tín trên thế giới.
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
                      <li>Máy điện tim kỹ thuật số 12 cần GE</li>
                      <li>Máy Holter điện tim 24h và Holter huyết áp 24h</li>
                      <li>Máy siêu âm tim 3D, 4D qua thành ngực và thực quản GE Vivid E95</li>
                      <li>Bàn nghiêng và máy gắng sức xe đạp</li>
                      <li>Máy gắng sức thảm chạy Welch Allyn</li>
                      <li>Các hệ thống monitor theo dõi di động</li>
                      <li>Hệ thống monitor theo dõi trung tâm</li>
                      <li>Máy phá rung tim NIKON</li>
                      <li>Các máy truyền dịch tự động và bơm tiêm điện tự động</li>
                      <li>Máy chụp mạch ANGIO 2 bình diện SIEMENS</li>
                      <li>Máy siêu âm trong lòng mạch IVUS và FFR</li>
                    </ul>
                  </div>
                </ContentLeftImageRight>
                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Hệ thống trang thiết bị hiện đại" />
                    <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
                      <li>Máy chụp MSCT 256 dãy</li>
                      <li>Máy chụp MRI tim 3.0 Tesla</li>
                      <li>Máy chụp SPECT/CT tim, PET/CT tim</li>
                      <li>Máy chụp mạch máu DSA</li>
                      <li>Máy tạo nhịp tim</li>
                      <li>Hệ thống PiCCO</li>
                      <li>Hệ thống Entropy</li>
                      <li>Bóng đối xung nội động mạch chủ</li>
                      <li>Máy lọc máu</li>
                      <li>Máy truyền máu nhanh</li>
                      <li> Phòng mổ Hybrid kết hợp giữa tính chính xác cao của phòng thông tim can thiệp (Catheterization Lab) với phòng mổ tim mạch hiện đại (Operation Room)</li>
                    </ul>
                  </div>
                </ImageLeftContentRight>
              </div>

            )}

            {tab === "doctors" && (
              <div className='py-10'>
                <UnderlinedTitle title="Đội ngũ bác sĩ Trung tâm Tim mạch" />
                <div className='mt-10'>
                  <DoctorList specialtyKey="cardiology-center" />
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div >
  )
}

export default CardiologyCenter