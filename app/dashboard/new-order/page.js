"use client";

import ProfileCard from "@/components/ProfileCard";

const NewOrder = () => {

  return (
    <div className='px-4 py-8 min-h-screen'>
      <h1 className='text-xl font-medium text-center'>Add New Order</h1>
     

      <div className=' w-full max-w-3xl mx-auto group'>
        <ProfileCard />     
       
      </div>
    </div>
  );
};

export default NewOrder;
