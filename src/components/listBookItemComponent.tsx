import React from "react";

function ListBookItemComponent({ children }: any) {
  return (
    <div className="grid sm:grid-cols-5 sm:gap-8 grid-cols-2 gap-3">
      {children}
    </div>
  );
}

export default ListBookItemComponent;
