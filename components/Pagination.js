"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Pagination = ({ count }) => {
  const router = useRouter();
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(9);
  const noOfPages = Math.ceil(count / 9);

  const handlePrevClick = () => {
    if (start > 0) {
      setStart(start - 9);
      setEnd(end - 9);
      router.push(`/dashboard/orders?start=${start - 5}&end=${end - 5}`);
    }
  };

  const handleNextClick = () => {
    if (end < count) {
      setStart(start + 9);
      setEnd(end + 9);
      router.push(`/dashboard/orders?start=${start + 5}&end=${end + 5}`);
    }
  };

  return (
    <div className='p-2 bg-green-100 flex items-center justify-between text-sm font-medium'>
      <p className='text-[#55c694]'>
        {noOfPages} <span>page{noOfPages > 1 && <span>s</span>} </span>
      </p>
      <div className='flex items-center gap-x-6'>
        <button
          onClick={handlePrevClick}
          disabled={start === 0}
          className='tracking-wider bg-[#55c694] text-white px-4 py-2 rounded-xl disabled:opacity-30 disabled:cursor-not-allowed'>
          PREV
        </button>

        <button
          onClick={handleNextClick}
          disabled={end >= count}
          className='tracking-wider bg-[#55c694] text-white px-4 py-2 rounded-xl disabled:opacity-30 disabled:cursor-not-allowed'>
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Pagination;
