import React from 'react'
import { FaCircle } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className='flex items-center gap-5 text-2xl'>
        <FaCircle className='text-[#ed564e]'/>
        <FaCircle className='text-[#efb339]'/>
        <FaCircle className='text-[#26c53d]'/>
    </nav>
  )
}

export default Navbar