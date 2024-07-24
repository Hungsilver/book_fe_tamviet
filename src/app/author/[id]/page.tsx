"use client";
import { api } from "@/api/apiConfig";
import ItemHomeComponent from "@/components/homeComponent";
import NotData from "@/shared/not-data";
import React, { useEffect, useState } from "react";

function AuthorPage({ params }: { params: { id: string } }) {
  const id = params.id;
  const [data, setData] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await api.get(`/book/${id}/author`);
        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  const viewMore = () => {};

  return (
    <div>
      <div className="bg-white text-black rounded-[4px] p-3">
        {!!data && data.length !== 0 ? (
          <>
            <ItemHomeComponent books={data} title={`Sách theo tác giả`} />
            <div className="flex justify-center mt-4">
              <button
                hidden={data.length < 8}
                type="button"
                className="bg-blue-600 text-white px-4 py-1 rounded-[4px]"
                onClick={viewMore}
              >
                Đọc thêm
              </button>
            </div>
          </>
        ) : (
          <NotData />
        )}
      </div>
    </div>
  );
}

export default AuthorPage;
