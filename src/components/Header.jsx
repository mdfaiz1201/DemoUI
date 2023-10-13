import React from 'react'
import {Search} from './'

const Header = () => {
  return (
      <header className='flex items-center justify-between'>
         <p className='font-semibold'>Hello Shahrukh 👋,</p>
         <Search color='bg-white' width='md:w-52'/>
      </header>
  )
}

export default Header