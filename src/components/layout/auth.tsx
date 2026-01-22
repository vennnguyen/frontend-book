// import LoginForm from '@/pages/client/signin';
// import RegisterForm from '@/pages/client/signup';
// import React from 'react'
// import { useState } from "react";

// type AuthTab = "login" | "register";
// type AccountModalProps = {
//   open: boolean;
//   onClose: () => void;
// };
// const Auth: React.FC<AccountModalProps> = ({open, onClose}) => {
//     const [tab, setTab] = useState<AuthTab>("login");
//      if (!open) return null;
//   return (
//     <>
//     <div className="relative w-2/5 rounded-lg bg-white p-6 shadow-lg w-full max-w-6xl">
//             <h2 className="text-2xl font-bold text-[#016504] items-center">
//               Đăng kí thành viên
//             </h2>
//         <div className='modal-body p-[60px] pt-0 border border-[#016504] mx-10'>
               
//                     <div className='flex items-center mt-[40px] '>
//                     <div>
//                         <img src="src/assets/images/account-slider1-mb.png" alt="slider-account" width={400} height={100} className='max-w-full '/>
//                     </div>
//                     <div className="w-full">
//       {/* TAB BUTTON */}
//       <div className="flex max-w-full mb-6">
//         <button
//           onClick={() => setTab("login")}
//           className={`px-[60px] py-3 rounded-[8px] text-[18px] font-medium transition
//             ${tab === "login"
//               ? "bg-[#016504] text-white"
//               : "bg-gray-200 text-[#333]"
//             }`}
//         >
//           Đăng nhập
//         </button>

//         <button
//           onClick={() => setTab("register")}
//           className={`ml-2 px-[60px] py-3 rounded-[8px] text-[18px] font-medium transition
//             ${tab === "register"
//               ? "bg-[#016504] text-white"
//               : "bg-gray-200 text-[#333]"
//             }`}
//         >
//           Đăng ký
//         </button>
//       </div>

//       {/* FORM */}
//       {tab === "login" && <LoginForm />}
//       {tab === "register" && <RegisterForm />}
//     </div>
               
//                 </div>
//         </div>
            
            
//           </div>
//           </>
//   )
// }

// export default Auth

import LoginForm from "@/pages/client/signin";
import RegisterForm from "@/pages/client/signup";
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
