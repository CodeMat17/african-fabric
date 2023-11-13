"use client";

import { supabaseClient } from "@/supabaseClient";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import { useState } from "react";
import toast from "react-hot-toast";
import { TbCameraPlus } from "react-icons/tb";
import MeasurementData from "./MeasurementData";
import {AiOutlineLoading} from 'react-icons/ai'

const ProfileCard = () => {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [fabricUrl, setFabricUrl] = useState(null);
  const [fabric, setFabric] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [style, setStyle] = useState("");
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [profileData, setProfileData] = useState(true);
  const [measurementData, setMeasurementData] = useState(false);

  const loadProfile = async (e) => {
    e.preventDefault()
    try {
      setLoadingProfile(true);

      const { error } = await supabaseClient
        .from("customers")
        .insert([{ avatar, fabric, name, email, tel, style }])
        .select();

      if (error) {
        alert(`Something went wrong: ${error.message}`);
      }

      if (!error) {
      toast.success(`Profile data uploaded successfully`, {
        duration: 5000,
        position: "top-center",
      });
      setMeasurementData(true);
      setProfileData(false);
      }
    } catch (error) {
      console.log("ErrorMsg: ", error.message);
    } finally {
      setLoadingProfile(false);
    }
  };
  return (
    <div>
      {profileData && (
        <form className='group'>
          <div className='flex flex-col mx-auto sm:flex-row sm:items-baseline sm:justify-around gap-4 pb-4 rounded-3xl bg-[#55c694]/10'>
            <div className='p-4'>
              <div className='flex items-baseline justify-center -space-x-5'>
                <div>
                  {avatarUrl ? (
                    <div className='relative w-[150px] aspect-square rounded-full overflow-hidden'>
                      <CldImage fill src={avatarUrl} alt='user avatar' />
                    </div>
                  ) : (
                    <div className='w-[150px] h-[150px] bg-black/5 rounded-full'></div>
                  )}
                </div>
                <div className='z-30 bg-[#55c694]/30 rounded-full px-1.5 py-1 border-2 border-inherit shadow-md cursor-pointer'>
                  <CldUploadWidget
                    uploadPreset='af_avatars'
                    folder='af_designs/avatars'
                    onSuccess={(result) => {
                      // handle successful upload
                      setAvatarUrl(result.info.public_id);
                      setAvatar(result.info.secure_url);
                      // console.log(`result: `, result.info.secure_url);
                    }}>
                    {({ open }) => {
                      function handleOnClick(e) {
                        e.preventDefault();
                        open();
                      }
                      return (
                        <button onClick={handleOnClick}>
                          <TbCameraPlus className=' text-4xl text-[#55c694]' />
                        </button>
                      );
                    }}
                  </CldUploadWidget>
                </div>
              </div>
              <div className='mt-3 flex justify-center items-center text-center text-xs'>
                <p className=' bg-gray-300/30 px-3 py-1 rounded-full'>
                  Upload customer photo
                </p>
              </div>
            </div>

            <div className='p-4'>
              <div className='flex items-baseline justify-center -space-x-5'>
                <div>
                  {fabricUrl ? (
                    <div className='relative w-[180px] aspect-video rounded-3xl overflow-hidden'>
                      <CldImage fill src={fabricUrl} alt='preferred fabric' />
                    </div>
                  ) : (
                    <div className='w-[200px] aspect-video bg-black/5 rounded-3xl'></div>
                  )}
                </div>
                <div className='z-30 bg-[#55c694]/30 rounded-full px-1.5 py-1 border-2 border-inherit shadow-md cursor-pointer'>
                  <CldUploadWidget
                    uploadPreset='af_fabrics'
                    folder='af_designs/fabrics'
                    onSuccess={(result) => {
                      // handle successful upload
                      setFabricUrl(result.info.public_id);
                      setFabric(result.info.secure_url);
                      // console.log(`result: `, result.info.secure_url);
                    }}>
                    {({ open }) => {
                      function handleOnClick(e) {
                        e.preventDefault();
                        open();
                      }
                      return (
                        <button onClick={handleOnClick}>
                          <TbCameraPlus className=' text-4xl text-[#55c694]' />
                        </button>
                      );
                    }}
                  </CldUploadWidget>
                </div>
              </div>
              <div className='mt-3 flex justify-center items-center text-center text-xs'>
                <p className=' bg-gray-300/30 px-3 py-1 rounded-full'>
                  Upload preferred fabric
                </p>
              </div>
            </div>
          </div>

          <div className='py-6 flex flex-col space-y-1'>
            <div className='flex flex-col '>
              <label>Fullname</label>
              <input
                type='text'
                required
                value={name}
                onChange={(e) => setName(e.target.value) }
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
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
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  className='peer w-full rounded-xl border bg-inherit py-2 px-3 shadow shadow-gray-100 mt-0.5 appearance-none outline-none text-neutral-800'
                  pattern='.{3,}'
                />
                <span className='hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block'>
                  Style cannot be empty or les than 3 char.
                </span>
              </div>
            </div>
             <div className='pt-6'>
            <button
              onClick={loadProfile}
              disabled={loadingProfile}
              className='bg-[#55c694] w-full py-2.5 text-white rounded-xl group-invalid:pointer-events-none group-invalid:opacity-30'>
            {loadingProfile ? <AiOutlineLoading className="text-white text-3xl font-bold" /> : 'SUBMIT'}  
            </button>
          </div>
          </div>
         
        </form>
      )}

      {measurementData && <MeasurementData />}
    </div>
  );
};

export default ProfileCard;
