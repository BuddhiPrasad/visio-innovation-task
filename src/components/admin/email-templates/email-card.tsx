import React from "react";

import { MdOutlineEmail } from "react-icons/md";
import { FaEdit, FaEye } from "react-icons/fa";

const emaillist = [
  {
    subject: "Forgot Password - Client Portal",
    date: "11th July 2024",
  },
  {
    subject: "Varification Email",
    date: "11th July 2024",
  },
  {
    subject: "Team Member Invitation",
    date: "11th July 2024",
  },
  {
    subject: "Forgot Password - Advisor Portal",
    date: "11th July 2024",
  },
];

const EmailCard = () => {
  return (
    <div className="flex flex-col gap-4">
      {emaillist.map((item, index) => {
        return (
          <div key={index} className=" border border-border p-2 rounded-xl">
            <div className="flex gap-4">
              <div className="grid grid-cols-2 w-full justify-between ">
                <div className="flex items-center gap-2 ">
                  <MdOutlineEmail size={24} className="hidden md:block" />
                  <h1>{item.subject}</h1>
                </div>
                <div className="flex items-center ">
                  <span className="text-sm text-center mx-auto">{item.date}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 ">
                <FaEye />
                <FaEdit />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EmailCard;
