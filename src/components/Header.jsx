import React from 'react'

function Header() {
 
  const handleClick = () => {
    const url = 'https://codecanyon.net/checkout/102316867/create_account?_ga=2.43125925.1669195575.1716209776-1129150054.1713500484';
    
    window.open(url,'noopener,noreferrer');
  };
  return (
    
    <div className="flex  justify-between items-center px-4 bg-[#262626] fixed w-full ">
            <a className="flex justify-start" href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891?_gl=1*ks7k65*_gcl_au*MTI4NTA1Mzc1OC4xNzEzNTAwNDg1*_ga*MTEyOTE1MDA1NC4xNzEzNTAwNDg0*_ga_ZKBVC1X78F*MTcxNjI2NDU2NS4xNi4xLjE3MTYyNjQ2NjcuMC4wLjA.&_ga=2.119619720.1669195575.1716209776-1129150054.1713500484">
                <img src="/envato-logo.svg" className="mr-3 sm:h-4 h-3" alt="Logo" />
                {/* <span className="self-center sm:text-2xl text-xl whitespace-nowrap dark:text-white outfit">envato</span>
                <span className="self-center sm:text-2xl text-xl  whitespace-nowrap text-[#6b913b] outfit-thin">market</span> */}
            </a>
            <div className=" mt-2 flex items-center lg:order-2">
            <button type="button" onClick={handleClick} className=" justify-end text-white bg-[#7aa93c] font-medium rounded-md text-sm px-4 py-1.5 me-2 mb-2 ">Buy Now</button>
            </div>
        </div>
  )
}

export default Header
