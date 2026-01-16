import React, { useState } from 'react'
import CoverSection from '../components/CoverSection'
import { Link } from 'react-router-dom'
import ImageLeftContentRight from '../components/ImageLeftContentRight';
import ContentLeftImageRight from '../components/ContentLeftImageRight';
import UnderlinedTitle from '../components/UnderlinedTitle';
import DoctorList from '../components/DoctorList';

const Neurology = () => {
  const [tab, setTab] = useState("overview");
  return (
    <div className='bg-bgcolor pb-20'>
      <CoverSection title={"KHOA THẦN KINH"} />
      <div className="container mx-auto mt-10">
        <div className="flex items-center mb-8">
          <Link to="/" className="text-maincolor mr-2 text-base font-bold">
            Trang chủ
          </Link>
          <Link to="/specialties" className="text-maincolor mr-2 text-base font-bold">
            &gt; Chuyên khoa
          </Link>
          <p className="text-gray-700 text-base">
            &gt; Khoa thần kinh
          </p>

        </div>

        <div className='mx-20'>

          {/* Title */}
          <h1 className="text-3xl font-bold text-center text-red-700">
            Khoa thần kinh
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
            Chuyên khoa Thần kinh thuộc khối Y học lâm sàng, là một lĩnh vực gồm nội khoa và ngoại khoa, giữ chức năng khám, chẩn đoán, tư vấn, điều trị chuyên sâu và phẫu thuật những bệnh lý có liên quan đến yếu tố thần kinh.
          </p>


          {/* Content */}
          <div className="px-10 bg-white text-gray-700 leading-7 text-lg">

            {tab === "overview" && (
              <div className="">
                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Phẫu thuật thần kinh" />
                    <p className="text-gray-700 leading-relaxed">
                      Chúng tôi có các phẫu thuật viên với hơn 20 năm kinh nghiệm trong lĩnh vực ngoại thần kinh,
                      được đào tạo bài bản và dài hạn tại các trung tâm thần kinh trên thế giới như Pháp, Canada,
                      Hàn Quốc… Trong thời gian qua, chúng tôi đã triển khai nhiều kỹ thuật phẫu thuật cột sống
                      và sọ não, đem lại kết quả tốt cho bệnh nhân.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                      Một số kỹ thuật chuyên môn khó đã được thực hiện tại bệnh viện bao gồm:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
                      <li>Phẫu thuật điều trị co giật nửa mặt có theo dõi điện sinh lý thần kinh trong mổ</li>
                      <li>Phẫu thuật bóc u não có theo dõi điện sinh lý thần kinh trong mổ</li>
                      <li>Phẫu thuật điều trị động kinh</li>
                      <li>Phẫu thuật cột sống xâm lấn tối thiểu có theo dõi điện sinh lý thần kinh trong mổ</li>
                      <li>
                        Can thiệp mạch máu kết hợp phẫu thuật điều trị các bệnh lý dị dạng mạch máu não
                      </li>
                    </ul>

                    <p className="text-gray-700 leading-relaxed mt-4">
                      Theo dõi điện sinh lý thần kinh trong mổ là kỹ thuật cao và chuyên sâu, giúp tăng tính an toàn
                      cho cuộc mổ, giảm thiểu nguy cơ tổn thương thần kinh gây yếu liệt – mối lo ngại lớn của bệnh
                      nhân khi phẫu thuật cột sống và sọ não. Đây là kỹ thuật cao mà hiện nay rất ít cơ sở y tế
                      tại Việt Nam có thể làm chủ và triển khai thường quy trong phẫu thuật thần kinh.
                    </p>

                  </div>
                </ImageLeftContentRight>

                <ContentLeftImageRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Nội thần kinh" />
                    <p className="text-gray-700 leading-relaxed mt-4">
                      Chúng tôi có đội ngũ bác sỹ nội thần kinh có chuyên môn giỏi, được đào tạo ở Canada, Hàn Quốc, Pháp, .. điều trị hiệu quả các bệnh lý như đau đầu, đặc biệt là các thể đau đầu mạn tính, động kinh, Parkinson và các rối loạn vận động, bệnh lý thần kinh ngoại biên, bệnh lý tự miễn của hệ thần kinh , viêm não , đột quỵ các giai đoạn … Các bác sỹ nội thần kinh luôn phối hợp với các phẫu thuật viên trong theo dõi và điều trị các bệnh lý phức tạp, đa chuyên khoa… Sự phối hợp này đã đem đến kết quả tốt và sự hài lòng cho bệnh nhân.
                    </p>
                  </div>
                </ContentLeftImageRight>

                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Hợp tác quốc tế" />
                    <p className="text-gray-700 leading-relaxed">
                      Chúng tôi duy trì sự hợp tác và tham vấn ý kiến chuyên môn thường xuyên từ các giáo sư của Trung tâm y khoa Cleveland (Hoa Kỳ), Bệnh viện Đại học Montreal (Canada), Bệnh viện đại học quốc gia Hàn Quốc để đạt kết quả điều trị tốt cho bệnh nhân
                    </p>

                  </div>
                </ImageLeftContentRight>

                <ContentLeftImageRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Giảm đau và gây mê hồi sức" />
                    <p className="text-gray-700 leading-relaxed">
                      HyCare hiện đang áp dụng các kỹ thuật gây tê vùng nhằm giảm đau tốt nhất cho khách hàng. Kỹ thuật giảm đau tốt đã giúp bệnh nhân phục hồi tốt và vận động sớm sau mổ.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Đặc biệt đối với những ca mổ cột sống, chúng tôi áp dụng kỹ thuật gây tê cơ dựng sống (tê ESP) và lưu catheter nhằm kiểm soát  đau liên tục trong vòng suốt 72 giờ. Qua khảo sát thực tế khám đau sau mổ, điểm đau VAS trung bình các mổ lớn tại HyCare khoảng 4 điểm ở thời điểm 24h và 2 điểm ở thời điểm 48 giờ.
                    </p>
                  </div>
                </ContentLeftImageRight>

              </div>
            )}

            {tab === "services" && (
              <div>
                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Nội Thần kinh" />
                    <p className="text-gray-700 leading-relaxed">
                      Chẩn đoán và điều trị các bệnh:
                    </p>

                    <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
                      <li>
                        Các dạng đau đầu nguyên phát như migraine, đau đầu căng thẳng, đau đầu từng cụm,
                        đau thần kinh tam thoa…, đặc biệt là các thể đau đầu mạn tính, đau đầu do lạm dụng
                        thuốc giảm đau.
                      </li>
                      <li>
                        Các bệnh lý đau mạn tính liên quan tới cơ chế tăng nhạy cảm đau trung ương như đau xơ cơ.
                      </li>
                      <li>
                        Đau vai gáy, đau thắt lưng – hông, thoát vị đĩa đệm cột sống cổ và thắt lưng,
                        rối loạn tiền đình, rối loạn giấc ngủ.
                      </li>
                      <li>
                        Chẩn đoán và điều trị đột quỵ cấp, bao gồm sử dụng thuốc tiêu sợi huyết,
                        can thiệp hút cục máu đông trong lòng mạch máu não, đặt stent mạch não,
                        kết hợp tập phục hồi chức năng vận động sớm cho bệnh nhân.
                      </li>
                      <li>
                        Chẩn đoán và điều trị bệnh Parkinson, chẩn đoán phân biệt các bệnh lý có hội chứng Parkinson.
                      </li>
                      <li>
                        Chẩn đoán các bệnh lý sa sút trí tuệ, suy giảm nhận thức nhẹ.
                      </li>
                      <li>
                        Chẩn đoán và điều trị các bệnh lý tự miễn của hệ thần kinh như nhược cơ,
                        viêm tủy, viêm tủy thị thần kinh, viêm não tự miễn…
                      </li>
                      <li>
                        Chẩn đoán và điều trị các bệnh lý thần kinh ngoại vi như hội chứng Guillain–Barré,
                        viêm đa dây thần kinh mạn tính, bệnh đơn dây thần kinh do chèn ép
                        (ví dụ hội chứng ống cổ tay)…
                      </li>
                      <li>
                        Chẩn đoán và điều trị liệt dây VII ngoại vi (liệt Bell), zona thần kinh…
                      </li>
                      <li>
                        Chẩn đoán và điều trị động kinh.
                      </li>
                    </ul>

                  </div>
                </ImageLeftContentRight>

                <ContentLeftImageRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Các phương pháp điều trị" />
                    <p className="text-gray-700 leading-relaxed">
                      Các phương pháp điều trị đang được áp dụng tại chuyên khoa Nội Thần kinh:
                    </p>

                    <ul className="list-disc pl-6 text-gray-700 leading-relaxed mt-2">
                      <li>
                        Xét nghiệm để chẩn đoán chính xác: sàng lọc máu, nước tiểu, xét nghiệm các chỉ số miễn dịch, cận u, di truyền.
                      </li>
                      <li>
                        Thăm dò điện sinh lý thần kinh: điện não đồ, điện não đồ video, điện cơ; đo dẫn truyền dây thần kinh, đo điện thế gợi thị giác, thính giác…
                      </li>
                      <li>
                        Chẩn đoán hình ảnh: chụp cắt lớp vi tính (CT scan); cộng hưởng từ (MRI); chụp cắt lớp phát xạ positron (PET); chụp cắt lớp phát xạ đơn photon (SPECT).
                      </li>
                    </ul>

                  </div>
                </ContentLeftImageRight>

                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Ngoại Thần kinh" />
                    <p className="text-gray-700 leading-relaxed">
                      Khoa Ngoại thần kinh còn gọi là khoa phẫu thuật thần kinh, giữ chức năng điều trị các bệnh lý liên quan đến yếu tố thần kinh bằng các phương pháp ngoại khoa, bao gồm phẫu thuật nội soi, vi phẫu thuật, can thiệp nội mạch, phẫu thuật tạo hình, mổ và cấy ghép. Chuyên khoa Ngoại thần kinh thực hiện các phẫu thuật u não, u dây thần kinh, u cột sống, chấn thương sọ não và cột sống; vi phẫu thuật mạch máu não trong co giật nửa mặt; vi phẫu thuật mạch máu não trong đau dây thần kinh V.
                    </p>
                  </div>
                </ImageLeftContentRight>
              </div>
            )}

            {tab === "technology" && (
              <div>
                <ContentLeftImageRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Chẩn đoán hình ảnh" />
                    <p className="text-gray-700 leading-relaxed">
                      Chẩn đoán hình ảnh, Hồi sức tích cực, nội khoa, Ngoại khoa: HyCare được đầu tư trang thiết bị máy móc hiện đại như MRI 3.0; máy chụp CT640, phòng mổ hybrid có hệ thống chụp DSA, máy theo dõi điện sinh lý thần kinh trong mổ, phòng đo điện não video EEG, phòng điện cơ với hệ thống máy móc hiện đại, hệ thống lab tiên tiến … nhằm mang lại kết quả chẩn đoán chính xác, độ tin cậy cao và an toàn cho người bệnh. Theo kịp xu thế của y tế thế giới, phối hợp đa chuyên khoa và lấy bệnh nhân là trung tâm là phương thức điều trị  được thực hiện thường quy tại HyCare, và đã đem lại sự hài lòng cũng như kết quả tốt cho bệnh nhân.
                    </p>

                  </div>
                </ContentLeftImageRight>
              </div>

            )}

            {tab === "doctors" && (
              <div className='py-10'>
                <UnderlinedTitle title="Đội ngũ bác sĩ Trung tâm Thần kinh" />
                <div className='mt-10'>
                  <DoctorList specialtyKey="neurology" />
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div >
  )
}

export default Neurology