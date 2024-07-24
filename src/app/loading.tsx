import Spinner from "@/components/spinner/spinner";
import React from "react";

function Loading() {
  return (
    <div className="text-black h-[400px] flex justify-center items-center">
      <Spinner />
    </div>
  );
}

export default Loading;
