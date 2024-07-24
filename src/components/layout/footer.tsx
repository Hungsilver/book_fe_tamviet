"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DateComponent from "../date";
import { api } from "@/api/apiConfig";

function Footer() {
  const [onlineCount, setOnlineCount] = useState(0);

  useEffect(() => {
    // Gọi API khi người dùng vào trang
    // api.post("visitor/enter").then(() => {});
    // const fetchOnlineCount = () => {
    //   api.get("visitor/count").then((data) => setOnlineCount(data.data));
    // };
    // // Gọi ngay lập tức và sau đó mỗi 60 giây
    // fetchOnlineCount();
    // const interval = setInterval(fetchOnlineCount, 60000);
    // const handleBeforeUnload = (event: any) => {
    //   event.preventDefault();
    //   api.post("visitor/leave");
    //   event.returnValue = "";
    // };
    // window.addEventListener("beforeunload", handleBeforeUnload);
    // return () => {
    //   window.removeEventListener("beforeunload", handleBeforeUnload);
    //   clearInterval(interval);
    // };
  }, []);

  return (
    <div className=" text-black py-4 relative ">
      <div className="absolute top-0 inset-0 bg-[url('/image/bg-footer.jpg')] bg-cover bg-center bg-no-repeat"></div>
      <div className="absolute top-0 inset-0 bg-gradient-footer"></div>
      <div className="relative flex-none justify-around sm:flex p-3 sm:p-0">
        <div className="">
          <Image
            className="object-cover w-[80px] h-[80px] sm:w-[120px] sm:h-[120px]"
            src={"/image/logo-tv-vp.png"}
            width={120}
            height={120}
            alt="logo-footer"
          />
        </div>
        <div>
          <h1 className="text-[14px] sm:text-[18px] mb-3">
            Bản quyền thuộc về THƯ VIỆN TỈNH VĨNH PHÚC
          </h1>
          <div className="text-black text-[13px] sm:text-[16px]">
            <p>
              Địa chỉ: Số 16 đường Lạc Long Quân - Phường Khai Quang - Thành phố
              Vĩnh Yên - Tỉnh Vĩnh Phúc
            </p>
            <p>Điện thoại: 0211.862.662 - 0211.847.182</p>
            <p>Email: thuvienvinhphuc@gmail.com</p>
          </div>
        </div>
        <div className="text-black text-[13px] sm:text-[16px]">
          <p>
            Hôm nay: <DateComponent />
          </p>
          <p>Người dùng online: {onlineCount}</p>
          <p>Tháng này: {2307 + onlineCount}</p>
          <p>Tổng lượt truy cập: {10232 + onlineCount}</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
