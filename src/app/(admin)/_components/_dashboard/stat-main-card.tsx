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
        <h1 className="h1-dashboard">{maincount}</h1>
        <span>{title}</span>
      </div>
      {/*downset */}
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-blue-600">{active}</h2>
          <span className="uppercase text-sm">active</span>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-right text-red-600">
            {inactiv}
          </h2>
          <span className="uppercase text-right text-sm">inactive</span>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
