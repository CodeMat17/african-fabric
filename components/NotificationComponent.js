"use client";

import dayjs from "dayjs";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

const NotificationComponent = ({ notifications }) => {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className=''>
      {notifications && notifications.length < 1 ? (
        <p className='text-center py-16'>
          No job is within 3 days to due date.
        </p>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto'>
          {notifications.map((due) => (
            <Link key={due.id} href={`/dashboard/orders/${due.id}`}>
              <div className='border p-6 rounded-xl flex flex-col items-center bg-red-600/10'>
                <CldImage
                  width='80'
                  height='80'
                  crop='thumb'
                  gravity='faces'
                  src={due.avatar}
                  sizes='50vw'
                  alt='Profile image'
                  loading='lazy'
                  className='rounded-full'
                />
                <p className='font-medium text-center mt-1 whitespace-nowrap'>
                  {due.name}
                </p>
                <p className='text-sm text-gray-500  whitespace-nowrap'>
                  {due.tel}
                </p>
                <div className='my-3 flex flex-col items-center justify-center text-sm text-gray-500'>
                  <p className='text-center whitespace-nowrap'>
                    Booked on {dayjs(due.created_at).format("MMM DD, YYYY")}
                  </p>
                  <p className='text-center whitespace-nowrap'>
                    Due on {dayjs(due.due_date).format("MMM DD, YYYY")}
                  </p>
                </div>
                <div className='text-red-600 font-medium text-center'>
                  {today === due.due_date && (
                    <p className=' whitespace-nowrap'>
                      This job is due for collection today
                    </p>
                  )}
                  {today === due.two_days_2_due_date && (
                    <p className=' whitespace-nowrap'>
                      3 more days to due date
                    </p>
                  )}
                  {today === due.three_days_2_due_date && (
                    <p className=' whitespace-nowrap'>
                      2 more days to due date
                    </p>
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

export default NotificationComponent;
