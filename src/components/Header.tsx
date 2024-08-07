import React from 'react'
import Logo from './Logo'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

import { IoNotificationsOutline, IoSettingsOutline  } from "react-icons/io5";
import { ThemeToggle } from './theme-toggler';


const Header = () => {
  return (
    <div className='p-6'>

      <div className='flex items-center justify-between'> 
        {/*Logo */}
          <div>
            <Logo/>
          </div>

        {/*avater, notification, themetoheller */}
          <div className='flex gap-x-4 items-center'>

            {/*notification icon */}
            <div className='bg-secondary border border-border p-1 rounded-xl w-[40px] h-[40px] flex items-center justify-center'>
              <IoNotificationsOutline size={25}/>
            </div>
            
            {/*Avater */}
              <div>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>

            {/*setting icon */}
              <div>
                <IoSettingsOutline size={25}/>
              </div>  

            {/*ThemeTohggler */}
            <ThemeToggle/>
            
          </div>
      </div>

      
      
    </div>
  )
}

export default Header
