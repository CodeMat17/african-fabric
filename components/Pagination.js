"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { TbSquareRoundedChevronLeftFilled } from "react-icons/tb";
import { TbSquareRoundedChevronRightFilled } from "react-icons/tb";

const Pagination = ({ count }) => {
  const router = useRouter();
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(9);
  const noOfPages = Math.ceil(count / 9);

  const handlePrevClick = () => {
    if (start > 0) {
      setStart(start - 9);
      setEnd(end - 9);
      router.push(`/dashboard/orders?start=${start - 9}&end=${end - 9}`);
    }
  };

  const handleNextClick = () => {
    if (end < count) {
      setStart(start + 9);
      setEnd(end + 9);
      router.push(`/dashboard/orders?start=${start + 9}&end=${end + 9}`);
    }
  };

  return (
    <div className='p-2 bg-green-100 flex items-center justify-between text-sm rounded-md'>
      <p className='text-[#55c694] whitespace-nowrap'>
        {noOfPages} <span>page{noOfPages > 1 && <span>s</span>} </span>
      </p>
      <div className='flex items-center gap-x-6'>
        <button
          onClick={handlePrevClick}
          disabled={start === 0}
          className='tracking-wider bg-[#55c694] text-white rounded-xl disabled:opacity-30 disabled:cursor-not-allowed'>
          <TbSquareRoundedChevronLeftFilled className='text-4xl' />
        </button>

        <button
          onClick={handleNextClick}
          disabled={end >= count}
          className='tracking-wider bg-[#55c694] text-white rounded-xl disabled:opacity-30 disabled:cursor-not-allowed'>
          <TbSquareRoundedChevronRightFilled className='text-4xl' />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
