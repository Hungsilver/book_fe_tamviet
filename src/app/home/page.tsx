"use client";
import { api } from "@/api/apiConfig";
import CarouselHomepage from "@/components/carousel/carousel-first";
import CarouselHomepageSecond from "@/components/carousel/carousel-second";
import ItemHomeComponent from "@/components/homeComponent";
import React, { useEffect, useState } from "react";

function HomePage() {
  const [dataNewBooks, setDataNewBooks] = useState<any>();
  const [dataBooksMaxView, setDataBooksMaxView] = useState<any>();

  const [paramNew, setParamNew] = useState<any>({
    page: 0,
    size: 10,
  });
  const [paramView, setParamView] = useState<any>({
    page: 0,
    size: 10,
  });

  useEffect(() => {
    const paramN = new URLSearchParams(paramNew).toString();
    const paramV = new URLSearchParams(paramNew).toString();

    const getData = () => {
      api.get(`home/new?${paramN}`).then((res) => {
        setDataNewBooks(res.data);
      });

      api.get(`home/max-view?${paramV}`).then((res) => {
        setDataBooksMaxView(res.data);
      });
    };

    getData();
  }, []);

  const viewMoreNews = () => {
    const newPage = paramNew.page + 1;
    const param = new URLSearchParams({ ...paramNew, page: newPage });
    setParamNew({
      ...paramNew,
      page: newPage,
    });
    const getData = async () => {
      try {
        const res = await api.get(`/home/new?${param.toString()}`);
        setDataNewBooks(dataNewBooks.concat(res.data));
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  };

  const viewMoreMaxView = () => {
    const newPage = paramView.page + 1;

    const param = new URLSearchParams({ ...paramView, page: newPage });
    setParamView({
      ...paramView,
      page: newPage,
    });
    const getData = async () => {
      try {
        const res = await api.get(`/home/max-view?${param.toString()}`);
        setDataBooksMaxView(dataBooksMaxView.concat(res.data));
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  };
  return (
    <>
      <CarouselHomepage />
      <CarouselHomepageSecond />

      {dataBooksMaxView && dataNewBooks && (
        <div className="flex flex-col gap-4">
          <div className="bg-white text-black rounded-[4px] p-3">
            <ItemHomeComponent books={dataNewBooks} title="Mới" />
            <div className="flex justify-center sm:mt-[20px] mt-[12px]">
              <button
                hidden={dataNewBooks.length < 8}
                type="button"
                className="bg-blue-600 text-white px-4 py-1 rounded-[4px] sm:text-[16px] text-[12px]"
                onClick={viewMoreNews}
              >
                Đọc thêm
              </button>
            </div>
          </div>

          <div className="bg-white text-black rounded-[4px] p-3 mb-3">
            <ItemHomeComponent books={dataBooksMaxView} title="Đọc nhiều" />
            <div className="flex justify-center sm:mt-5 mt-3">
              <button
                hidden={dataBooksMaxView.length < 8}
                type="button"
                className="bg-blue-600 text-white px-4 py-1 rounded-[4px] sm:text-[16px] text-[12px]"
                onClick={viewMoreMaxView}
              >
                Đọc thêm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default HomePage;
