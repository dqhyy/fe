import React, { useState, useEffect } from 'react';
import { getMyInfo, uploadAvatar, updateMyInfo } from '../../services/authService';
import { User, Phone, Mail, MapPin, Calendar, CreditCard, Briefcase, Building2, Camera, Save, X } from 'lucide-react';

const StaffProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  // Edit Form State
  const [formData, setFormData] = useState({});
  const [avatarFile, setAvatarFile] = useState(null);
  const [previewAvatar, setPreviewAvatar] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const data = await getMyInfo();
      setProfile(data);
      setFormData({
        fullName: data.fullName || "",
        phoneNumber: data.phoneNumber || "",
        address: data.address || "",
        dateOfBirth: data.dateOfBirth || "",
        gender: data.gender || "MALE",
        citizenIdentificationCard: data.citizenIdentificationCard || ""
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file);
      setPreviewAvatar(URL.createObjectURL(file));
    }
  };

  const handleSave = async () => {
    try {
      if (avatarFile) {
        await uploadAvatar(avatarFile);
      }

      await updateMyInfo(formData);

      alert("Cập nhật thông tin thành công!");

      setAvatarFile(null);
      setPreviewAvatar(null);
      setIsEditing(false);
      fetchProfile();
      window.dispatchEvent(new Event('authChange'));
    } catch (error) {
      alert("Lỗi cập nhật: " + error.message);
    }
  };

  if (loading) return <div className="p-6">Đang tải thông tin...</div>;
  if (!profile) return <div className="p-6">Không tìm thấy thông tin nhân viên.</div>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-maincolor">Thông tin cá nhân</h1>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-maincolor text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Chỉnh sửa
          </button>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={() => {
                setIsEditing(false);
                setPreviewAvatar(null);
                setAvatarFile(null);
              }}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition flex items-center gap-2"
            >
              <X size={18} /> Hủy
            </button>
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center gap-2"
            >
              <Save size={18} /> Lưu thay đổi
            </button>
          </div>
        )}
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden max-w-4xl mx-auto">
        {/* Header / Avatar */}
        <div className="bg-maincolor p-8 text-center text-white relative">
          <div className="relative w-24 h-24 mx-auto mb-4">
            {previewAvatar ? (
              <img src={previewAvatar} alt="preview" className="w-24 h-24 rounded-full object-cover border-4 border-white" />
            ) : profile.image ? (
              <img src={`data:image/jpeg;base64,${profile.image}`} alt="avatar" className="w-24 h-24 rounded-full object-cover border-4 border-white" />
            ) : (
              <div className="w-24 h-24 bg-white text-maincolor rounded-full flex items-center justify-center text-4xl font-bold border-4 border-white">
                {profile.fullName ? profile.fullName.charAt(0) : "S"}
              </div>
            )}

            {isEditing && (
              <label className="absolute bottom-0 right-0 bg-gray-800 text-white p-2 rounded-full cursor-pointer hover:bg-gray-600">
                <Camera size={16} />
                <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
              </label>
            )}
          </div>

          <h2 className="text-2xl font-bold">
            {isEditing ? (
              <input
                className="text-black text-center rounded px-2 py-1"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            ) : profile.fullName}
          </h2>
          <p className="text-blue-100">{profile.position || "Nhân viên"} - {profile.department || "Phòng ban"}</p>
        </div>

        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Personal Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Thông tin liên hệ</h3>

            <div className="flex items-center gap-3 text-gray-700">
              <Mail className="text-maincolor" size={20} />
              <div>
                <span className="block text-xs text-gray-500">Email</span>
                {profile.email}
              </div>
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <Phone className="text-maincolor" size={20} />
              <div className="flex-1">
                <span className="block text-xs text-gray-500">Số điện thoại</span>
                {isEditing ? (
                  <input
                    className="w-full border rounded p-1 text-sm"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  />
                ) : (
                  profile.phoneNumber || "Chưa cập nhật"
                )}
              </div>
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <MapPin className="text-maincolor" size={20} />
              <div className="flex-1">
                <span className="block text-xs text-gray-500">Địa chỉ</span>
                {isEditing ? (
                  <input
                    className="w-full border rounded p-1 text-sm"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                ) : (
                  profile.address || "Chưa cập nhật"
                )}
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Thông tin chi tiết</h3>

            <div className="flex items-center gap-3 text-gray-700">
              <Calendar className="text-maincolor" size={20} />
              <div className="flex-1">
                <span className="block text-xs text-gray-500">Ngày sinh</span>
                {isEditing ? (
                  <input
                    type="date"
                    className="w-full border rounded p-1 text-sm"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                  />
                ) : (
                  profile.dateOfBirth
                )}
              </div>
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <User className="text-maincolor" size={20} />
              <div className="flex-1">
                <span className="block text-xs text-gray-500">Giới tính</span>
                {isEditing ? (
                  <select
                    className="w-full border rounded p-1 text-sm"
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  >
                    <option value="MALE">Nam</option>
                    <option value="FEMALE">Nữ</option>
                    <option value="OTHER">Khác</option>
                  </select>
                ) : (
                  profile.gender
                )}
              </div>
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <CreditCard className="text-maincolor" size={20} />
              <div className="flex-1">
                <span className="block text-xs text-gray-500">CCCD/CMND</span>
                {isEditing ? (
                  <input
                    className="w-full border rounded p-1 text-sm"
                    value={formData.citizenIdentificationCard}
                    onChange={(e) => setFormData({ ...formData, citizenIdentificationCard: e.target.value })}
                  />
                ) : (
                  profile.citizenIdentificationCard || "Chưa cập nhật"
                )}
              </div>
            </div>

            {/* Staff specific - readonly */}
            <div className="flex items-center gap-3 text-gray-700 opacity-70">
              <Briefcase className="text-maincolor" size={20} />
              <div>
                <span className="block text-xs text-gray-500">Chức vụ (Không thể sửa)</span>
                {profile.position || "—"}
              </div>
            </div>

            <div className="flex items-center gap-3 text-gray-700 opacity-70">
              <Building2 className="text-maincolor" size={20} />
              <div>
                <span className="block text-xs text-gray-500">Phòng ban (Không thể sửa)</span>
                {profile.department || "—"}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffProfile;