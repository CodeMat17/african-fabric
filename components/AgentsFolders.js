import Link from "next/link";
import { BiDotsVerticalRounded, BiSolidFolderOpen } from "react-icons/bi";

const ConsultantFolders = () => {
  return (
    <div className='pt-8 lg:px-8 lg:pt-4 lg:mt-4 pb-2 lg:pb-6 lg:bg-[#55c694]/5 lg:rounded-xl lg:overflow-hidden w-full lg:w-64 md:max-w-lg mx-auto'>
      <p className='font-medium mb-2'>Agents</p>
      <div className='mt-2 flex lg:flex-col items-center gap-8'>
        <div className='w-full'>
          <p className='text-sm text-gray-500 mb-2'>Consultants</p>

          <Link href='/dashboard/agents'>
            <div className='bg-whit px-4 py-7 rounded-xl w-full shadow-xl'>
              <div className='flex justify-between'>
                <div className='relative'>
                  <BiSolidFolderOpen className='text-6xl text-[#55c694]' />
                  <p className='absolute -right-1 -bottom-3 text-white bg-[#55c694] rounded-full px-2 border-2 border-white'>
                    8
                  </p>
                </div>

                <BiDotsVerticalRounded className='text-lg' />
              </div>
            </div>
          </Link>
        </div>

        <div className='w-full'>
          <p className='text-sm text-gray-500 mb-2'>Tailors</p>

          <Link href='/dashboard/tailors' className='w-full'>
            <div className=' bg-white px-4 py-7 rounded-xl w-full shadow-xl'>
              <div className='flex justify-between'>
                <div className='relative'>
                  <BiSolidFolderOpen className='text-6xl text-[#55c694]' />
                  <p className='absolute -right-1 -bottom-3 text-white bg-[#55c694] rounded-full px-2 border-2 border-white'>
                    8
                  </p>
                </div>
                <BiDotsVerticalRounded className='text-lg' />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConsultantFolders;
