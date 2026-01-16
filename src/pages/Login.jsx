import React, { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import { TextField, Button, Alert, CircularProgress } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Tên đăng nhập hoặc mật khẩu không chính xác");
      }

      const data = await response.json();

      if (data.token) {
        localStorage.setItem("hycare_token", data.token);
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      } else {
        throw new Error("Không nhận được token từ máy chủ");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <TextField
          label="Tên đăng nhập"
          type="text"
          fullWidth
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <TextField
          label="Mật khẩu"
          type="password"
          fullWidth
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
          {loading ? <CircularProgress size={24} color="inherit" /> : "Đăng nhập"}
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
