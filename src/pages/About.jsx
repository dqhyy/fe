import React from 'react';
import CoverSection from '../components/CoverSection';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="bg-bgcolor pb-20">
            <CoverSection title="GIỚI THIỆU" />

            <div className="container mx-auto mt-10 px-4">
                <div className="flex items-center mb-8 text-sm">
                    <Link to="/" className="text-maincolor font-semibold">
                        Trang chủ
                    </Link>
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-gray-600">Giới thiệu</span>
                </div>

                <section className="grid md:grid-cols-2 gap-8 items-center mt-8 mb-16">
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <img
                            src="/specialties/specilities_01.jpg"
                            alt="Vision Mission"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Giới thiệu chung</h2>
                            <p className="text-gray-700 leading-relaxed">
                                HyCare là hệ thống y tế không vì lợi nhuận do Tập đoàn HuyDo đầu tư phát triển,
                                với tầm nhìn trở thành một hệ thống y tế hàn lâm vươn tầm quốc tế thông qua những
                                nghiên cứu đột phá, nhằm mang lại chất lượng điều trị xuất sắc và dịch vụ chăm sóc hoàn hảo.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-2">Tầm nhìn</h2>
                            <p className="text-gray-700 leading-relaxed">
                                HyCare hướng đến mô hình y học hàn lâm, phục vụ con người ở cả Việt Nam và toàn cầu,
                                thông qua nghiên cứu đổi mới sáng tạo và những đột phá y học, nhằm mang lại chất lượng
                                lâm sàng xuất sắc và giải pháp chăm sóc sức khỏe dựa trên giá trị.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-2">Sứ mệnh</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Chăm sóc bằng Tài năng, Y đức và Sự thấu cảm.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Giá trị cốt lõi – <span className="text-maincolor">C.A.R.E</span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: "/about/ides.svg",
                                title: "Creativity – Sáng tạo",
                                description: "Không ngừng đổi mới để mang đến cho người bệnh những giải pháp tốt nhất."
                            },
                            {
                                icon: "/about/trust.svg",
                                title: "Accountability – Trách nhiệm",
                                description: "Đặt trách nhiệm cao nhất đối với người bệnh và gia đình họ."
                            },
                            {
                                icon: "/about/partner.svg",
                                title: "Reliability – Tin cậy",
                                description: "Cam kết mang lại điều tốt nhất cho người bệnh."
                            },
                            {
                                icon: "/about/best.svg",
                                title: "Excellence – Hoàn hảo",
                                description: "Không ngừng hướng tới chất lượng dịch vụ cao nhất."
                            }
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col items-center text-center p-4 border rounded-lg hover:shadow-lg transition-all duration-300">
                                <img src={item.icon} alt={item.title} className="w-16 h-16 mb-4" />
                                <h3 className="text-xl font-semibold text-maincolor mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
