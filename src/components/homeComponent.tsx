"use client";
import { IBookItem } from "@/shared/interface";
import React from "react";
import BookItemComponent from "./bookItemComponent";
import ListBookItemComponent from "./listBookItemComponent";

interface IItemHomeComponent {
  title: string;
  books: IBookItem[];
}

function ItemHomeComponent(data: IItemHomeComponent) {
  return (
    <div className="w-full">
      <h4 className="sm:mb-4 mb-2 text-[16px] sm:text-[24px]">{data.title}</h4>
      <div>
        <ListBookItemComponent>
          {data?.books &&
            Array.isArray(data?.books) &&
            data?.books?.map((item: IBookItem) => (
              <BookItemComponent data={item} key={item.id} />
            ))}
        </ListBookItemComponent>
      </div>
    </div>
  );
}

export default ItemHomeComponent;
