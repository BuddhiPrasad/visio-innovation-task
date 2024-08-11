import React from "react";

export interface StatCard {
  title: string;
  maincount: number;
  active: number;
  inactiv: number;
}

const StatCard = ({ title, maincount, active, inactiv }: StatCard) => {
  return (
    <div className="bg-white flex flex-col p-4 rounded-xl gap-y-8 w-full">
      {/*upset */}
      <div className="flex items-center">
        <h1 className="text-6xl font-bold">{maincount}</h1>
        <span>{title}</span>
      </div>
      {/*downset */}
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold">{active}</h2>
          <span className="uppercase">active</span>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold text-right">{inactiv}</h2>
          <span className="uppercase text-right">inactive</span>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
