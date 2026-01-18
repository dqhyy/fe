const API_URL = "http://localhost:8080/api/staff";

// Get helper from another service or duplicate
const getAuthHeaders = () => {
    const token = localStorage.getItem("hycare_token");
    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    };
};

export const getAllAppointments = async () => {
    const response = await fetch(`${API_URL}/appointments`, {
        method: "GET",
        headers: getAuthHeaders(),
    });

    if (!response.ok) {
        throw new Error("Failed to fetch appointments");
    }

    return await response.json();
};

export const confirmAppointment = async (id, doctorId) => {
    let url = `${API_URL}/appointments/${id}/confirm`;
    if (doctorId) {
        url += `?doctorId=${doctorId}`;
    }

    const response = await fetch(url, {
        method: "POST",
        headers: getAuthHeaders(),
    });

    if (!response.ok) {
        throw new Error("Failed to confirm appointment");
    }

    return await response.json();
};

export const cancelAppointment = async (id) => {
    const response = await fetch(`${API_URL}/appointments/${id}/cancel`, {
        method: "POST",
        headers: getAuthHeaders(),
    });

    if (!response.ok) {
        throw new Error("Failed to cancel appointment");
    }

    return await response.text();
};

export const reorderAppointments = async (orders) => {
    const response = await fetch(`${API_URL}/appointments/reorder`, {
        method: "PUT",
        headers: getAuthHeaders(),
        body: JSON.stringify(orders)
    });

    if (!response.ok) {
        throw new Error("Failed to reorder appointments");
    }

    return await response.text();
};

export const getAllBills = async () => {
    const response = await fetch(`${API_URL}/bills`, {
        method: "GET",
        headers: getAuthHeaders(),
    });

    if (!response.ok) {
        throw new Error("Failed to fetch bills");
    }

    return await response.json();
};

export const confirmPayment = async (billId) => {
    const response = await fetch(`${API_URL}/bills/${billId}/pay`, {
        method: "POST",
        headers: getAuthHeaders(),
    });

    if (!response.ok) {
        throw new Error("Failed to confirm payment");
    }

    return await response.json();
};
