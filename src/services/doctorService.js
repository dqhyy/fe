
const API_URL = "http://localhost:8080/api/doctor";

const mapDoctorFromApi = (doc) => {
    return {
        id: doc.id,
        name: doc.fullName,
        doctorCode: "BS" + String(doc.id).padStart(4, '0'),
        gender: "male",
        specialty: {
            name: doc.specialization, // Use as name
            key: doc.specialization // Use as key (might need to normalize)
        },
        degree: doc.degree,
        experienceYears: doc.yearsOfExperience,
        description: doc.description || "Bác sĩ chưa có mô tả.",
        schedule: {
            workingDays: ["Mon", "Tue", "Wed", "Thu", "Fri"],
            timeSlots: ["08:00-09:00", "09:00-10:00", "15:00-16:00"]
        },
        consultationFee: 500000,
        room: "Phòng khám",
        contact: {
            phone: doc.phone,
            email: doc.email
        },
        image: "/doctors/doctor1.jpg",
        isActive: doc.isActive !== false
    };
};

export const getAllDoctors = async () => {
    try {
        const token = localStorage.getItem('hycare_token');
        const headers = {
            'Content-Type': 'application/json'
        };
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const response = await fetch(API_URL, {
            headers: headers
        });
        if (!response.ok) {
            throw new Error("Failed to fetch doctors");
        }
        const data = await response.json();
        const doctorsDetails = data.result ? data.result : data;

        if (Array.isArray(doctorsDetails)) {
            return doctorsDetails.map(mapDoctorFromApi);
        }
        return [];
    } catch (error) {
        console.error("Error fetching doctors:", error);
        return [];
    }
};

export const getMyAppointments = async () => {
    try {
        const token = localStorage.getItem('hycare_token');
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        };

        const response = await fetch(`${API_URL}/my-appointments`, {
            headers: headers
        });
        if (!response.ok) {
            throw new Error("Failed to fetch appointments");
        }
        const data = await response.json();
        return data.result || [];
    } catch (error) {
        console.error("Error fetching appointments:", error);
        return [];
    }
};

export const updateAppointmentStatus = async (id, status) => {
    const token = localStorage.getItem('hycare_token');
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    };

    const response = await fetch(`${API_URL}/appointments/${id}/status?status=${status}`, {
        method: 'PUT',
        headers: headers
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to update status");
    }
    return await response.json();
};

export const getMyPatients = async () => {
    try {
        const token = localStorage.getItem('hycare_token');
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        };

        const response = await fetch(`${API_URL}/my-patients`, {
            headers: headers
        });
        if (!response.ok) {
            throw new Error("Failed to fetch patients");
        }
        const data = await response.json();
        return data.result || [];
    } catch (error) {
        console.error("Error fetching patients:", error);
        return [];
    }
};

export const updateAppointmentResult = async (id, resultData) => {
    const token = localStorage.getItem('hycare_token');
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    };

    const response = await fetch(`${API_URL}/appointments/${id}/medical-record`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(resultData)
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to update medical result");
    }
    return await response.json();
};

export const getMedicalRecordsByPatientId = async (patientId) => {
    const token = localStorage.getItem('hycare_token');
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    };

    const response = await fetch(`${API_URL}/patients/${patientId}/medical-records`, {
        headers: headers
    });

    if (!response.ok) {
        throw new Error("Failed to fetch medical records");
    }
    const data = await response.json();
    return data.result || [];
};

export const updateMedicalRecord = async (recordId, medicalData) => {
    const token = localStorage.getItem('hycare_token');
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    };

    const response = await fetch(`${API_URL}/medical-records/${recordId}`, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(medicalData)
    });

    if (!response.ok) {
        throw new Error("Failed to update medical record");
    }
    return await response.json();
};

