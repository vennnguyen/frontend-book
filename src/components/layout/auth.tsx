
import LoginForm from "@/pages/client/Signin";
import RegisterForm from "@/pages/client/Signup";
import { X } from "lucide-react";
import React, { useState } from "react";

type AuthTab = "login" | "register";

type AccountModalProps = {
  open: boolean;
  onClose: () => void;
};

const Auth: React.FC<AccountModalProps> = ({ open,onClose }) => {
  const [tab, setTab] = useState<AuthTab>("login");
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center ">
      <div className="relative w-full max-w-[920px] rounded-2xl bg-white shadow-2xl overflow-hidden">
        {/* CLOSE BUTTON */}
  <button
    onClick={onClose}
    className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition cursor-pointer"
    aria-label="Close" 
  >
    <X size={20} />
  </button>

        {/* HEADER */}
        <div className="px-10 py-6 border-b">
          <h2 className="text-2xl font-bold text-[#016504]">
            Tài khoản thành viên
          </h2>
        </div>

        {/* BODY */}
        <div className="grid grid-cols-2 gap-10 p-10">
          {/* LEFT IMAGE */}
          <div className="flex items-center justify-center bg-[#f6faf7] rounded-xl">
            <img
              src="src/assets/images/account-slider1-mb.png"
              alt="account"
              className="max-w-[90%]"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            {/* TAB */}
            <div className="relative flex border-b mb-6">
              <button
                onClick={() => setTab("login")}
                className={`flex-1 py-3 text-lg font-medium transition
                  ${tab === "login"
                    ? "text-[#016504]"
                    : "text-gray-400"
                  }`}
              >
                Đăng nhập
              </button>

              <button
                onClick={() => setTab("register")}
                className={`flex-1 py-3 text-lg font-medium transition
                  ${tab === "register"
                    ? "text-[#016504]"
                    : "text-gray-400"
                  }`}
              >
                Đăng ký
              </button>

              {/* underline */}
              <span
                className={`absolute bottom-0 h-[3px] w-1/2 bg-[#016504] transition-all duration-300
                  ${tab === "login" ? "left-0" : "left-1/2"}`}
              />
            </div>

            {/* FORM */}
            <div className="mt-6">
              {tab === "login" && <LoginForm />}
              {tab === "register" && <RegisterForm />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
