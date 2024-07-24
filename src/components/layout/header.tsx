"use client";
import Image from "next/image";
import { api } from "@/api/apiConfig";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MenuPc from "../header/MenuPc";
import MenuMobile from "../header/MenuMobile";

function Header() {
  const [dataNavbar, setDataNavbar] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await api.get("/navbar");
        setDataNavbar(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div className="flex px-6 py-1 justify-between text-black sticky top-0  w-full z-10 bg-white opacity-90">
      <Link
        className="flex gap-2 items-center cursor-pointer no-underline"
        href={"/"}
      >
        <div className="flex justify-center items-center">
          <Image
            src={"/image/logo-tv-vp.png"}
            width={50}
            height={50}
            alt="logo"
          />
        </div>
        <span className="w-[9rem]  font-monosdf  text-black lg:block hidden">
          Thư viện điện tử tỉnh Vĩnh Phúc
        </span>
      </Link>
      <MenuPc dataNavbar={dataNavbar} />
      <MenuMobile dataNavbar={dataNavbar} />
      <div className="flex items-center lg:block hidden">
        <button className="border-2 rounded-[4px] px-3 py-1 text-gray-500">
          Đăng nhập
        </button>
        <button className="border-2 rounded-[4px] px-3 py-1 ms-1 text-white bg-blue-500">
          Đăng kí
        </button>
      </div>
    </div>
  );
}

export default Header;
