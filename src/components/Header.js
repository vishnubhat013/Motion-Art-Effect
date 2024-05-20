import React from 'react'

function Header() {
  const handleClick = () => {
    window.location.href = 'https://codecanyon.net/checkout/102316867/create_account?_ga=2.43125925.1669195575.1716209776-1129150054.1713500484';
  };
  return (
    
    <div className="flex  justify-between items-center px-4 bg-[#262626] fixed w-full ">
            <a className="flex justify-start" href="/">
                <img src="motionarteffect-img2.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
                <span className="self-center sm:text-xl text-xl font-semibold whitespace-nowrap dark:text-white">envato</span>
                <span className="self-center sm:text-xl text-xl font-semibold whitespace-nowrap text-[#6b913b]">market</span>
            </a>
            <div className=" mt-2 flex items-center lg:order-2">
            <button type="button" onclick={handleClick} className=" justify-end text-white bg-[#7aa93c] font-medium rounded-md text-sm px-4 py-1.5 me-2 mb-2 ">Buy Now</button>
            </div>
        </div>
  )
}

export default Header
