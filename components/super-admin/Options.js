"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaUserTie } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { IoShirtSharp } from "react-icons/io5";
import { PiCrown } from "react-icons/pi";

const Options = () => {
  const router = useRouter();
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div>
      {!showOptions ? (
        <div className='flex justify-center pt-12'>
          <button
            onClick={() => setShowOptions(true)}
            className='flex flex-col justify-center items-center px-12 py-3 border rounded-2xl shadow-md'>
            <PiCrown className='text-5xl text-[#55c694]' />
            <p>Super Admin</p>
          </button>
        </div>
      ) : (
        <div className='py-20 w-full max-w-xs lg:max-w-lg mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          <button
            onClick={() => router.push("/dashboard/update-customer-info")}
            className='border rounded-xl shadow-md p-6 flex flex-col items-center justify-center'>
            <FaUsersGear className='text-3xl text-[#55c694]' />
            <p className='mt-3 text-sm w-[110px] text-center'>
              Update customer info and order
            </p>
          </button>

          <button
            onClick={() => router.push("/dashboard/tailors")}
            className='border rounded-xl shadow-md p-6 flex flex-col items-center justify-center'>
            <IoShirtSharp className='text-3xl text-[#55c694]' />
            <p className='mt-3 text-sm w-[110px] text-center'>
              Update tailors data
            </p>
          </button>

          <button className='border rounded-xl shadow-md p-6 flex flex-col items-center justify-center'>
            <FaUserTie className='text-3xl text-[#55c694]' />
            <p className='mt-3 text-sm w-[110px] text-center'>
              Update consultants data
            </p>
          </button>
        </div>
      )}
    </div>
  );
};

export default Options;
