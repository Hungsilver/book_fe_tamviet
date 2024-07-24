"use client";
import { Bars3Icon } from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";
import { useClickAway } from "react-use";
import { HomeIcon } from "@heroicons/react/16/solid";
import {
  MagnifyingGlassIcon,
  NewspaperIcon,
  Squares2X2Icon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import NavbarItemHover from "./Navbar_item_hover";
import { useRouter } from "next/navigation";

function MenuMobile({ dataNavbar }: any) {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));
  const router = useRouter();

  useEffect(() => {
    setOpen(false);
  }, [router.refresh]);

  return (
    <div ref={ref} className="lg:hidden flex items-center">
      <Bars3Icon
        width={30}
        height={30}
        className="cursor-pointer z-20"
        onClick={() => setOpen(!open)}
      />
      <div
        className={`${
          open ? "block " : "hidden "
        } absolute top-0 right-0 z-10 h-screen w-[70%] bg-white opacity-100 overflow-y-auto`}
      >
        {/* khung */}
        <div className="py-[58px] flex flex-col justify-between h-full">
          <div className="">
            <div
              className={`flex gap-1 items-center px-2 py-2 cursor-pointer rounded-[4px] hover:bg-blue-400 hover:text-white`}
            >
              <HomeIcon height={20} width={20} />
              <Link
                className="text-inherit no-underline font-monosdf"
                href={"/"}
              >
                Trang chủ
              </Link>
            </div>
            {/* <NavbarItemHover
            icon={<Squares2X2Icon width={20} height={20} />}
            title="Thể loại"
            data={dataNavbar?.category}
          />
          <NavbarItemHover
            icon={<NewspaperIcon width={20} height={20} />}
            title="Nhà xuất bản"
            data={dataNavbar?.publisher}
          />
          <NavbarItemHover
            icon={<UserPlusIcon width={20} height={20} />}
            title="Tác giả"
            data={dataNavbar?.author}
          /> */}
            <Link
              href={"/search"}
              className={`flex gap-1 items-center px-2 py-2 text-inherit no-underline border-none rounded-[4px] hover:text-white hover:bg-blue-400`}
            >
              <MagnifyingGlassIcon height={20} width={20} />
              <span>Tìm kiếm</span>
            </Link>
          </div>
          <div className="flex gap-2 justify-around text-white">
            <button className="bg-blue-400 px-3 py-1 border rounded-[4px]">
              Đăng nhập
            </button>
            <button className="bg-blue-400 px-3 py-1 border rounded-[4px]">
              Đăng xuât
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuMobile;
