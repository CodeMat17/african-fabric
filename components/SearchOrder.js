"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { TbListSearch } from "react-icons/tb";

const SearchOrder = () => {

  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = (e) => {
    const params = new URLSearchParams(searchParams);
    params.set("q", e.target.value);
    replace(`${pathname}?${params}`);
  };

  return (
    <div className='flex items-center gap-2 border rounded-xl px-3 py-1'>
      <TbListSearch className='text-2xl text-[#55c694]' />
      <input
        type='search'
        onChange={handleSearch}
        placeholder='Search'
        className='bg-inherit outline-none focus:outline-none text-sm'
      />
    </div>
  );
};

export default SearchOrder;
