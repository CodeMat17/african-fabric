"use client";

import { Menu, Transition } from "@headlessui/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Fragment } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { FaPowerOff } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { ImManWoman } from "react-icons/im";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineClose, MdOutlineNotificationsActive } from "react-icons/md";
import { PiGearFill } from "react-icons/pi";
import { TbShoppingBagCheck } from "react-icons/tb";

const MobileMenu = () => {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const pathname = usePathname();

  const signoutFn = async () => {
    // Check if we have a session
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (session) {
      await supabase.auth.signOut();
    }

    router.push("/");
  };

  return (
    <div className='md:hidden'>
      <Menu as='div' className='relative inline-block text-left'>
        {({ open }) => (
          <>
            <Menu.Button
              aria-label='toggle mobile menu'
              className={`text-4xl transition transform duration-500 inline-flex w-full justify-center rounded-md bg-[#55c694]/20 p-2 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 ${
                open ? "rotate-[360deg] text-red-700" : "text-[#55c694]"
              }`}>
              {open ? (
                <MdOutlineClose
                  aria-hidden='true'
                  aria-label='mobile close button'
                />
              ) : (
                <BiMenuAltRight
                  aria-hidden='true'
                  aria-label='mobile menu button'
                />
              )}
            </Menu.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-300'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-100'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-100'>
              <Menu.Items className='absolute right-0 mt-2 w-[70px] origin-top-right divide-y divide-gray-100 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                <div className='px-2 py-3 flex flex-col gap-4'>
                  <Menu.Item as={Fragment}>
                    <Link
                      href='/dashboard'
                      className={` flex justify-center py-2.5 rounded-full ${
                        pathname === "/dashboard"
                          ? "bg-[#6BB77B] text-white"
                          : "bg-white text-gray-500"
                      }`}>
                      <LuLayoutDashboard className='text-3xl' />
                    </Link>
                  </Menu.Item>

                  <Menu.Item as={Fragment}>
                    <Link
                      href='/dashboard/orders'
                      className={` flex justify-center py-2.5 rounded-full ${
                        pathname.includes("/dashboard/orders")
                          ? "bg-[#6BB77B] text-white"
                          : "bg-white text-gray-500"
                      }`}>
                      <TbShoppingBagCheck className='text-3xl' />
                    </Link>
                  </Menu.Item>

                  <Menu.Item as={Fragment}>
                    <Link
                      href='/dashboard/notifications'
                      className={` flex justify-center py-2.5 rounded-full ${
                        pathname.includes("/dashboard/notifications")
                          ? "bg-[#6BB77B] text-white"
                          : "bg-white text-gray-500"
                      }`}>
                      <MdOutlineNotificationsActive className='text-3xl' />
                    </Link>
                  </Menu.Item>

                  {/* <Menu.Item as={Fragment}>
                    <Link
                      href='/dashboard/new-order'
                      className={` flex justify-center py-2.5 rounded-full ${
                        pathname.includes("/dashboard/new-order")
                          ? "bg-[#6BB77B] text-white"
                          : "bg-white text-gray-500"
                      }`}>
                      <TbShoppingBagPlus className='text-3xl' />
                    </Link>
                  </Menu.Item> */}

                  <Menu.Item as={Fragment}>
                    <Link
                      href='/dashboard/consultants'
                      className={` flex justify-center py-2.5 rounded-full ${
                        pathname.includes("/dashboard/consultants")
                          ? "bg-[#6BB77B] text-white"
                          : "bg-white text-gray-500"
                      }`}>
                      <ImManWoman className='text-3xl' />
                    </Link>
                  </Menu.Item>

                  <Menu.Item as={Fragment}>
                    <Link
                      href='/dashboard/tailors'
                      className={` flex justify-center py-2.5 rounded-full ${
                        pathname.includes("/dashboard/tailors")
                          ? "bg-[#6BB77B] text-white"
                          : "bg-white text-gray-500"
                      }`}>
                      <GiClothes className='text-3xl' />
                    </Link>
                  </Menu.Item>

                  <Menu.Item as={Fragment}>
                    <Link
                      href='/dashboard/admin'
                      className={` flex justify-center py-2.5 rounded-full ${
                        pathname.includes("/dashboard/admin")
                          ? "bg-[#6BB77B] text-white"
                          : "bg-white text-gray-500"
                      }`}>
                      <PiGearFill className='text-3xl' />
                    </Link>
                  </Menu.Item>

                  <Menu.Item as={Fragment}>
                    <button
                      onClick={signoutFn}
                      className={`flex justify-center py-2.5 rounded-full `}>
                      <FaPowerOff className='text-2xl text-red-600' />
                    </button>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
};

export default MobileMenu;
