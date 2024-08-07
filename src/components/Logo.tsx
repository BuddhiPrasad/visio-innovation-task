import Link from 'next/link';
import React from 'react'

const Logo = () => {
  return (<Link href='/'>
        My<span className='text-primary font-bold'>Finance.</span>
    </Link>
  )
}

export default Logo
