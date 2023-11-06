"use client";

import { useRouter } from "next/navigation";
import { TbShoppingBagPlus } from "react-icons/tb";

const NewOrderButton = () => {
const router = useRouter()

  return (
    <button
      onClick={() => router.push("/dashboard/new-order")}
   
      aria-label='add order'
   
      className='md:my-2 md:ml-3 text-white bg-[#55c694] shadow-lg rounded-full p-2'>
      <TbShoppingBagPlus className='text-3xl ' />
    </button>
  );
};

export default NewOrderButton;
