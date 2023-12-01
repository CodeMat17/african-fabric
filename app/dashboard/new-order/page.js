"use client";

import ProfileCard from "@/components/ProfileCard";

const NewOrder = () => {

  return (
    <div className='px-4 py-8'>
      <h1 className='text-xl font-medium text-center'>Add New Order</h1>
     

      <div className='mt-6 w-full max-w-lg mx-auto group'>
        <ProfileCard />     
       
      </div>
    </div>
  );
};

export default NewOrder;
