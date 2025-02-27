"use client";

import dayjs from "dayjs";
import Link from "next/link";
import { Button } from "../ui/button";

const TailorCard = ({ data }) => {
  return (
    <div className='w-full max-w-xs sm:max-w-xl lg:max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 '>
      {data.map((user) => (
        <div
          key={user.id}
          className='border text-sm shadow-md bg-gray-100 odd:bg-gray-200 rounded-xl overflow-hidden p-4'>
          <div className='w-full flex flex-col items-center justify-center   '>
            <h1 className='text-lg font-medium mt-2 text-center'>
              {user.name}
            </h1>
            <p className=' text-center'>{user.tel}</p>
          </div>

          <div className='text-center mt-3 leading-5'>
            <p>
              {user.busy ? (
                <span className='text-red-600 font-medium text-lg'>Busy</span>
              ) : (
                <span className='text-green-600 font-medium text-lg'>Free</span>
              )}
            </p>
            {user.busy && (
              <div className='flex items-center justify-between'>
                <div className='text-gray-500 text-xs text-start'>
                  <p>
                    Client: {user.client} | {user.style}
                  </p>
                  <p>
                    Assigned on{" "}
                    <span>
                      {dayjs(user.assigned_on).format("MMM DD, YYYY")}
                    </span>
                  </p>
                  <p>
                    To finish on on{" "}
                    <span>
                      {dayjs(user.to_finish_on).format("MMM DD, YYYY")}
                    </span>
                  </p>
                </div>
                {user?.clientId && (
                  <Button variant='outline' className='shadow-md' asChild>
                    <Link href={`/dashboard/orders/${user.clientId}`}>
                      View
                    </Link>
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TailorCard;
