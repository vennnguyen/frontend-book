import React from "react";
import Location from "../icon/location";
import Phone from "../icon/phone";
import Email from "../icon/email";

const Footer = () => {
  return (
    <footer>
      <div>
        <div className="w-full px-10 flex bg-[#036403] h-35 mx-auto items-center justify-between py-5">
          <div>
            <span className="text-white font-bold text-xl pl-10">
              NHẬN THÔNG TIN KHUYẾN MÃI TỪ CHÚNG TÔI
            </span>
          </div>
          <div className="pr-10">
            <form action="" className="flex gap-5 justify-end">
              <input
                type="text"
                placeholder="Nhận email ưu đãi"
                className="outline-none border-none h-12 w-140 text-white placeholder-white pl-[30px] pr-[30px] text-[14px] bg-[#F3F3F329] rounded-xl"
              />
              <button
                type="submit"
                className="h-12 text-[16px] border-none items-center bg-white font-semibold text-[#016504] rounded-xl pl-5 pr-5 cursor-pointer"
              >
                ĐĂNG KÍ
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <div className="border-t border-white">
  <div className="w-full bg-[#016504] h-40 mx-auto px-12 pt-3">
    <div className="flex items-end gap-10 h-full">
      <img
        src="src/assets/images/logo_footer.png"
        alt="logo"
        width={115}
        height={115}
      />

      <p className="text-4xl text-white font-inter italic leading-none">
        Bởi vì sách là thế giới
      </p>
    </div>
    <div>
      <div className="flex items-center justify-between">
        <div>
          <div>Liên hệ</div>
          <ul>
            <li>17/4D, HT43, phường Hiệp Thành,Quận 12</li>
            <li>0869547255</li>
            <li>tuan100205@gmail.com</li>
          </ul>
        </div>
        <div> 
          <div>
            Giới thiệu
          </div>
          <ul>
            <li>Về Nhã Nam</li>
            <li>Hệ thống hiệu sách</li>
            <li>Hệ thống phát hành</li>
            <li>Tuyển dụng</li>
            <li>Liên hệ với chúng tôi</li>
          </ul>
        </div>
        <div><div>Chính sách</div>
        <ul>
          <li>Chính sách bảo mật</li>
          <li>Chính sách đổi trả/ hoàn tiền</li>
         
          <li>Chính sách thanh toán/ vận chuyển</li></ul></div>
        <div>Phương thức thanh toán</div>
      </div>
    </div>
  </div>
</div> */}
<div className="border-t border-white">
  <div className="w-full bg-[#016504] mx-auto px-12 py-6">

    {/* LOGO + SLOGAN */}
    <div className="flex items-end gap-10 mb-8">
      <img
        src="src/assets/images/logo_footer.png"
        alt="logo"
        width={115}
        height={115}
      />

      <p className="text-4xl text-white italic leading-none font-serif">
        Bởi vì sách là thếgiới
      </p>
    </div>

    {/* FOOTER CONTENT */}
    <div className="grid grid-cols-4 gap-10 text-white text-sm">
      
      {/* LIÊN HỆ */}
      <div>
        <h3 className="font-semibold mb-3 uppercase">Liên hệ</h3>
        <ul className="space-y-1">
          <li className="flex items-center gap-2">
            <div> <Location/> </div>
            <div className="footer-link">17/4d, HT43, phường Hiệp Thành, Quận 12</div>
          </li>
          <li className="flex items-center gap-2">
            <div> <Phone/> </div>
            <div className="leading-7 font-bold text-white">0869 547 255</div>
          </li>
          <li className="flex items-center gap-2">
            <div> <Email/> </div>
            <div className="footer-link">tuan100205@gmail.com</div>
          </li>
          
        </ul>
      </div>

      {/* GIỚI THIỆU */}
      <div>
        <h3 className="font-semibold mb-3 uppercase">Giới thiệu</h3>
        <ul className="space-y-1">
          <li className="footer-link">Về Nhã Nam</li>
          <li className="footer-link">Hệ thống hiệu sách</li>
          <li className="footer-link">Hệ thống phát hành</li>
          <li className="footer-link">Tuyển dụng</li>
          <li className="footer-link">Liên hệ với chúng tôi</li>
        </ul>
      </div>

      {/* CHÍNH SÁCH */}
      <div>
        <h3 className="font-semibold mb-3 uppercase">Chính sách</h3>
        <ul className="space-y-1">
          <li className="footer-link">Chính sách bảo mật</li>
          <li className="footer-link">Chính sách đổi trả / hoàn tiền</li>
          <li className="footer-link">Chính sách thanh toán / vận chuyển</li>
        </ul>
      </div>

      {/* THANH TOÁN */}
      <div>
        <h3 className="font-semibold mb-3 uppercase">
          Phương thức thanh toán
        </h3>
        {/* chỗ này sau bạn nhét icon */}
        <div>
          <img src="src/assets/images/payment_method.jpg" alt="payment_method" />
          <img src="src/assets/images/bocongthuong.jpg" alt="bocongthuong" width={138} height={52} className="mt-5"/>
        </div>
      </div>

    </div>
  </div>
</div>


    </footer>
  );
};

export default Footer;
