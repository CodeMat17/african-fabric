"use client";

import { CldImage, CldUploadWidget } from "next-cloudinary";
import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { TbCameraPlus, TbPhotoAi } from "react-icons/tb";
import MeasurementData from "./MeasurementData";

const ProfileCard = () => {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [fabricUrl, setFabricUrl] = useState(null);
  const [fabric, setFabric] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [style, setStyle] = useState("");
  const [profileData, setProfileData] = useState(true);
  const [measurementData, setMeasurementData] = useState(false);


  return (
    <div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {profileData && (
        <form className='group'>
          <div className='flex flex-col mx-auto sm:flex-row sm:items-end sm:justify-around gap-4 pb-4 rounded-3xl bg-[#55c694]/10'>
            <div className='p-4'>
              <div className='flex items-end justify-center -space-x-5'>
                <div>
                  {avatar ? (
                    <div>
                      <CldImage
                        width='150'
                        height='150'
                        crop='thumb'
                        gravity='faces'
                        src={avatar}
                        alt='user avatar'
                        loading='lazy'
                        className='rounded-full'
                      />
                    </div>
                  ) : (
                    <div className='flex flex-col items-center justify-center w-[150px] h-[150px] bg-black/5 rounded-full'>
                      <TbPhotoAi className='text-3xl text-[#55c694]' />
                    </div>
                  )}
                </div>
                <div className=''>
                  <CldUploadWidget
                    uploadPreset='af_avatars'
                    folder='af_designs/avatars'
                    onSuccess={(result) => {
                      // handle successful upload
                      setAvatar(result.info.public_id);
                      // setAvatar(result.info.secure_url);
                      // console.log(`result: `, result.info.secure_url);
                    }}>
                    {({ open }) => {
                      function handleOnClick(e) {
                        e.preventDefault();
                        open();
                      }
                      return (
                        <button
                          onClick={handleOnClick}
                          className='bg-[#55c694]/30 rounded-full p-2'>
                          <TbCameraPlus className=' text-4xl text-[#55c694]' />
                        </button>
                      );
                    }}
                  </CldUploadWidget>
                </div>
              </div>
              <div className='mt-3 flex justify-center items-center text-center text-xs'>
                <p className='whitespace-nowrap bg-gray-300/30 px-3 py-1 rounded-full'>
                  Upload customer photo
                </p>
              </div>
            </div>

            <div className='p-4'>
              <div className='flex items-baseline justify-center -space-x-5'>
                <div>
                  {fabric ? (
                    <div className='relative w-[180px] aspect-video rounded-3xl overflow-hidden'>
                      <CldImage
                        crop='fill'
                        width='200'
                        height='200'
                        src={fabric}
                        alt='preferred fabric'
                        loading='lazy'
                        className='rounded-xl'
                      />
                    </div>
                  ) : (
                    <div className='w-[200px] aspect-video bg-black/5 rounded-3xl'></div>
                  )}
                </div>
                <div>
                  <CldUploadWidget
                    uploadPreset='af_fabrics'
                    folder='af_designs/fabrics'
                    onSuccess={(result) => {
                      // handle successful upload
                      setFabric(result.info.public_id);
                      // setFabric(result.info.secure_url);
                      // console.log(`result: `, result.info.secure_url);
                    }}>
                    {({ open }) => {
                      function handleOnClick(e) {
                        e.preventDefault();
                        open();
                      }
                      return (
                        <button
                          onClick={handleOnClick}
                          className='bg-[#55c694]/30 rounded-full  p-2'>
                          <TbCameraPlus className=' text-4xl text-[#55c694]' />
                        </button>
                      );
                    }}
                  </CldUploadWidget>
                </div>
              </div>
              <div className='mt-3 flex justify-center items-center text-center text-xs'>
                <p className='whitespace-nowrap bg-gray-300/30 px-3 py-1 rounded-full'>
                  Upload preferred fabric
                </p>
              </div>
            </div>
          </div>

          <div className='py-6 flex flex-col gap-3'>
            <div className='flex flex-col '>
              <label>Fullname</label>
              <input
                type='text'
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='bg-slate-100 peer w-full rounded-xl border bg-inherit py-2 px-3 shadow shadow-gray-100 mt-0.5 appearance-none outline-none text-neutral-800'
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
                className='bg-slate-100 peer w-full rounded-xl border bg-inherit py-2 px-3 shadow shadow-gray-100 mt-0.5 appearance-none outline-none text-neutral-800 '
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
                  className='bg-slate-100 peer w-full rounded-xl border bg-inherit py-2 px-3 shadow shadow-gray-100 mt-0.5 appearance-none outline-none text-neutral-800'
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
                  className='bg-slate-100 peer w-full rounded-xl border bg-inherit py-2 px-3 shadow shadow-gray-100 mt-0.5 appearance-none outline-none text-neutral-800'
                  pattern='.{3,}'
                />
                <span className='hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block'>
                  Style cannot be empty or les than 3 char.
                </span>
              </div>
            </div>
            <div className='pt-6'>
              <button
                onClick={(e) => setProfileData(false)}
                // disabled={loadingProfile}
                className='flex items-center justify-center bg-[#55c694] w-full py-2.5 text-white rounded-xl group-invalid:pointer-events-none group-invalid:opacity-30'>
                NEXT
              </button>
            </div>
          </div>
        </form>
      )}

      {!profileData && (
        <MeasurementData
          name={name}
          email={email}
          tel={tel}
          style={style}
          avatar={avatar}
          fabric={fabric}
          setAvatar={setAvatar}
          setFabric={setFabric}
          setName={setName}
          setEmail={setEmail}
          setTel={setTel}
          setStyle={setStyle}
          setProfileData={setProfileData}
        />
      )}
    </div>
  );
};

export default ProfileCard;
