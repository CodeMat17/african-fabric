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
              className='bg-amber-600/5 odd:bg-gradient-to-tr from-[#55c694]/20 to-amber-600/5 rounded-xl overflow-hidden shadow'>
              <div className='w-full flex flex-col items-center justify-center p-6'>
                {user.avatar &&
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
                }
                <h1 className='font-medium mt-2 text-center w-full'>
                  {user.name}
                </h1>
                <p className='text-sm text-center'>{user.email}</p>
                <p className='text-sm text-center'>{user.tel}</p>
                <div className='flex flex-col xl:flex-row items-center text-xs text-gray-500 mt-2 capitalize justify-center gap-0 xl:gap-2'>
                  <span className='w-full text-center'> {user.style}</span>{" "}
                  <span className='hidden xl:block'>&bull;</span>
                  <span className='w-full text-center whitespace-nowrap'>
                    Booked on {dayjs(user.created_at).format("MMM DD, YYYY")}
                  </span>
                </div>
                <div className='mt-3 w-full text-sm flex items-center justify-center'>
                  <LinearProgressBar
                    tailoring={user.tailoring}
                    beading={user.beading}
                    q_c={user.q_c}
                    status={user.status}
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
