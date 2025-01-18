"use client";

import { Spinner } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const AssignToTailorButton = ({id, name, fabric}) => {
const router = useRouter()

  return (
    <>
      <Spinner color='success' size='lg' />
      <p className='pt-1 text-sm text-center'>
        Waiting to be assigned to a tailor
      </p>
   
      <button onClick={() => router.push(`/dashboard/orders/assign-to-tailor?id=${id}&name=${name}&fabric=${fabric}`)}
        className='mt-3 text-sm font-medium bg-[#55c694] text-white px-4 py-1.5 sm:px-6 sm:py-2 rounded-xl'>
        Assign
      </button>
    </>
  );
};

export default AssignToTailorButton;
