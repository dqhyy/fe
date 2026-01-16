import React from "react";
import AuthLayout from "../components/AuthLayout";
import { TextField, Button, MenuItem } from "@mui/material";

const Signup = () => {
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

            {/* Form */}
            <form className="flex flex-col gap-4">
                <TextField label="Họ và tên" fullWidth variant="outlined" />
                <TextField label="Email" type="email" fullWidth variant="outlined" />
                <TextField label="Số điện thoại" type="tel" fullWidth variant="outlined" />

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




                <TextField label="Mật khẩu" type="password" fullWidth variant="outlined" />
                <TextField
                    label="Nhập lại mật khẩu"
                    type="password"
                    fullWidth
                    variant="outlined"
                />

                <Button
                    variant="contained"
                    fullWidth
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
                    Đăng ký
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
