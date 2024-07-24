import Image from "next/image";
import Link from "next/link";
import React from "react";

function BookItemComponent({
  data,
}: {
  data: { image: string; id: number; title: string };
}) {
  return (
    <div className="rounded-[4px] flex flex-col gap-3 items-center max-w-[320px]">
      <div className="h-auto w-full">
        <Image
          className="rounded-[4px] w-full"
          src={
            !data.image || data.image === ""
              ? "/image/img-null.png"
              : `/image/book/${data.image}.png`
          }
          width={260}
          height={300}
          alt={data.title}
        />
      </div>
      <div className="flex sm:gap-3 gap-0 text-[10px] sm:text-[16px] w-full sm:w-auto sm:justify-normal justify-around">
        <Link
          className="border border-blue-500 rounded-[4px] py-1 text-blue-500 no-underline px-3 sm:px-4 "
          href={`/detail/${data.id}`}
        >
          Chi tiết
        </Link>
        <Link
          className="border bg-blue-500 rounded-[4px] py-1 text-white no-underline px-3 sm:px-4 "
          href={`/read/${data.id}`}
        >
          Đọc sách
        </Link>
      </div>
    </div>
  );
}

export default BookItemComponent;
