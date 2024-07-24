"use client";
import { api } from "@/api/apiConfig";
import React, { useEffect, useState } from "react";
import DocxPreview from "@/components/readFile/renderDocx";
import dynamic from "next/dynamic";
const PDFViewer = dynamic(
  () => import("../../../components/readFile/renderPDF"),
  {
    ssr: false,
  }
);

function ReadPage({ params }: { params: { id: string } }, props: any) {
  const id = params.id;
  const [book, setBook] = useState<any>();
  const [page, setPage] = useState<boolean>(true);

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
    <div>
      <div className="bg-white text-black rounded-[4px] p-3">
        {page && book ? (
          <div className="">
            <PDFViewer file={book?.namePdf} />
          </div>
        ) : (
          <>{book && <DocxPreview fileUrl={book?.pathDocx} />}</>
        )}
        <div className="flex justify-center gap-2 my-3 ">
          <button
            className={`border border-black py-1 px-3 rounded-[4px] ${
              page && book ? "bg-blue-700 text-white" : ""
            }`}
            type="button"
            onClick={() => setPage(!page)}
          >
            PDF
          </button>
          <button
            className={`border  border-black py-1 px-3 rounded-[4px] ${
              !page ? "bg-blue-700 text-white" : ""
            }`}
            type="button"
            onClick={() => setPage(!page)}
          >
            DOCS
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReadPage;
