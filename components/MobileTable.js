"use client";

import { CldImage } from "next-cloudinary";
import Link from "next/link";

const MobileTable = ({
  id,
  name,
  email,
  tel,
  style,
  status,
  avatar,
  fabric,
}) => {
  return (
    <div className='rounded-2xl w-full p-2 mx-auto odd:bg-slate-100'>
      <div className='flex items-center gap-3 w-full'>
        <div className='w-20'>
          {avatar ? (
            <Link href={`/dashboard/orders/${id}`}>
              <div>
                <CldImage
                  width='80'
                  height='80'
                  crop='thumb'
                  gravity='faces'
                  src={avatar}
                  sizes='50vw'
                  alt='Profile image'
                  loading='lazy'
                  className='rounded-full'
                />
              </div>
            </Link>
          ) : (
            <div className='w-full aspect-square bg-gray-200 rounded-full'></div>
          )}
        </div>
        <div className='w-full text-sm leading-4'>
          <p className='font-medium truncate '>{name} </p>
          <p className='font-light truncate'>{email}</p>
          <p className='font-light'>{tel}</p>
          <div className='text-xs text-gray-500 mt-2 flex items-center justify-between gap-3 uppercase font-light'>
            <p>{style}</p>
            <p>|</p>
            <p>{status}</p>
            <p>|</p>
            {fabric ? (
              <div>
                <CldImage
                  width='55'
                  height='32'
                  crop='thumb'
                  gravity='faces'
                  src={fabric}
                  sizes='50vw'
                  alt='Profile image'
                  loading='lazy'
                  className='rounded-md'
                />
              </div>
            ) : (
              <div className='bg-gray-200 w-[55px] h-[32px] rounded-md'></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileTable;
