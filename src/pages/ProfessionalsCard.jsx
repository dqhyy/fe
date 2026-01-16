import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { doctors } from '../assets/data/data';

const ProfessionalsCard = () => {
  const { id } = useParams();
  const doctor = doctors.find(d => d.id.toString() === id);

  if (!doctor) {
    return (
      <div className="bg-bgcolor pb-20">
        <div className="container mx-auto mt-10 px-4 text-center">
          <p className="text-gray-500 text-lg">Không tìm thấy bác sĩ</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-bgcolor pb-20">
      <div className="container mx-auto px-4">

        {/* Breadcrumb */}
        <div className="flex items-center pt-5 mb-8 text-sm">
          <Link to="/" className="text-maincolor font-semibold">
            Trang chủ
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link to="/professionals" className="text-maincolor font-semibold">
            Chuyên gia y tế
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">{doctor.name}</span>
        </div>

        {/* Doctor Card */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <div className="flex flex-col md:flex-row gap-8">

            {/* Avatar */}
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-48 h-56 object-cover rounded-xl shadow"
            />

            {/* Info */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <h2 className="text-3xl font-bold">{doctor.name}</h2>

                <Link
                  to={`/booking?doctorId=${doctor.id}`}
                  className="px-5 py-2 rounded-md bg-red-700 text-white text-sm font-semibold hover:bg-red-800 transition"
                >
                  Đăng ký khám
                </Link>
              </div>

              <span className="inline-block mt-3 mb-4 py-1 text-sx">
                 {doctor.specialty.name}
              </span>

              <p className="text-gray-600 mb-2">{doctor.degree}</p>

              <p className="text-gray-700 leading-relaxed mb-6">
                {doctor.description}
              </p>

              {/* Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">

                <div>
                  <p className="font-semibold text-gray-800 mb-1">Kinh nghiệm</p>
                  <p className="text-gray-600">
                    {doctor.experienceYears} năm
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-800 mb-1">Phòng khám</p>
                  <p className="text-gray-600">{doctor.room}</p>
                </div>

                <div>
                  <p className="font-semibold text-gray-800 mb-1">Lịch làm việc</p>
                  <p className="text-gray-600">
                    {doctor.schedule.workingDays.join(', ')}
                  </p>
                  <p className="text-gray-600">
                    {doctor.schedule.timeSlots.join(' | ')}
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-800 mb-1">Số điện thoại</p>
                  <p className="text-gray-600">{doctor.contact.phone}</p>
                </div>

                <div>
                  <p className="font-semibold text-gray-800 mb-1">Email</p>
                  <p className="text-gray-600">{doctor.contact.email}</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalsCard;
