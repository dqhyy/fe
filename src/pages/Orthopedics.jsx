import React, { useState } from 'react'
import CoverSection from '../components/CoverSection'
import { Link } from 'react-router-dom'
import ImageLeftContentRight from '../components/ImageLeftContentRight';
import ContentLeftImageRight from '../components/ContentLeftImageRight';
import UnderlinedTitle from '../components/UnderlinedTitle';
import DoctorList from '../components/DoctorList';

const Orthopedics = () => {
  const [tab, setTab] = useState("overview");
  return (
    <div className='bg-bgcolor pb-20'>
      <CoverSection title={"CHẤN THƯƠNG CHỈNH HÌNH"} />
      <div className="container mx-auto mt-10">
        <div className="flex items-center mb-8">
          <Link to="/" className="text-maincolor mr-2 text-base font-bold">
            Trang chủ
          </Link>
          <Link to="/specialties" className="text-maincolor mr-2 text-base font-bold">
            &gt; Chuyên khoa
          </Link>
          <p className="text-gray-700 text-base">
            &gt; Chấn thương chỉnh hình
          </p>

        </div>

        <div className='mx-20'>

          <h1 className="text-3xl font-bold text-center text-red-700">
            Chấn thương chỉnh hình
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
            Trung tâm áp dụng những công nghệ hiện đại như công nghệ 3D trong phẫu thuật cá thể hóa thay thế khớp háng, khớp gối và xương nhân tạo, công nghệ bảo tồn chi thể cho bệnh nhân ung thư xương, và công nghệ mổ nội soi khớp gối độc quyền “Ánh xạ giải phẫu”. Song hành cùng công nghệ là quy trình chăm sóc toàn diện, hướng tới tiêu chí giúp bệnh nhân nhanh chóng phục hồi với chất lượng cuộc sống sau mổ đạt mức tối ưu.
          </p>


          <div className="px-10 bg-white text-gray-700 leading-7 text-lg">

            {tab === "overview" && (
              <div className="">
                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="ORTHOPAEDICS & SPORTS MEDICINE" />
                    <p className="text-gray-700 leading-relaxed">
                      Orthopaedics & Sports Medicine Center bao quát toàn bộ các lĩnh vực về chấn thương chỉnh hình và y học thể thao với 6 chuyên khoa:
                    </p>

                    <UnderlinedTitle title="Uy tín và phản ứng nhanh" />
                    <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
                      <li>Phẫu thuật nội soi khớp và y học thể thao</li>
                      <li>Phẫu thuật chi trên</li>
                      <li>
                        Phẫu thuật chi dưới (bao gồm khớp háng và khung chậu, khớp gối và cổ – bàn chân)
                      </li>
                      <li>Phẫu thuật cột sống</li>
                      <li>U xương và phần mềm</li>
                      <li>Phục hồi chức năng</li>
                    </ul>

                  </div>
                </ImageLeftContentRight>

                <ContentLeftImageRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Y học thể thao" />
                    <p className="text-gray-700 leading-relaxed">
                      Y học thể thao là một chuyên khoa mũi nhọn trực thuộc Trung tâm Chấn thương chỉnh hình và Y học thể thao HyCare; quy tụ những chuyên gia đầu ngành các lĩnh vực phẫu thuật, chẩn đoán hình ảnh, phục hồi chức năng, dinh dưỡng và tâm lý nhằm phát triển nền y học thể thao nước nhà cách bài bản và toàn diện trên nguyên tắc "cá thể hóa".
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Tháng 3/2022, Y học thể thao HyCare chính thức trở thành đơn vị bảo trợ y tế cho Đội Tuyển Bóng Đá Quốc Gia Việt Nam. Tới tháng 4/2024, Trung tâm chính thức đạt chứng nhận Trung tâm Y học thể thao xuất sắc châu Á như một minh chứng cho những nỗ lực đóng góp cho nền thể thao nước nhà.
                    </p>
                  </div>
                </ContentLeftImageRight>

                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Trang thiết bị và công nghệ" />
                    <p className="text-gray-700 leading-relaxed ">
                      Y học thể thao HyCare còn sở hữu các trang thiết bị và công nghệ hiện đại lần đầu tiên có mặt tại Việt Nam:
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Phòng Phân tích Vận động (Motion Analysis Lab): Sử dụng hệ thống công nghệ cao để ghi nhận và phân tích động học, động lực học, sức cơ, điện thần kinh cơ, và thành phần cơ thể, giúp lập kế hoạch điều trị hoặc luyện tập cá thể hóa, giảm nguy cơ chấn thương và nâng cao thành tích thể thao.
                    </p>
                    <p className="text-gray-700 leading-relaxed ">
                      Phương pháp "Ánh xạ giải phẫu": Sử dụng công nghệ hình ảnh 3D để phân tích các thông số dây chằng ở bên lành nhằm tạo ra thiết kế “bản sao soi gương” cho bên bị đứt dây chằng,  giúp phẫu thuật viên có thể tái tạo các dây chằng “cá thể hóa” với độ chính xác cao.
                    </p>

                  </div>
                </ImageLeftContentRight>

              </div>
            )}

            {tab === "services" && (
              <div>
                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Là đơn vị bảo trợ y tế ĐTQGVN" />
                    <p className="text-gray-700 leading-relaxed">
                      Y học thể thao là một chuyên khoa mũi nhọn trực thuộc Trung tâm Chấn thương chỉnh hình và Y học thể thao HyCare; quy tụ những chuyên gia đầu ngành các lĩnh vực phẫu thuật, chẩn đoán hình ảnh, phục hồi chức năng, dinh dưỡng và tâm lý nhằm phát triển nền y học thể thao nước nhà cách bài bản và toàn diện trên nguyên tắc "cá thể hóa".
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                      Tháng 3/2022, Y học thể thao HyCare chính thức trở thành đơn vị bảo trợ y tế cho Đội Tuyển Bóng Đá Quốc Gia Việt Nam. Tới tháng 4/2024, Trung tâm chính thức đạt chứng nhận Trung tâm Y học thể thao xuất sắc châu Á như một minh chứng cho những nỗ lực đóng góp cho nền thể thao nước nhà.
                    </p>
                  </div>
                </ImageLeftContentRight>

                <ContentLeftImageRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Motion Lab & Ánh xạ giải phẫu" />
                    <p className="text-gray-700 leading-relaxed">
                      Y học thể thao HyCare còn sở hữu các trang thiết bị và công nghệ hiện đại lần đầu tiên có mặt tại Việt Nam:
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Phòng Phân tích Vận động (Motion Analysis Lab): Sử dụng hệ thống công nghệ cao để ghi nhận và phân tích động học, động lực học, sức cơ, điện thần kinh cơ, và thành phần cơ thể, giúp lập kế hoạch điều trị hoặc luyện tập cá thể hóa, giảm nguy cơ chấn thương và nâng cao thành tích thể thao.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Phương pháp "Ánh xạ giải phẫu": Sử dụng công nghệ hình ảnh 3D để phân tích các thông số dây chằng ở bên lành nhằm tạo ra thiết kế “bản sao soi gương” cho bên bị đứt dây chằng,  giúp phẫu thuật viên có thể tái tạo các dây chằng “cá thể hóa” với độ chính xác cao.
                    </p>
                  </div>
                </ContentLeftImageRight>
              </div>
            )}

            {tab === "technology" && (
              <div>
                <ContentLeftImageRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Công nghệ 3D đạt chuẩn quốc tế" />
                    <p className="text-gray-700 leading-relaxed">
                      Đây là đơn vị nghiên cứu và phát triển công nghệ 3D đạt tiêu chuẩn quốc tế ISO 9001:2015 và ISO 13485:2016 về sản xuất thiết bị y tế với đầy đủ trang thiết bị hiện đại trong khu vực; các ứng dụng thường quy được sản xuất tại Lab 3D bao gồm: in mô hình tổn thương bệnh lý phục vụ hỗ trợ chẩn đoán, điều trị bệnh và đào tạo y khoa, thiết kế bản kế hoạch phẫu thuật số hóa, thiết bị định vị chính xác trong phẫu thuật, áp dụng trong rộng rãi các phẫu thuật như chấn thương chỉnh hình, tim mạch, hàm mặt, tiết niệu, ....
                    </p>

                  </div>
                </ContentLeftImageRight>
                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Phòng Phân tích Vận động" />
                    <p className="text-gray-700 leading-relaxed">
                      Là nơi các bệnh nhân có vấn đề về cơ quan vận động, các vận động viên và người chơi thể thao được kiểm tra, đánh giá chức năng vận động của từng thành phần cơ riêng biệt trên chi thể, đánh giá khả năng đáp ứng với việc vận động hàng ngày và tập luyện bằng hệ thống camera động cùng hệ thống cảm biến lực phân tích chính xác, trực quan. Qua đó đóng góp tích cực cho việc phục hồi sau chấn thương, giúp phát hiện nguy cơ chấn thương mới và cải thiện thành tích thi đấu, tập luyện.
                    </p>
                  </div>
                </ImageLeftContentRight>
                <ContentLeftImageRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Phòng nghiên cứu về UTX tại Nhật" />
                    <p className="text-gray-700 leading-relaxed">
                      Trung tâm Chấn thương chỉnh hình cũng hợp tác với Trường đại học Osaka Metropolitan (Nhật Bản) thành lập Phòng nghiên cứu Đổi mới sáng tạo trong Y khoa  HyCare - Osaka, thực hiện nghiên cứu trên chính mẫu mô, mẫu máu của các bệnh nhân Việt Nam tham gia vào nghiên cứu, từ đó có khả năng trực tiếp ứng dụng kết quả nghiên cứu vào quá trình theo dõi, điều trị bệnh. Đây là một trong những hướng đi đột phá, được kì vọng sẽ thay đổi được tiên lượng và điều trị bệnh nhân ung thư xương Việt Nam trong thời gian tới.
                    </p>
                  </div>
                </ContentLeftImageRight>
                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Khu phẫu thuật" />
                    <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
                      <li>
                        Phòng mổ Hybrid với hệ thống tương tác hỗ trợ trực quan đa màn hình kết nối
                      </li>
                      <li>
                        Robot định vị G.E Innova tạo hình ảnh phẫu thuật 3 chiều thời gian thực, hỗ trợ
                        các thao tác yêu cầu độ chính xác cao ngay trong mổ
                      </li>
                      <li>
                        Dàn phẫu thuật nội soi khớp đạt chuẩn chất lượng 4K cùng các thiết bị nội soi khớp hiện đại
                      </li>
                    </ul>
                  </div>
                </ImageLeftContentRight>
              </div>

            )}

            {tab === "doctors" && (
              <div className='py-10'>
                <UnderlinedTitle title="Đội ngũ bác sĩ Khoa chỉnh hình" />
                <div className='mt-10'>
                  <DoctorList specialtyKey="orthopedics" />
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div >
  )
}

export default Orthopedics