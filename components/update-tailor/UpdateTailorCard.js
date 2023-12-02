"use client";

import dayjs from "dayjs";
import Link from "next/link";

const UpdateTailorCard = ({ data }) => {
  return (
    <div>
      {data && data.length < 1 ? (
        <p className='text-center py-12'>No entry at the moment</p>
      ) : (
        <div className='max-w-xs sm:max-w-xl lg:max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 md:gap-6'>
          {data.map((user) => (
            <Link
              href={`/dashboard/tailors/${user.id}`}
              key={user.id}
              className='border shadow-md bg-gray-100 odd:bg-gray-200 rounded-xl overflow-hidden'>
              <div className='w-full flex flex-col items-center justify-center p-6  '>
                <h1 className='text-lg font-medium mt-2 text-center'>
                  {user.name}
                </h1>
                <p className='text-sm text-center'>{user.tel}</p>
                <div className='mt-2 flex items-center justify-between gap-4'>
                  <p
                    className={` text-center ${
                      user.busy ? "text-red-500" : "text-[#55c694]"
                    }`}>
                    {user.busy ? "Busy" : "Ide"}
                  </p>
                  {user.busy && (
                    <div className=' text-xs text-gray-500 flex flex-col justify-center'>
                      <p>
                        Assigned on{" "}
                        {dayjs(user.assigned_on).format("MMM DD, YYYY")}
                      </p>
                      <p>
                        To finish on{" "}
                        {dayjs(user.to_finish_on).format("MMM DD, YYYY")}
                      </p>
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

export default UpdateTailorCard;
