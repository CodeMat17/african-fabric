"use client";

import { supabaseClient } from "@/supabaseClient";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";

const DeleteTailor = ({ id }) => {
  const router = useRouter();
  const [deleteLoading, setDeletLoading] = useState(false);

  const deleteTailor = async () => {
    try {
      setDeletLoading(true);

      const { error } = await supabaseClient
        .from("tailors")
        .delete()
        .eq("id", id);

      if (error) {
        toast.error("Something went wrong. Try again.", {
          duration: 4000,
          position: "top-center",
          // Aria
          ariaProps: {
            role: "status",
            "aria-live": "polite",
          },
        });
      }
      if (!error) {
        toast.success("Deleted successfully", {
          duration: 4000,
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
      console.log("Error Msg: ", error);
    } finally {
      setDeletLoading(false);
    }
  };

  return (
    <button
      onClick={deleteTailor}
      className='bg-red-600 font-semibold text-white px-8 py-1.5 rounded-lg '>
      {deleteLoading ? (
        <CgSpinner className='w-6 h-6 animate-spin' />
      ) : (
        "Delete Tailor"
      )}
    </button>
  );
};

export default DeleteTailor;
