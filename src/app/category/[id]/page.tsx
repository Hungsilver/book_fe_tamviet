"use client";
import { api } from "@/api/apiConfig";
import ItemHomeComponent from "@/components/homeComponent";
import NotData from "@/shared/not-data";
import { Pagination } from "antd";
import React, { useEffect, useState } from "react";

function CategoryPage({ params }: { params: { id: string } }) {
  const id = params.id;
  const [data, setData] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await api.get(`/book/${id}/category?page=0&size=10`);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  const handleChangePagination = (page: number, pageSize: number) => {
    const formCurrent: any = { page: page - 1, size: pageSize };
    const params = new URLSearchParams(formCurrent);
    const url = `/book/${id}/category?${params.toString()}`;
    const getData = async () => {
      try {
        const response = await api.get(url);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  };

  return (
    <div>
      <div className="bg-white text-black rounded-[4px] p-3">
        {!!data?.data && data?.data?.length !== 0 ? (
          <>
            <ItemHomeComponent books={data.data} title={`Sách theo thể loại`} />
            <div className="flex justify-center mt-4">
              <Pagination
                defaultCurrent={1}
                total={data.totalElements}
                onChange={handleChangePagination}
              />
            </div>
          </>
        ) : (
          <NotData />
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
