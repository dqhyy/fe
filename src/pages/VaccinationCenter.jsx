import React, { useState } from 'react'
import CoverSection from '../components/CoverSection'
import { Link } from 'react-router-dom'
import ImageLeftContentRight from '../components/ImageLeftContentRight';
import ContentLeftImageRight from '../components/ContentLeftImageRight';
import UnderlinedTitle from '../components/UnderlinedTitle';
import DoctorList from '../components/DoctorList';

const VaccinationCenter = () => {
  const [tab, setTab] = useState("overview");
  return (
    <div className='bg-bgcolor pb-20'>
      <CoverSection title={"TRUNG TÂM VACXIN"} />
      <div className="container mx-auto mt-10">
        <div className="flex items-center mb-8">
          <Link to="/" className="text-maincolor mr-2 text-base font-bold">
            Trang chủ
          </Link>
          <Link to="/specialties" className="text-maincolor mr-2 text-base font-bold">
            &gt; Chuyên khoa
          </Link>
          <p className="text-gray-700 text-base">
            &gt; Trung tâm Vacxin
          </p>

        </div>

        <div className='mx-20'>

          {/* Title */}
          <h1 className="text-3xl font-bold text-center text-red-700">
            Trung tâm Vacxin
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
            Tiêm chủng vắc xin không chỉ quan trọng đối với trẻ em, phụ nữ mang thai mà còn giúp người trưởng thành và đặc biệt là người già được bảo vệ trước nguy cơ lây nhiễm các bệnh truyền nhiễm để có nền tảng sức khỏe tốt. Tổ chức Y tế thế giới, Trung tâm phòng chống bệnh tật Hoa Kỳ và Hội Y học dự phòng Việt Nam khuyến cáo tiêm chủng là tiêm vắc xin cả đời; tùy theo mỗi giai đoạn, độ tuổi để có một cơ thể khỏe mạnh, phòng chống bệnh truyền nhiễm nguy hiểm.
          </p>


          {/* Content */}
          <div className="px-10 bg-white text-gray-700 leading-7 text-lg">

            {tab === "overview" && (
              <div className="">
                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Tổng quan" />
                    <p className="text-gray-700 leading-relaxed">
                      Trung tâm vắc xin - Bệnh viện Đa khoa Quốc tế HyCare được thành lập từ năm 2012, với kinh nghiệm hơn 10 năm hoạt động, đã trở thành một trong những địa chỉ tin cậy về tiêm chủng tại Việt Nam. Đơn vị luôn tuân thủ nghiêm ngặt quy trình tiêm theo tiêu chuẩn Bộ y tế và Quốc tế.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Mọi khách hàng được khám sàng lọc, tư vấn về vắc xin trước khi tiêm và theo dõi sức khỏe sau tiêm chủng. Cùng với lượng vắc xin tương đối đầy đủ về chủng loại vắc xin theo khuyến cáo tiêm chủng cho mọi lứa tuổi từ các nhà sản xuất uy tín và việc bảo quản vắc xin đạt chuẩn GSP, JCI, định hướng trung tâm sẽ là địa chỉ uy tín về tiêm chủng trong và ngoài nước.
                    </p>
                  </div>
                </ImageLeftContentRight>

                <ContentLeftImageRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Vị trí" />
                    <p className="text-gray-700 leading-relaxed">
                      Ngay khi được tiếp nhận, mỗi khách hàng sẽ được hướng dẫn và phân luồng để thực hiện từ khâu cân đo, khám sàng lọc, thanh toán, chờ tiêm và thực hiện tiêm, cuối cùng là theo dõi 30 phút sau tiêm
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Ngay từ khi đưa vào hoạt động Trung tâm vắc xin, HyCare thiết kế sơ đồ các bước tiêm chủng đi theo hình chữ U.
                    </p>

                  </div>
                </ContentLeftImageRight>

                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Tránh lây nhiễm" />

                    <p className="text-gray-700 leading-relaxed">
                      Nguyên lý vào 1 đường và ra 1 đường, chỉ đi 1 chiều từ trong phòng ra ngoài mà không đi ngược lại. Cách bố trí này không chỉ giúp hạn chế tiếp xúc lây chéo mà còn đem lại nhiều không gian riêng tư cho mỗi khách hàng.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Ngoài ra, Trung tâm vắc xin được đặt tại tầng 4 của Phòng khám đa khoa Quốc tế HyCare, đây là khu vực cách Bệnh viện khoảng hơn 200m, chủ yếu phục vụ đối tượng khách hàng khỏe mạnh, ít có nguy cơ bệnh lí nên nguy cơ lây nhiễm chéo khi di chuyển trong suốt quá trình đến Phòng khám sẽ ít hơn.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Đó là một trong những nét riêng nổi bật, cùng với chất lượng tiêm chủng đã được khẳng định thời gian qua khiến Trung tâm vắc xin của HyCare được khách hàng tin tưởng đánh giá 5 sao.
                    </p>
                  </div>
                </ImageLeftContentRight>
              </div>
            )}

            {tab === "services" && (
              <div>
                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Dịch vụ đa dạng" />
                    <p className="text-gray-700 leading-relaxed">
                      Để đảm bảo tối ưu chi phí và hiệu quả tiêm phòng, khách hàng sẽ được tư vấn các loại vắc xin phù hợp với độ tuổi, tình trạng sức khỏe, tình hình dịch bệnh, đồng thời hướng dẫn các phương pháp chăm sóc sức khỏe tại nhà, nâng cao chất lượng cuộc sống. Hiện tại, trung tâm vắc xin đang cung cấp các dịch vụ:
                    </p>

                  </div>
                </ImageLeftContentRight>

                <ContentLeftImageRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Khám sàng lọc và tư vấn" />
                    <p className="text-gray-700 leading-relaxed">
                      Sơ sinh (tiêm viêm gan B, lao) nếu đã khám lại sau sinh với chuyên khoa sơ sinh hoặc khách hàng sinh tại bệnh viện khác chỉ muốn tiêm vắc xin
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Phụ nữ mang thai tiêm vắc xin uốn ván, bạch hầu - ho gà - uốn ván, cúm.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Trẻ em, người lớn, người cao tuổi tiêm vắc xin theo khuyến cáo.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Đối tượng có bệnh lí đặc biệt: Tim bẩm sinh, người có bệnh lí nền (tim mạch, huyết áp, tiểu đường, COPD, hen phế quản….), người ghép tế bào gốc, cắt lách, trẻ đẻ non hoặc cực non...
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Tiêm huyết thanh kháng viêm gan B (sơ sinh có mẹ mang virus viêm gan B, người bị phơi nhiễm virus viêm gan B).
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Phụ nữ trước khi mang thai.
                    </p>
                  </div>
                </ContentLeftImageRight>

                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Dịch vụ xét nghiệm" />
                    <p className="text-gray-700 leading-relaxed">
                      Xét nghiệm định lượng kháng thể trong cơ thể để tư vấn tiêm vắc xin: kháng thể chống virus viêm gan A, viêm gan B, sởi, quai bị, rubella, thủy đậu.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Xét nghiệm Quantiferon để đánh giá tình trạng nhiễm lao cho các đối tượng cần xét nghiệm trước khi đi nước ngoài.
                    </p>
                  </div>
                </ImageLeftContentRight>

                <ContentLeftImageRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Khám sàng lọc và tư vấn" />
                    <p className="text-gray-700 leading-relaxed">
                      Đặc biệt, Bệnh viện còn xây dựng gói vắc xin cho trẻ em với nhiều gói 0-1 tuổi, 0-2 tuổi, 1-2 tuổi…để phù hợp với lộ trình tiêm chủng và kinh tế của gia đình. Các gói vắc xin có kết hợp với thẻ để ưu tiên quyền lợi khám bệnh miễn phí và giảm chi phí cận lâm sàng (xét nghiệm máu, XQ, chẩn đoán hình ảnh….) để tiết kiệm tối ưu chi phí cho khách hàng.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Tại Trung tâm vắc xin, ngoài tiêm chủng còn kết hợp phòng khám sơ sinh và phòng khám trẻ khỏe để khám sàng lọc bệnh lí, các mốc phát triển tâm thần, vận động để theo dõi, quản lí, tư vấn sức khỏe nhằm đồng hành cùng sự phát triển toàn diện cho trẻ.
                    </p>
                  </div>
                </ContentLeftImageRight>
              </div>
            )}

            {tab === "technology" && (
              <div>
                <ContentLeftImageRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Vacxin tiêu chuẩn JCI" />
                    <p className="text-gray-700 leading-relaxed">
                      Bệnh viện Đa khoa Quốc tế HyCare Times City là bệnh viện đầu tiên tại Hà Nội tuân thủ quy trình từ lúc bảo quản, sử dụng vắc xin theo tiêu chuẩn quốc tế JCI của Mỹ. Sử dụng nguồn vắc xin chất lượng cao, có xuất xứ rõ ràng, đảm bảo an toàn từ khâu kiểm nhập, bảo quản đến khi sử dụng.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      HyCare bảo quản vắc xin bằng dây chuyền bảo quản lạnh (Cold chain) đạt tiêu chuẩn GSP với hệ thống kho lạnh hiện đại, cho phép các loại vắc xin luôn được bảo quản trong điều kiện tốt. Mọi khách hàng đều được khám sàng lọc trước tiêm để đảm bảo sức khỏe cho tiêm chủng.
                    </p>

                  </div>
                </ContentLeftImageRight>
                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Tư vấn trước tiêm & theo dõi sau tiêm" />
                    <p className="text-gray-700 leading-relaxed">
                      Bác sĩ tư vấn cho gia đình các loại vắc xin phòng bệnh phù hợp với từng lứa tuổi theo khuyến cáo mới của Bộ Y tế & Tổ chức Y tế thế giới. Đội ngũ bác sỹ và điều dưỡng Nhi giàu kinh nghiệm, có thể tư vấn và xử lý các tình huống tiêm chủng phức tạp.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Tất cả các khách hàng đều được theo dõi 30 phút sau tiêm và đánh giá lại tình trạng trước khi ra về. Với lợi thế đa chuyên khoa, HyCare có thể theo dõi và xử trí hiệu quả các vấn đề sau tiêm chủng (nếu có);
                    </p>
                  </div>
                </ImageLeftContentRight>
                <ContentLeftImageRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Xử trí cấp cứu phản vệ (nếu có)" />
                    <p className="text-gray-700 leading-relaxed">
                      Trung tâm vắc xin được trang bị đầy đủ các phương tiện cấp cứu, thậm chí cả máy sốc điện, xe E.troley để đảm bảo cấp cứu kịp thời trong mọi tình huống  nếu không may có phản ứng phản vệ sau tiêm.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Đội ngũ bác sỹ - điều dưỡng được đào tạo về xử trí cấp cứu phản vệ, cấp cứu ngừng tuần hoàn định kì hàng năm và thường xuyên diễn tập để nhằm đảm bảo xử trí kịp thời, đúng phác đồ khi có sự cố xảy ra.
                    </p>

                  </div>
                </ContentLeftImageRight>
              </div>

            )}

            {tab === "doctors" && (
              <div className='py-10'>
                <UnderlinedTitle title="Đội ngũ bác sĩ Trung tâm Vacxin" />
                <div className='mt-10'>
                  <DoctorList specialtyKey="vaccination-center" />
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div >
  )
}

export default VaccinationCenter