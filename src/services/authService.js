export const getMyInfo = async () => {
    try {
        const token = localStorage.getItem('hycare_token');
        if (!token) return null;

        const response = await fetch("http://localhost:8080/api/auth/my-info", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error("Failed to fetch user info");
        }

        const data = await response.json();
        return data.result;
    } catch (error) {
        console.error("Error fetching user info:", error);
        return null;
    }
};

export const uploadAvatar = async (file) => {
    const token = localStorage.getItem('hycare_token');
    if (!token) throw new Error("Not authenticated");

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("http://localhost:8080/api/auth/avatar", {
        method: "PUT",
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: formData
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to upload avatar");
    }

    return await response.json();
};

export const updateMyInfo = async (data) => {
    const token = localStorage.getItem('hycare_token');
    if (!token) throw new Error("Not authenticated");

    const response = await fetch("http://localhost:8080/api/auth/my-info", {
        method: "PUT",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to update profile");
    }

    return await response.json();
};
