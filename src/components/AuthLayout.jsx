import React from "react";

const AuthLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex">
            <div className="hidden md:flex w-1/2 bg-gray-100">
                <img
                    src="/auth_bg.jpg"
                    alt="auth background"
                    className="object-cover w-full h-full"
                />
            </div>

            <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
                <div className="w-full max-w-md p-8">{children}</div>
            </div>
        </div>
    );
};

export default AuthLayout;
