import { FaUserTie } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { IoShirtSharp } from "react-icons/io5";
import {PiCrown} from 'react-icons/pi'

const SettingsPage = () => {
  return (
    <div className='p-8 w-full'>
      <h1 className='text-center text-xl font-medium'>Admin Dashboard</h1>

      <div className='py-6 grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 sm:max-w-sm lg:max-w-xl mx-auto'>
        <div className='text-center border rounded-xl p-4 shadow-md cursor-pointer'>
          <div className='flex items-center justify-center'>
            <FaUsersGear className='text-5xl text-[#55c694]' />
          </div>
          <p className='mt-3'>Update customer info and order</p>
        </div>
        <div className='text-center border rounded-xl p-4 shadow-md cursor-pointer'>
          <div className='flex items-center justify-center'>
            <FaUserTie className='text-5xl text-[#55c694]' />
          </div>
          <p className='mt-3'>Update agents info</p>
        </div>
        <div className='text-center border rounded-xl p-4 shadow-md cursor-pointer'>
          <div className='flex items-center justify-center'>
            <IoShirtSharp className='text-5xl text-[#55c694]' />
          </div>
          <p className='mt-3'>Update tailors info</p>
        </div>
        <div className='text-center border rounded-xl p-4 shadow-md cursor-pointer'>
          <div className='flex items-center justify-center'>
            <PiCrown className='text-5xl text-[#55c694]' />
          </div>
          <p className='mt-3'>Super Admin</p>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
