import { AiOutlineLoading } from "react-icons/ai";

const JobProgressBar = ({ value, sewing, qc_checked, ready }) => {
  return (
    <div className='w-full py-6 max-w-xs mx-auto'>
      <p className='text-sm text-center mb-1'>Job Progress Status</p>
      {/* <div className='transition-all transform duration-700 relative mb-5 h-5 rounded-full bg-gray-200'>
        <div
          className={`transition transform duration-700 h-5 rounded-full bg-[#D76F30] w-${value}`}></div>
        <span className='absolute inset-0 flex items-center justify-center text-xs font-medium text-gray-900'>
          {value}%
          <span className='flex justify-between'>
            <span>Started</span>
            <span>Started</span>
            <span>Started</span>
            <span>Started</span>
          </span>
        </span>
        <div className='mb-2 flex items-center justify-between text-xs'>
          <div className='text-gray-600'>Started</div>
          <div className='text-gray-600'>Done</div>
        </div>
      </div> */}

      <div className='relative pt-2'>
        <div className='mb-1 flex h-9 overflow-hidden rounded-full bg-gray-200 text-xs'>
          <div className='w-[25%] flex flex-col justify-center bg-[#55c694] text-white '>
            <span className='text-center'>Received</span>
          </div>
          {sewing ? (
            <div className='w-[25%] flex flex-col justify-center bg-[#55c694] text-white '>
              <span className='text-center'>Sewing</span>
            </div>
          ) : (
            <div className='w-[25%] flex items-center justify-center'>
              <AiOutlineLoading className='animate-spin' />
            </div>
          )}
          {qc_checked ? (
            <div className='w-[25%] flex flex-col justify-center bg-[#55c694] text-white'>
              <span className='text-center'>QC checked</span>
            </div>
          ) : (
            <div className='w-[25%] flex items-center justify-center'>
              <AiOutlineLoading className='animate-spin' />
            </div>
          )}
          {ready ? (
            <div className='w-[25%] flex flex-col justify-center bg-[#55c694] text-white'>
              <span className='text-center'>Ready</span>
            </div>
          ) : (
            <div className='w-[25%] flex items-center justify-center'>
              <AiOutlineLoading className='animate-spin' />
            </div>
          )}
        </div>
        <div className='mb-2 flex items-center justify-between text-xs'>
          <div className='text-gray-600'>Progress</div>
          <div className='text-gray-600'>Done</div>
        </div>
      </div>
    </div>
  );
};

export default JobProgressBar;
