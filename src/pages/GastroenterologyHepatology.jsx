import React, { useState } from 'react'
import CoverSection from '../components/CoverSection'
import { Link } from 'react-router-dom'
import ImageLeftContentRight from '../components/ImageLeftContentRight';
import ContentLeftImageRight from '../components/ContentLeftImageRight';
import UnderlinedTitle from '../components/UnderlinedTitle';
import DoctorList from '../components/DoctorList';


const GastroenterologyHepatology = () => {
  const [tab, setTab] = useState("overview");
  return (
    <div className='bg-bgcolor pb-20'>
      <CoverSection title={"Tiêu hóa - Gan mật"} />
      <div className="container mx-auto mt-10">
        <div className="flex items-center mb-8">
          <Link to="/" className="text-maincolor mr-2 text-base font-bold">
            Trang chủ
          </Link>
          <Link to="/specialties" className="text-maincolor mr-2 text-base font-bold">
            &gt; Chuyên khoa
          </Link>
          <p className="text-gray-700 text-base">
            &gt; Tiêu hóa - Gan mật
          </p>

        </div>

        <div className='mx-20'>

          <h1 className="text-3xl font-bold text-center text-red-700">
            Tiêu hóa - Gan mật - Tiết niệu
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
            Là một trong các Trung tâm Tiêu hóa – gan mật – tiết niệu tốt tại Việt Nam, Trung tâm phát triển các phương pháp, kỹ thuật chẩn đoán điều trị hiện đại tiên tiến chuyên sâu, lấy các kỹ thuật ít xâm lấn làm mũi nhọn chuyên môn. Mục tiêu là đạt hiệu quả cao, ít đau, phục hồi sớm, thẩm mỹ, nâng cao chất lượng cuộc sống cho người bệnh.</p>


          <div className="px-10 bg-white text-gray-700 leading-7 text-lg">

            {tab === "overview" && (
              <div className="">
                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Đội ngũ chuyên gia" />
                    <p className="text-gray-700 leading-relaxed">
                      Với đội ngũ chuyên gia giỏi ở Việt Nam về nội tiêu hóa, ngoại tiêu hóa, tiết niệu, được trang bị các phương tiện, trang thiết bị hiện đại từ các nhà sản xuất danh tiếng trên thế giới, Trung tâm Tiêu hóa – Gan mật – Tiết niệu HyCare đã thực hiện thường quy các kỹ thuật rất khó, đồng thời đã tiếp cận sớm và làm chủ các kỹ thuật điều trị mới mang tính đột phá hiện nay.
                    </p>
                  </div>
                </ImageLeftContentRight>

                <ContentLeftImageRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Lấy người bệnh làm trung tâm" />
                    <p className="text-gray-700 leading-relaxed">
                      Quản trị chuyên môn tiên tiến – Lấy người bệnh làm trung tâm: Trung tâm được tổ chức quản trị chuyên môn theo nhóm bệnh (service line), theo từng bệnh trọng điểm IPU với sự tham gia của nhiều chuyên ngành, điều trị đa mô thức (Tumor Board) dựa trên các hướng dẫn điều trị mới nhất của các quốc gia tiên tiến như Hoa Kỳ, Nhật Bản, với sự tham gia của các chuyên gia giỏi nhất của HyCare. Như vậy, người bệnh được chẩn đoán bệnh chính xác nhất, được lựa chọn phương pháp điều trị tiên tiến, phù hợp nhất với chi phí tối ưu nhấ
                    </p>
                  </div>
                </ContentLeftImageRight>

                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Phục hồi sớm sau mổ ERAS" />
                    <p className="text-gray-700 leading-relaxed">
                      Là bệnh viện đầu tiên ở Việt Nam áp dụng thường quy chương trình phục hồi sớm sau mổ (ERAS) với tất cả các phẫu thuật một cách bài bản, theo tiêu chuẩn quốc tế, với sự phối hợp của nhiều chuyên khoa (BS ngoại khoa, gây mê giảm đau, phục hồi chức năng, dinh dưỡng, dược lâm sàng). Đặc biệt phương pháp giảm đau sau mổ bằng gây tê mặt phẳng cơ dựng sống (ESP) không dùng thuốc morphin rất có hiệu quả giảm đau sau mổ, nhanh phục hồi chức năng hô hấp và tiêu hóa, giúp bệnh nhân ăn sớm, vận động sớm, phục hồi nhanh, giảm thời gian nằm viện, giảm chi phí.
                    </p>
                  </div>
                </ImageLeftContentRight>

                <ContentLeftImageRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Thành tựu nổi bật" />
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Trong lĩnh vực ngoại tiêu hóa gan mật:</strong>  trung tâm đã thực hiện được hầu hết các phẫu thuật lớn, chuyên sâu với phẫu thuật robot, phẫu thuật nội soi làm trọng điểm.
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
                      <li>
                        Phẫu thuật nhiều ca ghép gan ở người cho sống thường quy cả người lớn và trẻ em, đặc biệt là ghép gan cấp cứu với tỉ lệ thành công cao, tỉ lệ biến chứng rất thấp.
                      </li>
                      <li>
                        Phẫu thuật robot từ năm 2017 và hiện đã thực hiện thường quy trong điều trị ung thư dạ dày, ung thư đại tràng, điều trị béo phì và nhiều phẫu thuật tiêu hóa khác.
                      </li>
                      <li>
                        Phát triển các phẫu thuật nội soi ít xâm lấn, nhanh hồi phục sức khỏe và mang lại chất lượng cuộc sống tốt cho người bệnh là định hướng phát triển trọng tâm.
                      </li>
                    </ul>
                  </div>
                </ContentLeftImageRight>

                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Thành tựu nổi bật" />
                    <p className="text-gray-700 leading-relaxed">
                      Hiện nay, HyCare đã thực hiện được trên 90% loại phẫu thuật tiêu hóa bằng phẫu thuật nội soi, kể cả các phẫu thuật rất lớn, đòi hỏi trình độ chuyên môn cao như: Phẫu thuật nội soi điều trị ung thư thực quản, phẫu thuật nội soi cắt toàn bộ và phần lớn dạ dày điều trị ung thư dạ dày, phẫu thuật nội soi cắt toàn bộ đại tràng, trực tràng...
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Đối với can thiệp chẩn đoán hình ảnh: Các kỹ thuật nút mạch hóa chất động mạch gan, tán sỏi đường mật cứng trong và ngoài gan bằng laser tạo ra bước đột phá trong điều trị sỏi mật hiện nay ở Việt Nam.
                    </p>

                  </div>
                </ImageLeftContentRight>

                <ContentLeftImageRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Trong lĩnh vực ngoại tiết niệu" />

                    <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
                      <li> Thực hiện thường quy phẫu thuật robot cắt toàn bộ thận, cắt thận bán phần, phẫu thuật cắt toàn bộ tiền liệt tuyến.</li>
                      <li> Điều trị sỏi tiết niệu bằng 2 kỹ thuật: tán sỏi nội soi ống mềm bằng laser không đặt sonde JJ trước mổ và tán sỏi thận qua da qua đường hầm nhỏ dưới hướng dẫn của siêu âm, được coi là đặc sản của HyCare.</li>
                      <li> Nhiều kỹ thuật tiên tiến, ít xâm lấn khác cũng được áp dụng thành công trong phẫu thuật tiết niệu như: phẫu thuật bóc toàn bộ tiền liệt tuyến bằng laser, phẫu thuật cắt toàn bộ bàng quang, tái tạo bàng quang trong điều trị ung thư bàng quang.</li>
                    </ul>
                  </div>
                </ContentLeftImageRight>
                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Lĩnh vực nội soi tiêu hóa gan mật" />
                    <p className="text-gray-700 leading-relaxed">
                      Nội Tiêu hóa - Nội soi can thiệp khám và điều trị hầu hết các bệnh lí nội tiêu hóa - gan mật. Trong đó đơn vị nội soi can thiệp là một thế mạnh, khẳng định đẳng cấp hàng đầu trong nội soi can thiệp, thực hiện nhiều thủ thuật nội soi can thiệp hàng đầu trong nước và quốc tế như: Nội soi cắt ung thư sớm ống tiêu hóa (ESD) (ung thư thực quản, ung thư dạ dày, ung thư đại trực tràng); nội soi cắt u dưới niêm mạc thực quản, u dưới niêm mạc dạ dày; đặt stent thực quản, đại tràng; tán bã thức ăn dạ dày, ruột bằng laser điều trị tắc mật; tán sỏi đường mật ngoài gan bằng nội soi mật tụy ngược dòng bằng laser với máy nội soi spy - glass và nhiều kỹ thuật chuyên sâu khác
                    </p>
                  </div>
                </ImageLeftContentRight>

              </div>
            )}

            {tab === "services" && (
              <div>
                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Ngoại tiêu hóa" />
                    <p className="text-gray-700 leading-relaxed ">
                      Các phẫu thuật điều trị (gồm phẫu thuật Robot, phẫu thuật Nội soi và phẫu thuật hở) cho bệnh lý và chấn thương, tập trung vào các cơ quan/tạng trong ổ bụng.
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
                      <li>
                        Tiêu hóa bao gồm: thực quản, dạ dày, ruột non, đại tràng, hậu môn – trực tràng, và một số bệnh lý của cơ hoành, thành bụng và sàn chậu.
                      </li>
                      <li>
                        Gan mật bao gồm: phẫu thuật điều trị các bệnh lý của gan, đường mật, túi mật, lách, tụy.
                      </li>
                      <li>
                        Phẫu thuật cấp cứu: khoa trực 24/7 đáp ứng với các cấp cứu bệnh lý và chấn thương như thủng ổ loét dạ dày – tá tràng, thủng túi thừa đại tràng, viêm ruột thừa cấp, ...
                      </li>
                      <li>
                        Tiết niệu bao gồm: điều trị sỏi hệ tiết niệu, điều trị u bướu thận – đường niệu, phẫu thuật tạo hình trong niệu khoa, bệnh lý niệu đạo, can thiệp mạch, nam khoa, ghép thận.
                      </li>
                    </ul>
                  </div>
                </ImageLeftContentRight>

                <ContentLeftImageRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Nội tiêu hóa" />

                    <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
                      <li>
                        Khám, tư vấn và điều trị các bệnh Nội tiêu hóa gan mật và tụy (các bệnh lý ống tiêu hóa: thực quản, dạ dày, ruột non, đại tràng, trực tràng – hậu môn; các bệnh lý về gan mật – tụy: viêm gan, xơ gan, sỏi mật, viêm tụy, ung thư tụy…).
                      </li>
                      <li>
                        Khám, tư vấn, sàng lọc các bệnh lý ung thư sớm đường tiêu hóa: ung thư dạ dày, ung thư thực quản, ung thư đại trực tràng; ung thư gan, ung thư tụy…
                      </li>
                      <li>
                        Khám, tư vấn, điều trị các bệnh lý và rối loạn khác của hệ tiêu hóa như rối loạn hấp thu, rối loạn vận động…
                      </li>
                      <li>
                        Nội soi chẩn đoán và sàng lọc các tổn thương ở đường tiêu hóa trên (thực quản, dạ dày, tá tràng) và đường tiêu hóa dưới (ruột non, đại tràng và trực tràng).
                      </li>
                      <li>
                        Nội soi can thiệp điều trị: nội soi mật tụy ngược dòng lấy sỏi đường mật; cắt polyp đại trực tràng; cắt hớt niêm mạc thực quản, dạ dày và đại trực tràng điều trị ung thư sớm; nong thực quản, mở thông dạ dày, tán bã thức ăn bằng laser…
                      </li></ul>
                  </div>
                </ContentLeftImageRight>
              </div>
            )}

            {tab === "technology" && (
              <div>
                <ContentLeftImageRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Thiết bị thế hệ mới" />
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Khu vực khám bệnh</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
                      <li>Hệ thống soi hậu môn trực tràng ống cứng</li>
                      <li>Hệ thống ghi hình hậu môn</li>
                      <li>Các bàn khám chuyên dụng cho hậu môn trực tràng</li>
                      <li>Hệ thống tán sỏi ngoài cơ thể</li>
                      <li>Hệ thống đo niệu dòng đồ</li>
                      <li>Hệ thống soi bàng quang ống mềm</li>
                      <li>Hệ thống phòng nội soi được trang bị giàn máy nội soi hiện đại</li>
                      <li>
                        Hệ thống phòng nội soi can thiệp với đầy đủ các trang thiết bị tốt giúp cho việc thực hiện
                        các thủ thuật nội soi can thiệp điều trị (ESD, ERCP…) có hiệu quả cao
                      </li>
                      <li>
                        Can thiệp chẩn đoán hình ảnh với các máy siêu âm màu đời mới: máy chụp cắt lớp vi tính
                        512 lớp cắt, 640 lớp cắt; máy chụp MRI 3.0 Tesla; các máy chụp mạch số hóa xóa nền;
                        máy Hybrid AngioCT
                      </li>
                    </ul>

                  </div>
                </ContentLeftImageRight>
                <ImageLeftContentRight imageSrc="/emergency/emergency_1.jpg">
                  <div className="space-y-3">
                    <UnderlinedTitle title="Khu phẫu thuật" />
                    <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
                      <li>
                        Hệ thống phòng mổ Hybrid hiện đại, đạt các tiêu chuẩn kiểm soát nhiễm khuẩn và an toàn theo JCI
                        (chứng chỉ quốc tế về chất lượng dịch vụ y tế, an toàn trong bệnh viện)
                      </li>
                      <li>Thực hiện các can thiệp nội soi khó</li>
                      <li>Hệ thống phẫu thuật nội soi, hệ thống phẫu thuật Robot</li>
                      <li>Hệ thống kính vi phẫu</li>
                      <li>
                        Các loại dao mổ năng lượng: dao điện đơn cực, lưỡng cực, siêu âm, Argon, dao hàn mạch, CUSA, LASER
                      </li>
                    </ul>
                  </div>
                </ImageLeftContentRight>
              </div>

            )}

            {tab === "doctors" && (
              <div className='py-10'>
                <UnderlinedTitle title="Đội ngũ bác sĩ Trung tâm Tiêu hóa - Gan mật" />
                <div className='mt-10'>
                  <DoctorList specialtyKey="gastroenterology-hepatology" />
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div >
  )
}

export default GastroenterologyHepatology