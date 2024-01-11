"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import dayjs from "dayjs";
import { CldImage } from "next-cloudinary";
import { useCallback, useEffect, useState } from "react";
import FittingScheduleModal from "./FittingScheduleModal";

const PendingJobsCard = ({
  id,
  name,
  email,
  tel,
  avatar,
  fabric,
  ready, status,
  due_date,
  fitting_date,
  session,
  fitting_confirmed_by
}) => {
  const supabase = createClientComponentClient();
  const user = session?.user;

  const [adminName, setAdminName] = useState("");

  const getProfile = useCallback(async () => {
    try {
      const { data, error, status } = await supabase
        .from("staffers")
        .select(`name`)
        .eq("id", user?.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setAdminName(data.name);
      }
    } catch (error) {
      alert("Error loading user status! : ", error.message);
    }
  }, [user, supabase]);

  useEffect(() => {
    getProfile();
  }, [user, getProfile]);

  return (
    <div className='rounded-xl overflow-hidden bg-white shadow-md w-full mx-auto'>
      <div className=' overflow-hidden w-full'>
        <div className='h-16 border'>
          {fabric && (
            <CldImage
              width='400'
              height='50'
              // crop='thumb'
              // gravity='faces'
              src={fabric}
              sizes='50vw'
              alt='Profile image'
              loading='lazy'
              className='w-full'
            />
          )}
        </div>
      </div>
      <div className='px-4 py-3'>
        {avatar && (
          <CldImage
            width='50'
            height='50'
            crop='thumb'
            gravity='faces'
            src={avatar}
            sizes='50vw'
            alt='Profile image'
            loading='lazy'
            className='rounded-full'
          />
        )}
        <div className='mt-1 leading-5 text-sm'>
          <p className='font-medium capitalize'>{name}</p>
          <p className='font-light'>{email}</p>
          <p className='font-light'>{tel}</p>
          <p className='mt-2 w-full text-xs text-gray-500'>
            Due date {dayjs(due_date).format("MMM DD, YYYY")}
          </p>
          {status === 'fitting' ?
            <div className='mt-2'>
              {fitting_date ? (
                <div>
                  <p className='w-full '>
                    Fitting scheduled for{" "}
                    {dayjs(fitting_date).format("MMM DD, YYYY h:mm a")}
                  </p>
                  <div className='flex items-end justify-between mt-2'>
                    <p className='text-xs text-gray-500'>
                      confirmed by {fitting_confirmed_by}
                    </p>
                    <FittingScheduleModal
                      id={id}
                      adminName={adminName}
                      fitting_date={fitting_date}
                      text='Re-confirm'
                      classnames='whitespace-nowrap rounded-xl px-2 py-1.5 bg-gray-500 text-white'
                    />
                  </div>
                </div>
              ) : (
                <FittingScheduleModal
                  id={id}
                  adminName={adminName}
                  confirmed_fitting_date={fitting_date}
                  text='Schedule fitting'
                  classnames='rounded-xl w-full py-2 bg-gray-500 text-white'
                />
              )}
            </div> : ''}
        </div>
      </div>
    </div>
  );
};

export default PendingJobsCard;
