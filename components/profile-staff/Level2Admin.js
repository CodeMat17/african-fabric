"use client";

import { supabaseClient } from "@/supabaseClient";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { CgSpinnerAlt } from "react-icons/cg";

export const revalidate = 0;

const Level2Admin = ({ id, level2_admin }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const makeAdmin = async () => {
    try {
      setLoading(true);
      const { error } = await supabaseClient
        .from("staffers")
        .update({ qc_admin: true })
        .eq("id", id)
        .select();

      if (error) {
        throw new Error(`Something went wrong: ${error.message}`);
      }
      if (!error) {
        toast.success("Done successfully", {
          duration: 4000,
          position: "top-center",
          // Aria
          ariaProps: {
            role: "status",
            "aria-live": "polite",
          },
        });
        router.refresh();
      }
    } catch (error) {
      console.log("Error Msg: ", error.message);
    } finally {
      setLoading(false);
    }
  };

  const removeAdmin = async () => {
    try {
      setLoading(true);
      const { error } = await supabaseClient
        .from("staffers")
        .update({ qc_admin: false })
        .eq("id", id)
        .select();

      if (error) {
        throw new Error(`Something went wrong: ${error.message}`);
      }
      if (!error) {
        toast.success("Done successfully", {
          duration: 4000,
          position: "top-center",
          // Aria
          ariaProps: {
            role: "status",
            "aria-live": "polite",
          },
        });
        router.refresh();
      }
    } catch (error) {
      console.log("Error Msg: ", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {level2_admin ? (
        <button
          onClick={removeAdmin}
          disabled={loading}
          className='flex items-center justify-center gap-2 bg-black/20 text-black py-2.5 rounded-xl w-full'>
          {loading ? (
            <>
              <CgSpinnerAlt className='text-xl animate-spin' /> Please wait
            </>
          ) : (
            "Remove as level 2 admin"
          )}
        </button>
      ) : (
        <button
          onClick={makeAdmin}
          disabled={loading}
          className='flex items-center justify-center gap-2 bg-black/20 text-black py-2.5 rounded-xl w-full'>
          {loading ? (
            <>
              <CgSpinnerAlt className='text-xl animate-spin' /> Please wait
            </>
          ) : (
            "Make level 2 admin"
          )}
        </button>
      )}
    </>
  );
};

export default Level2Admin;
