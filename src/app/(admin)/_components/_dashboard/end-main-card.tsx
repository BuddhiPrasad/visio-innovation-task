import Image from "next/image";
import React from "react";

export interface EndCard {
  image: string;
  title: string;
}

const EndCard = ({ image, title }: EndCard) => {
  return (
    <div className="bg-white p-2 rounded-xl w-full">
      <div className="flex items-center justify-center gap-2">
        <Image src={image} alt="AdviserSettings" width={150} height={150} />
      </div>
      <h4 className="text-sm font-bold text-center">{title}</h4>
    </div>
  );
};

export default EndCard;
