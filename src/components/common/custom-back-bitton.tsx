import React from "react";

import { IoArrowBackCircleOutline } from "react-icons/io5";

const CustomBackButton = () => {
  return (
    <div className="flex items-center justify-center gap-2 min-w-[100px] h-[45px] border border-border">
      <IoArrowBackCircleOutline />
      <span>Back</span>
    </div>
  );
};

export default CustomBackButton;
