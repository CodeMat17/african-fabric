"use client";

import { supabaseClient } from "@/supabaseClient";
import { Dialog, Switch, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { AiOutlineLoading } from "react-icons/ai";
import { CgSpinnerAlt } from "react-icons/cg";
import { GiCheckMark } from "react-icons/gi";

const ReadyModal = ({
  id,
  q_c,
  fitting_done,
  ready,
  qc_admin,
  staff_admin,
}) => {
  const router = useRouter();

  const [completedOnDate, setCompletedOnDate] = useState("");

  const [loading, setLoading] = useState(false);

  const [enabled, setEnabled] = useState(ready);

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const confirmReady = async () => {
    setLoading(true);

    const utcDate = new Date(
      completedOnDate.getTime() - completedOnDate.getTimezoneOffset() * 60000
    );
    const isoDate = utcDate.toISOString().toLocaleString();

    try {
      const { error } = await supabaseClient
        .from("customers")
        .update({ ready: enabled, completed_on: isoDate })
        .eq("id", id)
        .select();

      if (error) {
        throw new Error(`Something went wrong: ${error.message}`);
      }
      if (!error) {
        if (enabled) {
          toast.success(`Job is done and confirmed successfully`, {
            duration: 5000,
            position: "top-center",
          });
        } else {
          toast.error(`You just confirmed that the job is not done yet.`, {
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

  return (
    <>
      <button
        disabled={staff_admin != "Manager"}
        type='button'
        onClick={openModal}
        className={`relative ${
          ready ? "bg-[#55c694]" : "bg-[#55c694]/40"
        } w-[25%] mx-auto flex items-center justify-center  text-white disabled:cursor-not-allowed`}>
        Ready
        {fitting_done && !ready && (
          <AiOutlineLoading className='absolute text-xl animate-spin text-red-500' />
        )}
        {ready && (
          <GiCheckMark className='absolute top-1 left-2 text-[15px] text-white' />
        )}
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10 ' onClose={closeModal}>
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

          <div className='fixed inset-0 overflow-y-auto '>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'>
                <Dialog.Panel className='w-full max-w-md h-[500px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg text-center font-medium leading-6 text-gray-900'>
                    Job Ready?
                  </Dialog.Title>
                  <div className='mt-2 text-sm'>
                    {fitting_done ? (
                      <>
                        <div className='flex items-center justify-center gap-4 py-6'>
                          <p>Not ready</p>
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
                                  enabled ? "translate-x-9" : "translate-x-0"
                                }
            pointer-events-none inline-block h-[31px] w-[31px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                              />
                            </Switch>
                          </div>
                          <p>Completed</p>
                        </div>
                        <div className='mb-6 flex items-center justify-center'>
                          <DatePicker
                            // showIcon
                            placeholderText='Completed on...'
                            selected={completedOnDate}
                            onChange={(date) => setCompletedOnDate(date)}
                            dateFormat='MMM dd, yyyy'
                            className='z-50 bg-inherit outline-none text-center text-gray-500 border p-4 w-full rounded-xl cursor-pointer'
                          />
                        </div>
                        <>
                          {completedOnDate ? (
                            <button
                              onClick={confirmReady}
                              className={`bg-[#55c694] w-full rounded-xl py-2.5 text-white`}>
                              {loading ? (
                                <div className='whitespace-nowrap flex items-center justify-center gap-4'>
                                  <CgSpinnerAlt className='text-xl animate-spin' />{" "}
                                  <span>Confirming...</span>
                                </div>
                              ) : (
                                "Confirm Job Status"
                              )}
                            </button>
                          ) : (
                            <button
                              className={`whitespace-nowrap bg-black/30 w-full rounded-xl py-2.5 text-white cursor-not-allowed`}>
                              Confirm Job Status
                            </button>
                          )}
                        </>
                      </>
                    ) : (
                      <p className='text-red-400 text-center mt-3'>
                        To confirm if job is ready, you must have to confirm
                        fitting status first.
                      </p>
                    )}
                  </div>

                  <div className='mt-6 flex justify-end'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-red-600/20 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-600/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
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

export default ReadyModal;
