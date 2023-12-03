"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { TbSearch } from "react-icons/tb";
import { useDebounce } from "use-debounce";

const SearchOrder = () => {
  const router = useRouter();
  const [text, setText] = useState("");
  const [query] = useDebounce(text, 500);

  useEffect(() => {
    if (!query) {
      router.push(`/dashboard/orders`);
    } else {
      router.push(`/dashboard/orders?search=${query}`);
    }
  }, [query, router]);

  return (
    <>
      <div className='flex items-center justify-center gap-2 border border-[#55c694] rounded-xl px-3'>
        <TbSearch className='text-2xl text-[#55c694]' />

        <input
          type='search'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Search by name'
          className='bg-inherit outline-none focus:outline-none text-sm w-full py-2'
        />
      </div>
    </>
  );
};

export default SearchOrder;
