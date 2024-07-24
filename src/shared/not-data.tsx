import Image from "next/image";
import React from "react";

function NotData() {
  return (
    <div className="flex flex-col items-center gap-1 h-auto w-full">
      <h4 className="">Không tìm được kết quả</h4>
      <Image
        unoptimized
        src={"/gif/no-result.gif"}
        width={500}
        height={100}
        alt="gif"
      />
    </div>
  );
}

export default NotData;
