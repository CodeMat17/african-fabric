"use client";

import { supabaseClient } from "@/supabaseClient";
import { Disclosure } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { CgSpinnerAlt } from "react-icons/cg";
import { TbChevronUp } from "react-icons/tb";

const UpdateTailorComponent = ({ id, t_name, t_tel }) => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [updatedName, setUpdatedName] = useState(t_name);
  const [updatedTel, setUpdatedTel] = useState(t_tel);
  const [adding, setAdding] = useState(false);
  const [updating, setUpdating] = useState(false);

  const addTailor = async () => {
    try {
      setAdding(true);

      const { error } = await supabaseClient
        .from("tailors")
        .insert([{ name, tel }])
        .select();

      if (error) {
        throw new Error(`Something went wrong: `, error.message);
      }
      if (!error) {
        toast.success("Added successfully", {
          duration: 5000,
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
      setAdding(false);
    }
  };

  const updateTailor = async () => {
    try {
      setUpdating(true);

      const { error } = await supabaseClient
        .from("tailors")
        .update({ name: updatedName, tel: updatedTel })
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
      }
    } catch (error) {
      console.log("Error Msg: ", error.message);
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div className='w-full'>
      <div className='mx-auto w-full max-w-md rounded-2xl bg-white p-2 flex flex-col gap-4'>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex w-full items-center justify-between rounded-lg bg-[#55c694] px-4 py-3 text-left font-medium text-white hover:bg-[#55c694]/70 focus:outline-none focus-visible:ring focus-visible:ring-[#55c694]/75'>
                <span>Add a tailor</span>
                <TbChevronUp
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className='px-4 pb-8 pt-4 text-sm text-gray-500'>
                <div className='flex flex-col gap-3'>
                  <div className='text-sm'>
                    <label>Name</label>
                    <input
                      type='text'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className='border outline-none rounded-xl w-full py-2 px-3 ring-1 ring-inset ring-[#55c694] focus:ring-2 focus:ring-inset focus:ring-[#55c694]/80'
                    />
                  </div>
                  <div className='text-sm'>
                    <label>Tel</label>
                    <input
                      type='tel'
                      value={tel}
                      onChange={(e) => setTel(e.target.value)}
                      className='border outline-none rounded-xl w-full py-2 px-3 ring-1 ring-inset ring-[#55c694] focus:ring-2 focus:ring-inset focus:ring-[#55c694]/80'
                    />
                  </div>
                  <div className=''>
                    <button
                      onClick={addTailor}
                      className='flex items-center justify-center gap-4 py-2.5 mt-2 font-medium tracking-wider rounded-xl w-full bg-black/10 text-black'>
                      {adding ? (
                        <>
                          <CgSpinnerAlt className='text-xl animate-spin' />{" "}
                          <span>Adding</span>
                        </>
                      ) : (
                        "Add"
                      )}
                    </button>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex w-full items-center justify-between rounded-lg bg-[#55c694] px-4 py-3 text-left font-medium text-white hover:bg-[#55c694]/70 focus:outline-none focus-visible:ring focus-visible:ring-[#55c694]/75'>
                <span>Update tailor data</span>
                <TbChevronUp
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className='px-4 pb-2 pt-4 text-sm text-gray-500'>
                <div className='flex flex-col gap-3'>
                  <div className='text-sm'>
                    <label>Name</label>
                    <input
                      type='text'
                      value={updatedName}
                      onChange={(e) => setUpdatedName(e.target.value)}
                      className='border outline-none rounded-xl w-full py-2 px-3 ring-1 ring-inset ring-[#55c694] focus:ring-2 focus:ring-inset focus:ring-[#55c694]/80'
                    />
                  </div>
                  <div className='text-sm'>
                    <label>Tel</label>
                    <input
                      type='tel'
                      value={updatedTel}
                      onChange={(e) => setUpdatedTel(e.target.value)}
                      className='border outline-none rounded-xl w-full py-2 px-3 ring-1 ring-inset ring-[#55c694] focus:ring-2 focus:ring-inset focus:ring-[#55c694]/80'
                    />
                  </div>
                  <div className=''>
                    <button
                      onClick={updateTailor}
                      className='flex items-center justify-center gap-4 py-2.5 mt-2 font-medium tracking-wider rounded-xl w-full bg-black/10 text-black'>
                      {updating ? (
                        <>
                          <CgSpinnerAlt className='text-xl animate-spin' />{" "}
                          <span>Updating</span>
                        </>
                      ) : (
                        "Update"
                      )}
                    </button>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default UpdateTailorComponent;
