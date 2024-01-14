"use client";

import dayjs from "dayjs";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

const UpdateCustomerCard = ({ data }) => {
  return (
    <div>
      {data && data.length < 1 ? (
        <p className='text-center py-12'>Invalid name was entered</p>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 md:gap-6'>
          {data?.map((user) => (
            <Link
              href={`/dashboard/update-customer-info/${user.id}`}
              key={user.id}
              className='bg-amber-600/5 odd:bg-gradient-to-tr from-[#55c694]/20 to-amber-600/5 rounded-xl overflow-hidden shadow'>
              <div className='w-full flex flex-col items-center justify-center p-6  '>
                <CldImage
                  width='100'
                  height='100'
                  crop='thumb'
                  gravity='faces'
                  src={user.avatar}
                  sizes='50vw'
                  alt='Profile image'
                  loading='lazy'
                  className='rounded-full'
                />
                <h1 className='text font-medium mt-2 text-center'>
                  {user.name}
                </h1>
                <p className='text-sm text-center'>{user.email}</p>
                <p className='text-sm text-center'>{user.tel}</p>
                <div className=' text-xs text-gray-500 mt-2 capitalize flex items-center justify-center gap-4'>
                  {user.style} &bull;{" "}
                  {dayjs(user.created_at).format("MMM DD, YYYY")}
                </div>

                <div className='mt-3 flex border w-full h-1.5 overflow-hidden font-sans text-xs font-medium rounded-full bg-gray-200 flex-start gap-1'>
                  <div
                    className={`w-1/5 flex items-center justify-center h-full overflow-hidden text-white break-all bg-[#55c694] rounded-full`}>
                    {/* 50% Completed */}
                  </div>

                  {user.tailoring && (
                    <div
                      className={`w-1/5 flex items-center justify-center h-full overflow-hidden text-white break-all bg-[#55c694] rounded-full`}>
                      {/* 50% Completed */}
                    </div>
                  )}
                  {user.beading && (
                    <div
                      className={`w-1/5 flex items-center justify-center h-full overflow-hidden text-white break-all bg-[#55c694] rounded-full`}>
                      {/* 50% Completed */}
                    </div>
                  )}
                  {user.q_c && (
                    <div
                      className={`w-1/5 flex items-center justify-center h-full overflow-hidden text-white break-all bg-[#55c694] rounded-full`}>
                      {/* 50% Completed */}
                    </div>
                  )}
                  {user.ready && (
                    <div
                      className={`w-1/5 flex items-center justify-center h-full overflow-hidden text-white break-all bg-[#55c694] rounded-full`}>
                      {/* 50% Completed */}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default UpdateCustomerCard;
