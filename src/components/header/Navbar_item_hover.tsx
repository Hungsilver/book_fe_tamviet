import Link from "next/link";
import React, { useState } from "react";
import scroll from "@/shared/style/scroll.module.css";

interface INavbarItem {
  title: string;
  data?: INavbarItem[];
  icon: any;
}

function NavbarItemHover({ title, data, icon }: INavbarItem) {
  const [isHover, setHover] = useState<boolean>(false);
  return (
    <div
      className="relative p-[8px] cursor-pointer hover:bg-blue-400 hover:text-white border-none rounded-[4px]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex items-center gap-1">
        {icon}
        <span className=" m-0">{title}</span>
      </div>
      <ul
        className={`${
          isHover ? "block" : "hidden"
        } absolute p-0 translate-y-2 -translate-x-2 border h-[70vh] overflow-y-scroll bg-white min-w-[250px] ${
          scroll.scrollbarCustom
        } `}
      >
        {!!data &&
          data.map((item: any) => (
            <li
              key={item.id}
              className="hover:bg-gray-200 cursor-pointer w-full"
            >
              <Link
                className="no-underline text-black w-full block py-1 px-2"
                href={`/category/${item?.id}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default NavbarItemHover;
