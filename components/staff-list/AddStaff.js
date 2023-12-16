"use client";

import { supabaseClient } from "@/supabaseClient";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import toast from "react-hot-toast";
import { BsPersonAdd } from "react-icons/bs";
import { CgSpinnerAlt } from "react-icons/cg";

const staff = [
  { id: 1, position: "Tailor" },
  { id: 2, position: "Consultant" },
  { id: 3, position: "Others" },
];

const AddStaff = () => {
  const router = useRouter();

  const [selected, setSelected] = useState(staff[0]);

  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [loading, setLoading] = useState(false);

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const addTailor = async () => {
    try {
      setLoading(true);

      const { error } = await supabaseClient
        .from("staffers")
        .insert([{ name, tel, position: selected.position }])
        .select();

      if (error) {
        throw new Error(`Something went wrong: ${error.message}`, );
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
        setName("");
        setTel("");
        router.refresh();
        closeModal();
      }
    } catch (error) {
      console.log("Error MSg: ", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className='flex flex-col justify-center items-center mt-2'>
        <button
          type='button'
          onClick={openModal}
          className='flex items-center justify-center gap-3 rounded-xl text-[#55c694] bg-black/5 px-4 py-2 text-sm font-medium hover:bg-black/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75'>
          <BsPersonAdd className='text-2xl' /> <span>Add Staff</span>
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <div className='fixed inset-0 bg-black/25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'>
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg text-center font-medium leading-6 text-gray-900'>
                    Add Staff
                  </Dialog.Title>

                  <div className='mt-4 text-sm flex flex-col gap-3'>
                    <div>
                      <label>Name</label>
                      <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Enter tailor name here'
                        className='w-full py-2 px-3 outline-none border rounded-xl'
                      />
                    </div>
                    <div>
                      <label>Tel</label>
                      <input
                        type='tel'
                        value={tel}
                        onChange={(e) => setTel(e.target.value)}
                        placeholder='Enter tailor contact number here'
                        className='w-full py-2 px-3 outline-none border rounded-xl'
                      />
                    </div>
                    <div>
                      <label>Position</label>
                      <RadioGroup value={selected} onChange={setSelected}>
                        <RadioGroup.Label className='sr-only'>
                          Server size
                        </RadioGroup.Label>
                        <div className='flex items-center justify-between gap-2'>
                          {staff.map((staf) => (
                            <RadioGroup.Option
                              key={staf.position}
                              value={staf}
                              className={({ active, checked }) =>
                                `w-1/3  ${
                                  active
                                    ? "ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300"
                                    : ""
                                }
                  ${checked ? "bg-sky-900/75 text-white" : "bg-white"}
                    relative flex cursor-pointer rounded-lg px-3 py-1 border focus:outline-none`
                              }>
                              {({ active, checked }) => (
                                <>
                                  <div className='flex w-full items-center justify-center'>
                                    <div className='flex items-center'>
                                      <div className='text-sm'>
                                        <RadioGroup.Label
                                          as='p'
                                          className={`  ${
                                            checked
                                              ? "text-white"
                                              : "text-gray-900"
                                          }`}>
                                          {staf.position}
                                        </RadioGroup.Label>
                                        <RadioGroup.Description
                                          as='span'
                                          className={`inline ${
                                            checked
                                              ? "text-sky-100"
                                              : "text-gray-500"
                                          }`}></RadioGroup.Description>
                                      </div>
                                    </div>
                                  
                                  </div>
                                </>
                              )}
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                  </div>

                  <div className='mt-6 flex items-center justify-between'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-xl border border-transparent bg-red-100 px-6 py-2.5 tracking-wide text-sm font-medium text-red-600 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                      onClick={closeModal}>
                      Close
                    </button>
                    <button
                      onClick={addTailor}
                      type='button'
                      disabled={!name || !tel}
                      className='rounded-xl border border-transparent bg-[#55c694] px-6 py-2.5 tracking-wide text-sm font-medium text-white hover:bg-[#55c694]/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 disabled:bg-[#55c694]/20 disabled:text-gray-400 disabled:cursor-not-allowed'>
                      {loading ? (
                        <div className='flex items-center justify-center gap-3'>
                          <CgSpinnerAlt className='text-2xl animate-spin' />{" "}
                          <span>Adding...</span>
                        </div>
                      ) : (
                        "Add"
                      )}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AddStaff;
