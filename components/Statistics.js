import CircularProgressBar from '@/components/CircularProgessBar'

const Statistics = () => {
  const totalCustomers = 1000;
  const completedJobs = 600;
  const pendingJobs = 30;
  const data = [totalCustomers, completedJobs, pendingJobs];

  return (
    <div className='w-full md:max-w-lg lg:w-full mx-auto pt-4 flex items-center justify-center flex-col md:flex-row gap-4'>
      <div className=' py-3 mx-auto md:py-0 grid grid-cols-3 md:grid-cols-1 gap-2 sm:gap-8'>
        <div className='relative bg-[#55c694] text-white p-3 rounded-2xl shadow-xl'>
          <div className='flex items-center justify-between gap-3 '>
            {/* <p className='font-semibold'>COs</p> */}
            <div className='absolute -top-4 right-1 text-[#55c694] bg-white shadow-md border text-sm font-semibold px-1 py-2 rounded-xl'>
              1000
            </div>
          </div>
          <p className='pt-4'>Current Orders</p>
        </div>
        <div className='relative bg-[#55c694] text-white p-3 rounded-2xl shadow-xl'>
          <div className='flex items-center justify-between gap-3 '>
            {/* <p className='font-semibold'>CJs</p> */}
            <div className='absolute -top-4 right-1 text-[#55c694] bg-white shadow-md border text-sm font-semibold px-1 py-2 rounded-xl'>
              800
            </div>
          </div>
          <p className='pt-4'>Completed Jobs</p>
        </div>
        <div className='relative bg-[#55c694] text-white p-3 rounded-2xl shadow-xl'>
          <div className='flex items-center justify-between gap-3 '>
            {/* <p className='font-semibold'>PJs</p> */}
            <div className='absolute -top-4 right-1 text-[#55c694] bg-white shadow-md border text-sm font-semibold px-1 py-2 rounded-xl'>
              200
            </div>
          </div>
          <p className='pt-4'>Pending Jobs</p>
        </div>
      </div>
      <div className='w-full max-w-xs mx-auto'>
        <CircularProgressBar />
      </div>
    </div>
  );
};

export default Statistics;
