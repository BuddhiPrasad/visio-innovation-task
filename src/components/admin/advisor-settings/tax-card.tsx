import React from "react";

import { HiOutlineDotsVertical } from "react-icons/hi";

const tasklist = [
  {
    name: "Financial year 2022/2023",
    year: "2022/2023",
  },
  {
    name: "Financial year 2022/2023",
    year: "2022/2023",
  },
  {
    name: "Financial year 2022/2023",
    year: "2022/2023",
  },
  {
    name: "Financial year 2022/2023",
    year: "2022/2023",
  },
  {
    name: "Financial year 2022/2023",
    year: "2022/2023",
  },
  {
    name: "Financial year 2022/2023",
    year: "2022/2023",
  },
  {
    name: "Financial year 2022/2023",
    year: "2022/2023",
  },
  {
    name: "Financial year 2022/2023",
    year: "2022/2023",
  },
  {
    name: "Financial year 2022/2023",
    year: "2022/2023",
  },
  {
    name: "Financial year 2022/2023",
    year: "2022/2023",
  },
];

const TaxCard = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-8  ">
      {tasklist.map((item, index) => {
        return (
          <div key={index} className="bg-blue-100 p-2 rounded-xl">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h1 className="mb-4 font-bold">{item.name}</h1>
                <HiOutlineDotsVertical size={25} />
              </div>
              <div className="flex justify-between">
                <span className="font-bold">year</span>
                <p className="p mb-4">{item.year}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TaxCard;
