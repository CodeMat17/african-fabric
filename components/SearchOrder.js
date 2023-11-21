"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { TbSearch } from "react-icons/tb";import { useDebounce } from "use-debounce";

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

  // const searchParams = useSearchParams();
  // const { replace } = useRouter();
  // const pathname = usePathname();

  // const handleSearch = (e) => {
  //   const params = new URLSearchParams(searchParams);
  //   params.set("q", e.target.value);
  //   replace(`${pathname}?${params}`);
  // };

    // function handleSearch(term) {
    //   const params = new URLSearchParams(searchParams);
    //  params.set("page", "1");
    //   if (term) {
    //     params.set("query", term);
    //   } else {
    //     params.delete("query");
    //   }
    //     replace(`${pathname}?${params.toString()}`);
    // }

  return (
    <>
      <div className='flex items-center justify-center gap-2 border rounded-xl px-3'>
        <TbSearch className='text-2xl text-[#55c694]' />
        {/* <input
        type='search'
        onChange={handleSearch}
        placeholder='Search'
        className='bg-inherit outline-none focus:outline-none text-sm'
      /> */}
        <input
          type='search'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Search by name'
          className='bg-inherit outline-none focus:outline-none text-sm w-full py-2'
        />
      </div>
      {/* <input
        type='search'
        className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
        placeholder='this is next serach'
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      /> */}
    </>
  );
};

export default SearchOrder;
