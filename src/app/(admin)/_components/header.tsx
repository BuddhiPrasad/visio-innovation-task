import React from "react";

import logo from "../../../../public/logo.svg";

import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";
import Image from "next/image";

const Header = () => {
  return (
    <div className="sticky top-0 p-2 bg-white">
      <div className="flex items-center justify-between">
        {/*Logo */}
        <div>
          <Image src={logo} alt="logo" width={200} />
        </div>

        {/*avater, notification, themetoheller */}
        <div className="flex gap-x-4 items-center">
          {/*notification icon */}
          <div className="bg-secondary border border-border p-1 rounded-xl w-[40px] h-[40px] flex items-center justify-center">
            <IoNotificationsOutline size={25} />
          </div>

          <div className="flex items-center gap-4 bg-blue-100 p-1 rounded-full">
            {/*Avater */}
            <div className="pl-1">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>

            {/*setting icon */}
            <div className="pr-1">
              <IoSettingsOutline size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
