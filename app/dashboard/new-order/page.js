"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { TbCameraPlus } from "react-icons/tb";

const NewOrder = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const avatarPickerRef = useRef(null);

    const [selectedMaterial, setSelectedMaterial] = useState(null);
    const materialPickerRef = useRef(null);

  const addAvatar = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

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
      <div className='mt-6 w-full max-w-lg mx-auto group' noValidate>
        <div className='flex flex-col items-center justify-center'>
          <div className='relative'>
            {selectedFile ? (
              <div className='relative w-24 aspect-square rounded-full overflow-hidden'>
                <Image alt='customer avatar' fill priority src={selectedFile} />
              </div>
            ) : (
              <div className='w-24 h-24 bg-black/20 rounded-full'></div>
            )}
            <div
              onClick={() => avatarPickerRef.current.click()}
              className='absolute -bottom-2 -right-6 bg-[#55c694]/30 rounded-full p-1 border-2 cursor-pointer'>
              <TbCameraPlus className=' text-4xl text-[#55c694]' />
              <input
                type='file'
                accept='image/*'
                hidden
                onChange={addAvatar}
                ref={avatarPickerRef}
              />
            </div>
          </div>
          <p className='text-center text-sm pt-3'>Upload customer photo</p>
        </div>
        <div className='py-6 flex flex-col space-y-1'>
          <div className='flex flex-col '>
            <label>Fullname</label>
            <input
              type='text'
              required
              className='peer w-full rounded-xl border bg-inherit py-2 px-3 shadow shadow-gray-100 mt-0.5 appearance-none outline-none text-neutral-800'
              pattern='.{5,}'
            />
            <span className='hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block'>
              Enter customer name. It cannot be less than 5 char.
            </span>
          </div>

          <div className='flex flex-col'>
            <label>Email</label>
            <input
              type='email'
              required
              className='peer w-full rounded-xl border bg-inherit py-2 px-3 shadow shadow-gray-100 mt-0.5 appearance-none outline-none text-neutral-800 '
              pattern='[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$'
            />
            <span className='hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block'>
              Enter a valid email
            </span>
          </div>

          <div className='w-full flex flex-col space-y-3 sm:flex-row sm:justify-between sm:space-y-0 gap-'>
            <div className='flex flex-col'>
              <label>Tel</label>
              <input
                type='tel'
                required
                className='peer w-full rounded-xl border bg-inherit py-2 px-3 shadow shadow-gray-100 mt-0.5 appearance-none outline-none text-neutral-800'
                pattern='.{7,}'
              />
              <span className='hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block'>
                Enter a valid phone number
              </span>
            </div>

            <div className='flex flex-col'>
              <label>Style</label>
              <input
                type='text'
                required
                className='peer w-full rounded-xl border bg-inherit py-2 px-3 shadow shadow-gray-100 mt-0.5 appearance-none outline-none text-neutral-800'
                pattern='.{3,}'
              />
              <span className='hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block'>
                Style cannot be empty or les than 3 char.
              </span>
            </div>
          </div>
        </div>
        <button className='bg-[#55c694] w-full py-2.5 text-white rounded-xl group-invalid:pointer-events-none group-invalid:opacity-30'>
          SUBMIT
        </button>
        <div className='pt-2 pb-6 my-6 border rounded-xl'>
          <p className='text-center text-lg'>Measurements</p>
          <div className='pt-4 px-4 text-sm grid grid-cols-2 sm:grid-cols-3 gap-8'>
            <div className='flex flex-col'>
              <label className='text-gray-500'>Enter Neck</label>

              <input
                type='text'
                placeholder='Enter Neck'
                className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-gray-500'>Enter O-Bust</label>

              <input
                type='text'
                placeholder='Enter O-Bust'
                className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-gray-500'>Enter Bust</label>

              <input
                type='text'
                placeholder='Enter Bust'
                className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-gray-500'>Enter U-Bust</label>

              <input
                type='text'
                placeholder='Enter U-Bust'
                className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-gray-500'>Enter Waist</label>

              <input
                type='text'
                placeholder='Enter Waist'
                className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-gray-500'>Enter Hips</label>

              <input
                type='text'
                placeholder='Enter Hips'
                className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-gray-500'>Enter Nk-Heel</label>

              <input
                type='text'
                placeholder='Enter Nk-Heel'
                className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-gray-500'>Enter NK abv Knee</label>

              <input
                type='text'
                placeholder='Enter NK abv Knee'
                className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-gray-500'>Enter A-Length</label>

              <input
                type='text'
                placeholder='Enter A-Length'
                className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-gray-500'>Enter S-Seam</label>

              <input
                type='text'
                placeholder='Enter S-Seam'
                className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-gray-500'>Enter Arm Hole</label>

              <input
                type='text'
                placeholder='Enter Arm Hole'
                className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-gray-500'>Enter Bicep</label>

              <input
                type='text'
                placeholder='Enter Bicep'
                className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-gray-500'>Enter Fore Arm</label>
              <input
                type='text'
                placeholder='Enter Fore Arm'
                className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-gray-500'>Enter Wrist</label>

              <input
                type='text'
                placeholder='Enter Wrist'
                className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-gray-500'>Enter V Neck Cut</label>

              <input
                type='text'
                placeholder='Enter V Neck Cut'
                className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-gray-500'>Enter Abv Knee-Ankle</label>

              <input
                type='text'
                placeholder='Enter Abv Knee-Ankle'
                className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-gray-500'>Enter abv Kneel</label>

              <input
                type='text'
                placeholder='Enter Waist abv Kneel'
                className='p-2 text-center border rounded-xl outline-none max-w-[150px]'
              />
            </div>
          </div>
          <div className='pt-8 pb-3 flex flex-col items-center justify-center'>
            <div
              onClick={() => materialPickerRef.current.click()}
              className='flex items-center  px-5 text-[#55c694] bg-[#55c694]/5 shadow rounded-full p-1 cursor-pointer'>
              <TbCameraPlus className=' text-4xl text-[#55c694]' />
              <span className='pl-3'>Upload Preferred Material</span>
              <input
                type='file'
                accept='image/*'
                hidden
                onChange={addFabricMaterial}
                ref={materialPickerRef}
              />
            </div>

            <div className='py-4'>
              {selectedMaterial ? (
                <div className='relative w-52 aspect-video rounded-xl overflow-hidden'>
                  <Image
                    alt='customer avatar'
                    fill
                    priority
                    src={selectedMaterial}
                  />
                </div>
              ) : (
                <div className=''> No material is selected yet.</div>
              )}
            </div>
          </div>
          <div className=' mt-6 px-4'>
            <button className='bg-[#55c694] w-full py-2.5 text-white rounded-xl group-invalid:pointer-events-none group-invalid:opacity-30'>
              UPLOAD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewOrder;
