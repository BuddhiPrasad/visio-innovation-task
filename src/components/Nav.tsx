"use client"

import React from 'react'

import { usePathname } from "next/navigation";
import Link from 'next/link';
import { Button } from './ui/button';


import { CiLogout } from "react-icons/ci";


import { MdDashboard } from "react-icons/md";


const Links = [
    {
      path: '/Admin/dashboard', 
      name:'Dashboard',
      icon: <MdDashboard size={25}/>,
    },
    {
      path: '/Admin/advisor-settings', 
      name:'Advisor Settings',
      icon: <MdDashboard size={25}/>,
    },
    {
      path: '/Admin/email', 
      name:'Email',
      icon: <MdDashboard size={25}/>,
    },
    {
      path: '/Admin/email-templates', 
      name:'Email Templates',
      icon: <MdDashboard size={25}/>,
    },
    {
      path: '/Admin/promo-codes', 
      name:'Promo Codes',
      icon: <MdDashboard size={25}/>,
    },
    {
      path: '/Admin/word-telplates', 
      name:'Word Telplates',
      icon: <MdDashboard size={25}/>,
    },
    {
      path: '/Admin/superannuation', 
      name:'Superannuation',
      icon: <MdDashboard size={25}/>,
    },
    {
      path: '/Admin/subscription', 
      name:'Subscription',
      icon: <MdDashboard size={25}/>,
    },
    {
      path: '/Admin/payment-history', 
      name:'Payment History',
      icon: <MdDashboard size={25}/>,
    },
    {
      path: '/Admin/notification', 
      name:'Notification',
      icon: <MdDashboard size={25}/>,
    },
];

const Nav = () => {

  const path = usePathname();
  
  return (
    <nav className='flex flex-col justify-between h-screen bg-green-300'>

      <div className=' bg-pink-200'>
        {Links.map((link, index)=>{
          return <div className='flex items-center gap-x-2 m-8 w-fit lg:w-[180px]'>
              <span>{link.icon}</span>
              <Link href={link.path} key={index} className='hover:text-primary hidden lg:flex'>{link.name}</Link>
          </div> 
        })}
      </div>

    </nav>
  )
}

export default Nav
