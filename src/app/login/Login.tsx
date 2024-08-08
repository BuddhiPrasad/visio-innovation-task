import React from 'react'

import { CiLogin } from "react-icons/ci";
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';


const path = '/Admin/dashboard';



const Login = () => {
  return (
    <section className='flex flex-col items-center justify-center bg-blue-100 h-screen '>

      <div className='flex items-center justify-center container mx-auto'>

        <div className='bg-white p-8 rounded-2xl'>
          {/**=text */}
          <div className='mb-4'>
            <h1 className='h1 text-center mb-8'>My Finance</h1>
            <h2 className='h2 text-center mb-4'>Hi, Welcome Back</h2>
            <p className='text-muted-foreground text-center'>Enter your credentials to continue</p>
          </div>

          {/*input box */}
          <div className='flex flex-col gap-y-4 mb-4'>
            
            {/*Email input */}
            <div>
              <Input type="email" placeholder="Email Address/ Username" />
              <p className='text-[11px] text-red-600 ml-1'>Email is required</p>
            </div>
            {/*password input */}  
            <div>
              <Input type="password" placeholder="Password" />
              <p className='text-[11px] text-red-600 ml-1'>Password is required</p>
            </div>
              
          </div>

          {/*checkbox */}
          <div className='flex gap-x-2 items-center mb-8'>
            <Checkbox id="checkbox1" />
            <label className='text-[12px] text-muted-foreground '>Remember me</label>
          </div>

          {/*button */}
          <Button asChild className='w-full'>
            <Link href="/Admin/dashboard">Login <span className='pl-2'><CiLogin size={25}/></span> </Link>
          </Button>
        </div>
      </div>
      
    </section>
  )
}

export default Login
