"use client";

import ProfileCard from "@/components/ProfileCard";
import Image from "next/image";
import { useState } from "react";
import { TbCameraPlus } from "react-icons/tb";

const NewOrder = () => {
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const addFabricMaterial = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedMaterial(readerEvent.target.result);
    };
  };

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
