import React from "react";

import image01 from "@/../public/under development.png";
import Image from "next/image";

const UnderDevelopment = () => {
  return (
    <div>
      <Image src={image01} alt="image01" width={200} height={300} />
      <h1 className="text-center font-semibold text-sm text-primary">
        Underdevelopment
      </h1>
    </div>
  );
};

export default UnderDevelopment;
