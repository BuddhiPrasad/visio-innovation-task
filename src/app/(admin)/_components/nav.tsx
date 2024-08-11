"use client";

import React from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { CiLogout } from "react-icons/ci";

import {
  MdDashboard,
  MdOutlineEmail,
  MdOutlineSubscriptions,
  MdOutlinePayment,
} from "react-icons/md";
import { IoSettingsOutline, IoNotificationsOutline } from "react-icons/io5";
import { RiCoupon2Line, RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaRegFileWord } from "react-icons/fa";
import { LiaMailBulkSolid } from "react-icons/lia";

const Links = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <MdDashboard size={20} />,
  },
  {
    path: "/advisor-settings",
    name: "Advisor Settings",
    icon: <IoSettingsOutline size={20} />,
  },
  {
    path: "/email",
    name: "Email",
    icon: <LiaMailBulkSolid size={20} />,
  },
  {
    path: "/email-templates",
    name: "Email Templates",
    icon: <MdOutlineEmail size={20} />,
  },
  {
    path: "/promo-codes",
    name: "Promo Codes",
    icon: <RiCoupon2Line size={20} />,
  },
  {
    path: "/word-telplates",
    name: "Word Telplates",
    icon: <FaRegFileWord size={20} />,
  },
  {
    path: "/superannuation",
    name: "Superannuation",
    icon: <RiMoneyDollarCircleLine size={20} />,
  },
  {
    path: "/subscription",
    name: "Subscription",
    icon: <MdOutlineSubscriptions size={20} />,
  },
  {
    path: "/payment-history",
    name: "Payment History",
    icon: <MdOutlinePayment size={20} />,
  },
  {
    path: "/notification",
    name: "Notification",
    icon: <IoNotificationsOutline size={20} />,
  },
];

const Nav = () => {
  const path = usePathname();

  return (
    <nav className="flex flex-col justify-between h-screen">
      <div className="">
        {/*Item Listing */}
        {Links.map((link, index) => {
          const isActiv = path.startsWith(link.path);
          return (
            <div
              className={
                isActiv
                  ? "flex items-center mr-2 mt-2 md:mr-4 md:mt-4 p-3 text-green-600 bg-white rounded-se-3xl font-bold"
                  : "flex items-center mr-2 mt-2 md:mr-4 md:mt-4 p-3 text-white"
              }
              key={index}
            >
              <div className="flex gap-4 mr-4 ml-4">
                <Link href={link.path}>{link.icon}</Link>
                <Link href={link.path} className="hidden lg:flex">
                  {link.name}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
