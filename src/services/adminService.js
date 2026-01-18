
const API_URL_DOCTOR = "http://localhost:8080/api/doctor";
const API_URL_SERVICE = "http://localhost:8080/api/services";

const getAuthHeaders = () => {
    const token = localStorage.getItem('hycare_token');
    return {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : ''
    };
};

// Helper to handle response
const handleResponse = async (response, errorMessage) => {
    if (!response.ok) {
        let errorMsg = errorMessage;
        try {
            const errorData = await response.json();
            if (errorData.message) errorMsg += ": " + errorData.message;
        } catch (e) {
            // ignore JSON parse error
        }
        throw new Error(errorMsg);
    }
    try {
        const data = await response.json();
        return data;
    } catch (e) {
        // If no JSON returned (e.g. delete void), return null
        return null;
    }
};

export const createDoctor = async (doctorData) => {
    const response = await fetch(API_URL_DOCTOR, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(doctorData)
    });
    return handleResponse(response, "Failed to create doctor");
};

export const updateDoctor = async (id, doctorData) => {
    const response = await fetch(`${API_URL_DOCTOR}/${id}`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify(doctorData)
    });
    return handleResponse(response, "Failed to update doctor");
};

export const deleteDoctor = async (id) => {
    const response = await fetch(`${API_URL_DOCTOR}/${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders()
    });
    return handleResponse(response, "Failed to delete doctor");
};

const API_URL_STAFF = "http://localhost:8080/api/staff";

export const getAllStaffs = async () => {
    const response = await fetch(API_URL_STAFF, {
        headers: getAuthHeaders()
    });
    const data = await handleResponse(response, "Failed to fetch staffs");
    // handleResponse returns the json body. 
    // If backend returns { result: [...] } or just [...], handle it.
    // Based on my Controller: ResponseEntity.ok(list). So it returns list directly?
    // Wait, StaffController: ResponseEntity.ok(staffService.getAllStaffs());
    // GlobalExceptionHandler wraps exceptions, but success?
    // Usually Spring Boot returns object directly unless wrapped in ApiResponse.
    // Looking at other controllers (StaffController lines 20-30), it returns whatever service returns.
    // StaffService returns List<StaffProfileResponse>.
    // So data IS the list.
    // But other adminService functions (line 49 original) used data.result || [].
    // Let's keep it safe.
    return data.result || data || [];
};

export const createStaff = async (staffData) => {
    const response = await fetch(API_URL_STAFF, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(staffData)
    });
    return handleResponse(response, "Failed to create staff");
};

export const updateStaff = async (id, staffData) => {
    const response = await fetch(`${API_URL_STAFF}/${id}`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify(staffData)
    });
    return handleResponse(response, "Failed to update staff");
};

export const deleteStaff = async (id) => {
    const response = await fetch(`${API_URL_STAFF}/${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders()
    });
    return handleResponse(response, "Failed to delete staff");
};

// SERVICE MANAGEMENT
export const getAllServices = async () => {
    const response = await fetch(API_URL_SERVICE, {
        headers: getAuthHeaders()
    });
    const data = await handleResponse(response, "Failed to fetch services");
    return data.result || data || [];
};

export const createService = async (serviceData) => {
    const response = await fetch(API_URL_SERVICE, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(serviceData)
    });
    return handleResponse(response, "Failed to create service");
};

export const updateService = async (id, serviceData) => {
    const response = await fetch(`${API_URL_SERVICE}/${id}`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify(serviceData)
    });
    return handleResponse(response, "Failed to update service");
};

export const deleteService = async (id) => {
    const response = await fetch(`${API_URL_SERVICE}/${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders()
    });
    return handleResponse(response, "Failed to delete service");
};
