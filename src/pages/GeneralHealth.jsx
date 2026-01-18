import React, { useState } from 'react'
import CoverSection from '../components/CoverSection'
import { Link } from 'react-router-dom'
import ImageLeftContentRight from '../components/ImageLeftContentRight';
import ContentLeftImageRight from '../components/ContentLeftImageRight';
import UnderlinedTitle from '../components/UnderlinedTitle';
import DoctorList from '../components/DoctorList';

const GeneralHealth = () => {
  const [tab, setTab] = useState("overview");
  return (
    <div className='bg-bgcolor pb-20'>
      <CoverSection title={"SỨC KHỎE TỔNG QUÁT"} />
      <div className="container mx-auto mt-10">
        <div className="flex items-center mb-8">
          <Link to="/" className="text-maincolor mr-2 text-base font-bold">
            Trang chủ
          </Link>
          <Link to="/specialties" className="text-maincolor mr-2 text-base font-bold">
            &gt; Chuyên khoa
          </Link>
          <p className="text-gray-700 text-base">
            &gt; Sức khỏe tổng quát
          </p>

        </div>

        <div className='mx-20'>

          <h1 className="text-3xl font-bold text-center text-red-700">
            Vì sức khỏe là món quà quý giá
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




          <div className="px-10 bg-white text-gray-700 leading-7 text-lg">

            {tab === "overview" && (
              <div className="">
                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Tổng quan" />
                    <p className="text-gray-700 leading-relaxed">
                      Trong bối cảnh nhịp sống bận rộn và sự thay đổi không ngừng của môi trường sống, cơ thể chúng ta có thể đã xuất hiện dấu hiệu tiềm ẩn của các bệnh lý nghiêm trọng mà không thể nhận biết bằng mắt thường. Ngoài ra, những thói quen không lành mạnh như làm việc quá sức, thức khuya, sử dụng bia rượu, căng thẳng kéo dài cũng có thể là nguyên nhân dẫn đến các bệnh lý nguy hiểm như đột quỵ, ung thư, tim mạch, xương khớp...
                    </p>

                  </div>
                </ImageLeftContentRight>

                <ContentLeftImageRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Lợi ích kiểm tra sức khỏe định kỳ" />
                    <p className="text-gray-700 leading-relaxed">
                      Kiểm tra sức khỏe tổng quát định kỳ với đầy đủ các hạng mục là rất cần thiết, mang lại nhiều lợi ích quan trọng như:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
                      <li>Được đánh giá tình trạng sức khỏe tổng quát của bản thân</li>
                      <li>Giúp phát hiện sớm những thay đổi bất thường</li>
                      <li>Ngăn chặn kịp thời các biến chứng nguy hiểm</li>
                      <li>Tăng cơ hội chữa khỏi bệnh hoàn toàn, giảm chi phí điều trị</li>
                      <li>Được tư vấn để duy trì sức khỏe tốt, cải thiện chất lượng cuộc sống</li>
                    </ul>
                  </div>
                </ContentLeftImageRight>

                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Khám sức khỏe tại HyCare" />
                    <p className="text-gray-700 leading-relaxed font-bold">
                      Thấu hiểu nhu cầu chăm sóc sức khỏe chủ động của khách hàng, HyCare đã đầu tư trang thiết bị hiện đại, kết hợp với đội ngũ y bác sĩ giàu kinh nghiệm không chỉ giúp khách hàng tầm soát bệnh mà còn mang đến một trải nghiệm khác biệt về khám chữa bệnh chủ động.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Đồng thời, HyCare cũng cung cấp các dịch vụ khám sức khỏe toàn diện, từ cơ bản đến chuyên sâu theo tiêu chuẩn Quốc tế, đáp ứng mọi nhu cầu kiểm tra sức khỏe của Quý khách hàng và gia đình.
                    </p>

                  </div>
                </ImageLeftContentRight>

              </div>
            )}

            {tab === "services" && (
              <div>
                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Quy trình khám" />
                    <p className="text-gray-700 leading-relaxed">
                      Với tiêu chí lấy khách hàng làm trung tâm, hệ thống phòng khám, bác sĩ và trang thiết bị
                      được bố trí tập trung tại khu vực riêng biệt nhằm tăng hiệu quả khám bệnh và nâng cao
                      trải nghiệm khách hàng.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                      Khách hàng được thăm khám lâm sàng, đo lường các chỉ số cơ thể, khảo sát chi tiết thể trạng,
                      thói quen sinh hoạt và bệnh sử với đội ngũ y bác sĩ chuyên môn cao, nhiều kinh nghiệm.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                      Khách hàng được tầm soát với các dịch vụ cận lâm sàng như xét nghiệm (máu, nước tiểu, phân),
                      chẩn đoán hình ảnh (siêu âm, X-quang, CT, MRI), nội soi ống tiêu hóa nhằm phát hiện sớm
                      các bất thường và vấn đề bệnh lý.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                      Dựa trên kết quả thăm khám, bác sĩ tư vấn tổng quan về hiện trạng sức khỏe, định hướng điều trị
                      các vấn đề bệnh lý hoặc tư vấn thay đổi thói quen sinh hoạt lành mạnh để duy trì sức khỏe tốt.
                    </p>

                  </div>
                </ImageLeftContentRight>

                <ContentLeftImageRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Các gói khám của HyCare" />
                    <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
                      <li>Gói khám sức khỏe tổng quát Cơ bản</li>
                      <li>Gói khám sức khỏe tổng quát Nâng cao</li>
                      <li>Gói khám sức khỏe tổng quát Người cao tuổi</li>
                      <li>Gói khám sức khỏe tổng quát VIP</li>
                      <li>Gói khám sức khỏe tổng quát Nhi</li>
                      <li>Gói khám sức khỏe bổ sung cấp giấy khám</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                      Khi phát hiện vấn đề sau khám sức khỏe, khách hàng sẽ được thăm khám bởi các bác sĩ,
                      giáo sư đầu ngành từ các chuyên khoa trong hệ thống y tế HyCare. Ngoài ra, HyCare
                      cung cấp các gói sàng lọc bệnh lý tim mạch, nội tiết, sức khỏe sinh sản nam – nữ,
                      thoái hóa khớp, cũng như sàng lọc chuyên sâu các loại ung thư, phù hợp với nhu cầu
                      và thể trạng của từng khách hàng.
                    </p>
                  </div>
                </ContentLeftImageRight>
              </div>
            )}

            {tab === "technology" && (
              <div>
                <ContentLeftImageRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Thiết bị y tế hiện đại" />
                    <p className="text-gray-700 leading-relaxed">
                      Chuẩn đoán hình ảnh và y học hạt nhân được trang bị các thiết bị đồng bộ hiện đại so với các bệnh viện trong nước và trong khu vực
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Hệ thống thiết bị xét nghiệm chuyên sâu Hóa sinh, Miễn dịch, Huyết học, Truyền máu, Vi sinh, Sinh học phân tử, Giải phẫu bệnh, thường xuyên cập nhật model mới của Beckmann, Roche, Abbott, IL. Được quản lý chất lượng theo tiêu chuẩn ISO15189:2012.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Thiết bị xét nghiệm gen phục vụ sàng lọc chuyên sâu sàng lọc ung thư di truyền, phát hiện ung thư sớm, Phòng ngừa đột tử, tử vi sinh học…
                    </p>
                  </div>
                </ContentLeftImageRight>
                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Bệnh viện đạt chuẩn Quốc tế" />
                    <p className="text-gray-700 leading-relaxed">
                      Các bệnh viện, phòng khám của HyCare đều áp dụng tiêu chuẩn JCI để phục vụ khách hàng và 2 trong số đó đã vượt qua được các kỳ thẩm định tiêu chuẩn JCI để được công nhận về chất lượng dịch vụ y tế toàn cầu.                    </p>
                  </div>
                </ImageLeftContentRight>
                <ContentLeftImageRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Hệ thống quản lý dữ liệu trực tuyến" />
                    <p className="text-gray-700 leading-relaxed">
                      HyCare vận hành hệ thống quản lý dữ liệu thông minh giúp quy trình làm việc nhanh chóng và thuận tiện cho khách hàng.
                    </p>
                  </div>
                </ContentLeftImageRight>
              </div>

            )}

            {tab === "doctors" && (
              <div className='py-10'>
                <UnderlinedTitle title="Đội ngũ bác sĩ Sức khỏe tổng quát" />
                <div className='mt-10'>
                  <DoctorList specialtyKey="general-health" />
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div >
  )
}

export default GeneralHealth