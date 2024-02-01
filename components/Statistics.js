import CircularProgressBar from "@/components/CircularProgessBar";
import Link from "next/link";

const Statistics = ({ total, ready }) => {
  return (
    <div className='w-full md:max-w-lg lg:w-full mx-auto pt-4 flex items-center justify-center flex-col md:flex-row gap-4'>
      <div className=' py-3 mx-auto md:py-0 grid grid-cols-3 md:grid-cols-1 gap-2 sm:gap-8'>
        <Link href='/dashboard/orders'>
          <div className='relative bg-[#55c694] text-white p-3 rounded-2xl shadow-xl'>
            <div className='flex items-center justify-between gap-3 '>
              {/* <p className='font-semibold'>COs</p> */}
              <div className='absolute -top-4 right-1 text-[#55c694] bg-white shadow-md border text-sm font-semibold p-2 rounded-xl'>
                {total}
              </div>
            </div>
            <p className='pt-4 text-sm sm:text-md'>Current Orders</p>
          </div>
        </Link>
        <Link href='/dashboard/completed-jobs'>
          <div className='relative bg-[#55c694] text-white p-3 rounded-2xl shadow-xl'>
            <div className='flex items-center justify-between gap-3 '>
              {/* <p className='font-semibold'>CJs</p> */}
              <div className='absolute -top-4 right-1 text-[#55c694] bg-white shadow-md border text-sm font-semibold p-2 rounded-xl'>
                {ready}
              </div>
            </div>
            <p className='pt-4 text-sm sm:text-md'>Completed Jobs</p>
          </div>
        </Link>
        <Link href='/dashboard/pending-jobs'>
          <div className='relative bg-[#55c694] text-white p-3 rounded-2xl shadow-xl'>
            <div className='flex items-center justify-between gap-3 '>
              {/* <p className='font-semibold'>PJs</p> */}
              <div className='absolute -top-4 right-1 text-[#55c694] bg-white shadow-md border text-sm font-semibold p-2 rounded-xl'>
                {total - ready}
              </div>
            </div>
            <p className='pt-4 text-sm sm:text-md'>Pending Jobs</p>
          </div>
        </Link>
      </div>
      <div className='w-full max-w-xs mx-auto'>
        <CircularProgressBar total={total} ready={ready} />
      </div>
    </div>
  );
};

export default Statistics;
