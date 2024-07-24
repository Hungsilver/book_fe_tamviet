"use client";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

pdfjs.GlobalWorkerOptions.workerSrc = "/tess.js";

function RenderPDF({ file }: { file: any }) {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  const changePage = (offset: number) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  };

  const changePageBack = () => {
    changePage(-1);
  };
  const changePageNext = () => {
    changePage(1);
  };
  return (
    <div className="relative">
      <button
        disabled={pageNumber <= 1}
        className={`absolute top-[45%] left-7 ${
          pageNumber <= 1 ? "bg-gray-400 text-white" : ""
        } border border-black p-1 rounded-md`}
        type="button"
        onClick={changePageBack}
      >
        <ArrowLeftIcon height={20} width={20} />
        {/* Quay lại */}
      </button>
      <div className="justify-center sm:flex hidden">
        <span className="">
          Trang {pageNumber} / {numPages}
        </span>
      </div>
      {numPages && (
        <button
          className={`absolute top-[45%] right-7 ${
            pageNumber >= numPages ? "bg-gray-300 text-white" : ""
          } border border-black p-1 rounded-md`}
          type="button"
          onClick={changePageNext}
          disabled={pageNumber >= numPages}
        >
          {/* Tiếp */}
          <ArrowRightIcon height={20} width={20} />
        </button>
      )}
      <Document
        className={
          "flex justify-center h-auto sm:h-[842px]  overflow-y-auto  mt-2 "
        }
        file={`/pdf/${file}.pdf`}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div className="justify-center sm:hidden flex">
        <span className="">
          Trang {pageNumber} / {numPages}
        </span>
      </div>
    </div>
  );
}

export default RenderPDF;
