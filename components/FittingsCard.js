'use client'

import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import dayjs from 'dayjs';

const FittingsCard = ({fittings}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto'>
      {fittings.map((fitting) => (
        <Link key={fitting.id} href={`/dashboard/scheduler/${fitting.id}`}>
          <div className='border p-6 rounded-xl flex flex-col items-center bg-red-600/10'>
            {fitting.avatar && (
              <CldImage
                width='80'
                height='80'
                crop='thumb'
                gravity='faces'
                src={fitting.avatar}
                sizes='50vw'
                alt='Profile image'
                loading='lazy'
                className='rounded-full'
              />
            )}
            <p className='font-medium text-center mt-1 whitespace-nowrap'>
              {fitting.name}
            </p>
            <p className='text-sm text-gray-500  whitespace-nowrap'>
              {fitting.tel}
            </p>
            <div className='mt-3 flex flex-col items-center justify-center text-sm text-gray-500'>
              <p className='text-center whitespace-nowrap'>
                Booked on {dayjs(fitting.created_at).format("MMM DD, YYYY")}
              </p>
              <p className='text-center whitespace-nowrap'>
                Due on {dayjs(fitting.due_date).format("MMM DD, YYYY")}
              </p>
            </div>
            {/* <div className='text-red-600 font-medium'>
              {today === due.due_date && (
                <p className='text-center'>
                  This job is due for collection today
                </p>
              )}
              {today === due.two_days_2_due_date && (
                <p className='text-center '>3 more days to due date</p>
              )}
              {today === due.three_days_2_due_date && (
                <p className='text-center'>2 more days to due date</p>
              )}
            </div> */}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default FittingsCard