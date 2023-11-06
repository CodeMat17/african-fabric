"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPowerOff } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { ImManWoman } from "react-icons/im";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiGearFill } from "react-icons/pi";
import { TbShoppingBagCheck, TbShoppingBagPlus } from "react-icons/tb";

const Nav = () => {
  const pathname = usePathname();

  return (
    <aside className='fixed top-0 left-0 h-screen hidden md:flex transition-all transform duration-500'>
      <div className='relative w-[265px] bg-[#55c694] rounded-r-3xl h-screen flex items-center'>
        <div className='absolute -left-[78px] -rotate-90 font-semibold whitespace-nowrap bg-white text-[#55c694]  px-2 py-1 rounded-lg shadow-md'>
          African Fabric and Designs
        </div>
        <div className='ml-10 flex-grow h-screen rounded-3xl overflow-hidden bg-white shadow-md'>
          <div className='relative aspect-video w-full rounded-xl overflow-hidden flex items-center justify-center'>
            <Image alt='logo' fill priority src='/logo3.webp' />
          </div>
          <nav className=' w-full transition-all duration-500 pt-4 px-6 flex flex-col items-center gap-4'>
            <Link
              href='/dashboard'
              className={`w-full flex items-center gap-3 p-2 rounded-l-xl text-lg font-medium md:rounded-xl hover:bg-black/5 hover:text-gray-500 transition-all duration-500 ${
                pathname === "/dashboard"
                  ? "shadow-md bg-[#55c694] text-white"
                  : "text-gray-700"
              }`}>
              <LuLayoutDashboard className='text-xl' />
              <span>Dashboard</span>
            </Link>

            <Link
              href='/dashboard/orders'
              className={`w-full flex items-center gap-3 p-2 rounded-l-xl text-lg font-medium md:rounded-xl hover:bg-black/5 hover:text-gray-500 transition-all duration-500 ${
                pathname.includes("/dashboard/orders")
                  ? "shadow-md bg-[#55c694] text-white"
                  : "text-gray-700"
              }`}>
              <TbShoppingBagCheck className='text-2xl' />
              <span>Orders</span>
            </Link>

            {/* <Link
              href='/dashboard/new-order'
              className={`w-full flex items-center gap-3 p-2 rounded-l-xl text-lg font-medium md:rounded-xl hover:bg-black/5 hover:text-gray-500 transition-all duration-500 ${
                pathname.includes("/dashboard/new-order")
                  ? "shadow-md bg-[#55c694] text-white"
                  : "text-gray-700"
              }`}>
              <TbShoppingBagPlus className='text-2xl' />
              <span>New Other</span>
            </Link> */}

            <Link
              href='/dashboard/agents'
              className={`w-full flex items-center gap-3 p-2 rounded-l-xl text-lg font-medium md:rounded-xl hover:bg-black/5 hover:text-gray-500 transition-all duration-500 ${
                pathname.includes("/dashboard/agents")
                  ? "shadow-md bg-[#55c694] text-white"
                  : "text-gray-700"
              }`}>
              <ImManWoman className='text-2xl' />
              <span>Agents</span>
            </Link>

            <Link
              href='/dashboard/tailors'
              className={`w-full flex items-center gap-3 p-2 rounded-l-xl text-lg font-medium md:rounded-xl hover:bg-black/5 hover:text-gray-500 transition-all duration-500 ${
                pathname.includes("/dashboard/tailors")
                  ? "shadow-md bg-[#55c694] text-white"
                  : "text-gray-700"
              }`}>
              <GiClothes className='text-2xl' />
              <span>Tailors</span>
            </Link>

            <Link
              href='/dashboard/admin'
              className={`w-full flex items-center gap-3 p-2 rounded-l-xl text-lg font-medium md:rounded-xl hover:bg-black/5 hover:text-gray-500 transition-all duration-500 ${
                pathname.includes("/dashboard/admin")
                  ? "shadow-md bg-[#55c694] text-white"
                  : "text-gray-700"
              }`}>
              <PiGearFill className='text-2xl' />
              <span>Admin</span>
            </Link>
            <button
              className={`w-full flex items-center gap-3 p-2 rounded-xl text-lg bg-red-800/5 text-red-600 font-medium transition-all duration-500 `}>
              <FaPowerOff className='text-xl' />
              <span>Logout</span>
            </button>
          </nav>
        </div>
      </div>
    </aside>
    // <aside
    //   className={`fixed top-0 left-0 w-[240px] h-screen hidden md:flex md:flex-col md:items-center transition-all transform duration-500 px-6 bg-[#55c694] text-black`}>

    //     <div className=' ml-20 bg-white h-screen rounded-3xl overflow-hidden'>
    //       <div className='relative aspect-video w-48 rounded-xl overflow-hidden flex items-center justify-center'>
    //         <Image alt='logo' fill priority src='/logo3.webp' />
    //       </div>

    //       <nav className=' w-full transition-all duration-500 pt-12 px-6 flex flex-col items-center gap-4'>
    //         <Link
    //           href='/dashboard'
    //           className={`w-full flex items-center gap-1 py-3 pl-6 pr-3 rounded-l-xl text-lg font-medium md:rounded-xl hover:bg-black/5 hover:text-gray-500 transition-all duration-500 ${
    //             pathname === "/dashboard"
    //               ? "shadow-md bg-[#55c694] text-white"
    //               : "text-gray-700"
    //           }`}>
    //           <LuLayoutDashboard className='text-xl' />
    //           <span>Dashboard</span>
    //         </Link>

    //         <Link
    //           href='/dashboard/customers'
    //           className={`w-full flex items-center gap-1 py-3 pl-6 pr-3 rounded-l-xl text-lg font-medium md:rounded-xl hover:bg-black/5 hover:text-gray-500 transition-all duration-500 ${
    //             pathname.includes("/dashboard/customers")
    //               ? "shadow-md bg-[#55c694] text-white"
    //               : "text-gray-700"
    //           }`}>
    //           <IoIosPeople className='text-2xl' />
    //           <span>Customers</span>
    //         </Link>
    //         <Link
    //           href='/dashboard/orders'
    //           className={`w-full flex items-center gap-1 py-3 pl-6 pr-3 rounded-l-xl text-lg font-medium md:rounded-xl hover:bg-black/5 hover:text-gray-500 transition-all duration-500 ${
    //             pathname.includes("/dashboard/orders")
    //               ? "shadow-md bg-[#55c694] text-white"
    //               : "text-gray-700"
    //           }`}>
    //           <TbShoppingBagCheck className='text-2xl' />
    //           <span>Orders</span>
    //         </Link>
    //         <Link
    //           href='/dashboard/settings'
    //           className={`w-full flex items-center gap-1 py-3 pl-6 pr-3 rounded-l-xl text-lg font-medium md:rounded-xl hover:bg-black/5 hover:text-gray-500 transition-all duration-500 ${
    //             pathname.includes("/dashboard/settings")
    //               ? "shadow-md bg-[#55c694] text-white"
    //               : "text-gray-700"
    //           }`}>
    //           <PiGearFill className='text-2xl' />
    //           <span>Settings</span>
    //         </Link>
    //         <button
    //           className={`w-full flex items-center gap-1 py-3 pl-6 pr-3 rounded-xl text-lg bg-red-800/20 text-red-700 font-medium transition-all duration-500 `}>
    //           <FaPowerOff className='text-xl' />
    //           <span>Logout</span>
    //         </button>
    //       </nav>
    //     </div>

    // </aside>
  );
};

export default Nav;
