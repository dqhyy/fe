import React from "react";
import AuthLayout from "../components/AuthLayout";
import { TextField, Button } from "@mui/material";

const Login = () => {
  return (
    <AuthLayout >
      <div className="flex flex-col items-center mb-6">
        <img src="/logo.png" alt="HyCare Logo" className="h-12 w-auto mb-2" />
        <h1 className="text-2xl font-bold text-maincolor">
          Hy<span className="text-gray-700">Care</span>
        </h1>
      </div>

      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
        Đăng nhập tài khoản
      </h2>

      <form className="flex flex-col gap-4">
        <TextField label="Email" type="email" fullWidth variant="outlined" />
        <TextField label="Mật khẩu" type="password" fullWidth variant="outlined" />

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
          Đăng nhập
        </Button>

        <p className="text-center text-sm mt-4 text-gray-600">
          Chưa có tài khoản?{" "}
          <a href="/signup" className="text-maincolor font-semibold hover:underline">
            Đăng ký ngay
          </a>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Login;
