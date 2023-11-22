"use client";

import { CldImage } from "next-cloudinary";
import Link from "next/link";

const MediumTable = ({ data }) => {
  return (
    <table className='table-auto border w-full rounded-xl overflow-hidden'>
      <thead className=''>
        <tr className='bg-[#55c694] text-white'>
          <th className='py-3 px-2 uppercase text-start'>Profile</th>
          <th className='py-3 px-2 uppercase'>Style</th>
          <th className='py-3 px-2 uppercase'>Status</th>
          <th className='py-3 px-2 uppercase'>Fabric</th>
        </tr>
      </thead>
      <tbody className='text-sm font-light'>
        {data &&
          data.map((user) => (
            <tr key={user.id}>
              <td className='flex items-center gap-2 py-2'>
                {user.avatar ? (
                  <Link href={`/dashboard/orders/${user.id}`}>
                    <div>
                      <CldImage
                        width='60'
                        height='60'
                        crop='thumb'
                        gravity='faces'
                        src={user.avatar}
                        sizes='50vw'
                        alt='Profile image'
                        loading='lazy'
                        className='rounded-full'
                      />
                    </div>
                  </Link>
                ) : (
                  <div className='bg-gray-200 my-2 w-[70px] h-[70px] rounded-full'></div>
                )}
                <div>
                  <p className='font-medium'>{user.name}</p>
                  <p className='text-xs'>{user.email}</p>
                  <p className='text-xs'>{user.tel}</p>
                </div>
              </td>
              <td className='text-center uppercase'>{user.style}</td>
              <td className='text-center uppercase'>{user.status}</td>
              <td className='flex justify-center items-center'>
                {/* {user.fabric ? } */}
                <CldImage
                  width='64'
                  height='54'
                  crop='thumb'
                  gravity='faces'
                  src={user.fabric}
                  sizes='50vw'
                  alt='Profile image'
                  loading='lazy'
                  className='rounded-2xl'
                />
                {/* <div className='bg-gray-200 w-16 h-8' /> */}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default MediumTable;
