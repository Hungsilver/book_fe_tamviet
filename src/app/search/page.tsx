"use client";
import { api } from "@/api/apiConfig";
import ItemHomeComponent from "@/components/homeComponent";
import NotData from "@/shared/not-data";
import { Button, Form, Input, Pagination, Select } from "antd";
import React, { useEffect, useState } from "react";

function SearchPage() {
  const [data, setData] = useState<any>();
  const [dataCategory, setDataCategory] = useState<any>({});
  const [dataPublisher, setDataPublisher] = useState<any>({});
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);
  const [form, setForm] = useState<any>({});

  useEffect(() => {
    setForm({
      page: 0,
      size: 10,
    });
    const getData = async () => {
      try {
        const [responseDtFilter, responseCate, responsePub] = await Promise.all(
          [
            api.get(`book/filter-default?page=0&size=10`),
            api.get("/category"),
            api.get("/publisher"),
          ]
        );

        const customDataCate = responseCate.data.map((item: any) => ({
          value: item.id,
          label: item.name,
        }));
        const customDataPub = responsePub.data.map((item: any) => ({
          value: item.id,
          label: item.name,
        }));
        setDataCategory(customDataCate);
        setDataPublisher(customDataPub);
        setData(responseDtFilter.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const handleChangeSelectMutiple = (value: string[]) => {
    setForm({
      ...form,
      categoryIds: value,
    });

    //open search
    setIsOpenSearch(true);
  };

  const handleChangeSelect = (value: string) => {
    setForm({
      ...form,
      publisherId: value,
    });
    //open search
    setIsOpenSearch(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    //open search
    setIsOpenSearch(true);
  };

  const handleSearch = () => {
    //delete param before search
    const params = new URLSearchParams({ ...form, page: 0, size: 10 });
    setForm({ ...form, page: 0, size: 10 });
    const getData = async () => {
      try {
        const response = await api.get(`book/filter?${params.toString()}`);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    //when click search update pagination
    setIsSearch(true);
  };

  const handleChangePagination = (page: number, pageSize: number) => {
    const formCurrent = { ...form, page: page - 1, size: pageSize };
    setForm(formCurrent);
    const params = new URLSearchParams(formCurrent);
    const urlFilter = `book/filter?${params.toString()}`;
    const urlFilterDefault = `book/filter-default?${params.toString()}`;
    const getData = async () => {
      try {
        const responseDtFilter = await api.get(
          isSearch ? urlFilter : urlFilterDefault
        );
        setData(responseDtFilter.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  };

  return (
    <div>
      <div className="rounded-[4px] bg-white p-3 mb-2">
        <h4>Tìm kiếm & bộ lọc</h4>
        <div>
          <Form onFinish={handleSearch}>
            <div className="grid grid-cols-1 gap-1 sm:grid-cols-3 sm:gap-3 sm:pb-0 pb-2">
              <div>
                <label htmlFor="search-full">Từ khóa: </label>
                <Input
                  name="searchAll"
                  id="search-full"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="author">Tác giả: </label>
                <Input name="nameAuthor" id="author" onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="category">Thể loại: </label>
                <Select
                  className="w-full"
                  id="author"
                  mode="multiple"
                  onChange={handleChangeSelectMutiple}
                  allowClear
                  options={dataCategory}
                />
              </div>

              <div>
                <label htmlFor="nameBook">Tên sách: </label>
                <Input name="nameBook" id="nameBook" onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="publisher">Nhà xuất bản: </label>
                <Select
                  className="w-full"
                  id="publisher"
                  options={dataPublisher}
                  onChange={handleChangeSelect}
                />
              </div>
            </div>
            <hr />
            <div className="flex justify-end sm:pt-0 pt-3">
              <Button type="primary" htmlType="submit" disabled={!isOpenSearch}>
                Tìm kiếm
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <div className="bg-white rounded-[4px] p-3">
        {data?.data?.length === 0 && <NotData />}
        {data?.data && (
          <div className="flex flex-col gap-4">
            <div className="bg-white text-black rounded-[4px]">
              {data?.data?.length != 0 && (
                <ItemHomeComponent
                  books={data?.data}
                  title={`${data?.totalElements} kết quả`}
                />
              )}
              <div className="flex justify-center mt-5">
                {form && (
                  <Pagination
                    defaultCurrent={1}
                    total={data.totalElements}
                    onChange={handleChangePagination}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
