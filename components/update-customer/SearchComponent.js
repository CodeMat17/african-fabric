"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const SearchComponent = () => {
  const router = useRouter();
  const [text, setText] = useState("");
  const [query] = useDebounce(text, 500);

  useEffect(() => {
    if (!query) {
      router.push(`/dashboard/update-customer-info`);
    } else {
      router.push(`/dashboard/update-customer-info?search=${query}`);
    }
  }, [query, router]);

  return (
    <div>
      <input
        type='search'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Search by name'
        className='bg-inherit outline-none focus:outline-none text-sm w-full py-2 border border-[#55c694] px-3 rounded-xl'
      />
    </div>
  );
};

export default SearchComponent;
