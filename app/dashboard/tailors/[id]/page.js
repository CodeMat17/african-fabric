"use client";

import { supabaseClient } from "@/supabaseClient";
import dayjs from "dayjs";
import { notFound, useRouter } from "next/navigation";
import { useState } from "react";

export const revalidate = 0;

const UpdateTailor = async ({ params: { id } }) => {
  const router = useRouter();
  const [deleteLoading, setDeletLoading] = useState(false);

  let {
    data: tailor,
    error,
    count,
  } = await supabaseClient.from("tailors").select("*").match({ id }).single();

  if (!tailor) {
    notFound;
  }

  const deleteTailor = async () => {
    try {
    } catch (error) {
      console.log("Error Msg: ", error);
    } finally {
    }
    const { error } = await supabaseClient
      .from("tailors")
      .delete()
      .eq(id, tailor.id);
  };

  return (
    <div className='px-4 pt-4 pb-12'>
      <p className='uppercase text-center text-xl font-medium'>
        Tailor Details
      </p>

      <div className='mt-16 flex flex-col justify-center text-center'>
        <h2 className='text-center text-xl '>{tailor.name}</h2>
        <p>{tailor.tel}</p>
        <p
          className={`mt-4 font-semibold tracking-wide ${
            tailor.busy ? "text-red-600" : "text-green-600"
          }`}>
          {tailor.busy ? "BUSY" : "FREE"}
        </p>
        {tailor.busy && (
          <p>
            Job assigned on {dayjs(tailor.assigned_on).format("MMM DD, YYYY")}
          </p>
        )}
        {tailor.busy && (
          <p>
            To finish on {dayjs(tailor.to_finish_on).format("MMM DD, YYYY")}
          </p>
        )}
      </div>
      <div className='mt-10 flex justify-center items-center gap-8'>
        <button className='bg-black/5 font-semibold text-black px-8 py-1.5 rounded-lg'>
          Edit info
        </button>
        <button className='bg-red-600 font-semibold text-white px-8 py-1.5 rounded-lg'>
          Delete Tailor
        </button>
      </div>
    </div>
  );
};

export default UpdateTailor;
