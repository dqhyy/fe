import specialties1 from "/specialties/specilities_01.jpg";
import specialties2 from "/specialties/specilities_02.webp";
import specialties3 from "/specialties/specilities_03.png";
import specialties4 from "/specialties/specilities_04.webp";
import specialties5 from "/specialties/specilities_05.jpg";
import specialties6 from "/specialties/specilities_06.jpg";
import specialties7 from "/specialties/specilities_07.jpg";
import specialties9 from "/specialties/specilities_09.jpg";
import specialties10 from "/specialties/specilities_10.jpg";
import specialties11 from "/specialties/specilities_14.png";
import specialties13 from "/specialties/specilities_13.jpg";
import specialties14 from "/specialties/specilities_14.png";


import banner1 from "../imgs/banner_1.jpg";
import banner2 from "../imgs/banner_2.jpg";
import banner3 from "../imgs/banner_3.jpg";
import banner4 from "../imgs/banner_4.jpg";
import banner5 from "../imgs/banner_5.jpg";

import whyus1 from "/whyus_01.svg";
import whyus2 from "/whyus_02.svg";
import whyus3 from "/whyus_03.svg";

import certifi1 from "/certifi_1.png";
import certifi2 from "/certifi_2.png";
import certifi3 from "/certifi_3.jpg";
import certifi4 from "/certifi_4.jpg";
import certifi5 from "/certifi_5.jpg";

import partner1 from "/partner_1.webp";
import partner2 from "/partner_2.webp";
import partner3 from "/partner_3.webp";
import partner4 from "/partner_4.webp";





export const specialties = [
  [
    {
      label: "Cấp cứu",
      link: "/specialties/emergency",
      image: specialties1,
    },
    {
      label: "Trung tâm tim mạch",
      link: "/specialties/cardiology-center",
      image: specialties2,
    },
    {
      label: "Trung tâm ung bướu",
      link: "/specialties/oncology-center",
      image: specialties3,
    },
    {
      label: "Miễn dịch - Dị ứng",
      link: "/specialties/immunology-allergy",
      image: specialties4,
    },
    {
      label: "Tiêu hóa - Gan mật",
      link: "/specialties/gastroenterology-hepatology",
      image: specialties5,
    },
    {
      label: "Trung tâm Nhi",
      link: "/specialties/pediatrics-center",
      image: specialties6,
    },
    {
      label: "Trung tâm sức khỏe phụ nữ",
      link: "/specialties/women-health-center",
      image: specialties7,
    },
  ],
  [
    {
      label: "Trung tâm Vaccine",
      link: "/specialties/vaccination-center",
      image: specialties9,
    },
    {
      label: "Khoa thần kinh",
      link: "/specialties/neurology",
      image: specialties10,
    },
    {
      label: "Chấn thương chỉnh hình",
      link: "/specialties/orthopedics",
      image: specialties11,
    },
    {
      label: "Sức khỏe tổng quát",
      link: "/specialties/general-health",
      image: specialties13,
    },
    {
      label: "Trung tâm mắt",
      link: "/specialties/ophthalmology",
      image: specialties14,
    },
  ],
];


export const banners = [banner1, banner2, banner3, banner4, banner5];

export const whyus = [
  {
    id: 1,
    icon: whyus1,
    title: "Chuyên gia y tế hàng đầu",
    desc: "HyCare quy tụ đội ngũ bác sĩ, chuyên gia và điều dưỡng có trình độ chuyên môn cao, nhiều năm kinh nghiệm làm việc tại các bệnh viện lớn trong và ngoài nước. Chúng tôi luôn không ngừng cập nhật kiến thức, áp dụng các phác đồ điều trị tiên tiến nhằm mang đến hiệu quả điều trị tối ưu và an toàn cho người bệnh."
  },
  {
    id: 2,
    icon: whyus2,
    title: "Trang thiết bị hiện đại",
    desc: "Hệ thống trang thiết bị y tế tại HyCare được đầu tư đồng bộ, hiện đại theo tiêu chuẩn quốc tế. Việc ứng dụng công nghệ tiên tiến trong chẩn đoán và điều trị giúp nâng cao độ chính xác, rút ngắn thời gian thăm khám và hỗ trợ bác sĩ đưa ra phương án điều trị phù hợp nhất cho từng bệnh nhân."
  },
  {
    id: 3,
    icon: whyus3,
    title: "Dịch vụ y tế toàn diện",
    desc: "HyCare cung cấp dịch vụ chăm sóc sức khỏe toàn diện, khép kín từ tư vấn, thăm khám, chẩn đoán đến điều trị và theo dõi sau điều trị. Người bệnh có thể dễ dàng tiếp cận nhiều chuyên khoa trong cùng một hệ thống, tiết kiệm thời gian và đảm bảo sự liên tục trong quá trình chăm sóc sức khỏe."
  },
  {
    id: 4,
    icon: whyus1,
    title: "Chăm sóc tận tâm",
    desc: "Chúng tôi luôn đặt lợi ích và sự hài lòng của người bệnh lên hàng đầu. Mỗi bệnh nhân khi đến với HyCare đều được lắng nghe, tư vấn kỹ lưỡng và chăm sóc tận tình trong suốt quá trình điều trị, mang đến cảm giác an tâm, tin tưởng và thoải mái."
  }
];

export const certifies = [certifi1, certifi2, certifi3, certifi4, certifi5];
export const partners = [partner1, partner2, partner3, partner4];





export const services = [
  {
    code: "PHYSIO_SESS",
    name: "Buổi vật lý trị liệu",
    price: 200000,

    category: "Điều trị",
    specialty: "Phục hồi chức năng",
    status: "ACTIVE",
    requireDoctor: false,
  },

  {
    code: "RADIATION_SESS",
    name: "Buổi xạ trị",
    price: 1500000,

    category: "Điều trị",
    specialty: "Trung tâm ung bướu",
    status: "ACTIVE",
    requireDoctor: true,
  },

  {
    code: "CT_CHEST",
    name: "Chụp CT ngực",
    price: 700000,

    category: "Chẩn đoán",
    specialty: "Chẩn đoán hình ảnh",
    status: "ACTIVE",
    requireDoctor: true,
  },
];

export const mockUsers = [
  {
    id: '8045042',
    name: 'Nguyen Van A',
    email: 'a@gmail.com',
    createdAt: 'Jul 25, 2023 09:33',
    status: 'Active',
  },
  {
    id: '8023157',
    name: 'Tran Thi B',
    email: 'b@yahoo.com',
    createdAt: 'Jul 19, 2023 09:24',
    status: 'Active',
  },
  {
    id: '7439147',
    name: 'Le Van C',
    email: 'c@gmail.ru',
    createdAt: 'Apr 20, 2023 13:40',
    status: 'Deactivated',
  },
  {
    id: '7344752',
    name: 'Pham Van D',
    email: 'd@company.com-DELETED',
    createdAt: 'Mar 29, 2023 05:06',
    status: 'Deleted',
  },
]

export const bookingHistory = [
  {
    id: "BK001",
    date: "20/01/2025",
    time: "09:30",
    doctor: "BS. Nguyễn Văn An",
    specialty: "Tim mạch",
    clinic: "Phòng khám HyCare",
    status: "CONFIRMED",
    price: 300000,
  },
  {
    id: "BK002",
    date: "10/12/2024",
    time: "14:00",
    doctor: "BS. Trần Thị Hoa",
    specialty: "Da liễu",
    clinic: "Phòng khám HyCare",
    status: "COMPLETED",
    price: 250000,
  },
  {
    id: "BK003",
    date: "05/12/2024",
    time: "08:00",
    doctor: "BS. Lê Văn Minh",
    specialty: "Nội tổng quát",
    clinic: "Phòng khám HyCare",
    status: "CANCELLED",
    price: 200000,
  },
];

export const medicalResults = [
  {
    id: "MR001",
    bookingId: "BK001",
    year: 2025,
    bookingInfo: {
      date: "20/01/2025",
      time: "09:30",
      doctor: "BS. Nguyễn Văn An",
      specialty: "Tim mạch",
      clinic: "Phòng khám HyCare"
    },
    diagnosis: {
      main: "Tăng huyết áp",
      conclusion: "Theo dõi huyết áp, tái khám sau 1 tháng"
    },
    prescriptions: [
      {
        name: "Amlodipine",
        dosage: "5mg",
        usage: "1 viên/ngày",
        duration: "30 ngày"
      }
    ]
  },
  {
    id: "MR002",
    bookingId: "BK002",
    year: 2024,
    bookingInfo: {
      date: "12/12/2024",
      time: "14:00",
      doctor: "BS. Trần Thị Hoa",
      specialty: "Da liễu",
      clinic: "Phòng khám HyCare"
    },
    diagnosis: {
      main: "Viêm da tiếp xúc",
      conclusion: "Tránh dị ứng, dùng thuốc theo đơn"
    },
    prescriptions: []
  }
];




export const doctors = [
  // Cấp cứu
  {
    id: 1,
    doctorCode: "BS0001",
    name: "BS. Nguyễn Văn An",
    gender: "male",
    specialty: {
      name: "Hồi sức - Cấp cứu",
      key: "emergency"
    },
    degree: "BSCKII",
    experienceYears: 12,
    description: "Bác sĩ chuyên hồi sức cấp cứu với hơn 12 năm kinh nghiệm.",
    schedule: {
      workingDays: ["Mon", "Tue", "Wed", "Fri"],
      timeSlots: ["08:00-09:00", "09:00-10:00"]
    },
    consultationFee: 500000,
    room: "Phòng 203",
    contact: {
      phone: "0909123456",
      email: "an.nguyen@hycare.vn"
    },
    image: "/doctors/doctor1.jpg",
    isActive: true
  },
  {
    id: 2,
    doctorCode: "BS0002",
    name: "BS. Trần Thị Mai",
    gender: "female",
    specialty: {
      name: "Hồi sức - Cấp cứu",
      key: "emergency"
    },
    degree: "ThS. Bác sĩ",
    experienceYears: 8,
    description: "Bác sĩ chuyên khoa cấp cứu với kinh nghiệm điều trị đa chấn thương.",
    schedule: {
      workingDays: ["Mon", "Wed", "Thu", "Fri"],
      timeSlots: ["08:00-09:00", "09:00-10:00", "10:00-11:00"]
    },
    consultationFee: 450000,
    room: "Phòng 204",
    contact: {
      phone: "0909123457",
      email: "mai.tran@hycare.vn"
    },
    image: "/doctors/doctor1.jpg",
    isActive: true
  },

  // Tim mạch
  {
    id: 3,
    doctorCode: "BS0003",
    name: "BS. Lê Hoàng Minh",
    gender: "male",
    specialty: {
      name: "Tim mạch",
      key: "cardiology-center"
    },
    degree: "PGS.TS",
    experienceYears: 18,
    description: "Phó giáo sư chuyên về tim mạch can thiệp và siêu âm tim.",
    schedule: {
      workingDays: ["Mon", "Tue", "Thu", "Fri"],
      timeSlots: ["08:00-09:00", "09:00-10:00", "10:00-11:00"]
    },
    consultationFee: 700000,
    room: "Phòng 301",
    contact: {
      phone: "0909123458",
      email: "minh.le@hycare.vn"
    },
    image: "/doctors/doctor1.jpg",
    isActive: true
  },
  {
    id: 4,
    doctorCode: "BS0004",
    name: "BS. Phạm Quốc Huy",
    gender: "male",
    specialty: {
      name: "Ngoại Tim mạch",
      key: "cardiology-center"
    },
    degree: "TS. Bác sĩ",
    experienceYears: 15,
    description: "Tiến sĩ chuyên phẫu thuật tim mạch và bệnh lý van tim.",
    schedule: {
      workingDays: ["Tue", "Wed", "Thu", "Fri"],
      timeSlots: ["08:00-09:00", "09:00-10:00"]
    },
    consultationFee: 650000,
    room: "Phòng 302",
    contact: {
      phone: "0909123459",
      email: "huy.pham@hycare.vn"
    },
    image: "/doctors/doctor1.jpg",
    isActive: true
  },

  // Ung bướu
  {
    id: 5,
    doctorCode: "BS0005",
    name: "BS. Nguyễn Thị Lan",
    gender: "female",
    specialty: {
      name: "Ung bướu",
      key: "oncology-center"
    },
    degree: "PGS.TS",
    experienceYears: 20,
    description: "Phó giáo sư chuyên điều trị ung thư và hóa trị liệu.",
    schedule: {
      workingDays: ["Mon", "Tue", "Wed", "Thu"],
      timeSlots: ["08:00-09:00", "09:00-10:00", "10:00-11:00"]
    },
    consultationFee: 750000,
    room: "Phòng 401",
    contact: {
      phone: "0909123460",
      email: "lan.nguyen@hycare.vn"
    },
    image: "/doctors/doctor1.jpg",
    isActive: true
  },
  {
    id: 6,
    doctorCode: "BS0006",
    name: "BS. Đặng Văn Long",
    gender: "male",
    specialty: {
      name: "Ung bướu",
      key: "oncology-center"
    },
    degree: "BSCKII",
    experienceYears: 10,
    description: "Bác sĩ chuyên khoa ung bướu và xạ trị.",
    schedule: {
      workingDays: ["Mon", "Wed", "Thu", "Fri"],
      timeSlots: ["08:00-09:00", "09:00-10:00"]
    },
    consultationFee: 550000,
    room: "Phòng 402",
    contact: {
      phone: "0909123461",
      email: "long.dang@hycare.vn"
    },
    image: "/doctors/doctor1.jpg",
    isActive: true
  },

  // Miễn dịch - Dị ứng
  {
    id: 7,
    doctorCode: "BS0007",
    name: "BS. Trần Quốc Tuấn",
    gender: "male",
    specialty: {
      name: "Miễn dịch - Dị ứng",
      key: "immunology-allergy"
    },
    degree: "ThS. Bác sĩ",
    experienceYears: 9,
    description: "Thạc sĩ chuyên về bệnh lý miễn dịch và dị ứng.",
    schedule: {
      workingDays: ["Mon", "Tue", "Thu", "Fri"],
      timeSlots: ["08:00-09:00", "09:00-10:00", "10:00-11:00"]
    },
    consultationFee: 480000,
    room: "Phòng 501",
    contact: {
      phone: "0909123462",
      email: "tuan.tran@hycare.vn"
    },
    image: "/doctors/doctor1.jpg",
    isActive: true
  },
  {
    id: 8,
    doctorCode: "BS0008",
    name: "BS. Võ Thị Hạnh",
    gender: "female",
    specialty: {
      name: "Miễn dịch - Dị ứng",
      key: "immunology-allergy"
    },
    degree: "TS. Bác sĩ",
    experienceYears: 13,
    description: "Tiến sĩ chuyên điều trị các bệnh tự miễn và dị ứng thực phẩm.",
    schedule: {
      workingDays: ["Tue", "Wed", "Thu", "Fri"],
      timeSlots: ["08:00-09:00", "09:00-10:00"]
    },
    consultationFee: 580000,
    room: "Phòng 502",
    contact: {
      phone: "0909123463",
      email: "hanh.vo@hycare.vn"
    },
    image: "/doctors/doctor1.jpg",
    isActive: true
  },

  // Tiêu hóa - Gan mật
  {
    id: 9,
    doctorCode: "BS0009",
    name: "BS. Phan Minh Đức",
    gender: "male",
    specialty: {
      name: "Tiêu hóa - Gan mật",
      key: "gastroenterology-hepatology"
    },
    degree: "PGS.TS",
    experienceYears: 22,
    description: "Phó giáo sư chuyên về gan mật và nội soi tiêu hóa.",
    schedule: {
      workingDays: ["Mon", "Tue", "Wed", "Fri"],
      timeSlots: ["08:00-09:00", "09:00-10:00", "10:00-11:00"]
    },
    consultationFee: 720000,
    room: "Phòng 601",
    contact: {
      phone: "0909123464",
      email: "duc.phan@hycare.vn"
    },
    image: "/doctors/doctor1.jpg",
    isActive: true
  },
  {
    id: 10,
    doctorCode: "BS0010",
    name: "BS. Nguyễn Thị Ngọc",
    gender: "female",
    specialty: {
      name: "Tiêu hóa - Gan mật",
      key: "gastroenterology-hepatology"
    },
    degree: "BSCKII",
    experienceYears: 11,
    description: "Bác sĩ chuyên khoa tiêu hóa và bệnh lý gan.",
    schedule: {
      workingDays: ["Mon", "Wed", "Thu", "Fri"],
      timeSlots: ["08:00-09:00", "09:00-10:00"]
    },
    consultationFee: 520000,
    room: "Phòng 602",
    contact: {
      phone: "0909123465",
      email: "ngoc.nguyen@hycare.vn"
    },
    image: "/doctors/doctor1.jpg",
    isActive: true
  },

  // Nhi
  {
    id: 11,
    doctorCode: "BS0011",
    name: "BS. Trần Thanh Bình",
    gender: "male",
    specialty: {
      name: "Nhi",
      key: "pediatrics-center"
    },
    degree: "PGS.TS",
    experienceYears: 19,
    description: "Phó giáo sư chuyên về nhi khoa và bệnh lý trẻ em.",
    schedule: {
      workingDays: ["Mon", "Tue", "Thu", "Fri"],
      timeSlots: ["08:00-09:00", "09:00-10:00", "10:00-11:00"]
    },
    consultationFee: 680000,
    room: "Phòng 701",
    contact: {
      phone: "0909123466",
      email: "binh.tran@hycare.vn"
    },
    image: "/doctors/doctor1.jpg",
    isActive: true
  },
  {
    id: 12,
    doctorCode: "BS0012",
    name: "BS. Lê Thị Thu",
    gender: "female",
    specialty: {
      name: "Nhi",
      key: "pediatrics-center"
    },
    degree: "ThS. Bác sĩ",
    experienceYears: 7,
    description: "Thạc sĩ chuyên khám và điều trị bệnh lý nhi khoa.",
    schedule: {
      workingDays: ["Tue", "Wed", "Thu", "Fri"],
      timeSlots: ["08:00-09:00", "09:00-10:00"]
    },
    consultationFee: 460000,
    room: "Phòng 702",
    contact: {
      phone: "0909123467",
      email: "thu.le@hycare.vn"
    },
    image: "/doctors/doctor1.jpg",
    isActive: true
  },

  // Sức khỏe phụ nữ
  {
    id: 13,
    doctorCode: "BS0013",
    name: "BS. Nguyễn Thị Hồng",
    gender: "female",
    specialty: {
      name: "Sức khỏe phụ nữ",
      key: "women-health-center"
    },
    degree: "PGS.TS",
    experienceYears: 21,
    description: "Phó giáo sư chuyên sản phụ khoa và sức khỏe sinh sản.",
    schedule: {
      workingDays: ["Mon", "Tue", "Wed", "Thu"],
      timeSlots: ["08:00-09:00", "09:00-10:00", "10:00-11:00"]
    },
    consultationFee: 700000,
    room: "Phòng 801",
    contact: {
      phone: "0909123468",
      email: "hong.nguyen@hycare.vn"
    },
    image: "/doctors/doctor1.jpg",
    isActive: true
  },
  {
    id: 14,
    doctorCode: "BS0014",
    name: "BS. Đỗ Minh Trang",
    gender: "female",
    specialty: {
      name: "Sức khỏe phụ nữ",
      key: "women-health-center"
    },
    degree: "BSCKII",
    experienceYears: 10,
    description: "Bác sĩ chuyên khoa sản phụ khoa và chăm sóc thai sản.",
    schedule: {
      workingDays: ["Mon", "Wed", "Thu", "Fri"],
      timeSlots: ["08:00-09:00", "09:00-10:00"]
    },
    consultationFee: 530000,
    room: "Phòng 802",
    contact: {
      phone: "0909123469",
      email: "trang.do@hycare.vn"
    },
    image: "/doctors/doctor1.jpg",
    isActive: true
  },

  // Vaccine
  {
    id: 15,
    doctorCode: "BS0015",
    name: "BS. Trần Quốc Khánh",
    gender: "male",
    specialty: {
      name: "Vaccine",
      key: "vaccination-center"
    },
    degree: "ThS. Bác sĩ",
    experienceYears: 8,
    description: "Thạc sĩ chuyên về tiêm chủng và phòng ngừa dịch bệnh.",
    schedule: {
      workingDays: ["Mon", "Tue", "Thu", "Fri"],
      timeSlots: ["08:00-09:00", "09:00-10:00", "10:00-11:00"]
    },
    consultationFee: 400000,
    room: "Phòng 901",
    contact: {
      phone: "0909123470",
      email: "khanh.tran@hycare.vn"
    },
    image: "/doctors/doctor1.jpg",
    isActive: true
  },
  {
    id: 16,
    doctorCode: "BS0016",
    name: "BS. Nguyễn Thị Kim",
    gender: "female",
    specialty: {
      name: "Vaccine",
      key: "vaccination-center"
    },
    degree: "BSCKI",
    experienceYears: 6,
    description: "Bác sĩ chuyên khoa tiêm chủng và tư vấn vaccine.",
    schedule: {
      workingDays: ["Tue", "Wed", "Thu", "Fri"],
      timeSlots: ["08:00-09:00", "09:00-10:00"]
    },
    consultationFee: 380000,
    room: "Phòng 902",
    contact: {
      phone: "0909123471",
      email: "kim.nguyen@hycare.vn"
    },
    image: "/doctors/doctor1.jpg",
    isActive: true
  },

  // Thần kinh
  {
    id: 17,
    doctorCode: "BS0017",
    name: "BS. Lê Văn Phúc",
    gender: "male",
    specialty: {
      name: "Thần kinh",
      key: "neurology"
    },
    degree: "PGS.TS",
    experienceYears: 17,
    description: "Phó giáo sư chuyên về thần kinh và bệnh lý não.",
    schedule: {
      workingDays: ["Mon", "Tue", "Wed", "Fri"],
      timeSlots: ["08:00-09:00", "09:00-10:00", "10:00-11:00"]
    },
    consultationFee: 690000,
    room: "Phòng 1001",
    contact: {
      phone: "0909123472",
      email: "phuc.le@hycare.vn"
    },
    image: "/doctors/doctor1.jpg",
    isActive: true
  },
  {
    id: 18,
    doctorCode: "BS0018",
    name: "BS. Phạm Thị Oanh",
    gender: "female",
    specialty: {
      name: "Thần kinh",
      key: "neurology"
    },
    degree: "TS. Bác sĩ",
    experienceYears: 14,
    description: "Tiến sĩ chuyên điều trị bệnh lý thần kinh và đột quỵ.",
    schedule: {
      workingDays: ["Mon", "Wed", "Thu", "Fri"],
      timeSlots: ["08:00-09:00", "09:00-10:00"]
    },
    consultationFee: 600000,
    room: "Phòng 1002",
    contact: {
      phone: "0909123473",
      email: "oanh.pham@hycare.vn"
    },
    image: "/doctors/doctor1.jpg",
    isActive: true
  },

  // Chấn thương chỉnh hình
  {
    id: 19,
    doctorCode: "BS0019",
    name: "BS. Nguyễn Hoàng Nam",
    gender: "male",
    specialty: {
      name: "Chấn thương chỉnh hình",
      key: "orthopedics"
    },
    degree: "BSCKII",
    experienceYears: 12,
    description: "Bác sĩ chuyên khoa chấn thương chỉnh hình và phẫu thuật xương khớp.",
    schedule: {
      workingDays: ["Mon", "Tue", "Thu", "Fri"],
      timeSlots: ["08:00-09:00", "09:00-10:00", "10:00-11:00"]
    },
    consultationFee: 540000,
    room: "Phòng 1101",
    contact: {
      phone: "0909123474",
      email: "nam.nguyen@hycare.vn"
    },
    image: "/doctors/doctor1.jpg",
    isActive: true
  },
  {
    id: 20,
    doctorCode: "BS0020",
    name: "BS. Trịnh Quốc Dũng",
    gender: "male",
    specialty: {
      name: "Chấn thương chỉnh hình",
      key: "orthopedics"
    },
    degree: "PGS.TS",
    experienceYears: 20,
    description: "Phó giáo sư chuyên về phẫu thuật chỉnh hình và thay khớp.",
    schedule: {
      workingDays: ["Tue", "Wed", "Thu", "Fri"],
      timeSlots: ["08:00-09:00", "09:00-10:00"]
    },
    consultationFee: 730000,
    room: "Phòng 1102",
    contact: {
      phone: "0909123475",
      email: "dung.trinh@hycare.vn"
    },
    image: "/doctors/doctor1.jpg",
    isActive: true
  },

  // Sức khỏe tổng quát
  {
    id: 21,
    doctorCode: "BS0021",
    name: "BS. Lê Minh Tâm",
    gender: "male",
    specialty: {
      name: "Sức khỏe tổng quát",
      key: "general-health"
    },
    degree: "ThS. Bác sĩ",
    experienceYears: 9,
    description: "Thạc sĩ chuyên khám sức khỏe tổng quát và y học gia đình.",
    schedule: {
      workingDays: ["Mon", "Tue", "Wed", "Thu", "Fri"],
      timeSlots: ["08:00-09:00", "09:00-10:00", "10:00-11:00"]
    },
    consultationFee: 420000,
    room: "Phòng 1201",
    contact: {
      phone: "0909123476",
      email: "tam.le@hycare.vn"
    },
    image: "/doctors/doctor1.jpg",
    isActive: true
  },
  {
    id: 22,
    doctorCode: "BS0022",
    name: "BS. Nguyễn Thị Thảo",
    gender: "female",
    specialty: {
      name: "Sức khỏe tổng quát",
      key: "general-health"
    },
    degree: "BSCKI",
    experienceYears: 5,
    description: "Bác sĩ chuyên khoa nội tổng quát và tư vấn sức khỏe.",
    schedule: {
      workingDays: ["Mon", "Tue", "Wed", "Thu", "Fri"],
      timeSlots: ["08:00-09:00", "09:00-10:00"]
    },
    consultationFee: 350000,
    room: "Phòng 1202",
    contact: {
      phone: "0909123477",
      email: "thao.nguyen@hycare.vn"
    },
    image: "/doctors/doctor1.jpg",
    isActive: true
  },

  // Mắt
  {
    id: 23,
    doctorCode: "BS0023",
    name: "BS. Phạm Đức Thành",
    gender: "male",
    specialty: {
      name: "Trung tâm Mắt",
      key: "ophthalmology"
    },
    degree: "PGS.TS",
    experienceYears: 18,
    description: "Phó giáo sư chuyên về phẫu thuật mắt và bệnh lý võng mạc.",
    schedule: {
      workingDays: ["Mon", "Tue", "Wed", "Thu"],
      timeSlots: ["08:00-09:00", "09:00-10:00", "10:00-11:00"]
    },
    consultationFee: 710000,
    room: "Phòng 1301",
    contact: {
      phone: "0909123478",
      email: "thanh.pham@hycare.vn"
    },
    image: "/doctors/doctor1.jpg",
    isActive: true
  },
  {
    id: 24,
    doctorCode: "BS0024",
    name: "BS. Võ Thị Ánh",
    gender: "female",
    specialty: {
      name: "Trung tâm Mắt",
      key: "ophthalmology"
    },
    degree: "BSCKII",
    experienceYears: 11,
    description: "Bác sĩ chuyên khoa mắt và điều trị các bệnh lý thị giác.",
    schedule: {
      workingDays: ["Mon", "Wed", "Thu", "Fri"],
      timeSlots: ["08:00-09:00", "09:00-10:00"]
    },
    consultationFee: 550000,
    room: "Phòng 1302",
    contact: {
      phone: "0909123479",
      email: "anh.vo@hycare.vn"
    },
    image: "/doctors/doctor1.jpg",
    isActive: true
  },
  {
    id: 25,
    doctorCode: "BS0025",
    name: "BS. Lê Thị Hương",
    gender: "female",
    specialty: {
      name: "Trung tâm Mắt",
      key: "ophthalmology"
    },
    degree: "BSCKII",
    experienceYears: 10,
    description: "Bác sĩ chuyên khoa mắt và phẫu thuật khúc xạ.",
    schedule: {
      workingDays: ["Tue", "Wed", "Thu", "Fri"],
      timeSlots: ["08:00-09:00", "09:00-10:00"]
    },
    consultationFee: 540000,
    room: "Phòng 1303",
    contact: {
      phone: "0909123480",
      email: "huong.le@hycare.vn"
    },
    image: "/doctors/doctor1.jpg",
    isActive: true
  }
];


export const chatList = [
  {
    id: 1,
    name: "Nguyễn Hoàng Long",
    role: "Bệnh nhân",
    lastMessage: "Bác sĩ cho em hỏi kết quả khám?",
    messages: [
      { from: "patient", text: "Chào bác sĩ ạ" },
      { from: "doctor", text: "Chào bạn, tôi có thể giúp gì?" },
      { from: "patient", text: "Bác sĩ cho em hỏi kết quả khám?" },
    ],
  },
  {
    id: 2,
    name: "Trần Thị Mai",
    role: "Bệnh nhân",
    lastMessage: "Em cảm ơn bác sĩ nhiều",
    messages: [
      { from: "patient", text: "Em đã uống thuốc theo toa" },
      { from: "doctor", text: "Tốt lắm, theo dõi thêm nhé" },
      { from: "patient", text: "Em cảm ơn bác sĩ nhiều" },
    ],
  },
  {
    id: 3,
    name: "Trần Thị Mai",
    role: "Bệnh nhân",
    lastMessage: "Em cảm ơn bác sĩ nhiều",
    messages: [
      { from: "patient", text: "Em đã uống thuốc theo toa" },
      { from: "doctor", text: "Tốt lắm, theo dõi thêm nhé" },
      { from: "patient", text: "Em cảm ơn bác sĩ nhiều" },
    ],
  },{
    id: 4,
    name: "Trần Thị Mai",
    role: "Bệnh nhân",
    lastMessage: "Em cảm ơn bác sĩ nhiều",
    messages: [
      { from: "patient", text: "Em đã uống thuốc theo toa" },
      { from: "doctor", text: "Tốt lắm, theo dõi thêm nhé" },
      { from: "patient", text: "Em cảm ơn bác sĩ nhiều" },
    ],
  },{
    id: 5,
    name: "Trần Thị Mai",
    role: "Bệnh nhân",
    lastMessage: "Em cảm ơn bác sĩ nhiều",
    messages: [
      { from: "patient", text: "Em đã uống thuốc theo toa" },
      { from: "doctor", text: "Tốt lắm, theo dõi thêm nhé" },
      { from: "patient", text: "Em cảm ơn bác sĩ nhiều" },
    ],
  },{
    id: 6,
    name: "Trần Thị Mai",
    role: "Bệnh nhân",
    lastMessage: "Em cảm ơn bác sĩ nhiều",
    messages: [
      { from: "patient", text: "Em đã uống thuốc theo toa" },
      { from: "doctor", text: "Tốt lắm, theo dõi thêm nhé" },
      { from: "patient", text: "Em cảm ơn bác sĩ nhiều" },
    ],
  },{
    id: 7,
    name: "Trần Thị Mai",
    role: "Bệnh nhân",
    lastMessage: "Em cảm ơn bác sĩ nhiều",
    messages: [
      { from: "patient", text: "Em đã uống thuốc theo toa" },
      { from: "doctor", text: "Tốt lắm, theo dõi thêm nhé" },
      { from: "patient", text: "Em cảm ơn bác sĩ nhiều" },
    ],
  },{
    id: 8,
    name: "Trần Thị Mai",
    role: "Bệnh nhân",
    lastMessage: "Em cảm ơn bác sĩ nhiều",
    messages: [
      { from: "patient", text: "Em đã uống thuốc theo toa" },
      { from: "doctor", text: "Tốt lắm, theo dõi thêm nhé" },
      { from: "patient", text: "Em cảm ơn bác sĩ nhiều" },
    ],
  },{
    id: 9,
    name: "Trần Thị Mai",
    role: "Bệnh nhân",
    lastMessage: "Em cảm ơn bác sĩ nhiều",
    messages: [
      { from: "patient", text: "Em đã uống thuốc theo toa" },
      { from: "doctor", text: "Tốt lắm, theo dõi thêm nhé" },
      { from: "patient", text: "Em cảm ơn bác sĩ nhiều" },
    ],
  },{
    id: 10,
    name: "Trần Thị Mai",
    role: "Bệnh nhân",
    lastMessage: "Em cảm ơn bác sĩ nhiều",
    messages: [
      { from: "patient", text: "Em đã uống thuốc theo toa" },
      { from: "doctor", text: "Tốt lắm, theo dõi thêm nhé" },
      { from: "patient", text: "Em cảm ơn bác sĩ nhiều" },
    ],
  },{
    id: 11,
    name: "Trần Thị Mai",
    role: "Bệnh nhân",
    lastMessage: "Em cảm ơn bác sĩ nhiều",
    messages: [
      { from: "patient", text: "Em đã uống thuốc theo toa" },
      { from: "doctor", text: "Tốt lắm, theo dõi thêm nhé" },
      { from: "patient", text: "Em cảm ơn bác sĩ nhiều" },
    ],
  },{
    id: 12,
    name: "Trần Thị Mai",
    role: "Bệnh nhân",
    lastMessage: "Em cảm ơn bác sĩ nhiều",
    messages: [
      { from: "patient", text: "Em đã uống thuốc theo toa" },
      { from: "doctor", text: "Tốt lắm, theo dõi thêm nhé" },
      { from: "patient", text: "Em cảm ơn bác sĩ nhiều" },
    ],
  },{
    id: 13,
    name: "Trần Thị Mai",
    role: "Bệnh nhân",
    lastMessage: "Em cảm ơn bác sĩ nhiều",
    messages: [
      { from: "patient", text: "Em đã uống thuốc theo toa" },
      { from: "doctor", text: "Tốt lắm, theo dõi thêm nhé" },
      { from: "patient", text: "Em cảm ơn bác sĩ nhiều" },
    ],
  },{
    id: 14,
    name: "Trần Thị Mai",
    role: "Bệnh nhân",
    lastMessage: "Em cảm ơn bác sĩ nhiều",
    messages: [
      { from: "patient", text: "Em đã uống thuốc theo toa" },
      { from: "doctor", text: "Tốt lắm, theo dõi thêm nhé" },
      { from: "patient", text: "Em cảm ơn bác sĩ nhiều" },
    ],
  },{
    id: 15,
    name: "Trần Thị Mai",
    role: "Bệnh nhân",
    lastMessage: "Em cảm ơn bác sĩ nhiều",
    messages: [
      { from: "patient", text: "Em đã uống thuốc theo toa" },
      { from: "doctor", text: "Tốt lắm, theo dõi thêm nhé" },
      { from: "patient", text: "Em cảm ơn bác sĩ nhiều" },
    ],
  },
];