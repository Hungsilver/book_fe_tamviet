import React from "react";
import dayjs from "dayjs";
import "dayjs/locale/vi";

function DateComponent() {
  const date = dayjs().locale("vi").format("dddd, DD-MM-YYYY"); // Monday, May 1, 2023
  return <span>{date}</span>;
}

export default DateComponent;
