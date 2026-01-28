import { useState } from "react";

import CartIcon from "../icon/cart";
import Tym from "../icon/tym";
import Account from "../icon/account";
import Category from "../icon/category";
import Auth from "./auth";
import Location from "../icon/location";
import Headphone from "../icon/headphone";
import { useAuthStore } from "@/stores/useAuthStore";

import {  useNavigate } from "react-router-dom";
const Header = () => {
  const [openModal, setOpenModal] = useState(false)
  const user = useAuthStore((s) => s.user)
  const navigate = useNavigate()
  const handleAccountClick = () => {
    if(user) {
      navigate('/account')
    }
    else {
    setOpenModal(true)
  }
}
  return (
    <header className="w-full text-[15px]" style={{ fontFamily: "inter" }}>
      <div className="mx-auto grid grid-cols-12 items-center px-12 py-2 bg-[#016504] text-white">
        <div className="col-span-8">
          <ul className="flex gap-6 ">
            <li className="flex gap-2 items-center">
              {" "}
              <div>
                <Location />
              </div>{" "}
              Hệ thống cửa hàng
            </li>
            <li>Về Nhã Nam</li>
            <li>Tin Sách</li>
            <li>Event</li>
          </ul>
        </div>
        <div className="col-span-4 justify-end items-center flex">
          <Headphone />
          <div className="ml-2">
            Contact:<span className="ml-2">(84+) 869547255</span>
          </div>
        </div>
      </div>
      <div className="header-main bg-[#F0F2F3]">
        <div className="container mx-auto grid grid-cols-12 items-center px-12 pt-3">
        <div className="col-span-8 flex items-center gap-8">
          <a href="/">
            <img
            src="src/assets/images/logo.png"
            alt="logo"
            style={{ width: 70, height: 66 }}
          />
          </a>
          <div className="relative">
            <input
              type="text"
              placeholder="Tên sách lên xu hướng/bestselling..."
              className="pt-2 pr-[50px] pb-2 pl-[18px] bg-white rounded border-none w-[600px] ml-2 float-[12px]"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2">
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5833 17.9167C14.6334 17.9167 17.9167 14.6334 17.9167 10.5833C17.9167 6.53325 14.6334 3.25 10.5833 3.25C6.53325 3.25 3.25 6.53325 3.25 10.5833C3.25 14.6334 6.53325 17.9167 10.5833 17.9167Z"
                  stroke="#008300"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M19.7502 19.75L15.7627 15.7625"
                  stroke="#008300"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="col-span-4">
          <div>
            <ul className="flex items-center justify-end mt-1 gap-6 text-center text-[14px]">
              <li>
                {" "}
                <a href="#" className="text-[#707070]">
                  
                    <CartIcon />
                  <p className="mt-2">Giỏ hàng</p>
                  
                </a>
              </li>
              <li>
                {" "}
                 <a href="#" className="text-[#707070]">
                  <Tym />
                  <p >Yêu thích</p>
                </a>
              </li>
              <li>
        <button
          onClick={() => handleAccountClick()}
          className="items-center gap-2 text-[#707070] hover:text-black cursor-pointer"
        >
          <Account />
          <p>Tài khoản</p>
        </button>
      </li>

      {/* {user ? (
  <AccountPage />
) : (
  openModal && (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <Auth open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  )
)} */}

            </ul>
          </div>
        </div>
      </div>
      <br />
      <div className="border-t border-[#016504]">

        <div className="mx-auto px-12">
          <div>
            <div className="header-menu py-3">
              <ul className="flex gap-10 text-[16px] items-center">
                <li className="relative group inline-block">
                  <div className="flex justify-center items-center gap-4 p-3 bg-[#fff] rounded cursor-pointer">
                    <button> <Category/></button>
                  <span className="text-[#016504] font-bold text-[16px] ">DANH MỤC</span>
                  </div>
                  {/* <div className="shop-menu absolute top-full left-0 mt-2
           opacity-0 scale-95
           group-hover:opacity-100 group-hover:scale-100
           transition-all duration-200
           w-48 bg-white shadow-lg p-3" >
            <div className="flex">
              <div className="w-[300px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nihil iusto odio harum deleniti molestias vero fugiat aut veniam. Odio saepe praesentium nostrum fuga nihil velit ratione iusto vel illum.
              </div>
              <div className="bg-[#F0F2F3] w-[600px]">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo minima, ex explicabo facere praesentium quia dicta dignissimos autem, odio porro repellat fuga reprehenderit rem laboriosam nam similique nobis blanditiis tempora.
              </div>
            </div>
           </div> */}
                </li>
                <li><a href="#" className="">Sách mới</a></li>
                <li><a href="#">Sách bán chạy</a></li>
                <li><a href="#" className="text-[#016504]">Sách xu hướng</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* AUTH MODAL */}
      {!user && openModal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <Auth open={openModal} onClose={() => setOpenModal(false)} />
        </div>
      )}
    </header>
  );
};

export default Header;
