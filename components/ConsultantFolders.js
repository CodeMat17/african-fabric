import Link from "next/link";
import { BiDotsVerticalRounded, BiSolidFolderOpen } from "react-icons/bi";

const ConsultantFolders = () => {
  return (
    <div className='pt-8 lg:px-8 lg:pt-4 lg:mt-4 pb-2 lg:pb-6 lg:bg-[#55c694]/5 lg:rounded-xl lg:overflow-hidden w-full lg:w-64 md:max-w-lg mx-auto'>
      <p className='font-medium mb-2'>Consultants</p>
      <div className='mt-2 flex lg:flex-col items-center gap-8'>
        <Link href='/dashboard/agents' className="w-full">
          <div className='bg-white p-4 rounded-xl w-full shadow-xl'>
            <div className='flex justify-between'>
              <BiSolidFolderOpen className='text-6xl text-[#55c694]' />
              <BiDotsVerticalRounded className='text-lg' />
            </div>
            <div className='pl-1 text-sm flex items-center gap-4'>
              <p>Agents</p>
              <p>5</p>
            </div>
          </div>
        </Link>
        <Link href='/dashboard/tailors' className="w-full">
          <div className=' bg-white p-4 rounded-xl w-full shadow-xl'>
            <div className='flex justify-between'>
              <BiSolidFolderOpen className='text-6xl text-[#55c694]' />
              <BiDotsVerticalRounded className='text-lg' />
            </div>
            <div className='pl-1 text-sm flex items-center gap-8'>
              <p>Tailors</p>
              <p>8</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ConsultantFolders;
