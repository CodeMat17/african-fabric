"use client";

import { supabaseClient } from "@/supabaseClient";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { CgSpinnerAlt } from "react-icons/cg";
import DeleteTailor from "./DeleteTailor";

const UpdateTailorComponent = ({ id, t_name, t_tel }) => {
  const router = useRouter();
  const [name, setName] = useState(t_name);
  const [tel, setTel] = useState(t_tel);
  const [loading, setLoading] = useState(false);

  const updateTailor = async () => {
    try {
      setLoading(true);

      const { error } = await supabaseClient
        .from("tailors")
        .update({ name, tel })
        .eq("id", id)
        .select();

      if (error) {
        throw new Error(`Something went wrong: `, error.message);
      }
      if (!error) {
        toast.success("Updated successfully", {
          duration: 5000,
          position: "top-center",
          // Aria
          ariaProps: {
            role: "status",
            "aria-live": "polite",
          },
        });
        router.refresh();
        router.back();
      }
    } catch (error) {
      console.log("Error Msg: ", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-full sm:max-w-xs mx-auto flex flex-col gap-4'>
      <div>
        <label>Name</label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='w-full outline-none rounded-xl py-2.5 px-3 bg-[#55c694]/10'
        />
      </div>
      <div>
        <label>Tel</label>
        <input
          type='tel'
          value={tel}
          onChange={(e) => setTel(e.target.value)}
          className='w-full outline-none rounded-xl py-2.5 px-3 bg-[#55c694]/10'
        />
      </div>
      <div>
        <button
          onClick={updateTailor}
          className='flex items-center justify-center gap-4 font-medium w-full py-2 mt-2 rounded-xl bg-[#55c694] text-white tracking-wider'>
          {loading ? (
            <>
              <CgSpinnerAlt className='text-2xl animate-spin' /> Updating...
            </>
          ) : (
            "Update"
          )}
        </button>
        <p className='text-center text-3xl py-2 text-red-400 tracking-widest'>
          ------------
        </p>
        <DeleteTailor id={id} name={name} />
      </div>
    </div>
  );
};

export default UpdateTailorComponent;
