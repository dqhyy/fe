import { useState } from "react";

const PatientProfile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    fullName: "Nguyễn Văn A",
    gender: "Nam",
    email: "patient@gmail.com",
    dob: "1998-06-20",
    phone: "0123456789",
    job: "Nhân viên văn phòng",
    address: "Hà Nội",
    avatar: "https://i.pravatar.cc/150"
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = () => {
    setIsEditing(false);
    console.log("Updated profile:", profile);
    // TODO: call API PUT /patients/profile
  };

  return (
    <div className="mx-10">
      {/* Avatar */}
      <div className="flex flex-col items-start mb-6">
        <img
          src={profile.avatar}
          alt="avatar"
          className="w-36 h-36 rounded-full object-cover border"
        />

        {isEditing && (
          <>
            <input
              type="file"
              accept="image/*"
              id="avatarInput"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files[0];
                if (!file) return;

                const previewUrl = URL.createObjectURL(file);

                setProfile((prev) => ({
                  ...prev,
                  avatar: previewUrl,
                  avatarFile: file // dùng khi upload
                }));
              }}
            />

            <button
              type="button"
              onClick={() => document.getElementById("avatarInput").click()}
              className="mt-3 text-blue-600 text-sm hover:underline"
            >
              Thay đổi ảnh
            </button>
          </>
        )}
      </div>


      {/* Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-x-20">
        <Input
          label="Họ và tên"
          name="fullName"
          value={profile.fullName}
          disabled={!isEditing}
          onChange={handleChange}
        />

        {/* Gender SELECT */}
        <div>
          <label className="block text-sm font-medium mb-1">Giới tính</label>

          <div className="relative">
            <select
              name="gender"
              value={profile.gender}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full border rounded px-3 py-2 text-sm
        ${!isEditing
                  ? "bg-gray-100 appearance-none pointer-events-none"
                  : "bg-white appearance-auto pr-8"
                }`}
            >
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
              <option value="Khác">Khác</option>
            </select>

            {/* Mũi tên chỉ hiện khi chỉnh sửa */}
            {isEditing && (
              <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-500">
                ▼
              </span>
            )}
          </div>
        </div>


        <Input
          label="Ngày sinh"
          type="date"
          name="dob"
          value={profile.dob}
          disabled={!isEditing}
          onChange={handleChange}
        />

        <Input
          label="Số điện thoại"
          name="phone"
          value={profile.phone}
          disabled={!isEditing}
          onChange={handleChange}
        />

        <Input
          label="Email"
          name="email"
          value={profile.email}
          disabled={!isEditing}
          onChange={handleChange}
        />

        <Input
          label="Nghề nghiệp"
          name="job"
          value={profile.job}
          disabled={!isEditing}
          onChange={handleChange}
        />

        <div className="md:col-span-2">
          <Input
            label="Địa chỉ"
            name="address"
            value={profile.address}
            disabled={!isEditing}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end mt-6 gap-3">
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Chỉnh sửa
          </button>
        ) : (
          <button
            onClick={handleUpdate}
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            Cập nhật
          </button>
        )}
      </div>
    </div>
  );
};

const Input = ({ label, disabled, ...props }) => (
  <div>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <input
      {...props}
      disabled={disabled}
      className={`w-full border rounded px-3 py-2 text-sm
        ${disabled ? "bg-gray-100" : "bg-white"}`}
    />
  </div>
);

export default PatientProfile;
