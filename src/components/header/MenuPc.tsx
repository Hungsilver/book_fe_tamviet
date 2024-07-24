import React from "react";
import { HomeIcon } from "@heroicons/react/16/solid";
import {
  MagnifyingGlassIcon,
  NewspaperIcon,
  Squares2X2Icon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import NavbarItemHover from "../header/Navbar_item_hover";

function MenuPc({ dataNavbar }: any) {
  return (
    <div className=" text-black  gap-2 px-3 py-2 text-[16px] z-10 justify-center lg:flex hidden">
      <div
        className={`flex gap-1 items-center px-2 py-2 cursor-pointer rounded-[4px] hover:bg-blue-400 hover:text-white`}
      >
        <HomeIcon height={20} width={20} />
        <Link className="text-inherit no-underline font-monosdf" href={"/"}>
          Trang chủ
        </Link>
      </div>
      <NavbarItemHover
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
      />
      <Link
        href={"/search"}
        className={`flex gap-1 items-center px-2 py-2 text-inherit no-underline border-none rounded-[4px] hover:text-white hover:bg-blue-400`}
      >
        <MagnifyingGlassIcon height={20} width={20} />
        <span>Tìm kiếm</span>
      </Link>
    </div>
  );
}

export default MenuPc;
