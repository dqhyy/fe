import React, { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import { TextField, Button, MenuItem, Alert, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!username || !email || !password || !confirmPassword) {
            setError("Vui lòng điền đầy đủ thông tin");
            return;
        }

        if (password !== confirmPassword) {
            setError("Mật khẩu xác nhận không khớp");
            return;
        }

        if (password.length < 6) {
            setError("Mật khẩu phải có ít nhất 6 ký tự");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("http://localhost:8080/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password,
                    email,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(
                    errorData.message || 
                    errorData.error || 
                    "Đăng ký thất bại. Vui lòng thử lại."
                );
            }

            const data = await response.json();
            
            if (data.result || data.status === "success") {
                navigate("/login", { 
                    state: { 
                        message: "Đăng ký thành công! Vui lòng đăng nhập." 
                    } 
                });
            } else {
                throw new Error("Đăng ký thất bại. Vui lòng thử lại.");
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthLayout >
            {/* Logo + Brand */}
            <div className="flex flex-col items-center mb-6">
                <img src="/logo.png" alt="HyCare Logo" className="h-12 w-auto mb-2" />
                <h1 className="text-2xl font-bold text-maincolor">
                    Hy<span className="text-gray-700">Care</span>
                </h1>
            </div>

            {/* Tiêu đề */}
            <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                Đăng ký tài khoản
            </h2>

            {/* Error Alert */}
            {error && (
                <Alert severity="error" sx={{ mb: 3 }}>
                    {error}
                </Alert>
            )}

            {/* Form */}
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <TextField 
                    label="Tên đăng nhập" 
                    fullWidth 
                    variant="outlined"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <TextField 
                    label="Email" 
                    type="email" 
                    fullWidth 
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <TextField 
                    label="Số điện thoại" 
                    type="tel" 
                    fullWidth 
                    variant="outlined" 
                />

                {/* Tuổi + Giới tính */}
                <div className="flex gap-3">
                    {/* Tuổi */}
                    <TextField
                        label="Tuổi"
                        type="number"
                        variant="outlined"
                        className="w-1/6"
                        InputProps={{ inputProps: { min: 0, max: 120 } }}
                    />

                    {/* Giới tính */}
                    <TextField
                        select
                        label="Giới tính"
                        variant="outlined"
                        className="w-1/3"
                    >
                        <MenuItem value="male">Nam</MenuItem>
                        <MenuItem value="female">Nữ</MenuItem>
                        <MenuItem value="other">Khác</MenuItem>
                    </TextField>

                    {/* Ngày sinh */}
                    <TextField
                        label="Ngày sinh"
                        type="date"
                        variant="outlined"
                        InputLabelProps={{ shrink: true }}
                        className="flex-1"
                    />
                </div>

                <TextField 
                    label="Mật khẩu" 
                    type="password" 
                    fullWidth 
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <TextField
                    label="Nhập lại mật khẩu"
                    type="password"
                    fullWidth
                    variant="outlined"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />

                <Button
                    variant="contained"
                    fullWidth
                    type="submit"
                    disabled={loading}
                    sx={{
                        mt: 2,
                        backgroundColor: "#0078D4",
                        ":hover": { backgroundColor: "#005ea6" },
                        borderRadius: 2,
                        py: 1.2,
                        textTransform: "none",
                        fontSize: "1rem",
                    }}
                >
                    {loading ? <CircularProgress size={24} color="inherit" /> : "Đăng ký"}
                </Button>

                <p className="text-center text-sm mt-4 text-gray-600">
                    Đã có tài khoản?{" "}
                    <a href="/login" className="text-maincolor font-semibold hover:underline">
                        Đăng nhập ngay
                    </a>
                </p>
            </form>
        </AuthLayout>
    );
};

export default Signup;
