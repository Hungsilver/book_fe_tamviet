"use client";
import { api } from "@/api/apiConfig";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function DetailPage({ params }: { params: { id: string } }) {
  const id = params.id;
  const [book, setBook] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await api.get(`/book/${id}`);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  return (
    <div className="text-black">
      <div className="flex items-center gap-3 p-[8px] sm:p-3">
        <h2 className="sm:text-[24px] text-[16px] mb-0">Thông tin sách</h2>
      </div>
      <div className="rounded-[4px] bg-white p-3">
        {book && (
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="w-full sm:w-[40%]">
              <div className="sm:w-full sm:h-auto flex justify-center ">
                <Image
                  className="object-cover w-[200px] sm:min-w-[80%]"
                  priority
                  src={
                    book?.image === ""
                      ? "/image/img-null.png"
                      : `/image/book/${book?.image}.png`
                  }
                  width={400}
                  height={600}
                  alt={`${book?.title}`}
                />
              </div>
            </div>
            <div className="w-full sm:w-[60%] flex flex-col sm:gap-3">
              <h3 className="font-bold sm:text-[30px] text-[20px] sm:text-left text-center sm:mb-1 mb-2">
                {book.title}
              </h3>
              <p className="flex flex-col sm:flex-row sm:gap-2 mb-0">
                <span>Tác giả: {book?.author?.name ?? "null"}</span>{" "}
                <span className="hidden sm:block">|</span>
                <span>Năm sáng tác: {book?.yearCreate ?? "null"}</span>
              </p>
              <p className="flex flex-col sm:flex-row sm:gap-2 mb-0">
                <span>Thể loại: {book?.category?.name ?? "null"}</span>
                <span className="hidden sm:block">|</span>
                <span>Tổng số trang: {book?.totalPage ?? "null"}</span>
              </p>
              <p className="flex flex-col sm:flex-row sm:gap-2 mb-0">
                <span>Nhà xuất bản: {book?.publisher?.name ?? "null"}</span>
                <span className="hidden sm:block">|</span>
                <span>Năm xuất bản: {book?.yearPublishing ?? "null"}</span>
              </p>

              <p>Lượt xem: {book.view ?? "null"}</p>
              <p>Còn lại: {book.quantity ?? "null"}</p>
              <hr />
              <Link
                href={`/read/${id}`}
                className="bg-violet-600 text-white no-underline px-3 py-2 rounded-[4px] w-full sm:w-fit mt-3 text-center"
              >
                Đọc sách
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DetailPage;
