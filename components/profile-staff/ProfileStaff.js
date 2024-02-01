"use client";

import { supabaseClient } from "@/supabaseClient";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import toast from "react-hot-toast";
import { CgSpinnerAlt } from "react-icons/cg";

const staff = [
  { id: 1, position: "Tailor" },
  { id: 2, position: "Consultant" },
  { id: 3, position: "Beader" },
  { id: 4, position: "Ops Mgr." },
  { id: 5, position: "Others" },
];

const ProfileStaff = ({ id, staff_name, staff_position }) => {
  const router = useRouter();
  const [selected, setSelected] = useState(staff[0]);

  const [name, setName] = useState(staff_name);
  const [position, setPosition] = useState(staff_position);
  const [loading, setLoading] = useState(false);

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const profileStaff = async () => {
    const { error } = await supabaseClient
      .from("staffers")
      .update({ position: selected.position })
      .eq("id", id)
      .select();

    if (error) {
      throw new Error(`Something went wrong: ${error.message}`);
    }
    if (!error) {
      toast.success("Staff profiled successfully", {
        duration: 4000,
        position: "top-center",
        // Aria
        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      });
      router.refresh();
      closeModal();
      // router.back();
    }
  };

  return (
    <>
      <button
        onClick={openModal}
        className='w-full bg-[#55c694]/70 text-white rounded-xl py-2.5'>
        {position ? "Re-profile staff" : "Profile staff"}
      </button>

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
                    Profile Staff
                  </Dialog.Title>
                  <div className='mt-4 text-sm flex flex-col gap-3'>
                    <div>
                      <label>Name</label>
                      <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='w-full px-3 py-2.5 rounded-xl outline-none focus:outline-none focus:ring-2 bg-gray-100'
                      />
                    </div>
                    <div>
                      <label>Position</label>
                      <input
                        type='text'
                        readOnly
                        value={selected.position}
                        className='w-full px-3 py-2.5 rounded-xl outline-none focus:outline-none focus:ring-2 bg-gray-100'
                      />
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
                                `w-1/5  ${
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
                                          className={`whitespace-nowrap  ${
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

                  <div className='mt-6 flex items-center justify-center gap-8'>
                    <button
                      type='button'
                      className='w-full inline-flex justify-center rounded-xl border border-transparent bg-black/10 px-4 py-2 text-sm font-medium text-black hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2'
                      onClick={closeModal}>
                      Close
                    </button>
                    <button
                      onClick={profileStaff}
                      type='button'
                      className='w-full inline-flex justify-center rounded-xl border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'>
                      {loading ? (
                        <div className='flex justify-center gap-3'>
                          <CgSpinnerAlt className='text-xl animate-spin' />
                          Profiling...
                        </div>
                      ) : (
                        "Profile"
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

export default ProfileStaff;
