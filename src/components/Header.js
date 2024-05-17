import React from 'react'

function Header() {
  return (
    <header>
    <nav className="bg-[#262626] ">
        <div class="flex flex-wrap justify-between items-center mx-auto px-4">
            <a class="flex justify-start">
                <img src="motionarteffect-img2.png" class="mr-3 h-6 sm:h-9" alt="Logo" />
                <span class="self-center sm:text-xl  font-semibold whitespace-nowrap dark:text-white">envato</span>
                <span class="self-center sm:text-xl text-xl font-semibold whitespace-nowrap text-[#6b913b]">Market</span>
            </a>
            <div class=" mt-2 flex items-center lg:order-2">
            <button type="button"  class=" justify-end text-white bg-[#7aa93c] font-medium rounded-md text-sm px-4 py-1.5 me-2 mb-2 ">Buy Now</button>
            </div>
        </div>
    </nav>
</header>
  )
}

export default Header
