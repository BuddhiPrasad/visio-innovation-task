"use client";

import React from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/button";

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

const Links = [
  {
    path: "/Admin/dashboard",
    name: "Dashboard",
    icon: <MdDashboard size={25} />,
  },
  {
    path: "/Admin/advisor-settings",
    name: "Advisor Settings",
    icon: <IoSettingsOutline size={25} />,
  },
  {
    path: "/Admin/email",
    name: "Email",
    icon: <MdOutlineEmail size={25} />,
  },
  {
    path: "/Admin/email-templates",
    name: "Email Templates",
    icon: <MdOutlineEmail size={25} />,
  },
  {
    path: "/Admin/promo-codes",
    name: "Promo Codes",
    icon: <RiCoupon2Line size={25} />,
  },
  {
    path: "/Admin/word-telplates",
    name: "Word Telplates",
    icon: <FaRegFileWord size={25} />,
  },
  {
    path: "/Admin/superannuation",
    name: "Superannuation",
    icon: <RiMoneyDollarCircleLine size={25} />,
  },
  {
    path: "/Admin/subscription",
    name: "Subscription",
    icon: <MdOutlineSubscriptions size={25} />,
  },
  {
    path: "/Admin/payment-history",
    name: "Payment History",
    icon: <MdOutlinePayment size={25} />,
  },
  {
    path: "/Admin/notification",
    name: "Notification",
    icon: <IoNotificationsOutline size={25} />,
  },
];

const Nav = () => {
  const path = usePathname();

  return (
    <nav className="flex flex-col justify-between h-screen">
      <div className="">
        {Links.map((link, index) => {
          return (
            <div className="flex items-center gap-x-2 m-8 w-fit lg:w-[180px]">
              <Link href={link.path}>{link.icon}</Link>
              <Link
                href={link.path}
                key={index}
                className="hover:text-primary hidden lg:flex"
              >
                {link.name}
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
