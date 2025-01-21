"use client";

import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { supabaseClient } from "../../supabaseClient";
import dayjs from "dayjs";

const CollectionNotification = async () => {
  const today = new Date().toISOString().split("T")[0];

  const { data: notifications, error } = await supabaseClient
    .from("customers")
    .select(
      "id, name, style, due_date, avatar, fabric, due_date, three_days_2_due_date, two_days_2_due_date, one_day_2_due_date"
    )
    .or(
      `two_days_2_due_date.eq.${today}, three_days_2_due_date.eq.${today}, due_date.eq.${today}`
    );

  if (error) {
    throw new Error(`Something went wrong: ${error.message}`);
  }

  return (
    <div className='py-10 w-full min-h-screen max-w-4xl mx-auto'>
      <p className='text-lg font-medium'>Job(s) due for collection.</p>

      <div>
        {notifications && notifications.length < 1 ? (
          <p className='text-center py-16'>
            No job is within 3 days to due date.
          </p>
        ) : (
          <div className="mt-5">
            {notifications.map((due) => (
              <div
                key={due.id}
                className='rounded-xl overflow-hidden flex flex-col gap-4 mb-4'>
                <Link href={`/dashboard/orders/${due.id}`}>
                  <div className='shadow-md p-4 bg-white'>
                    <div className='flex items-center gap-4 '>
                      {due.avatar && (
                        <CldImage
                          width='70'
                          height='70'
                          crop='thumb'
                          gravity='faces'
                          src={due.avatar}
                          sizes='50vw'
                          alt='Profile image'
                          loading='lazy'
                          className='rounded-full'
                        />
                      )}
                      <div>
                        <p className='font-medium text-lg'>{due.name}</p>
                        <p>{due.style}</p>
                        {today === due.due_date && (
                          <p className="text-red-500">
                            This job is due for collection today
                          </p>
                        )}
                        {today === due.three_days_2_due_date && (
                          <p className="text-red-500">
                            3 more days to due date
                          </p>
                        )}
                        {today === due.two_days_2_due_date && (
                          <p className="text-red-500">2 more days to due date</p>
                        )}
                        {today === due.one_day_2_due_date && (
                          <p className="text-red-500">1 more day to due date</p>
                        )}
                        {dayjs(today).isAfter(dayjs(due.due_date)) && (
                          <p className="text-red-500">This job is overdue for collection.</p>
                        )}
                      </div>
                    </div>

                    <div className='text-sm text-gray-400 mt-2 flex gap-1'>
                      <p className=' whitespace-nowrap'>
                        Booked on {dayjs(due.created_at).format("MMM DD, YYYY")}
                      </p>
                      |
                      {due.due_date && (
                        <p className=' whitespace-nowrap'>
                          Due on {dayjs(due.due_date).format("MMM DD, YYYY")}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CollectionNotification;
