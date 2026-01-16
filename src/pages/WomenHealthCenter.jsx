import React, { useState } from 'react'
import CoverSection from '../components/CoverSection'
import { Link } from 'react-router-dom'
import ImageLeftContentRight from '../components/ImageLeftContentRight';
import ContentLeftImageRight from '../components/ContentLeftImageRight';
import UnderlinedTitle from '../components/UnderlinedTitle';
import DoctorList from '../components/DoctorList';

const WomanHealthCenter = () => {
  const [tab, setTab] = useState("overview");
  return (
    <div className='bg-bgcolor pb-20'>
      <CoverSection title={"TRUNG TÂM SỨC KHỎE PHỤ NỮ"} />
      <div className="container mx-auto mt-10">
        <div className="flex items-center mb-8">
          <Link to="/" className="text-maincolor mr-2 text-base font-bold">
            Trang chủ
          </Link>
          <Link to="/specialties" className="text-maincolor mr-2 text-base font-bold">
            &gt; Chuyên khoa
          </Link>
          <p className="text-gray-700 text-base">
            &gt; Trung tâm sức khỏe phụ nữ
          </p>

        </div>

        <div className='mx-20'>

          {/* Title */}
          <h1 className="text-3xl font-bold text-center text-red-700">
            Trung tâm sức khỏe phụ nữ
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
                    <UnderlinedTitle title="Chuyên khoa sản phụ khoa" />
                    <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
                      <li>
                        <strong>Chuyên khoa Sản khoa:</strong> là chuyên khoa có chức năng theo dõi thai kỳ, khám và điều trị cho phụ nữ mang thai với các bệnh lý đi kèm của thai nhi và phần phụ của thai.
                      </li>
                      <li>
                        <strong>Chuyên khoa Hỗ trợ sinh sản:</strong> là chuyên khoa giữ chức năng chẩn khám, tìm hiểu nguyên nhân, tư vấn, hỗ trợ và điều trị các bệnh về chức năng sinh sản bao gồm khó thụ thai, nghi ngờ vô sinh, vô sinh thứ phát, vô sinh nguyên phát, ảnh hưởng của bệnh lý dẫn đến hiếm muộn vô sinh của một cặp vợ chồng.
                      </li>
                      <li>
                        <strong>Chuyên khoa Phụ khoa:</strong> là chuyên khoa có chức năng khám, chẩn đoán, tư vấn và điều trị các bệnh lý phụ khoa lành tính, các bệnh lý cấp cứu và các bệnh liên quan tới nội tiết sinh sản.
                      </li>
                    </ul>

                  </div>
                </ImageLeftContentRight>

                <ContentLeftImageRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Sản khoa" />
                    <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
                      <li>Các kỹ thuật chẩn đoán trước sinh, sàng lọc trước sinh tiên tiến</li>
                      <li>
                        Các kỹ thuật can thiệp bào thai: truyền máu thai nhi, truyền ối, giảm ối, đặt shunt dẫn lưu dịch màng phổi thai nhi, điều trị hội chứng truyền máu song thai, xét nghiệm máu thai nhi
                      </li>
                      <li>
                        Giảm đau trong và sau đẻ, trong mổ và sau mổ không Morphin, hiệu quả cao và không gây ảnh hưởng đến thai nhi và trẻ sau sinh
                      </li>
                      <li>Tiêu chuẩn chất lượng JCI</li>
                    </ul>
                  </div>
                </ContentLeftImageRight>

                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Phụ khoa" />
                    <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
                      <li>
                        Phẫu thuật các bệnh lý sàn chậu khó, phức tạp, bệnh lý sàn chậu tái phát dù đã phẫu thuật
                      </li>
                      <li>
                        Phẫu thuật điều trị bệnh lý ung thư phụ khoa bằng nội soi hoặc mổ mở
                      </li>
                      <li>
                        Phẫu thuật điều trị các bệnh lý phụ khoa lành tính bằng nội soi hoặc mổ mở
                      </li>
                      <li>
                        Phẫu thuật xâm lấn tối thiểu qua đường âm đạo
                      </li>
                      <li>
                        Giảm đau trong và sau mổ tối đa, rút ngắn thời gian hồi phục
                      </li>
                      <li>
                        Tiêu chuẩn chất lượng JCI
                      </li>
                    </ul>
                  </div>
                </ImageLeftContentRight>

                <ContentLeftImageRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Khoa IVF" />
                    <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
                      <li>
                        Điều trị thành công nhiều trường hợp khách hàng nhóm mẹ lớn tuổi, thất bại làm tổ nhiều lần, người có tiền sử mang bệnh lý đơn gen, đã từng làm IVF thất bại ở các đơn vị khác.
                      </li>
                      <li>
                        Đạt được nhiều thành tựu trong tìm nguyên nhân thất bại làm tổ (ví dụ: trường hợp do rối loạn miễn dịch niêm mạc tử cung ⇒ sử dụng Matrice Lab – chỉ HyCare có tại Việt Nam).
                      </li>
                      <li>
                        Đội ngũ chuyên gia giàu kinh nghiệm, tận tâm, được đào tạo bài bản, đồng bộ trong và ngoài nước, luôn có sự tham gia của các chuyên gia nổi tiếng thế giới trong lĩnh vực như GS Norman, TS Jean Clemment Sage, TS Meyer…
                      </li>
                      <li>
                        Chăm sóc theo ê-kíp: tư vấn 1:1; khách hàng – bác sĩ; khách hàng được chọn và theo dõi sức khỏe với bác sĩ trong suốt quá trình (cùng với 1 điều dưỡng, chăm sóc khách hàng, chuyên viên phôi học) và hỗ trợ tâm lý trước, trong và sau điều trị (IVF có liên kết với Khoa Sức khỏe Tâm thần).
                      </li>
                      <li>
                        Phác đồ điều trị cá thể hóa nhằm tối ưu hóa hiệu quả và chi phí điều trị.
                      </li>
                      <li>
                        Tỉ lệ thành công luôn giữ vững ở mức cao khoảng 50% tỉ lệ thai lâm sàng; tỉ lệ tai biến như quá kích buồng trứng, chảy máu sau chọc hút noãn luôn rất thấp, dưới mức cho phép của các tổ chức quốc tế trong lĩnh vực hỗ trợ sinh sản.
                      </li>
                    </ul>
                  </div>
                </ContentLeftImageRight>

              </div>
            )}

            {tab === "services" && (
              <div>
                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Chuyên khoa Sản khoa" />
                    <p className="text-gray-700 leading-relaxed ">
                      Chuyên khoa Sản khoa chuyên sâu về khám và quản lý thai thường; tư vấn và cung cấp các dịch vụ chăm sóc thai sản; khám và quản lý thai nghén nguy cơ cao; hỗ trợ sinh sản như IVF, IUI; điều trị thai bệnh lý như: song thai, đa thai, rau tiền đạo, rau cài răng lược, dọa sảy thai, dọa sinh non, mẹ có bệnh lý nội khoa (tiểu đường, bệnh lý thận, hội chứng Antiphospholipid, viêm gan, tim mạch…) tiền sản giật, u nang buồng trứng, u xơ tử cung, bệnh lý ung thư khi mang thai, thai dị tật bẩm sinh, thai chậm phát triển trong tử cung, nhiễm trùng bào thai.
                    </p>

                  </div>
                </ImageLeftContentRight>

                <ContentLeftImageRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Chuyên khoa hỗ trợ sinh sản" />
                    <p className="text-gray-700 leading-relaxed ">
                      Hoạt động của Chuyên khoa Hỗ trợ sinh sản dựa trên việc tìm hiểu tiền sử thai nghén, điều kiện thụ thai và thực hiện khám lâm sàng tổng quát, các siêu âm và xét nghiệm sơ khởi để tìm hiểu nguyên nhân sau đó tiến hành tư vấn các phương pháp điều trị thích hợp như điều trị dứt điểm các chứng bệnh gây tác động tiêu cực, áp dụng thụ tinh nhân tạo hoặc thụ tinh trong ống nghiệm. Trung tâm Hỗ trợ sinh sản HyCare áp dụng quy trình điều trị phối hợp thăm khám toàn diện, kết hợp cả nam khoa và sản phụ khoa để đưa ra phương án tối ưu cho từng trường hợp người bệnh.
                    </p>
                  </div>
                </ContentLeftImageRight>

                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Chuyên khoa Phụ khoa" />
                    <p className="text-gray-700 leading-relaxed ">
                      Chuyên khoa Phụ khoa chuyên sâu về phẫu thuật phụ khoa các bệnh lý lành tính (u xơ tử cung, u nang buồng trứng, u lạc nội mạc tử cung, bệnh lý sàn chậu: són tiểu, rối loạn tiểu tiện, sa sinh dục), phẫu thuật bệnh lý phụ khoa ác tính (ung thư cổ tử cung, ung thư buồng trứng, ung thư niêm mạc tử cung, ung thư âm hộ…), sàng lọc sớm ung thư cổ tử cung, ung thư vú, chẩn đoán sớm ung thư buồng trứng. Điều trị các bệnh lý rối loạn nội tiết (tiền mãn kinh, mãn kinh, hội chứng buồng trứng đa nang), rối loạn kinh nguyệt (rong kinh, rong huyết, băng kinh,…). Các phẫu thuật thẩm mỹ thu gọn tạo hình âm đạo, tạo hình môi bé, sửa sẹo xấu tầng sinh môn…
                    </p>

                  </div>
                </ImageLeftContentRight>
              </div>
            )}

            {tab === "technology" && (
              <div>
                <ContentLeftImageRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Khoa Sản, Khoa Phụ" />
                    <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
                      <li>Phẫu thuật nội soi robot, nội soi thường</li>
                      <li>Phẫu thuật mở bụng</li>
                      <li>Phẫu thuật sàn chậu</li>
                      <li>Phẫu thuật đường âm đạo</li>
                      <li>
                        Máy siêu âm 4D Voluson E10, S8; máy cộng hưởng từ 3.5T chụp cộng hưởng từ thai nhi
                      </li>
                      <li>Máy laser điều trị</li>
                      <li>Công nghệ giảm đau tiên tiến</li>
                    </ul>

                  </div>
                </ContentLeftImageRight>
                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Khoa IVF" />
                    <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
                      <li>
                        Nuôi phôi time-lapse: nuôi và theo dõi kỹ thuật 24/24, giúp lựa chọn phôi, theo dõi và đánh giá chất lượng phôi
                      </li>
                      <li>
                        IMS checker tránh nhầm lẫn trong việc thực hiện thủ thuật
                      </li>
                      <li>
                        Máy siêu âm hiện đại, siêu âm khảo sát buồng tử cung để đánh giá các bệnh lý trong buồng tử cung có thể gây cản trở cho quá trình làm tổ và mang thai
                      </li>
                      <li>
                        Máy nội soi hiện đại, nội soi buồng tử cung chẩn đoán khuyết sẹo mổ lấy thai để điều trị khả năng thất bại làm tổ và tăng khả năng thụ thai thành công
                      </li>
                      <li>
                        Sinh thiết và sàng lọc phôi để chẩn đoán di truyền tiền làm tổ
                      </li>
                      <li>
                        Bơm gel tạo bọt để đánh giá độ thông của hai vòi tử cung (HyFoSy)
                      </li>
                    </ul>
                  </div>
                </ImageLeftContentRight>
              </div>

            )}

            {tab === "doctors" && (
              <div className='py-10'>
                <UnderlinedTitle title="Đội ngũ bác sĩ Trung tâm Sức khỏe phụ nữ" />
                <div className='mt-10'>
                  <DoctorList specialtyKey="women-health-center" />
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div >
  )
}

export default WomanHealthCenter;