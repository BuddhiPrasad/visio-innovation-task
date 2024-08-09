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
    path: "/admin/dashboard",
    name: "Dashboard",
    icon: <MdDashboard size={25} />,
  },
  {
    path: "/admin/advisor-settings",
    name: "Advisor Settings",
    icon: <IoSettingsOutline size={25} />,
  },
  {
    path: "/admin/email",
    name: "Email",
    icon: <LiaMailBulkSolid size={25} />,
  },
  {
    path: "/admin/email-templates",
    name: "Email Templates",
    icon: <MdOutlineEmail size={25} />,
  },
  {
    path: "/admin/promo-codes",
    name: "Promo Codes",
    icon: <RiCoupon2Line size={25} />,
  },
  {
    path: "/admin/word-telplates",
    name: "Word Telplates",
    icon: <FaRegFileWord size={25} />,
  },
  {
    path: "/admin/superannuation",
    name: "Superannuation",
    icon: <RiMoneyDollarCircleLine size={25} />,
  },
  {
    path: "/admin/subscription",
    name: "Subscription",
    icon: <MdOutlineSubscriptions size={25} />,
  },
  {
    path: "/admin/payment-history",
    name: "Payment History",
    icon: <MdOutlinePayment size={25} />,
  },
  {
    path: "/admin/notification",
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
            <div
              className="flex items-center gap-x-2 m-8 w-fit lg:w-[180px]"
              key={index}
            >
              <Link href={link.path}>{link.icon}</Link>
              <Link
                href={link.path}
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
