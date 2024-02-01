"use client";

import { supabaseClient } from "@/supabaseClient";
import dayjs from "dayjs";
import { CldImage } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { CgSpinnerAlt } from "react-icons/cg";
import { TbArrowBigRightLines, TbX } from "react-icons/tb";

export const revalidate = 0;

const CompletedJobsCard = ({
  id,
  name,
  email,
  tel,
  avatar,
  fabric,
  completed_on,
  delivered_on,
}) => {
  const router = useRouter();

  const [deliveredOn, setDeliveredOn] = useState("");
  const [loading, setLoading] = useState(false);

  const deliveredDate = async () => {
    setLoading(true);
    try {
      const { error } = await supabaseClient
        .from("customers")
        .update({ delivered_on: deliveredOn })
        .eq("id", id)
        .select();

      if (error) {
        throw new Error(`Something went wrong: ${error.message}`);
      }
      if (!error) {
        toast.success(`Job delivered!`, {
          duration: 5000,
          position: "top-center",
        });
      }
    } catch (error) {
      console.log("Error Msg: ", error.message);
    } finally {
      router.refresh();
      setLoading(false);
    }
  };

  const deleteDeliveredDate = async () => {
    setLoading(true);
    try {
      const { error } = await supabaseClient
        .from("customers")
        .update({ delivered_on: null })
        .eq("id", id)
        .select();

      if (error) {
        throw new Error(`Something went wrong: ${error.message}`);
      }
      if (!error) {
        toast.success(`Job not delivered yet`, {
          duration: 5000,
          position: "top-center",
        });
      }
    } catch (error) {
      console.log("Error Msg: ", error.message);
    } finally {
      router.refresh();
      setLoading(false);
    }
  };

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
          {completed_on && (
            <p className='mt-2 w-full text-xs text-gray-500'>
              Completed on {dayjs(completed_on).format("MMM DD, YYYY")}
            </p>
          )}
          {delivered_on ? (
            <div className='flex items-center gap-4'>
              <p className='mt-2 text-xs text-gray-500'>
                Delivered on
                {dayjs(delivered_on).format("MMM DD, YYYY")}
              </p>
              <button
                onClick={deleteDeliveredDate}
                className='mt-1 px-2 py-1.5 rounded-md bg-red-100'>
                {loading ? (
                  <CgSpinnerAlt className='text-xl text-red-600 animate-spin' />
                ) : (
                  <TbX className='text-xl text-red-600' />
                )}
              </button>
            </div>
          ) : (
            <div className='mt-3 flex items-center justify-cente gap-3'>
              <DatePicker
                // showIcon
                placeholderText='Delivered on...'
                selected={deliveredOn}
                onChange={(date) => setDeliveredOn(date)}
                dateFormat='MMM dd, yyyy'
                className='bg-inherit outline-none text-gray-500 border px-3 py-1.5 w-full rounded-md cursor-pointer'
              />
              {deliveredOn && (
                <button
                  onClick={deliveredDate}
                  className='px-2 py-1.5 rounded-md bg-green-100'>
                  {loading ? (
                    <CgSpinnerAlt className='text-xl text-green-600 animate-spin' />
                  ) : (
                    <TbArrowBigRightLines className='text-xl text-green-600' />
                  )}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompletedJobsCard;
