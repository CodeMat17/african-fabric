"use client";

import { supabaseClient } from "@/supabaseClient";
import { Dialog, Switch, Transition } from "@headlessui/react";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineLoading } from "react-icons/ai";
import { CgSpinnerAlt } from "react-icons/cg";
import { GiCheckMark } from "react-icons/gi";

const Fitting = ({
  id,
  q_c,
  qc_admin,
  staff_admin,
  ready,
  status,
  fitting_date,
  fitting_confirmed_by,
  fitting_done,
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [enabled, setEnabled] = useState(fitting_done);
  const [schedule, setSchedule] = useState(false);

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const confirmFitting = async () => {
    setLoading(true);
    try {
      const { error } = await supabaseClient
        .from("customers")
        .update({ fitting_done: enabled })
        .eq("id", id)
        .select();

      if (error) {
        throw new Error(`Something went wrong: ${error.message}`);
      }
      if (!error) {
        if (enabled) {
          toast.success(`Fitting confirmed`, {
            duration: 5000,
            position: "top-center",
          });
        } else {
          toast.error(`Fitting not done yet.`, {
            duration: 6000,
            position: "top-center",
          });
        }
      }
    } catch (error) {
      console.log("Error Msg: ", error.message);
    } finally {
      router.refresh();
      setLoading(false);
      closeModal();
    }
  };

  const pushForFitting = async () => {
    setLoading(true);
    try {
      const { error } = await supabaseClient
        .from("customers")
        .update({ status: "fitting" })
        .eq("id", id)
        .select();

      if (error) {
        throw new Error(`Something went wrong: ${error.message}`);
      }
      if (!error) {
        toast.success(`Pushed for fitting.`, {
          duration: 5000,
          position: "top-center",
        });

        //  if (enabled) {
        //  } else {
        //    toast.error(`Not pushed for fitting yet.`, {
        //      duration: 6000,
        //      position: "top-center",
        //    });
        //  }
      }
    } catch (error) {
      console.log("Error Msg: ", error.message);
    } finally {
      router.refresh();
      setLoading(false);
      // closeModal();
    }
  };

  return (
    <>
      <button
        disabled={staff_admin != 'Manager'}
        type='button'
        onClick={openModal}
        className={`relative whitespace-nowrap ${
          fitting_done ? "bg-[#55c694]" : "bg-[#55c694]/40"
        } w-[25%] mx-auto flex items-center justify-center  text-white disabled:cursor-not-allowed`}>
        Fitting
        {q_c && !fitting_done && (
          <AiOutlineLoading className='absolute text-xl animate-spin text-red-500' />
        )}
        {fitting_done && (
          <GiCheckMark className='absolute top-1 left-2 text-[15px] text-white' />
        )}
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
            <div className='fixed inset-0 bg-black bg-opacity-25' />
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
                    Fitting Confirmation
                  </Dialog.Title>
                  <div className='py-6 text-sm text-center'>
                    <>
                      {q_c ? (
                        <>
                          {status === "fitting" ? (
                            <>
                              {fitting_date ? (
                                <>
                                  <p className='text-sm'>
                                    Fitting date:{" "}
                                    {dayjs(fitting_date).format(
                                      "MMM DD, YYYY h:mm a"
                                    )}
                                  </p>
                                  <p className='text-sm'>
                                    Scheduled by: {fitting_confirmed_by}
                                  </p>

                                  <div className='mt-2 text-sm'>
                                    <>
                                      <p className='pt-6'>Fitting done?</p>
                                      <div className='flex items-center justify-center gap-4 py-2'>
                                        <p>No</p>
                                        <div>
                                          <Switch
                                            checked={enabled}
                                            onChange={setEnabled}
                                            className={`${
                                              enabled
                                                ? "bg-[#55c694]"
                                                : "bg-gray-400"
                                            }
          relative inline-flex h-[35px] w-[71px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}>
                                            <span className='sr-only'>
                                              Use setting
                                            </span>
                                            <span
                                              aria-hidden='true'
                                              className={`${
                                                enabled
                                                  ? "translate-x-9"
                                                  : "translate-x-0"
                                              }
            pointer-events-none inline-block h-[31px] w-[31px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                            />
                                          </Switch>
                                        </div>
                                        <p>Yes</p>
                                      </div>

                                      {/* {enabled && ( */}
                                      <button
                                        onClick={confirmFitting}
                                        className='bg-[#55c694] w-full rounded-xl py-2.5 text-white'>
                                        {loading ? (
                                          <div className='whitespace-nowrap flex items-center justify-center gap-4'>
                                            <CgSpinnerAlt className='text-xl animate-spin' />{" "}
                                            <span>Confirming...</span>
                                          </div>
                                        ) : (
                                          "Confirm fitting"
                                        )}
                                      </button>
                                      {/* )} */}
                                    </>
                                  </div>
                                </>
                              ) : (
                                "Waiting for fitting schedule."
                              )}
                            </>
                          ) : (
                            <>
                              <div className='flex flex-col items-center justify-center gap-4 pt-6 pb-2'>
                                <div>
                                  <Switch
                                    checked={enabled}
                                    onChange={setEnabled}
                                    className={`${
                                      enabled ? "bg-[#55c694]" : "bg-gray-400"
                                    }
          relative inline-flex h-[35px] w-[71px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}>
                                    <span className='sr-only'>Use setting</span>
                                    <span
                                      aria-hidden='true'
                                      className={`${
                                        enabled
                                          ? "translate-x-9"
                                          : "translate-x-0"
                                      }
            pointer-events-none inline-block h-[31px] w-[31px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                    />
                                  </Switch>
                                </div>
                                <p className='text-sm'>
                                  Ask for fitting date
                                </p>
                              </div>
                              {enabled ? (
                                <button
                                  onClick={pushForFitting}
                                  className='bg-[#55c694] w-full rounded-xl py-2.5 text-white'>
                                  {loading ? (
                                    <div className='whitespace-nowrap flex items-center justify-center gap-4'>
                                      <CgSpinnerAlt className='text-xl animate-spin' />{" "}
                                      <span>Pushing...</span>
                                    </div>
                                  ) : (
                                    "Send"
                                  )}
                                </button>
                              ) : (
                                ""
                              )}
                            </>
                          )}
                        </>
                      ) : (
                        "Quality control must be checked before scheduling for fitting"
                      )}
                    </>
                  </div>

                  <div className='flex justify-center'>
                    <button
                      type='button'
                      className='w-full inline-flex justify-center rounded-xl border border-transparent bg-red-600/20 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-600/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                      onClick={closeModal}>
                      Close
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

export default Fitting;
