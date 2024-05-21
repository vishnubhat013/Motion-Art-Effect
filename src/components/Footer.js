import React from 'react'
import { FaRegCopyright } from "react-icons/fa6";
function Footer() {
  return (
    
    
    <>
      <div className="bg-gradient-to-r flex md:flex-row-reverse flex-col gap-2 justify-center md:justify-between items-center from-[#f87516] to-[90%] font-semibold to-[#5e11ff] py-4 px-4 md:px-16 text-xs md:text-base w-full">
        <div className='flex gap-6 justify-between'>
        <p className="text-[#b3acc5]">Documentation</p>
          <p className="text-[#b3acc5] ">  support</p>
        </div>
          <p  className="text-[#b3acc5] items-center text-center">© 2023 Copywrite. All rights reserved by QodeMatrix</p>
          
    </div>

    </>
   
  )
}

export default Footer
