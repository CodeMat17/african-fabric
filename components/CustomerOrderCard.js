"use client";

import dayjs from "dayjs";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import LinearProgressBar from "./LinearProgressBar";

const CustomerOrderCard = ({ data }) => {
  return (
    <div>
      {data && data.length < 1 ? (
        <p className='text-center py-12'>Invalid name was entered</p>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 md:gap-6'>
          {data.map((user) => (
            <Link
              href={`/dashboard/orders/${user.id}`}
              key={user.id}
              className='bg-gray-100 odd:bg-[#55c694]/10 rounded-xl overflow-hidden'>
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

                <div className='mt-3 w-full text-sm'>
                  <LinearProgressBar
                    tailoring={user.tailoring}
                    beading={user.beading}
                    q_c={user.q_c}
                    ready={user.ready}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomerOrderCard;
