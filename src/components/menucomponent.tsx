"use client";
import { api } from "@/api/apiConfig";
import { HomeIcon } from "@heroicons/react/16/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import Dropdown from "react-bootstrap/Dropdown";

function MenuComponent() {
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
    <div className="bg-white rounded-[4px] text-black  top-[70px] flex gap-2 px-3 py-2 w-full fixed text-[16px] z-10 justify-center">
      <div
        className={`flex gap-1 items-center px-2 py-2 cursor-pointer rounded-[4px] hover:bg-blue-400 hover:text-white`}
      >
        <HomeIcon height={20} width={20} />
        <Link className="text-inherit no-underline font-monosdf" href={"/"}>
          Trang chủ
        </Link>
      </div>
      <Dropdown className="outline-none !border-none">
        <Dropdown.Toggle
          variant="white"
          id="dropdown-basic"
          className="bg-blue-600"
        >
          <span>Thể loại</span>
        </Dropdown.Toggle>

        <Dropdown.Menu className="h-[500px] overflow-y-auto">
          {dataNavbar &&
            dataNavbar.category.map((item: any) => {
              return (
                <Link key={item.id} href={`/category/${item?.id}`}>
                  {item?.name}
                </Link>
              );
            })}
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="outline-none">
        <Dropdown.Toggle variant="white" id="dropdown-basic">
          Nhà xuất bản
        </Dropdown.Toggle>

        <Dropdown.Menu className="h-[500px] overflow-y-auto">
          {dataNavbar &&
            dataNavbar?.publisher?.map((item: any) => {
              return (
                <Dropdown.Item key={item.id} href={`/publisher/${item?.id}`}>
                  {item?.name}
                </Dropdown.Item>
              );
            })}
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className=" ">
        <Dropdown.Toggle variant="white" id="dropdown-basic">
          Tác giả
        </Dropdown.Toggle>

        <Dropdown.Menu className="h-[500px] overflow-y-auto">
          {dataNavbar &&
            dataNavbar?.author?.map((item: any) => {
              return (
                <Dropdown.Item key={item.id} href={`/author/${item?.id}`}>
                  {item?.name}
                </Dropdown.Item>
              );
            })}
        </Dropdown.Menu>
      </Dropdown>

      <Link
        href={"/search"}
        className={`flex gap-1 items-center px-2 py-2 text-inherit no-underline  rounded-[4px]`}
      >
        <MagnifyingGlassIcon height={20} width={20} />
        <span>Tìm kiếm</span>
      </Link>
    </div>
  );
}

export default MenuComponent;
