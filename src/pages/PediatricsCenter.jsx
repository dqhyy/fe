import React, { useState } from 'react'
import CoverSection from '../components/CoverSection'
import { Link } from 'react-router-dom'
import ImageLeftContentRight from '../components/ImageLeftContentRight';
import ContentLeftImageRight from '../components/ContentLeftImageRight';
import UnderlinedTitle from '../components/UnderlinedTitle';
import DoctorList from '../components/DoctorList';

const PediatricsCenter = () => {
  const [tab, setTab] = useState("overview");
  return (
    <div className='bg-bgcolor pb-20'>
      <CoverSection title={"TRUNG TÂM NHI"} />
      <div className="container mx-auto mt-10">
        <div className="flex items-center mb-8">
          <Link to="/" className="text-maincolor mr-2 text-base font-bold">
            Trang chủ
          </Link>
          <Link to="/specialties" className="text-maincolor mr-2 text-base font-bold">
            &gt; Chuyên khoa
          </Link>
          <p className="text-gray-700 text-base">
            &gt; Trung tâm nhi
          </p>

        </div>

        <div className='mx-20'>

          <h1 className="text-3xl font-bold text-center text-red-700">
            Đồng hành cùng ba mẹ chăm sóc và nâng niu những mầm xanh!
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
                      Trung tâm Nhi HyCare là trung tâm chăm sóc sức khỏe trẻ sơ sinh và trẻ nhỏ được xây dựng với đầy đủ các chuyên ngành sâu thuộc lĩnh vực Nhi khoa, tự hào sở hữu đội ngũ chuyên gia, bác sĩ đầu ngành với công nghệ - trang thiết bị tiên tiến và thường xuyên được cập nhật. Ngoài việc khám và điều trị các bệnh cấp cứu và nhi khoa thông thường, Trung tâm Nhi còn phát hiện và điều trị các bệnh hiếm gặp ở trẻ thuộc các chuyên khoa về nội tiết, thần kinh, nhiễm trùng, tim mạch, hô hấp, miễn dịch dị ứng, sơ sinh....
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Trung tâm Nhi cũng cung cấp chương trình khám và theo dõi sức khỏe toàn diện cho trẻ em theo từng lứa tuổi, chương trình tiêm chủng toàn diện cho trẻ theo độ tuổi với nguồn vac-xin chất lượng cao, có xuất xứ rõ ràng, được cấp phép và bảo quản lạnh đạt chuẩn GSP.
                    </p>
                  </div>
                </ImageLeftContentRight>
              </div>
            )}

            {tab === "services" && (
              <div>
                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Chuyên khoa Sơ sinh" />

                    <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
                      <li>Chăm sóc và điều trị trẻ sinh non, đặc biệt là trẻ cực non</li>
                      <li>
                        Triển khai kỹ thuật Surfactant xâm lấn tối thiểu (phương pháp LISA) điều trị suy hô hấp
                      </li>
                      <li>Sàng lọc 58 bệnh từ giai đoạn sơ sinh</li>
                      <li>
                        Phát hiện, chẩn đoán và điều trị sớm các dị tật sơ sinh, đặc biệt là dị tật tim mạch, tiêu hóa
                      </li>
                      <li>Nhiễm trùng sơ sinh</li>
                    </ul>

                  </div>
                </ImageLeftContentRight>

                <ContentLeftImageRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Chuyên khoa nhi" />
                    <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
                      <li>
                        Nội soi tiêu hóa chẩn đoán và điều trị các bệnh về đường tiêu hóa trên, dưới, các bệnh lý về mật – tụy.
                      </li>
                      <li>
                        Chẩn đoán các bệnh lý khó liên quan đến hệ thần kinh của trẻ em (dị tật mạch máu/bệnh Moyamoya; dị tật Chiari; u màng não,…), viêm não, viêm màng não, v.v.
                      </li>
                      <li>
                        Chẩn đoán và điều trị viêm gan do virus hiếm gặp (như EBV, CMV, HSV…).
                      </li>
                      <li>
                        Chẩn đoán và điều trị các ca bệnh khó như sốt dai dẳng không rõ nguyên nhân, đau nhức xương khớp không rõ nguyên nhân, men gan tăng cao không rõ nguyên nhân, bệnh ấu trùng nội tạng, v.v.
                      </li>
                      <li>
                        Chẩn đoán và điều trị các bệnh tim mạch, đặc biệt là bệnh Kawasaki thể không điển hình hoặc đáp ứng kém với điều trị IVIG.
                      </li>
                      <li>
                        Chẩn đoán và điều trị các bệnh nội tiết nhi khoa, đặc biệt là bệnh tuyến giáp, dậy thì sớm, vóc dáng thấp bé.
                      </li>
                      <li>
                        Phối hợp với Bệnh viện Mắt Trung Ương điều trị u nguyên bào võng mạc.
                      </li>
                      <li>
                        Chẩn đoán và điều trị các bệnh dị ứng miễn dịch, đặc biệt là các bệnh suy giảm miễn dịch nguyên phát, hen suyễn, viêm da dị ứng, v.v.
                      </li>
                      <li>Gói vaccine</li>
                      <li>Gói chăm sóc sức khỏe toàn diện …</li>
                    </ul>
                  </div>
                </ContentLeftImageRight>
              </div>
            )}

            {tab === "technology" && (
              <div>
                <ContentLeftImageRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Trang thiết bị" />
                    <p className="text-gray-700 leading-relaxed">
                      HyCare có đầy đủ các chuyên ngành bao gồm Nội trú Nhi và Ngoại trú Nhi, đảm bảo tiêu chuẩn cao trong các dịch vụ chăm sóc nhi, bao gồm chăm sóc điều trị và quản lý sức khỏe toàn diện, lâu dài cho bệnh nhi.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Các kỹ thuật thăm dò chuyên khoa nhi như: siêu âm, chẩn đoán hình ảnh can thiệp, siêu âm tim nhi, nội soi tiêu hóa/hô hấp, điện não,...
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Chẩn đoán và điều trị tất cả các bệnh cấp cứu nhi, các bệnh nhi thường gặp với chất lượng cao
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Một số bệnh chuyên khoa sâu: Kawasaki, viêm não, dậy thì sớm, nhiễm khuẩn huyết tụ cầu, hội chứng 4S, hội chứng thực bào máu, loét dạ dày-tá tràng tái phát nhiều đợt, viêm tụy cấp, điều trị bảo tồn nhiều ca u nguyên bào võng mạc, …
                    </p>
                  </div>
                </ContentLeftImageRight>
              </div>

            )}

            {tab === "doctors" && (
              <div className='py-10'>
                <UnderlinedTitle title="Đội ngũ bác sĩ Trung tâm Nhi" />
                <div className='mt-10'>
                  <DoctorList specialtyKey="pediatrics-center" />
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div >
  )
}

export default PediatricsCenter