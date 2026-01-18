const API_URL = "http://localhost:8080/api/patient";

export const getAllPatients = async () => {
    const token = localStorage.getItem('hycare_token');
    const response = await fetch(API_URL, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    if (!response.ok) throw new Error("Failed to fetch patients");
    const data = await response.json();
    return data.result;
};

export const getPatientProfile = async () => {
    const token = localStorage.getItem('hycare_token');
    const response = await fetch(`${API_URL}/profile`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    if (!response.ok) throw new Error("Failed to fetch profile");
    const data = await response.json();
    return data.result;
};

export const getPatientAppointments = async () => {
    const token = localStorage.getItem('hycare_token');
    const response = await fetch(`${API_URL}/appointments`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to fetch appointments");
    }
    const data = await response.json();
    return data.result;
};

export const getPatientMedicalRecords = async () => {
    const token = localStorage.getItem('hycare_token');
    const response = await fetch(`${API_URL}/medical-records`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    if (!response.ok) throw new Error("Failed to fetch medical records");
    const data = await response.json();
    return data.result;
};



export const createPatient = async (patientData) => {
    const token = localStorage.getItem('hycare_token');
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(patientData)
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create patient");
    }
    const data = await response.json();
    return data.result;
};

export const updatePatient = async (id, patientData) => {
    const token = localStorage.getItem('hycare_token');
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(patientData)
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update patient");
    }
    const data = await response.json();
    return data.result;
};

export const deletePatient = async (id) => {
    const token = localStorage.getItem('hycare_token');
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    if (!response.ok) throw new Error("Failed to delete patient");
    const data = await response.json();
    return data.result;
};

export const getMyBills = async () => {
    const token = localStorage.getItem('hycare_token');
    const response = await fetch(`${API_URL}/bills`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    if (!response.ok) throw new Error("Failed to fetch bills");
    const data = await response.json();
    return data.result;
};

export const createPaymentUrl = async (billId) => {
    const token = localStorage.getItem('hycare_token');
    const response = await fetch(`http://localhost:8080/api/payment/create_payment_url?billId=${billId}`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (!response.ok) throw new Error("Failed to create payment URL");
    const data = await response.json();
    return data.result;
};
