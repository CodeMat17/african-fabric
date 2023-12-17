import Link from "next/link";
import { BiDotsVerticalRounded, BiSolidFolderOpen } from "react-icons/bi";

const ConsultantFolders = ({ noOfConsultants, noOfTailors, noOfBeaders }) => {
  return (
    <div className='pt-8 lg:px-8 lg:pt-4 lg:mt-4 pb-2 lg:pb-6 lg:bg-[#55c694]/5 lg:rounded-xl lg:overflow-hidden w-full lg:w-64 md:max-w-lg mx-auto'>
      <p className='font-medium mb-2'>Agents</p>
      <div className='mt-2 flex lg:flex-col items-center gap-2'>
        <Link
          href='/dashboard/consultants'
          className='w-[33.3%]   sm:w-[150px] '>
          <div className=' bg-white p-3 rounded-xl w-full shadow-xl'>
            <p className='text-sm'>Consultants</p>

            <div className='relative w-[60px]'>
              <BiSolidFolderOpen className='text-6xl text-[#55c694]' />
              <p className='absolute -bottom-2 -right-2 text-white bg-[#55c694] rounded-full px-2 border-2 border-white'>
                {noOfConsultants}
              </p>
            </div>
          </div>
        </Link>

        <Link href='/dashboard/tailors' className='w-[33.3%] sm:w-[150px]  '>
          <div className=' bg-white p-3 rounded-xl w-full shadow-xl'>
            <p className='text-sm'>Tailors</p>

            <div className='relative w-[60px]'>
              <BiSolidFolderOpen className='text-6xl text-[#55c694]' />
              <p className='absolute -bottom-2 -right-2 text-white bg-[#55c694] rounded-full px-2 border-2 border-white'>
                {noOfTailors}
              </p>
            </div>
          </div>
        </Link>

        <Link href='/dashboard/beaders' className='w-[33.3%]  sm:w-[150px] '>
          <div className=' bg-white p-3 rounded-xl w-full shadow-xl'>
            <p className='text-sm'>Beaders</p>

            <div className='relative w-[60px]'>
              <BiSolidFolderOpen className='text-6xl text-[#55c694]' />
              <p className='absolute -bottom-2 -right-2 text-white bg-[#55c694] rounded-full px-2 border-2 border-white'>
                {noOfBeaders}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ConsultantFolders;
